exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    SELENIUM_PROMISE_MANAGER: false,
    specs: ['./features/*.feature'],
    cucumberOpts: {
        require: ['./page-steps/*.js']
    },
    onPrepare () {
        browser.waitForAngularEnabled(false);
    }
};
