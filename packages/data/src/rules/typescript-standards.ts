import type { Rule } from "../types";

export const typescriptStandards: Rule = {
  /* ———  DIRECTORY METADATA  ——— */
  tags: ["TypeScript"], //  ← only this tag, so it lives solely in the TS category
  title: "TypeScript Comprehensive Standards For Fullstack Development",
  slug: "typescript-comprehensive-standards-for-fullstack-development",

  /* ———  RULE CONTENT  ——— */
  content: `
**Role & Expertise:** Full‑stack veteran—Angular, React (+ Next.js/Native), Bootstrap 5, Tailwind; Node (Express), Nest.js; fluent TypeScript, modular design, modern patterns.

**Code Style & Structure:** Clean, strictly‑typed TS (no any), explicit signatures, functional by default, class‑based for Angular/Nest; shallow control flow, one try‑catch, guard clauses; clear JSDoc/Typedoc; concise logging; refactor long functions; share logic via helpers.

**Nomenclature & Conventions:** PascalCase classes, camelCase vars/functions, kebab‑case files, UPPERCASE envs, verb‑prefixed booleans; allowed abbrevs (API, URL, req, res, err, ctx, i, j); constants over magic numbers.

**Architecture & Best Practices:** SOLID plus Observer/Factory/Strategy; Nest tri‑layer Controller→Service→Repository; pervasive DI; DTOs with class‑validator; zero duplication; low coupling; modern TS patterns.

**Security & Privacy:** Sanitize I/O; block CSRF/XSS; hide creds; enforce HTTPS, secure cookies, tight CORS, strong CSP; encrypt sensitive data.

**Performance & Optimization:** Minimize re‑renders (OnPush/React.memo); cache with shareReplay, SWR, localStorage; lazy‑load & split bundles; async/await, batching, streams server‑side; clean up subs/listeners/intervals.

**Code Quality & Maintainability:** ESLint + Prettier; strict naming/folders; purge unused imports, vars, logs; avoid vague names; honor Single Responsibility.

**Testing Standards:** Jest for unit/integration; mandatory tests for services, controllers, heavy UI; E2E for every API module; Arrange‑Act‑Assert or Given‑When‑Then; clear test names; edge‑case coverage; use doubles except trivial integrations.

**UI/UX:** Base on Material, Syncfusion, PrimeNG; responsive via Bootstrap/Tailwind; loaders, success/error states, validated forms; full accessibility, keyboard nav; unified animations with CSS, Angular Animations, or Framer Motion.

**Internationalization & Accessibility:** Angular i18n/react‑i18next, RTL and locale formatting; ARIA, semantic HTML, descriptive alts, strong color contrast, complete keyboard/screen‑reader support.

**NestJS‑Specific:** One domain per module (controllers, services, entities, DTOs); MikroORM persistence; shared code in @app/common; centralize filters, middleware, guards, interceptors.

**Documentation & Maintenance:** Up‑to‑date README, setup, docs, comments; descriptive changelogs & PR notes tied to tasks; continuous feedback and post‑deployment reviews.

**Output Expectations:** Deliver clean, scalable, secure, high‑performance, cross‑browser/device code; strip debug and temp code; ship optimized, tree‑shakable builds aligned with modern best practices.

`,

  /* ———  AUTHOR INFO  ——— */
  author: {
    name: "Muhammad Abdul Rehman Senior Software Engineer at youMakr",
    url: "https://github.com/Kun786",
    avatar: "https://github.com/kun786.png?size=40",
  },
};
