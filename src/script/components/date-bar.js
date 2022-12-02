import moment from 'moment/moment';

class DateBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowDOM.innerHTML = /*html*/ `
        <style>
            :host {
                position: fixed;
                top: 0;
                right: 55px;
                background-color: var(--menu-bar-color);
                box-shadow: 0 0 5px var(--shadow-color);
                z-index: 90;
            }
            
            div {
                padding: 15px;
                font-size: 1.2em;
            }
    
            @media screen and (max-width: 768px) {
                :host {
                    top: 50px;
                    right: 0;
                }

                div {
                    width: max-content;
                    padding: 7px;
                    font-size: 2.5vmax
                }
            }
        </style>
        <div>
            ${moment().format('LL')}
        </div>`;
    }
}

customElements.define('date-bar', DateBar);
