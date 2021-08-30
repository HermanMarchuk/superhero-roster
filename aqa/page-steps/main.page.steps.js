const {Given, When, Then} = require('@cucumber/cucumber');
const {expect} = require('chai');
const mainPage = require('../page-objects/main-page/main.page');

When('I add hero {string} to the roster', async (string) => {
  await mainPage.rosterFragment.addHeroInput.sendKeys(string);
  await mainPage.rosterFragment.addHeroButton.click();
});

Then('I should see hero {string} in the roster', async (string) => {
  const heroList = await mainPage.rosterFragment.heroList.getText();
  expect(heroList).to.include(string);
});

Then('I shouldn\'t see hero {string} in the roster', async (string) => {
  const heroList = await mainPage.rosterFragment.heroList.getText();
  const isAlertDisplayed = await mainPage.rosterFragment.alertDanger.isDisplayed();

  expect(heroList).to.not.include(string);
  expect(isAlertDisplayed).to.eql(true);
});

// function voteForHero(movie) {
//   const votesBefore = mainPage.voteFragment.moviesTableFragment.getDataFromMoviesTable(movie).vote.getText();
//   let votesAfter = null;

//   mainPage.voteFragment.favoriteMoviesFragment.getMovieRadioButton(movie).click();
//   mainPage.voteFragment.favoriteMoviesFragment.submitButton.click();
//   votesAfter = mainPage.voteFragment.moviesTableFragment.getDataFromMoviesTable(movie).vote.getText();

//   expect(votesBefore).not.toEqual(votesAfter)
// }