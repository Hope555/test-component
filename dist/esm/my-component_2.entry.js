import { r as registerInstance, h, H as Host } from './index-26e3030f.js';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

const sasButtonCss = ":host{display:inline-block;background-color:green;color:red}";

const SasButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, "button"));
  }
};
SasButton.style = sasButtonCss;

export { MyComponent as my_component, SasButton as sas_button };
