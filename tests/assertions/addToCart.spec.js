const { test, expect } = require("@playwright/test");
// const { default: authActions } = require("../../tests/actions/authActions");
const { default: addToCartActions } = require("../../tests/actions/addToCartActions");

test.describe("Add to cart", () => {
  let objActions;

  test.beforeEach(async ({ page }) => {
    objActions = new addToCartActions(page);
    await objActions.login();
  });

  test("Add 1 item to cart", async () => {
    // await objActions.addSauceLabsBackpack();
    await objActions.viewCart();
  });

  test("Add 2 items to cart", async () => {
    await objActions.addSauceLabsBackpack();
    await objActions.addSauceLabsBoltTShirt();
    await objActions.viewCart();
  });

  test("Add 3 items to cart", async () => {
    await objActions.addSauceLabsBackpack();
    await objActions.addSauceLabsBoltTShirt();
    await objActions.addSauceLabsFleeceJacket();
    await objActions.viewCart();
  });

  test("Add 4 items to cart", async () => {
    await objActions.addSauceLabsBackpack();
    await objActions.addSauceLabsBoltTShirt();
    await objActions.addSauceLabsFleeceJacket();
    await objActions.addSauceLabsOnesie();
    await objActions.viewCart();
  });

  test("Add 5 items to cart", async () => {
    await objActions.addSauceLabsBackpack();
    await objActions.addSauceLabsBoltTShirt();
    await objActions.addSauceLabsFleeceJacket();
    await objActions.addSauceLabsOnesie();
    await objActions.addSauceLabsTestAllTheThingsTShirt();
    await objActions.viewCart();
  });
});
