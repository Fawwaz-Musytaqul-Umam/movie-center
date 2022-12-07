import '../components/search-bar.js';
import '../components/movie-list.js';
import '../components/trending-movies.js';
import DataSource from '../data/api/data-source.js';

const main = () => {
	const searchElement = document.querySelector('search-bar');
	const movieListElement = document.querySelector('movie-list');
	const trenMoviesElement = document.querySelector('trending-movies');

	setTimeout(() => {
		document.body.style.opacity = 1;
		document.body.style.transition = 'opacity 1.2s ease-out';
	}, 300);

	const renderMovies_BySearch = async () => {
		try {
			const results = await DataSource.searchMovies(searchElement.value);
			movieListElement.movies = results;
		} catch (error) {
			console.log('a');
			movieListElement.renderError(error);
		}
	};
	
	const renderTrendingMovies = async () => {
		try {
			const results = await DataSource.trendingMovies();
			trenMoviesElement.movies = results;
		} catch (error) {
			trenMoviesElement.renderError(message);
		}
	}

	renderTrendingMovies()
	searchElement.clickEvent = renderMovies_BySearch;
};

export default main;
