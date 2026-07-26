# Module: Authentication

---

## AU_TC_001 - Login with Valid Credentials

| Field | Value |
|-------|-------|
| **ID** | AU_TC_001 |
| **Priority** | High |
| **Type** | Positive |
| **Related Scenario** | Login with valid credentials |

### Objective

Verify that a registered user can log in successfully using valid credentials.

### Preconditions

- The user is on the Login page.

### Test Data

| Username | Password |
|----------|----------|
| standard_user | secret_sauce |

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Enter a valid username. | Username is accepted. |
| 2 | Enter a valid password. | Password is accepted. |
| 3 | Click **Login**. | The Inventory page is displayed. |
| 4 | Verify the page. | The **Products** title is visible. |

### Expected Result

The user is authenticated successfully and redirected to the Inventory page.

---

## AU_TC_002 - Login with Invalid Username

| Field | Value |
|-------|-------|
| **ID** | AU_TC_002 |
| **Priority** | High |
| **Type** | Negative |
| **Related Scenario** | Login with an invalid username |

### Objective

Verify that authentication fails when an invalid username is provided.

### Preconditions

- The user is on the Login page.

### Test Data

| Username | Password |
|----------|----------|
| invalid_user | secret_sauce |

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Enter an invalid username. | Username is entered. |
| 2 | Enter a valid password. | Password is entered. |
| 3 | Click **Login**. | Authentication fails. |
| 4 | Verify the error message. | An authentication error message is displayed. |

### Expected Result

The user remains on the Login page and an authentication error message is displayed.

---

## AU_TC_003 - Login with Invalid Password

| Field | Value |
|-------|-------|
| **ID** | AU_TC_003 |
| **Priority** | High |
| **Type** | Negative |
| **Related Scenario** | Login with an invalid password |

### Objective

Verify that authentication fails when an incorrect password is entered.

### Preconditions

- The user is on the Login page.

### Test Data

| Username | Password |
|----------|----------|
| standard_user | invalid_password |

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Enter a valid username. | Username is entered. |
| 2 | Enter an invalid password. | Password is entered. |
| 3 | Click **Login**. | Authentication fails. |
| 4 | Verify the error message. | An authentication error message is displayed. |

### Expected Result

The user remains on the Login page and an authentication error message is displayed.

---

## AU_TC_004 - Login with Empty Username

| Field | Value |
|-------|-------|
| **ID** | AU_TC_004 |
| **Priority** | Medium |
| **Type** | Validation |
| **Related Scenario** | Login with empty username |

### Objective

Verify that the username field is required.

### Preconditions

- The user is on the Login page.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Leave the username field empty. | Username remains empty. |
| 2 | Enter a valid password. | Password is entered. |
| 3 | Click **Login**. | Authentication fails. |
| 4 | Verify the validation message. | A validation message indicates that the username is required. |

### Expected Result

The application prevents login and displays a validation message.

---

## AU_TC_005 - Login with Empty Password

| Field | Value |
|-------|-------|
| **ID** | AU_TC_005 |
| **Priority** | Medium |
| **Type** | Validation |
| **Related Scenario** | Login with empty password |

### Objective

Verify that the password field is required.

### Preconditions

- The user is on the Login page.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Enter a valid username. | Username is entered. |
| 2 | Leave the password field empty. | Password remains empty. |
| 3 | Click **Login**. | Authentication fails. |
| 4 | Verify the validation message. | A validation message indicates that the password is required. |

### Expected Result

The application prevents login and displays a validation message.

---

## AU_TC_006 - Login with Empty Credentials

| Field | Value |
|-------|-------|
| **ID** | AU_TC_006 |
| **Priority** | Medium |
| **Type** | Validation |
| **Related Scenario** | Login with empty credentials |

### Objective

Verify that authentication is prevented when both credentials are empty.

### Preconditions

- The user is on the Login page.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Leave both fields empty. | No credentials are entered. |
| 2 | Click **Login**. | Authentication fails. |
| 3 | Verify the validation message. | A validation message is displayed. |

### Expected Result

The user cannot log in until the required information is provided.

---

## AU_TC_007 - Login Using a Locked User

| Field | Value |
|-------|-------|
| **ID** | AU_TC_007 |
| **Priority** | High |
| **Type** | Negative |
| **Related Scenario** | Login using a locked user |

### Objective

Verify that a locked user cannot access the application.

### Preconditions

- The user is on the Login page.

### Test Data

| Username | Password |
|----------|----------|
| locked_out_user | secret_sauce |

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Enter the locked user credentials. | Credentials are entered. |
| 2 | Click **Login**. | Login is rejected. |
| 3 | Verify the error message. | The locked user message is displayed. |

### Expected Result

The application prevents access and informs the user that the account is locked.

---

## AU_TC_008 - Logout Successfully

| Field | Value |
|-------|-------|
| **ID** | AU_TC_008 |
| **Priority** | High |
| **Type** | Functional |
| **Related Scenario** | Logout successfully |

### Objective

Verify that a logged-in user can log out successfully.

### Preconditions

- The user is authenticated.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Open the side menu. | The navigation menu is displayed. |
| 2 | Click **Logout**. | The session ends. |
| 3 | Verify the page. | The Login page is displayed. |

### Expected Result

The user is logged out and redirected to the Login page.

---



## AU_TC_009 - Refresh After Login

| Field | Value |
|-------|-------|
| **ID** | AU_TC_009 |
| **Priority** | Medium |
| **Type** | Session |
| **Related Scenario** | Refresh after login |

### Objective

Verify that the authenticated session persists after refreshing the browser.

### Preconditions

- The user is logged in.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Log in successfully. | Inventory page is displayed. |
| 2 | Refresh the browser. | The page reloads. |
| 3 | Verify the session. | The user remains authenticated and the Inventory page is still displayed. |

### Expected Result

Refreshing the browser does not terminate the active session.

---

## AU_TC_010 - Access Inventory Without Authentication

| Field | Value |
|-------|-------|
| **ID** | AU_TC_010 |
| **Priority** | High |
| **Type** | Security / Session |
| **Related Scenario** | Access Inventory without authentication |

### Objective

Verify that unauthenticated users cannot access the Inventory page directly.

### Preconditions

- The user is not logged in.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Enter the Inventory URL directly in the browser. | The request is processed. |
| 2 | Verify the response. | The user is redirected to the Login page or access is denied. |

### Expected Result

Only authenticated users can access the Inventory page.

---

## AU_TC_011 - Prevent Access After Logout Using Browser Back Button

| Field | Value |
|------|------|
| **Module** | Authentication |
| **Priority** | High |
| **Type** | Functional / Session Management |
| **Preconditions** | User is logged in successfully. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to the Login page. | Login page is displayed. |
| 2 | Enter valid credentials (`standard_user` / `secret_sauce`). | Credentials are accepted. |
| 3 | Click the **Login** button. | User is redirected to the Inventory page. |
| 4 | Open the navigation menu. | Navigation menu is displayed. |
| 5 | Click **Logout**. | User is redirected to the Login page. |
| 6 | Click the browser **Back** button. | The Inventory page should not be accessible. |
| 7 | Verify the current page. | The user remains on the Login page or is required to authenticate again. |

### Expected Result

The application must invalidate the user session after logout. Using the browser **Back** button must not allow access to protected pages. The user should remain on the Login page or be redirected there if attempting to access the Inventory page.

### Test Data

| Username | Password |
|----------|----------|
| standard_user | secret_sauce |