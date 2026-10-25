
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { SearchResultsPage } from '../pages/search-results.page';
import { ProductPage } from '../pages/product.page';
import { CartPage } from '../pages/cart.page';
import productData from '../test-data/products.json';

async function openFirstProduct(page: import('@playwright/test').Page) {
  const home = new HomePage(page);
  const results = new SearchResultsPage(page);

  await home.open();
  await home.verifyLoaded();
  await home.search(productData.searchTerm);
  await results.verifyResults();
  await results.openFirstProduct();

  return new ProductPage(page);
}

test('P0-01 @smoke Homepage loads and search works', async ({ page }) => {
  const home = new HomePage(page);
  const results = new SearchResultsPage(page);

  await home.open();
  await home.verifyLoaded();
  await home.search(productData.searchTerm);
  await results.verifyResults();
});

test('P0-02 @smoke Search result opens product details', async ({ page }) => {
  const product = await openFirstProduct(page);

  await product.verifyTitle();
});

test('P0-03 @smoke Product details show title, price and availability', async ({ page }) => {
  const product = await openFirstProduct(page);

  await product.verifyDetails();
});

test('P0-04 @smoke Customer can add a product to cart', async ({ page }) => {
  const product = await openFirstProduct(page);
  const cart = new CartPage(page);

  await product.addToCart();
  await cart.openCart();
  await cart.verifyItemPresent();
});

test('P0-05 @smoke Customer can remove an item from cart', async ({ page }) => {
  const product = await openFirstProduct(page);
  const cart = new CartPage(page);

  await product.addToCart();
  await cart.openCart();
  await cart.verifyItemPresent();
  await cart.removeFirstItem();
});
