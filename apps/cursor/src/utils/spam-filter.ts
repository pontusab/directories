import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { z } from "zod";

export async function checkSpam(content: string) {
  const { object } = await generateObject({
    model: openai("gpt-4o-mini"),
    schema: z.object({
      isSpam: z.boolean(),
    }),
    prompt: `Analyze if the following content is spam. Content: "${content}"`,
  });

  return object.isSpam;
}
