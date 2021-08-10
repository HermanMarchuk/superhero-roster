const moviesMap = require('../../../../../fixtures/maps');
function getDataFromMoviesTable(movie) {
  return {
    get movie () {return $(`#movieName${moviesMap[movie]}`)},
    get vote () {return $(`#movieVotes${moviesMap[movie]}`)},
  }
};
const moviesTableFragment = {
  getDataFromMoviesTable
};

module.exports = moviesTableFragment;