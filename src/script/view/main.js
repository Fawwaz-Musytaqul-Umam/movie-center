import '../components/search-bar.js';
import '../components/movie-results.js';
import '../components/trending-movies.js';
import DataSource from '../data/api/data-source.js';

const main = () => {
	const searchElement = document.querySelector('search-bar');
	const movieResultsElement = document.querySelector('movie-results');
	const trenMoviesElement = document.querySelector('trending-movies');

	const renderMovies_BySearch = async () => {
		try {
			const results = await DataSource.searchMovies(searchElement.value);
			movieResultsElement.movies = results;
		} catch (error) {
			movieResultsElement.renderError(error);
		}

		document.body.scrollTop = 100;
		document.documentElement.scrollTop = 100;
	};

	const renderTrendingMovies = async () => {
		try {
			const results = await DataSource.trendingMovies();
			trenMoviesElement.movies = results;
		} catch (error) {
			trenMoviesElement.renderError(error.message);
		}
	};

	renderTrendingMovies();
	searchElement.clickEvent = renderMovies_BySearch;
};

export default main;
