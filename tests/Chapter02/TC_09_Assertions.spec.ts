//import playwright module
import {test, expect} from '@playwright/test'

//Write a test Hard assertions
test('Mouse Actions', async({page})=>{
// await page.goto("https://www.bt.com/")

// // Example assertion
// const title = await page.title();
// expect(title).toBe("Broadband, TV Packages, TNT Sports & Mobile Deals | BT");

// await expect(page).toHaveURL("https://www.bt.com/");

// await expect(page.locator('//*[@id="maincontent"]/section[1]/div/div/div[6]/a[2]')).toBeVisible();
// await page.close();
await page.goto("https://ee.co.uk/mobile");
await expect(page).toHaveTitle("EE Mobile | Mobile Phones, Tablets & Mobile Wifi | EE");
await expect(page).toHaveURL("https://ee.co.uk/mobile");
await expect(page.locator('text=Pay monthly phones')).toBeVisible();
})