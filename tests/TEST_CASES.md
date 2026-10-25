
# Amazon.in P0 Test Cases

## P0-01 — Homepage loads and product search works

- Priority: P0
- Automated: Yes (@smoke)
- Preconditions: Amazon.in is accessible; no CAPTCHA or bot block.
- Steps:
  1. Open the Amazon.in homepage.
  2. Verify the logo and search field are visible.
  3. Search for "wireless mouse".
  4. Verify search results are displayed.
- Expected result: Homepage loads and the search returns product results.

## P0-02 — Search result opens product details

- Priority: P0
- Automated: Yes (@smoke)
- Preconditions: Search is available and at least one result exists.
- Steps:
  1. Search for the configured product term.
  2. Open the first result.
  3. Verify the product title is visible.
- Expected result: A product detail page opens with a title.

## P0-03 — Product details show title, price and availability

- Priority: P0
- Automated: Yes (@smoke)
- Preconditions: A product detail page is accessible.
- Steps:
  1. Open a product from search results.
  2. Verify the title.
  3. Verify a price is displayed.
  4. Verify the add-to-cart control is visible.
- Expected result: The page exposes the key information needed to evaluate a product.
- Note: A visible add-to-cart button alone does not guarantee stock availability.

## P0-04 — Customer can add a product to cart

- Priority: P0
- Automated: Yes (@smoke)
- Preconditions: A product can be added without signing in.
- Steps:
  1. Open a product detail page.
  2. Add the product to the cart.
  3. Open the cart.
  4. Verify the item is present.
- Expected result: The cart contains the selected product.
- Safety: No checkout or payment is attempted.

## P0-05 — Customer can remove an item from cart

- Priority: P0
- Automated: Yes (@smoke)
- Preconditions: A product can be added to the cart.
- Steps:
  1. Add a product to the cart.
  2. Open the cart.
  3. Verify the item is present.
  4. Remove the item.
  5. Verify the item is absent.
- Expected result: The cart updates after removal.
- Safety: No order is placed.
