export const aqaJavaRules = [{
    title: "AQA Java with Selenium, RestAssured, TestNG, and Maven",
    slug: "aqa-java",
    libs: ["selenium", "rest-assured", "testng", "maven"],
    name: "AQA Java with Selenium, RestAssured, TestNG, and Maven",
    description: "Best practices for automated quality assurance (AQA) using Java with Selenium (POM), RestAssured (SOM), TestNG, and Maven.",
    tags: ["java", "selenium", "restassured", "testng", "maven", "automation", "testing"],
    content: `
  
      ### Code Style and Structure
      - Write clean, efficient, and well-documented Java code tailored for test automation.
      - Use best practices for Selenium, RestAssured, and TestNG to ensure robust and maintainable test suites.
      - Implement the Page Object Model (POM) for UI tests, encapsulating UI elements and actions into reusable page classes.
      - Implement the Service Object Model (SOM) for API tests, encapsulating API calls into service classes focused on business operations.
  
      ### Testing Specifics
      - Use TestNG as the test framework to organize and execute tests, leveraging its advanced features (e.g., groups, data providers, listeners).
      - For UI tests, use Selenium with POM to abstract UI interactions, making tests readable and maintainable.
      - For API tests, use RestAssured with SOM to encapsulate API requests and focus tests on validating business logic.
      - Implement proper exception handling in test code to gracefully handle failures (e.g., NoSuchElementException in Selenium).
  
      ### Naming Conventions
      - Use PascalCase for class names (e.g., LoginPage, UserApiService).
      - Use camelCase for method and variable names (e.g., clickSubmitButton, responseStatusCode).
      - Use ALL_CAPS for constants (e.g., BASE_URL, DEFAULT_TIMEOUT).
  
      ### Java Usage
      - Use Java 17 or later features (e.g., records for test data, switch expressions for assertions) where compatible with your tools.
      - Leverage modern Java constructs like lambdas and streams to write concise utility methods or data transformations in tests.
      - Ensure compatibility with Selenium, RestAssured, and TestNG versions when selecting a Java version.
  
      ### Configuration and Properties
      - Use app.properties file for test configurations such as URLs, credentials, or timeouts.
      - Implement environment-specific configurations using Maven profiles.
      - Centralize configuration access with a utility class to read properties dynamically.
  
      ### Dependency Management
      - Use Maven for dependency management and build automation:
        - Include dependencies for selenium-java, rest-assured, testng, in pom.xml.
        - Use maven-surefire-plugin for test execution.
      - Keep dependencies updated to leverage the latest features and fixes while ensuring stability.
  
      ### Testing Best Practices
      - Write independent and isolated tests to avoid inter-test dependencies and ensure repeatability.
      - Use explicit waits in Selenium (e.g., WebDriverWait) instead of implicit waits or Thread.sleep() for reliable UI interactions.
      - Avoid hardcoding test data; use TestNG data providers or external files (e.g., CSV, JSON) for parameterization.
      - Implement retry mechanisms for flaky tests using TestNG listeners, but prioritize fixing root causes of flakiness.
      - Use assertions effectively with clear failure messages (e.g., assertEquals(actual, expected, "Login failed")).
  
      ### UI Testing with Selenium
      - Follow the Page Object Model strictly:
        - Each class represents a single page or component (e.g., LoginPage, DashboardPage).
        - Define UI elements using PageFactory (e.g., @FindBy(id = "username")).
        - Expose actions as methods (e.g., login(String username, String password)), not raw WebElement objects.
      - Return page objects for navigation (e.g., login() returns DashboardPage).
      - Use explicit waits to handle dynamic content (e.g., wait.until(ExpectedConditions.elementToBeClickable(button))).
      - Manage browser sessions by closing them in @AfterMethod or @AfterClass.
  
      ### API Testing with RestAssured
      - Follow the Service Object Model:
        - Each class groups related API endpoints (e.g., UserService for user-related calls).
        - Define methods for business operations (e.g., createUser(User user)).
      - Use request and response specifications to reuse common settings (e.g., base URI, headers, authentication).
      - Use POJO with Lombock classes for request and response bodies.
      - Handle authentication appropriately (e.g., basic auth, OAuth tokens).
  
      ### TestNG Usage
      - Annotate tests with @Test and use attributes like groups (e.g., "smoke", "regression") and priority.
      - Use @Before and @After annotations for setup and teardown (e.g., @BeforeMethod to initialize WebDriver).
      - Implement data providers for data-driven testing (e.g., @DataProvider returning test data arrays).
      - Use listeners for custom behavior (e.g., ITestListener for logging or retrying failed tests).
  
      ### Performance and Reliability
      - Optimize test execution time by avoiding unnecessary delays (e.g., prefer explicit waits over fixed sleeps).
      - Reuse resources like WebDriver instances or API clients where safe to reduce overhead.
  
      ### Logging and Reporting
      - Use SLF4J with Logback for test logging:
        - Log key steps (INFO), errors (ERROR), and debug details (DEBUG).
  
      ### Data Management
      - Manage test data with setup/teardown methods via APIs, database scripts, or mocking.
      - Avoid data sharing between tests to prevent interference; use unique data where possible.
      - Mock external dependencies (e.g., with Mockito) when direct interaction isn't feasible.
  
      ### Build
      - Use Maven for builds:
        - Configure pom.xml with dependencies and test execution settings.
        - Run tests with mvn clean test or specific profiles (e.g., mvn clean test -Pqa).
      - Support multiple environments via Maven profiles or system properties.
  
      ### Additional Best Practices
      - Follow the test automation pyramid: Prioritize unit tests for utilities, followed by API tests, and fewer UI tests.
      - Adhere to API contract testing principles when testing microservices.
      - Maintain clean code principles: Keep tests simple, focused, and maintainable.
    `,
    author: {
      name: "Andrii Korutchak",
      url: "https://github.com/mandkorb",
      avatar: "https://github.com/mandkorb.png"
    }
  }];