const heroFactsFragment = require('./fragments/hero.facts.fragment');
const searchFragment = require('./fragments/search.fragment');

const headerFragment = {
  get homeLink () {return $('a[href="./index.html"]')},
  get logoutLink () {return $('a[onclick="logout()"]')},
  heroFactsFragment,
  searchFragment
}

module.exports = headerFragment;