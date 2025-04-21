export const pythonSecureFastAPIRailguard = [
  {
    tags: ["Security", "Framework", "Python", "FastAPI"],
    title: "The Cursor Rule for Python in FastAPI refering to the R.A.I.L.G.U.A.R.D Framework mdc file",
    libs: [
      "https://github.com/brighton-labs/railguard-cursor-coding.git",
    ],
    slug: "cybersecurity-python-fastapi-assistant",
    content: `
---
description: Secure development rule for FastAPI-based Python projects, focused on API structure, authentication, and context-aware server logic. Input validation is enforced globally via railguard-input-validation.mdc.
globs: ["**/app/**.py", "**/api/**.py", "**/routes/**.py"]
alwaysApply: true
---

## Overview

This rule provides secure-by-default coding conventions for FastAPI projects, including:
- API design and route handling
- Auth/session control
- Secure handling of path/query/body input
- Output formatting and response control
- Logging, dependency injection, and context reasoning

Input validation (e.g. pydantic, zod-like schemas, sanitization, type safety) is enforced globally via:
> ".cursor/rules/railguard-input-validation.mdc"
> (This rule uses the RAILGUARD Framework for reflective, behavioral AI reasoning.)

---

## API Route Design

- Use explicit HTTP methods ("@app.post", "@app.get", etc.)
- Always return structured responses using "JSONResponse", "Response", or typed Pydantic models
- Avoid wildcard "@app.route("*")" routes

---

## Authentication & Tokens

- Never handle JWT tokens, secrets, or password checks inside path-level routes
- Delegate to service layers or secure utility functions
- Use **OAuth2PasswordBearer**, not raw "Authorization" header parsing
- Ensure password hashing uses "bcrypt" or "argon2"; never store plaintext

---

## Request Handling

- Avoid using untyped "request: Request" as the only parameter — instead use structured Pydantic models
- Do not parse ".form()", ".json()" manually unless necessary — FastAPI handles this securely by default
- Always use dependency injection for DB access, background jobs, and auth checks (e.g., "Depends(...)")

---

## Response Handling

- Avoid returning raw dictionaries or untyped JSON
- Ensure all API responses are typed, even in "async def" routes
- Use exception handlers (e.g. "@app.exception_handler(...)") to manage untrusted input or auth failures

---

## Logging & Observability

- Use the "logging" module, not "print()"
- Mask sensitive fields in logs (passwords, tokens, API keys)
- Do not log raw request bodies unless explicitly scrubbed

---

## Security Add-ons

- Set security headers via middleware (e.g. "X-Frame-Options", "X-Content-Type-Options")
- Apply rate limiting for public-facing endpoints
- Use CORS properly — restrict allowed origins to production domains
- Avoid "eval", "exec", "pickle.load()" unless required and sandboxed

---

## Cross-Reference: Validation Logic

All input validation, sanitization, and reflective enforcement of secure behaviors is handled by:

> ".cursor/rules/railguard-input-validation.mdc"

This includes:
- Type enforcement
- Schema validation using Pydantic
- AI reasoning paths for detecting insecure defaults
- Auto-commenting to track sanitization

---

## Example Snippet

"""python
from fastapi import APIRouter, Depends, HTTPException
from models import LoginPayload
from services.auth import verify_user
from starlette.responses import JSONResponse

router = APIRouter()

@router.post("/login")
async def login(payload: LoginPayload):
    user = verify_user(payload.username, payload.password)
    if not user:
        raise HTTPException(status_code=401, detail="Unauthorized")
    return JSONResponse({"access_token": user.token})
"""
    `,
    author: {
      name: "Youssef Harkati",
      url: "https://www.brightonlabs.ai",
      avatar: "",
    },
  },
];
