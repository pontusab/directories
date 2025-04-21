export const csharpSecureDatabaseRailguard = [
  {
    tags: ["Security", "Framework", "C#", "DB"],
    title: "The Cursor Rule for C# using DB refering to the R.A.I.L.G.U.A.R.D Framework mdc file",
    libs: [],
    slug: "cybersecurity-csharp-using-db-assistant",
    content: `
---
description: Guides AI to generate secure and auditable C# database logic using ADO.NET or Entity Framework Core. Delegates input validation and behavioral reasoning to ".cursor/rules/railguard-input-validation.mdc".
globs: ["**/*.cs"]
alwaysApply: true
---

## Overview
This rule enforces safe conventions when generating database access logic in C# applications, including:
- Use of parameterized queries (for example, "SqlCommand.Parameters.Add()")
- Secure Entity Framework Core practices
- Secrets management and config hygiene
- Logging discipline and output sanitization

Deep reasoning, input handling, and security redlines are defined globally in:
> ".cursor/rules/railguard-input-validation.mdc"

---

## Best Practices for ADO.NET
- Use "SqlCommand" with parameters — never build queries with string concatenation or interpolation
- Use "using" blocks or "try/catch/finally" for resource cleanup
- Never log raw SQL with user input
- Wrap sensitive query sections in comments (for example, "// Parameterized query for login validation")

## Best Practices for Entity Framework Core
- Use "DbContext" and LINQ to query models
- Annotate entities with "[Key]", "[Table]", "[Column]", etc.
- Use "@Transactional" or ".SaveChanges()" batching for state updates
- Avoid dynamic LINQ or raw SQL strings unless absolutely necessary

---

## Configuration Hygiene
- Load connection strings from "appsettings.json", environment variables, or vaults
- Never hardcode passwords or secrets

"""json
"ConnectionStrings": {
  "DefaultConnection": "Server=...;Database=...;User Id=...;Password=...;"
}
"""

---

## Logging Guidelines
- Use "ILogger" or "Serilog" with structured output
- Do not log parameter values or user-generated query inputs
- Mask fields such as email, token, or user identifiers in logs

---

## Code Example
"""csharp
string query = "SELECT * FROM Users WHERE Username = @Username";
using (SqlCommand cmd = new SqlCommand(query, connection)) {
    cmd.Parameters.AddWithValue("@Username", username);
    using (SqlDataReader reader = cmd.ExecuteReader()) {
        while (reader.Read()) {
            // Process user info
        }
    }
}
"""

---

## Inline Security Cues
- "// Prevents SQL injection via parameterized query"
- "// Connection string loaded from environment"
- "// ORM method avoids raw SQL"

---

## Related Rule
Input reasoning, schema enforcement, and unsafe input detection:
> ".cursor/rules/railguard-input-validation.mdc"

---

## Suggested Commands
- "/revise-for-db-safety" — Refactor raw string SQL into secure query form
- "/explain-db-security" — Explain why EF Core or parameterization was used
- "/secure-config-example" — Output a secure "appsettings.json" structure

---

## References
- [SqlCommand.Parameters (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlcommand.parameters)
- [Entity Framework Core Documentation](https://learn.microsoft.com/en-us/ef/core/)
- [ASP.NET Core Configuration](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/)
- [ASP.NET Core User Secrets](https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets)
- [Logging in .NET with Serilog](https://serilog.net/)
- [EF Core Transactions](https://learn.microsoft.com/en-us/ef/core/saving/transactions)
- [Secure Coding Guidelines (OWASP)](https://cheatsheetseries.owasp.org/)
    `,
    author: {
      name: "Ken Huang",
      url: "https://www.brightonlabs.ai",
      avatar: "",
    },
  },
];
