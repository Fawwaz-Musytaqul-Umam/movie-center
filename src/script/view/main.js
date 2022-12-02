import '../components/search-box.js';

const main = () => {
	// body transition
	setTimeout(() => {
		document.body.style.opacity = 1;
		document.body.style.transition = 'opacity 1s ease-out';
	}, 1300);

	// Menu bar
	const menuBar = document.querySelector('.menu-bar');
	const menuOpenBtn = menuBar.querySelector('#menuToggleBtn');
	const menuListElement = menuBar.querySelectorAll('.links')

	menuOpenBtn.addEventListener('click', function () {
		this.classList.toggle('bx-menu');
		this.classList.toggle('bx-menu-alt-right');

		menuBar.classList.toggle('opened');
	});

	menuListElement.forEach(e => {
		e.addEventListener('click',function () {
			setTimeout(() => {
				menuOpenBtn.classList.toggle('bx-menu');
				menuOpenBtn.classList.toggle('bx-menu-alt-right');
	
				menuBar.classList.toggle('opened');
			}, 300);
		})
	});
};

export default main;
