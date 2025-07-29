//import playwright module
import {test, expect} from '@playwright/test'

//Write a test
test('Establish Screen-shot', async ({ page }) => {
  await page.goto('https://www.att.com/');

  //Element Screen-shot
  await page.getByRole('link', { name: 'Shop plans' }).screenshot({path: './screen-shots/Elementscreenshot.png'});
 
  //Page Screen-shot

   await page.screenshot({path: './screen-shots/At&tpage.png'});

   //FullPage
   await page.screenshot({path: './screen-shots/Fullpage.png', fullPage:true});
})