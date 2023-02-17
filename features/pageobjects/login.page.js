

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get acceptCookiesBtn () {
        return $('#onetrust-accept-btn-handler');
    }

    get langDropdown () {
        return $('._fc584dd');
    }

    get finnshBtn () {
        return $('#root > ul > li:nth-child(4) > a');
    }

    get homePageLoginBtn () {
        return $('button[text="Kirjaudu sisään"]');
    }

    get iceHockeyTab () {
        return $('._7523bf9');
    }

    get soccerTab () {
        return $('#root > div._b7a7fe8 > div._fe5ae1c > div._18a5872 > div > nav > ul:nth-child(2) > li:nth-child(2) > a > span');
    }

    get tennisTab () {
        return $('#root > div._b7a7fe8 > div._fe5ae1c > div._18a5872 > div > nav > ul:nth-child(2) > li:nth-child(3) > a > span');
    }

    get basketBallTab () {
        return $('#root > div._b7a7fe8 > div._fe5ae1c > div._18a5872 > div > nav > ul:nth-child(2) > li:nth-child(4) > a > span');
    }

    get sportDetailheader () {
        return $('._fd374a8');
    }

    get popularSportBettingDetails () {
        return $('#root > div._b7a7fe8 > div._fe5ae1c > div._2738afe > div:nth-child(3) > div');
    }

    get iceHockeyBettingDetails2 () {
        return $('._card_wl4rl_1');
    }

    get homePageLoginBtnText () {
        return $("Kirjaudu sisään");
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
