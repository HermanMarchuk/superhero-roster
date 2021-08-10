const creds = require('../fixtures/creds');
const dataPacks = require('../fixtures/data-packs');
const loginIntoRoster = require('../page-steps/login.page.steps');
const {voteForHero} = require('../page-steps/main.page.steps')

describe('Vote for hero Test Suite', () => {

    it('Vote for hero: positive testing pack', () => {
        dataPacks.movieHeroes.forEach((movie) => {
            loginIntoRoster(creds.correctUserData)
            voteForHero(movie);
        })
    })

});
