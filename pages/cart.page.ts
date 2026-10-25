
import { expect, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async openCart() {
    await this.page.locator('#nav-cart').click();
    await this.page.waitForURL(/\/cart/);
    await this.checkBlocked();
  }

  async verifyItemPresent() {
    await expect(
      this.page.locator('[data-item-index]').first()
    ).toBeVisible();
  }

  async removeFirstItem() {
    const item = this.page.locator('[data-item-index]').first();

    await expect(item).toBeVisible();

    const remove = item.getByRole('button', {
      name: /delete|remove/i
    });

    await remove.click();

    await expect(item).toHaveCount(0);
  }
}
