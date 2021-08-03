const endpoints = require('../configs/endpoints.config');
const loginPage = require('../page-objects/login.page');


function loginIntoRoster(creds) {
  browser.get(endpoints.main);

  loginPage.loginField().sendKeys(creds.email);
  loginPage.passwordField().sendKeys(creds.password);
  loginPage.submitButton().click();

  expect(loginPage.itself().isDisplayed()).toEqual(false);
}

module.exports = loginIntoRoster;