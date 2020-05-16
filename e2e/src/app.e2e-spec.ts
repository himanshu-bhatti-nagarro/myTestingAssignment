import { AppPage } from "./app.po";
import { browser, logging, by, element } from "protractor";
import { protractor } from "protractor/built/ptor";

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display home page", () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual("*Username:");
  });

  it("should display username input", () => {
    page.navigateTo();
    expect(page.getUsernameInput().getText()).toEqual("");
  });

  it("should display password input", () => {
    page.navigateTo();
    expect(page.getPasswordInput().getText()).toEqual("");
  });

  it("should display login button", () => {
    page.navigateTo();
    expect(page.getLoginButton().getText()).toEqual("Login");
  });

  it("should disable the login button", () => {
    page.navigateTo();
    expect(page.getLoginButton().isEnabled()).toBe(false);
  });

  it("should login for correct credentials", () => {
    page.navigateTo();
    page.getUsernameInput().sendKeys("himanshu");
    page.getPasswordInput().sendKeys("himanshu");
    page.getLoginButton().click();
    expect(page.getDashboardMessage().getText()).toEqual(
      "login successful !!!!!!"
    );
  });

  it("should display the dashboard", () => {
    page.navigateToDashboard();
    expect(page.getDashboardMessage().getText()).toEqual(
      "login successful !!!!!!"
    );
  });

  it("should display username required error", () => {
    page.navigateTo();
    page.getUsernameInput().sendKeys("   ");
    page.getUsernameInput().sendKeys(protractor.Key.TAB);
    expect(page.getUsernameErrorMessage().getText()).toEqual(
      "Username is mandatoy"
    );
  });

  it("should display password required error", () => {
    page.navigateTo();
    page.getPasswordInput().sendKeys("   ");
    page.getPasswordInput().sendKeys(protractor.Key.TAB);
    expect(page.getPasswordErrorMessage().getText()).toEqual(
      "password is mandatory"
    );
  });

  it("should display error for invalid username", () => {
    page.navigateTo();
    page.getUsernameInput().sendKeys("abc");
    page.getPasswordInput().sendKeys("abc");
    page.getLoginButton().click();
    expect(page.getUsernameErrorMessage().getText()).toEqual(
      "Username is invalid"
    );
  });

  it("should display error for invalid password", () => {
    page.navigateTo();
    page.getUsernameInput().sendKeys("himanshu");
    page.getPasswordInput().sendKeys("abc");
    page.getLoginButton().click();
    expect(page.getPasswordErrorMessage().getText()).toEqual(
      "Password is invalid"
    );
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
