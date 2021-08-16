const creds = require('../fixtures/creds');
const loginIntoRoster = require('../page-steps/login.page.steps');
const mainPage = require('../page-objects/main-page/main.page');
const {waitForAlertAndValidateText} = require('../helpers/wait');

describe('Search Hero', () => {

    beforeEach(() => {
        loginIntoRoster(creds.correctUserData)
    })

    it('Search valid hero: wolverine', () => {
        const searchFragment = mainPage.headerFragment.searchFragment;

        searchFragment.searchInput.sendKeys('wolverine');
        searchFragment.searchButton.click();

        waitForAlertAndValidateText('Wolverine is awesome!');
    })

    it('Search invalid hero: asdasd', () => {
        const searchFragment = mainPage.headerFragment.searchFragment;

        searchFragment.searchInput.sendKeys('asdasd');
        searchFragment.searchButton.click();

        waitForAlertAndValidateText('Your search for asdasd returned 0 reults. Try something else.');
    })

});
