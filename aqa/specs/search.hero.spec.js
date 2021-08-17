const creds = require('../fixtures/creds');
const loginIntoRoster = require('../page-steps/login.page.steps');
const mainPage = require('../page-objects/main-page/main.page');

describe('Search Hero', () => {

    beforeEach(() => {
        loginIntoRoster(creds.correctUserData)
    });

    it('Search valid hero: wolverine', () => {
        const searchFragment = mainPage.headerFragment.searchFragment;
        const hero
       
    });
});