# Test Cases

## Module: Form Authentication

---

## FA_TC_001 - Successful Login

| Field | Value |
|-------|-------|
| **ID** | FA_TC_001 |
| **Priority** | High |
| **Type** | Positive |
| **Related Scenario** | FA_SC_001 |

### Objective

Verify that a registered user can successfully authenticate using valid credentials.

### Preconditions

- The user is on the **Form Authentication** page.
- Valid credentials are available.

### Test Data

| Username | Password |
|----------|----------|
| `tomsmith` | `SuperSecretPassword!` |

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Enter username `tomsmith`. | Username is accepted. |
| 2 | Enter password `SuperSecretPassword!`. | Password is accepted. |
| 3 | Click **Login**. | User is redirected to the Secure Area. |
| 4 | Verify the page content. | Success message is displayed and the **Logout** button is visible. |

### Expected Result

✅ The user is successfully authenticated and can access the Secure Area.

---

## FA_TC_002 - Login with Invalid Username

| Field | Value |
|-------|-------|
| **ID** | FA_TC_002 |
| **Priority** | High |
| **Type** | Negative |
| **Related Scenario** | FA_SC_002 |

### Objective

Verify that authentication fails when an invalid username is provided.

### Preconditions

- The user is on the **Form Authentication** page.

### Test Data

| Username | Password |
|----------|----------|
| `invalidUser` | `SuperSecretPassword!` |

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Enter an invalid username. | Username is accepted as input. |
| 2 | Enter a valid password. | Password is accepted as input. |
| 3 | Click **Login**. | Authentication fails. |
| 4 | Verify the error message. | The message **"Your username is invalid!"** is displayed. |

### Expected Result

✅ The user remains on the login page and receives an authentication error.

---

## FA_TC_003 - Login with Invalid Password

| Field | Value |
|-------|-------|
| **ID** | FA_TC_003 |
| **Priority** | High |
| **Type** | Negative |
| **Related Scenario** | FA_SC_003 |

### Objective

Verify that authentication fails when an incorrect password is provided.

### Preconditions

- The user is on the **Form Authentication** page.

### Test Data

| Username | Password |
|----------|----------|
| `tomsmith` | `invalidPassword` |

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Enter username `tomsmith`. | Username is accepted. |
| 2 | Enter an invalid password. | Password is accepted as input. |
| 3 | Click **Login**. | Authentication fails. |
| 4 | Verify the error message. | The message **"Your password is invalid!"** is displayed. |

### Expected Result

✅ The user remains on the login page and receives the appropriate authentication error.

---

## FA_TC_004 - Login with Empty Credentials

| Field | Value |
|-------|-------|
| **ID** | FA_TC_004 |
| **Priority** | High |
| **Type** | Negative / Validation |
| **Related Scenario** | FA_SC_004 |

### Objective

Verify the system behavior when the user attempts to log in without entering credentials.

### Preconditions

- The user is on the **Form Authentication** page.

### Test Data

| Username | Password |
|----------|----------|
| *(empty)* | *(empty)* |

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Leave the Username field empty. | Field remains empty. |
| 2 | Leave the Password field empty. | Field remains empty. |
| 3 | Click **Login**. | Authentication is rejected. |
| 4 | Verify the validation message. | The application displays an appropriate validation message indicating that authentication failed. |

### Expected Result

The user cannot log in without providing credentials.

> **Execution Result:** ❌ Failed  
> **Linked Bug:** [BUG](bug.md)

---

## FA_TC_005 - Access Secure Area Without Authentication

| Field | Value |
|-------|-------|
| **ID** | FA_TC_005 |
| **Priority** | High |
| **Type** | Security / Navigation |
| **Related Scenario** | FA_SC_005 |

### Objective

Verify that protected content cannot be accessed without authentication.

### Preconditions

- The user is **not authenticated**.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Navigate directly to `/secure`. | The request is processed. |
| 2 | Verify the response. | The user is redirected to the login page. |

### Expected Result

✅ The Secure Area is accessible only after successful authentication.

---

## FA_TC_006 - Refresh After Successful Login

| Field | Value |
|-------|-------|
| **ID** | FA_TC_006 |
| **Priority** | Medium |
| **Type** | Session Management |
| **Related Scenario** | FA_SC_006 |

### Objective

Verify that the authenticated session remains active after refreshing the page.

### Preconditions

- The user is logged in.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Log in successfully. | Secure Area is displayed. |
| 2 | Refresh the browser. | The page reloads successfully. |
| 3 | Verify the page. | The Secure Area remains accessible and the session is still active. |

### Expected Result

✅ Refreshing the page should not invalidate the authenticated session.

---

## FA_TC_007 - Browser Back After Logout

| Field | Value |
|-------|-------|
| **ID** | FA_TC_007 |
| **Priority** | Medium |
| **Type** | Session Management / Navigation |
| **Related Scenario** | FA_SC_007 |

### Objective

Verify that protected content cannot be accessed after logging out using browser navigation.

### Preconditions

- The user is logged in.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Log in successfully. | Secure Area is displayed. |
| 2 | Click **Logout**. | User is redirected to the login page. |
| 3 | Press the browser **Back** button. | The Secure Area should not be accessible without logging in again. |

### Expected Result

The application should require the user to authenticate again before accessing protected content.

> **Execution Result:** ❌ Failed  
> **Linked Bug:** BUG-002