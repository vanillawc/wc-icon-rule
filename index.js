var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// src/wc-icon-rule.js
__markAsModule(exports);
__export(exports, {
  WCIconRule: () => WCIconRule
});
var WCIconRule = class extends HTMLElement {
  constructor() {
    super();
    this.__shadowRoot = this.attachShadow({mode: "open"});
    const template = document.createElement("template");
    template.innerHTML = WCIconRule.template();
    this.__shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.setAttribute("role", "presentation");
    for (const child of this.children) {
      child.setAttribute("role", "none");
    }
  }
  static template() {
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
          border-top-width: var(--hr-width, 1px);
          border-color: var(--hr-color, #000);
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
};
customElements.define("wc-icon-rule", WCIconRule);
