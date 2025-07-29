import {test, expect} from '@playwright/test'

//Write a test for Radio Button
 
test ('Mouse Actions', async({page})=>{
await page.goto("https://jqueryui.com/checkboxradio/");
const iframe=await page.frameLocator('[class="demo-frame"] ')
await iframe.locator('[for="radio-1"] ').click()
await expect(iframe.locator('[for="radio-1"]')).toBeChecked()
await iframe.locator('[for="radio-2"] ').click()
await expect(iframe.locator('[for="radio-2"]')).toBeChecked() 
await iframe.locator('[for="radio-3"] ').click()
await expect(iframe.locator('[for="radio-3"]')).toBeChecked()
await page.close();
})
