import { test, expect } from '@playwright/test';

import { AuthenticationLoginPage } from '../../pageObjects/AuthenticationLogin';
import { InventoryPage } from '../../pageObjects/inventoryPage';
import { ShoppingCartPage } from '../../pageObjects/shoppingCar';

import { STANDARD } from '../../fixtures/authenticationLogin/users.ts';
import { PRODUCTS } from '../../fixtures/inventory/products.ts';

let loginPage: AuthenticationLoginPage;
let inventoryPage: InventoryPage;
let shoppingCartPage: ShoppingCartPage;

test.beforeEach(async ({ page }) => {

    loginPage = new AuthenticationLoginPage(page);
    inventoryPage = new InventoryPage(page);
    shoppingCartPage = new ShoppingCartPage(page);

    await loginPage.goto();

    await loginPage.login(
        STANDARD.username,
        STANDARD.password
    );

    await inventoryPage.addBackpack();

    await inventoryPage.openShoppingCart();

});

test('SC_TC_001 - Shopping Cart page is displayed', async () => {

    await expect(
        shoppingCartPage.cartTitle
    ).toBeVisible();

    await expect(
        shoppingCartPage.cartItem
    ).toBeVisible();

});

test('SC_TC_002 - Verify product information', async () => {

    await expect(
        shoppingCartPage.productName
    ).toContainText(PRODUCTS.backpack.name);

    await expect(
        shoppingCartPage.productPrice
    ).toContainText(PRODUCTS.backpack.price);

});

test('SC_TC_003 - Remove product from cart', async () => {

    await shoppingCartPage.removeProduct();

    await expect(
        shoppingCartPage.cartItem
    ).toHaveCount(0);

});

test('SC_TC_004 - Continue Shopping', async ({ page }) => {

    await shoppingCartPage.continueShopping();

    await expect(page).toHaveURL(/inventory.html/);

    await expect(
        inventoryPage.inventoryTitle
    ).toBeVisible();

});

test('SC_TC_005 - Proceed to Checkout', async ({ page }) => {

    await shoppingCartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one.html/);

});

test('SC_TC_006 - Refresh Shopping Cart', async () => {

    await shoppingCartPage.refresh();

    await expect(
        shoppingCartPage.cartItem
    ).toBeVisible();

});

test('SC_TC_007 - Browser Back Navigation', async ({ page }) => {

    await page.goBack();

    await expect(
        inventoryPage.inventoryTitle
    ).toBeVisible();

});