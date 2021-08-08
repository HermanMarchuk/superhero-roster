const creds = require('../fixtures/creds');
const dataPacks = require('../fixtures/data-packs');
const loginIntoRoster = require('../page-steps/login.page.steps');
const {addHero, addIncorrectHero} = require('../page-steps/main.page.steps');

describe('Add Hero Test Suite', () => {

    beforeEach(() => {
        loginIntoRoster(creds.correctUserData)
    });

    it('Add Hero: Positive Testing Pack', () => {
        dataPacks.validHeroes.forEach((hero) => {
            addHero(hero);
        })
    })

    it('Add Hero: Negative Testing Pack', () => {
        dataPacks.invalidHeroes.forEach((invalidHero) => {
            addIncorrectHero(invalidHero);
        })
    })
});
