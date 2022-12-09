import './movie-item.js';

class MovieResults extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({ mode: 'open' });
	}

	set movies(movies) {
		this._movies = movies;
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = /*html*/ `
		<style>
			#movieResults {
				max-width: 100%;
				display: flex;
				justify-content: space-evenly;
				flex-wrap: wrap;
			}
			
			.heading {
				width: 100%;
				padding-bottom: 15px;
				text-align: center;
			}
		</style>
		<div id="movieResults">
			<h1 class="heading">Results</h1>
		</div>`;

		this.createMovieItemElement();
	}

	createMovieItemElement() {
		const container = this.shadowDOM.querySelector('#movieResults');

		for (const movie of this._movies) {
			const movieItemElement = document.createElement('movie-item');
			movieItemElement.movie = movie;

			container.append(movieItemElement);
		}
	}

	renderError(message) {
		this.shadowDOM.innerHTML = /*html*/ `
		<style>
			#movieResults h1 {
				margin: 50px 0;
				text-align: center;
				font-size: 3.7vmin;
			}
		</style>
		<div id="movieResults">
			<h1>${message}</h1>
		</div>`;
	}
}

customElements.define('movie-results', MovieResults);
