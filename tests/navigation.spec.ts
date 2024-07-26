import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/dashboard');
    await page.fill('#email', process.env.TEST_USER_EMAIL ?? '');
    await page.fill('#password', process.env.TEST_USER_PASSWORD ?? '');
    await page.click('[data-testid="login/form/submit-btn"]');
    await page.waitForNavigation();
  });

  test('should navigate to the invoices page', async ({ page }) => {
    await page.getByTestId('nav/link-invoices').click();

    await expect(page.locator('h1')).toContainText('Invoices');
  });
});
