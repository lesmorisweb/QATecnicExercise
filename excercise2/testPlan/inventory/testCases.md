# Inventory Test Cases

## IN_TC_001 - Display Inventory After Successful Login

| Field | Value |
|------|------|
| **Module** | Inventory |
| **Priority** | High |
| **Type** | Functional |
| **Preconditions** | User is logged in successfully. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Login with valid credentials. | Inventory page is displayed. |
| 2 | Verify the page title. | "Products" title is displayed. |
| 3 | Verify the inventory list. | All products are displayed. |
| 4 | Verify each product card. | Each product displays image, name, description, price and Add to Cart button. |

### Expected Result

The Inventory page loads correctly and all products are displayed with complete information.

---

## IN_TC_002 - Verify Product Sorting by Name (A to Z)

| Field | Value |
|------|------|
| **Module** | Inventory |
| **Priority** | Medium |
| **Type** | Functional |
| **Preconditions** | User is logged in successfully. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open the sorting dropdown. | Sorting options are displayed. |
| 2 | Select **Name (A to Z)**. | Products are reordered alphabetically. |
| 3 | Verify product order. | Products appear from A to Z. |

### Expected Result

Products are sorted alphabetically in ascending order.

---

## IN_TC_003 - Verify Product Sorting by Name (Z to A)

| Field | Value |
|------|------|
| **Module** | Inventory |
| **Priority** | Medium |
| **Type** | Functional |
| **Preconditions** | User is logged in successfully. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open the sorting dropdown. | Sorting options are displayed. |
| 2 | Select **Name (Z to A)**. | Products are reordered alphabetically. |
| 3 | Verify product order. | Products appear from Z to A. |

### Expected Result

Products are sorted alphabetically in descending order.

---

## IN_TC_004 - Verify Product Sorting by Price (Low to High)

| Field | Value |
|------|------|
| **Module** | Inventory |
| **Priority** | Medium |
| **Type** | Functional |
| **Preconditions** | User is logged in successfully. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open the sorting dropdown. | Sorting options are displayed. |
| 2 | Select **Price (Low to High)**. | Products are reordered by price. |
| 3 | Verify product prices. | Products are displayed from lowest to highest price. |

### Expected Result

Products are sorted correctly by ascending price.

---

## IN_TC_005 - Verify Product Sorting by Price (High to Low)

| Field | Value |
|------|------|
| **Module** | Inventory |
| **Priority** | Medium |
| **Type** | Functional |
| **Preconditions** | User is logged in successfully. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open the sorting dropdown. | Sorting options are displayed. |
| 2 | Select **Price (High to Low)**. | Products are reordered by price. |
| 3 | Verify product prices. | Products are displayed from highest to lowest price. |

### Expected Result

Products are sorted correctly by descending price.

---

## IN_TC_006 - Open Product Details

| Field | Value |
|------|------|
| **Module** | Inventory |
| **Priority** | Medium |
| **Type** | Navigation |
| **Preconditions** | User is logged in successfully. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click a product name or image. | Product Details page opens. |
| 2 | Verify product information. | Name, image, description and price match the selected product. |
| 3 | Click Back to Products. | Inventory page is displayed again. |

### Expected Result

The Product Details page displays the correct information and the user can return to the Inventory page.