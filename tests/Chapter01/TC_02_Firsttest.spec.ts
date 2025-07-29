//import playwright module
import {test, expect} from '@playwright/test'

//Write a test
test ('Navigate', async({page})=>{
await page.goto("https://www.google.com/");
await page.getByRole('combobox', { name: 'Search' }).fill("Playwright by testers talk");
await page.getByRole('combobox', { name: 'Search' }).press('Enter');
await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click();
await expect(page).toHaveTitle("Playwright by Testers Talk☑️ - YouTube");



})