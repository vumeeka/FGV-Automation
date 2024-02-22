import { test, expect } from '@playwright/test';
import {workerPage} from '../../pageObjects/worker.po'
import workerjson from '../../fixtures/workerFixture.json'
import loginjson from '../../fixtures/loginFixture.json'
import { LoginPage } from '../../pageObjects/login.po';

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
        await login.gotoLoginPage();
        await login.verifyEmployeeIdLogin(loginjson.validUser.EmployeeDetails);
        await login.verifyPasswordLogin(loginjson.validUser.passwordDetails);
    
    
});

test.describe('Worker Creation through UI', ()=>{

    test('Worker User Creation', async({page}) => {
        const worker = new workerPage(page)
        await worker.verifyingAdd()
        await worker.verifyWorkerForm(workerjson.workerUser.employeeIdDetails, workerjson.workerUser.emloyeeNameDetails, workerjson.workerUser.idNumberDetails, workerjson.workerUser.mobileNumberDetails)
        await worker.verifySubmitButton()
        await worker.verifyCreatedSuccessfully()
        await worker.verifyingPendingApproval(workerjson.workerUser.employeeIdDetails)

    });
});