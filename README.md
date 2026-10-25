UI Automation Framework

Overview

A UI automation framework for testing the top 5 P0 (business-critical) customer journeys of "Amazon.in" (https://www.amazon.in/), built using Playwright and TypeScript. It follows the Page Object Model (POM) for maintainability and reusability.

Tech Stack

- Language: TypeScript
- Automation: Playwright
- Design Pattern: Page Object Model (POM)
- Reporting: Playwright HTML Report
- CI/CD: GitHub Actions

P0 Test Scenarios

Test ID| Scenario| Priority
TC_001| Verify homepage loads successfully| P0
TC_002| Verify product search functionality| P0
TC_003| Verify product details are displayed| P0
TC_004| Verify product can be added to cart| P0
TC_005| Verify cart quantity can be updated| P0

Detailed test cases, including preconditions, steps, and expected results, are documented in "TEST_CASES.md".

Project Structure

- "pages/" – Page Object Model classes
- "tests/" – Automated test cases
- "config/" – Test data and configuration
- "utils/" – Reusable helper functions
- ".github/workflows/" – GitHub Actions workflow
- "reports/" – Test reports and sample artefacts
- "playwright.config.ts" – Playwright configuration

Prerequisites

- Node.js and npm
- Git
- VS Code (recommended)
- Internet access

Installation

npm ci
npx playwright install chromium

Execution

Run all tests:

npm test

Run tests with a visible browser:

npm run test --headed

Run a single test file:

npm run test --test.spec.ts

Run smoke tests:

npm run test:smoke

View the HTML report:

npm run report
