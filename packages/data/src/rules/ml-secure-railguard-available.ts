export const pythonSecureMLRailguard = [
  {
    tags: ["Security", "Framework", "Python", "ML"],
    title: "The Cursor Rule for Python in ML refering to the R.A.I.L.G.U.A.R.D Framework mdc file",
    libs: [
      "https://github.com/brighton-labs/railguard-cursor-coding.git",
    ],
    slug: "cybersecurity-python-ml-assistant",
    content: `
---
description: Guide AI to generate secure machine learning workflows in Python with safe model loading, inference pipelines, and data handling. Core input validation is delegated to ".cursor/rules/railguard-input-validation.mdc".
globs: ["**/*.py"]
alwaysApply: true
---

## Overview

This rule supports secure-by-default machine learning code generation, covering:

- Model checkpoint handling
- Trusted use of HuggingFace, PyTorch, or scikit-learn
- Inference-time protections
- Logging and resource handling

Note: All input validation, sanitization, schema enforcement, and LLM reasoning scaffolding is provided by:

> ".cursor/rules/railguard-input-validation.mdc"
> _(Based on the RAILGUARD Framework for secure behavior enforcement across languages)_

---

## Model Loading & Deserialization

- Use "torch.load()" or "pickle.load()" only on trusted, versioned, local files.
- Avoid deserializing full Python objects unless necessary. Prefer "state_dict" loading (e.g., "model.load_state_dict(...)")
- If using "from_pretrained()", ensure the model name is official or internally versioned.
- When downloading models, validate integrity using checksums if possible.

---

## Data Handling & Preprocessing

- Avoid using raw "eval()" or "exec()" to interpret formulas or hyperparameters.
- Prefer explicit schema-based checks for:
  - Number of features
  - Tensor dimensions
  - String encoding assumptions
- Do not transform user input without validating structure first.

For validation and sanitation of CSVs, JSONs, NumPy arrays, and request inputs — refer to ".cursor/rules/input-validation.mdc".

---

## Inference Logic & Output Handling

- Do not log input text, tokens, or raw payloads directly (especially for NLP or PII-sensitive data).
- Use "with torch.no_grad():" or equivalent when performing inference.
- Ensure inference outputs are typed, validated, and never expose model internals (e.g., logits, hidden states) unless required.

---

## File & Resource Access

- Always open files using "with open(...)" syntax.
- Set read-only access unless modification is required.
- Avoid writing cache or checkpoint data to shared or user-supplied paths.

---

## Logging & Monitoring

- Use Python’s "logging" module — not "print()".
- Mask or exclude sensitive input/output data in logs.
- Log model version, inference success/failure, and prediction metadata — not raw data.

---

## Cross-Reference: Global Input Validation

All low-level data validation, reasoning scaffolding, and reflection-based secure behavior enforcement is handled by:

> ".cursor/rules/railguard-input-validation.mdc"

Including:
- Schema and shape enforcement
- Input source validation
- Dangerous pattern detection (e.g., "eval", insecure deserialization)
- AI reflection paths ("R", "G", "U" pillars)

This ML rule **inherits and complements** the RAILGUARD logic.

---

## Example Snippet: Safe Model + Inference

"""python
from transformers import BertTokenizer, BertForSequenceClassification
import torch

# Load model and tokenizer from trusted source
model = BertForSequenceClassification.from_pretrained("bert-base-uncased")
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")

# Preprocess input
text = "User input to classify"
inputs = tokenizer(text, return_tensors="pt", truncation=True, max_length=512)

# Inference with no gradient tracking
with torch.no_grad():
    logits = model(**inputs).logits
    probabilities = torch.nn.functional.softmax(logits, dim=-1)
"""
    `,
    author: {
      name: "Albert Hui",
      url: "https://www.securityronin.com/",
      avatar: "",
    },
  },
];
