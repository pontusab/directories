export const nextjsTypescriptSecureRailguard = [
  {
    tags: ["Security", "Framework", "nextjs", "typescript"],
    title: "The Cursor Rule for Typescript and NextJS refering to the R.A.I.L.G.U.A.R.D Framework mdc file",
    libs: [
      "https://github.com/brighton-labs/railguard-cursor-coding.git",
    ],
    slug: "cybersecurity-nextjs-typescript-assistant",
    content: `
---
description: Enforce secure, idiomatic TypeScript and Next.js App Router conventions using React, Shadcn UI, Radix, and Tailwind — with delegated input validation logic
globs: ["**/*.ts", "**/*.tsx"]
alwaysApply: true
---

## Overview

This rule guides AI to generate secure and modern fullstack code using:
- Functional TypeScript
- Next.js App Router with React Server Components
- Tailwind CSS and Shadcn UI
- Server/client separation
- Component modularity and security-conscious practices

Note: For all input handling, validation, and sanitation logic — refer to ".cursor / rules / railguard - input - validation.mdc", which contains full RAILGUARD enforcement.

---

## TypeScript & Code Style

- Use concise, technical TypeScript with accurate, real-world examples.
- Follow functional, declarative programming; avoid class-based components.
- Prefer interfaces over types; avoid enums in favor of object maps.
- Favor composition, short reusable functions, and named exports.

## Structure & Naming

- Directory structure: "lowercase- dash - separated" (for example, "components / auth - form")
- Files should follow: main component → subcomponents → helpers → static content → types.
- Use "function" keyword for pure functions and utility logic.
- Descriptive variable names with auxiliary verbs: "isLoading", "hasPermission", "hasError".

---

## UI / Styling (Tailwind + Shadcn)

- Use Shadcn UI + Radix primitives for accessible, customizable components.
- Implement responsive design via Tailwind's mobile-first grid system.
- Use semantic HTML when rendering UI components.

---

## Performance Optimization

- Limit "use client"; prioritize React Server Components and server-only logic.
- Use "dynamic()" for deferring non-critical components.
- Wrap interactive components in "< Suspense fallback = { ...} > ".
- Optimize images: use "next / image", enable lazy loading, and define dimensions to avoid CLS.

---

## Security Best Practices

- Never expose secrets, tokens, or ".env" values in client components.
- Use environment variables only in server-side code (for example, "app / ", server actions).
- If handling sensitive tokens or session data, place logic in server actions or middleware.
- Avoid "any", "unknown", or loosely typed input/output boundaries.
- Avoid use of "dangerouslySetInnerHTML". If needed, explicitly sanitize content and flag with a comment.
- When creating "< a target = "_blank" > " links, always include "rel = "noopener noreferrer"".

---

## Cross-Reference: Global Validation Logic

All runtime input validation, including:
- API body parsing
- Form field validation
- Query parameter validation
- Schema-based inference and sanitation

...should be handled by the global rule:

> ".cursor / rules / railguard - input - validation.mdc"
> _(based on the RAILGUARD security reasoning framework)_

This file ensures secure parsing with "zod", structured reasoning steps, and auditability for all user-facing input.

---

## Example Behavior in Code

Example: Secure server-side validation (recommended):

"""tsx
// Input validated with zod inside a server action
export async function LoginFormAction(formData: FormData) {
  const result = schema.safeParse({ email: formData.get('email') })
  if (!result.success) return { error: 'Invalid email' }
}
"""
    `,
    author: {
      name: "Jean-Francois Linteau Labonte",
      url: "https://www.brightonlabs.ai",
      avatar: "",
    },
  },
];
