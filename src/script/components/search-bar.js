class SearchBar extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({ mode: 'open' });
	}

	set clickEvent(event) {
		this._clickEvent = event;
		this.render();
	}

	get value() {
		return this.shadowDOM.querySelector('input').value;
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = /*html*/ `
        <style>
            div {
                position: sticky;
                top: 70px;
                width: 600px;
                margin: auto;
                padding: 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: var(--menu-bar-color);
                box-shadow: 0 3px 10px var(--shadow-color);
            }

            div,
            div input,
            div button{
                font-size: 1em;
                border-radius: 10px;
            }

            div input {
                width: 75%;
                padding: 16px;
                background: var(--body-color);
                border: 0;
            }

            div input,
            div input::placeholder,
            div button {
                color: var(--text-color);
            }

            div button {
                width: 23%;
                padding: 16px;
                background: var(--body-color);
                border: 0;
                cursor: pointer;
            }

            div button:active{
                color: #000;
                background-color: var(--text-color);
            }

            @media screen and (max-width: 800px) {
                div {
                    position: static;
                    max-width: 80%;
                    padding: 10px 13px;
                }

                div button,
                div input {
                    height: 5vmax;
                    margin: 0;
                    padding: 7px 10px;
                    font-size: 1.4vmax;
                }

                div input {
                    width: 65%;
                }

                div button {
                    width: 30%;
                }
            }
        </style>
        <div>
            <input type="search" id="searchBoxInput" placeholder="Search Movie...">
            <button id="searchBtn">SEARCH</button>
        </div>`;

		this.shadowDOM.querySelector('button').addEventListener('click', this._clickEvent);
	}
}

customElements.define('search-bar', SearchBar);
