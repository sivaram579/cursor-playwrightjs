# Automation Exercise Test Framework

This is a Playwright-based test automation framework for the Automation Exercise website using the Page Object Model pattern.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Project Structure

```
├── pages/               # Page Object classes
│   ├── BasePage.js      # Base page with common functionality
│   ├── LoginPage.js     # Login page specific functionality
│   └── ProductPage.js   # Product page specific functionality
├── tests/               # Test files
│   ├── login.test.js    # Login test cases
│   └── order.test.js    # Order test cases
├── playwright.config.js # Playwright configuration
└── package.json         # Project dependencies
```

## Running Tests

Run all tests:
```bash
npm test
```

Run tests in headed mode:
```bash
npm run test:headed
```

Run tests in debug mode:
```bash
npm run test:debug
```

Run tests with UI:
```bash
npm run test:ui
```

## Test Cases

1. Login and verify home page
   - Navigates to login page
   - Logs in with credentials
   - Verifies successful login

2. Add item to cart and place order
   - Logs in
   - Adds Men's T-shirt to cart
   - Proceeds to checkout
   - Places order with payment details
   - Verifies order success
