import { test, expect } from '@playwright/test';
import { LoginPage } from './AuthenticationLogin';
import { ERROR_MESSAGES } from './fixtures/messages';
import { USERS } from './fixtures/users';
import { InventoryPage } from '../Inventory/inventoryPage';

test.describe('Authentication', () => {

    test('AU_AT_001 - Login Successfully', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            USERS.STANDARD.username,
            USERS.STANDARD.password
        );

        await expect(page).toHaveURL(/inventory.html/);

    });

    test('AU_TC_002 - Login with Invalid Username', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            USERS.INVALID_USERNAME.username,
            USERS.INVALID_USERNAME.password
        );

        const errorMessage= await loginPage.getErrorMessage();

        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toContainText(ERROR_MESSAGES.INVALID_CREDENTIALS);
    })

    test('AU_TC_003 - Login with Invalid Password', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(

            USERS.INVALID_PASSWORD.username,
            USERS.INVALID_PASSWORD.password
        );

        const errorMessage= await loginPage.getErrorMessage();

        await expect(errorMessage).toBeVisible();

        await expect(errorMessage).toContainText(ERROR_MESSAGES.INVALID_CREDENTIALS);

    });

    test('AU_TC_004 - Login with empty username', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(

            USERS.USERNAME_EMPTY.username,
            USERS.USERNAME_EMPTY.password
        );

        const errorMessage= await loginPage.getErrorMessage();

        await expect(errorMessage).toBeVisible();

        await expect(errorMessage).toContainText(ERROR_MESSAGES.USERNAME_EMPTY);
    })

    test('AU_TC_005 - Login with empty password', async({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            USERS.PASSWORD_EMPTY.username,
            USERS.PASSWORD_EMPTY.password
        )

        const errorMessage= await loginPage.getErrorMessage();

        await expect(errorMessage).toBeVisible();

        await expect(errorMessage).toContainText(ERROR_MESSAGES.PASSWORD_EMPTY);
    })

    test('AU_TC_006 - Login with empty credentials', async({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            USERS.USERNAME_EMPTY.username,
            USERS.USERNAME_EMPTY.password
        )

        const errorMessage= await loginPage.getErrorMessage();

        await expect(errorMessage).toBeVisible();

        await expect(errorMessage).toContainText(ERROR_MESSAGES.USERNAME_REQUIRED);
    })

    test('AU_TC_007 - Login with blocked user', async({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            USERS.LOCKED.username,
            USERS.LOCKED.password
        )

        const errorMessage= await loginPage.getErrorMessage();

        await expect(errorMessage).toBeVisible();

        await expect(errorMessage).toContainText(ERROR_MESSAGES.LOCKED_USER);
    })

    test('AU_TC_008 - Logout Successfully', async ({ page }) => {


        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();

        await loginPage.login(
            USERS.STANDARD.username,
            USERS.STANDARD.password
        );

        await inventoryPage.logout();

        await expect(page).toHaveURL('https://www.saucedemo.com/');
        await expect(loginPage.loginButton).toBeVisible();

    });

    test('AU_TC_009 - Refresh after Successful Login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            USERS.STANDARD.username,
            USERS.STANDARD.password
        );

        await expect(page).toHaveURL(/inventory.html/);
        await expect(loginPage.productsTitle).toHaveText('Products');

        await page.reload();

        await expect(page).toHaveURL(/inventory.html/);
        await expect(loginPage.productsTitle).toHaveText('Products');

    });
    
    test('AU_TC_010 - Access Inventory without autentication', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await page.goto('https://www.saucedemo.com/inventory.html')

        const errorMessage= await loginPage.getErrorMessage();

        await expect(errorMessage).toBeVisible();

        await expect(errorMessage).toContainText(ERROR_MESSAGES.REDIRECT_AUTHANTICATION);

    })

    test('AU_TC_011 - Prevent Access After Logout Using Browser Back Button', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();

        await loginPage.login(
            USERS.STANDARD.username,
            USERS.STANDARD.password
        );

        await inventoryPage.logout();

        await page.goBack();

        const errorMessage= await loginPage.getErrorMessage();

        await expect(errorMessage).toBeVisible();

        await expect(errorMessage).toContainText(ERROR_MESSAGES.REDIRECT_AUTHANTICATION);

    })
});