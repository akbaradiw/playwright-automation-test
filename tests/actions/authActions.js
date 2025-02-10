import authLocator from "../locator/authLocator";
import { expect } from "@playwright/test";  

export default class authActions {
    /**
     * 
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;
        this.authLocator = new authLocator(page);
        this.inputUsername = page.locator(this.authLocator.inputUsername);
        this.inputPassword = page.locator(this.authLocator.inputPassword);
        this.buttonLogin = page.locator(this.authLocator.buttonLogin);
        this.hamburgerMenu = page.locator(this.authLocator.HamburgerMenu);
        this.Logout = page.locator(this.authLocator.Logout);
    }
    async goto() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async clickLogin () {
        await this.buttonLogin.click();
    }

    async clickLogout () {
        await this.hamburgerMenu.click();
        await this.Logout.click();
    }

    async inputValidUsername () {
        await this.inputUsername.fill("standard_user");
        await expect (this.inputUsername).toHaveValue("standard_user"); 
    } 

    async inputValidPassword () {
        await this.inputPassword.fill("secret_sauce");
        await expect (this.inputPassword).toHaveValue("secret_sauce");
    }

    async inputInvalidUsername () {
        await this.inputUsername.fill("santo_suruh");
        await expect (this.inputUsername).toHaveValue("santo_suruh"); 
    }
    
    async inputInvalidPassword () {
        await this.inputPassword.fill("doyok");
        await expect (this.inputPassword).toHaveValue("doyok"); 
    }

    async emptyUsername () {
        await this.inputUsername.fill("");
        await expect (this.inputUsername).toHaveValue("");
    }

    async emptyPassword () {
        await this.inputPassword.fill("");
        await expect (this.inputPassword).toHaveValue(""); 
    }
    // async loginWithValidData() {
    //     await this.inputUsername.fill("standard_user");
    //     await expect (this.inputUsername).toHaveValue("standard_user"); 
    //     await this.inputPassword.fill("secret_sauce");
    //     await expect (this.inputPassword).toHaveValue("secret_sauce");
    //     await this.buttonLogin.click();
    // }

    // async loginWithInvalidData() {
    //     await this.inputUsername.fill("santo_suruh");
    //     await expect (this.inputUsername).toHaveValue("standard_user"); 
    //     await this.inputPassword.fill("secret_sauce");
    //     await expect (this.inputPassword).toHaveValue("secret_sauce");
    //     await this.buttonLogin.click();
    // }  


}
