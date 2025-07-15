export const javaSecureDatabaseRailguard = [
  {
    tags: ["Security", "Framework", "Java", "DB"],
    title: "The Cursor Rule for Java using DB refering to the R.A.I.L.G.U.A.R.D Framework mdc file",
    libs: [
      "https://github.com/brighton-labs/railguard-cursor-coding.git",
    ],
    slug: "cybersecurity-java-using-db-assistant",
    content: `
---
description: Enforces secure database access in Java applications with input validation and behavioral logic delegated to ".cursor/rules/railguard-input-validation.mdc". Focuses on JDBC/ORM usage, secure configuration, and logging best practices.
globs: ["**/*.java"]
alwaysApply: true
---

## Overview
This rule applies secure-by-default practices for database interactions in Java codebases, particularly when using:
- JDBC (e.g., "PreparedStatement", "Connection")
- Spring Data JPA (e.g., "@Entity", repository interfaces)

It assumes ".cursor/rules/railguard-input-validation.mdc" is available and active to handle reasoning, redline constraints, and validation logic for all user input.

---

## JDBC + ORM Practices
- Always use "PreparedStatement" and parameterized queries for manual SQL
- Prefer Spring Data JPA repositories when using Spring Boot
- Annotate entity classes with "@Entity", "@Table", and relevant JPA annotations
- Use "@Transactional" for atomic operations
- Sanitize and validate input before constructing dynamic queries (delegated)

---

## Secure Configuration
- All credentials must be sourced from:
  - "SPRING_DATASOURCE_URL"
  - "SPRING_DATASOURCE_USERNAME"
  - "SPRING_DATASOURCE_PASSWORD"
- Use ".env", "application.properties", or vault integrations
- Never include secrets in source code or version control

---

## Logging Best Practices
- Avoid logging SQL queries with injected user data
- Sanitize exception messages before logging them
- Use "SLF4J" or "Logback" for structured logging with sensitive field masking if possible

---

## Secure Patterns
Use inline comments to annotate secure behavior:
- "// Using PreparedStatement with parameterized query"
- "// Credentials loaded from external config"
- "// ORM usage with @Transactional"

---

## Example
"""java
String query = "SELECT * FROM users WHERE username = ?";
try (PreparedStatement stmt = conn.prepareStatement(query)) {
    stmt.setString(1, username);
    try (ResultSet rs = stmt.executeQuery()) {
        while (rs.next()) {
            // Process result
        }
    }
} catch (SQLException e) {
    logger.warn("Query failed", e); // Avoid exposing sensitive values
}
"""

---

## Reference Rule
Input validation, threat modeling, and secure reasoning are governed by:
> ".cursor/rules/railguard-input-validation.mdc"

This rule assumes that any dynamic values passed to queries or injected via APIs are filtered and validated per that rule.

---

## Java References
- [JDBC PreparedStatement API](https://docs.oracle.com/javase/tutorial/jdbc/basics/prepared.html)
- [Spring Data JPA Documentation](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/)
- [Hibernate ORM Documentation (Official)](https://hibernate.org/orm/documentation/)
- [Hibernate @Entity and Annotation Reference](https://docs.jboss.org/hibernate/orm/current/userguide/html_single/Hibernate_User_Guide.html#chapters-annotations)
- [Spring Boot Security](https://docs.spring.io/spring-boot/how-to/security.html#page-title)
- [Spring Boot Environment Variables](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config)
- [Logging in Spring Boot](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.logging)
- [OWASP SQL Injection Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)

---

## Dev Commands
- "/revise-for-db-safety" — Refactor raw queries or unsafe JDBC patterns
- "/secure-db-config" — Generate a secure Spring Boot DB configuration block
- "/explain-db-security" — Provide reasoning for ORM vs JDBC choices

---

This rule is scoped to secure usage patterns — it assumes validation, context framing, and behavioral enforcement is provided globally.
    `,
    author: {
      name: "Ken Huang",
      url: "https://www.distributedapps.ai",
      avatar: "",
    },
  },
];
