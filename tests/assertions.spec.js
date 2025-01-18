const { test, expect } = require("@playwright/test");
const { default: newActions } = require("../tests/actions/newActions");

test ("PMO weekend", async ({ page }) => {
    const objActions = new newActions(page);
    await objActions.goto();
    await objActions.inputLogin();
    await objActions.checkOut();
})