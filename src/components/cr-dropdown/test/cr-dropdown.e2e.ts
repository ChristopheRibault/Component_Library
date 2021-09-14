import { newE2EPage } from '@stencil/core/testing';

describe('cr-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cr-dropdown></cr-dropdown>');

    const element = await page.find('cr-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
