const { test, expect } = require("@playwright/test");
const { default: authActions } = require("../../tests/actions/authActions");

test.describe ("Authentication", () => {

    let objActions;

    test.beforeEach(async ({ page }) => {
        objActions = new authActions(page);
        await objActions.goto();
    });

    test ("Login with all valid data", async () => {
        await objActions.inputValidUsername();
        await objActions.inputValidPassword();
        await objActions.clickLogin();
    })
    
    test ("Login with invalid username", async ()=> {
        await objActions.inputInvalidUsername();
        await objActions.inputValidPassword();
        await objActions.clickLogin();
    })
    
    test ("Login with invalid password", async () => {
        await objActions.inputValidUsername();
        await objActions.inputInvalidPassword();
        await objActions.clickLogin();
    })
    
    test ("Login with empty username", async () => {
        await objActions.emptyUsername();
        await objActions.inputValidPassword();
        await objActions.clickLogin();
    })
    
    test ("Login with empty password", async () => {
        await objActions.inputValidUsername();
        await objActions.emptyPassword();
        await objActions.clickLogin();
    })
    
    test ("Login with empty username and password", async () => {
        await objActions.emptyUsername();
        await objActions.emptyPassword();
        await objActions.clickLogin();
    })
    
    test ("Logout", async () => {
        await objActions.inputValidUsername();
        await objActions.inputValidPassword();
        await objActions.clickLogin();
        await objActions.clickLogout();
    })
})


