export const pythonSecureDSNoRailguard = [
  {
    tags: ["Security", "Framework", "Python", "Data Science", "Jupyter Notebook"],
    title: "The Cursor Rule for Python in Data Science embedding directly in its core the R.A.I.L.G.U.A.R.D Framework",
    libs: [
      "https://github.com/brighton-labs/railguard-cursor-coding.git",
    ],
    slug: "cybersecurity-python-datascience-railguard-embedded-assistant",
    content: `
---
description: Enforce security-conscious data analysis in Jupyter notebooks and Python-based workflows using the RAILGUARD framework. Prevents risks such as PII leakage, unsafe data previews, insecure evaluation, and improper export logic.
globs: ["**/*.ipynb", "**/*.py"]
alwaysApply: true
---

# R: Risk First
- The objective is to generate privacy-preserving, auditable data science code that treats all datasets as potentially untrusted.
- AI-generated workflows should prevent PII leakage, unsafe previews, over-permissive exports, or the use of risky dynamic evaluation functions.
- Output code must consider that notebooks may be shared publicly or reviewed externally.

# A: Attached Constraints
- Do not use "eval()", "exec()", "pd.eval()", or "pandas.query()" with raw or user-controlled data.
- Do not preview (".head()", ".sample()") or visualize data before dropping or masking PII.
- Never export datasets (CSV, Excel) without reviewing and excluding sensitive fields.
- Avoid printing or logging raw values containing names, emails, phone numbers, IPs, or other PII.
- Do not embed secrets (API keys, tokens, credentials) in notebooks or data transformation code.

# I: Interpretative Framing
- Treat CSV, Excel, JSON, or Parquet files as potentially malformed, misencoded, or manipulated.
- If a chart or ".head()" preview is created, assume the data must be pre-sanitized.
- All exports must be assumed auditable or shared — apply field-level filtering and file versioning.
- Markdown or notebook outputs must avoid embedding unescaped HTML or unfiltered user data.

# L: Local Defaults
- Use "pandas.read_csv(..., dtype=...)" and "read_excel(..., engine="openpyxl", dtype=...)" for structured, validated loads.
- Define default sensitive columns:
  """python
  PII_FIELDS = ["email", "full_name", "ssn", "ip", "dob", "phone", "address"]
  """
- Use "errors="ignore"" when dropping columns with "df.drop(...)".
- Preview data only after dropping or masking sensitive fields.
- Use "with open(..., "r")" for safe, explicit file access.
- Use the "logging" module for observability, not "print()".

# G: Generative Path Checks
1. Dataset Loading
   - Apply column type enforcement and encoding
   - Normalize column headers to lowercase + snake_case
   - Validate expected columns, dimensions, and content assumptions
2. Preprocessing
   - Drop PII fields prior to calling ".head()", ".to_csv()", ".plot()"
   - Apply clear inline comments to describe transformations
   - Avoid implicit or silent "inplace=True" modifications
3. Exporting
   - Confirm sensitive fields are excluded
   - Add audit-friendly comments and logging entries
   - Use versioned file naming (e.g., "customers_clean_v1.csv")

# U: Uncertainty Disclosure
- If unsure about schema safety:
  _“Schema enforcement missing — validate column types.”_
- If unsure about PII exposure:
  _“Column 'email' may contain sensitive data — exclude from preview/export.”_
- If unsure about transformation safety:
  _“Verify output of transformation does not reintroduce PII.”_

# A: Auditability
- Insert comments like:
  - "# Loaded CSV with schema and type constraints"
  - "# Removed PII columns before preview/export"
  - "# Logged sanitized export to external audit location"
- Use "logging.info(...)" to trace sanitization and export events
- Write output to "exports/" or "sanitized_exports/" folders with timestamped or versioned names
  - Example: "export/customers_clean_2024-04-16_v1.csv"

# R+D: Revision + Dialogue
- "/why-secure": Explain logic such as _“Dropped PII before calling .head() and ensured export file omits personal data.”_
- "/revise-for-security": Rerun export logic or previews to remove sensitive fields
- "/pii-scan": Trigger column-level scan to detect "email", "ssn", "ip", etc.
- "/summarize-cleanroom": Output a trace of cleaning, filtering, and export steps for notebook reviews

---

## Example: Secure Data Load, Transform, and Export

"""python
import pandas as pd
import logging

PII_FIELDS = ["email", "ssn", "address", "full_name"]

# Load CSV with schema enforcement
df = pd.read_csv("datasets/customers.csv", dtype={"id": str, "email": str})

# Remove sensitive fields
df_clean = df.drop(columns=PII_FIELDS, errors="ignore")

# Preview safe sample only
print(df_clean[["id", "signup_date"]].head())

# Export with versioned filename and log the operation
output_path = "exports/customers_clean_2024-04-16_v1.csv"
df_clean.to_csv(output_path, index=False)
logging.info(f"Exported sanitized dataset to {output_path}")
"""

---

## Example: Secure Visualization

"""python
import plotly.express as px

# Only visualize sanitized columns
fig = px.histogram(df_clean, x="signup_date", title="User Signups by Date")
fig.update_layout(yaxis_title="Count")
fig.show()
    `,
    author: {
      name: "Jean-Francois Linteau Labonte",
      url: "https://www.brightonlabs.ai",
      avatar: "",
    },
  },
];
