import addToCartLocator from "../locator/addToCartLocator";
import authLocator from "../locator/authLocator";
import { expect } from "@playwright/test";  

export default class AddToCartActions {
  /**
   *
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.addToCartLocator = new addToCartLocator(page);
    this.authLocator = new authLocator(page);
    
    this.locators = {
      addSauceLabsBackpack: page.locator(this.addToCartLocator.addSauceLabsBackpack),
      addLabsBikeLight: page.locator(this.addToCartLocator.addLabsBikeLight),
      addLabsBoltTShirt: page.locator(this.addToCartLocator.addLabsBoltTShirt),
      addLabsFleeceJacket: page.locator(this.addToCartLocator.addLabsFleeceJacket),
      addLabsOnesie: page.locator(this.addToCartLocator.addLabsOnesie),
      addLabsTestAllTheThingsTShirt: page.locator(this.addToCartLocator.addLabsTestAllTheThingsTShirt),
      viewCart: page.locator(this.addToCartLocator.viewCart),
      inputUsername: page.locator(this.authLocator.inputUsername),
      inputPassword: page.locator(this.authLocator.inputPassword),
      buttonLogin: page.locator(this.authLocator.buttonLogin),
    };
  }

  async login(username = "standard_user", password = "secret_sauce") {
    await this.page.goto("https://www.saucedemo.com/");
    await this.locators.inputUsername.fill(username);
    await this.locators.inputPassword.fill(password);
    await this.locators.buttonLogin.click();
  }

  async clickSauceLabsBackpack() {
    await this.locators.addSauceLabsBackpack.click();
  }

  async clickLabsBikeLight() {
    await this.locators.addLabsBikeLight.click();
  }

  async clickLabsBoltTShirt() {
    await this.locators.addLabsBoltTShirt.click();
  }

  async clickLabsFleeceJacket() {
    await this.locators.addLabsFleeceJacket.click();
  }

  async clickLabsOnesie() {
    await this.locators.addLabsOnesie.click();
  }

  async clickLabsTestAllTheThingsTShirt() {
    await this.locators.addLabsTestAllTheThingsTShirt.click();
  }

  async clickCart() {
    await this.locators.viewCart.click();
  }
}
