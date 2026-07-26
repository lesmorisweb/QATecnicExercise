

import { test, expect } from '@playwright/test';
import { LoginPage } from '../AuthenticationLogin/AuthenticationLogin';
import { InventoryPage } from './inventoryPage';
import { USERS } from '../AuthenticationLogin/fixtures/users';

test.describe('Inventory', () => {

    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);
        await loginPage.verifySuccessfulLogin();
    });

    test('IN_TC_001 - Display Inventory Successfully', async () => {
        const inventoryCount = await inventoryPage.getInventoryCount();
        expect(inventoryCount).toBe(6);
    });

    test('IN_TC_002 - Add Product to Cart', async () => {
        await inventoryPage.addProduct('Sauce Labs Backpack');
        await expect(inventoryPage.cartBadge).toHaveText('1');
    });

    test('IN_TC_003 - Remove Product', async () => {
        await inventoryPage.addProduct('Sauce Labs Backpack');
        await inventoryPage.removeProduct('Sauce Labs Backpack');

        const badgeCount = await inventoryPage.getCartBadgeCount();
        expect(badgeCount).toBe(0);
    });

    test('IN_TC_004 - Add Multiple Products', async () => {
        await inventoryPage.addProduct('Sauce Labs Backpack');
        await inventoryPage.addProduct('Sauce Labs Bike Light');
        await inventoryPage.addProduct('Sauce Labs Bolt T-Shirt');

        await expect(inventoryPage.cartBadge).toHaveText('3');
    });

    test('IN_TC_005 - Sort products A-Z', async () => {
        const applied = await inventoryPage.selectSortOption('az');
        expect(applied).toBeTruthy();

        const isSortedByNameAscending = await inventoryPage.isSortedByNameAscending();
        expect(isSortedByNameAscending).toBeTruthy();
    });

    test('IN_TC_006 - Sort products by price', async () => {
        const applied = await inventoryPage.selectSortOption('lohi');
        expect(applied).toBeTruthy();

        const isSortedByPriceAscending = await inventoryPage.isSortedByPriceAscending();
        expect(isSortedByPriceAscending).toBeTruthy();
    });

    test('IN_TC_007 - Open product name', async ({ page }) => {
        await inventoryPage.openProduct('Sauce Labs Backpack');
        await expect(page).toHaveURL(/inventory-item.html/);
    });

    test('IN_TC_008 - Refresh inventory', async ({ page }) => {
        await inventoryPage.addProduct('Sauce Labs Backpack');
        await page.reload();

        await expect(inventoryPage.cartBadge).toHaveText('1');
    });

});