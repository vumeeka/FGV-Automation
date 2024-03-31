// login.po.js
const { expect } = require("@playwright/test");
exports.BackOfficeLogin = class BackOfficeLogin {
    
    constructor(page, context) {
        this.page = page;
        this.context = context;
        this.userIdInput = "//input[@name='employee_id']";
        this.submitButton = "//button[@type='submit']";
        this.usernameInput = "//input[@name='username']";
        this.passwordInput = "#id_password";
        this.loginButton = "//input[@value='Log in']";
        this.tokenInput = "//input[@name='otp']";
        this.passwordField = "//input[@name='password']";
        this.confirmPasswordField = "//input[@name='password1']";
        this.submitButtonSpan = "//span[contains(text(), 'Submit')]";
        this.table = "#changelist";
    }

    async loginWithNewBoUser(employeeIdDetails,dJangoUser,dJangoPassword,singlePasswordConfirmation,doublePasswordConfirmation) {
        await this.page.goto('https://uatewalletfgv.digitalmta.com/');
        await this.page.locator(this.userIdInput).fill(employeeIdDetails);
        await this.page.locator(this.submitButton).click();

        const newTab = await this.context.newPage();
        await newTab.goto('https://uatewalletfgvapi.digitalmta.com/admin/user/userotp/');
        await newTab.locator(this.usernameInput).fill(dJangoUser);
        await newTab.locator(this.passwordInput).fill(dJangoPassword);
        await newTab.locator(this.loginButton).click();
        await newTab.waitForSelector(this.table, { timeout: 5000 });

        const rows = await newTab.locator('tbody tr');
        const matchedRow = rows.filter({
            has: newTab.locator('td'),
            hasText: employeeIdDetails
        });
        const tokenCell = await matchedRow.locator('td:nth-child(3)');
        const token = await tokenCell.textContent();

        await this.page.goto('https://uatewalletfgv.digitalmta.com/login-otp');
        const otpInput = await this.page.locator(this.tokenInput);
        await otpInput.fill(token);
        await this.page.locator("button[type='submit']").click();
        await this.page.locator(this.passwordField).fill(singlePasswordConfirmation);
        await this.page.locator(this.confirmPasswordField).fill(doublePasswordConfirmation);
        await this.page.locator(this.submitButtonSpan).click();
    }
    async dashboardPage() {
        await expect(this.page).toHaveTitle("FGV");
    }
}


