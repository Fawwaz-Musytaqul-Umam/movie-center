import DataSource from '../data/api/data-source.js';

const searchElement = document.querySelector('search-bar');
const trenMoviesElement = document.querySelector('trending-movies');
const movieResultsElement = document.querySelector('movie-results');

const renderTrendingMovies = async () => {
	try {
		const results = await DataSource.trendingMovies();
		trenMoviesElement.movies = results;
	} catch (error) {
		trenMoviesElement.renderError(error.message);
	}
};

const renderMoviesBySearch = async () => {
	try {
		const results = await DataSource.searchMovies(searchElement.value);
		movieResultsElement.movies = results;
	} catch (error) {
		movieResultsElement.renderError(error);
	}

	document.body.scrollTop = 100;
	document.documentElement.scrollTop = 100;
};

const main = () => {
	renderTrendingMovies();
	searchElement.clickEvent = renderMoviesBySearch;
};

export default main;
