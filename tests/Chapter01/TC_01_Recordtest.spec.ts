import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await test.step('Navigation', async()=>{
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click(); 
  })

  await test.step('Enter login details', async()=>{
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('sitanshuparida');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('truetalk');
  
  })
   await test.step('Sign In', async()=>{
   await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  
  })
   await test.step('Validate the text', async()=>{
   await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  })
});