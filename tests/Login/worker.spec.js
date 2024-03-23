import { test, expect } from '@playwright/test';
import { workerPage } from '../../pageObjects/worker.po'
import workerjson from '../../fixtures/workerFixture.json'
import loginjson from '../../fixtures/loginFixture.json'
import { LoginPage } from '../../pageObjects/login.po';

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.verifyEmployeeIdLogin(loginjson.validUser.EmployeeDetails);
    await login.verifyPasswordLogin(loginjson.validUser.passwordDetails);


});

test.describe('Worker Creation through UI', () => {

    test('Worker User Creation', async ({ page }) => {
        test.setTimeout(120000)
        const worker = new workerPage(page)
        await worker.verifyingUpToAdd()
        await worker.verifyingPersonalDetails(workerjson.workerUser.employeeIdDetails, workerjson.workerUser.emloyeeNameDetails,workerjson.workerUser.idNumberDetails,workerjson.workerUser.mobileNumberDetails)
        await worker.verifyingIdType()
        await worker.verifyingSource()
        await worker.verifyingCompany()
        await worker.verifyingZone()
        await worker.verifyingRegion()
        await worker.verifyingEstate()
        await worker.verifyingWorkerGroup()
        await worker.verifyingSubmitButton()
        await page.waitForTimeout(5000)
        await worker.verifyingPendingApproval(workerjson.workerUser.employeeIdDetails)
        await worker.verifyingBackOfficeUserAfterConfirmation(workerjson.workerUser.employeeIdDetails)
        await worker.verifyingTableElement(workerjson.workerUser.employeeIdDetails)


       
    })
})




