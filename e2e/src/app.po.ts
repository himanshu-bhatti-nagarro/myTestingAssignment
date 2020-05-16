import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get("/");
  }

  navigateToDashboard() {
    return browser.get("/dashboard");
  }

  getTitleText() {
    return element(by.css("app-login label")).getText() as Promise<string>;
  }

  getUsernameInput() {
    return element(by.css('[id="username"]'));
  }

  getPasswordInput() {
    return element(by.css('[id="password"]'));
  }

  getLoginButton() {
    return element(by.css('[id="loginButton"]'));
  }

  getDashboardMessage() {
    return element(by.css("app-dashboard p"));
  }

  getUsernameErrorMessage() {
    return element(by.css('[id="usernameError"]'));
  }

  getPasswordErrorMessage() {
    return element(by.css('[id="passwordError"]'));
  }
}
