import moment from 'moment/moment';

class DateBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = /*html*/ `
        <style>
            :host {
                position: fixed;
                top: 0;
                right: 55px;
                background-color: var(--navigation-bar-color);
                box-shadow: 0 0 5px var(--shadow-color);
                z-index: 9999;
            }
            
            div {
                padding: 15px;
                color: white;
                font-size: 1.2em;
            }

        </style>
        <div>
            ${moment().format('LL')}
        </div>`;
    }
}

customElements.define('date-bar', DateBar);
