import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pageObjects/login.po';
import loginjson from '../../fixtures/loginFixture.json'
import {dashBoardPage} from '../../pageObjects/dashboard.po'


test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.verifyEmployeeIdLogin(loginjson.validUser.EmployeeDetails);
    await login.verifyPasswordLogin(loginjson.validUser.passwordDetails);
    await page.waitForTimeout(20000)


});

test.describe('Verifying the dashboard element and redirection', () => {

    test('Dashboard', async ({ page }) => {
        await test.setTimeout(50000)
        const Dashboard = new dashBoardPage(page)
        
        Dashboard.verifyingAttendanceSummary()

       
    })
})