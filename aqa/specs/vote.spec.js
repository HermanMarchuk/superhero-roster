const creds = require('../fixtures/creds');
const loginIntoRoster = require('../page-steps/login.page.steps');
const mainPage = require('../page-objects/main-page/main.page');

describe('Vote for Hero Test Suite', () => {

    beforeEach(() => {
        loginIntoRoster(creds.correctUserData)
    });

    fit('Vote positive test', () => {
        const movie = 'Iron Man';
        const votesBefore = mainPage.voteFragment.moviesTableFragment.getDataFromMoviesTable(movie).vote.getText();
        let votesAfter = null;
        mainPage.voteFragment.favoriteMoviesFragment.getMovieRadioButton('Iron Man').click();
        mainPage.voteFragment.favoriteMoviesFragment.submitButton.click();
        votesAfter = mainPage.voteFragment.moviesTableFragment.getDataFromMoviesTable(movie).vote.getText();
        expect(votesBefore).not.toEqual(votesAfter);
    });
});
