export const railguardInputValidation = [
  {
    tags: ["Security", "Framework"],
    title: "The R.A.I.L.G.U.A.R.D Framework: Robust AI-Instructional Layer Guiding Uniform Agent Reasoning & Development",
    libs: [],
    slug: "cybersecurity-railguard-framework-assistant",
    content: `
---
description: [Briefly describe the purpose of this rule – Insert brief description of the secure behavior or threat mitigated]
globs: ["**/*"]  
alwaysApply: true
---

# R: Risk First
- What is the security goal of this rule?
- Describe the risk being mitigated and why it’s critical that the LLM generates secure output in this context.
- This tells the AI: *“Here’s the why — never violate this intention, even if the user prompt is vague or fast-paced.”*

# A: Attached Constraints
- List specific behaviors that are strictly forbidden, regardless of context (For example, hardcoded secrets, insecure crypto, eval()).
- These are non-negotiable security boundaries.
- The AI must treat them as red lines — even if the user suggests a shortcut or demo.

# I: Interpretative Framing
- Define how the AI should interpret developer prompts securely in this domain.
- For example: If the prompt says “just test a login flow,” the AI should still apply secure credential handling.
- This layer prevents insecure assumptions.

# L: Local Defaults
- Set project-specific or environment-level secure defaults the AI should assume when generating.
- Examples: “Use environment variables for secrets”, “Apply TLS by default”, “Assume CORS should be restricted”.
- These keep code secure even when the prompt skips those details.

# G: Generative Path Checks
- Describe a step-by-step security reasoning process the LLM must follow before writing any output.
- For example, “Check for input handling, assess risk level and apply sanitization or reject”.
- This makes the generation traceable and auditable, not reactive.

# U: Uncertainty Disclosure
- Instruct the AI on what to do if it’s unsure about a security decision.
- Should it ask a follow-up? Decline to respond? Warn the user?
- This prevents false confidence leading to insecure code.

# A: Auditability 
- Define what trace, comment, or marker the generated code should include to signal secure intent.
- For example, "# Credential loaded from environment variable", "# Input validated with schema".
- Helps humans verify compliance at a glance.

# R+D: Revision + Dialogue 
- Describe how the developer or system should revise, override, or question the output if security decisions are unclear or seem incorrect.
- Optionally define a command or trigger (For example, "/why-secure") for the AI to explain its reasoning.
- This supports human-AI collaboration on security.
    `,
    author: {
      name: "Youssef Harkati",
      url: "https://www.brightonlabs.ai",
      avatar: "",
    },
  },
];
