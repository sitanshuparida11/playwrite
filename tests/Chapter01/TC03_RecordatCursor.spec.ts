//import playwright module
import {test, expect} from '@playwright/test'

//Write a test
test ('Record at Cursor', async({page})=>{
await page.goto("https://www.google.com/");
await page.getByRole('combobox', { name: 'Search' }).fill("Playwright by testers talk");
await page.getByRole('combobox', { name: 'Search' }).press('Enter');
await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click();
await expect(page).toHaveTitle("Playwright by Testers Talk☑️ - YouTube");
await expect(page.getByRole('link', { name: 'Playwright Tutorial Full' })).toBeVisible();
await expect(page.locator('ytd-playlist-video-list-renderer')).toContainText('Playwright Tutorial Full Course 2024 | Playwright Testing Tutorial');
await expect(page.locator('ytd-playlist-video-list-renderer')).toContainText('Playwright API Testing Tutorial Crash Course 2024');
await expect(page.getByLabel('Playwright Tutorial Full').locator('#video-title')).toContainText('Playwright Tutorial Full Course 2024 | Playwright Testing Tutorial');
await expect(page.getByLabel('Playwright API Testing Tutorial Crash Course 2024 1 hour, 59 minutes').locator('#video-title')).toContainText('Playwright API Testing Tutorial Crash Course 2024');
})