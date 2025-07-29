//import playwright module
import {test, expect} from '@playwright/test'

//Write a test to timeouts scenarios
test ('Timeouts', async({page})=>{
  test.setTimeout(1*60*1000); // Set timeout to 1 minute (60 seconds)-this will override the global timeout for this test only
await page.goto("https://www.google.com/");
await page.getByRole('combobox', { name: 'Search' }).fill("Playwright by testers talk");
await page.getByRole('combobox', { name: 'Search' }).press('Enter');
await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click();
await expect(page).toHaveTitle("Playwright by Tester Talk☑️ - YouTube");
await page.waitForTimeout(60000);
// Wait for 60 seconds to observe the page

})
// Note: This test will fail if the page does not load within the default timeout of 30 seconds.
// You can adjust the timeout by using the `timeout` option in the test configuration or by using `page.setDefaultTimeout()` method.  