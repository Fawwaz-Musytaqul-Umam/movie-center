class MovieItem extends HTMLElement {
	set movie(movie) {
		this._movie = movie;
		this.render();
	}

	render() {
		this.innerHTML = /*html*/ `
		<style>
			movie-item {
				width: 23vmax;
				margin: 25px;
				padding: 15px;
				font-size: 1.1em;
				background: var(--menu-bar-color);
				border-radius: 10px;
			}
			
			.movie-container i:hover{
				color: red;
			}

			.movie-container .movie-image {
				width: 100%;
				max-height: 300px;
				object-fit: cover;
				object-position: center;
			}

			.movie-container p {
				max-height: 300px;
				overflow: hidden;
			}

			@media screen and (max-width: 768px) {
				movie-item {
					width: 100%;
				}
			}
		</style>

        <div class="movie-container">
            <div class="movie-header">
				<h2 class="title">${this._movie.title}</h2>
				<img src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}" class="movie-image">
			</div>
            <div class="movie-text">
				<p>${this._movie.overview}</p>
			</div>
        </div>`;
	}
}

customElements.define('movie-item', MovieItem);
