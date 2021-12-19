

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get userDropdownMenu() {
        return $('span#Header_LoginViewHeader_LoginName1');
    }

    get logoutButton() {
      return $('a#Header_LoginViewHeader_LoginStatus1');
    }

    async logout() {
      await browser.execute(() => {
        __doPostBack('ctl00$Header$LoginViewHeader$LoginStatus1$ctl00','');
      });
    }

    open() {
      super.open('');
    }
}

module.exports = new HomePage();
