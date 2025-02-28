export const elixirRules = [
  {
    tags: ["Elixir", "Phoenix"],
    title: "Elixir Phoenix Cursor Rules",
    libs: ["phoenix", "elixir", "ecto", "live_view", "tailwind", "postgresql"],
    slug: "elixir-phoenix-cursor-rules",
    content: `
  You are an expert in Elixir, Phoenix, PostgreSQL, LiveView, and Tailwind CSS.
  
  Code Style and Structure
  - Write concise, idiomatic Elixir code with accurate examples.
  - Follow Phoenix conventions and best practices.
  - Use functional programming patterns and leverage immutability.
  - Prefer higher-order functions and recursion over imperative loops.
  - Use descriptive variable and function names (e.g., user_signed_in?, calculate_total).
  - Structure files according to Phoenix conventions (controllers, contexts, views, etc.).
  
  Naming Conventions
  - Use snake_case for file names, function names, and variables.
  - Use PascalCase for module names.
  - Follow Phoenix naming conventions for contexts, schemas, and controllers.
  
  Elixir and Phoenix Usage
  - Use Elixir's pattern matching and guards effectively.
  - Leverage Phoenix's built-in functions and macros.
  - Use Ecto effectively for database operations.
  
  Syntax and Formatting
  - Follow the Elixir Style Guide (https://github.com/christopheradams/elixir_style_guide)
  - Use Elixir's pipe operator |> for function chaining.
  - Prefer single quotes for charlists and double quotes for strings.
  
  Error Handling and Validation
  - Use Elixir's "let it crash" philosophy and supervisor trees.
  - Implement proper error logging and user-friendly messages.
  - Use Ecto changesets for data validation.
  - Handle errors gracefully in controllers and display appropriate flash messages.
  
  UI and Styling
  - Use Phoenix LiveView for dynamic, real-time interactions.
  - Implement responsive design with Tailwind CSS.
  - Use Phoenix view helpers and templates to keep views DRY.
  
  Performance Optimization
  - Use database indexing effectively.
  - Implement caching strategies (ETS, Redis).
  - Use Ecto's preload to avoid N+1 queries.
  - Optimize database queries using preload, joins, or select.
  
  Key Conventions
  - Follow RESTful routing conventions.
  - Use contexts for organizing related functionality.
  - Implement GenServers for stateful processes and background jobs.
  - Use Tasks for concurrent, isolated jobs.
  
  Testing
  - Write comprehensive tests using ExUnit.
  - Follow TDD practices.
  - Use ExMachina for test data generation.
  
  Security
  - Implement proper authentication and authorization (e.g., Guardian, Pow).
  - Use strong parameters in controllers (params validation).
  - Protect against common web vulnerabilities (XSS, CSRF, SQL injection).
  
  Follow the official Phoenix guides for best practices in routing, controllers, contexts, views, and other Phoenix components.
  `,
    author: {
      name: "Ilyich Vismara",
      url: "https://x.com/ilyichv_",
      avatar:
        "https://pbs.twimg.com/profile_images/1678750477750620160/Ssn1jz6h_400x400.jpg",
    },
  },
  {
    tags: ["elixir", "phoenix", "ex", "Backend Development"],
    title: "Elixir Development Cursor Rules",
    slug: "elixir-development-cursor-rules",
    libs: ["elixir", "phoenix-framework"],
    content: `
# Elixir and Phoenix Best Practices
*Based on Dave Thomas' (PragDave) coding philosophy*
Important: always use lates versions of packages and libraries, including Phoenix.

## Core Principles

- **Domain-Driven Design**: Organize code around business domains, not technical layers
- **Functional Core, Imperative Shell**: Pure domain logic with side effects at boundaries
- **Explicit Over Implicit**: Prefer clarity over magic
- **Composition Over Inheritance**: Build systems from small, focused components
- **Single Responsibility**: Each module and function should do one thing well
- **Easy to Change**: Design for maintainability and future change
- **Fail Fast**: Detect and handle errors as early as possible
- **YAGNI**: Don't build features until they're needed

## Project Structure

- **Context-Based Organization**: Use Phoenix contexts to define domain boundaries
  lib/my_app/
    accounts/     # User management domain
    billing/      # Payment processing domain
    catalog/      # Product catalog domain

- **API/Implementation Separation**: Public API modules delegate to implementation modules
  # In MyApp.Accounts (API module)

  defdelegate create_user(attrs), to: MyApp.Accounts.UserCreator

- **Boundary Enforcement**: Use tools like NimbleOptions to validate inputs at boundaries

## Coding Patterns

- **Pattern Matching**: Use pattern matching in function heads for control flow
- **Railway-Oriented Programming**: Chain operations with 'with' for elegant error handling

  with {:ok, user} <- find_user(id),
       {:ok, updated} <- update_user(user, attrs) do
    {:ok, updated}
  end

- **Type Specifications**: Add typespecs to all public functions

  @spec create_user(user_attrs()) :: {:ok, User.t()} | {:error, Changeset.t()}

- **Immutable Data Transformations**: Return new state rather than modifying existing state

- **Data Validation**: Validate data at boundaries using Ecto.Changeset even outside of database contexts

  def validate_attrs(attrs) do
    {%{}, %{name: :string, email: :string}}
    |> Ecto.Changeset.cast(attrs, [:name, :email])
    |> Ecto.Changeset.validate_required([:name, :email])
    |> Ecto.Changeset.validate_format(:email, ~r/@/)
  end

- **Result Tuples**: Return tagged tuples like '{:ok, result}' or '{:error, reason}' for operations that can fail

## Process Design

- **GenServer for State**: Use GenServers for stateful processes
- **Supervision Trees**: Design proper supervision hierarchies
- **Registry Pattern**: Use Registry for dynamic process lookup
- **Task.Supervisor**: Use for concurrent, potentially failing operations
- **Process Isolation**: Design processes to crash independently without affecting the whole system
- **Let It Crash**: Embrace the "let it crash" philosophy with proper supervision

## Phoenix Best Practices

- **LiveView-First**: Use LiveView as the primary UI technology
- **Function Components**: Use function components for reusable UI elements
- **PubSub for Real-time**: Use Phoenix PubSub for real-time features
- **Context Boundaries**: Respect context boundaries in controllers and LiveViews
- **Thin Controllers**: Keep controllers thin, delegating business logic to contexts
- **Security First**: Always consider security implications (CSRF, XSS, etc.)

## Testing Strategies

- **Test Public APIs**: Focus on testing public context APIs
- **Mox for Dependencies**: Use Mox for mocking external dependencies
- **Property-Based Testing**: Use StreamData for property-based tests
- **Test Factories**: Use ExMachina for test data creation
- **Test Readability**: Write tests that serve as documentation
- **Arrange-Act-Assert**: Structure tests with clear setup, action, and verification phases

## HTTP and API Integration

- **Req for HTTP Clients**: Use Req instead of HTTPoison or Tesla
- **Behaviours for API Clients**: Define behaviours for API clients to allow easy mocking
- **Error Handling**: Handle network failures and unexpected responses gracefully
- **Timeouts**: Always set appropriate timeouts for external calls
- **Circuit Breakers**: Use circuit breakers for critical external services

## Naming Conventions

- **Snake Case**: For variables and functions ('create_user')
- **Verb-First Functions**: Start function names with verbs ('create_user', not 'user_create')
- **Plural for Collections**: Use plural for collections ('users', not 'user')
- **Consistent Terminology**: Use consistent terms throughout the codebase
- **Intention-Revealing Names**: Choose names that reveal intent, not implementation

## Documentation and Quality

- **Document Public Functions**: Add '@doc' to all public functions
- **Examples in Docs**: Include examples in documentation
- **Credo and Dialyzer**: Use for static analysis and type checking
- **Consistent Formatting**: Use 'mix format' to maintain consistent code style
- **Continuous Refactoring**: Regularly improve code structure without changing behavior
- **Comments**: Write comments only when necessary. Describe why, not what it does.

## Performance Considerations

- **Avoid N+1 Queries**: Use Ecto's preloading and joins
- **Pagination**: Paginate large result sets
- **Background Jobs**: Use Oban for background processing
- **Measure First**: Profile before optimizing
- **Caching**: Apply strategic caching where appropriate
        `,
    author: {
      name: "Adam Juras",
      url: "https://github.com/ajur58",
      avatar: "https://avatars.githubusercontent.com/u/1720867",
    },
  },

];
