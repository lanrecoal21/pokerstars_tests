import  {Given, When, Then} from "@cucumber/cucumber";
import LoginPage from "../../pageobjects/login.page.js";


Given(/^I navigate to the application home page$/, async function () {
    await LoginPage.open()
    browser.fullscreenWindow()
    await browser.pause(2000)

});
When(/^I select tennis tab$/, async function () {
    await LoginPage.acceptCookiesBtn.click()
    await LoginPage.tennisTab.click()

});
Then(/^I should see tennis betting details$/, async function () {
    await expect(LoginPage.sportDetailheader).toHaveText('Tennis')
    await LoginPage.popularSportBettingDetails.isDisplayed()

});