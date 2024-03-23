import { test, expect } from '@playwright/test';
import { attendancePage } from '../../pageObjects/attendance.po'
import { LoginPage } from '../../pageObjects/login.po';
import loginjson from '../../fixtures/loginFixture.json'

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.verifyEmployeeIdLogin(loginjson.validUser.EmployeeDetails);
    await login.verifyPasswordLogin(loginjson.validUser.passwordDetails);


});
test.describe('Attendance for 1 day and 30 days excel message', () => {

    test('Attendace for 1 day', async ({ page }) => {
        //test.setTimeout(30000)
        const attendance = new attendancePage(page)
        await attendance.verifyingAttendanceReportGeneration()
        await attendance.verifyingSearchButton()
        await attendance.verifyingPopMessage()
    })

    test('Attendance for 1 month', async({page})=>{
        const attendance = new attendancePage(page)
        await attendance.verifyingAttendanceReportGeneration()
        await attendance.verifyingAttendanceReportByMonth()
        await attendance.verifyingYearFilter()
        await attendance.verifyingCompanyFilter()
        await attendance.verifyingZoneFilter()
        await attendance.verifyingRegionFilter()
        await attendance.verifyingEstateFilter()
        await attendance.verifyingSearchButton()
        await page.waitForTimeout(5000)
        await attendance.verifyingExport()
    })

    
})