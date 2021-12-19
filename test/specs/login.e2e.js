const TestData = require('../testdata/login.json');
const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

describe('My Login application', () => {
    beforeEach(async () => {
        await LoginPage.open();
    })
    
    afterEach(async () => {
        await HomePage.logout();
    })

    function doTest({ description, username, password, expected }) {
        it(description, async () => {
            await LoginPage.login(username, password);
            switch (expected) {
                case 'LOGIN_SUCCESS':
                    await expect(HomePage.userDropdownMenu).toBeExisting();
                    await expect(HomePage.userDropdownMenu).toHaveTextContaining(username);
                    break;
                case 'LOGIN_FAIL':
                    await expect(HomePage.userDropdownMenu).not.toBeExisting();
                    break;
                default:
                    break;
            }
        });
    }

    TestData.forEach(doTest);
});
