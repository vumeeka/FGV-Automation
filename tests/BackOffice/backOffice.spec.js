import { test, expect } from '@playwright/test';
import { backOfficeUserPage } from '../../pageObjects/backOffice.po'
import { LoginPage } from '../../pageObjects/login.po';
import loginjson from '../../fixtures/loginFixture.json'
import backOfficeJson from '../../fixtures/backOfficeFixture.json'

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.verifyEmployeeIdLogin(loginjson.validUser.EmployeeDetails);
    await login.verifyPasswordLogin(loginjson.validUser.passwordDetails);


});
test.describe('BO Creation through UI', () => {

    test('BO User Creation', async ({ page }) => {
        test.setTimeout(1200000)
        const backOffice = new backOfficeUserPage(page)
        await backOffice.VerifyingUpToAdd()
        await backOffice.verifyingPersonalDetails(backOfficeJson.backOfficeUser.employeeIdDetails, backOfficeJson.backOfficeUser.emloyeeNameDetails, backOfficeJson.backOfficeUser.emailDetails, backOfficeJson.backOfficeUser.mobileNumberDetails, backOfficeJson.backOfficeUser.idNumberDetails, backOfficeJson.backOfficeUser.departmentDetails, backOfficeJson.backOfficeUser.designationDetails)
        await backOffice.verifyingIdType()
        await backOffice.verifyingSource()
        await backOffice.verifyingCompany()
        await backOffice.verifyingrole()
        await backOffice.verifyingzone()
        await backOffice.verifyingRegion()
        await backOffice.verifyingEstate()
        await backOffice.verifyingAllowableDetails()
        await backOffice.verifyingAllowableDetailsZone()
        await backOffice.verifyingAllowableDetailsRegion()
        await backOffice.verifyingAllowableDetailsEstate()
        await backOffice.verifyingConfirmation()
        await backOffice.verifyingSubmit()
        await page.waitForTimeout(5000)
        await backOffice.verifingPendingApproval(backOfficeJson.backOfficeUser.employeeIdDetails)
        //await page.waitForTimeout(5000)
        await backOffice.verifyingBackOfficeUserAfterConfirmation(backOfficeJson.backOfficeUser.employeeIdDetails)
        await backOffice.verifyingTableElement(backOfficeJson.backOfficeUser.employeeIdDetails)
        


    })
})    

    
       
    

