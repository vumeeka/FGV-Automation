const { expect } = require("@playwright/test");

exports.workerGroupPage = class workerGroupPage {
    constructor(page) {
        this.page =page
        this.configuration="(//div[contains(text(), 'Configurations')])[1]"
        this.customField="(//div[contains(text(), 'Custom Field')])[1]"
        this.add="//span[normalize-space()='Add']"
        this.code="//input[@name='group_id']"
        this.name="//input[@name='name']"
        this.zone="//label[@for='zone']//following-sibling::div"
        this.region="//label[@for='region']//following-sibling::div"
        this.estate="//label[@for='estate']//following-sibling::div"
        this.submit="//button[@type='submit']"
        this.dropdownElement="//div[@class=' css-1m0ufzk']//div"

    }

    async verifyingConfiguration(){
        await this.page.locator(this.configuration).click()
        await this.page.locator(this.customField).click()
        await this.page.locator(this.add).click()
    }

    async verifyingCodeAndName(codeDetails, nameDetails){
        await this.page.locator(this.code).fill(codeDetails)
        await this.page.locator(this.name).fill(nameDetails)
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

    async verifyingSubmit(){
        await this.page.locator(this.submit).click()
    }

}

    