export const pythonSecureMLNoRailguard = [
  {
    tags: ["Security", "Framework", "Python", "ML"],
    title: "The Cursor Rule for Python in ML embedding directly in its core the R.A.I.L.G.U.A.R.D Framework",
    libs: [
      "https://github.com/brighton-labs/railguard-cursor-coding.git",
    ],
    slug: "cybersecurity-python-ml-railguard-embedded-assistant",
    content: `
---
description: Enforce security-aware development practices in Python-based ML workflows (training, inference, data loading, checkpointing) using the RAILGUARD reasoning framework.
globs: ["**/*.py"]
alwaysApply: true
---

# R: Risk First
- The goal is to reduce risk exposure in machine learning pipelines by securing data ingestion, model checkpoint loading, dependency handling, and inference logic.
- AI-generated ML code should not trust unknown data sources or model files without validation.
- The LLM must ensure safety against insecure serialization, poisoning, and unsafe dynamic behavior.

# A: Attached Constraints
- Never use "pickle.load()" or "torch.load()" on files from untrusted sources.
- Never use "eval()" or "exec()" to dynamically interpret model code, formulas, or input.
- Never suppress exceptions silently ("try/except: pass").
- Avoid using untyped data transformations or outputs.
- Do not log raw inputs from end users (can include PII).

# I: Interpretative Framing
- Treat all input data (CSV, JSON, NumPy, HuggingFace datasets) as potentially malformed or poisoned unless explicitly validated.
- If loading a model checkpoint, assume the file may have been tampered with.
- When generating inference code, assume it may be deployed in production with untrusted input.

# L: Local Defaults
- Use "joblib" or "torch.load()" **only on trusted, versioned model paths**
- Prefer "torch.save(model.state_dict())" for safe model export; avoid full object serialization
- Use Pydantic or Marshmallow schemas for preprocessing configs and inference input validation
- Use "logging" for monitoring; avoid "print()" and never log raw "request.body"
- Default to strict file permissions ("r", no "rb+")

# G: Generative Path Checks
1. When generating model loading logic:
   - Confirm source is trusted or version-controlled
   - Avoid deserializing entire objects unless safe
   - Use checksum or hash verification if relevant
2. When preprocessing data:
   - Validate data structure (rows, types, shape)
   - Use "try/except" with logging for failed transforms
3. When handling input for inference:
   - Validate schema
   - Normalize securely
   - Avoid leaking model internals in output

# U: Uncertainty Disclosure
- If unsure about input format, file source, or serialization method, generate a comment:
  _“Verify this file path is trusted before deserializing model.”_
- If unsure about preprocessing correctness, generate:
  _“Review schema/shape assumptions before transforming user input.”_

# A: Auditability
- All model loading should include a comment like:
  "# Model loaded from trusted path with versioned file"
- Inference pipelines should include:
  "# Input validated with schema"
- File operations should include:
  "# File access scoped to read-only mode"
- If HuggingFace "from_pretrained()" is used, document:
  "# Loaded from official source (e.g., "bert-base-uncased")"

# R+D: Revision + Dialogue
- Support "/why-secure" for LLM to explain:
  _“Avoided full object deserialization and validated data structure before inference.”_
- Support "/revise-for-security" to recheck model-loading or data-ingestion logic
- Recommend "/check-input-shape" if AI is unsure about data expectations

---

## Example: Secure Model Load + Inference

"""python
import torch
from transformers import BertTokenizer, BertForSequenceClassification

# Always verify model sources before loading
model = BertForSequenceClassification.from_pretrained("bert-base-uncased")
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")

# Validate input before tokenizing
text = "Some user input"
inputs = tokenizer(text, return_tensors="pt", truncation=True, max_length=512)

with torch.no_grad():
    outputs = model(**inputs)
    probs = torch.nn.functional.softmax(outputs.logits, dim=-1)
"""
    `,
    author: {
      name: "Albert Hui",
      url: "https://www.securityronin.com/",
      avatar: "",
    },
  },
];
