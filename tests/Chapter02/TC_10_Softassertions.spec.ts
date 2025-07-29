//import playwright module
import {test, expect} from '@playwright/test'

//Write a test Soft assertions
test('Mouse Actions', async({page})=>{
await page.goto("https://ee.co.uk/mobile");
await expect.soft(page).toHaveTitle("EE Mobile | Mobile Phones, Tablets & Mobile Wifi | EE");
await expect(page).toHaveURL("https://ee.co.uk/mobile");
await expect(page.locator('text=Pay monthly phones')).toBeVisible();
})