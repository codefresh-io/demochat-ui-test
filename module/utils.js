var Constant = function () {
    this.DEFAULT_TIMEOUT = 10000;
    this.XPATH_LOGIN_FORM = '//div[@class="lcb-login-boxes"]';
    this.XPATH_REGISTER_NEW_USER = '//div[@class="links pull-left"]//a';
    this.XPATH_REGISTER_BTN = '//button[contains(text(),"Register")]';
    this.XPATH_REGISTER_SUCCESS = '//div[contains(@class,"sweet-alert")]//*[text()="Success"]';
    this.XPATH_DIALOG_OK_BTN = '//button[text()="OK"]';
    this.XPATH_SIGN_IN_BTN = '//button[@type="submit" and contains(text(),"Sign in")]';
    this.XPATH_SIGN_IN_SUCCESS = '//div[contains(@class, "lcb-rooms-browser")]';
};

module.exports.Constant = Constant;