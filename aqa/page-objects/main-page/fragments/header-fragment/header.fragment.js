const heroFactsFragment = require('./fragments/hero.facts.fragment');

const headerFragment = {
  get homeLink () {return $('a[href="./index.html"]')},
  get logoutLink () {return $('a[onclick="logout()"]')},
  heroFactsFragment
}

module.exports = headerFragment;