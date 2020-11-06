import { newE2EPage } from '@stencil/core/testing';

describe('sas-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sas-button></sas-button>');

    const element = await page.find('sas-button');
    expect(element).toHaveClass('hydrated');
  });
});
