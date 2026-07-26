# QA Plan

## Project

**Website:** https://www.saucedemo.com/

## Objective

Validate the core e-commerce workflow through functional and exploratory testing, document defects, and automate critical business flows to ensure the application behaves according to the expected requirements.

---

# Scope

## In Scope

- Authentication
- Inventory
- Shopping Cart
- Checkout
- Responsive behavior (Desktop and Mobile)

## Out of Scope

- Performance testing
- Security testing
- Database validation
- Cross-browser compatibility
- Accessibility testing

---

# Test Approach

The following testing techniques will be applied:

- Functional Testing
- Exploratory Testing
- UI Validation
- Navigation Testing
- Session Validation
- Input Validation
- Boundary Value Testing
- End-to-End (E2E) Testing
- Responsive Testing

---

# Test Environment

| Item | Value |
|------|-------|
| Application | SauceDemo |
| URL | https://www.saucedemo.com/ |
| Browser | Google Chrome (Latest) |
| Desktop Resolution | 1280 × 720 or higher |
| Mobile Resolution | 375 × 667 |

---

# Test Data

| Username | Password | 
|----------|----------|
| standard_user | secret_sauce |
| locked_out_user | secret_sauce |
| problem_user | secret_sauce |
| performance_glitch_user | secret_sauce |

---

# Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Users cannot log in | High | Execute positive and negative authentication scenarios |
| Products are displayed incorrectly | High | Validate product information, images, descriptions and prices |
| Shopping cart does not update correctly | High | Verify add/remove operations and cart badge updates |
| Checkout validation fails | High | Execute positive and negative checkout scenarios |
| Incorrect order summary | High | Validate products, taxes and total amount before completing the purchase |
| Session is lost during navigation | Medium | Validate session persistence after navigation and refresh |
| Responsive layout issues | Medium | Execute the main purchase flow in desktop and mobile viewports |

---

# Defect Management

Defects identified during exploratory and functional testing will be documented in a Trello board.

Each bug report will include:

- Title
- Description
- Steps to Reproduce
- Expected Result
- Actual Result
- Severity
- Priority
- Status
- Evidence (screenshots)

## Bug Workflow

To Do → In Progress → Ready for Retest → Closed

---

# Automation Strategy

Automation will be implemented using **Playwright**.

The automation suite will cover the application's critical business flow, including:

- Login
- Add products to the shopping cart
- Checkout validation

## Automation Scope

### In Scope

- Successful login
- Invalid login validation
- Add products to the cart
- Remove products from the cart
- Complete checkout with valid information
- Checkout field validations

### Out of Scope

- Cross-browser execution
- Visual regression testing
- Performance testing
- Accessibility testing

---

# Entry Criteria

- Application is available.
- Test accounts are active.
- Browser is accessible.
- Internet connection is available.

---

# Exit Criteria

- All planned scenarios have been executed.
- Critical and High severity defects have been reported.
- Test execution results have been documented.
- Evidence has been attached.
- Automation suite executes successfully.

---

# Deliverables

The following artifacts will be delivered:

- QA Planning
- Exploratory Testing
- Test Cases
- Test Run Report
- Trello Board with bug reports
- Playwright Automation Suite
- README with execution instructions