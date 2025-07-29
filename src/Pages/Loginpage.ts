exports.LoginPage = class LoginPage {

  constructor(page){


  this.page = page;
  this.usernameField = page.locator('[id="user-name"]');
  this.passwordField = page.locator('[id="password"]')
  this.loginButton = page.click('[id="login-button"]');


}

async login(){
  await this.usernameField.fill(process.env.E2E_Username || '');
  await this.passwordField.fill(process.env.E2E_Password || '');
  await this.loginButton.click();
  await this.page.waitForURL("https://www.saucedemo.com/v1/inventory.html");
}
}
