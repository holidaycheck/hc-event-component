const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: flex;
      flex-wrap: wrap;
    }
  </style>
  <slot></slot>
`;

class HcEvent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('hc-event', HcEvent);
