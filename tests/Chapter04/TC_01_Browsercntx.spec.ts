//import playwright module
import {test, expect} from '@playwright/test'

//Write a test to open in new browser context
test ('Browsertab', async({page, browser})=>{
  const context = await browser.newContext();
  const newPage = await context.newPage();
  await newPage.goto("https://www.google.com/");
  await newPage.getByRole('combobox', { name: 'Search' }).fill("Playwright by testers talk");
  await newPage.getByRole('combobox', { name: 'Search' }).press('Enter');
  await newPage.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click();
  await expect(newPage).toHaveTitle("Playwright by Testers Talk☑️ - YouTube");

  // Wait for 60 seconds to observe the page
 const context2 = await browser.newContext();
 const page2 = await context2.newPage();

 const newTab = await context2.newPage();
  await newPage.goto("https://www.google.com/");
  await newPage.getByRole('combobox', { name: 'Search' }).fill("Playwright by testers talk");
  await newTab.getByRole('combobox', { name: 'Search' }).press('Enter');
  await newTab.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click();
  await expect(newTab).toHaveTitle("Playwright by Testers Talk☑️ - YouTube");
})

