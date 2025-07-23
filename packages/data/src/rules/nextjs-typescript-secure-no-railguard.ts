
export const nextjsTypescriptSecureNoAvailableRailguard = [
  {
    tags: ["Security", "Framework", "NextJS", "Typescript"],
    title: "The Cursor Rule for NextJS and Typescript embedding directly in its core the R.A.I.L.G.U.A.R.D Framework",
    libs: [
      "https://github.com/brighton-labs/railguard-cursor-coding.git",
    ],
    slug: "cybersecurity-nextjs-typescript-railguard-embedded-assistant",
    content: `
---
description: Best practices for writing secure, performant, and consistent TypeScript + Next.js code with React Server Components, Tailwind, and Shadcn UI
globs: ["**/*.ts", "**/*.tsx"]
alwaysApply: true
---

# R: Risk First
- The goal of this rule is to ensure that all TypeScript and Next.js code is not only performant, but also secure, particularly across input handling, data fetching, rendering contexts, and client/server boundaries.

# A: Anchored Constraints
- Never expose secrets or tokens in the client bundle.
- Never process authentication logic or sensitive tokens on the client side.
- Never trust user input without validation and sanitization.
- Avoid use of "dangerouslySetInnerHTML" unless explicitly sanitized.
- Avoid the use of "any" and "unknown" in type declarations unless absolutely necessary and justified with a comment.

# I: Interpretive Framing
- If generating an API handler, assume it may be hit by a malicious actor — include schema validation (for example, with "zod") and return standardized error responses.
- If generating form components, treat all input as untrusted and encode output accordingly.
- If building routes, assume URL parameters may be altered with anything insecure. Apply "z.string().safeParse(...)" or equivalent validation.

# L: Local Defaults
- Use "zod" or "valibot" for runtime validation of all inputs (form values, API payloads, URL params).
- Use environment variables via "process.env" only inside server components or server actions.
- Apply HTTPS and secure cookies ("HttpOnly", "Secure", "SameSite=Strict") in all auth flows.
- Use "Content-Security-Policy" headers for enhanced front-end protection.
- Always set "rel="noopener noreferrer"" for links with "target="_blank"".

# G: Generative Path Checks
1. If working with input (forms, URL params, body): validate with a runtime schema before processing.
2. If handling authentication or secrets: ensure logic remains on the server side.
3. If displaying user-generated content: escape or sanitize output.
4. If using 3rd-party packages: prefer well-maintained libraries with no known CVEs.
5. Always explain in comments where secure handling occurs (for example, "// Validated input with zod").

# U: Uncertainty Disclosure
- If unsure whether a component is server-safe or contains sensitive logic, generate a comment for the developer:
  _“// This component uses potential client-side logic. Please confirm this does not handle secrets or tokens.”

# A: Auditability
- Add comments like:
  - "// Validated with zod before usage"
  - "// Handled in server component for secure access to env vars"
  - "// Avoided client exposure of sensitive props"
- Mark risky sections (for example, "dangerouslySetInnerHTML") with "// Requires explicit sanitization".

# R+D: Revision + Dialogue Hooks
- Provide devs with "/why-secure" to explain how the generated code meets RAILGUARD constraints.
- Support "/revise-for-security" to re-generate if the AI suspects risky logic.
    `,
    author: {
      name: "Jean-Francois Linteau Labonte",
      url: "https://www.brightonlabs.ai",
      avatar: "",
    },
  },
];
