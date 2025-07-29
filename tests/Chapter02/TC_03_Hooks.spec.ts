//import playwright module
// HOOKS order
//before all()-1
//after each()-3 
//before each ()-2
//after all()-4
import {test, expect} from '@playwright/test'

test.beforeAll(async()=>{
console.log('Running before all tests')

});
test.afterAll(async()=>{
console.log('Running after all tests')

});

//Write a test
test ('Navigate1', async({page})=>{
await page.goto("https://www.google.com/");
await page.getByRole('combobox', { name: 'Search' }).fill("Playwright by testers talk");
await page.getByRole('combobox', { name: 'Search' }).press('Enter');
await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click();
await expect(page).toHaveTitle("Playwright by Testers Talk☑️ - YouTube");
})

test ('Navigate2', async({page})=>{
await page.goto("https://www.google.com/");
await page.getByRole('combobox', { name: 'Search' }).fill("Playwright by testers talk");
await page.getByRole('combobox', { name: 'Search' }).press('Enter');
await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click();
await expect(page).toHaveTitle("Playwright by Testers Talk☑️ - YouTube");
})
