
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('check that clicking the Draw button displays the div with id="choices"', async () => {
    const draw = await driver.findElement(By.id('choices'))
    const displayed = await draw.isDisplayed()
    expect(displayed).toBe(true)
})

test('check that clicking "Add to Duo" button displays the div with the id ="player duo"', async () => {
    const add = await driver.findElement(By.id("player-duo"))
    const displayed = await add.isDisplayed()
    expect(displayed).toBe(true)
})