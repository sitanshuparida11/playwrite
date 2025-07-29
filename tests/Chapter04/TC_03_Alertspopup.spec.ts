import {test, expect} from '@playwright/test'

//Write a test Annotations like skip and only


test('Alerts', async({page})=>{
await page.goto("https://www.selenium.dev/documentation/webdriver/interactions/alerts/")
const title = await page.title();
expect(title).toBe("JavaScript alerts, prompts and confirmations | Selenium");

  page.once('dialog', async (dialog) => {
    await dialog.accept();
    console.log(`Dialog accepted: ${dialog.message()}`);
  })
  await page.getByText('See an example alert',{exact: true}).click();
  await page.close();
})

test('Alerts - Confirmation', async({page})=>{
await page.goto("https://www.selenium.dev/documentation/webdriver/interactions/alerts/")
const title = await page.title();
expect(title).toBe("JavaScript alerts, prompts and confirmations | Selenium");

  page.once('dialog', async (dialog) => {
    // await dialog.accept();
    await dialog.dismiss();
    // Uncomment the line above to accept the dialog instead of dismissing it
    console.log(`Dialog dismissed: ${dialog.message()}`);
  })
  await page.getByText('See a sample confirm',{exact: true}).click();
  await page.close();
})
test('Alerts - Prompt', async({page})=>{
await page.goto("https://www.selenium.dev/documentation/webdriver/interactions/alerts/")
const title = await page.title();
expect(title).toBe("JavaScript alerts, prompts and confirmations | Selenium");

  page.once('dialog', async (dialog) => {
    await dialog.accept();
    console.log(`Dialog dismissed: ${dialog.message()}`);
  })
  await page.getByText('See a sample prompt',{exact: true}).click();
  await page.close();
})