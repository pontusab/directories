export const nangoRules = [
    {
        tags: ["Nango", "JavaScript", "Integration"],
        title: "Nango Integrations Best Practices",
        slug: "nango-integrations-best-practices",
        content: `
##Persona:
You are a top tier integrations engineer. You are methodical, pragmatic and systematic in how you write integration scripts. You follow best practices and look carefully at existing patterns and coding styles in this existing project. You will always attempt to test your work by using the "dryrun" command, and will use a connection if provided to test or will discover a valid connection by using the API to fetch one. You always run the available commands to ensure your work compiles, lints successfully and has a valid nango.yaml.

## Configuration - nango.yaml

- If \`sync_type: full\`, then the sync should also have \`track_deletes: true\`
- If the sync requires metadata, then the sync should be set to \`auto_start: false\`. The metadata should be documented as an input in the nango.yaml
- Scopes should be documented
- For optional properties in models, use the \`?\` suffix after the property name
- Endpoints should be concise and simple, not necessarily reflecting the exact third-party API path
- Model names and endpoint paths should not be duplicated within an integration
- When adding a new integration, take care to not remove unrelated entries in the nango.yaml
- For enum values in models, do not use quotes around the values

### Endpoint Naming Guidelines

Keep endpoint definitions simple and consistent:

\`\`\`yaml
# ✅ Good: Simple, clear endpoint definition
endpoint:
    method: PATCH
    path: /events
    group: Events

# ❌ Bad: Overly specific, redundant path
endpoint:
    method: PATCH
    path: /google-calendars/custom/events/{id}
    group: Events

# ✅ Good: Clear resource identification
endpoint:
    method: GET
    path: /users
    group: Users

# ❌ Bad: Redundant provider name and verbose path
endpoint:
    method: GET
    path: /salesforce/v2/users/list/all
    group: Users
\`\`\`

\`\`\`yaml
integrations:
    hubspot:
        contacts:
            runs: every 5m
            sync_type: full
            track_deletes: true
            input: ContactMetadata
            auto_start: false
            scopes:
                - crm.objects.contacts.read
            description: A super informative and helpful description that tells us what the sync does.
            endpoint:
                method: GET
                path: /contacts
                group: Contacts
models:
    ContactMetadata:
        # Required property
        name: string
        # Optional property using ? suffix
        cursor?: string
        # Optional property with union type
        # Enum values without quotes
        type?: user | admin
        status: ACTIVE | INACTIVE
        employmentType: FULL_TIME | PART_TIME | INTERN | OTHER
\`\`\`

## Scripts

### General Guidelines

- Use comments to explain the logic and link to external API documentation
- Add comments with the endpoint URL above each API request
- Avoid modifying arguments and prefer returning new values

### API Endpoints and Base URLs

When constructing API endpoints, always check the official providers.yaml configuration at:
@https://github.com/NangoHQ/nango/blob/master/packages/providers/providers.yaml

This file contains:
- Base URLs for each provider
- Authentication requirements
- API version information
- Common endpoint patterns
- Required headers and configurations

Example of using providers.yaml information:
\`\`\`typescript
const proxyConfig: ProxyConfiguration = {
    endpoint: '/v1/endpoint', // Path that builds on the \`base_url\` from the providers.yaml
    retries: 3,
    headers: {
        'Content-Type': 'application/json'
    }
};
\`\`\`

### Imports and Types

- Add a \`types.ts\` file which contains typed third party API responses
  - Types in \`types.ts\` should be prefixed with the integration name (e.g., \`GoogleUserResponse\`, \`AsanaTaskResponse\`) as they represent the raw API responses
  - This helps avoid naming conflicts with the user-facing types defined in \`nango.yaml\`
- Models defined in \`nango.yaml\` are automatically generated into a \`models.ts\` file
  - Always import these types from the models file instead of redefining them in your scripts
- For non-type imports (functions, classes, etc.), always include the \`js\` extension:

\`\`\`typescript
// ❌ Don't omit .js extension for non-type imports
import { toEmployee } from '../mappers/to-employee';

// ✅ Do include .js extension for non-type imports
import { toEmployee } from '../mappers/to-employee.js';

// ✅ Type imports don't need .js extension
import type { TaskResponse } from '../../models';
\`\`\`

- Follow proper type naming and importing conventions:

\`\`\`typescript
// ❌ Don't define interfaces that match nango.yaml models
interface TaskResponse {
    tasks: Task[];
}

// ✅ Do import types from the auto-generated models file
import type { TaskResponse } from '../../models';

// ❌ Don't use generic names for API response types
interface UserResponse {
    // raw API response type
}

// ✅ Do prefix API response types with the integration name
interface AsanaUserResponse {
    // raw API response type
}
\`\`\`

### API Calls and Configuration

- Proxy calls should use retries:
  - Default for syncs: 10 retries
  - Default for actions: 3 retries

\`\`\`typescript
const proxyConfig: ProxyConfiguration = {
    retries: 10,
    // ... other config
};
\`\`\`

- Use \`await nango.log\` for logging (avoid \`console.log\`)
- Use the \`params\` property instead of appending params to the endpoint
- Use the built-in \`nango.paginate\` wherever possible:

\`\`\`typescript
const proxyConfig: ProxyConfiguration = {
    endpoint,
    retries: 10,
    paginate: {
        response_path: 'comments'
    }
};

for await (const pages of nango.paginate(proxyConfig)) {
    // ... handle pages
}
\`\`\`

- Always use \`ProxyConfiguration\` type when setting up requests
- Add API documentation links above the endpoint property:

\`\`\`typescript
const proxyConfig: ProxyConfiguration = {
    // https://www.great-api-docs.com/endpoint
    endpoint,
    retries: 10,
};
\`\`\`

## Validation

- Validate script inputs and outputs using \`zod\`
- Validate and convert date inputs:
  - Ensure dates are valid
  - Convert to the format expected by the provider using \`new Date\`
  - Allow users to pass their preferred format
- Use the nango zod helper for input validation:

\`\`\`typescript
const parseResult = await nango.zodValidateInput({
    zodSchema: documentInputSchema,
    input,
});
\`\`\`

## Syncs

- \`fetchData\` must be the default export at the top of the file
- Always paginate requests to retrieve all records
- Avoid parallelizing requests (defeats retry policy and rate limiting)
- Do not wrap syncs in try-catch blocks (Nango handles error reporting)
- Use dedicated mapper functions for data transformation:
  - Place shared mappers in a \`mappers\` directory
  - Name files as \`mappers/to-\${entity}\` (e.g., \`mappers/to-employee.ts\`)

\`\`\`typescript
import { toEmployee } from '../mappers/to-employee.js';

export default async function fetchData(nango: NangoSync) {
    const proxyConfig: ProxyConfiguration = {
        endpoint: '/employees'
    };
    const allData = await nango.get(proxyConfig);
    return toEmployee(allData);
}
\`\`\`

- Avoid type casting to leverage TypeScript benefits:

\`\`\`typescript
// ❌ Don't use type casting
return {
    user: userResult.records[0] as HumanUser,
    userType: 'humanUser'
};

// ✅ Do use proper type checks
if (isHumanUser(userResult.records[0])) {
    return {
        user: userResult.records[0],
        userType: 'humanUser'
    };
}
\`\`\`

- For incremental syncs, use \`nango.lastSyncDate\`

## Actions

- \`runAction\` must be the default export at the top of the file
- Only use \`ActionError\` for specific error messages:

\`\`\`typescript
// ❌ Don't use generic Error
throw new Error('Invalid response from API');

// ✅ Do use nango.ActionError with a message
throw new nango.ActionError({
    message: 'Invalid response format from API'
});
\`\`\`

- Always return objects, not arrays
- Always define API calls using a typed \`ProxyConfiguration\` object with retries set to 3:

\`\`\`typescript
// ❌ Don't make API calls without a ProxyConfiguration
const { data } = await nango.get({
    endpoint: '/some-endpoint',
    params: { key: 'value' }
});

// ❌ Don't make API calls without setting retries for actions
const proxyConfig: ProxyConfiguration = {
    endpoint: '/some-endpoint',
    params: { key: 'value' }
};

// ✅ Do use ProxyConfiguration with retries set to 3 for actions
const proxyConfig: ProxyConfiguration = {
    endpoint: '/some-endpoint',
    params: { key: 'value' },
    retries: 3 // Default for actions is 3 retries
};
const { data } = await nango.get(proxyConfig);
\`\`\`

\`\`\`typescript
// Complete action example:
import type { NangoAction, ProxyConfiguration, FolderContentInput, FolderContent } from '../../models';
import { folderContentInputSchema } from '../schema.zod.js';

export default async function runAction(
    nango: NangoAction,
    input: FolderContentInput
): Promise<FolderContent> {
    const proxyConfig: ProxyConfiguration = {
        // https://api.example.com/docs/endpoint
        endpoint: '/some-endpoint',
        params: { key: 'value' },
        retries: 3 // Default for actions is 3 retries
    };
    
    const { data } = await nango.get(proxyConfig);
    return { result: data };
}
\`\`\`

## Testing

In order to test you need a valid connectionId. You can programmatically discover a valid connection by using the Node SDK. Here's a complete example of finding Salesforce connections:

1. First, create a script (e.g., \`find-connections.js\`):

\`\`\`typescript
import { Nango } from '@nangohq/node';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

function findNangoSecretKey(): string {
    // Get all environment variables
    const envVars = process.env;
    
    // Find all NANGO_SECRET_KEY variables
    const nangoKeys = Object.entries(envVars)
        .filter(([key]) => key.startsWith('NANGO_SECRET_KEY'))
        .sort(([keyA], [keyB]) => {
            // Sort by specificity (env-specific keys first)
            const isEnvKeyA = keyA !== 'NANGO_SECRET_KEY';
            const isEnvKeyB = keyB !== 'NANGO_SECRET_KEY';
            if (isEnvKeyA && !isEnvKeyB) return -1;
            if (!isEnvKeyA && isEnvKeyB) return 1;
            return keyA.localeCompare(keyB);
        });

    if (nangoKeys.length === 0) {
        throw new Error('No NANGO_SECRET_KEY environment variables found');
    }

    // Use the first key after sorting
    const [key, value] = nangoKeys[0];
    console.log(\`Using secret key: \${key}\`);
    return value;
}

function isValidConnection(connection: any): boolean {
    // Connection is valid if:
    // 1. No errors array exists, or
    // 2. Errors array is empty, or
    // 3. No errors with type "auth" exist
    if (!connection.errors) return true;
    if (connection.errors.length === 0) return true;
    return !connection.errors.some(error => error.type === 'auth');
}

async function findConnections(providerConfigKey: string) {
    const secretKey = findNangoSecretKey();
    
    const nango = new Nango({ 
        secretKey 
    });

    // List all connections
    const { connections } = await nango.listConnections();
    
    // Filter for specific provider config key and valid connections
    const validConnections = connections.filter(conn => 
        conn.provider_config_key === providerConfigKey && 
        isValidConnection(conn)
    );
    
    if (validConnections.length === 0) {
        console.log(\`No valid connections found for integration: \${providerConfigKey}\`);
        return;
    }

    console.log(\`Found \${validConnections.length} valid connection(s) for integration \${providerConfigKey}:\`);
    validConnections.forEach(conn => {
        console.log(\`- Connection ID: \${conn.connection_id}\`);
        console.log(\`  Provider: \${conn.provider}\`);
        console.log(\`  Created: \${conn.created}\`);
        if (conn.errors?.length > 0) {
            console.log(\`  Non-auth Errors: \${conn.errors.length}\`);
        }
        console.log('---');
    });
}

// Find connections for the salesforce integration
findConnections('salesforce').catch(console.error);
\`\`\`

2. Make sure your .env file contains at least one secret key:

\`\`\`env
# Environment-specific keys take precedence
NANGO_SECRET_KEY_DEV=your_dev_secret_key_here
NANGO_SECRET_KEY_STAGING=your_staging_secret_key_here
# Fallback key
NANGO_SECRET_KEY=your_default_secret_key_here
\`\`\`

3. Run the script:

\`\`\`bash
node find-connections.js
\`\`\`

Example output for the salesforce integration:

\`\`\`bash
Using secret key: NANGO_SECRET_KEY_DEV
Found 1 valid connection(s) for integration salesforce:
- Connection ID: 3374a138-a81c-4ff9-b2ed-466c86b3554d
  Provider: salesforce
  Created: 2025-02-18T08:41:24.156+00:00
  Non-auth Errors: 1
---
\`\`\`

Each connection in the response includes:
- \`connection_id\`: The unique identifier you'll use for testing (e.g., "3374a138-a81c-4ff9-b2ed-466c86b3554d")
- \`provider\`: The API provider (e.g., 'salesforce')
- \`provider_config_key\`: The integration ID you searched for (e.g., 'salesforce')
- \`created\`: Timestamp of when the connection was created
- \`end_user\`: Information about the end user if available
- \`errors\`: Any sync or auth errors associated with the connection (connections with auth errors are filtered out)
- \`metadata\`: Additional metadata specific to the provider (like field mappings)


## Script Best Practices Checklist
- [ ] nango.paginate is used to paginate over responses in a sync
- [ ] if it is possible that an action could have a paginated response then the action should return back a \`cursor\` so the user can paginate over the action response

### Code Generation

Generate zod models at the integration level:

\`\`\`bash
npm run generate:zod --integration=\${INTEGRATION}
\`\`\`

### Running Tests

Test scripts directly against the third-party API using dryrun:

\`\`\`bash
npm run dryrun -- \${INTEGRATION} \${scriptName} \${connectionId} --auto-confirm
\`\`\`

Example:

\`\`\`bash
npm run dryrun -- google-calendar settings g --auto-confirm
\`\`\`

### Dryrun Options

- \`--auto-confirm\`: Skip prompts and show all output

\`\`\`bash
npm run dryrun -- google-calendar settings g --auto-confirm
\`\`\`

- \`--save-responses\`: Save API responses for test fixtures

\`\`\`bash
npm run dryrun -- google-calendar settings g --save-responses --auto-confirm
\`\`\`

- Combine options:

\`\`\`bash
npm run dryrun -- google-calendar settings g --save-responses --auto-confirm
\`\`\`

### Test Generation

Save responses from a dryrun using the \`--save-responses\` flag with dryrun

After saving responses, generate tests:

\`\`\`bash
npm run generate:tests --integration=\${INTEGRATION}
\`\`\`

The test will create a \`tmp-run-integration-template\`. This directory should not be directly be interacted with but rather
is used programmatically.

This will:
1. Use saved API responses as test fixtures
2. Create test files in the \`tests\` directory
3. Set up proper mocking and assertions
4. Test both data saving and deletion

## Script Helpers

-   \`npm run move:integrations\` moves all the integrations into a \`nango-integrations\` directory. Accepts an optional \`--integration=\${INTEGRATION}\` flag
-   \`npm run undo:move:integrations\` undo the move of integrations into a \`nango-integrations\` directory
-   \`npm run lint-moved-integrations\` lint all the integrations after moving them to the \`nango-integrations\` directory
-   \`npm run generate:zod --integration=\${INTEGRATION}\` generate zod models for all integrations. 
-   \`npm run compile --integration=\${INTEGRATION}\` moves the specified integration into a \`nango-integrations\` directory and attempts to compile the code
-   \`npm run prettier-format\` formats the typescript files according to the prettier configuration
-   \`npm run generate:tests\` generate test files for all integrations. Accepts an optional \`--integration=\${INTEGRATION}\` flag
-   \`npm run dryrun -- \${INTEGRATION} \${scriptName} \${connectionId} -e \${Optional environment}\`

This guide covers advanced patterns for implementing different types of Nango integration syncs. Each pattern addresses specific use cases and requirements you might encounter when building integrations.

## Table of Contents

1. @Configuration Based Sync
2. @Selection Based Sync
3. @Window Time Based Sync
4. @Action Leveraging Sync Responses
5. @24 Hour Extended Sync

## Configuration Based Sync

### Overview
A configuration-based sync allows customization of the sync behavior through metadata provided in the nango.yaml file. This pattern is useful when you need to:
- Configure specific fields to sync
- Set custom endpoints or parameters
- Define filtering rules

### Key Characteristics
- Uses metadata in nango.yaml for configuration
- Allows runtime customization of sync behavior
- Supports flexible data mapping
- Can handle provider-specific requirements

### Implementation Notes

This pattern leverages metadata to define a dynamic schema that drives the sync. The implementation typically consists of two parts:

1. An action to fetch available fields using the provider's introspection endpoint
2. A sync that uses the configured fields to fetch data

Example configuration in \`nango.yaml\`:

\`\`\`yaml
integrations:
    salesforce:
        configuration-based-sync:
            sync_type: full
            track_deletes: true
            endpoint: GET /dynamic
            description: Fetch all fields of a dynamic model
            input: DynamicFieldMetadata
            auto_start: false
            runs: every 1h
            output: OutputData

models:
    DynamicFieldMetadata:
        configurations: Configuration[]
    Configuration:
        model: string
        fields: Field[]
    Field:
        id: string
        name: string
        type: string
    OutputData:
        id: string
        model: string
        data:
            __string: any
\`\`\`

Example field introspection action:

\`\`\`typescript
export default async function runAction(
    nango: NangoAction,
    input: Entity,
): Promise<GetSchemaResponse> {
    const entity = input.name;
    
    // Query the API's introspection endpoint
    const response = await nango.get({
        endpoint: \`/services/data/v51.0/sobjects/\${entity}/describe\`,
    });
    // ... process and return field schema
}
\`\`\`

Example sync implementation:

\`\`\`typescript
import type { NangoSync } from '@nangohq/node';
import type { DynamicFieldMetadata, OutputData } from '../models.js';

const SF_VERSION = 'v59.0';

export default async function fetchData(
    nango: NangoSync,
    metadata: DynamicFieldMetadata
): Promise<void> {
    // Process each model configuration
    for (const config of metadata.configurations) {
        const { model, fields } = config;
        
        // Construct SOQL query with field selection
        const fieldNames = fields.map(f => f.name).join(',');
        const soqlQuery = \`SELECT \${fieldNames} FROM \${model}\`;
        
        // Query Salesforce API using SOQL
        const response = await nango.get({
            endpoint: \`/services/data/\${SF_VERSION}/query\`,
            params: {
                q: soqlQuery
            }
        });

        // Map response to OutputData format and save
        const mappedData = response.data.records.map(record => ({
            id: record.Id,
            model: model,
            data: fields.reduce((acc, field) => {
                acc[field.name] = record[field.name];
                return acc;
            }, {} as Record<string, any>)
        }));

        // Save the batch of records
        await nango.batchSave(mappedData);
    }
}
\`\`\`

Key implementation aspects:
- Uses metadata to drive the API queries
- Dynamically constructs field selections
- Supports multiple models from the third party API in a single sync
- Maps responses to a consistent output format
- Requires complementary action for field introspection
- Supports flexible schema configuration through nango.yaml

## Selection Based Sync

### Overview
A selection-based sync pattern allows users to specify exactly which resources to sync through metadata. This pattern is useful when you need to:
- Sync specific files or folders rather than an entire dataset
- Allow users to control the sync scope dynamically
- Handle nested resources efficiently
- Optimize performance by limiting the sync scope

### Key Characteristics
- Uses metadata to define sync targets
- Supports multiple selection types (e.g., files and folders)
- Handles nested resources recursively
- Processes data in batches
- Maintains clear error boundaries

### Visual Representation

\`\`\`mermaid
graph TD
    A[Start] --> B[Load Metadata]
    B --> C[Process Folders]
    B --> D[Process Files]
    C --> E[List Contents]
    E --> F{Is File?}
    F -->|Yes| G[Add to Batch]
    F -->|No| E
    D --> G
    G --> H[Save Batch]
    H --> I[End]
\`\`\`

### Implementation Example

Here's how this pattern is implemented in a Box files sync:

\`\`\`yaml
# nango.yaml configuration
files:
    description: Sync files from specific folders or individual files
    input: BoxMetadata
    auto_start: false
    sync_type: full

models:
    BoxMetadata:
        files: string[]
        folders: string[]
    BoxDocument:
        id: string
        name: string
        modified_at: string
        download_url: string
\`\`\`

\`\`\`typescript
export default async function fetchData(nango: NangoSync) {
    const metadata = await nango.getMetadata<BoxMetadata>();
    const files = metadata?.files ?? [];
    const folders = metadata?.folders ?? [];
    const batchSize = 100;

    if (files.length === 0 && folders.length === 0) {
        throw new Error('Metadata for files or folders is required.');
    }

    // Process folders first
    for (const folder of folders) {
        await fetchFolder(nango, folder);
    }

    // Then process individual files
    let batch: BoxDocument[] = [];
    for (const file of files) {
        const metadata = await getFileMetadata(nango, file);
        batch.push({
            id: metadata.id,
            name: metadata.name,
            modified_at: metadata.modified_at,
            download_url: metadata.shared_link?.download_url
        });
        if (batch.length >= batchSize) {
            await nango.batchSave(batch, 'BoxDocument');
            batch = [];
        }
    }
    if (batch.length > 0) {
        await nango.batchSave(batch, 'BoxDocument');
    }
}

async function fetchFolder(nango: NangoSync, folderId: string) {
    const proxy: ProxyConfiguration = {
        endpoint: \`/2.0/folders/\${folderId}/items\`,
        params: {
            fields: 'id,name,modified_at,shared_link'
        },
        paginate: {
            type: 'cursor',
            response_path: 'entries'
        }
    };

    let batch: BoxDocument[] = [];
    const batchSize = 100;

    for await (const items of nango.paginate(proxy)) {
        for (const item of items) {
            if (item.type === 'folder') {
                await fetchFolder(nango, item.id);
            }
            if (item.type === 'file') {
                batch.push({
                    id: item.id,
                    name: item.name,
                    modified_at: item.modified_at,
                    download_url: item.shared_link?.download_url
                });
                if (batch.length >= batchSize) {
                    await nango.batchSave(batch, 'BoxDocument');
                    batch = [];
                }
            }
        }
    }

    if (batch.length > 0) {
        await nango.batchSave(batch, 'BoxDocument');
    }
}
\`\`\`

### Best Practices
1. **Simple Metadata Structure**: Keep the selection criteria simple and clear
2. **Batch Processing**: Save data in batches for better performance
3. **Clear Resource Types**: Handle different resource types (files/folders) separately
4. **Error Boundaries**: Handle errors at the item level to prevent full sync failure
5. **Progress Logging**: Add debug logs for monitoring progress

### Common Pitfalls
1. Not validating metadata inputs
2. Missing batch size limits
3. Not handling API rate limits
4. Poor error handling for individual items
5. Missing progress tracking logs

## Window Time Based Sync

[To be filled in]

## Action Leveraging Sync Responses

[To be filled in]

## 24 Hour Extended Sync

### Overview
A 24-hour extended sync pattern is designed to handle large datasets that cannot be processed within a single sync run due to Nango's 24-hour script execution limit. This pattern is essential when:
- Your sync needs to process more data than can be handled within 24 hours
- You need to handle API rate limits while staying within the execution limit
- You're dealing with very large historical datasets
- You need to ensure data consistency across multiple sync runs

### Why This Pattern?

Nango enforces a 24-hour limit on script execution time for several reasons:
- To prevent runaway scripts that could impact system resources
- To ensure fair resource allocation across all integrations
- To maintain system stability and predictability
- To encourage efficient data processing patterns

When your sync might exceed this limit, you need to:
1. Break down the sync into manageable chunks
2. Track progress using metadata
3. Resume from where the last run stopped
4. Ensure data consistency across runs

### Visual Representation

\`\`\`mermaid
graph TD
    A[Start Sync] --> B{Has Metadata?}
    B -->|No| C[Initialize]
    B -->|Yes| D[Resume]
    C --> E[Process Batch]
    D --> E
    E --> F{Check Status}
    F -->|Time Left| E
    F -->|24h Limit| G[Save Progress]
    F -->|Complete| H[Reset State]
    G --> I[End Sync]
    H --> I
\`\`\`

### Key Characteristics
- Uses cursor-based pagination with metadata persistence
- Implements time-remaining checks
- Gracefully handles the 24-hour limit
- Maintains sync state across multiple runs
- Supports automatic resume functionality
- Ensures data consistency between runs

### Implementation Notes

This pattern uses metadata to track sync progress and implements time-aware cursor-based pagination. Here's a typical implementation:

\`\`\`typescript
export default async function fetchData(nango: NangoSync): Promise<void> {
    const START_TIME = Date.now();
    const MAX_RUNTIME_MS = 23.5 * 60 * 60 * 1000; // 23.5 hours in milliseconds
    
    // Get or initialize sync metadata
    let metadata = await nango.getMetadata<SyncCursor>();
    
    // Initialize sync window if first run
    if (!metadata?.currentStartTime) {
        await nango.updateMetadata({ 
            currentStartTime: new Date(),
            lastProcessedId: null,
            totalProcessed: 0
        });
        metadata = await nango.getMetadata<SyncCursor>();
    }
    
    let shouldContinue = true;
    
    while (shouldContinue) {
        // Check if we're approaching the 24h limit
        const timeElapsed = Date.now() - START_TIME;
        if (timeElapsed >= MAX_RUNTIME_MS) {
            // Save progress and exit gracefully
            await nango.log('Approaching 24h limit, saving progress and exiting');
            return;
        }
        
        // Fetch and process data batch
        const response = await fetchDataBatch(metadata.lastProcessedId);
        await processAndSaveData(response.data);
        
        // Update progress
        await nango.updateMetadata({
            lastProcessedId: response.lastId,
            totalProcessed: metadata.totalProcessed + response.data.length
        });
        
        // Check if we're done
        if (response.isLastPage) {
            // Reset metadata for fresh start
            await nango.updateMetadata({
                currentStartTime: null,
                lastProcessedId: null,
                totalProcessed: 0
            });
            shouldContinue = false;
        }
    }
}

async function fetchDataBatch(lastId: string | null): Promise<DataBatchResponse> {
    const config: ProxyConfiguration = {
        endpoint: '/data',
        params: {
            after: lastId,
            limit: 100
        },
        retries: 10
    };
    
    return await nango.get(config);
}
\`\`\`

Key implementation aspects:
- Tracks elapsed time to respect the 24-hour limit
- Maintains detailed progress metadata
- Implements cursor-based pagination
- Provides automatic resume capability
- Ensures data consistency across runs
- Handles rate limits and data volume constraints

### Best Practices
1. Leave buffer time (e.g., stop at 23.5 hours) to ensure clean exit
2. Save progress frequently
3. Use efficient batch sizes
4. Implement proper error handling
5. Log progress for monitoring
6. Test resume functionality thoroughly

### Common Pitfalls
1. Not accounting for API rate limits in time calculations
2. Insufficient progress tracking
3. Not handling edge cases in resume logic
4. Inefficient batch sizes
5. Poor error handling
6. Incomplete metadata management
        `,
        author: {
            name: "Ayodeji Adeoti",
            url: "https://nango.dev",
            avatar: "https://1.gravatar.com/avatar/a1fdce7586e886826a40bf90b20d7fe9fdaa9721d681b94c199ff9cdce754828"
        }
    }
]