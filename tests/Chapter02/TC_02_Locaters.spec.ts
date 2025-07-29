import {test,expect} from '@playwright/test'

test('Locaters', async({page})=>{
await page.goto('https://www.att.com/');

// identify by Role --use link button etc
// await page.getByRole('link', {name: 'Go to the internet page'}).click();

//identify by label say aria-label='Check out phones and devices'
// await page.getByLabel('Check out phones and devices', {exact: true}).click();

// identify by placeholder
// await page.getByPlaceholder("I'm looking for...").fill('abcd')

//identify by xpath
// await page.locator("//input[@id='z1_search_field']").fill('tirupati');

//identify by css selectors
// await page.locator("input[id='z1_search_field']").fill('tirupati darshan');

//GetByTitle
await page.getByTitle('')
})