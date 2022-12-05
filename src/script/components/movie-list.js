import './movie-item.js';

class MovieList extends HTMLElement {
	set movies(movies) {
		this._movies = [...movies];
		this.render();
	}

	render() {
		this.innerHTML = /*html*/ `
        <div id="allMovies">
            ${this._movies.forEach(movie => {
				const movieItem = document.createElement('movie-item');
				movieItem.movie = movie;

				this.appendChild(movieItem);
			})}
        </div>`;
	}

	renderError(message) {
		this.innerHTML = `<div id="allMovies">${message}</div>`;
	}
}

customElements.define('movie-list', MovieList);
