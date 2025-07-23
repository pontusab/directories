export const pythonSecureFastAPINoRailguard = [
  {
    tags: ["Security", "Framework", "Python", "FastAPI"],
    title: "The Cursor Rule for Python in FastAPI embedding directly in its core the R.A.I.L.G.U.A.R.D Framework",
    libs: [
      "https://github.com/brighton-labs/railguard-cursor-coding.git",
    ],
    slug: "cybersecurity-python-fastapi-railguard-embedded-assistant",
    content: `
---
description: Enforce secure-by-default development practices in FastAPI-based Python applications using the RAILGUARD framework for input handling, auth, route safety, and AI reasoning.
globs: ["**/app/**.py", "**/api/**.py", "**/routes/**.py"]
alwaysApply: true
---

# R: Risk First
- The goal is to prevent common security vulnerabilities in FastAPI projects, especially those related to unvalidated input, improper auth handling, and inconsistent response logic.
- FastAPI is often used for public APIs, and must treat all incoming data as untrusted.
- The AI must generate code that is secure by design, explainable, and structured for auditability.

# A: Attached Constraints
- Never use "eval", "exec", or "pickle.load()" unless inside a secured, sandboxed environment.
- Never handle password hashing or token validation inside route handlers directly.
- Do not expose ".env" secrets, tokens, or credentials in responses, logs, or comments.
- Do not use untyped route parameters or raw request parsing ("await req.json()").
- Do not log raw user input, passwords, or tokens.

# I: Interpretative Framing
- Treat all FastAPI "POST", "PUT", "DELETE", or dynamic "GET" endpoints as externally-facing and potentially exposed to malicious input.
- If a route is created, assume it must validate input via a Pydantic model or an equivalent schema.
- If form or query data is parsed manually, assume that it requires validation and sanitation.
- If no response model is provided, assume one should be added for typing and auditability.

# L: Local Defaults
- Use Pydantic models for request bodies, form data, and query parameters.
- Use "Depends()" for injecting authenticated users, services, or DB sessions.
- Apply "Response" or "JSONResponse" with structured output.
- Secure all cookies ("HttpOnly", "Secure", "SameSite=Strict") and apply CORS restrictions.
- For links opened with "target="_blank"" in FastAPI template rendering (e.g., Jinja2), add "rel="noopener noreferrer"".

# G: Generative Path Checks
1. When generating a route:
   - Determine the expected request schema
   - Validate the schema with a Pydantic model
   - Parse using "payload: MyModel" in the handler signature
   - Handle missing fields or validation errors explicitly
2. If authentication is needed:
   - Use "OAuth2PasswordBearer" or "Depends(current_user)"
   - Hash passwords using "bcrypt" or "argon2", never plaintext
3. Always include status codes and structured return objects

# U: Uncertainty Disclosure
- If unsure whether a value comes from user input, assume it does and validate it.
- If a token or password appears in code, flag with a comment:
  _“This appears to be sensitive. Ensure it's securely handled server-side only.”_
- If the LLM is unsure about a schema or handler, generate a comment:
  _“// TODO: Validate input structure before use.”_

# A: Auditability
- All input validation logic should include a comment such as:
  "# Input validated with Pydantic model"
- Sensitive logic (auth, DB write, token generation) should be wrapped in functions, not inlined
- Flag uses of "dangerously_open_func()" or risky patterns with comments like:
  "# Dangerous operation: must be reviewed"
- Include standard docstrings on all route handlers

# R+D: Revision + Dialogue
- Developer may enter "/why-secure" to receive LLM explanation of choices:
  _“Validated input using Pydantic and ensured token logic stays server-side for security.”_
- Allow "/revise-for-security" to regenerate insecure output
- Encourage LLM to reject generating handlers without validation unless explicitly overridden

---

## Example: Secure Route with Auth

"""python
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from services.auth import verify_user
from fastapi.responses import JSONResponse

router = APIRouter()

class LoginPayload(BaseModel):
    username: str
    password: str

@router.post("/login")
async def login(payload: LoginPayload):
    user = verify_user(payload.username, payload.password)
    if not user:
        raise HTTPException(status_code=401, detail="Unauthorized")
    return JSONResponse({"access_token": user.token})
# Input validated with Pydantic model
"""
    `,
    author: {
      name: "Youssef Harkati",
      url: "https://www.brightonlabs.ai",
      avatar: "",
    },
  },
];
