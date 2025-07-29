//import playwright module
import {test, expect} from '@playwright/test'

//Write a test to handling Iframes such as dragg & drop
test ('Handling drag-drop', async({page})=>{
await page.goto("https://jqueryui.com/droppable/")

const iFrame=page.frameLocator('[class="demo-frame"]')
//drag element  & drop element
const dragelement=iFrame.locator('[id="draggable"]')
const dropelement=iFrame.locator('[id="droppable"]')

await dragelement.dragTo(dropelement);

})