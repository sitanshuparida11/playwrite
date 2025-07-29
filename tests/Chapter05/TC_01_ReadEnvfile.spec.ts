import {test, expect} from '@playwright/test';

test('Read Environment Variables', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
  await page.locator('[id="user-name"]').fill(process.env.E2E_Username || '');
  await page.locator('[id="password"]').fill(process.env.E2E_Password || '');
  await page.click('[id="login-button"]');
  await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
  await page.close();
});
