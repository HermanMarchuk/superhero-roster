const {SpecReporter} = require('jasmine-spec-reporter');
const AllureReporter = require('jasmine-allure-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/hero.fact.spec.js'],
    onPrepare () {
        browser.waitForAngularEnabled(false);
        jasmine.getEnv().addReporter(new SpecReporter());
        jasmine.getEnv().addReporter(new AllureReporter({resultsDir: 'allure-results'}))
    }
};
