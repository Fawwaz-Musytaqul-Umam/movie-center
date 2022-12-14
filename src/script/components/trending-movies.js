import './movie-item.js';

class TrendingMovies extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({mode: 'open'})
	}

	set movies(movies) {
		this._movies = movies;
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = /*html*/ `
        <style>
            #trendingMovie {
                max-width: 100%;
                display: flex;
                justify-content: space-evenly;
                flex-wrap: wrap;
            }
            
            .heading {
                width: 100%;
                padding-bottom: 15px;
				font-size: 2em;
                text-align: center;
            }
        </style>
        <div id="trendingMovie">
            <h1 class="heading">Trending Movies</h1>
        </div>`;

		this.createMovieItemElement();
	}

	createMovieItemElement() {
		const container = this.shadowDOM.querySelector('#trendingMovie');

		for (const movie of this._movies) {
			const movieItemElement = document.createElement('movie-item');
			movieItemElement.movie = movie;

			container.append(movieItemElement);
		}
	}

	renderError(message) {
		this.shadowDOM.innerHTML = /*html*/ `
		<style>
			h2 {
				text-align: center;
				font-size: 3.7vmin;
			}
		</style>
		<div id="trendingMovie">
			<h1>${message}</h1>
		</div>`;
	}
}

customElements.define('trending-movies', TrendingMovies);
