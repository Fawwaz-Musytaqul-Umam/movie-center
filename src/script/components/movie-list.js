class MovieList extends HTMLElement {
	constructor() {
		super();
        
		this.headingFontSize = 'calc(2vmin + 15px)';
		this.containerStyle = `max-width:100%;display:flex;justify-content:space-evenly;flex-wrap:wrap;`;
		this.shadowDOM = this.attachShadow({ mode: 'open' });
	}

	renderError(message) {
		this.shadowDOM.innerHTML = /*html*/ `
		<style>
			h1 {
				text-align: center;
				font-size: 2.7vmin;
			}
		</style>
		<div>
			<h1>${message}</h1>
		</div>`;
	}
}

export default MovieList;
