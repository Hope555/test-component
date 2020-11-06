import { attachShadow, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
  static get style() { return myComponentCss; }
};

const sasButtonCss = ":host{display:inline-block;background-color:green;color:red}";

const SasButton = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h(Host, null, "button"));
  }
  static get style() { return sasButtonCss; }
};

const MyComponent$1 = /*@__PURE__*/proxyCustomElement(MyComponent, [1,"my-component",{"first":[1],"middle":[1],"last":[1]}]);
const SasButton$1 = /*@__PURE__*/proxyCustomElement(SasButton, [1,"sas-button"]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      MyComponent$1,
  SasButton$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { MyComponent$1 as MyComponent, SasButton$1 as SasButton, defineCustomElements };
