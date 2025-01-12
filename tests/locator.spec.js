const { test, expect } = require("@playwright/test");

test("locator and assertion", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Expect a title "to contain" a substring.
  const inputUsername = page.locator("#user-name");
  await inputUsername.fill("standard_user");
  await expect(inputUsername).toHaveValue("standard_user");

  const inputPassword = page.locator("#password");
  await inputPassword.fill("secret_sauce");
  await expect(inputPassword).toHaveValue("secret_sauce");

  const buttonLogin = page.locator("#login-button");
  await buttonLogin.click();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  await expect(page.locator("#item_4_title_link > div")).toBeVisible();

  const addToCart = page.locator("#add-to-cart-sauce-labs-backpack");
  await addToCart.click();
  await expect(page.locator("#remove-sauce-labs-backpack")).toBeVisible();
  await expect(page.locator("#shopping_cart_container > a > span")).toHaveText(
    "1"
  );

  const viewCart = page.locator("#shopping_cart_container > a");
  await viewCart.click();
  await expect(page.locator("#cart_contents_container")).toBeVisible();

  const checkout = page.locator("#checkout");
  await checkout.click();
  await expect(page.locator("#first-name")).toBeVisible();
  await page.locator("#first-name").fill("Suno");
  await page.locator("#last-name").fill("Kokok");
  await page.locator("#postal-code").fill("666");
  await page.locator("#continue").click();
  await expect(page.locator("#finish")).toBeVisible();
  await expect(
    page.locator(
      "#checkout_summary_container > div > div.cart_list > div.cart_item"
    )
  ).toBeVisible();
  await expect(
    page.locator(
      "#checkout_summary_container > div > div.summary_info > div:nth-child(2)"
    )
  ).toBeVisible();
  await expect(
    page.locator(
      "#checkout_summary_container > div > div.summary_info > div.summary_subtotal_label"
    )
  ).toBeVisible();
  await expect(
    page.locator(
      "#checkout_summary_container > div > div.summary_info > div.summary_total_label"
    )
  ).toBeVisible();
  await page.locator("#finish").click();
  await expect(page.locator("#back-to-products")).toBeVisible();
});
