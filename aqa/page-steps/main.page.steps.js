const mainPage = require('../page-objects/main-page/main.page');

function addHero(hero) {
  mainPage.rosterFragment.addHeroInput.sendKeys(hero);
  mainPage.rosterFragment.addHeroButton.click();
  expect(mainPage.rosterFragment.heroList.getText()).toContain(hero);
};

function addIncorrectHero(incorrectHero) {
  mainPage.rosterFragment.addHeroInput.sendKeys(incorrectHero);
  mainPage.rosterFragment.addHeroButton.click();
  expect(mainPage.rosterFragment.heroList.getText()).not.toContain(incorrectHero);
  expect(mainPage.rosterFragment.alertDanger.isDisplayed()).toEqual(true);
};

module.exports = {
  addHero,
  addIncorrectHero
};