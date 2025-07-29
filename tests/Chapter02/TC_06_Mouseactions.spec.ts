//import playwright module
import {test, expect} from '@playwright/test'

//Write a test to handling Iframes such as dragg & drop
test ('Mouse Actions', async({page})=>{
await page.goto("https://www.att.com/")
// await page.getByText('Bundles').click({button :'left'});
// await page.getByText('Bundles').click({button :'middle'});
// await page.getByText('Bundles').click({button :'left'});
// await page.getByLabel("Stop automatic slide show").hover()
await page.getByLabel('Order iPhone 16 Pro').first().dblclick();
 

})