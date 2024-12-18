const { expect } = require("@playwright/test");

exports.workerPage = class workerPage {
    constructor(page) {
        this.page = page
        this.UserManagement="(//*[@class='MuiListItemText-root jss13'])[2]"
        this.Worker="(//div[contains(text(), 'Worker')])[1]"
        this.add="//span[normalize-space()='Add']"
        this.empId="//input[@name='employee_id']"
        this.empName="//input[@name='name']"
        this.idType="//label[@for='id_type']//following-sibling::div"
        this.idNumber="//input[@name='id_number']"
        this.mobileNumber="//input[@name='mobile_number']"
        this.source="//label[@for='source']//following-sibling::div"
        this.company="//label[@for='company']//following-sibling::div"
        this.zone="//label[@for='zone']//following-sibling::div"
        this.region="//label[@for='region']//following-sibling::div"
        this.estate="//label[@for='estate']//following-sibling::div"
        this.workerGroup="//label[@for='worker_group']//following-sibling::div"
        this.submit="//button[@type='submit']"
        this.CreatedSuccessfully="//div[contains(text(), 'Created Successfully')]"
        this.dropdownElement="//div[@class=' css-1m0ufzk']//div"
        this.pendingApproval="(//div[contains(text(), 'Pending Approval')])[1]"
        this.searchEmpId="//input[@name='employee_id']"
        this.searchId="//input[@name='id_number']"
        this.searchbutton="//span[normalize-space()='Search']"
        this.firstTableElement=".MuiTableBody-root tr:nth-child(2) td:nth-child(2) a"
        
    }

    async verifyingUpToAdd(){
        await this.page.locator(this.UserManagement).click()
        await this.page.locator(this.Worker).click()
        await this.page.locator(this.add).click()

    }

    async verifyingPersonalDetails(employeeIdDetails, emloyeeNameDetails, idNumberDetails, mobileNumberDetails){
        await this.page.locator(this.empId).fill(employeeIdDetails)
        await this.page.locator(this.empName).fill(emloyeeNameDetails)
        await this.page.locator(this.idNumber).fill(idNumberDetails)
        await this.page.locator(this.mobileNumber).fill(mobileNumberDetails)
    }

    async verifyingIdType(){
        await this.page.locator(this.idType).click()
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const options= await this.page.$$(this.dropdownElement)
        for(let option of options){
            const idTypeTitle= await option.textContent()
            console.log(idTypeTitle)
            if(idTypeTitle.includes('IC'))
            {
                await option.click();
                break;
            }

        }
    }

    async verifyingSource(){
        await this.page.locator(this.source).click()
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const options= await this.page.$$(this.dropdownElement)
        for(let option of options){
            const sourceTitle= await option.textContent()
            console.log(sourceTitle)
            if(sourceTitle.includes('ERML'))
            {
                await option.click();
                break;
            }

        }
    }

    async verifyingCompany(){
        await this.page.locator(this.company).click()
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const options= await this.page.$$(this.dropdownElement)
        for(let option of options){
            const sourceTitle= await option.textContent()
            console.log(sourceTitle)
            if(sourceTitle.includes('FGVPM'))
            {
                await option.click();
                break;
            }

        }

    }

    async verifyingZone(){
        await this.page.locator(this.zone).click()
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

    async verifyingRegion(){
        await this.page.locator(this.region).click()
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

    async verifyingEstate(){
        await this.page.locator(this.estate).click()
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

    

    async verifyingWorkerGroup(){
        await this.page.locator(this.workerGroup).click()
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const options= await this.page.$$(this.dropdownElement)
        for(let option of options){
            const WorkerGroupTitle= await option.textContent()
            console.log(WorkerGroupTitle)
            if(WorkerGroupTitle.includes('00012-ADMIN'))
            {
                await option.click();
                break;
            }

        }

    }
    
    async verifyingSubmitButton(){
        await this.page.locator(this.submit).click()
        const check = await this.page.locator(this.CreatedSuccessfully).textContent();
        expect(check).toContain('Created Successfully');
    }


    async verifyingPendingApproval(employeeIdDetails){
        await this.page.locator(this.pendingApproval).click()
        await this.page.locator(this.searchEmpId).fill(employeeIdDetails)
        await this.page.locator(this.searchbutton).click()
        await this.page.waitForTimeout(5000)
        await this.page.locator("(//input[@type='checkbox'])[2]").check()
        await this.page.waitForTimeout(4000)
        await this.page.locator("//span[normalize-space()='Approve']").click()
        await this.page.locator("(//span[@class='MuiButton-label'][normalize-space()='Approve'])[2]").click()
        const check = await this.page.locator("//div[contains(text(), 'Total: 1, Successful: 1, Failed: 0')]").textContent();
        expect(check).toContain('Total: 1, Successful: 1, Failed: 0');

    }
    async verifyingBackOfficeUserAfterConfirmation(employeeIdDetails){
        await this.page.locator(this.Worker).click()
        await this.page.waitForTimeout(5000)
        await this.page.locator(this.searchEmpId).fill(employeeIdDetails)
        await this.page.locator(this.searchbutton).click()


    }
    async verifyingTableElement(employeeIdDetails){
        const check = await this.page.locator(this.firstTableElement).textContent();
        expect(check).toContain(employeeIdDetails);
    }



}

  