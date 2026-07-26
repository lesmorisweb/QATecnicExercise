# Module: Dynamic Content

---

## DC_TC_001 - Display Dynamic Content on Page Load

| Field | Value |
|-------|-------|
| **ID** | DC_TC_001 |
| **Priority** | High |
| **Type** | Functional |
| **Related Scenario** | DC_SC_001 - Display dynamic content on page load |

### Objective

Verify that the Dynamic Content page loads correctly and displays all expected content sections.

### Preconditions

- The user navigates to the **Dynamic Content** page.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Open the Dynamic Content page. | The page loads successfully. |
| 2 | Observe the content displayed. | Three content sections are displayed. |
| 3 | Verify each section. | Each section contains an image and a text block. |

### Expected Result

✅ The page displays three content sections, each containing an image and descriptive text.

---

## DC_TC_002 - Refresh Dynamic Content

| Field | Value |
|-------|-------|
| **ID** | DC_TC_002 |
| **Priority** | Medium |
| **Type** | Functional |
| **Related Scenario** | DC_SC_002 - Refresh the dynamic content |

### Objective

Verify that refreshing the page loads new dynamic content.

### Preconditions

- The user is on the **Dynamic Content** page.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Open the Dynamic Content page. | The page loads successfully. |
| 2 | Refresh the browser. | The page reloads without errors. |
| 3 | Compare the displayed content. | Images and/or text change after the refresh. |

### Expected Result

✅ The application loads a new set of dynamic content without displaying errors.

---

## DC_TC_003 - Load New Dynamic Content

| Field | Value |
|-------|-------|
| **ID** | DC_TC_003 |
| **Priority** | Medium |
| **Type** | Functional |
| **Related Scenario** | DC_SC_003 - Load another set of dynamic content |

### Objective

Verify that clicking the **"click here"** link loads another set of dynamic content.

### Preconditions

- The user is on the **Dynamic Content** page.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Click the **"click here"** link. | The page reloads successfully. |
| 2 | Observe the content displayed. | A new set of dynamic content is displayed. |
| 3 | Compare with the previous content. | Some images and/or text have changed. |

### Expected Result

✅ The page loads another valid set of dynamic content.

---

## DC_TC_004 - Validate Static Content Using with_content=static

| Field | Value |
|-------|-------|
| **ID** | DC_TC_004 |
| **Priority** | High |
| **Type** | Functional |
| **Related Scenario** | DC_SC_004 - Display static content using the with_content parameter |

### Objective

Verify that the **with_content=static** parameter keeps the page content unchanged after refreshing.

### Preconditions

- The user accesses the page using the **with_content=static** parameter.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Open `/dynamic_content?with_content=static`. | The page loads successfully. |
| 2 | Observe the displayed content. | Content is displayed correctly. |
| 3 | Refresh the browser multiple times. | The content remains unchanged after each refresh. |

### Expected Result

All content remains identical after refreshing the page.

> **Execution Result:** ❌ Failed  
> **Linked Bug:** [bug](/dynamicContent/bug.md)

---

## DC_TC_005 - Navigate Using External Link

| Field | Value |
|-------|-------|
| **ID** | DC_TC_005 |
| **Priority** | Low |
| **Type** | Navigation |
| **Related Scenario** | DC_SC_005 - Navigate back to the home page |

### Objective

Verify that the **Elemental Selenium** link redirects the user correctly.

### Preconditions

- The user is on the **Dynamic Content** page.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Click the **Elemental Selenium** link. | A new page is opened successfully. |
| 2 | Verify the destination. | The corresponding website is displayed without errors. |

### Expected Result

✅ The external link redirects the user to the correct page.