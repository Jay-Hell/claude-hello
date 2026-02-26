import Anthropic from "@anthropic-ai/sdk";
import * as readline from "readline";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const name = await new Promise<string>((resolve) => rl.question("What is your name? ", resolve));
rl.close();

const client = new Anthropic();

const stream = await client.messages.stream({
  model: "claude-opus-4-6",
  max_tokens: 1024,
  messages: [
    {
      role: "user",
      content: `Say hello to ${name} in one sentence.`,
    },
  ],
});

for await (const chunk of stream) {
  if (
    chunk.type === "content_block_delta" &&
    chunk.delta.type === "text_delta"
  ) {
    process.stdout.write(chunk.delta.text);
  }
}

process.stdout.write("\n");
