export const pythonSecureDSRailguard = [
  {
    tags: ["Security", "Framework", "Python", "Data Science", "Jupyter Notebook"],
    title: "The Cursor Rule for Python in Data Science refering to the R.A.I.L.G.U.A.R.D Framework mdc file",
    libs: [],
    slug: "cybersecurity-python-datascience-assistant",
    content: `
---
description: Guide the LLM to generate secure, privacy-conscious data science code in notebooks and Python scripts. Defers input validation to ".cursor/rules/input-validation.mdc" while enforcing safe loading, export, and transformation of data.
globs: ["**/*.ipynb", "**/*.py"]
alwaysApply: true
---

## Overview
This rule supports data analysts and scientists working in Python (e.g., Jupyter, Colab, VSCode notebooks) by:
- Enforcing safe data previews and exports
- Preventing accidental leakage of personally identifiable information (PII)
- Deferring all structured input validation logic to:
  > ".cursor/rules/railguard-input-validation.mdc"  
  > _(which uses the RAILGUARD Framework for secure reasoning and enforcement)_

---

## Safe Data Handling
- Use "pandas.read_csv()" and "read_excel()" with "dtype=..." to enforce schema.
- Always drop or mask sensitive fields before using ".head()", ".sample()", or ".plot()".
- Never use "eval()", "exec()", "pd.eval()" or "query()" on raw data or unvalidated user inputs.
- When exporting data, verify and exclude all PII fields.

### Default PII fields to remove:
"""python
PII_FIELDS = ["email", "full_name", "ssn", "ip", "dob", "phone", "address"]
"""

- Always log sanitized export filenames using "logging", not "print()".
- Prefer versioned, structured export paths (e.g., "exports/cleaned_data_v1.csv").

---

## Cross-Reference: Validation Logic
Input validation, schema enforcement, sanitization, and secure reasoning are handled globally in:

> ".cursor/rules/railguard-input-validation.mdc"

This ensures:
- Protection against malformed files, unexpected schema, or poisoned input
- Step-by-step generation reasoning (RAILGUARD pillars)
- Enforcement of redlines (e.g., avoiding "eval", ensuring schema is present)
- Behaviorally aware, explainable code generation across file types

---

## Example: Secure Data Load + Export
"""python
import pandas as pd
import logging

PII_FIELDS = ["email", "ssn", "address", "full_name"]

# Load CSV with enforced column types
df = pd.read_csv("customers.csv", dtype={"id": str, "email": str})

# Drop sensitive fields
df_clean = df.drop(columns=PII_FIELDS, errors="ignore")

# Preview non-sensitive columns only
print(df_clean[["id", "signup_date"]].head())

# Export with logging
output_path = "exports/customers_clean_v1.csv"
df_clean.to_csv(output_path, index=False)
logging.info(f"Exported sanitized data to {output_path}")
"""

---

## Example: Secure Visualization
"""python
import plotly.express as px

# Visualize only sanitized data
fig = px.histogram(df_clean, x="signup_date", title="User Signups")
fig.update_layout(yaxis_title="User Count")
fig.show()
"""

---

## Notes
- Do not store intermediate notebook outputs with raw "df" previews if they contain sensitive data.
- If you're unsure whether a column contains PII, instruct the LLM to generate a "/pii-scan" step.
- This rule is safe to combine with:
  - "ml-secure.mdc"
  - "python-security-railguard.mdc"
  - "bigquery-secure.mdc" or any domain-specific ".mdc" rule
    `,
    author: {
      name: "Youssef Harkati",
      url: "https://www.brightonlabs.ai",
      avatar: "",
    },
  },
];
