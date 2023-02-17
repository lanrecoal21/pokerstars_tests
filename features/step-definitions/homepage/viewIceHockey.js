import  {Given, When, Then} from "@cucumber/cucumber";
import LoginPage from "../../pageobjects/login.page.js";


Given(/^I am on the home screen$/, async function () {
    await LoginPage.open()
     browser.fullscreenWindow()
    await browser.pause(2000)

});
When(/^I select ice hockey tab$/, async function () {
    await LoginPage.acceptCookiesBtn.click()
    await browser.pause(1000)
    await LoginPage.iceHockeyTab.scrollIntoView()
    await LoginPage.iceHockeyTab.click()

});
Then(/^I should see ice hockey betting details$/, async function () {
    await expect(LoginPage.sportDetailheader).toHaveText('Ice Hockey')
    await LoginPage.popularSportBettingDetails.isDisplayed()


});