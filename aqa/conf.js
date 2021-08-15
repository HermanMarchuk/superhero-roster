const {SpecReporter} = require('jasmine-spec-reporter')

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/hero.fact.spec.js'],
    frameworks: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
        print () {},
    },
    onPrepare () {
        browser.waitForAngularEnabled(false);
        jasmine.getEnv().addReporter(
            new SpecReporter({
                spec: {
                    displayStacktrace: true,
                },
                summary: {
                    displayDuration: false,
                },
            })
        )
    }
};
