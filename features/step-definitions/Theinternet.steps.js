const { Given, When, Then } = require('@wdio/cucumber-framework');
const LandingPage = require('../pageobjects/landing.page');
const LoginPage = require('../pageobjects/login.page');

const pages = {
    landing: LandingPage,
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/^I select "([^"]*)" from the menu$/, async (option) => {
    await LandingPage.selectOption(option);
    await browser.pause(5000);
});