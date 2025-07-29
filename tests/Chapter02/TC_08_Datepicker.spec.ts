//import playwright module
import {test, expect} from '@playwright/test'

//Write a test to identify and handle datepicker
test ('Mouse Actions', async({page})=>{
	await page.goto("https://jqueryui.com/datepicker/")

	//Harcoded datepicker
	// const iframe = page.frameLocator('[class="demo-frame"]')
	const iframe = page.frameLocator('[class="demo-frame"]')
	// await iframe.locator('//*[@id="datepicker"] ').fill('10/10/2023')
	await iframe.locator('//*[@id="datepicker"] ').press('Enter')

	// //Dynamic datepicker
	// You can add dynamic datepicker handling here if needed
  await iframe.locator('//*[@id="ui-datepicker-div"]/table/tbody/tr[1]/td[4]').click()
  
})