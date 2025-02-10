import addToCartLocator from "../locator/addToCartLocator";
import authLocator from "../locator/authLocator";
import { expect } from "@playwright/test";  

export default class addToCartActions {
  /**
   *
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.addToCartLocator = new addToCartLocator(page);
    this.authLocator = new authLocator(page);
    this.addSauceLabsBackpack = page.locator(
      this.addToCartLocator.addSauceLabsBackpack
    );
    this.addLabsBikeLight = page.locator(
      this.addToCartLocator.addLabsBikeLight
    );
    this.addLabsBoltTShirt = page.locator(
      this.addToCartLocator.addLabsBoltTShirt
    );
    this.addLabsFleeceJacket = page.locator(
      this.addToCartLocator.addLabsFleeceJacket
    );
    this.addLabsOnesie = page.locator(this.addToCartLocator.addLabsOnesie);
    this.addLabsTestAllTheThingsTShirt = page.locator(
      this.addToCartLocator.addLabsTestAllTheThingsTShirt
    );
    this.viewCart = page.locator(this.addToCartLocator.viewCart);
    this.inputUsername = page.locator(this.authLocator.inputUsername);
    this.inputPassword = page.locator(this.authLocator.inputPassword);
    this.buttonLogin = page.locator(this.authLocator.buttonLogin);
  }

  async login(){
    await this.page.goto('https://www.saucedemo.com/');
    await this.inputUsername.fill('standard_user');
    await this.inputPassword.fill ('secret_sauce');
    await this.buttonLogin.click();
}

  async addSauceLabsBackpack() {
    await this.addSauceLabsBackpack.click();
  }

  async addLabsBikeLight() {
    await this.addLabsBikeLight.click();
  }

  async addLabsBoltTShirt() {
    await this.addLabsBoltTShirt.click();
  }

  async addLabsFleeceJacket() {
    await this.addLabsFleeceJacket.click();
  }

  async addLabsOnesie() {
    await this.addLabsOnesie.click();
  }

  async addLabsTestAllTheThingsTShirt() {
    await this.addLabsTestAllTheThingsTShirt.click();
  }

  async viewCart() {
    await this.viewCart.click();
  }
}
