import DataSource from '../data/api/data-source.js';

const main = () => {
	const searchElement = document.querySelector('search-bar');
	const movieResultsElement = document.querySelector('movie-results');
	const trenMoviesElement = document.querySelector('trending-movies');

	renderTrendingMovies();
	searchElement.clickEvent = renderMoviesBySearch;
};

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

export default main;
