// Basic LoginPage class for Playwright tests
export default class Loginpage {
  async login(page, username, password) {
    await page.goto('https://www.saucedemo.com/v1/index.html');
    await page.locator('[id="user-name"]').fill(username);
    await page.locator('[id="password"]').fill(password);
    await page.click('[id="login-button"]');
  }
}
