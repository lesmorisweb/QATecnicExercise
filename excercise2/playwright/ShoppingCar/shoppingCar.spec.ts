import { test, expect } from '@playwright/test';
import { LoginPage } from '../AuthenticationLogin/AuthenticationLogin';
import { InventoryPage } from '../Inventory/inventoryPage';
import { ShoppingCartPage } from './shoppingCar';
import { USERS } from '../AuthenticationLogin/fixtures/users';

test.describe('Shopping Cart', () => {
    
    test('SC_TC_001 - Display Shopping Cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new ShoppingCartPage(page);

    await loginPage.goto();

    await loginPage.login(
        USERS.STANDARD.username,
        USERS.STANDARD.password
    );

    await inventoryPage.addProduct('Sauce Labs Backpack');

    await cartPage.openCart();

    await expect(
        cartPage.cartItems
    ).toHaveCount(1);

});

test('SC_TC_002 - Open Empty Shopping Cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const cartPage = new ShoppingCartPage(page);

    await loginPage.goto();

    await loginPage.login(
        USERS.STANDARD.username,
        USERS.STANDARD.password
    );

    await cartPage.openCart();

    await expect(
        cartPage.cartItems
    ).toHaveCount(0);

});

test('SC_TC_003 - Remove Product', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new ShoppingCartPage(page);

    await loginPage.goto();

    await loginPage.login(
        USERS.STANDARD.username,
        USERS.STANDARD.password
    );

    await inventoryPage.addProduct('Sauce Labs Backpack');

    await cartPage.openCart();

    await cartPage.removeProduct('Sauce Labs Backpack');

    await expect(
        cartPage.cartItems
    ).toHaveCount(0);

});

test('SC_TC_004 - Continue Shopping', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new ShoppingCartPage(page);

    await loginPage.goto();

    await loginPage.login(
        USERS.STANDARD.username,
        USERS.STANDARD.password
    );

    await inventoryPage.addProduct('Sauce Labs Backpack');

    await cartPage.openCart();

    await cartPage.continueShopping();

    await expect(page).toHaveURL(/inventory.html/);

    await expect(
        inventoryPage.cartBadge
    ).toHaveText('1');

});

test('SC_TC_005 - Proceed to Checkout', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new ShoppingCartPage(page);

    await loginPage.goto();

    await loginPage.login(
        USERS.STANDARD.username,
        USERS.STANDARD.password
    );

    await inventoryPage.addProduct('Sauce Labs Backpack');

    await cartPage.openCart();

    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one.html/);

});

test('SC_TC_006 - Refresh Shopping Cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new ShoppingCartPage(page);

    await loginPage.goto();

    await loginPage.login(
        USERS.STANDARD.username,
        USERS.STANDARD.password
    );

    await inventoryPage.addProduct('Sauce Labs Backpack');

    await cartPage.openCart();

    await page.reload();

    await expect(
        cartPage.cartItems
    ).toHaveCount(1);

});

test('SC_TC_007 - Browser Back Navigation', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new ShoppingCartPage(page);

    await loginPage.goto();

    await loginPage.login(
        USERS.STANDARD.username,
        USERS.STANDARD.password
    );

    await inventoryPage.addProduct('Sauce Labs Backpack');

    await cartPage.openCart();

    await page.goBack();

    await expect(page).toHaveURL(/inventory.html/);

    await expect(
        inventoryPage.cartBadge
    ).toHaveText('1');

});

test('SC_TC_008 - Verify Cart Badge Consistency', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new ShoppingCartPage(page);

    await loginPage.goto();

    await loginPage.login(
        USERS.STANDARD.username,
        USERS.STANDARD.password
    );

    await inventoryPage.addProduct('Sauce Labs Backpack');
    await inventoryPage.addProduct('Sauce Labs Bike Light');
    await inventoryPage.addProduct('Sauce Labs Bolt T-Shirt');

    await cartPage.openCart();

    await expect(
        cartPage.cartItems
    ).toHaveCount(3);

    await expect(
        inventoryPage.cartBadge
    ).toHaveText('3');

});
})
