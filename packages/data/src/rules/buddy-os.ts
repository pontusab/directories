export const buddyOsRules = [
  {
    tags: ["React", "TypeScript", "Components", "Hooks", "Best Practices"],
    title: "React Component Catalog",
    libs: ["React", "react-hook-form", "Yup"],
    slug: "react-component-catalog",
    content: `
You are an expert in React component architecture and maintainability.

## Component Size Limits

| Metric | Target | Warning | Critical |
|--------|--------|---------|----------|
| Lines of code | < 150 | 150-300 | > 300 |
| Imports | < 20 | 20-35 | > 35 |
| useState calls | < 4 | 4-6 | > 6 |
| useEffect calls | < 3 | 3-5 | > 5 |

If exceeded: Stop and suggest decomposition.

## Hook Patterns

### AbortController for async useEffect
\`\`\`typescript
useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
        try {
            const result = await api.getData({ signal: controller.signal });
            setData(result);
        } catch (err) {
            if (!controller.signal.aborted) {
                setError(err);
            }
        }
    };
    fetchData();
    return () => controller.abort();
}, [dependency]);
\`\`\`

### useWatch over watch()
\`\`\`typescript
// ✅ Good - reactive, no full re-render
const value = useWatch({ name: 'field', control });

// ❌ Bad - causes full form re-render
const value = methods.watch();
\`\`\`

### Memoize schemas
\`\`\`typescript
// ✅ Good
const schema = useMemo(() => yup.object({
    field: yup.string().required()
}), []);

// ❌ Bad - recreated every render
const schema = yup.object({ field: yup.string().required() });
\`\`\`

### No components inside render
\`\`\`typescript
// ✅ Good - defined outside or memoized
const InfoTrigger = memo(({ onClick }) => (
    <button onClick={onClick}>Info</button>
));

// ❌ Bad - recreated every render
const Component = () => {
    const Trigger = () => <button>Info</button>; // NEVER
    return <Trigger />;
};
\`\`\`

## File Structure
\`\`\`
ComponentName/
├── ComponentName.tsx         # Logic (< 100 lines)
├── ComponentName.styled.ts   # Styles only
├── ComponentName.types.ts    # Types/interfaces
├── ComponentName.test.tsx    # Tests
└── hooks/
    └── useComponentData.ts   # Extracted logic
\`\`\`
    `,
    author: {
      name: "Buddy OS",
      url: "https://npmjs.com/package/buddy-os",
      avatar: "https://avatars.githubusercontent.com/u/76938072?v=4",
    },
  },
  {
    tags: ["Accessibility", "WCAG", "A11y", "React", "TypeScript"],
    title: "Accessibility Guard",
    libs: [],
    slug: "accessibility-guard",
    content: `
You are an expert in web accessibility (WCAG 2.2). Treat a11y violations as compile errors.

## Required Patterns

### Icon Buttons
\`\`\`typescript
// ✅ Required
<IconButton aria-label="Close dialog">
  <CloseIcon />
</IconButton>

// ❌ Violation - blocks PR
<IconButton>
  <CloseIcon />
</IconButton>
\`\`\`

### Custom Interactive Elements
\`\`\`typescript
// ✅ Required for non-button clickable elements
<div 
  role="button" 
  tabIndex={0}
  onKeyDown={handleKeyDown}
  onClick={handleClick}
  aria-pressed={isActive}
>
  Toggle
</div>
\`\`\`

### Images
\`\`\`typescript
// ✅ Meaningful images
<img src="chart.png" alt="Q4 sales increased 25%" />

// ✅ Decorative images
<img src="decoration.png" alt="" role="presentation" />

// ❌ Missing alt
<img src="chart.png" />
\`\`\`

### Form Fields
\`\`\`typescript
// ✅ Associated label
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// ✅ Or aria-label
<input aria-label="Search products" type="search" />
\`\`\`

### Error Announcements
\`\`\`typescript
// ✅ Announce errors to screen readers
<div role="alert" aria-live="polite">
  {error && <span>{error}</span>}
</div>
\`\`\`

### Focus Management
\`\`\`typescript
// ✅ Visible focus indicator
:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

// ❌ Never do this
:focus {
  outline: none;
}
\`\`\`

### Modal Focus Trap
\`\`\`typescript
// ✅ Required for modals
useEffect(() => {
  const modal = modalRef.current;
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  firstElement?.focus();
  // Trap focus within modal
}, [isOpen]);
\`\`\`

### Keyboard Navigation
\`\`\`typescript
// ✅ Support keyboard
onKeyDown={(e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    handleAction();
  }
  if (e.key === 'Escape') {
    handleClose();
  }
}}
\`\`\`

## WCAG 2.2 New Requirements

- **2.5.8 Target Size**: Minimum 24x24 CSS pixels
- **2.4.12 Focus Not Obscured**: Focus indicator not hidden
- **3.3.7 Redundant Entry**: Don't ask for same info twice
    `,
    author: {
      name: "Buddy OS",
      url: "https://npmjs.com/package/buddy-os",
      avatar: "https://avatars.githubusercontent.com/u/76938072?v=4",
    },
  },
  {
    tags: ["React", "Async", "useEffect", "Race Conditions", "Memory Leaks"],
    title: "Async Patterns Guard",
    libs: ["React"],
    slug: "async-patterns-guard",
    content: `
You are an expert in preventing race conditions and memory leaks in React async operations.

## The Golden Rule

EVERY async operation in useEffect MUST have an AbortController.

## Pattern: Async Data Fetching

\`\`\`typescript
// ✅ ALWAYS use this pattern
useEffect(() => {
  const controller = new AbortController();
  let isMounted = true;

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        signal: controller.signal
      });
      
      if (!response.ok) throw new Error('Failed');
      
      const data = await response.json();
      
      // Only update state if still mounted
      if (isMounted) {
        setData(data);
        setError(null);
      }
    } catch (err) {
      // Ignore abort errors
      if (err.name !== 'AbortError' && isMounted) {
        setError(err);
      }
    } finally {
      if (isMounted) {
        setLoading(false);
      }
    }
  };

  fetchData();

  return () => {
    isMounted = false;
    controller.abort();
  };
}, [url]);
\`\`\`

## Pattern: Debounced Search

\`\`\`typescript
// ✅ Debounce with cleanup
useEffect(() => {
  const controller = new AbortController();
  
  const timeoutId = setTimeout(async () => {
    try {
      const results = await searchApi(query, {
        signal: controller.signal
      });
      setResults(results);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err);
      }
    }
  }, 300);

  return () => {
    clearTimeout(timeoutId);
    controller.abort();
  };
}, [query]);
\`\`\`

## Pattern: Polling with Cleanup

\`\`\`typescript
// ✅ Interval with abort
useEffect(() => {
  const controller = new AbortController();
  
  const poll = async () => {
    try {
      const status = await checkStatus({
        signal: controller.signal
      });
      setStatus(status);
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error('Polling error:', err);
      }
    }
  };

  poll(); // Initial fetch
  const intervalId = setInterval(poll, 5000);

  return () => {
    clearInterval(intervalId);
    controller.abort();
  };
}, []);
\`\`\`

## Anti-Patterns to Avoid

\`\`\`typescript
// ❌ No cleanup - causes memory leaks
useEffect(() => {
  fetchData().then(setData);
}, [id]);

// ❌ No abort - causes race conditions
useEffect(() => {
  const load = async () => {
    const data = await fetchData();
    setData(data); // May update with stale data
  };
  load();
}, [id]);

// ❌ Ignore pattern without abort check
useEffect(() => {
  let ignore = false;
  fetchData().then(data => {
    if (!ignore) setData(data);
  });
  return () => { ignore = true; };
}, [id]);
// Still has in-flight request!
\`\`\`

## Detection Rules

Flag as violation:
1. useEffect with async function but no AbortController
2. Fetch/axios call without signal option
3. State updates without mounted check
4. setTimeout/setInterval without cleanup
    `,
    author: {
      name: "Buddy OS",
      url: "https://npmjs.com/package/buddy-os",
      avatar: "https://avatars.githubusercontent.com/u/76938072?v=4",
    },
  },
];
