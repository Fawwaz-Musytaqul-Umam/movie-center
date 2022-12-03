class MenuBar extends HTMLElement {
	connectedCallback() {
		this.innerHTML = /*html*/ `
        <nav class="menu-bar">
			<ul>
				<li class="menu-header">
					<span class="text-logo">Movie Center</span>
					<i class="bx bx-menu" id="menuToggleBtn"></i>
				</li>
				<li class="links">
					<a href="#trendingMovies">
						<i class="bx bxs-hot"></i>
						<span class="links-name">Trending</span>
					</a>
				</li>
				<li class="links">
					<a href="#favouriteMovies">
						<i class="bx bxs-heart"></i>
						<span class="links-name">Favourite</span>
					</a>
				</li>
				<li class="links">
					<a href="#allMovies">
						<i class="bx bxs-movie-play"></i>
						<span class="links-name">All Movies</span>
					</a>
				</li>
			</ul>
		</nav>`;
	}
}

customElements.define('menu-bar', MenuBar);
