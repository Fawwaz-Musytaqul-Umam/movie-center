import MovieList from './movie-list.js';
import './movie-item.js';

class MovieResults extends MovieList {
	constructor() {
		super();
	}

	set movies(movies) {
		this._movies = movies;
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = /*html*/ `
		<style>
			#movieResults {
				${this.containerStyle}
			}
			
			.heading {
				width: 100%;
				padding-bottom: 15px;
				font-size: ${this.headingFontSize};
				text-align: center;
			}
		</style>
		<div id="movieResults">
			<h1 class="heading">Results</h1>
		</div>`;

		this.createMovieItemElement();
	}

	renderError(message) {
		super.renderError(message);
	}

	createMovieItemElement() {
		const movieContainer = this.shadowDOM.querySelector('#movieResults');

		for (const movie of this._movies) {
			const movieItemElement = document.createElement('movie-item');
			movieItemElement.movie = movie;

			movieContainer.append(movieItemElement);
		}
	}
}

customElements.define('movie-results', MovieResults);
