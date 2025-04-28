const { test, expect } = require('@playwright/test');
const { allure } = require('allure-playwright');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');

test.describe('Order Tests', () => {
  let loginPage;
  let productPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    await page.goto('/login');
    await loginPage.login('sivaram579@gmail.com', 'Welcome#123');
  });

  test('should add mens tshirt to cart and place order', async ({ page }) => {
    await allure.step('Add product to cart', async () => {
      await productPage.addMensTshirtToCart();
    });
    
    await allure.step('Proceed to checkout', async () => {
      await productPage.proceedToCheckout();
    });
    
    await allure.step('Place order', async () => {
      await productPage.placeOrder();
    });
    
    await allure.step('Fill payment details', async () => {
      await page.fill('input[name="name_on_card"]', 'Test User');
      await page.fill('input[name="card_number"]', '4111111111111111');
      await page.fill('input[name="cvc"]', '123');
      await page.fill('input[name="expiry_month"]', '12');
      await page.fill('input[name="expiry_year"]', '2025');
    });
    
    await allure.step('Submit payment', async () => {
      await page.click('button[data-qa="pay-button"]');
    });
    
    await allure.step('Verify order success', async () => {
      const successMessage = await page.textContent('h2[data-qa="order-placed"]');
      expect(successMessage).toContain('Order Placed!');
    });
  });
}); 