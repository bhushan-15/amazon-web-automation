
import { expect, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ProductPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async verifyDetails() {
    await expect(this.page.locator('#productTitle')).toBeVisible();

    const price = this.page.locator(
      '#corePriceDisplay_desktop_feature_div .a-price .a-offscreen,' +
      '#apex_desktop .a-price .a-offscreen,' +
      '#priceblock_ourprice'
    ).first();

    await expect(price).toBeVisible();

    await expect(
      this.page.locator('#add-to-cart-button')
    ).toBeVisible();
  }

  async addToCart() {
    const addButton = this.page.locator('#add-to-cart-button');

    await expect(addButton).toBeEnabled();
    await addButton.click();
    await this.checkBlocked();

    const confirmation = this.page.locator(
      '#NATC_SMART_WAGON_CONF_MSG_SUCCESS,' +
      '#sw-atc-confirmation, #attachDisplayAddBaseAlert'
    );

    await expect(confirmation.first()).toBeVisible();
  }
}
