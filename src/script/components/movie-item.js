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
				margin-block: 35px;
				padding: 15px;
				background: var(--main-color);
				box-shadow: 1px 3px 6px rgba(255, 255, 255, .2);
				border-radius: 10px;
			}

			.movie-header .title {
				font-size: calc(1.8vmin + 10px);
			}
			
			.movie-header .movie-image {
				width: 100%;
				max-height: 300px;
				object-fit: cover;
				object-position: center;
			}
			
			.movie-container p {
				max-height: 300px;
				font-size: 1em;
				line-height: 26px;
				overflow: hidden;
			}

			@media screen and (max-width: 768px) {
				:host {
					width: 100%;
					margin: 0 0 27px;
				}
			}
		</style>

        <div class="movie-container">
            <div class="movie-header">
				<h2 class="title">${this._movie.title}</h2>
				<img src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}" class="movie-image">
			</div>
            <div class="inner">
				<p class="movie-text">${this._movie.overview}</p>
			</div>
        </div>`;
	}
}

customElements.define('movie-item', MovieItem);
