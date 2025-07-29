//import playwright module
import {test, expect} from '@playwright/test'

//Write a test Parameterization
// Note: This test is parameterized to fill in the email field on the BT website.
const email = ['sitanshuparida@bt.com', 'dhirajyallal@bt.com','prernagupta@bt.com'];

for (const userEmail of email) {

test(`Parameterize ${userEmail}`, async({page})=>{
await page.goto("https://www.bt.com/")
await page.locator('//*[@id="maincontent"]/section[1]/div/section/div[3]/a/span').click()
await page.locator ('//*[@id="signInName"]').fill('sitanshuparida@bt.com')
await page.locator ('[id="next"]').first().click()

})
}