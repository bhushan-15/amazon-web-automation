
import { expect, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async verifyLoaded() {
    await expect(this.page.locator('#nav-logo-sprites')).toBeVisible();
    await expect(this.page.getByRole('textbox', {
      name: /search/i
    }).first()).toBeVisible();
  }

  async search(term: string) {
    const search = this.page.getByRole('textbox', {
      name: /search/i
    }).first();

    await search.fill(term);
    await search.press('Enter');
    await this.page.waitForURL(/\/s\?/);
    await this.checkBlocked();
  }
}
