
import { expect, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class SearchResultsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private get products() {
    return this.page.locator(
      '[data-component-type="s-search-result"][data-asin]'
    );
  }

  async verifyResults() {
    await expect(this.products.first()).toBeVisible();
    await expect(this.products.first()).toHaveAttribute(
      'data-asin', /.+/
    );
  }

  async openFirstProduct() {
    const first = this.products.first();
    const link = first.locator('h2 a');

    await expect(link).toBeVisible();
    await link.click();
    await this.page.waitForURL(/\/(dp|gp\/product)\//);
    await this.checkBlocked();
  }
}
