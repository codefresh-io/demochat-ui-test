/**
 * Created by nikolai on 25.7.16.
 */
var helper      = require('./../module/helper.js');
var user        = require('./../model/user.js');
var cst         = require('./../module/utils.js');

describe('Login to Demochat', function() {
    var constant, currentUser, screenshots;
    var reportFolder = 'target/';
    var users = [
        {
            "email": "TEST_EMAIL",
            "username": "TEST_ACCOUNT",
            "password": "TEST_PASSWORD"
        }
    ];

    beforeEach(function() {
        constant = new cst.Constant();
        browser.driver.ignoreSynchronization = true;
        browser.driver.get(process.env.URL);
    });

    it('Sign in to demochat', function() {
        screenshots = reportFolder + "270417/";
        currentUser = new user.User(users[0], screenshots);
        currentUser.login(function () {
            browser.wait(function() {
                return browser.driver.isElementPresent(by.xpath(constant.XPATH_SIGN_IN_SUCCESS));
            }, constant.DEFAULT_TIMEOUT).then(function () {
                helper.sleep(1000);
                helper.takeScreenshot('login_success.png', screenshots);
            }, function () {
                helper.sleep(1000);
                helper.takeScreenshot('login_failed.png', screenshots);

            });
        });
    });
});