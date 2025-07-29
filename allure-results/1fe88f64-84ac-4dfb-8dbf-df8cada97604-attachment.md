# Test info

- Name: Record at Cursor
- Location: D:\Bakka Playwright\tests\Chapter01\TC03_RecordatCursor.spec.ts:5:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first()

    at D:\Bakka Playwright\tests\Chapter01\TC03_RecordatCursor.spec.ts:9:80
```

# Test source

```ts
   1 | //import playwright module
   2 | import {test, expect} from '@playwright/test'
   3 |
   4 | //Write a test
   5 | test ('Record at Cursor', async({page})=>{
   6 | await page.goto("https://www.google.com/");
   7 | await page.getByRole('combobox', { name: 'Search' }).fill("Playwright by testers talk");
   8 | await page.getByRole('combobox', { name: 'Search' }).press('Enter');
>  9 | await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click();
     |                                                                                ^ Error: locator.click: Target page, context or browser has been closed
  10 | await expect(page).toHaveTitle("Playwright by Testers Talk☑️ - YouTube");
  11 | await expect(page.getByRole('link', { name: 'Playwright Tutorial Full' })).toBeVisible();
  12 | await expect(page.locator('ytd-playlist-video-list-renderer')).toContainText('Playwright Tutorial Full Course 2024 | Playwright Testing Tutorial');
  13 | await expect(page.locator('ytd-playlist-video-list-renderer')).toContainText('Playwright API Testing Tutorial Crash Course 2024');
  14 | await expect(page.getByLabel('Playwright Tutorial Full').locator('#video-title')).toContainText('Playwright Tutorial Full Course 2024 | Playwright Testing Tutorial');
  15 | await expect(page.getByLabel('Playwright API Testing Tutorial Crash Course 2024 1 hour, 59 minutes').locator('#video-title')).toContainText('Playwright API Testing Tutorial Crash Course 2024');
  16 | })
```