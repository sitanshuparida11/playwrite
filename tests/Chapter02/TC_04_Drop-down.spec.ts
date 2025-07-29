//import playwright module
import {test, expect} from '@playwright/test'

//Write a test to select drop-down option
test ('Handling drop-down', async({page})=>{
await page.goto("https://www.facebook.com/")
await page.getByRole('button',{name: "Create new account"}).click();
await page.getByLabel("Month").selectOption('3');
await page.getByLabel("Month").selectOption('Aug');

})