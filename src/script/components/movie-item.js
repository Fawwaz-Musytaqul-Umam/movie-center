class MovieItem extends HTMLElement {
	constructor() {
		super()
		this.shadowDOM = this.attachShadow({mode: 'open'})
	}

	set movie(movie) {
		this._movie = movie;
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = /*html*/ `
		<style>
			:host {
				width: 23vmax;
				margin: 25px;
				padding: 15px;
				font-size: 1.1em;
				background: var(--main-color);
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

			.title {
				font-size: 1.2em;
			}
			
			.movie-container p {
				max-height: 300px;
				line-height: 28px;
				overflow: hidden;
			}

			@media screen and (max-width: 768px) {
				:host {
					width: 100%;
					margin: 0 0 27px;
				}

				.title {
					font-size: 3vmax;
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
