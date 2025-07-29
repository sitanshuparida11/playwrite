import { test, expect } from '@playwright/test';

test('Shop at At&t', async ({ page }) => {
  await page.goto('https://www.att.com/');
  await page.getByRole('link', { name: 'Wireless', exact: true }).click();
  await page.getByRole('link', { name: 'Buy accessories' }).click();
  // await page.getByRole('button', { name: 'No thanks' }).click();
  await expect(page.locator('h1')).toContainText('Shop accessories');
});