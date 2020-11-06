import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sas-button',
  styleUrl: 'sas-button.css',
  shadow: true,
})
export class SasButton {

  render() {
    return (
      <Host>
        button
      </Host>
    );
  }

}
