
import { test, expect } from '@playwright/test';
import { LoginPage } from '../AuthenticationLogin/AuthenticationLogin';
import { InventoryPage } from '../Inventory/inventoryPage';
import { ShoppingCartPage } from '../ShoppingCar/shoppingCar';
import { CheckoutPage } from './checkout';
import { USERS } from '../AuthenticationLogin/fixtures/users';
import { CHECKOUTINFO } from './fixtures/checkoutInfo';
import { MESSAGES } from './fixtures/messages';

test.describe('Checkout', () => {

    test('CH_TC_001 - Complete Checkout Successfully', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new ShoppingCartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await loginPage.goto();

        await loginPage.login(
            USERS.STANDARD.username,
            USERS.STANDARD.password
        );

        await inventoryPage.addProduct('Sauce Labs Backpack');

        await cartPage.openCart();

        await cartPage.checkout();

        await checkoutPage.fillCheckoutInformation(
            CHECKOUTINFO.FULLINFO.FIRSTNAME,
            CHECKOUTINFO.FULLINFO.LASTNAME,
            CHECKOUTINFO.FULLINFO.ZIP,
        );

        await checkoutPage.continueCheckout();

        await checkoutPage.finishCheckout();

        await expect(checkoutPage.completeHeader).toHaveText(MESSAGES.COMPLETE_CHECKOUT);

    });

    test('CH_TC_002 - Checkout without First Name', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new ShoppingCartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await loginPage.goto();

        await loginPage.login(
            USERS.STANDARD.username,
            USERS.STANDARD.password
        );

        await inventoryPage.addProduct('Sauce Labs Backpack');

        await cartPage.openCart();

        await cartPage.checkout();

        await checkoutPage.fillCheckoutInformation(
            CHECKOUTINFO.FIRSTNAME_EMPTY.FIRSTNAME,
            CHECKOUTINFO.FIRSTNAME_EMPTY.LASTNAME,
            CHECKOUTINFO.FIRSTNAME_EMPTY.ZIP
        );

        await checkoutPage.continueCheckout();

        await expect(checkoutPage.errorMessage).toContainText(MESSAGES.FIRSTNAME_EMPTY);

    });

    test('CH_TC_003 - Checkout without Last Name', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new ShoppingCartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await loginPage.goto();

        await loginPage.login(
            USERS.STANDARD.username,
            USERS.STANDARD.password
        );

        await inventoryPage.addProduct('Sauce Labs Backpack');

        await cartPage.openCart();

        await cartPage.checkout();

        await checkoutPage.fillCheckoutInformation(
            CHECKOUTINFO.LASTNAME_EMPTY.FIRSTNAME,
            CHECKOUTINFO.LASTNAME_EMPTY.LASTNAME,
            CHECKOUTINFO.LASTNAME_EMPTY.ZIP
        );

        await checkoutPage.continueCheckout();

        await expect(checkoutPage.errorMessage).toContainText(MESSAGES.LASTNAME_EMPTY);

    });

    test('CH_TC_004 - Checkout without Postal Code', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new ShoppingCartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await loginPage.goto();

        await loginPage.login(
            USERS.STANDARD.username,
            USERS.STANDARD.password
        );

        await inventoryPage.addProduct('Sauce Labs Backpack');

        await cartPage.openCart();

        await cartPage.checkout();

        await checkoutPage.fillCheckoutInformation(
            CHECKOUTINFO.ZIP_EMPTY.FIRSTNAME,
            CHECKOUTINFO.ZIP_EMPTY.LASTNAME,
            CHECKOUTINFO.ZIP_EMPTY.ZIP
        );

        await checkoutPage.continueCheckout();

        await expect(checkoutPage.errorMessage).toContainText(MESSAGES.POSTALCODE_EMPTY);

    });

    test('CH_TC_005 - Cancel Checkout', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new ShoppingCartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await loginPage.goto();

        await loginPage.login(
            USERS.STANDARD.username,
            USERS.STANDARD.password
        );

        await inventoryPage.addProduct('Sauce Labs Backpack');

        await cartPage.openCart();

        await cartPage.checkout();

        await checkoutPage.cancelCheckout();

        await expect(page).toHaveURL(/cart.html/);

        await expect(page.locator('.cart_item')).toHaveCount(1);

    });

    test('CH_TC_006 - Verify Checkout Overview', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new ShoppingCartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await loginPage.goto();

        await loginPage.login(
            USERS.STANDARD.username,
            USERS.STANDARD.password
        );

        await inventoryPage.addProduct('Sauce Labs Backpack');

        await cartPage.openCart();

        await cartPage.checkout();

        await checkoutPage.fillCheckoutInformation(
            CHECKOUTINFO.FULLINFO.FIRSTNAME,
            CHECKOUTINFO.FULLINFO.LASTNAME,
            CHECKOUTINFO.FULLINFO.ZIP
        );

        await checkoutPage.continueCheckout();

        await expect(page).toHaveURL(/checkout-step-two.html/);

        await expect(checkoutPage.productName).toHaveText('Sauce Labs Backpack');

        await expect(checkoutPage.paymentInformation).toBeVisible();

        await expect(checkoutPage.shippingInformation).toBeVisible();

        await expect(checkoutPage.itemTotal).toBeVisible();

        await expect(checkoutPage.tax).toBeVisible();

        await expect(checkoutPage.total).toBeVisible();

    });

    test('CH_TC_007 - Return to Inventory After Checkout', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new ShoppingCartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await loginPage.goto();

        await loginPage.login(
            USERS.STANDARD.username,
            USERS.STANDARD.password
        );

        await inventoryPage.addProduct('Sauce Labs Backpack');

        await cartPage.openCart();

        await cartPage.checkout();

        await checkoutPage.fillCheckoutInformation(
            CHECKOUTINFO.FULLINFO.FIRSTNAME,
            CHECKOUTINFO.FULLINFO.LASTNAME,
            CHECKOUTINFO.FULLINFO.ZIP
        );

        await checkoutPage.continueCheckout();

        await checkoutPage.finishCheckout();

        await expect(checkoutPage.completeHeader).toContainText(MESSAGES.COMPLETE_CHECKOUT);

        await checkoutPage.backHome();

        await expect(page).toHaveURL(/inventory.html/);

        await expect(inventoryPage.inventoryItems.first()).toBeVisible();

    });

    test('CH_TC_008 - Generate PDF Order Successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new ShoppingCartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();

    await loginPage.login(
        USERS.STANDARD.username,
        USERS.STANDARD.password
    );

    await inventoryPage.addProduct('Sauce Labs Backpack');

    await cartPage.openCart();

    await cartPage.checkout();

    await checkoutPage.completeCheckout(
        CHECKOUTINFO.FULLINFO.FIRSTNAME,
        CHECKOUTINFO.FULLINFO.LASTNAME,
        CHECKOUTINFO.FULLINFO.ZIP
    )

    const downloadPromise = page.waitForEvent('download');

    await checkoutPage.generatePDFOrder();

    const download = await downloadPromise;

    await expect(download.suggestedFilename())
        .toContain('.pdf');

});
})