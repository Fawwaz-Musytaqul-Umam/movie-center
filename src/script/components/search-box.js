class SearchBox extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
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
                background: var(--menu-bar-color);
                box-shadow: 0 3px 10px var(--shadow-color);
            }

            div,
            div input,
            div button{
                border-radius: 15px;
            }

            div input {
                width: 75%;
                padding: 16px;
                font-size: 1.1em;
                background: #000;
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
                background: #000;
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
                    width: 80%;
                    padding: 15px 10px;
                    align-items: center;
                }

                div input {
                    margin-bottom: 12px;
                    font-size: 1em;
                }
                
                div button,
                div input {
                    margin: 0;
                }
            }
            
            @media screen and (max-width: 550px) {
                div input,
                div button {
                    height: 5vmax;
                    padding: 7px 10px;
                    font-size: 1.5vmax;
                }

                div input{
                    width: 65%
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
	}
}

customElements.define('search-box', SearchBox);
