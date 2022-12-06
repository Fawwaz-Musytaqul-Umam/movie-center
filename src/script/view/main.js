import '../components/search-bar.js';
import '../components/movie-list.js';
import DataSource from '../data/api/data-source.js';

const main = () => {
	const searchElement = document.querySelector('search-bar');
	const movieListElement = document.querySelector('movie-list');

	setTimeout(() => {
		document.body.style.opacity = 1;
		document.body.style.transition = 'opacity 1.2s ease-out';
	}, 300);

	const searchMovies = async () => {
		try {
			const results = await DataSource.searchMovies(searchElement.value);
			renderMovie(results);
		} catch (error) {
			fallbackResult(error);
		}
	};

	searchElement.clickEvent = searchMovies;

	const renderMovie = results => {
		movieListElement.movies = results;
	};

	const fallbackResult = message => {
		movieListElement.renderError(message);
	};
};

export default main;
