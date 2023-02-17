import  {Given, When, Then} from "@cucumber/cucumber";
import LoginPage from "../../pageobjects/login.page.js";


Given(/^I navigate to the home page$/, async function () {
    await LoginPage.open()
    browser.fullscreenWindow()
    await browser.pause(2000)

});
When(/^I select soccer tab$/, async function () {
    await LoginPage.acceptCookiesBtn.click()
    await LoginPage.soccerTab.click()


});
Then(/^I should see soccer betting details$/, async function () {
    await expect(LoginPage.sportDetailheader).toHaveText('Soccer')
    await LoginPage.popularSportBettingDetails.isDisplayed()

});