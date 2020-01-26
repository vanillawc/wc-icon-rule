export class WCIconRule extends HTMLElement {

  constructor() {
    super();
    this.__shadowRoot = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = WCIconRule.template();
    this.__shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static template () {
    return `
      <style>
        :host {
          display: block;
          overflow: hidden;
          text-align: center;
        }
        :host:before, 
        :host:after {
          content: "";
          display: inline-block;
          vertical-align: middle;
          position: relative;
          width: 50%;
          border-top-style: var(--hr-style, solid);
          border-top-width: var(--hr-width: 1px);
          border-color: #999;
        }
        :host:before {
          right: var(--space-around, 1em);
          margin-left: -50%;
        }
        :host:after {
          left: var(--space-around, 1em);
          margin-right: -50%;
        }
      
        ::slotted(*) {
          display: inline-block;
          width: var(--width, 32px);
          height: var(--height, 32px);
          vertical-align: middle;
        }
      </style>
      <slot></slot>
    `;
  }
}

customElements.define('wc-icon-rule', WCIconRule);
