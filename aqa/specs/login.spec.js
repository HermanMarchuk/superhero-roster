describe('Login Test Suite', () => {
    const endpoint = 'https://hermanmarchuk.github.io/superhero-roster/project/'
    const loginPageElements = {
        itself: '#overlay',
        loginField: '#loginEmail',
        passwordField: '#loginPassword',
        rememberLoginCheckBox: '#rememberLoginChk',
        submitButton: '[type="submit"]'
    }

    it('Login: positive testing', () => {
        const correctUserData = {
            'email': 'asdasd@asdasd.asd',
            'password': 'asdasd'
        };
        let isLoginPageDisplayed = null

        browser.get(endpoint);

        element(by.css(loginPageElements.loginField)).sendKeys(correctUserData.email);
        element(by.css(loginPageElements.passwordField)).sendKeys(correctUserData.password);
        element(by.css(loginPageElements.submitButton)).click();

        isLoginPageDisplayed = element(by.css(loginPageElements.itself)).isDisplayed();
        expect(isLoginPageDisplayed).toEqual(false);
    });
});
