import { test, expect } from '@playwright/test';

import { AuthenticationLoginPage } from '../../pageObjects/AuthenticationLogin';
import { InventoryPage } from '../../pageObjects/inventoryPage';

import { STANDARD } from '../../fixtures/authenticationLogin/users.ts';
import { PRODUCTS } from '../../fixtures/inventory/products.ts';

let loginPage: AuthenticationLoginPage;
let inventoryPage: InventoryPage;

test.beforeEach(async ({ page }) => {

    loginPage = new AuthenticationLoginPage(page);
    inventoryPage = new InventoryPage(page);

    await loginPage.goto();

    await loginPage.login(
        STANDARD.username,
        STANDARD.password
    );

});

test('IN_TC_001 - Inventory page is displayed', async () => {

    await expect(
        inventoryPage.inventoryTitle
    ).toBeVisible();

    await expect(
        inventoryPage.inventoryContainer
    ).toBeVisible();

});

test('IN_TC_002 - Add product to cart', async () => {

    await inventoryPage.addBackpack();

    await expect(
        inventoryPage.shoppingCartBadge
    ).toHaveText('1');

});

test('IN_TC_003 - Remove product from cart', async () => {

    await inventoryPage.addBackpack();

    await inventoryPage.removeBackpack();

    await expect(
        inventoryPage.shoppingCartBadge
    ).toHaveCount(0);

});

test('IN_TC_004 - Open product details', async () => {

    await inventoryPage.openBackpack();

    await expect(
        inventoryPage.productTitle
    ).toContainText(PRODUCTS.backpack.name);

});

test('IN_TC_005 - Sort products A to Z', async () => {

    await inventoryPage.sortProducts('az');

    const productNames = await inventoryPage.getProductNames();

    expect(productNames).toEqual(
        [...productNames].sort()
    );

});

test('IN_TC_006 - Sort products Z to A', async () => {

    await inventoryPage.sortProducts('za');

    const productNames = await inventoryPage.getProductNames();

    expect(productNames).toEqual(
        [...productNames].sort().reverse()
    );

});

test('IN_TC_007 - Sort products Low to High', async () => {

    await inventoryPage.sortProducts('lohi');

    const prices = await inventoryPage.getProductPrices();

    expect(prices).toEqual(
        [...prices].sort((a, b) => a - b)
    );

});

test('IN_TC_008 - Sort products High to Low', async () => {

    await inventoryPage.sortProducts('hilo');

    const prices = await inventoryPage.getProductPrices();

    expect(prices).toEqual(
        [...prices].sort((a, b) => b - a)
    );

});

test('IN_TC_009 - Open Shopping Cart', async ({ page }) => {

    await inventoryPage.openShoppingCart();

    await expect(page).toHaveURL(/cart.html/);

});

test('IN_TC_010 - Logout from Inventory', async ({ page }) => {

    await inventoryPage.logout();

    await expect(page).toHaveURL('https://www.saucedemo.com/');

});