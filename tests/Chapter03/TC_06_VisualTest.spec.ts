import {test, expect} from '@playwright/test'

//Write a test to identify visual changes in the UI
// This test will take a screenshot of the login page and compare it with a baseline image. 
test('Visual test', async({page})=>{
    await page.goto("https://github.com/login");
    await expect(page).toHaveScreenshot('login-page.png');
    await page.locator('//*[@id="login_field"]').fill('sitanshuparida54@gmail.com');
    await expect(page).toHaveScreenshot('login-page.png');
});