const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {  return $('#username');}

    get inputPassword () {  return $('#password');}

    get btnSubmit ()     {  return $('button[type="submit"]');}

    get creds ()         {  return $$('em');}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login_action () {
        let credentials = this.creds;
        await this.login(await credentials[0].getText(),await credentials[1].getText());
    }

    async login (username, password) {
        await this.inputUsername.waitForDisplayed({ timeout: 3000 });
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.waitForClickable({ timeout: 3000 });
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {return super.open('login');}
}

module.exports = new LoginPage();
