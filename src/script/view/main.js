import '../components/search-bar.js';

const menuBar = document.querySelector('.menu-bar');
const menuToggleBtn = menuBar.querySelector('#menuToggleBtn');
const menuListElement = menuBar.querySelectorAll('.links');

const main = () => {
	// body transition
	setTimeout(() => {
		document.body.style.opacity = 1;
		document.body.style.transition = 'opacity 1s ease-out';
	}, 1300);

	// Menu bar
	menuToggleBtn.addEventListener('click', menuToggleEvent);
	menuListElement.forEach(e => e.addEventListener('click', menuLinksEvent));
};

function menuToggleEvent() {
	this.classList.toggle('bx-menu');
	this.classList.toggle('bx-menu-alt-right');

	menuBar.classList.toggle('opened');
}

function menuLinksEvent() {
	setTimeout(() => {
		menuToggleBtn.classList.add('bx-menu');
		menuToggleBtn.classList.remove('bx-menu-alt-right');

		menuBar.classList.remove('opened');
	}, 300);
}

export default main;
