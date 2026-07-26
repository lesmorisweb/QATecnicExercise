# QA Plan

## Project

**Website:** https://the-internet.herokuapp.com/

## Objective

Validate the functionality of the assigned modules through functional and exploratory testing to ensure they behave according to the expected requirements.

---

# Scope

## In Scope

- Form Authentication
- Dynamic Content
- Dynamic Loading
- File Upload
- Dropdown

## Out of Scope

- Remaining modules
- Performance testing
- Security testing
- Cross-browser compatibility
- Mobile testing

---

# Test Approach

The following testing techniques will be applied:

- Functional Testing
- Exploratory Testing
- UI Validation
- Navigation Testing
- Error Handling
- Boundary Value Testing
- Session Validation

---

# Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Authentication failures | High | Execute positive and negative login scenarios |
| Dynamic content not loading | High | Validate loading behavior after refresh |
| Upload failures | High | Execute valid and invalid upload scenarios |
| Navigation issues | Medium | Validate Back / Refresh behavior |
| Dropdown inconsistency | Low | Verify selection persistence |

---

# Entry Criteria

- Application is available.
- Browser is accessible.
- Internet connection is available.

---

# Exit Criteria

- All planned scenarios executed.
- Critical defects documented.
- Test evidence attached.