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
					<a href="#allMovies">
						<i class="bx bxs-movie-play"></i>
						<span class="links-name">All Movies</span>
					</a>
				</li>
				<li class="links">
					<a href="#favouriteMovies">
						<i class="bx bxs-heart"></i>
						<span class="links-name">Favourite</span>
					</a>
				</li>
			</ul>
		</nav>`;

		const menuToggleBtn = this.querySelector('#menuToggleBtn');
		const menuLinksElement = this.querySelectorAll('.links');

		menuToggleBtn.addEventListener('click', onToggleBtnClicked);
		menuLinksElement.forEach(element => {
			element.addEventListener('click', onLinksClicked);
		});
	}
}

function onToggleBtnClicked() {
	const menuBar = document.querySelector('.menu-bar');
	menuBar.classList.toggle('opened');

	this.classList.toggle('bx-menu');
	this.classList.toggle('bx-menu-alt-right');
}

function onLinksClicked() {
	const menuBar = document.querySelector('.menu-bar');
	const menuToggleBtn = menuBar.querySelector('#menuToggleBtn');

	setTimeout(() => {
		menuToggleBtn.classList.add('bx-menu');
		menuToggleBtn.classList.remove('bx-menu-alt-right');

		menuBar.classList.remove('opened');
	}, 300);
}

customElements.define('menu-bar', MenuBar);
