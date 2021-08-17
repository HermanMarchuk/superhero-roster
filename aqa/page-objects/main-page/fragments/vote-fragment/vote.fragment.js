const favoriteMoviesFragment = require('./fragments/favorite.movies.fragment');
const moviesTableFragment = require('./fragments/movies.table.fragment');

const voteFragment = {
    get header() {return $('h4')},
    favoriteMoviesFragment,
    moviesTableFragment
};


module.exports = voteFragment;