export const terraformSecureNoAvailableRailguard = [
  {
    tags: ["Security", "Framework", "terraform"],
    title: "The Cursor Rule for Terraform embedding directly in its core the R.A.I.L.G.U.A.R.D Framework",
    libs: [],
    slug: "cybersecurity-terraform-railguard-embedded-assistant",
    content: `
---
description: Standalone secure development rule for Terraform-based Infrastructure as Code projects. Enforces input validation, least privilege, secrets handling, encryption, and best practices without relying on the RAILGUARD framework.
globs: [
  "**/*.tf",
  "**/*.tfvars",
  "**/*.auto.tfvars",
  "**/*.tf.json",
  "**/*.tfbackend",
  "**/*.hcl",
  "**/.terraform.lock.hcl",
  "**/.terraformrc"
]
alwaysApply: true
---

# R: Risk First
- Terraform governs critical cloud infrastructure. Misconfigurations or insecure defaults can expose sensitive data, escalate privileges, or open up attack vectors.
- This rule ensures resources are validated, encrypted, access-scoped, and secrets handled securely.
- Secure defaults must apply even when user prompts are vague or casually phrased.

# A: Attached Constraints
- Do not hardcode secrets, tokens, passwords, or sensitive IDs.
- Do not use wildcard IAM permissions ("*") in actions or resources.
- Do not expose resources publicly ("0.0.0.0/0", "http", "public-read") unless explicitly justified.
- Do not use loosely typed or unvalidated inputs.
- Use "sensitive = true" for outputs with secrets.
- Enforce encryption at rest and in transit on all applicable resources.

# I: Interpretative Framing
- Treat all Terraform prompts as production-relevant unless explicitly stated otherwise.
- If no backend, region, or permission scope is specified, default to the most secure option.
- Avoid assumptions like "temporary" or "demo" deployments — all code is security-critical.

# L: Local Defaults
- Default to remote state with locking and encryption (e.g., S3 + DynamoDB).
- Assume KMS encryption where available.
- Assume TLS is always enabled for network-facing services.
- Separate environments via workspaces or folder structure.
- Use pinned versions for all providers and modules (never "latest").

# G: Generative Path Checks
1. Is the input validated (type + constraints)?
2. Are secrets handled via vault/env and outputs marked sensitive?
3. Is encryption configured at rest and in transit?
4. Are IAM policies tightly scoped?
5. Is state secured remotely?
6. Does the config isolate environments?
7. Are default ports or exposures justified?

# U: Uncertainty Disclosure
- If unsure whether a resource should be public or private, **default to private**.
- If permissions seem too broad or unclear, **ask the user for scope**.
- When encryption, validation, or backend config is missing, **inject secure defaults** with explanatory comments.

# A: Auditability
- Add comments to signal security choices:
  - "# encrypted with KMS"
  - "# backend with locking enabled"
  - "# IAM with least privilege"
  - "# input validated"
  - "# sensitive output"
- These help humans and scanners quickly assess compliance.

# R+D: Revision + Dialogue
- Allow users to override decisions with "/explain-secure" or clarify scope via prompts.
- If a configuration appears insecure, suggest a hardened alternative.
- Encourage secure reasoning paths even under vague or fast-paced prompts.

---

This rule enforces full RAILGUARD-style reasoning for Terraform, including validation, encryption, least privilege, modularity, and secure infrastructure defaults — all without requiring external dependencies.
    `,
    author: {
      name: "Jean-Francois Linteau Labonte",
      url: "https://www.brightonlabs.ai",
      avatar: "",
    },
  },
];
