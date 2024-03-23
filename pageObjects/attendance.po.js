const { expect } = require("@playwright/test");
exports.attendancePage = class attendancePage {
    constructor(page) {
        this.page =page
        this.attendance="(//div[contains(text(), 'Attendance Management')])[1]"
        this.attendanceRecord="(//div[contains(text(), 'Attendance Record')])[1]"
        this.search="(//span[normalize-space()='Search'])[1]"
        this.redExcel="//img[@alt='excel_icon']"
        this.excelMessage="//div[contains(text(), 'Please wait you will receive the attendance report in your email shortly.')]"
        this.attendanceReportByMonth="//span[contains(text(), 'Attendance report by month')]"
        this.monthFilter="//label[@for='selected_month']//following-sibling::div"
        this.yearFilter="//label[@for='selected_year']//following-sibling::div"
        this.companyFilter="//label[@for='selected_company']//following-sibling::div"
        this.zoneFilter="//label[@for='zone']//following-sibling::div"
        this.regionFilter="//label[@for='region']//following-sibling::div"
        this.estateFilter="//label[@for='estate']//following-sibling::div"
        this.dropdownElement="//div[@class=' css-1m0ufzk']//div"
    }

    async verifyingAttendanceReportGeneration(){
        await this.page.locator(this.attendance).click()
        await this.page.locator(this.attendanceRecord).click()

    }
    async verifyingSearchButton(){
        await this.page.locator(this.search).click()

    }
   
    async verifyingPopMessage(){
        await new Promise((resolve) => setTimeout(resolve, 10000));
        await this.page.locator(this.redExcel).click()
        const check = await this.page.locator(this.excelMessage).textContent();
        expect(check).toContain('Please wait you will receive the attendance report in your email shortly.');
    }

    async verifyingAttendanceReportByMonth(){
        await this.page.locator(this.attendanceReportByMonth).click()
        await this.page.locator(this.monthFilter).click()
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const options= await this.page.$$(this.dropdownElement)
        for(let option of options){
            const MonthTitle= await option.textContent()
            console.log(MonthTitle)
            if(MonthTitle.includes('01'))
            {
                await option.click();
                break;
            }

        }

    }

    async verifyingYearFilter(){

        await this.page.locator(this.yearFilter).click()
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const options= await this.page.$$(this.dropdownElement)
        for(let option of options){
            const MonthTitle= await option.textContent()
            console.log(MonthTitle)
            if(MonthTitle.includes('2024'))
            {
                await option.click();
                break;
            }

        }

    }

    async verifyingCompanyFilter(){

        await this.page.locator(this.companyFilter).click()
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const options= await this.page.$$(this.dropdownElement)
        for(let option of options){
            const companyTitle= await option.textContent()
            console.log(companyTitle)
            if(companyTitle.includes('FGVPM'))
            {
                await option.click();
                break;
            }

        }

    }
    async verifyingZoneFilter(){

        await this.page.locator(this.zoneFilter).click()
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const options= await this.page.$$(this.dropdownElement)
        for(let option of options){
            const zoneTitle= await option.textContent()
            console.log(zoneTitle)
            if(zoneTitle.includes('ZONE NORTH PENINSULAR'))
            {
                await option.click();
                break;
            }

        }
    }
    async verifyingRegionFilter(){

        await this.page.locator(this.regionFilter).click()
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const options= await this.page.$$(this.dropdownElement)
        for(let option of options){
            const regionTitle= await option.textContent()
            console.log(regionTitle)
            if(regionTitle.includes('WILAYAH GUA MUSANG'))
            {
                await option.click();
                break;
            }

        }
    }

    async verifyingEstateFilter(){

        await this.page.locator(this.estateFilter).click()
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const options= await this.page.$$(this.dropdownElement)
        for(let option of options){
            const estateTitle= await option.textContent()
            console.log(estateTitle)
            if(estateTitle.includes('ARING 02'))
            {
                await option.click();
                break;
            }

        }
    }
   
}
