const headerFragment = require('./fragments/header-fragment/header.fragment');
const rosterFragment = require('../main-page/fragments/roster.fragment');
const voteFragment = require('../main-page/fragments/vote-fragment/vote.fragment');

const mainPage = {
  get itself () {return $('.container-fluid')},
  headerFragment,
  rosterFragment,
  voteFragment
};

module.exports = mainPage;