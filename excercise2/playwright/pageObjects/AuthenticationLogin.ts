import { Locator, Page } from '@playwright/test';

export class AuthenticationLoginPage {

    readonly page: Page;

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    readonly inventoryTitle;

    readonly burgerMenu;
    readonly logoutButton;

    constructor(page: Page) {

        this.page = page;

        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');

        this.errorMessage = page.locator('[data-test="error"]');

        this.inventoryTitle = page.locator('[data-test="title"]');

        this.burgerMenu = page.locator('#react-burger-menu-btn');
        this.logoutButton = page.locator('#logout_sidebar_link');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string) {

        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

    }

    async logout() {

        await this.burgerMenu.click();
        await this.logoutButton.click();

    }

    async refresh() {

        await this.page.reload();

    }

    async getErrorMessage() {

        return this.errorMessage;

    }

}