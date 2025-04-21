export const javaSecureDatabaseNoRailguard = [
  {
    tags: ["Security", "Framework", "Java", "DB"],
    title: "The Cursor Rule for Java using DB embedding directly in its core the R.A.I.L.G.U.A.R.D Framework",
    libs: [
      "https://github.com/brighton-labs/railguard-cursor-coding.git",
    ],
    slug: "cybersecurity-java-db-railguard-embedded-assistant",
    content: `
---
description: Enforces secure and auditable database access patterns in Java applications by preventing SQL injection, enforcing safe JDBC and ORM usage, protecting credentials, and guiding logging and configuration practices.
globs: ["**/*.java"]
alwaysApply: true
---

# R: Risk First
The goal of this rule is to ensure safe, auditable, and robust database access in Java applications.

The following risks are mitigated:
- SQL injection due to unsafe query construction
- Leaking credentials in source code or logs
- Poor ORM configuration leading to unintended DB writes or untracked queries
- Unsafe exception handling that can crash critical database access logic
- Lack of input validation before constructing dynamic queries

This rule teaches the LLM to reason about these concerns even when prompts are vague (for example, “connect to DB” or “get user by name”).

# A: Attached Constraints
- Never use string concatenation to build SQL queries.
- Avoid direct use of "Statement". Always use "PreparedStatement" or ORM-based parameterization.
- Never log raw SQL queries or parameters with user input.
- Never hardcode sensitive credentials (for example, DB password) into the codebase.
- Avoid unguarded auto-commits or DB writes without transactional control.

# I: Interpretative Framing
- If the prompt asks for DB interaction, assume secure query logic and credential separation are expected.
- If prompted to use JDBC, enforce "PreparedStatement" and parameter binding.
- If using Spring Boot or Spring Data JPA, assume proper use of annotations and entity mapping.
- Credentials must always be externalized via environment variables or secret vaults.

// Ambiguity Handling:
- For prompts like “get user by name,” enforce input validation and parameter binding.
- If the developer uses raw SQL with hardcoded values, suggest a secure, param-based version and note config guidelines.

# L: Local Defaults
- Assume the use of Spring Boot + Spring Data JPA as the ORM layer.
- If JDBC is used, assume modern usage with "PreparedStatement".
- Assume the following environment variables are configured:
  - "SPRING_DATASOURCE_URL"
  - "SPRING_DATASOURCE_USERNAME"
  - "SPRING_DATASOURCE_PASSWORD"
- Default log level is set to suppress SQL query printing or sanitize it via masking.

# G: Generative Path Checks
1. Determine if the code requires a DB interaction.
2. If yes, ask:
   - Is an ORM (for example, JPA) present?
   - If no ORM: use "PreparedStatement", and validate input before executing queries.
3. Ensure no sensitive values are printed or leaked.
4. Wrap all JDBC interactions in a try-with-resources block and catch "SQLException".
5. If applicable, encapsulate DB writes in a transactional method.

// SQL Injection Checklist:
// - Avoid string concatenation in SQL queries
// - Always use parameter binding
// - Validate all user inputs

# U: Uncertainty Disclosure
- If unsure about ORM usage or correct JDBC syntax, add:
  _"Confirm whether Spring Data JPA is configured for this application."_
- If unsure whether a column requires escaping or transformation, suggest a review.
- If hardcoded credentials are detected, recommend secure loading and point to Spring Boot docs.

# A: Auditability
- Add comments such as:
  - "// Using PreparedStatement to protect against SQL injection"
  - "// Credentials loaded from environment configuration"
  - "// Logging sanitized or omitted for sensitive operations"
- Encourage use of annotations:
  - "@Entity", "@Table", "@Column", "@Transactional"

# R+D: Revision + Dialogue
- "/explain-db-security": Describe the rationale behind using parameterized queries or JPA.
- "/revise-for-db-safety": Regenerate unsafe raw query examples using secure templates.
- "/secure-connection-config": Generate ".properties" or "application.yml" snippets to externalize DB credentials.

// Testing Guidance:
- Run static analysis using SonarQube or SpotBugs
- Validate DB behavior against injection payloads like "' OR 1=1 --"
- Ensure no secrets are leaked in logs during runtime

// Example Reference:
- [JDBC PreparedStatement API](https://docs.oracle.com/javase/tutorial/jdbc/basics/prepared.html)
- [Spring Data JPA Documentation](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/)
- [Hibernate ORM Documentation (Official)](https://hibernate.org/orm/documentation/)
- [Hibernate @Entity and Annotation Reference](https://docs.jboss.org/hibernate/orm/current/userguide/html_single/Hibernate_User_Guide.html#chapters-annotations)
- [Spring Boot Security](https://docs.spring.io/spring-boot/how-to/security.html#page-title)
- [Spring Boot Environment Variables](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config)
- [Logging in Spring Boot](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.logging)
- [OWASP SQL Injection Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)
    `,
    author: {
      name: "Ken Huang",
      url: "https://www.brightonlabs.ai",
      avatar: "",
    },
  },
];
