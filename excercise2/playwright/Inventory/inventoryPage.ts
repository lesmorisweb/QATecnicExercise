import { Locator, Page } from '@playwright/test';

export class InventoryPage {

    readonly page: Page;

    readonly inventoryTitle: Locator;
    readonly inventoryItems: Locator;
    readonly cartBadge: Locator;
    readonly shoppingCart: Locator;
    readonly sortDropdown: Locator;

    constructor(page: Page) {

        this.page = page;

        this.inventoryTitle = page.locator('.title');
        this.inventoryItems = page.locator('.inventory_item');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.shoppingCart = page.locator('.shopping_cart_link');
        this.sortDropdown = page.locator('select.product_sort_container');

    }

    async getInventoryCount() {
        return await this.inventoryItems.count();
    }

    async getCartBadgeCount() {
        const badgeCount = await this.cartBadge.count();
        if (badgeCount === 0) return 0;

        const text = (await this.cartBadge.textContent())?.trim() ?? '0';
        return Number(text);
    }

    async addProduct(productName: string) {

        await this.page
            .locator('.inventory_item')
            .filter({
                has: this.page.getByText(productName)
            })
            .getByRole('button', { name: 'Add to cart' })
            .click();

    }

    async removeProduct(productName: string) {

        await this.page
            .locator('.inventory_item')
            .filter({
                has: this.page.getByText(productName)
            })
            .getByRole('button', { name: 'Remove' })
            .click();

    }

    async openProduct(productName: string) {

        await this.page
            .getByText(productName)
            .click();

    }

    async openShoppingCart() {

        await this.shoppingCart.click();

    }

    async selectSortOption(option: 'az' | 'za' | 'lohi' | 'hilo') {
        const selectedValue = await this.sortDropdown.selectOption(option);

        if (Array.isArray(selectedValue)) {
            return selectedValue[0] === option;
        }

        return selectedValue === option;
    }

    async sortByNameAscending() {

        await this.sortDropdown.selectOption('az');

    }

    async sortByNameDescending() {

        await this.sortDropdown.selectOption('za');

    }

    async sortByPriceAscending() {

        await this.sortDropdown.selectOption('lohi');

    }

    async sortByPriceDescending() {

        await this.sortDropdown.selectOption('hilo');

    }

    async getProductNames() {

        return await this.page
            .locator('.inventory_item_name')
            .allTextContents();

    }

    async getProductPrices() {

        const prices = await this.page
            .locator('.inventory_item_price')
            .allTextContents();

        return prices.map(price =>
            Number(price.replace('$', ''))
        );

    }

    async logout() {
        await this.page
            .locator('#react-burger-menu-btn')
            .click();

        await this.page
            .locator('#logout_sidebar_link')
            .click();
    }

    async isSortedByNameAscending() {
        const names = await this.getProductNames();
        const ordered = [...names].sort((a, b) => a.localeCompare(b));
        return names.every((value, index) => value === ordered[index]);
    }

    async isSortedByPriceAscending() {
        const prices = await this.getProductPrices();
        return prices.every((value, index) => index === 0 || prices[index - 1] <= value);
    }

}