import { Locator, Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly productsTitle: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {

        this.page = page;

        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');

        this.productsTitle = page.locator('.title');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async goto() {

        await this.page.goto('https://www.saucedemo.com/');

    }
    

    async login(username: string, password: string) {

        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();

    }



    async getErrorMessage(expectedMessage: string) {

        return this.errorMessage;

    }

    async verifySuccessfulLogin() {
        await this.page.waitForURL(/inventory.html/);
    }

}