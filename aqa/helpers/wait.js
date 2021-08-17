const EC = protractor.ExpectedConditions;
const timings = require('../configs/timings.config')

function waitForAlertAndValidateText(text) {
  browser.wait(EC.alertIsPresent(), timings.s);
  expect(browser.switchTo().alert().getText())
    .toEqual(text);
  browser.switchTo().alert().accept();
};

function waitForVisibility(element) {
  return browser.wait(EC.visibilityOf(element), timings.s, 'Expected that element is visible but it\'s not')
}

module.exports = {
  waitForAlertAndValidateText,
  waitForVisibility
}