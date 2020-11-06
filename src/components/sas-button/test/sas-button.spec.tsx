import { newSpecPage } from '@stencil/core/testing';
import { SasButton } from '../sas-button';

describe('sas-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SasButton],
      html: `<sas-button></sas-button>`,
    });
    expect(page.root).toEqualHtml(`
      <sas-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sas-button>
    `);
  });
});
