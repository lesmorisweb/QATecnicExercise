import { test, expect } from '@playwright/test';

import { AuthenticationLoginPage } from '../../pageObjects/AuthenticationLogin';

import {
    STANDARD,
    LOCKED,
    INVALID_USERNAME,
    INVALID_PASSWORD
} from '../../fixtures/authenticationLogin/users';

import {
    SUCCESS_LOGIN,
    INVALID_USERNAME as INVALID_USERNAME_MESSAGE,
    INVALID_PASSWORD as INVALID_PASSWORD_MESSAGE,
    LOCKED_USER
} from '../../fixtures/authenticationLogin/messages';

let loginPage: AuthenticationLoginPage;

test.beforeEach(async ({ page }) => {

    loginPage = new AuthenticationLoginPage(page);

    await loginPage.goto();

});

test('AU_TC_001 - Login successfully', async () => {

    await loginPage.login(
        STANDARD.username,
        STANDARD.password
    );

    await expect(loginPage.inventoryTitle).toBeVisible();

});

test('AU_TC_002 - Invalid username', async () => {

    await loginPage.login(
        INVALID_USERNAME.username,
        STANDARD.password
    );

    const errorMessage = await loginPage.getErrorMessage();

    await expect(errorMessage).toBeVisible();

    await expect(errorMessage).toContainText(
        INVALID_USERNAME_MESSAGE
    );

});

test('AU_TC_003 - Invalid password', async () => {

    await loginPage.login(
        STANDARD.username,
        INVALID_PASSWORD.password
    );

    const errorMessage = await loginPage.getErrorMessage();

    await expect(errorMessage).toBeVisible();

    await expect(errorMessage).toContainText(
        INVALID_PASSWORD_MESSAGE
    );

});

test('AU_TC_004 - Login with locked user', async () => {

    await loginPage.login(
        LOCKED.username,
        LOCKED.password
    );

    const errorMessage = await loginPage.getErrorMessage();

    await expect(errorMessage).toBeVisible();

    await expect(errorMessage).toContainText(
        LOCKED_USER
    );

});

test('AU_TC_005 - Logout', async () => {

    await loginPage.login(
        STANDARD.username,
        STANDARD.password
    );

    await loginPage.logout();

    await expect(loginPage.loginButton).toBeVisible();

});

test('AU_TC_006 - Refresh after successful login', async () => {

    await loginPage.login(
        STANDARD.username,
        STANDARD.password
    );

    await loginPage.refresh();

    await expect(loginPage.inventoryTitle).toBeVisible();

});

test('AU_TC_007 - Back after logout', async ({ page }) => {

    await loginPage.login(
        STANDARD.username,
        STANDARD.password
    );

    await loginPage.logout();

    await page.goBack();

    await expect(loginPage.loginButton).toBeVisible();

});

test('AU_TC_008 - Direct access to Inventory URL', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/inventory.html');

    await expect(page).toHaveURL('https://www.saucedemo.com/');

    await expect(loginPage.loginButton).toBeVisible();

});