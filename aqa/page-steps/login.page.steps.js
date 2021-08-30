const {Given} = require('@cucumber/cucumber');
const {expect} = require('chai');
const endpoints = require('../configs/endpoints.config');
const loginPage = require('../page-objects/login.page');
const creds = require('../fixtures/creds');


Given('I logged in application', async () => {
  let isLoginPageDisplayed = null;

  await browser.get(endpoints.main);
  await loginPage.loginField().sendKeys(creds.correctUserData.email);
  await loginPage.passwordField().sendKeys(creds.correctUserData.password);
  await loginPage.submitButton().click();
  isLoginPageDisplayed= await loginPage.itself().isDisplayed()


  expect(isLoginPageDisplayed).to.eql(false);
});