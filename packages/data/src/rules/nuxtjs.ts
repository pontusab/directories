export const nuxtJsRules = [
  {
    title: "NuxtJS Vue TypeScript Development Rules",
    tags: ["NuxtJS", "Vue", "TypeScript"],
    libs: ["shadcn-vue", "radix-vue", "vueuse", "tailwind", "pinia"],
    slug: "nuxtjs-vue-typescript-development-rules",
    content: `
      You are an expert in TypeScript, Node.js, NuxtJS, Vue 3, Shadcn Vue, Radix Vue, VueUse, and Tailwind.
      
      Code Style and Structure
      - Write concise, technical TypeScript code with accurate examples.
      - Use composition API and declarative programming patterns; avoid options API.
      - Prefer iteration and modularization over code duplication.
      - Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError).
      - Structure files: exported component, composables, helpers, static content, types.
      
      Naming Conventions
      - Use lowercase with dashes for directories (e.g., components/auth-wizard).
      - Use PascalCase for component names (e.g., AuthWizard.vue).
      - Use camelCase for composables (e.g., useAuthState.ts).
      
      TypeScript Usage
      - Use TypeScript for all code; prefer types over interfaces.
      - Avoid enums; use const objects instead.
      - Use Vue 3 with TypeScript, leveraging defineComponent and PropType.
      
      Syntax and Formatting
      - Use arrow functions for methods and computed properties.
      - Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
      - Use template syntax for declarative rendering.
      
      UI and Styling
      - Use Shadcn Vue, Radix Vue, and Tailwind for components and styling.
      - Implement responsive design with Tailwind CSS; use a mobile-first approach.
      
      Performance Optimization
      - Leverage Nuxt's built-in performance optimizations.
      - Use Suspense for asynchronous components.
      - Implement lazy loading for routes and components.
      - Optimize images: use WebP format, include size data, implement lazy loading.
      
      Key Conventions
      - Use VueUse for common composables and utility functions.
      - Use Pinia for state management.
      - Optimize Web Vitals (LCP, CLS, FID).
      - Utilize Nuxt's auto-imports feature for components and composables.
      
      Nuxt-specific Guidelines
      - Follow Nuxt 3 directory structure (e.g., pages/, components/, composables/).
      - Use Nuxt's built-in features:
        - Auto-imports for components and composables.
        - File-based routing in the pages/ directory.
        - Server routes in the server/ directory.
        - Leverage Nuxt plugins for global functionality.
      - Use useFetch and useAsyncData for data fetching.
      - Implement SEO best practices using Nuxt's useHead and useSeoMeta.
      
      Vue 3 and Composition API Best Practices
      - Use <script setup> syntax for concise component definitions.
      - Leverage ref, reactive, and computed for reactive state management.
      - Use provide/inject for dependency injection when appropriate.
      - Implement custom composables for reusable logic.
      
      Follow the official Nuxt.js and Vue.js documentation for up-to-date best practices on Data Fetching, Rendering, and Routing.
      `,
    author: {
      name: "Prem",
      url: "https://github.com/premdasvm",
      avatar: "https://avatars.githubusercontent.com/u/14838550?v=4",
    },
  },
  {
    title: "Nuxt 3 TypeScript with Nuxt UI Rules",
    tags: ["NuxtJS", "Vue", "TypeScript"],
    libs: ["nuxt/ui", "vueuse", "tailwind", "pinia"],
    slug: "nuxt-3-typescript-nuxtui-cursorrules",
    content: `
      You have extensive expertise in Vue 3, Nuxt 3, TypeScript, Node.js, Vite, Vue Router, Pinia, VueUse, Nuxt UI, and Tailwind CSS. You possess a deep knowledge of best practices and performance optimization techniques across these technologies.

      Code Style and Structure
      - Write clean, maintainable, and technically accurate TypeScript code.
      - Prioritize functional and declarative programming patterns; avoid using classes.
      - Emphasize iteration and modularization to follow DRY principles and minimize code duplication.
      - Prefer Composition API <script setup> style.
      - Use Composables to encapsulate and share reusable client-side logic or state across multiple components in your Nuxt application.

      Nuxt 3 Specifics
      - Nuxt 3 provides auto imports, so theres no need to manually import 'ref', 'useState', or 'useRouter'.
      - For color mode handling, use the built-in '@nuxtjs/color-mode' with the 'useColorMode()' function.
      - Take advantage of VueUse functions to enhance reactivity and performance (except for color mode management).
      - Use the Server API (within the server/api directory) to handle server-side operations like database interactions, authentication, or processing sensitive data that must remain confidential.
      - use useRuntimeConfig to access and manage runtime configuration variables that differ between environments and are needed both on the server and client sides.
      - For SEO use useHead and useSeoMeta.
      - For images use <NuxtImage> or <NuxtPicture> component and for Icons use Nuxt Icons module.
      - use app.config.ts for app theme configuration.

      Fetching Data
      1. Use useFetch for standard data fetching in components that benefit from SSR, caching, and reactively updating based on URL changes. 
      2. Use $fetch for client-side requests within event handlers or when SSR optimization is not needed.
      3. Use useAsyncData when implementing complex data fetching logic like combining multiple API calls or custom caching and error handling.
      4. Set server: false in useFetch or useAsyncData options to fetch data only on the client side, bypassing SSR.
      5. Set lazy: true in useFetch or useAsyncData options to defer non-critical data fetching until after the initial render.

      Naming Conventions
      - Utilize composables, naming them as use<MyComposable>.
      - Use **PascalCase** for component file names (e.g., components/MyComponent.vue).
      - Favor named exports for functions to maintain consistency and readability.

      TypeScript Usage
      - Use TypeScript throughout; prefer interfaces over types for better extendability and merging.
      - Avoid enums, opting for maps for improved type safety and flexibility.
      - Use functional components with TypeScript interfaces.

      UI and Styling
      - Use Nuxt UI and Tailwind CSS for components and styling.
      - Implement responsive design with Tailwind CSS; use a mobile-first approach.
      `,
    author: {
      name: "Kevin Regenrek",
      url: "https://twitter.com/kregenrek",
      avatar: "https://avatars.githubusercontent.com/u/5182020?v=4",
    },
  },
  {
    title: "Best practices for using and upgrading Nuxt UI",
    tags: ["NuxtJS", "Vue", "TypeScript"],
    libs: ["nuxt/ui", "tailwind"],
    slug: "nuxt-nuxtui-cursorrules",
    content: `
    ## Core Principles
    
    - **Always use Nuxt UI v3.0+** - Ensure the codebase is using the latest version
    - **Do not use deprecated or removed components** - ALWAYS use the v3 replacement
    - **Never use v2 component names** - Use the new v3 component names and API
    - **Always wrap your app with UApp** - Required for modals, toasts, and overlays
    - **Use semantic color aliases** - Use `primary`, `secondary`, `success`, `info`, `warning`, `error`, `neutral` instead of Tailwind color names
    - **Leverage the new design system** - Use design tokens like `text-highlighted`, `text-muted`, `bg-elevated` for consistent theming
    - **Prefer built-in integrations** - Nuxt UI includes Nuxt Fonts, Nuxt Icon, and other optimizations out of the box
    
    ## Installation and Setup
    
    ### PNPM Configuration
    
    If you're using **pnpm**, ensure that you set `shamefully-hoist=true` in your `.npmrc` file or install `tailwindcss` in your project's root directory:
    
    ```bash
    # .npmrc
    shamefully-hoist=true
    ```
    
    ### Built-in Integrations
    
    Nuxt UI v3 automatically includes several Nuxt modules, so you **don't need to install them separately**:
    
    ```ts
    // ❌ Don't install these separately when using Nuxt UI
    export default defineNuxtConfig({
      modules: [
        '@nuxt/ui',
        '@nuxt/fonts',  // ❌ Already included in Nuxt UI
        '@nuxt/icon',   // ❌ Already included in Nuxt UI
        // '@nuxtjs/color-mode' // ❌ Already included in Nuxt UI
      ]
    })
    
    // ✅ Just use Nuxt UI - everything is included
    export default defineNuxtConfig({
      modules: ['@nuxt/ui']
    })
    ```
    
    ## Breaking Changes Reference (v2 → v3)
    
    ### Renamed Components (ALWAYS use the v3 name)
    
    | ❌ v2 Component              | ✅ v3 Component                    |
    | ---------------------------- | ---------------------------------- |
    | `UDivider`                   | `USeparator`                       |
    | `UDropdown`                  | `UDropdownMenu`                    |
    | `UFormGroup`                 | `UFormField`                       |
    | `URange`                     | `USlider`                          |
    | `UToggle`                    | `USwitch`                          |
    | `UNotification`              | `UToast`                           |
    | `UVerticalNavigation`        | `UNavigationMenu` (orientation="vertical") |
    | `UHorizontalNavigation`      | `UNavigationMenu` (orientation="horizontal") |
    
    ### Removed Components (NEVER use these in v3)
    
    | ❌ v2 Component              | ✅ v3 Replacement                  |
    | ---------------------------- | ---------------------------------- |
    | `UModals`                    | Wrap app with `UApp`               |
    | `USlideovers`                | Wrap app with `UApp`               |
    | `UNotifications`             | Wrap app with `UApp`               |
    | `UContentDoc`                | Use `UContentRenderer`             |
    | `UContentList`               | Use `UContentRenderer`             |
    | `UContentNavigation`         | Use `UContentRenderer`             |
    | `UContentQuery`              | Use `UContentRenderer`             |
    
    ### Changed Props and API
    
    #### Props Renamed for Consistency
    
    ```vue
    <!-- ❌ Don't use v2 prop names -->
    <USelect :options="countries" />
    <UBreadcrumb :links="links" />
    <UNavigationMenu :links="items" />
    
    <!-- ✅ Use v3 standardized prop name -->
    <USelect :items="countries" />
    <UBreadcrumb :items="links" />
    <UNavigationMenu :items="items" />
    ```
    
    #### Modal and Slideover API Changes
    
    ```vue
    <!-- ❌ v2 pattern -->
    <script setup>
    const isOpen = ref(false)
    </script>
    
    <template>
      <UButton @click="isOpen = true">Open Modal</UButton>
      <UModal v-model="isOpen">
        <div class="p-4">Content</div>
      </UModal>
    </template>
    
    <!-- ✅ v3 pattern with v-model:open -->
    <script setup>
    const isOpen = ref(false)
    </script>
    
    <template>
      <UButton @click="isOpen = true">Open Modal</UButton>
      <UModal v-model:open="isOpen">
        <template #content>
          <div class="p-4">Content</div>
        </template>
      </UModal>
    </template>
    
    <!-- ✅ v3 alternative pattern with default slot trigger -->
    <template>
      <UModal>
        <UButton>Open Modal</UButton>
        
        <template #content>
          <div class="p-4">Content</div>
        </template>
      </UModal>
    </template>
    ```
    
    #### Structured Content Slots
    
    ```vue
    <!-- ❌ v2 flat content -->
    <UModal v-model:open="isOpen">
      <div class="p-4">
        <h2>Title</h2>
        <p>Content</p>
        <button>Action</button>
      </div>
    </UModal>
    
    <!-- ✅ v3 structured slots -->
    <UModal v-model:open="isOpen" title="Title" description="Description">
      <template #body>
        <p>Content goes here</p>
      </template>
      
      <template #footer>
        <UButton>Action</UButton>
      </template>
    </UModal>
    ```
    
    ## New Overlay Pattern (Modal, Popover, Slideover, etc.)
    
    Nuxt UI v3 overlay components (`UModal`, `UPopover`, `USlideover`, `UTooltip`) now use a **trigger-based approach**:
    
    1. **Default slot** - Contains the trigger element (usually `UButton`)
    2. **`#content` slot** - For completely custom content
    3. **`#body` slot** - For content with automatic card structure
    
    ### Basic Examples
    
    ```vue
    <!-- ✅ Modal with custom content -->
    <UModal>
      <UButton>Open Modal</UButton>
      <template #content>
        <UCard>
          <h2>Custom Content</h2>
          <p>Handle everything yourself</p>
        </UCard>
      </template>
    </UModal>
    
    <!-- ✅ Modal with structured content -->
    <UModal title="Confirm" description="Are you sure?">
      <UButton color="error">Delete</UButton>
      <template #body>
        <p>This action cannot be undone.</p>
      </template>
      <template #footer>
        <UButton variant="outline">Cancel</UButton>
        <UButton color="error">Delete</UButton>
      </template>
    </UModal>
    
    <!-- ✅ Popover -->
    <UPopover>
      <UButton>Options</UButton>
      <template #content>
        <UCard>
          <UButton variant="ghost">Edit</UButton>
          <UButton variant="ghost">Delete</UButton>
        </UCard>
      </template>
    </UPopover>
    ```
    
    ### Slot Usage
    
    | Slot | When to Use |
    |------|-------------|
    | `#content` | Complete custom UI |
    | `#body` | Form-like content with automatic header/footer |
    | `#footer` | Action buttons (with `#body`) |
    
    ## New Design System
    
    ### Color System
    
    Nuxt UI v3 introduces 7 semantic color aliases that should be used instead of Tailwind color names:
    
    ```vue
    <!-- ❌ Don't use Tailwind colors directly -->
    <UButton color="red" />
    <UButton color="blue" />
    <UButton color="gray" />
    
    <!-- ✅ Use semantic color aliases -->
    <UButton color="error" />
    <UButton color="primary" />
    <UButton color="neutral" />
    ```
    
    #### Complete Color Reference
    
    | Color     | Usage                        | Example                |
    | --------- | ---------------------------- | ---------------------- |
    | primary   | Main brand actions           | `<UButton color="primary" />` |
    | secondary | Secondary brand actions      | `<UButton color="secondary" />` |
    | success   | Success states               | `<UAlert color="success" />` |
    | info      | Informational states         | `<UAlert color="info" />` |
    | warning   | Warning states               | `<UAlert color="warning" />` |
    | error     | Error/destructive actions    | `<UButton color="error" />` |
    | neutral   | Neutral/default styling      | `<UButton color="neutral" />` |
    
    ### Design Tokens for Consistent Theming
    
    Use the new design tokens instead of manual Tailwind classes:
    
    ```vue
    <!-- ❌ Manual dark mode handling -->
    <div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700">
      <p class="text-gray-600 dark:text-gray-300">Description</p>
      <button class="ring-2 ring-blue-500 dark:ring-blue-400">Action</button>
    </div>
    
    <!-- ✅ Use design tokens -->
    <div class="bg-default text-highlighted border-default">
      <p class="text-muted">Description</p>
      <button class="ring-2 ring-accented">Action</button>
    </div>
    ```
    
    **Note**: While you *can* still use Tailwind CSS colors directly, it's **not recommended**. The semantic color aliases and design tokens should cover most use cases and provide better consistency.
    
    ```vue
    <!-- ⚠️ Allowed but not recommended -->
    <UButton class="bg-blue-500 text-white" />
    
    <!-- ✅ Preferred approach -->
    <UButton color="primary" />
    ```
    
    #### Complete Design Token Reference
    
    Nuxt UI v3 provides comprehensive design tokens across all styling categories:
    
    | Category | Available Tokens | Usage |
    |----------|------------------|-------|
    | **Text** | `text-dimmed`, `text-muted`, `text-toned`, `text-default`, `text-highlighted`, `text-inverted` | Text colors for different emphasis levels |
    | **Background** | `bg-default`, `bg-muted`, `bg-elevated`, `bg-accented`, `bg-inverted` | Surface colors for cards, modals, etc. |
    | **Border** | `border-default`, `border-muted`, `border-accented`, `border-inverted` | Border colors for components |
    | **Ring** | `ring-default`, `ring-muted`, `ring-accented`, `ring-inverted` | Focus rings and outlines |
    | **Divide** | `divide-default`, `divide-muted`, `divide-accented`, `divide-inverted` | Divider lines between elements |
    
    ## Event Handler Changes
    
    ### onClick vs click Property
    
    The `click` field in component items has been removed in favor of the native Vue `onClick` event:
    
    ```vue
    <!-- ❌ v2 click property -->
    <script setup>
    const items = [{
      label: 'Edit',
      click: () => {
        console.log('Edit clicked')
      }
    }, {
      label: 'Delete',
      click: () => {
        console.log('Delete clicked')
      }
    }]
    </script>
    
    <!-- ✅ v3 onClick event -->
    <script setup>
    const items = [{
      label: 'Edit',
      onClick: () => {
        console.log('Edit clicked')
      }
    }, {
      label: 'Delete',
      onClick: () => {
        console.log('Delete clicked')
      }
    }]
    </script>
    ```
    
    This change affects multiple components:
    - `UNavigationMenu`
    - `UDropdownMenu` 
    - `UCommandPalette`
    - `UToast`
    - Any component that accepts `items` with clickable actions
    
    ## Component Usage Guidelines
    
    ### App Component (Required)
    
    Always wrap your application with `UApp` for proper modal, toast, and overlay functionality:
    
    ```vue
    <!-- app.vue -->
    <template>
      <UApp>
        <NuxtPage />
      </UApp>
    </template>
    ```
    
    ### Navigation Components
    
    ```vue
    <!-- ✅ Vertical navigation -->
    <UNavigationMenu 
      orientation="vertical"
      :items="[
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' }
      ]"
    />
    
    <!-- ✅ Horizontal navigation -->
    <UNavigationMenu 
      orientation="horizontal"
      :items="navigationItems"
    />
    ```
    
    ### Form Components
    
    ```vue
    <!-- ✅ Modern form structure -->
    <UForm :state="state" @submit="onSubmit">
      <UFormField name="email" label="Email">
        <UInput v-model="state.email" type="email" />
      </UFormField>
      
      <UFormField name="password" label="Password">
        <UInput v-model="state.password" type="password" />
      </UFormField>
      
      <UButton type="submit" loading-auto>
        Submit
      </UButton>
    </UForm>
    ```
    
    ### Toast Composable
    
    ```vue
    <script setup>
    const toast = useToast()
    
    function showSuccess() {
      // ❌ v2 API
      // toast.add({ title: 'Success', timeout: 5000 })
      
      // ✅ v3 API
      toast.add({ 
        title: 'Success', 
        duration: 5000  // renamed from timeout
      })
    }
    </script>
    ```
    
    ## New Composables and Patterns
    
    ### useOverlay Composable
    
    The `useModal` and `useSlideover` composables have been unified into `useOverlay`:
    
    ```vue
    <!-- ❌ v2 pattern -->
    <script setup>
    import { MyModal } from '#components'
    
    const modal = useModal()
    
    function openModal() {
      modal.open(MyModal, {
        title: 'Hello',
        onSuccess: () => {
          console.log('Success!')
        }
      })
    }
    </script>
    
    <!-- ✅ v3 pattern -->
    <script setup>
    import { MyModal } from '#components'
    
    const overlay = useOverlay()
    
    async function openModal() {
      const modal = overlay.create(MyModal, {
        props: {
          title: 'Hello'
        }
      })
      
      const instance = modal.open()
      const result = await instance.result
      
      if (result) {
        console.log('Success!')
      }
    }
    </script>
    ```
    
    ### Loading States
    
    Use the new `loading-auto` prop for automatic loading states:
    
    ```vue
    <script setup>
    async function handleSubmit() {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
    }
    </script>
    
    <template>
      <!-- ✅ Automatic loading state -->
      <UButton @click="handleSubmit" loading-auto>
        Submit
      </UButton>
    </template>
    ```
    
    ## Theming System (Tailwind Variants)
    
    ### App Configuration
    
    The theming system has been completely redesigned using Tailwind Variants:
    
    ```ts
    // app.config.ts
    export default defineAppConfig({
      ui: {
        // ❌ v2 theming
        // primary: 'green',
        // gray: 'slate'
        
        // ✅ v3 theming
        colors: {
          primary: 'green',
          neutral: 'slate'
        },
        button: {
          slots: {
            base: 'font-medium rounded-lg',
            label: 'font-semibold'
          },
          defaultVariants: {
            size: 'md',
            color: 'primary'
          }
        }
      }
    })
    ```
    
    ### Component-level Theming
    
    ```vue
    <!-- ❌ v2 ui prop structure -->
    <UButton :ui="{ font: 'font-bold', rounded: 'rounded-full' }" />
    
    <!-- ✅ v3 ui prop structure -->
    <UButton :ui="{ base: 'font-bold rounded-full' }" />
    ```
    
    ## Performance Best Practices
    
    ### Proper Icon Usage
    
    ```vue
    <!-- ✅ Use Nuxt Icon for optimal performance -->
    <UButton icon="i-lucide-plus" />
    <UButton leading-icon="i-heroicons-home" trailing-icon="i-lucide-arrow-right" />
    <UIcon name="i-lucide-plus" />
    ```
    
    ## Vue 3 and Composition API Integration
    
    ### Proper Reactivity with Nuxt UI
    
    ```vue
    <script setup>
    // ✅ Use reactive state for complex forms
    const state = reactive({
      name: '',
      email: '',
      preferences: []
    })
    
    // ✅ Use computed for derived state
    const isValid = computed(() => {
      return state.name.length > 0 && state.email.includes('@')
    })
    
    // ✅ Use watch for side effects
    watch(() => state.email, (newEmail) => {
      // Validate email
    })
    </script>
    
    <template>
      <UForm :state="state" @submit="onSubmit">
        <UFormField name="name" label="Name">
          <UInput v-model="state.name" />
        </UFormField>
        
        <UButton type="submit" :disabled="!isValid">
          Save
        </UButton>
      </UForm>
    </template>
    ```
    
    ## Accessibility Features
    
    Nuxt UI v3 is built on Reka UI, providing excellent accessibility out of the box:
    
    ```vue
    <!-- ✅ Accessibility is automatic -->
    <UButton aria-label="Close dialog">
      <UIcon name="i-lucide-x" />
    </UButton>
    
    <!-- ✅ Keyboard navigation works automatically -->
    <UDropdownMenu :items="menuItems" />
    ```
    
    ## Common Pitfalls to Avoid
    
    1. **Using v2 component names** - Always use the v3 names (`USeparator`, not `UDivider`)
    2. **Forgetting UApp wrapper** - Modals and toasts won't work without it
    3. **Installing included dependencies** - Don't install `@nuxt/fonts`, `@nuxt/icon` separately
    4. **Using Tailwind colors over semantic aliases** - Prefer `color="primary"` over `class="bg-blue-500"`
    5. **Old theming syntax** - Use the new Tailwind Variants structure in `app.config.ts`
    6. **Manual dark mode classes** - Use design tokens instead
    7. **v2 composable APIs** - Use `useOverlay` instead of `useModal`/`useSlideover`
    8. **Old prop names** - Use `items` instead of `links`/`options`
    9. **Missing content slots** - Use `#content`, `#header`, `#body`, `#footer` structure
    10. **Wrong event handlers** - Use `onClick` instead of `click` in item objects
    11. **Incorrect loading prop** - Use `loading-auto` for automatic states
    13. **Missing .npmrc for pnpm** - Add `shamefully-hoist=true` for pnpm projects
    
    ## TypeScript Integration
    
    ### Type Safety
    
    ```vue
    <script setup lang="ts">
    // ✅ Import types from Nuxt UI
    import type { NavigationItem } from '@nuxt/ui'
    
    // ✅ Define typed props
    interface Props {
      items: NavigationItem[]
    }
    
    const props = defineProps<Props>()
    ```
    
    ## Upgrade Checklist
    
    - [ ] Update to Nuxt UI v3.0+
    - [ ] Migrate to Tailwind CSS v4
    - [ ] Add `shamefully-hoist=true` to `.npmrc` if using pnpm
    - [ ] Remove unnecessary dependencies (`@nuxt/fonts`, `@nuxt/icon`, `@nuxtjs/color-mode`)
    - [ ] Wrap app with `UApp` component
    - [ ] Replace renamed components (`UDivider` → `USeparator`, etc.)
    - [ ] Remove deprecated components (`UModals`, `USlideovers`, etc.)
    - [ ] Update prop names (`options` → `items`, `links` → `items`)
    - [ ] Change `click` to `onClick` in item objects
    - [ ] Migrate theming configuration to new Tailwind Variants format
    - [ ] Update color usage to semantic aliases
    - [ ] Replace manual dark mode classes with design tokens
    - [ ] Update composable usage (`useModal` → `useOverlay`)
    - [ ] Fix toast API (`timeout` → `duration`)
    - [ ] Update modal/slideover patterns with proper slots
    - [ ] Migrate content components to `UContentRenderer`
    - [ ] Test accessibility features
    - [ ] Update TypeScript types if needed
    `,
    author: {
      name: "Hugo Richard",
      url: "https://twitter.com/hugorcd__",
      avatar: "https://avatars.githubusercontent.com/u/71938701?v=4",
    },
  }
];
