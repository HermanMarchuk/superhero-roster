const headerFragment = require('../main-page/fragments/header.fragment');
const rosterFragment = require('../main-page/fragments/roster.fragment');

const mainPage = {
  get itself () {return $('.container-fluid')},
  headerFragment,
  rosterFragment
};

module.exports = mainPage;