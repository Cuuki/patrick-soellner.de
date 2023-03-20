import { test, expect } from '@playwright/test';

test('should navigate to the index page', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: /patrick söllner \(@cuuki\)/i })).toBeVisible();
});
