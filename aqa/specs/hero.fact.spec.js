const creds = require('../fixtures/creds');
const loginIntoRoster = require('../page-steps/login.page.steps');
const mainPage = require('../page-objects/main-page/main.page');
const {waitForVisibility} = require('../helpers/wait');

describe('Hero Facts', () => {

    beforeEach(() => {
        loginIntoRoster(creds.correctUserData)
    })

    it('Check hero fact: Wolverine', () => {
        const heroFactsFragment = mainPage.headerFragment.heroFactsFragment;
        const expectedStory = 'Wolverine made his first comic book appearance in 1974.';
        let actualStory = null;

        heroFactsFragment.heroFactsListLink.click();
        heroFactsFragment.wolverineItem.click();

        waitForVisibility(heroFactsFragment.wolverineModal);

        expect(heroFactsFragment.wolverineModal.itself.isDisplayed()).toEqual(true);

        actualStory = heroFactsFragment.wolverineModal.bodyText.getText();
        expect(actualStory).toEqual(expectedStory);
    })

});
