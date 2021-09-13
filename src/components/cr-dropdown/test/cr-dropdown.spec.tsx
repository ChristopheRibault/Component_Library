import { newSpecPage } from '@stencil/core/testing';
import { CrDropdown } from '../cr-dropdown';

describe('cr-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CrDropdown],
      html: `<cr-dropdown></cr-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <cr-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cr-dropdown>
    `);
  });
});
