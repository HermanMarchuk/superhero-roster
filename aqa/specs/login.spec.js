const endpoints = require('../configs/endpoints.config');
const creds = require('../fixtures/creds');
const loginPage = require('../page-objects/login.page');

describe('Login Test Suite', () => {

    it('C993', () => {
        browser.get(endpoints.main);

        loginPage.loginField().sendKeys(creds.correctUserData.email);
        loginPage.passwordField().sendKeys(creds.correctUserData.password);
        loginPage.submitButton().click();

        expect(loginPage.itself().isDisplayed()).toEqual(false);
    });

    it('C994', () => {
        browser.get(endpoints.main);

        loginPage.loginField().sendKeys(creds.incorrectUserData.email);
        loginPage.passwordField().sendKeys(creds.correctUserData.password);
        loginPage.submitButton().click();

        expect(loginPage.itself().isDisplayed()).toEqual(true);
    });

    

});
