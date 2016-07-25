var helper      = require('./../module/helper.js');
var cst         = require('./../module/utils.js');

var constant = new cst.Constant();
var self;

var User = function (user, screenshots) {
    this.email = process.env[user.email];
    this.username = process.env[user.username];
    this.password = process.env[user.password];
    this.screenshots = screenshots;
    self = this;
};

User.prototype.login = function (callback) {
    self = this;
    browser.wait(function() {
        return browser.driver.isElementPresent(by.xpath(constant.XPATH_LOGIN_FORM));
    }, constant.DEFAULT_TIMEOUT).then(
        function () {
            var btnLogin = helper.findElement(by.xpath(constant.XPATH_REGISTER_NEW_USER));
            btnLogin.click().then(function () {
                console.log('Click on the link \' I need an account\'');
            });
            register(function () {
                    checkRegister(function () {
                            signIn(callback)
                    })
                });
        }, function() {
            callback();
        });
};

var checkRegister = function (callback) {
    browser.wait(function() {
        return browser.driver.isElementPresent(by.xpath(constant.XPATH_REGISTER_SUCCESS));
    }, constant.DEFAULT_TIMEOUT).then(function () {
        helper.sleep(1000);
        var btnConfirm = helper.findElement(by.xpath(constant.XPATH_DIALOG_OK_BTN));
        btnConfirm.click();
        callback();
    }, function () {
        callback();
    });
};

var register = function (callback) {
    browser.wait(function() {
        return browser.driver.isElementPresent(by.xpath(constant.XPATH_REGISTER_BTN));
    }, constant.DEFAULT_TIMEOUT).then(function () {

        helper.sleep(1000);
        console.log('Input username: ' + self.username);
        var username = helper.findElement(by.xpath('//*[@name="username" and @placeholder="Username"]'));
        username.sendKeys(self.username);

        helper.sleep(1000);
        console.log('Input email: ' + self.email);
        var email = helper.findElement(by.name('email'));
        email.sendKeys(self.email);

        helper.sleep(1000);
        console.log('Input display-name:' + self.username);
        var displayName = helper.findElement(by.name('display-name'));
        displayName.sendKeys(self.username);

        helper.sleep(1000);
        console.log('Input first name: First Name');
        var firstName = helper.findElement(by.name('first-name'));
        firstName.sendKeys('First Name');

        helper.sleep(1000);
        console.log('Input last-name: Last Name');
        var lastName = helper.findElement(by.name('last-name'));
        lastName.sendKeys('Last Name');

        helper.sleep(1000);
        console.log('Input password: ' + self.password);
        var password = helper.findElement(by.xpath('//div[contains(@class,"form-group col-sm-9")]//*[@name="password" and @placeholder="Password"]'));
        password.sendKeys(self.password);

        helper.sleep(1000);
        console.log('Input password-confirm: ' + self.password);
        var passwordConfirm = helper.findElement(by.name('password-confirm'));
        passwordConfirm.sendKeys(self.password);

        helper.sleep(2000);

        var btnRegister = helper.findElement(by.xpath(constant.XPATH_REGISTER_BTN));
        btnRegister.click();
        callback();
    }, function () {
        callback();
    });
};

var signIn = function (callback) {
    browser.wait(function() {
        return browser.driver.isElementPresent(by.xpath(constant.XPATH_LOGIN_FORM));
    }, constant.DEFAULT_TIMEOUT).then(
        function () {
            helper.sleep(1000);
            console.log('Input username: ' + self.username);
            var username = helper.findElement(by.name('username'));
            username.sendKeys(self.username);

            console.log('Input password: ' + self.password);
            var password = helper.findElement(by.name('password'));
            password.sendKeys(self.password);

            var btnSignIN = helper.findElement(by.xpath(constant.XPATH_SIGN_IN_BTN));
            btnSignIN.click();

            callback();
        }, function () {
            callback();
        });
};

module.exports.User = User;