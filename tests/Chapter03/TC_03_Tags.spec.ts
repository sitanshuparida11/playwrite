import {test, expect} from '@playwright/test'

//Write a test for tags
test('Tags',{tag: ['@smoke']}, async({page})=>{
await page.goto("https://ee.co.uk/mobile");
await expect.soft(page).toHaveTitle("EE Mobile | Mobile Phones, Tablets & Mobile Wifi | EE");
await expect(page).toHaveURL("https://ee.co.uk/mobile");
await expect(page.locator('text=Pay monthly phones')).toBeVisible();
})

test('Tags 2',{tag: ['@regression']}, async({page})=>{
await page.goto("https://www.bt.com/")
const title = await page.title();
expect(title).toBe("Broadband, TV Packages, TNT Sports & Mobile Deals | BT");
})

//Note