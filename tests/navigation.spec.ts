import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to the invoices page', async ({ page }) => {
    await page.goto('/dashboard');

    await page.getByTestId('nav-link-invoices').click();

    await expect(page.locator('h1')).toContainText('Invoices');
  });
});
