const loginPage = {
  itself: () => $('#loginEmail'),
  loginField: () => $('#loginEmail'),
  passwordField: () =>  $('#loginPassword'),
  rememberLoginCheckBox: () => $('#rememberLoginChk'),
  submitButton: () => $('[type="submit"]')
};

module.exports = loginPage;