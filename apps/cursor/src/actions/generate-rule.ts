"use server";

import { generateRuleRatelimit } from "@/lib/ratelimit";
import { getSession } from "@/utils/supabase/auth";
import { openai } from "@ai-sdk/openai";
import { smoothStream, streamText } from "ai";
import { createStreamableValue } from "ai/rsc";

export async function generateRule(dependencies: string) {
  const session = await getSession();
  if (!session?.user) {
    throw new Error("Authentication required");
  }

  const { success } = await generateRuleRatelimit.limit("api_calls");

  if (!success) {
    throw new Error("Too many requests. Please try again later.");
  }

  const stream = createStreamableValue("");

  (async () => {
    const { textStream } = streamText({
      model: openai("gpt-4o-mini"),
      prompt: `Analyze these dependencies and generate best practices for each major library/framework. Tell the user in the begining that they need to adapt the globs depending on the project. And keep it short and concise. Use this format for each section:

---
name: [framework-name]-best-practices.mdc
description: Best practices and guidelines for [Framework Name]
globs: **/*.{ts,tsx,js,jsx}
---

For example:

---
name: nextjs-best-practices.mdc
description: Best practices for Next.js applications and routing
globs: **/*.{ts,tsx}
---

- Use the App Router for better performance
- Implement proper error boundaries
- Use proper data fetching patterns with suspense

---
name: typescript-best-practices.mdc 
description: TypeScript coding standards and type safety guidelines
globs: **/*.{ts,tsx}
---

- Use strict null checks
- Prefer interface over type
- Use type guards and assertions
- Implement proper type inference

---
name: ui-and-styling-best-practices.mdc
description: Guidelines for UI components and styling with Tailwind/Shadcn
globs: **/*.{ts,tsx,css}
---

- Use Tailwind CSS for styling
- Follow Shadcn UI component guidelines
- Ensure UI is responsive and accessible

Generate separate sections with best practices for each major library/framework found in these dependencies:

${dependencies}

Focus on providing specific, actionable best practices that are unique to each framework/library.`,
      experimental_transform: smoothStream(),
    });

    for await (const delta of textStream) {
      stream.update(delta);
    }

    stream.done();
  })();

  return { output: stream.value };
}
