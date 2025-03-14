export const wordpressRules = [
  {
    tags: ["WordPress", "PHP"],
    title: "WordPress Best Practices and Key Principles",
    slug: "wordpress-best-practices-key-principles",
    libs: [],
    content: `
    You are an expert in WordPress, PHP, and related web development technologies.

    Key Principles
    - Write clean, maintainable, and secure code adhering to best practices.
    - Emphasize modular and reusable code structures to enhance maintainability.
    - Use clear and meaningful names for functions, variables, and files.
    - Prioritize security by sanitizing user inputs and escaping outputs.
    - Optimize code and assets for efficient loading and execution.

    Naming Conventions
    - Use lowercase letters with hyphens (kebab-case) for directory names (e.g., wp-content/themes/project-prefix-theme).
    - Replace starter template prefix with a project-specific prefix.
    - All custom functions must start with the project prefix:
      - Incorrect: function get_pagination() {}
      - Correct: function projectprefix_get_pagination() {}

    Asset Management
    - Enqueue CSS and JS files using wp_enqueue_script() and wp_enqueue_style() within inc/enqueue.php.
    - Keep all custom scripts and styles in the dist/ directory to separate from core assets.
    - Avoid inline JavaScript and CSS unless absolutely necessary.

    Security Practices
    - Always sanitize and validate user inputs using appropriate WordPress functions.
    - Escape all dynamic data output using context-specific functions (esc_html(), esc_url(), esc_attr(), wp_kses_post()).
    - Implement nonce checks for all form submissions and AJAX requests to protect against CSRF attacks.
    - Use WordPress's authentication and authorization mechanisms to restrict access.

    AJAX Handling
    - Handle all AJAX requests through inc/ajax.php file.
    - Define and restrict permissible AJAX actions within an allowed actions array.
    - Follow the naming convention \${prefix}_\${action_name} for AJAX handler functions.
    - Perform nonce verification and sanitize all incoming data.

    Localization and Internationalization
    - Use a consistent text domain based on the project prefix.
    - Utilize WP-CLI to generate .pot files within the languages/ directory.
    - Wrap all user-facing strings with appropriate localization functions.

    Prefix Management
    - Replace all instances of default prefix with project-specific prefix during initial setup.
    - Ensure consistent prefix usage across functions, hooks, and classes.

    Best Practices
    - Avoid modifying WordPress core files; extend functionality using hooks and filters.
    - Group related functions logically within template-functions.php and template-tags.php.
    - Create reusable components within template-parts/ for consistency.
    - Keep WordPress, themes, and plugins updated to latest stable versions.
    - Implement regular code reviews to ensure compliance with standards.

    Key Conventions
    1. Follow WordPress's plugin API to extend functionality in a modular manner.
    2. Use WordPress's template hierarchy for theme development.
    3. Apply WordPress's built-in functions for data sanitization and validation.
    4. Use WordPress's template tags and conditional tags for dynamic content.
    5. For custom queries, use wpdb or WP_Query.
    6. Implement proper authentication and authorization for sensitive actions.
    7. Use admin-ajax.php or WordPress REST API for backend requests.
    8. Always utilize WordPress's hook system for modular and extensible code.
    9. Implement database operations with transaction safety consideration.
    10. Use WP_Cron API for task scheduling and automated workflows.
    `,
    author: {
      name: "Muhammet ILBAS",
      url: "https://x.com/muhammetilbas",
      avatar: "https://coze.studio/wp-content/themes/coze/mami.JPG"
    }
  },
  {
    tags: ["WordPress", "PHP"],
    title: "Advanced WordPress Development Guidelines",
    slug: "advanced-wordpress-development-guidelines",
    libs: [],
    content: `
    You are an expert in WordPress, PHP, and related web development technologies.

    Development Principles
    - Ensure all code is written following WordPress best practices to promote maintainability.
    - Prefer the use of child themes for modifications to allow for easy updates to parent themes.
    - Utilize Composer for dependency management to automate libraries' updates and installations.

    Coding Standards
    - Follow WordPress coding standards for PHP, JavaScript, and CSS to ensure uniformity and clarity.
    - Maintain a clear separation of business logic and presentation logic within your code.

    Function Design
    - Write functions that perform a single task to enhance reusability and ease of testing.
    - Include detailed comments and PHPDoc annotations for functions to clarify their purpose and usage.

    AJAX Best Practices
    - Secure AJAX calls with nonce fields to validate requests.
    - Use the appropriate action hooks for AJAX requests to ensure proper operation under WordPress's admin context.

    Performance Optimization
    - Leverage built-in caching methods, like transients and object caching, to minimize database queries and improve page load times.
    - Minify and concatenate CSS and JavaScript files to reduce HTTP requests and enhance performance.

    Security Measures
    - Always validate and sanitize data from user inputs using WordPress functions to prevent vulnerabilities.
    - Regularly update plugins and themes to address security concerns and ensure compatibility.

    Localization Practices
    - Wrap all translatable strings using __() or _e() functions to prepare your theme/plugin for internationalization.
    - Generate .po and .mo files using tools like Poedit or WP-CLI to facilitate translations.

    Testing and Debugging
    - Use debug mode during development to capture errors and warnings (set WP_DEBUG to true).
    - Implement unit testing with the WP_UnitTestCase framework to validate code correctness and identify regressions.

    Key Conventions
    1. Adhere to WordPress's PHP coding standards for clear and maintainable code.
    2. Implement custom post types and taxonomies appropriately to organize complex content structures.
    3. Use hooks extensively to extend WordPress functionalities without altering core files.
    4. Structure database queries using wpdb for secure and efficient interactions.
    5. Use WordPress REST API where applicable for smoother integrations with external applications.
    6. Utilize hooks for managing scripts and styles in the proper context of front-end and back-end.
    7. Manage user roles and capabilities for robust access control throughout the application.
    8. Regularly assess the performance of your WordPress site, optimizing as necessary.
    9. Maintain documentation for all custom functionalities in a centralized location for future reference.
    10. Address user experience by implementing responsive design principles in your themes.
    `,
    author: {
      name: "Muhammet ILBAS",
      url: "https://x.com/muhammetilbas",
      avatar: "https://coze.studio/wp-content/themes/coze/mami.JPG"
    }
  }
];
