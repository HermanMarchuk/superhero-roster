const headerFragment = {
  get homeLink () {return $('a[href="./index.html"]')},
  get logoutLink () {return $('a[onclick="logout()"]')}
}

module.exports = headerFragment;