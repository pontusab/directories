export const csharpSecureDatabaseNoRailguard = [
  {
    tags: ["Security", "Framework", "C#", "DB"],
    title: "The Cursor Rule for C# using Databases embedding directly in its core the R.A.I.L.G.U.A.R.D Framework",
    libs: [
      "https://github.com/brighton-labs/railguard-cursor-coding.git",
    ],
    slug: "cybersecurity-csharp-db-railguard-embedded-assistant",
    content: `
--
description: Enforces secure database access in C# applications using the full RAILGUARD framework. Covers safe use of ADO.NET, Entity Framework Core, parameterized queries, credential management, and logging hygiene.
globs: ["**/*.cs"]
alwaysApply: true
---

# R: Risk First
The goal of this rule is to ensure **safe, auditable, and robust database access** in C# applications.

Key risks mitigated:
- SQL injection via unsafe query strings
- Hardcoded or leaked credentials
- Misconfigured or unsafe ORM operations
- Lack of input validation in query construction
- Logging of sensitive database values

This rule prepares the model to reason securely about database operations, regardless of whether the user explicitly mentions injection, credentials, or ORM.

# A: Attached Constraints
- Never use string concatenation to build SQL queries.
- Never log raw SQL statements containing user-provided data.
- Never hardcode sensitive values (for example, DB credentials) in source code.
- Use "SqlCommand" with "Parameters.Add()" or LINQ-to-Entities.
- ORM operations must use proper configuration and input protection.
- Always wrap raw ADO.NET operations in a "try/catch" block and check exceptions.

# I: Interpretative Framing
- If the prompt involves DB access, assume secure credential loading and parameter binding are required.
- If EF Core is mentioned or used, enforce use of LINQ and strongly typed models.
- If manual SQL is required, enforce use of "SqlCommand.Parameters.Add()" and no dynamic string interpolation.
- If secrets are referenced, redirect to using ".NET Secret Manager", Azure Vault, or environment-based config.

// Examples:
- If the user says “select user by name,” the model must return code that uses a parameterized query.
- If "SqlConnection" is used, assume a config-based "ConnectionString" source.

# L: Local Defaults
- ORM: Entity Framework Core with "DbContext", "DbSet<T>"
- Credential source: "appsettings.json" or environment variables
- Default DB logging behavior should avoid showing queries with raw input

"""json
// appsettings.json
"ConnectionStrings": {
  "DefaultConnection": "Server=...;Database=...;User Id=...;Password=...;"
}
"""

# G: Generative Path Checks
1. Determine if ORM is present (EF Core)
2. If not, enforce parameterized query via "SqlCommand"
3. Sanitize all input values before adding them as parameters
4. Never build SQL using string interpolation ("$"..."") or "+"
5. Ensure try-catch-finally or using-disposal pattern is applied
6. Check logging or error messages for any exposed sensitive data

# U: Uncertainty Disclosure
- If the ORM structure is unclear, insert:
  _"// Confirm if Entity Framework Core is available in this project"_
- If a secret or inline password is present, suggest using a secure credential vault
- If "context.Users.First(...)" contains a dynamic value, flag for validation

# A: Auditability
- Use inline comments to highlight security-related practices:
  - "// Using SqlCommand with parameters to prevent SQL injection"
  - "// Loading credentials from config"
  - "// ORM query wrapped in transaction"
- Suggest static analysis tools (for example, Roslyn, SonarLint) for enforcement

# R+D: Revision + Dialogue
- "/explain-db-security": Provide rationale behind secure query or EF Core usage
- "/revise-for-db-safety": Convert unsafe string-based queries into parameterized or ORM-safe form
- "/secure-connection-config": Output a recommended structure for loading connection strings securely

// Testing guidance:
- Validate model-generated code with injection payloads ("' OR 1=1 --")
- Use ".NET user-secrets" for local credential testing
- Check that no secrets or raw input appear in logs during runtime

// References:
- [SqlCommand.Parameters](https://learn.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlcommand.parameters)
- [Entity Framework Core Documentation](https://learn.microsoft.com/en-us/ef/core/)
- [ASP.NET Core Configuration](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/)
- [ASP.NET Core User Secrets](https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets)
- [Logging in .NET with Serilog](https://serilog.net/)
- [EF Core Transactions](https://learn.microsoft.com/en-us/ef/core/saving/transactions)
- [Secure Coding Guidelines (OWASP)](https://cheatsheetseries.owasp.org/)
    `,
    author: {
      name: "Albert Hui",
      url: "https://www.brightonlabs.ai",
      avatar: "",
    },
  },
];
