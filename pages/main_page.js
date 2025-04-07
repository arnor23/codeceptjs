const { I } = inject();

class MainPage {
    constructor() {
        this.locator = {
            signIn: 'a > img[src="Images/design/pagelogin.png"]',
            email: '#ctl00_MainContent_LoginControl1_TextBoxEmail',
            password: '#ctl00_MainContent_LoginControl1_TextBoxPassword',
            loginButton: '#ctl00_MainContent_LoginControl1_ButtonLogin'
        };
    }

    get signIn() {
        return this.locator.signIn;
    }

    clickSignIn() {
        I.click(this.signIn);
        I.wait(2);
    }
}

// 👇 Exportación compatible con CommonJS (para usar con require)
module.exports = new MainPage();
