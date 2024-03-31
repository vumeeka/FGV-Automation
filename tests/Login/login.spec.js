import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pageObjects/login.po';
import loginjson from '../../fixtures/loginFixture.json'
import backOfficeJson from '../../fixtures/backOfficeFixture.json'
const playwright = require('playwright');
import { TIMEOUT } from 'dns';
test.describe('valid Login through UI', () => {
    test('login with the valid credential', async ({ page }) => {
        const login = new LoginPage(page);
        await login.gotoLoginPage();
        await login.verifyEmployeeIdLogin(loginjson.validUser.EmployeeDetails);
        await login.verifyPasswordLogin(loginjson.validUser.passwordDetails);
        await login.dashboardPage();
    });
});

test.describe('Invalid login through UI', () => {
    test('Login with invalid Username', async ({ page }) => {
        const login = new LoginPage(page);
        await login.gotoLoginPage()
        await login.verifyEmployeeIdLogin(loginjson.invalidUser.EmployeeDetails)
        await login.verifyUserNotMatched()
    });


    test('Login with the valid Username but invalid password ', async ({ page }) => {
        const login = new LoginPage(page);
        await login.gotoLoginPage()
        await login.verifyEmployeeIdLogin(loginjson.validUser.EmployeeDetails)
        await login.verifyPasswordLogin(loginjson.invalidUser.passwordDetails)
        await login.verifyPasswordNotMatched()

    })

    
});
