import  {Given, When, Then} from "@cucumber/cucumber";
import LoginPage from "../../pageobjects/login.page.js";

Given(/^I navigate to the app home page$/, async function () {
    await LoginPage.open()
    browser.fullscreenWindow()
    await browser.pause(2000)

});
When(/^I select basketball tab$/, async function () {
    await LoginPage.acceptCookiesBtn.click()
    await LoginPage.basketBallTab.click()

});
Then(/^I should see basketball betting details$/, async function () {
    await expect(LoginPage.sportDetailheader).toHaveText('Basketball')
    await LoginPage.popularSportBettingDetails.isDisplayed()
});