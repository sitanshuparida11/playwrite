import { test, expect } from '@playwright/test';
// Write a data-driven test using Playwright
// Define an array of test data
const testData = [
  { username: 'standard_user', password: 'secret_sauce' },
  { username: 'locked_out_user', password: 'secret_sauce' },
  { username: 'problem_user', password: 'secret_sauce' },
];

// Data-driven test using testData array
for (const data of testData) {
  test(`Data-driven Test for user: ${data.username}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/index.html');
    await page.locator('[id="user-name"]').fill(data.username);
    await page.locator('[id="password"]').fill(data.password);
    await page.click('[id="login-button"]');
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
    await page.close();
  });
}