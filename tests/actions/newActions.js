import loginLocator from "../locator/loginLocator";
import { expect } from "@playwright/test";

export default class newActions {

    /**
     * 
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;
        this.loginLocator = new loginLocator(page);
        this.inputUsername = page.locator(this.loginLocator.inputUsername);
        this.inputPassword = page.locator(this.loginLocator.inputPassword);
        this.buttonLogin = page.locator(this.loginLocator.buttonLogin);
        this.addToCart = page.locator(this.loginLocator.addToCart);
        this.viewCart = page.locator(this.loginLocator.viewCart);
        this.clickCheckout = page.locator(this.loginLocator.clickCheckout);
        this.inputFirstName = page.locator(this.loginLocator.inputFirstName);
        this.inputLastName = page.locator(this.loginLocator.inputLastName);
        this.inputPostalCode = page.locator(this.loginLocator.inputPostalCode);
        this.clickContinue = page.locator(this.loginLocator.clickContinue);
        this.clickFinish = page.locator(this.loginLocator.clickFinish);
    }
    async goto() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async inputLogin () {
        await this.inputUsername.fill("standard_user");
        await expect (this.inputUsername).toHaveValue("standard_user"); 
        await this.inputPassword.fill("secret_sauce");
        await expect (this.inputPassword).toHaveValue("secret_sauce");
        await this.buttonLogin.click();
    }

    async checkOut () {
        await this.addToCart.click();
        await this.viewCart.click();
        await this.clickCheckout.click();
        await this.inputFirstName.fill("Agus");
        await expect (this.inputFirstName).toHaveValue("Agus");
        await this.inputLastName.fill("Iron Hand Dragon Slayer");
        await expect (this.inputLastName).toHaveValue("Iron Hand Dragon Slayer");
        await this.inputPostalCode.fill("12345");
        await expect (this.inputPostalCode).toHaveValue("12345");
        await this.clickContinue.click();
        await this.clickFinish.click();
    }
}