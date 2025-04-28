const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = 'input[data-qa="login-email"]';
    this.passwordInput = 'input[data-qa="login-password"]';
    this.loginButton = 'button[data-qa="login-button"]';
    this.logoutButton = 'a[href="/logout"]';
  }

  async login(email, password) {
    await this.fill(this.emailInput, email);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async verifyLoginSuccess() {
    await this.waitForSelector(this.logoutButton);
    return await this.isVisible(this.logoutButton);
  }
}

module.exports = LoginPage; 