const main = () => {
    // body transition
	setTimeout(() => {
		document.body.style.opacity = 1;
		document.body.style.transition = 'opacity 1s ease-out';
	}, 1300);

    // Menu bar open/close
	const menuBar = document.querySelector('.menu-bar');
	const menuBtn = menuBar.querySelector('#menuToggleBtn');

	menuBtn.addEventListener('click', function () {
        this.classList.toggle('bx-menu')
        this.classList.toggle('bx-menu-alt-right')

		menuBar.classList.toggle('opened');
	});
};

export default main;
