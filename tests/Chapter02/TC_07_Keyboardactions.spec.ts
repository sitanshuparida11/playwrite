//import playwright module
import {test, expect} from '@playwright/test'

//Write a test to use keyboard keys
test('Mouse Actions', async({page})=>{
await page.goto("https://www.bt.com/")
await page.locator('//*[@id="maincontent"]/section[1]/div/section/div[3]/a/span').click()
await page.locator ('//*[@id="signInName"]').fill('sitanshuparida@bt.com')
// await page.locator ('//*[@id="signInName"]').first().press('Enter')
// await page.locator ('//*[@id="signInName"]').first().press('Tab')
// await page.locator ('//*[@id="signInName"]').first()
// await page.keyboard.press('Control+A')
// await page.keyboard.press('Delete')
await page.close();

})