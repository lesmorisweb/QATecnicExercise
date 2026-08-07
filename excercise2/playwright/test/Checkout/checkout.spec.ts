import { test, expect } from '@playwright/test';

import { AuthenticationLoginPage } from '../../pageObjects/AuthenticationLogin';
import { InventoryPage } from '../../pageObjects/inventoryPage';
import { ShoppingCartPage } from '../../pageObjects/shoppingCar';
import { CheckoutPage } from '../../pageObjects/checkout';

import { STANDARD } from '../../fixtures/authenticationLogin/users';
import { checkoutInfo } from '../../fixtures/checkout/checkoutInfo';

import {
    CHECKOUT_COMPLETE,
    FIRST_NAME_REQUIRED,
    LAST_NAME_REQUIRED,
    POSTAL_CODE_REQUIRED
} from '../../fixtures/checkout/messages';

let loginPage: AuthenticationLoginPage;
let inventoryPage: InventoryPage;
let shoppingCartPage: ShoppingCartPage;
let checkoutPage: CheckoutPage;

test.beforeEach(async ({ page }) => {

    loginPage = new AuthenticationLoginPage(page);
    inventoryPage = new InventoryPage(page);
    shoppingCartPage = new ShoppingCartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.goto();

    await loginPage.login(
        STANDARD.username,
        STANDARD.password
    );

    await inventoryPage.addBackpack();

    await inventoryPage.openShoppingCart();

    await shoppingCartPage.checkout();

});

test('CH_TC_001 - Complete Checkout', async () => {

    await checkoutPage.completeCheckoutInformation(
        checkoutInfo.firstName,
        checkoutInfo.lastName,
        checkoutInfo.postalCode
    );

    await checkoutPage.finish();

    await expect(checkoutPage.completeHeader).toBeVisible();

    await expect(checkoutPage.completeMessage)
        .toContainText(CHECKOUT_COMPLETE);

});

test('CH_TC_002 - Empty First Name', async () => {

    await checkoutPage.completeCheckoutInformation(
        '',
        checkoutInfo.lastName,
        checkoutInfo.postalCode
    );

    await expect(await checkoutPage.getErrorMessage())
        .toContainText(FIRST_NAME_REQUIRED);

});

test('CH_TC_003 - Empty Last Name', async () => {

    await checkoutPage.completeCheckoutInformation(
        checkoutInfo.firstName,
        '',
        checkoutInfo.postalCode
    );

    await expect(await checkoutPage.getErrorMessage())
        .toContainText(LAST_NAME_REQUIRED);

});

test('CH_TC_004 - Empty Postal Code', async () => {

    await checkoutPage.completeCheckoutInformation(
        checkoutInfo.firstName,
        checkoutInfo.lastName,
        ''
    );

    await expect(await checkoutPage.getErrorMessage())
        .toContainText(POSTAL_CODE_REQUIRED);

});

test('CH_TC_005 - Cancel Checkout', async () => {

    await checkoutPage.cancel();

    await expect(shoppingCartPage.cartTitle)
        .toBeVisible();

});

test('CH_TC_006 - Verify Checkout Overview', async () => {

    await checkoutPage.completeCheckoutInformation(
        checkoutInfo.firstName,
        checkoutInfo.lastName,
        checkoutInfo.postalCode
    );

    await expect(checkoutPage.overviewTitle)
        .toBeVisible();

    await expect(checkoutPage.paymentInformation)
        .toBeVisible();

    await expect(checkoutPage.shippingInformation)
        .toBeVisible();

    await expect(checkoutPage.total)
        .toBeVisible();

});

test('CH_TC_007 - Return Home After Checkout', async () => {

    await checkoutPage.completeCheckoutInformation(
        checkoutInfo.firstName,
        checkoutInfo.lastName,
        checkoutInfo.postalCode
    );

    await checkoutPage.finish();

    await checkoutPage.backHome();

    await expect(inventoryPage.inventoryTitle)
        .toBeVisible();

});

test('CH_TC_008 - Complete Checkout Message', async () => {

    await checkoutPage.completeCheckoutInformation(
        checkoutInfo.firstName,
        checkoutInfo.lastName,
        checkoutInfo.postalCode
    );

    await checkoutPage.finish();

    await expect(checkoutPage.completeMessage)
        .toContainText(CHECKOUT_COMPLETE);

});