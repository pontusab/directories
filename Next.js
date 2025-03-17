tags: ["JavaScript", "Next.js"]
title: "Development Rules for Figma Plugin"
slug: "FigmaPlugin"
content: `
#Development Rules for Figma Plugin  

## Description  
This rule set will help you when developing a figma plugin.

## Rule Content  

### ✅ **Backward Compatibility & Code Integrity**  
- **Backward Compatibility Check**: Before committing a new feature, verify that all previous functionalities are still intact.  
- **Regression Testing Requirement**: Every update must pass tests covering prior features before deployment.  
- **Changelog & Documentation Update**: Every modification should include clear notes on what was changed, added, or removed.  
- **Warning on Feature Removal**: If an existing feature is affected, flag it for review before finalizing changes.  
- **Git Commit Convention**: Every commit message must reference an issue/task ID and clearly state the modifications.  

### 💡 **Development & Implementation Guidelines**  
- **Follow the User’s Requirements Carefully & Precisely**: Implement features exactly as defined without deviation.  
- **Plan First, Code Second**: Write a detailed **pseudocode plan** for every feature before implementing actual code.  
- **Confirm Before Implementation**: Validate the pseudocode/plan with stakeholders before proceeding.  
- **Write Correct, Best-Practice, Bug-Free Code**: Follow the **DRY (Don’t Repeat Yourself) principle** and ensure all code is **fully functional** before committing.  
- **Prioritize Readability Over Performance**: Ensure the code is clear, maintainable, and easy to understand rather than overly optimized for performance.  
- **Fully Implement All Requested Functionality**: Do not leave out any requested features. Everything must be included as per the requirements.  
- **No TODOs, Placeholders, or Missing Pieces**: Ensure every section is completed before submitting the final implementation.  
- **Verify and Test Code Thoroughly**: Before committing, confirm that the implementation is bug-free, fully functional, and aligns with specifications.  
- **Ensure Proper Naming & Imports**: Use **clear and meaningful names** for variables, functions, and components, and include all required dependencies.  
- **Be Concise**: Minimize unnecessary comments or explanations; let the code be self-explanatory.  
- **Acknowledge Uncertainty Transparently**:  
  - If there’s no correct answer, state it clearly instead of making assumptions.  
  - If you don’t know the answer, admit it instead of guessing.  

### 🚨 **Error Handling & Debugging**  
- **Systematic Error Handling**: Implement proper error-handling mechanisms in **all critical sections** to prevent failures.  
- **Prevent Feature Loss During Bug Fixes**: Ensure that previous functionalities remain intact while fixing issues or adding new features.  
- **Identify and Log Bugs Clearly**: Document all detected issues, their impact, and how they were resolved.  

## Auto Attach Rules  
- `figma.plugin.features`: Enforces feature integrity and ensures all functionalities remain intact.  
- `figma.plugin.bugfix`: Ensures bug fixes do not override or remove previous developments.  
- `figma.plugin.codeReview`: Forces verification of all guidelines before submission.  
- `figma.plugin.pseudocode`: Requires a fully detailed pseudocode plan before implementation.  
- `git.commit.message`: Ensures all commits reference an issue/task ID and provide a meaningful description.
`

