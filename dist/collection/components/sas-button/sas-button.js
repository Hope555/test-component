import { Component, Host, h } from '@stencil/core';
export class SasButton {
  render() {
    return (h(Host, null, "button"));
  }
  static get is() { return "sas-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sas-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["sas-button.css"]
  }; }
}
