const moviesMap = require('../../../../../fixtures/maps');
function getMovieRadioButton(movie) {
  return $(`#heroMovieRadio${moviesMap[movie]}`)
}
const favoriteMoviesFragment = {
  getMovieRadioButton,
  get submitButton() {return $('#vote-form button')}
};

module.exports = favoriteMoviesFragment;