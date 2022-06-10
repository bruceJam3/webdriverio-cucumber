const { Given, When, Then } = require('@wdio/cucumber-framework');
const LandingPage = require('../pageobjects/landing.page');
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    landing: LandingPage,
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/^I select (.*) from the menu$/, async (option) => {
    await LandingPage.selectOption(option);
});

When("I log in", async () => {
    await LoginPage.login_action();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
    //await browser.pause(3000);
});