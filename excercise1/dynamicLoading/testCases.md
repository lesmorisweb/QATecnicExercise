# Module: Dynamic Loading

---

## DL_TC_001 - Verify Dynamic Loading Page is Displayed

| Field | Value |
|-------|-------|
| **ID** | DL_TC_001 |
| **Priority** | Medium |
| **Type** | Functional |
| **Related Scenario** | DL_SC_001 - Dynamic Loading page is visible |

### Objective

Verify that the Dynamic Loading page is displayed correctly.

### Preconditions

- The user navigates to the **Dynamic Loading** page.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Open the Dynamic Loading page. | The page loads successfully. |
| 2 | Verify the page title. | The title **"Dynamically Loaded Page Elements"** is displayed. |
| 3 | Verify the available examples. | The page displays links to **Example 1** and **Example 2**. |

### Expected Result

✅ The Dynamic Loading page is displayed correctly with both available examples.

---

## DL_TC_002 - Verify Example 1 Initial State

| Field | Value |
|-------|-------|
| **ID** | DL_TC_002 |
| **Priority** | Medium |
| **Type** | Functional |
| **Related Scenario** | DL_SC_002 - The Dynamic Loading page, Example 1 |

### Objective

Verify the initial state of Dynamic Loading Example 1.

### Preconditions

- The user is on the **Dynamic Loading** page.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Open **Example 1: Element on page that is hidden**. | The page loads successfully. |
| 2 | Observe the page. | The **Start** button is displayed. |

### Expected Result

✅ The page displays the Start button and is ready to begin the loading process.

---

## DL_TC_003 - Display Hidden Element After Loading

| Field | Value |
|-------|-------|
| **ID** | DL_TC_003 |
| **Priority** | High |
| **Type** | Functional |
| **Related Scenario** | DL_SC_003 - Display hidden element after clicking Start |

### Objective

Verify that the hidden element becomes visible after the loading process completes.

### Preconditions

- The user is on **Example 1**.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Click **Start**. | The loading indicator is displayed. |
| 2 | Wait for the loading process to finish. | The hidden element becomes visible. |
| 3 | Verify the loaded content. | The text **"Hello World!"** is displayed. |

### Expected Result

✅ The hidden element is displayed after the loading process finishes.

---

## DL_TC_004 - Verify Start Button Behavior

| Field | Value |
|-------|-------|
| **ID** | DL_TC_004 |
| **Priority** | Medium |
| **Type** | Functional |
| **Related Scenario** | DL_SC_004 - Start button triggers loading process |

### Objective

Verify that clicking the Start button initiates the loading process.

### Preconditions

- The user is on **Example 1**.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Click **Start**. | The loading process begins. |
| 2 | Observe the page. | The Start button is no longer available while loading. |
| 3 | Verify the loading indicator. | The loading animation is displayed until the process completes. |

### Expected Result

✅ The loading process starts correctly and prevents multiple executions.

---

## DL_TC_005 - Display Dynamically Created Element

| Field | Value |
|-------|-------|
| **ID** | DL_TC_005 |
| **Priority** | High |
| **Type** | Functional |
| **Related Scenario** | DL_SC_005 - Display dynamically created element |

### Objective

Verify that Example 2 creates and displays the element after loading.

### Preconditions

- The user is on **Example 2**.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Click **Start**. | The loading process begins. |
| 2 | Wait for the loading process to complete. | The element is dynamically created. |
| 3 | Verify the content. | The text **"Hello World!"** is displayed. |

### Expected Result

✅ The dynamic element is created and displayed successfully.

---

## DL_TC_006 - Validate Loaded Text Content

| Field | Value |
|-------|-------|
| **ID** | DL_TC_006 |
| **Priority** | Medium |
| **Type** | Functional |
| **Related Scenario** | DL_SC_006 - Validate loaded text content |

### Objective

Verify that the loaded text matches the expected value.

### Preconditions

- The loading process has completed successfully.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Complete the loading process. | The dynamic element appears. |
| 2 | Verify the displayed text. | The text displayed is **"Hello World!"**. |

### Expected Result

✅ The loaded content matches the expected value.

---

## DL_TC_007 - Refresh After Loading

| Field | Value |
|-------|-------|
| **ID** | DL_TC_007 |
| **Priority** | Low |
| **Type** | Navigation |
| **Related Scenario** | DL_SC_007 - Reload page after dynamic content loading |

### Objective

Verify the application state after refreshing the page.

### Preconditions

- The dynamic element has been loaded successfully.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Complete the loading process. | The dynamic element is displayed. |
| 2 | Refresh the browser. | The page reloads successfully. |
| 3 | Observe the page. | The application returns to its initial state and displays the Start button again. |

### Expected Result

✅ Refreshing the page resets the loading example to its initial state.

---

## DL_TC_008 - Navigate Back During Loading

| Field | Value |
|-------|-------|
| **ID** | DL_TC_008 |
| **Priority** | Medium |
| **Type** | Navigation |
| **Related Scenario** | DL_SC_008 - Navigate back during content loading |

### Objective

Verify that navigating away during the loading process does not leave the application in an inconsistent state.

### Preconditions

- The user is on **Example 2**.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Click **Start**. | The loading process begins. |
| 2 | Before loading finishes, click the browser **Back** button. | The previous page is displayed. |
| 3 | Open **Example 2** again. | The example loads correctly. |
| 4 | Verify the page. | The Start button is available and a new loading process can be started. |

### Expected Result

✅ Navigating back during loading does not leave the page in an inconsistent state, and the loading process can be started again.