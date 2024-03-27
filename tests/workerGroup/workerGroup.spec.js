import { test, expect } from '@playwright/test';
import { workerGroupPage } from '../../pageObjects/workerGroup.po'
import { LoginPage } from '../../pageObjects/login.po';
import loginjson from '../../fixtures/loginFixture.json'
import WorkerGroupJson from '../../fixtures/workerGroupFixture.json'

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.verifyEmployeeIdLogin(loginjson.validUser.EmployeeDetails);
    await login.verifyPasswordLogin(loginjson.validUser.passwordDetails);


});

test.describe('Worker Group Creation through UI ', () => {

    test('Worker Group Creation ', async ({ page }) => {
        test.setTimeout(300000)
        const workerGroup = new workerGroupPage(page)
        await workerGroup.verifyingConfiguration()
        await workerGroup.verifyingCodeAndName(WorkerGroupJson.workerGroup.CodeDetails, WorkerGroupJson.workerGroup.nameDetails)
        await workerGroup.verifyingZone()
        await workerGroup.verifyingRegion()
        await workerGroup.verifyingEstate()
        await workerGroup.verifyingSubmit()
    })
})