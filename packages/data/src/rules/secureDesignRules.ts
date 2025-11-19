// Security Guidelines Interface
interface SecurityGuideline {
  id: string | number;
  title: string;
  description: string;
  tags: string[];
}

// Foundational Instructions for LLM
export const foundationalInstructions: string[] = [
  "As a senior security engineer, consistently generate secure code that inherently prevents top security weaknesses.",
  "Ensure code design and implementation is inherently safe and secure rather than merely renaming methods with 'secure_' prefixes.",
  "Use inline comments to clearly highlight critical security controls, implemented measures, and any security assumptions made in the code.",
  "Adhere strictly to best practices from OWASP, with particular consideration for the OWASP Top ten 2025 web application security risks and OWASP Top 10 2025 LLM security risks.",
  "Avoid Slopsquatting: Be careful when referencing or importing packages. Do not guess if a package exists. Comment on any low reputation or uncommon packages you have included."
];

// OWASP Top 10 2025 Web Application Security Risks
export const owaspWeb2025: SecurityGuideline[] = [
  {
    id: "A01:2021",
    title: "Broken Access Control",
    description: "Moves up from the fifth position; 94% of applications were tested for some form of broken access control. The 34 Common Weakness Enumerations (CWEs) mapped to Broken Access Control had more occurrences in applications than any other category.",
    tags: ["access-control", "authentication", "authorization"]
  },
  {
    id: "A02:2021",
    title: "Cryptographic Failures",
    description: "Shifts up one position to #2, previously known as Sensitive Data Exposure, which was broad symptom rather than a root cause. The renewed focus here is on failures related to cryptography which often leads to sensitive data exposure or system compromise.",
    tags: ["cryptography", "data-protection", "encryption"]
  },
  {
    id: "A03:2021",
    title: "Injection",
    description: "Slides down to the third position. 94% of the applications were tested for some form of injection, and the 33 CWEs mapped into this category have the second most occurrences in applications. Cross-site Scripting is now part of this category in this edition.",
    tags: ["input-validation", "sql-injection", "xss"]
  },
  {
    id: "A04:2021",
    title: "Insecure Design",
    description: "A new category for 2021, with a focus on risks related to design flaws. If we genuinely want to move left as an industry, it calls for more use of threat modeling, secure design patterns and principles, and reference architectures.",
    tags: ["design", "threat-modeling", "architecture"]
  },
  {
    id: "A05:2021",
    title: "Security Misconfiguration",
    description: "Moves up from #6 in the previous edition; 90% of applications were tested for some form of misconfiguration. With more shifts into highly configurable software, it's not surprising to see this category move up. The former category for XML External Entities (XXE) is now part of this category.",
    tags: ["configuration", "deployment", "infrastructure"]
  },
  {
    id: "A06:2021",
    title: "Vulnerable and Outdated Components",
    description: "Was previously titled Using Components with Known Vulnerabilities and is #2 in the Top 10 community survey, but also had enough data to make the Top 10 via data analysis. This category moves up from #9 in 2017 and is a known issue that we struggle to test and assess risk. It is the only category not to have any Common Vulnerability and Exposures (CVEs) mapped to the included CWEs, so a default exploit and impact weights of 5.0 are factored into their scores.",
    tags: ["dependencies", "vulnerabilities", "patching"]
  },
  {
    id: "A07:2021",
    title: "Identification and Authentication Failures",
    description: "Was previously Broken Authentication and is sliding down from the second position, and now includes CWEs that are more related to identification failures. This category is still an integral part of the Top 10, but the increased availability of standardized frameworks seems to be helping.",
    tags: ["authentication", "identity", "credentials"]
  },
  {
    id: "A08:2021",
    title: "Software and Data Integrity Failures",
    description: "A new category for 2021, focusing on making assumptions related to software updates, critical data, and CI/CD pipelines without verifying integrity. One of the highest weighted impacts from Common Vulnerability and Exposures/Common Vulnerability Scoring System (CVE/CVSS) data mapped to the 10 CWEs in this category. Insecure Deserialization from 2017 is now a part of this larger category.",
    tags: ["integrity", "ci-cd", "serialization"]
  },
  {
    id: "A09:2021",
    title: "Security Logging and Monitoring Failures",
    description: "Was previously Insufficient Logging & Monitoring and is added from the industry survey (#3), moving up from #10 previously. This category is expanded to include more types of failures, is challenging to test for, and isn't well represented in the CVE/CVSS data. However, failures in this category can directly impact visibility, incident alerting, and forensics.",
    tags: ["logging", "monitoring", "auditing"]
  },
  {
    id: "A10:2021",
    title: "Server-Side Request Forgery",
    description: "Is added from the Top 10 community survey (#1). The data shows a relatively low incidence rate with above average testing coverage, along with above-average ratings for Exploit and Impact potential. This category represents the scenario where the security community members are telling us this is important, even though it's not illustrated in the data at this time.",
    tags: ["ssrf", "networking", "external-requests"]
  }
];

// OWASP Top 10 2025 LLM Security Risks
export const owaspLLM2025: SecurityGuideline[] = [
  {
    id: "LLM01",
    title: "Prompt Injection",
    description: "Attackers manipulate an LLM's behavior by injecting malicious instructions into user inputs, either directly or indirectly through external sources like documents or websites. This remains the top risk due to its high impact and ease of exploitation.",
    tags: ["prompt-injection", "input-validation", "llm-security"]
  },
  {
    id: "LLM02",
    title: "Sensitive Information Disclosure",
    description: "The model unintentionally reveals sensitive data such as personally identifiable information (PII), financial details, health records, or proprietary business information during normal operation.",
    tags: ["data-leakage", "pii", "confidentiality"]
  },
  {
    id: "LLM03",
    title: "Supply Chain Vulnerabilities",
    description: "Risks arising from compromised components in the LLM development and deployment pipeline, including third-party models, datasets, or plugins.",
    tags: ["supply-chain", "third-party", "dependencies"]
  },
  {
    id: "LLM04",
    title: "Data and Model Poisoning",
    description: "Malicious data is introduced during pre-training, fine-tuning, or embedding processes, leading to biased, toxic, or degraded model performance. The 2025 version expands this category to include manipulation beyond just training data.",
    tags: ["data-poisoning", "model-integrity", "training-data"]
  },
  {
    id: "LLM05",
    title: "Improper Output Handling",
    description: "LLM outputs are used without proper validation or sanitization, potentially leading to downstream security issues such as code injection or command execution.",
    tags: ["output-validation", "sanitization", "injection"]
  },
  {
    id: "LLM06",
    title: "Excessive Agency",
    description: "LLMs are granted excessive autonomy or permissions to interact with external systems (e.g., APIs, tools), enabling them to perform harmful actions based on manipulated outputs. This goes beyond improper output handling by allowing the model to act independently.",
    tags: ["privileges", "permissions", "access-control"]
  },
  {
    id: "LLM07",
    title: "System Prompt Leakage",
    description: "The model inadvertently reveals its internal system prompts or instructions, which can be exploited to understand or manipulate its behavior.",
    tags: ["prompt-leakage", "system-prompts", "confidentiality"]
  },
  {
    id: "LLM08",
    title: "Vector and Embedding Weaknesses",
    description: "Vulnerabilities in the vector databases or embedding models used in retrieval-augmented generation (RAG) systems, such as embedding inversion or adversarial retrieval.",
    tags: ["embeddings", "vector-databases", "rag"]
  },
  {
    id: "LLM09",
    title: "Misinformation",
    description: "The model generates false or misleading content, either innocently (hallucination) or as a result of adversarial manipulation, which can have serious consequences in critical applications.",
    tags: ["hallucination", "misinformation", "content-integrity"]
  },
  {
    id: "LLM10",
    title: "Unbounded Consumption",
    description: "LLMs or associated systems consume excessive computational resources (e.g., tokens, API calls, processing time) due to uncontrolled inputs or recursive behaviors, leading to denial-of-service or financial loss.",
    tags: ["resource-consumption", "dos", "cost-management"]
  }
];

// Export all security guidelines
export const securityGuidelines = {
  foundationalInstructions,
  owaspWeb2025,
  owaspLLM2025
};

export default securityGuidelines;

const author = {
  name: "Nerissa K.A.",
  url: "https://github.com/pqcsig1",
};
