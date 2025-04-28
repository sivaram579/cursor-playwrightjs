const { test, expect } = require('@playwright/test');
const { allure } = require('allure-playwright');
const LoginPage = require('../pages/LoginPage');

test.describe('Login Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('/login');
  });

  test('should login successfully and verify home page', async ({ page }) => {
    await allure.step('Login with valid credentials', async () => {
      await loginPage.login('sivaram579@gmail.com', 'Welcome#123');
    });

    await allure.step('Verify successful login', async () => {
      const isLoggedIn = await loginPage.verifyLoginSuccess();
      expect(isLoggedIn).toBeTruthy();
    });
  });
}); 