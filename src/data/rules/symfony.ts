export const symfonyRules = [
  {
    tags: ["Symfony", "PHP"],
    title: "Symfony PHP Cursor Rules",
    slug: "symfony-php-cursor-rules",
    libs: [],
    content: `
  # Symfony Development Guidelines 

## Core Principles
- Write concise, technical responses with accurate PHP/Symfony examples
- Prioritize SOLID principles for object-oriented programming and clean architecture
- Follow PHP and Symfony best practices, ensuring consistency and readability
- Design for scalability and maintainability, ensuring the system can grow with ease
- Prefer iteration and modularization over duplication to promote code reuse
- Use consistent and descriptive names for variables, methods, and classes to improve readability

## Dependencies
- Composer for dependency management
- PHP 8.1+
- Symfony 6.0+
- Doctrine ORM
- Twig templating engine

## PHP and Symfony Standards
- Leverage PHP 8.1+ features when appropriate (e.g., typed properties, match expressions)
- Adhere to PSR-12 coding standards for consistent code style
- Always use strict typing: declare(strict_types=1)
- Utilize Symfony's built-in features and components to maximize efficiency
- Follow Symfony's directory structure and bundle organization
- Implement robust error handling and logging:
  > Use Symfony's exception handling and Monolog for logging
  > Create custom exceptions when necessary
  > Employ try-catch blocks for expected exceptions
- Use Symfony's validation component for form and request data
- Implement event listeners and subscribers for cross-cutting concerns
- Utilize Doctrine ORM for database interactions
- Use Doctrine Query Builder for complex database operations
- Create and maintain proper Doctrine migrations

## Symfony Best Practices
- Use Doctrine ORM and DQL over raw SQL queries when possible
- Implement Repository and Service patterns for better code organization and reusability
- Utilize Symfony Security component for authentication and authorization
- Leverage Symfony Cache component (Redis, Memcached) for improved performance
- Use Messenger component for handling asynchronous tasks and message queues
- Implement comprehensive testing using PHPUnit and Panther for unit, functional, and E2E tests
- Use API Platform for building robust and maintainable APIs
- Implement proper error handling using Symfony's error handler and logging system
- Utilize Symfony's validation component and form types for data integrity
- Implement database indexing and use Doctrine's query optimization features
- Use Symfony Profiler for debugging and performance monitoring in development
- Leverage EasyAdmin or API Platform Admin for rapid admin panel development
- Implement proper security measures, including CSRF protection, XSS prevention, and input sanitization

## Code Architecture

### Naming Conventions
- Use consistent naming conventions for folders, classes, and files
- Follow Symfony's conventions: singular for entities, suffix with Controller for controllers
- Use PascalCase for class names, camelCase for method names, and snake_case for database columns

### Controller Design
- Controllers should be final classes to prevent inheritance
- Make controllers read-only (i.e., no property mutations)
- Use constructor injection for dependencies
- Keep controllers thin, delegating business logic to services

### Entity Design
- Entities should be final classes to ensure data integrity
- Use attributes or annotations for Doctrine mapping
- Implement value objects for complex properties

### Services
- Create services in the \`src/Service\` directory
- Organize services into domain-specific directories
- Service classes should be final and immutable
- Use services for complex business logic
- Tag services appropriately for automatic configuration

### Routing
- Use attributes for route definitions
- Maintain consistent and organized routes
- Group related routes using route prefixes
- Consider using subdirectories for controller organization

### Type Declarations
- Always use explicit return type declarations
- Use appropriate PHP type hints for method parameters
- Leverage PHP 8.1+ features like union types and nullable types

### Data Type Consistency
- Be explicit with data type declarations
- Use type hints for properties, method parameters, and return types
- Leverage PHP's strict typing
- Use DTOs for data transfer between layers

### Error Handling
- Use Symfony's exception handling system
- Create custom exceptions when necessary
- Use try-catch blocks for expected exceptions
- Return appropriate HTTP status codes and error responses

### Dependency Injection
- Use constructor injection as the primary DI method
- Configure services in services.yaml
- Use service tags for automatic configuration
- Leverage autowiring and autoconfiguration

### Event System
- Use event dispatching for loose coupling
- Create domain events for business logic
- Implement event subscribers for complex event handling
- Use message bus for command and query separation

### Security
- Implement security using the Security component
- Use voters for fine-grained authorization
- Implement proper password hashing
- Use security advisors when needed

### Performance
- Use appropriate caching strategies
- Implement lazy loading where beneficial
- Use Doctrine's batch processing for large datasets
- Optimize Doctrine queries and indexing

### Testing
- Write unit tests for business logic
- Create functional tests for controllers
- Use Panther for E2E testing
- Implement fixtures for test data

## Key Points
- Follow Symfony's directory structure and bundle organization
- Use dependency injection and services for business logic
- Leverage Symfony's components effectively
- Maintain clean and maintainable code
- Document code thoroughly
- Write comprehensive tests  `,
    author: {
      name: "Umut Ramazan Gedik",
      url: "https://x.com/UmutRamazan7",
      avatar:
        "https://pbs.twimg.com/profile_images/1843937582205263872/-nJw6j2L_400x400.jpg",
    },
  }
];
