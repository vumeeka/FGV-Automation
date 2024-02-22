const { expect } = require("@playwright/test");

exports.workerPage = class workerPage {
    constructor(page) {
        this.page = page
        this.userManagement="(//*[@class='MuiListItemText-root jss13'])[2]"
        this.worker="(//*[@class='MuiListItemText-root'])[2]"
        this.add="(//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary'])[3]"
        this.employeeId="//input[@name='employee_id']"
        this.employeeName="//input[@name='name']"
        this.idType="(//*[@class=' css-1hwfws3'])[1]"
        this.idTypeIc="(//*[@class=' css-1n7v3ny-option'])[1]" 
        this.idNumber="//input[@name='id_number']"
        this.nationality="(//*[@class='css-2b097c-container'])[2]"
        this.nationalityBangladesh="(//*[@class='css-1n7v3ny-option'])[1]"
        this.workerType="(//*[@class='css-2b097c-container'])[3]"
        this.mobileNumber="//input[@name='mobile_number']"
        this.source="(//*[@class=' css-1hwfws3'])[4]"
        this.sourceERML="(//*[@class=' css-1n7v3ny-option'])[1]"
        this.company="(//*[@class=' css-1hwfws3'])[5]"
        this.companyFGVPM="(//*[@class=' css-1n7v3ny-option'])[1]"
        this.zone="(//*[@class=' css-1hwfws3'])[6]"
        this.zoneSabah="(//*[@class=' css-yt9ioa-option'])[6]"
        this.region="(//*[@class=' css-1hwfws3'])[7]"
        this.regionKalabakan="(//*[@class=' css-1n7v3ny-option'])[1]"
        this.estate="(//*[@class=' css-1hwfws3'])[8]"
        this.estateSelatan="(//*[@class=' css-1n7v3ny-option'])[1]"
        this.divison="(//*[@class=' css-1hwfws3'])[9]"
        this.divisonFirst="(//*[@class=' css-1n7v3ny-option'])[1]"
        this.block="(//*[@class=' css-1hwfws3'])[10]"
        this.blockFirst="(//*[@class=' css-1n7v3ny-option'])[1]"
        this.workerGroup="(//*[@class=' css-1hwfws3'])[11]"
        this.workerGroupFirst="(//*[@class=' css-1n7v3ny-option'])[1]"
        this.submit="//button[@type='submit']"
        this.cancel="(//button[@type='button'])[9]"
        this.createdSuccessfully="//*[@class='MuiPaper-root MuiAlert-root MuiAlert-standardSuccess MuiPaper-elevation0']"
        this.pendingApproval="(//*[@class='MuiListItemText-root'])[4]"
        this.employeeIdSearch="//input[@placeholder='Enter Employee ID']"
        this.search="(//button[@type='button'])[10]"

    }

    async verifyingAdd(){
        await this.page.locator(this.userManagement).click()
        await this.page.locator(this.worker).click()
        await this.page.locator(this.add).click()
        
    }

    async verifyWorkerForm(employeeIdDetails,emloyeeNameDetails,idNumberDetails, mobileNumberDetails){
        await this.page.locator(this.employeeId).fill(employeeIdDetails)
        await this.page.locator(this.employeeName).fill(emloyeeNameDetails)
        await this.page.locator(this.idType).click() 
        //await this.page.Timeout(5000);
        await this.page.locator(this.idTypeIc).click()
        await this.page.locator(this.idNumber).fill(idNumberDetails)
        await this.page.locator(this.mobileNumber).fill(mobileNumberDetails)
        await this.page.locator(this.source).click()
        await this.page.locator(this.sourceERML).click()
        await this.page.locator(this.company).click()
        await this.page.locator(this.companyFGVPM).click()
        await this.page.locator(this.zone).click()
        await this.page.locator(this.zoneSabah).click()
        await this.page.locator(this.region).click()
        await this.page.locator(this.regionKalabakan).click()
        await this.page.locator(this.estate).click()
        await this.page.locator(this.estateSelatan).click()
        await this.page.locator(this.divison).click()
        await this.page.locator(this.divisonFirst).click()
        await this.page.locator(this.block).click()
        await this.page.locator(this.blockFirst).click()
        await this.page.locator(this.workerGroup).click()
        await this.page.locator(this.workerGroupFirst).click()
    }
    async verifySubmitButton(){
        await this.page.locator(this.submit).click()

    }

    async verifyCancelButton(){
        await this.page.locator(this.cancel).click()
    }
    async verifyCreatedSuccessfully(){
        const check = await this.page.locator(this.createdSuccessfully).textContent();
        expect(check).toContain('Created Successfully');
    }

    async verifyingPendingApproval(employeeIdDetails){
        await this.page.locator(this.userManagement).click()
        await this.page.locator(this.pendingApproval).click()
        await this.page.locator(this.employeeIdSearch).fill(employeeIdDetails)
        await this.page.locator(this.search).click()

    }
    async verifyingTableElement(){
        
    }
}