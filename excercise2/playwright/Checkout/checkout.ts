import { Locator, Page } from '@playwright/test';

export class CheckoutPage {

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;

    readonly continueButton: Locator;
    readonly cancelButton: Locator;
    readonly finishButton: Locator;
    readonly backHomeButton: Locator;

    readonly errorMessage: Locator;
    readonly completeHeader: Locator;
    readonly generatePdfButton: Locator;

    readonly productName: Locator;
    readonly paymentInformation: Locator;
    readonly shippingInformation: Locator;
    readonly itemTotal: Locator;
    readonly tax: Locator;
    readonly total: Locator;

    constructor(private page: Page) {

        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');

        this.continueButton = page.locator('[data-test="continue"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.backHomeButton = page.locator('[data-test="back-to-products"]');

        this.errorMessage = page.locator('[data-test="error"]');
        this.completeHeader = page.locator('.complete-header');

        this.generatePdfButton = page.locator('button#generate-pdf-order');
        
        this.paymentInformation = page.locator('div[data-test="payment-info-label"]')
        this.shippingInformation = page.locator('div[data-test="shipping-info-value"]')
        this.itemTotal = page.locator('div[data-test="subtotal-label"]')
        this.tax = page.locator('div[data-test="tax-label"]')
        this.total = page.locator('div[data-test="total-label"]')
        this.productName = page.locator('.cart_item .inventory_item_name');

    }

    async fillCheckoutInformation(first: string, last: string, zip: string) {

        await this.firstName.fill(first);
        await this.lastName.fill(last);
        await this.postalCode.fill(zip);

    }

    async continueCheckout() {

        await this.continueButton.click();

    }

    async finishCheckout() {

        await this.finishButton.click();

    }

    async cancelCheckout() {

        await this.cancelButton.click();

    }

    async backHome(){

        await this.backHomeButton.click();

    }

    async generatePDFOrder () {
        await this.generatePdfButton.click();
    }

    async completeCheckout (firstname: string, lastname: string, zip: string) {
        await this.fillCheckoutInformation(firstname, lastname, zip);
        await this.continueCheckout();
        await this.finishCheckout();
    }
}