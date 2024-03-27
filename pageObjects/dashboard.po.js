const { expect } = require("@playwright/test");

exports.dashBoardPage = class dashBoardPage {
    constructor(page) {
        this.page = page
        this.attendanceDate = "//label[@for='date']//following-sibling::div"
        this.attendanceSearch = "(//span[contains(text(), 'Search')])[1]"
        this.Present = "//p[normalize-space()='Present']"
        this.pendingClockIn = "//p[normalize-space()='Pending Clock In']"
        this.absent = "//p[normalize-space()='Absent']"
        this.pendingClockOut = "//p[normalize-space()='Pending Clock Out']"
       
        this.datepickerButton="(//input[@id='date']//following::span)[1]";
        //label[@for='date']//following-sibling::div//div//button[@type='button']
        
    }

    async verifyingAttendanceSummary() {
        const Year = 2024;
        const MonthDateDay = "Mon, Mar 19";

        // Wait for the page load completion
        //await this.page.waitForLoadState('load');

        // Click the date picker button after the page has loaded
        //await this.page.waitForSelector(this.datepickerButton);
       // await this.page.waitForTimeout(1000)
        await this.page.locator(this.datepickerButton).click();
        //await this.page.locator(this.attendanceSearch).click();

        // // Click on the button to open the date picker
        // await datePickerButton.click();

        // while (true) {
        //     const currentYear = await this.page.locator("(//span[@class='MuiButton-label'])[9]").textContent()
        //     const currentMonthDateDay = await this.page.locator("(//span[@class='MuiButton-label'])[10]").textContent()
        //     if (currentYear == Year && currentMonthDateDay == MonthDateDay) {
        //         break;
        //     }
        //     await this.page.locator("(//span[@class='MuiIconButton-label'])[8]").click()
        // }

        // await this.page.locator(3000)
    }
}