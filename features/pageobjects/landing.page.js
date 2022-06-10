
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */
    get options () {    return $$('li a');}

    get title () {      return $('h1');}

    get subtitle () {   return $('h2');}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async selectOption (option) {
        const menu = await this.options;
        let selectedMenu;
        let num = 0;

        /*
        * Creating the array lenght in this way because with the array.lenght
        * and array.foreach it was throwing errors on the async way
        */        
        menu.forEach(element => {num++;});
        /**
         * Identifying the menu option
         */
        for (let i = 0;i < num; i++){
            let text = await menu[i].getText();
            if (text == option) {
                selectedMenu = menu[i];
            }
        }

        await selectedMenu.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {return super.open("");}
}

module.exports = new LandingPage();