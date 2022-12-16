import MovieList from './movie-list.js';
import './movie-item.js';

class TrendingMovies extends MovieList {
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
            #trendingMovies {
                ${this.containerStyle}
            }
            
            .heading {
                width: 100%;
                padding-bottom: 15px;
				font-size: ${this.headingFontSize};
                text-align: center;
            }
        </style>
        <div id="trendingMovies">
            <h1 class="heading">Trending Movies</h1>
        </div>`;

		this.createMovieItemElement();
	}

	renderError(message) {
		super.renderError(message);
	}

	createMovieItemElement() {
		const movieContainer = this.shadowDOM.querySelector('#trendingMovies');

		for (const movie of this._movies) {
			const movieItemElement = document.createElement('movie-item');
			movieItemElement.movie = movie;

			movieContainer.append(movieItemElement);
		}
	}
}

customElements.define('trending-movies', TrendingMovies);
