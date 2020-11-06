'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0828c69c.js');

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return index.h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

const sasButtonCss = ":host{display:inline-block;background-color:green;color:red}";

const SasButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, "button"));
  }
};
SasButton.style = sasButtonCss;

exports.my_component = MyComponent;
exports.sas_button = SasButton;
