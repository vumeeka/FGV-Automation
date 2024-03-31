import { test } from '@playwright/test';
import { BackOfficeLogin } from '../../pageObjects/newLogin.po';
import loginjson from '../../fixtures/loginFixture.json'
import backOfficeJson from '../../fixtures/backOfficeFixture.json'




test('Login with new Bo User', async ({ page, context }) => {
    const loginPage = new BackOfficeLogin(page, context);
    await loginPage.loginWithNewBoUser(backOfficeJson.backOfficeUser.employeeIdDetails,loginjson.dJangoUserandPassword.dJangoUser, loginjson.dJangoUserandPassword.dJangoPassword, loginjson.passwordField.singlePasswordConfirmation, loginjson.passwordField.doublePasswordConfirmation );
    await loginPage.dashboardPage()
});
