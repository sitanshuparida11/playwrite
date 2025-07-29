import {test, expect} from '@playwright/test'

//Write a test for retries
test('Tags',{tag: ['@smoke']}, async({page})=>{
await page.goto("https://ee.co.uk/mobile");
await expect.soft(page).toHaveTitle("EE Mobile | Mobile Phones, Tablets & Mobile Wifi | EE");
await expect(page).toHaveURL("https://ee.co.uk/mobile");
await expect(page.locator('text=Pay monthly phones')).toBeVisible();
})

//Make sure to run this test with retries enabled in your playwright.config.ts file
//  retries: process.env.CI ? 2 : 0, instead of 0
//  trace: 'on-first-retry', instead of 'on'
//  screenshot: 'only-on-failure', instead of 'on'
//  headless: false, instead of true