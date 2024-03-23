const { expect } = require("@playwright/test");

exports.backOfficeUserPage = class backOfficeUserPage {
    constructor(page) {
        this.page =page
        this.userManagement="(//*[@class='MuiListItemText-root jss13'])[2]"
        this.backOfficeUser="(//div[contains(text(),'Back Office')])[1]"
        this.add="//span[normalize-space()='Add']"
        this.employeeId="//input[@name='employee_id']"
        this.employeeName="//input[@name='name']"
        this.email="//input[@name='email']"
        this.mobileNumber="//input[@name='mobile_number']"
        this.officeNumber="//label[@for='office_number']//following-sibling::div"
        this.idType="//label[@for='id_type']//following-sibling::div"
        this.idNumber="//input[@name='id_number']"
        this.designation="//input[@name='designation']"
        this.department="//input[@name='department']"
        this.source="//label[@for='source']//following-sibling::div"
        this.company="//label[@for='company']//following-sibling::div"
        this.role="//label[@for='role']//following-sibling::div"
        this.zone="//label[@for='zone']//following-sibling::div"
        this.region="//label[@for='region']//following-sibling::div"
        this.estate="//label[@for='estate']//following-sibling::div"
        this.workerGroup="//label[@for='worker_groups']//following-sibling::div"
        this.addNew="//span[contains(text(), 'Add New')]"
        this.allZone="//label[@for='zones']//following-sibling::div"
        this.allRegion="//label[@for='regions']//following-sibling::div"
        this.allEstate="//label[@for='estates']//following-sibling::div"
        this.allConfirm="//span[contains(text(), 'Confirm')]"
        this.allConfirmMessage="//div[contains(text(), 'Record  Added')]"
        this.submit="//button[@type='submit']"
        this.successMessage="//div[contains(text(), 'User has been created')]"
        this.pendingApproval="(//div[contains(text(),'Pending Approval')])[1]"
        this.searchEmpId="//input[@placeholder='Enter Employee ID']"
        this.searchId="//input[@name='id_number']"
        this.searchbutton="//span[contains(text(), 'Search')]"
        this.firstTableElement=".MuiTableBody-root tr:nth-child(2) td:nth-child(2) a"
        this.bOApproved="(//span[contains(text(), 'Approve')])[3]"
        this.approvedUser="//span[contains(text(), 'Approve User')]"
        this.dropdownElement="//div[@class=' css-1m0ufzk']//div"
        



    }


    async VerifyingUpToAdd(){
        await this.page.locator(this.userManagement).click()
        await this.page.locator(this.backOfficeUser).click()
        await this.page.locator(this.add).click()
    }

    async verifyingPersonalDetails(employeeIdDetails,emloyeeNameDetails,emailDetails,mobileNumberDetails,idNumberDetails,departmentDetails,designationDetails ){
        await this.page.locator(this.employeeId).fill(employeeIdDetails)
        await this.page.locator(this.employeeName).fill(emloyeeNameDetails)
        await this.page.locator(this.email).fill(emailDetails)
        await this.page.locator(this.mobileNumber).fill(mobileNumberDetails)
        await this.page.locator(this.idNumber).fill(idNumberDetails)
        await this.page.locator(this.department).fill(departmentDetails)
        await this.page.locator(this.designation).fill(designationDetails)
        
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
    async verifyingrole(){
        await this.page.locator(this.role).click()
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const options= await this.page.$$(this.dropdownElement)
        for(let option of options){
            const roleTitle= await option.textContent()
            console.log(roleTitle)
            if(roleTitle.includes('IT'))
            {
                await option.click();
                break;
            }

        }

    }

    async verifyingzone(){
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

    

    async verifyingAllowableDetails(){
        await this.page.locator(this.addNew).click()
    }
    
    async verifyingAllowableDetailsZone(){
        await this.page.locator(this.allZone).click()
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const options= await this.page.$$(this.dropdownElement)
        for(let option of options){
            const allZonesTitle= await option.textContent()
            console.log(allZonesTitle)
            if(allZonesTitle.includes('ASIAN PLANTATIONS LIMITED'))
            {
                await option.click();
                break;
            }

        }
    }

    async verifyingAllowableDetailsRegion(){
        await this.page.locator(this.allRegion).click()
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const options= await this.page.$$(this.dropdownElement)
        for(let option of options){
            const allRegionTitle= await option.textContent()
            console.log(allRegionTitle)
            if(allRegionTitle.includes('ASIAN PLANTATION LIMITED'))
            {
                await option.click();
                break;
            }

        }
    }

    async verifyingAllowableDetailsEstate(){
        await this.page.locator(this.allEstate).click()
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const options= await this.page.$$(this.dropdownElement)
        for(let option of options){
            const allEstateTitle= await option.textContent()
            console.log(allEstateTitle)
            if(allEstateTitle.includes('BJ CORPORATION SDN BHD'))
            {
                await option.click();
                break;
            }

        }
    }

    async verifyingConfirmation(){
        await this.page.locator(this.allConfirm).click()
        const check = await this.page.locator(this.allConfirmMessage).textContent();
        expect(check).toContain('Record  Added')
        

    }
    async verifyingSubmit(){
        await this.page.locator(this.submit).click()
        const check = await this.page.locator(this.successMessage).textContent();
        expect(check).toContain('User has been created');

    }
   
    async verifingPendingApproval(employeeIdDetails){
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
        await this.page.locator(this.backOfficeUser).click()
        await this.page.locator(this.searchEmpId).fill(employeeIdDetails)
        await this.page.locator(this.searchbutton).click()


    }

    async verifyingTableElement(employeeIdDetails){
        const check = await this.page.locator(this.firstTableElement).textContent();
        expect(check).toContain(employeeIdDetails);
    }




   

   




}