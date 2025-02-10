const { test, expect } = require("@playwright/test");
const { default: addToCartActions } = require("../../tests/actions/addToCartActions");

test.describe("Add to cart", () => {
  let objActions;

  test.beforeEach(async ({ page }) => {
    objActions = new addToCartActions(page);
    await objActions.login();
  });

  test("Add 1 item to cart", async () => {
    await objActions.clickSauceLabsBackpack();    
    await objActions.clickCart();
  });

  test("Add 2 items to cart", async () => {
    await objActions.clickSauceLabsBackpack();
    await objActions.clickLabsBikeLight();
    await objActions.clickCart();
  });

  test("Add 3 items to cart", async () => {
    await objActions.clickSauceLabsBackpack();
    await objActions.clickLabsBikeLight();
    await objActions.clickLabsBoltTShirt();
    await objActions.clickCart();
  });

  test("Add 4 items to cart", async () => {
    await objActions.clickSauceLabsBackpack();
    await objActions.clickLabsBikeLight();
    await objActions.clickLabsBoltTShirt();    
    await objActions.clickLabsFleeceJacket();
    await objActions.clickCart();
  });

  test("Add 5 items to cart", async () => {
    await objActions.clickSauceLabsBackpack();
    await objActions.clickLabsBikeLight();
    await objActions.clickLabsBoltTShirt();    
    await objActions.clickLabsFleeceJacket();
    await objActions. clickLabsOnesie();
    await objActions.clickCart();
  });
});
