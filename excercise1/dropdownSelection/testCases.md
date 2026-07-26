# Module: Dropdown

---

## DD_TC_001 - Display Dropdown Options Correctly

| Field | Value |
|-------|-------|
| **ID** | DD_TC_001 |
| **Priority** | Medium |
| **Type** | Functional |
| **Related Scenario** | DD_SC_001 - Display dropdown options correctly |

### Objective

Verify that the dropdown component is displayed correctly and contains the available options.

### Preconditions

- The user navigates to the **Dropdown** page.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Open the Dropdown page. | The page loads successfully. |
| 2 | Locate the dropdown component. | The dropdown is visible and enabled. |
| 3 | Open the dropdown list. | The available options are displayed. |

### Expected Result

✅ The dropdown is displayed correctly and contains the default option, **Option 1**, and **Option 2**.

---

## DD_TC_002 - Select Option 1

| Field | Value |
|-------|-------|
| **ID** | DD_TC_002 |
| **Priority** | High |
| **Type** | Positive |
| **Related Scenario** | DD_SC_002 - Select Option 1 from dropdown |

### Objective

Verify that the user can select **Option 1** from the dropdown.

### Preconditions

- The user is on the **Dropdown** page.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Click the dropdown. | The list of available options is displayed. |
| 2 | Select **Option 1**. | Option 1 becomes the selected value. |

### Expected Result

✅ The dropdown displays **Option 1** as the selected option.

---

## DD_TC_003 - Select Option 2

| Field | Value |
|-------|-------|
| **ID** | DD_TC_003 |
| **Priority** | High |
| **Type** | Positive |
| **Related Scenario** | DD_SC_003 - Select Option 2 from dropdown |

### Objective

Verify that the user can select **Option 2** from the dropdown.

### Preconditions

- The user is on the **Dropdown** page.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Click the dropdown. | The list of available options is displayed. |
| 2 | Select **Option 2**. | Option 2 becomes the selected value. |

### Expected Result

✅ The dropdown displays **Option 2** as the selected option.

---

## DD_TC_004 - Change Selected Dropdown Option

| Field | Value |
|-------|-------|
| **ID** | DD_TC_004 |
| **Priority** | Medium |
| **Type** | Functional |
| **Related Scenario** | DD_SC_004 - Change selected dropdown option |

### Objective

Verify that changing the selected option updates the dropdown correctly.

### Preconditions

- The user is on the **Dropdown** page.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Select **Option 1**. | Option 1 is selected. |
| 2 | Open the dropdown again. | Available options are displayed. |
| 3 | Select **Option 2**. | Option 2 replaces Option 1 as the selected value. |

### Expected Result

✅ Only the last selected option remains selected.

---

## DD_TC_005 - Display Default Dropdown Value

| Field | Value |
|-------|-------|
| **ID** | DD_TC_005 |
| **Priority** | Medium |
| **Type** | UI |
| **Related Scenario** | DD_SC_005 - Display default dropdown value |

### Objective

Verify the default state of the dropdown when the page is loaded.

### Preconditions

- The user opens the **Dropdown** page.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Open the Dropdown page. | The page loads successfully. |
| 2 | Observe the dropdown without interacting with it. | The default value is displayed. |

### Expected Result

✅ The dropdown displays **"Please select an option"**, and no option has been selected.

---

## DD_TC_006 - Refresh Page After Selecting an Option

| Field | Value |
|-------|-------|
| **ID** | DD_TC_006 |
| **Priority** | Low |
| **Type** | Navigation |
| **Related Scenario** | DD_SC_006 - Refresh page after selecting an option |

### Objective

Verify the dropdown behavior after refreshing the page.

### Preconditions

- The user is on the **Dropdown** page.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Select **Option 1**. | Option 1 is displayed as selected. |
| 2 | Refresh the browser. | The page reloads successfully. |
| 3 | Observe the dropdown. | The dropdown returns to its default state. |

### Expected Result

✅ Refreshing the page resets the dropdown to its default value.