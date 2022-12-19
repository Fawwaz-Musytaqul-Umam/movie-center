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
            .search-bar {
                position: sticky;
                top: 70px;
                width: 600px;
                margin: auto;
                padding: 25px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: var(--main-color);
                box-shadow: 0 0 6px #949494;
            }

            .search-bar,
            .search-bar input,
            .search-bar button{
                font-size: calc(2vmin + 3px);
                border-radius: 10px;
            }

            .search-bar input {
                width: 75%;
                padding: 16px;
                background: var(--body-color);
                border: 0;
            }

            .search-bar input,
            .search-bar input::placeholder,
            .search-bar button {
                color: var(--text-color);
            }

            .search-bar button {
                width: 23%;
                padding: 16px;
                background: var(--body-color);
                border: 0;
                cursor: pointer;
            }

            .search-bar button:active{
                color: #000;
                background-color: var(--text-color);
            }

            @media screen and (max-width: 800px) {
                .search-bar {
                    position: static;
                    max-width: 85%;
                    padding: 10px 8px;
                    box-shadow: 0 0 3px #949494;
                }

                .search-bar button,
                .search-bar input {
                    height: 5vmax;
                    margin: 0;
                    padding: 7px 10px;
                }

                .search-bar input {
                    width: 65%;
                }

                .search-bar button {
                    width: 30%;
                }
            }
        </style>
        <div class="search-bar">
            <input type="search" id="searchBoxInput" placeholder="Search Movie...">
            <button id="searchBtn">SEARCH</button>
        </div>`;

		this.shadowDOM.querySelector('button').addEventListener('click', this._clickEvent);
	}
}

customElements.define('search-bar', SearchBar);
