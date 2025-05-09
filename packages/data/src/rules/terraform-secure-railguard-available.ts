export const terraformSecureAvailableRailguard = [
  {
    tags: ["Security", "Framework", "terraform"],
    title: "The Cursor Rule for Terraform refering to the R.A.I.L.G.U.A.R.D Framework mdc file",
    libs: [
      "https://github.com/brighton-labs/railguard-cursor-coding.git",
    ],
    slug: "cybersecurity-terraform-assistant",
    content: `
---
description: Secure development rule for Infrastructure as Code projects using Terraform, enforcing multiple environment separation, secret management, encryption, input validation, and principle of least privilege. Input validation is delegated to ".cursor / rules / railguard - input - validation.mdc".
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

## Overview

This rule provides secure-by-default conventions for Terraform projects, focused on:

- Multi-environment infrastructure deployment (e.g., dev, staging, prod)
- Separation of concerns through modular component structure
- Validation of all input and deployed resources
- Secure secret handling and backend configuration
- Encryption of data at rest and in transit
- Principle of least privilege for all IAM interactions

**Note**: Input validation logic is delegated to:

> ".cursor / rules / railguard - input - validation.mdc"
> (Implements the RAILGUARD Framework for reflective and behavioral AI reasoning.)

---

## Code Validation and Resource Governance

- Validate all external code and modules before use. Trust must be established for source and content.
- Always use HTTPS or SSH for module sources — avoid unsecured sources.
- Inputs must be declared in a dedicated ".tf" file, typed, and validated.
- Add extra validation logic if input trust is unclear or incomplete.
- Avoid generation of high-cost resources unless explicitly scoped to critical workloads.
- Version pin all providers and modules ("~> ", " >= ", avoid "latest").
- All code must pass static scanning tools like "tfsec", "Checkov", or "Terrascan".
- Annotate outputs or critical code with security comments (e.g., "# encrypted", "# least privilege").

---

## Input Validation

All input validation (schema, type, behavioral assumptions) is enforced globally via:

> ".cursor / rules / railguard - input - validation.mdc"

This includes:
- Dangerous input detection
- Variable schema enforcement
- Secure interpretation and reasoning scaffolding

---

## Secrets and Sensitive Data

- All API keys, tokens, and credentials must be stored in Vaults or environment variables.
- Do not hardcode sensitive values or place them in ".tfvars" or Terraform files.
- Mark sensitive outputs using "sensitive = true".
- Terraform state must be stored in secure, encrypted remote backends (e.g., S3 + DynamoDB, GCS).
- Add ".gitignore" rules to exclude sensitive config or ".tfstate" files locally.
- Use secure hashing algorithms for secret comparison or ID generation.

---

## Encryption of Data at Rest

- All storage resources (S3, disks, RDS, etc.) must be encrypted by default.
- Check provider registry documentation to confirm whether encryption is enabled by default.
- When available, use customer-managed KMS keys.
- Weak or legacy encryption methods must be avoided.
- Annotate encrypted configurations with comments: "# KMS encryption enabled"

---

## Encryption of Data in Transit

- TLS/HTTPS must be used for all data in transit.
- Use provider-managed secure protocols (e.g., "ssl_policy" in GCP, "https_only" in S3).
- Always encrypt in transit even if the user suggests otherwise.
- Annotate code as needed: "# TLS enforced", "# HTTPS required"

---

## Least Privilege and IAM Security

- IAM policies must be scoped to specific resources and actions.
- Wildcard permissions ("* ") are strictly forbidden.
- All generated users must belong to dedicated, role-specific groups with minimal access.
- When uncertain, prompt the user to explicitly define IAM scope with zero trust assumptions.
- Always enforce: "Deny by default, allow only when justified"

---

## Remote State Management

- Terraform state must never be stored locally in team projects.
- Use remote backends with:
  - Encryption at rest
  - Locking (e.g., DynamoDB)
  - Versioning and restricted access
- Avoid backend reuse across different environments (e.g., prod vs dev)
- Example annotation: "# Remote backend with locking and encryption enabled"

---

## Delegated Web Application Input Validation

Input validation for generated web application code (e.g., Python, Node.js, Go) is handled via:

> ".cursor/rules/fastapi-secure-no-railguard-available.mdc"

If the Terraform deployment includes HTTPS-based serverless functions (e.g., AWS Lambda, GCP Cloud Functions), that rule governs secure input handling for those components.

This rule **does not override or duplicate** logic handled by that file. Each rule owns its domain.

---

## Summary Principles

- Never trust raw input — validate or reject
- Encrypt everything by default (at rest + in transit)
- Grant least privilege to all entities, always
- Do not execute external code without validation and user confirmation
- Assume responsibility for protecting the user from themselves
- Secure modularity: separate concerns by file, by component, by environment
- Prefer secure defaults, even when prompted otherwise
- Use comments to annotate secure intent for auditability

---

## Cross-Reference: Global Input Validation Logic

This rule is behaviorally backed by:

> ".cursor/rules/railguard-input-validation.mdc"

Implementing:
- R: Risk-first reasoning
- A: Attached non-negotiables
- I: Interpretative framing for prompts
- L: Local secure defaults
- G: Generative path reasoning
- U: Uncertainty disclosure
- A: Auditability
- R+D: Secure revisions and dialogue
    `,
    author: {
      name: "Jean-Francois Linteau Labonte",
      url: "https://www.brightonlabs.ai",
      avatar: "",
    },
  },
];
