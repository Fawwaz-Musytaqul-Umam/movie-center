import moment from 'moment/moment';

class DateBar extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.shadowDOM.innerHTML = /*html*/ `
        <style>
            div {
                width: 660px;
                margin: 25px auto 10px;
                padding-block: 15px;
            }
            
            @media screen and (max-width: 800px) {
                div {
                    width: 80%;
                    padding-block: 7px;
                    font-size: calc(1.1vmin + 7px);
                }
            }
        </style>
        <div>
            <h2>${moment().format('LL')}</h2>
        </div>`;
	}
}

customElements.define('date-bar', DateBar);
