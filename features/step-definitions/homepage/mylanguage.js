import  {Given, When, Then} from "@cucumber/cucumber";
import LoginPage from "../../pageobjects/login.page.js";



Given(/^I am on the poker homepage/, async function () {
    await LoginPage.open()
    await browser.pause(2000)


});
When(/^I click the language dropdown$/, async function () {
    await LoginPage.acceptCookiesBtn.click()
    await LoginPage.langDropdown.click()
    await browser.pause(2000)

});
When(/^I select my preferred language$/, async function () {
    await LoginPage.finnshBtn.click()
    await browser.pause(2000)


});
Then(/^the home page language should be in my preferred language$/, async function () {
    await expect(browser).toHaveUrl('https://www.pokerstars.eu/fi/sports/')
});