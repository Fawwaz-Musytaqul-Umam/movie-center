class MovieItem extends HTMLElement {
	set movie(movie) {
		this._movie = movie;
		this.render();
	}

	render() {
		this.innerHTML = /*html*/ `
		<style>
			.movie {
				width: 30%;
				height: 400px;
				background: var(--menu-bar-color);
			}
		</style>

        <div class="movie">
            <div class="movie-header">
				<h2 class="title">${this._movie.Tttle}</h2>
				<img src="${this._movie.Poster}" class="movie-image">
			</div>
            <div class="movie-text">
				<p>${this._movie.Plot}</p>
				<i class="bx bxs-heart"></i>
			</div>
        </div>`;
	}
}

customElements.define('movie-item', MovieItem);
