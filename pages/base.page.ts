
import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected readonly page: Page) {}

  async open(path = '/') {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
    await this.checkBlocked();
  }

  async checkBlocked() {
    const url = this.page.url();
    const body = (await this.page.locator('body').innerText())
      .slice(0, 8000);

    if (
      /captcha|validateCaptcha/i.test(url) ||
      /enter the characters you see|type the characters you see|robot check/i.test(body)
    ) {
      throw new Error(
        'Amazon CAPTCHA/bot protection detected. Test stopped without bypassing it.'
      );
    }

    if (/automated access|unusual traffic/i.test(body)) {
      throw new Error(
        'Amazon blocked automated access. Test stopped without retrying a bypass.'
      );
    }
  }
}
