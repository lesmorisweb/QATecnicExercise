# QA Tester

## Candidate

> Laura Esmoris

---

# Project Overview

This repository contains the deliverables for the QA Tester.

The objective of this exercise was to validate several web application modules through:

- QA Planning
- Exploratory Testing
- Test Case Design
- Bug Reporting
- Test Execution Documentation

The project follows a structured QA approach, separating each feature into its own documentation.

---

# Project Structure

```
exercise1/

├── QAPlanning.md
│
├── formAuthentication/
│   
│   ├── exploratoryTest.md
│   ├── testCases.md
│   ├── bug.md
│   └── screenshots/
│
├── dynamicContent/
│   ├── exploratoryTest.md
│   ├── testCases.md
│   ├── bug.md
│   └── screenshots/
│
├── dynamicLoading/
│   ├── exploratoryTest.md
│   ├── testCases.md
│   └── screenshots/
│
├── dropdownSelection/
│   ├── exploratoryTest.md
│   ├── testCases.md
│   └── screenshots/
│
├── fileUpload/
│   ├── exploratoryTest.md
│   ├── testCases.md
│   ├── bug.md
│   └── screenshots/
│
└── README.md
```

---

# Exercise 1

Target Website:

https://the-internet.herokuapp.com/

## Modules Tested

- Form Authentication
- Dynamic Content
- Dynamic Loading
- File Upload
- Dropdown

---

# Deliverables

## 1. QA Planning

The QA Planning documentation was written using **BDD/Gherkin**.

Each module includes:

- Scope
- Functional scenarios
- Expected behavior
- Acceptance criteria

---

## 2. Exploratory Testing

Each feature contains an exploratory testing document including:

- Executed scenarios
- Observations
- Evidence
- Notes collected during execution

---

## 3. Test Cases

Detailed manual test cases were created for every explored module.

Each test case contains:

- Objective
- Preconditions
- Test data (when applicable)
- Test steps
- Expected results
- Priority
- Test type

---

## 4. Bug Reports

Detected defects were documented including:

- Description
- Steps to reproduce
- Expected Result
- Actual Result
- Severity
- Priority
- Evidence

---

# Testing Approach

The assessment was performed using a combination of:

- Functional Testing
- Exploratory Testing
- UI Validation
- Navigation Testing
- Session Validation
- Boundary Validation
- Negative Testing

---

# Main Bugs Found

| ID | Module | Summary |
|----|---------|---------|
| BUG-001 | Form Authentication | Secure Area remains accessible after logout using browser Back button |
| BUG-002 | Dynamic Content | Last content block changes despite using `with_content=static` |
| BUG-003 | File Upload | Uploading without selecting a file returns HTTP 500 |

---

# Browser Used

- Google Chrome (latest version)

---

# Notes

Some behaviors (such as the browser Back button or the language displayed in the native file selector) may vary depending on browser implementation or operating system configuration.

Whenever applicable, observations have been documented to distinguish between actual application defects and browser-dependent behavior.

---

# Future Improvements

Given additional time, the following activities could be included:

- Cross-browser testing
- Mobile responsiveness validation
- Accessibility testing
- Performance testing
- Automated regression suite