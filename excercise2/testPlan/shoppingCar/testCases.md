# Test Cases

## SC_TC_001 - Display Shopping Cart

| Field | Value |
|------|------|
| **Module** | Shopping Cart |
| **Priority** | High |
| **Type** | Functional |
| **Preconditions** | User has added at least one product. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
|1|Open Shopping Cart.|Shopping Cart page is displayed.|
|2|Verify products.|Selected products are displayed.|

### Expected Result

The Shopping Cart displays all selected products correctly.

---

## SC_TC_002 - Open Empty Shopping Cart

| Field | Value |
|------|------|
| **Module** | Shopping Cart |
| **Priority** | Medium |
| **Type** | Functional |
| **Preconditions** | User is logged in without products in the cart. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
|1|Open Shopping Cart.|Shopping Cart page opens.|
|2|Verify product list.|No products are displayed.|

### Expected Result

The Shopping Cart is displayed empty.

---

## SC_TC_003 - Remove Product

| Field | Value |
|------|------|
| **Module** | Shopping Cart |
| **Priority** | High |
| **Type** | Functional |
| **Preconditions** | Cart contains one product. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
|1|Click Remove.|Product is removed.|
|2|Verify cart badge.|Badge is updated.|

### Expected Result

The selected product is removed successfully.

---

## SC_TC_004 - Continue Shopping

| Field | Value |
|------|------|
| **Module** | Shopping Cart |
| **Priority** | Medium |
| **Type** | Navigation |
| **Preconditions** | User is on Shopping Cart. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
|1|Click Continue Shopping.|Inventory page opens.|
|2|Verify cart badge.|Selected products remain in the cart.|

### Expected Result

The user returns to Inventory without losing the selected products.

---

## SC_TC_005 - Proceed to Checkout

| Field | Value |
|------|------|
| **Module** | Shopping Cart |
| **Priority** | High |
| **Type** | Functional |
| **Preconditions** | Cart contains at least one product. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
|1|Click Checkout.|Checkout Information page opens.|

### Expected Result

The user is redirected to Checkout successfully.

---

## SC_TC_006 - Refresh Shopping Cart

| Field | Value |
|------|------|
| **Module** | Shopping Cart |
| **Priority** | Medium |
| **Type** | Functional |
| **Preconditions** | Cart contains products. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
|1|Refresh browser.|Shopping Cart reloads.|
|2|Verify products.|Products remain in the cart.|

### Expected Result

Refreshing the page does not remove products.

---

## SC_TC_007 - Browser Back Navigation

| Field | Value |
|------|------|
| **Module** | Shopping Cart |
| **Priority** | Low |
| **Type** | Navigation |
| **Preconditions** | User is on Shopping Cart. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
|1|Click browser Back.|Inventory page opens.|
|2|Verify cart badge.|Products remain selected.|

### Expected Result

Navigation works correctly without losing cart information.

---

## SC_TC_008 - Verify Cart Badge Consistency

| Field | Value |
|------|------|
| **Module** | Shopping Cart |
| **Priority** | High |
| **Type** | Functional |
| **Preconditions** | User added multiple products. |

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
|1|Open Shopping Cart.|Shopping Cart opens.|
|2|Count displayed products.|Matches cart badge.|

### Expected Result

Cart badge count matches the displayed products.