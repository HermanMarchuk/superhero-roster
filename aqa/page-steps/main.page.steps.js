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

function voteForHero(movie) {
  const votesBefore = mainPage.voteFragment.moviesTableFragment.getDataFromMoviesTable(movie).vote.getText();
  let votesAfter = null;

  mainPage.voteFragment.favoriteMoviesFragment.getMovieRadioButton(movie).click();
  mainPage.voteFragment.favoriteMoviesFragment.submitButton.click();
  votesAfter = mainPage.voteFragment.moviesTableFragment.getDataFromMoviesTable(movie).vote.getText();

  expect(votesBefore).not.toEqual(votesAfter)
}

module.exports = {
  addHero,
  addIncorrectHero,
  voteForHero
};