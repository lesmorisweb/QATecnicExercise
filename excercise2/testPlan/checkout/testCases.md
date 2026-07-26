# Checkout Test Cases

## CH_TC_001 - Complete Checkout Successfully

| Field | Value |
|------|------|
| **Module** | Checkout |
| **Priority** | High |
| **Type** | Functional |
| **Preconditions** | User is logged in and has at least one product in the cart. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to the Cart page. | Cart page is displayed. |
| 2 | Click **Checkout**. | Checkout Information page is displayed. |
| 3 | Enter a valid First Name. | First Name is accepted. |
| 4 | Enter a valid Last Name. | Last Name is accepted. |
| 5 | Enter a valid Postal Code. | Postal Code is accepted. |
| 6 | Click **Continue**. | Checkout Overview page is displayed. |
| 7 | Verify the order summary. | Product information, payment, shipping and totals are displayed correctly. |
| 8 | Click **Finish**. | Order is completed successfully. |
| 9 | Verify the confirmation page. | Confirmation message "Thank you for your order!" is displayed. |

### Expected Result

The checkout process is completed successfully and the order confirmation page is displayed.

### Test Data

| First Name | Last Name | Postal Code |
|------------|-----------|-------------|
| Laura | Esmoris | 111111 |

---

## CH_TC_002 - Checkout with Empty First Name

| Field | Value |
|------|------|
| **Module** | Checkout |
| **Priority** | High |
| **Type** | Validation |
| **Preconditions** | User is logged in and has at least one product in the cart. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to Checkout Information. | Checkout Information page is displayed. |
| 2 | Leave the First Name field empty. | Field remains empty. |
| 3 | Enter a valid Last Name and Postal Code. | Data is accepted. |
| 4 | Click **Continue**. | Checkout process is blocked. |
| 5 | Verify the error message. | "First Name is required" is displayed. |

### Expected Result

The user cannot continue until a valid First Name is provided.

---

## CH_TC_003 - Checkout with Empty Last Name

| Field | Value |
|------|------|
| **Module** | Checkout |
| **Priority** | High |
| **Type** | Validation |
| **Preconditions** | User is logged in and has at least one product in the cart. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to Checkout Information. | Checkout Information page is displayed. |
| 2 | Enter a valid First Name. | Data is accepted. |
| 3 | Leave the Last Name field empty. | Field remains empty. |
| 4 | Enter a valid Postal Code. | Data is accepted. |
| 5 | Click **Continue**. | Checkout process is blocked. |
| 6 | Verify the error message. | "Last Name is required" is displayed. |

### Expected Result

The user cannot continue until a valid Last Name is provided.

---

## CH_TC_004 - Checkout with Empty Postal Code

| Field | Value |
|------|------|
| **Module** | Checkout |
| **Priority** | High |
| **Type** | Validation |
| **Preconditions** | User is logged in and has at least one product in the cart. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to Checkout Information. | Checkout Information page is displayed. |
| 2 | Enter a valid First Name. | Data is accepted. |
| 3 | Enter a valid Last Name. | Data is accepted. |
| 4 | Leave the Postal Code field empty. | Field remains empty. |
| 5 | Click **Continue**. | Checkout process is blocked. |
| 6 | Verify the error message. | "Postal Code is required" is displayed. |

### Expected Result

The user cannot continue until a valid Postal Code is provided.

---

## CH_TC_005 - Cancel Checkout

| Field | Value |
|------|------|
| **Module** | Checkout |
| **Priority** | Medium |
| **Type** | Navigation |
| **Preconditions** | User is on the Checkout Information page. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to Checkout Information. | Checkout page is displayed. |
| 2 | Click **Cancel**. | User returns to the Cart page. |
| 3 | Verify the cart contents. | Selected products remain in the cart. |

### Expected Result

The checkout process is cancelled and the shopping cart remains unchanged.

---

## CH_TC_006 - Verify Checkout Overview

| Field | Value |
|------|------|
| **Module** | Checkout |
| **Priority** | High |
| **Type** | Functional |
| **Preconditions** | User completed the Checkout Information successfully. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Complete Checkout Information. | Checkout Overview page is displayed. |
| 2 | Verify the selected products. | Product names and quantities are correct. |
| 3 | Verify payment information. | Payment information is displayed. |
| 4 | Verify shipping information. | Shipping information is displayed. |
| 5 | Verify Item Total, Tax and Total. | Totals are calculated correctly. |

### Expected Result

The Checkout Overview displays accurate order information before confirmation.

---

## CH_TC_007 - Return to Inventory After Checkout

| Field | Value |
|------|------|
| **Module** | Checkout |
| **Priority** | Medium |
| **Type** | Navigation |
| **Preconditions** | Checkout has been completed successfully. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Complete the checkout process. | Confirmation page is displayed. |
| 2 | Click **Back Home**. | User is redirected to the Inventory page. |
| 3 | Verify the Inventory page. | Products page is displayed successfully. |

### Expected Result

The application returns the user to the Inventory page after completing the order.