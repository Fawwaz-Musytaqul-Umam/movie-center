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
                margin: 25px auto;
                padding-block: 15px;
            }
            
            @media screen and (max-width: 800px) {
                div {
                    width: 80%;
                    padding-block: 7px;
                    font-size: 2vmax;
                }
            }
        </style>
        <div>
            <h2>${moment().format('LL')}</h2>
        </div>`;
	}
}

customElements.define('date-bar', DateBar);
