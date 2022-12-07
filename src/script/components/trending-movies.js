import './movie-item.js';

class TrendingMovies extends HTMLElement {
	set movies(movies) {
		this._movies = movies;
		this.render();
	}

	render() {
		this.innerHTML = /*html*/ `
        <style>
            #allMovies {
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
        <div id="allMovies">
            <h2 class="heading">Trending Movies</h2>
        </div>`;

		this.createMovieItemElement();
	}

	createMovieItemElement() {
		const container = this.querySelector('div');
		container.innerHTML = `<h2 class="heading">Trending Movies</h2>`;

		for (const movie of this._movies) {
			const movieItemElement = document.createElement('movie-item');
			movieItemElement.movie = movie;

			container.append(movieItemElement);
		}
	}

	renderError(message) {
		this.innerHTML = /*html*/ `
		<style>
			h2 {
				text-align: center;
				font-size: 3.7vmin;
			}
		</style>
		<div id="allMovies">
			<h2>${message}</h2>
		</div>`;
	}
}

customElements.define('trending-movies', TrendingMovies);
