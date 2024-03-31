const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
    constructor(page) {
        //For BO 
        this.page = page
        this.EmployeeId = "//input[@name='employee_id']"
        this.EmployeeIdLogin = "//button[@type='submit']"
        this.password = "//input[@name='password']"
        this.passwordLogin = "//button[@type='submit']"
        this.menicon = "//span[contains(text(), 'BM')]//following::span[2]"
        this.Logout = "//ul[@class='MuiList-root MuiList-padding']/li[text()='Logout']"
        this.Passwordnotmathched = this.page.locator("//*[@class='MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorError MuiTypography-alignCenter']");
        this.Usernamenotmatched = this.page.locator("//*[@class='MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorError MuiTypography-alignCenter']");
        //For Django
        this.userName="//input[@name='username']"
        this.passwordD="#id_password"
        this.loginButton="//input[@value='Log in']"

    }

    async gotoLoginPage() {
        await this.page.goto("https://uatewalletfgv.digitalmta.com/");
    }


    async verifyEmployeeIdLogin(EmployeeDetails) {
        await this.page.locator(this.EmployeeId).fill(EmployeeDetails)
        await this.page.locator(this.EmployeeIdLogin).click()
    }

    async verifyPasswordLogin(passwordDetails) {
        await this.page.locator(this.password).fill(passwordDetails)
        await this.page.locator(this.passwordLogin).click()

    }

    async dashboardPage() {
        await expect(this.page).toHaveTitle("FGV");
    }

    async verifyUserNotMatched() {
        await expect(this.Usernamenotmatched).toContainText("User does not exists. Please Contact Admin.")

    }


    async verifyPasswordNotMatched() {
        await expect(this.Passwordnotmathched).toContainText("PASSWORD NOT MATCH. PLEASE RETRY")

    }
    
   
}

    