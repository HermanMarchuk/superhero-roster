const mainPage = require('../page-objects/main.page');
const creds = require('../fixtures/creds')
const loginIntoRoster = require('../page-steps/login.page.steps')

describe('Add Hero Test Suite', () => {

    beforeEach(() => {
        loginIntoRoster(creds.correctUserData)
    });

    it('Add Hero Positive Test', () => {
        const heroToAdd = 'Batman';

        mainPage.addHeroInput().sendKeys(heroToAdd);
        mainPage.addHeroButton().click();

        expect(mainPage.heroList().getText()).toContain(heroToAdd);
    });

    it('Add Hero Negative Test', () => {
        mainPage.addHeroButton().click();

        expect(mainPage.heroList().getText()).not.toContain('');
        expect(mainPage.alertDanger().isDisplayed()).toEqual(true);
    });

    fit('Add Hero: Posotive Testing Pack', () => {
        const validHeros = [
            'ASD', 'asd', '123', '!@#$', 'ASDasd123!@#$',
            'ASD', 'asd', '123', '!@#$', 'ASDasd123!@#$',
            'ASD', 'asd', '123', '!@#$', 'ASDasd123!@#$',
            'ASD', 'asd', '123', '!@#$', 'ASDasd123!@#$',
            'ASD', 'asd', '123', '!@#$', 'ASDasd123!@#$',
            'ASD', 'asd', '123', '!@#$', 'ASDasd123!@#$',
            'ASD', 'asd', '123', '!@#$', 'ASDasd123!@#$'
        ];
        validHeros.forEach((hero) => {
            mainPage.addHeroInput().sendKeys(hero);
            mainPage.addHeroButton().click();
            expect(mainPage.heroList().getText()).toContain(hero);
        })
    })
});
