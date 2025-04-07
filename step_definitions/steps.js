const { I } = inject();
const mongoInstance = require("../helpers/mongoSingleton");
const {ok} = require("assert");
const main_page = require("../pages/main_page");

// Add in your custom step files

Given('I have a defined step', () => {
  // TODO: replace with your own step
    I.amOnPage('/');
    I.wait(1);
});
When(/^I do something$/, async function () {

});
Then(/^I expect a result$/, function () {

});

When(/^I try to login in main page$/, function () {
    main_page.clickSignIn();
    I.wait(2);
    I.click(main_page.signIn);
    I.fillField(main_page.locator.email, 'test@testing65.com');
    I.fillField(main_page.locator.password, '12345');
    I.click(main_page.locator.loginButton);
    I.wait(4);
});