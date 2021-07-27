describe('Login Test Suite', () => {
    const endpoint = 'https://hermanmarchuk.github.io/superhero-roster/project/'
    const loginPageElements = {
        itself: '#overlay',
        loginField: '#loginEmail',
        passwordField: '#loginPassword',
        rememberLoginCheckBox: '#rememberLoginChk',
        submitButton: '[type="submit"]',
        validationAlert: '#login-alert'
    }
    const credentals = {
        correctEmail: 'asdasd@asdasd.asd',
        correctPassword: 'asdasd',
        invalidEmail: '1.1',
        
    }

    it('Login: positive testing', () => {
        let isLoginPageDisplayed = null

        browser.get(endpoint);

        element(by.css(loginPageElements.loginField)).sendKeys(credentals.correctEmail);
        element(by.css(loginPageElements.passwordField)).sendKeys(credentals.correctPassword);
        element(by.css(loginPageElements.submitButton)).click();

        isLoginPageDisplayed = element(by.css(loginPageElements.itself)).isDisplayed();
        expect(isLoginPageDisplayed).toEqual(false);
    });

    it('Login: invalid Email', () => {
        let isLoginPageDisplayed = null

        browser.get(endpoint);

        element(by.css(loginPageElements.loginField)).sendKeys(credentals.invalidEmail);
        element(by.css(loginPageElements.passwordField)).sendKeys(credentals.correctPassword);
        element(by.css(loginPageElements.submitButton)).click();

        isLoginPageDisplayed = element(by.css(loginPageElements.itself)).isDisplayed();
        expect(isLoginPageDisplayed).toEqual(true);
    });

    it('Login: Login without password is forbidden', () => {
        let isAlertDisplayed = null

        browser.get(endpoint); 

        element(by.css(loginPageElements.submitButton)).click(); 
        
        isAlertDisplayed = element(by.css(loginPageElements.validationAlert)).isDisplayed();
        expect(isAlertDisplayed).toEqual(true);

        element(by.css(loginPageElements.loginField)).sendKeys(credentals.correctEmail);
        element(by.css(loginPageElements.submitButton)).click(); 

        isAlertDisplayed = element(by.css(loginPageElements.validationAlert)).isDisplayed();
        expect(isAlertDisplayed).toEqual(true);

    });
});
git