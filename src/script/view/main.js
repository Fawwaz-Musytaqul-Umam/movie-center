import 'regenerator-runtime/runtime.js';
import '../components/search-bar.js';
import '../components/movie-list.js';
import DataSource from '../data/api/data-source.js';

const main = () => {
	const searchElement = document.querySelector('search-bar');
	const movieListElement = document.querySelector('movie-list');

	setTimeout(() => {
		document.body.style.opacity = 1;
		document.body.style.transition = 'opacity 1s ease-out';
	}, 1300);

	const onButtonSearchClicked = () => {
		const result = DataSource.searchMovies(searchElement.value)
		renderResult(result)
	};

	searchElement.clickEvent = onButtonSearchClicked;

	const renderResult = results => {
		movieListElement.movies = results;
	};

	const fallbackResult = message => {
		movieListElement.renderError(message);
	};
};

export default main;
