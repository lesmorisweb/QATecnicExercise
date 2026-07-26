import { Locator, Page } from '@playwright/test';

export class ShoppingCartPage {

    readonly page: Page;

    readonly cartItems: Locator;
    readonly cartBadge: Locator;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.cartItems = page.locator('.cart_item');
        this.cartBadge = page.locator('.shopping_cart_badge');

        this.checkoutButton = page.getByRole('button', {
            name: 'Checkout'
        });

        this.continueShoppingButton = page.getByRole('button', {
            name: 'Continue Shopping'
        });

    }

    async openCart() {

        await this.page
            .locator('.shopping_cart_link')
            .click();

    }

    async removeProduct(productName: string) {

        await this.page
            .locator('.cart_item')
            .filter({
                has: this.page.getByText(productName)
            })
            .getByRole('button', {
                name: 'Remove'
            })
            .click();

    }

    async checkout() {

        await this.checkoutButton.click();

    }

    async continueShopping() {

        await this.continueShoppingButton.click();

    }

}