//Rule: classname should be ts file name with first letter as caps

import { AuroraLmt } from "../../common/Data/AuroraLmt";
import { CommonComponent } from "./../commonKeywords/CommonComponent";
import { GlobalVariables } from "../../common/dataCreation/GlobalVariables";
import { auroraContractDetailsElements } from "../Repository/Contract Details/AuroraContractDetailsElements";
import { contractDetailsElements } from "./contractDetailsElements";
import { logger } from "../../common/Logger/logger";
/**
 * The class is to perform contract details action
 *
 * @author somnath.k
 *
 *
*/
import { z } from "actionbot-wrapper/z";
const { I } = inject();
export class ContractDetailsActions {
    /******************************************************Sub Services Starts******************************************************/

    /**
    * To enter email id
    * @author somnath.k
    */
    static async enterEmailId(username: string) {
        await z.fillField(await AuroraLmt.getElement(contractDetailsElements.EMAIL_ADDRESS_TEXTBOX), username);
    }

    /**
    * To enter email password
    * @author somnath.k
    */
    static async enterPassword(password: string) {
        await z.fillField(await AuroraLmt.getElement(contractDetailsElements.PASSWORD_TEXTBOX), password);
    }

    /**
    * To click on login button
    * @author somnath.k
    */
    static async clickonLoginBttn() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.LOGIN_BUTTON));
    }

    /**
    * To click on clm product
    * @author somnath.k
    */
    static async clickonCLMProduct() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.SELECT_CLM_PRODUCT));
    }

    /**
    * To select clm product
    * @author somnath.k
    */
    static async selectClmProduct() {
        let flag = true;
        let count = 0;
        while (flag == true) {
            if ((await CommonComponent.getHtmlElementData(await AuroraLmt.getElement(contractDetailsElements.SELECT_CLM_PRODUCT)) == null) || (await CommonComponent.getHtmlElementData(await AuroraLmt.getElement(contractDetailsElements.SELECT_CLM_PRODUCT)) == undefined)) {
                count++;
                await z.scrollIntoView(await AuroraLmt.getElement(contractDetailsElements.CLM_Visible_Element));
            } else {
                flag = false;
            }
            if (count == 15) {
                flag = false;
            }
        }
        await z.moveCursorTo(await AuroraLmt.getElement(contractDetailsElements.CLM_Visible_Element));
        await z.click(await AuroraLmt.getElement(contractDetailsElements.SELECT_CLM_PRODUCT));
    }


    static async clickOnSideNavigationBarLink(link:string){
        let sideNavigationLinkXpath=await AuroraLmt.getElement(contractDetailsElements.DYN_SIDE_NAVIGATION_BAR_LINK).toString();
        if(sideNavigationLinkXpath.includes("TEMP_VAL")){
            sideNavigationLinkXpath=sideNavigationLinkXpath.replace("TEMP_VAL",link);
        }
        await z.click(sideNavigationLinkXpath);
    }

    /**
    * To click on repository tab
    * @author somnath.k
    */
    static async clickonRepositoryTab() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.MANAGE_CONTRACT_TAB));
        await z.click(await AuroraLmt.getElement(contractDetailsElements.SELECT_REPOSITORY_TAB));
    }

    /**
    * To click on contract status dropdown
    * @author somnath.k
    */
    static async clickonRepoContractStatusDropdown() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.REPO_STATUS_DROPDOWN));
    }

    /**
    * To click on first contract through link
    * @author somnath.k
    */
    static async clickonFirstContractlink() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.FIRST_CONTRACT_LINK));
    }

    /**
    * To click on contract through link having amendment attached
    * @author Datta
    */
   static async clickOnContractLinkHavingAmendment() {
    try{
        await z.click(await AuroraLmt.getElement(contractDetailsElements.CONTRACT_LINK_HAVING_AMENDMENT));
    }catch(error){
        //write logic to
        await z.click(await AuroraLmt.getElement(contractDetailsElements.FIRST_CONTRACT_LINK_HAVING_AMENDMENT));
    }
   }

    /**
    * To click on view in aurora button
    * @author somnath.k
    */
    static async clickonRedirectToAuroraBttn() {
        await z.wait(2);
        await z.click(await AuroraLmt.getElement(contractDetailsElements.REDIRECT_TO_AURORA_LINK));
        await z.wait(2);
    }

    static async clickOnLinkedContractsOptionMenu() {

            console.log("clicking on Linked Agreements");
            await z.wait(30);
            try{
                await z.click(await AuroraLmt.getElement(contractDetailsElements.LINKED_CONTRACT_MENU));
                console.log("clicked on Linked Agreements");
            }catch(error){
                console.error("unable to click on Linked Agreements menu option");
            }
            }

    /**
    * To click on add to watchlist button
    * @author somnath.k
    */
    static async clickAddtoWatchlistBttn() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.ADD_TO_WATCHLIST));
    }

    /**
    * To click on home tab
    * @author somnath.k
    */
    static async clickonHomeTab() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.HOME_TAB));
    }

    /**
    * To click on dashboard sub tab
    * @author somnath.k
    */
    static async clickonCommonDashboardSubTab() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.COMMON_DASHBOARD));
    }

    /**
    * To on search icon in my watchlist widget
    * @author somnath.k
    */
    static async clickOnMywatchlistSearchIcon() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.MYWATCHLIST_SEARCH_ICON));
    }

    /**
    * To click on first contract in my watchlist widget
    * @author somnath.k
    */
    static async clickonMywatchlistFirstContractno(contractNumber: string) {
        let contractLinkXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(contractNumber, await AuroraLmt.getElement(contractDetailsElements.DNY_MYWATCHLIST_FIRST_CONTRACT_NUMBER));
        await z.click(contractLinkXpath);
    }

    /**
    * To click on alerts and reminders tab
    * @author somnath.k
    */
    static async clickonAlertsandRemindersTab() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.ALERTS_AND_REMINDER_TAB));
    }

    /**
    * To click on alerts expand icon
    * @author somnath.k
    */
    static async clickonAlertsExpandIcon() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.ALERTS_EXPAND_ICON));
    }

    /**
    * To click on alert contract number link
    * @author somnath.k
    */
    static async clickonAlertContractNoLink() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.ALERT_CONTRACT_NUMBER_LINK));
    }

    /**
    * To click on upload contract button
    * @author somnath.k
    */
    static async clickonUploadContractBttn() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.UPLOAD_CONTRACT_BTTN));
    }

    /**
    * To click on contine button in create contract page
    * @author somnath.k
    */
    static async clickonCreateContractContinueBttn() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.CONTINUE_BTTN));
    }

    /**
    * To click on expand or collapse all icon
    * @author somnath.k
    */
    static async clickOnExpandorCollapseAllIcon() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.EXPAND_OR_COLLAPSE_ALL));
    }

    /**
    * To click on expand or collapse document panel icon
    * @author somnath.k
    */
    static async clickOnExpandorCollapseDocumentPanelIcon() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.EXPAND_OR_COLLAPSE_DOCUMENT_PANEL));
    }

    /**
    * To click on document tab
    * @author somnath.k
    */
    static async clickOnDocumentTab() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.DOCUMENT_MENU));
    }

    /**
   * To click on contract details tab
   * @author somnath.k
   */
    static async clickOnRepoContractDetailsTab() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.CONTRACT_DETAILS_TAB));
    }

    /**
    * To click on close contract icon
    * @author somnath.k
    */
    static async clickOnRepoContractCloseIcon() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.CLOSE_REPO_CONTRACT));
    }

    /**
    * To click on save contract button
    * @author somnath.k
    */
    static async clickonSaveContractButton() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.SAVE_CONTRACT_BTTN));
    }

    /**
    * To click on repository sub tab
    * @author somnath.k
    */
    static async clickonRepositorySubTab() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.SELECT_REPOSITORY_TAB));
    }

    /**
    * To click on manage contract tab
    * @author somnath.k
    */
    static async clickonManageContractTab() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.MANAGE_CONTRACT_TAB));
    }

    /**
    * To click on setup tab
    * @author sowmyashree
    */
    static async clickonSetupTab() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.SETUP_TAB));
    }

    /**
    * To click on product configuration
    * @author sowmyashree
    */
    static async clickOnProdConfig() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.SETUP_PRODUCT_CONFIG_TAB));
    }

    /**
    * To click on application
    * @author sowmyashree
    */
    static async clickOnAppSettings() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.APPLICATION_SETTINGS));
    }

    /**
    * To click is cp mandatory check box
    * @author sowmyashree
    */
    static async clickOnIsCpMandatoryCheckBox() {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.IS_CP_MANDTRY_CHECK_BOX));
    }

    /******************************************************Sub Services Ends******************************************************/


    /******************************************************Services Starts******************************************************/

    /**
    * To login to clm application
    * @param {string} username
    * @param {string} password
    * @author somnath.k
    */
    static async loginToCLM(username: string, password: string) {
        await z.amOnPage(await AuroraLmt.getData("url"));
        await this.enterEmailId(username);
        await this.enterPassword(password);
        await this.clickonLoginBttn();
        // await z.amOnPage("https://ftssoha.ultria.com/sso/login");
        // await this.enterEmailId("admin.lm@ultria.com");
        // await this.enterPassword("Ultria!2021");
        // await this.clickonLoginBttn();
    }

    /**
    * To search contract based on given index
    * @param {number} statusIndex
    * @author somnath.k
    */
    static async searchAndViewContractBasedonStatus(statusIndex: number) {
        await CommonComponent.gridDropdownSelectionBasedonValue(await AuroraLmt.getElement(contractDetailsElements.REPO_STATUS_DROPDOWN), await AuroraLmt.getElement(contractDetailsElements.CONTRACT_STATUS_OPTION_LIST), statusIndex);
    }

    /**
    * To view contracts based on given index for Hierarchy status
    * @param {number} statusIndex
    * @author Datta
    */
    static async viewContractBasedOnHierarchyStatus(status: string) {
        let dropDownXpath = await AuroraLmt.getElement(contractDetailsElements.HIERARCHY_STATUS_DROPDOWN);
        await CommonComponent.selectValueFromGridDropDown(dropDownXpath,status);
}

/**
    * To view contracts based on field and status value
    * @param
    * @author Datta
    */
   static async filterContracts(attributrType: string, label: string, status: string) {
       if(attributrType=="select"){
        let dropDownXpath = await AuroraLmt.getElement(contractDetailsElements.DYN_CONTACT_HEADER_LABEL);
        dropDownXpath=dropDownXpath.replace("TEMP_VAL1",attributrType);
        dropDownXpath=dropDownXpath.replace("TEMP_VAL2",label);
        await CommonComponent.selectValueFromGridDropDown(dropDownXpath,status);
       }else{
        let dropDownXpath = await AuroraLmt.getElement(contractDetailsElements.DYN_CONTACT_HEADER_LABEL);
        dropDownXpath=dropDownXpath.replace("TEMP_VAL1",attributrType);
        dropDownXpath=dropDownXpath.replace("TEMP_VAL2",label);
        await z.fillField(dropDownXpath,status);
        await z.pressKey('Enter');
       }
}



    /**
    * To verify aurora link in all the contract profile menus
    * @author somnath.k
    */
    static async verifyAuroraLinkinEnabledLeftMenu() {
        await z.waitForVisible(await AuroraLmt.getElement(contractDetailsElements.CONTRACT_DETAILS_MENU));
        let noofMenus = await CommonComponent.grabNumberElements(await AuroraLmt.getElement(contractDetailsElements.CONTRACT_LEFT_MENU_LIST));
        for (let i = 2; i <= noofMenus; i++) {
            let menuXpath = await AuroraLmt.getElement(contractDetailsElements.DYN_PARTICULAR_LEFT_MENU);
            if (menuXpath.includes("TempCount")) {
                menuXpath = menuXpath.replace("TempCount", "" + i);
            } else {
                logger.info("left menu xpath does not contains TempCount keyword");
            }
            if ((await CommonComponent.getHtmlElementData(menuXpath) != null) || (await CommonComponent.getHtmlElementData(menuXpath) != undefined)) {
                await CommonComponent.clickUsingJsByXpath(menuXpath);
                await z.waitForElement(await AuroraLmt.getElement(contractDetailsElements.REDIRECT_TO_AURORA_LINK));
                await z.seeElement(await AuroraLmt.getElement(contractDetailsElements.REDIRECT_TO_AURORA_LINK));
            } else {
                logger.info("Menu is not enabled so skipped to click");
            }

        }
    }

    /**
    * To select aurora link based on random menu selection
    * @author somnath.k
    */
    static async selectAuroraLinkBasedonRandomMenu() {
        await z.waitForVisible(await AuroraLmt.getElement(contractDetailsElements.CONTRACT_DETAILS_MENU));
        let noofMenus = await CommonComponent.grabNumberElements(await AuroraLmt.getElement(contractDetailsElements.CONTRACT_LEFT_MENU_LIST));
        for (let i = 1; i <= noofMenus; i++) {
            let menuXpath = await AuroraLmt.getElement(contractDetailsElements.DYN_PARTICULAR_LEFT_MENU);
            let randomCount = await CommonComponent.getRandomNumber(noofMenus);
            if (randomCount == 0 || randomCount == 1 || randomCount == 2) {
                randomCount = 2;
            }
            if (menuXpath.includes("TempCount")) {
                menuXpath = menuXpath.replace("TempCount", "" + randomCount);
            } else {
                logger.info("left menu xpath does not contains TempCount keyword");
            }
            if ((await CommonComponent.getHtmlElementData(menuXpath) != null) || (await CommonComponent.getHtmlElementData(menuXpath) != undefined)) {
                await z.scrollIntoView(menuXpath);
                await z.click(menuXpath);
                await z.waitForElement(await AuroraLmt.getElement(contractDetailsElements.REDIRECT_TO_AURORA_LINK));
                await z.click(await AuroraLmt.getElement(contractDetailsElements.REDIRECT_TO_AURORA_LINK));
                break;
            } else {
                continue;
            }
        }
    }

    /**
    * To get contract that is added in the my watchlist
    * @param {string} contractPrefixText
    * @return {string} contractNumber
    * @author somnath.k
    */
    static async retrieveAddedWatchlistContract(contractPrefixText: string) {
        let contractNumber: String;
        await z.waitForVisible(await AuroraLmt.getElement(contractDetailsElements.CONTRACT_DETAILS_MENU));
        await z.waitForVisible(await AuroraLmt.getElement(contractDetailsElements.SUMMARY_FIRST_MENU));
        let contractNumberXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(contractPrefixText, await AuroraLmt.getElement(contractDetailsElements.DNY_OLD_CONTRACT_NUMBER));
        let addToWatchlistXpath = await AuroraLmt.getElement(contractDetailsElements.WATCHLIST_ICON);
        if ((await CommonComponent.getHtmlElementData(addToWatchlistXpath) != null) || ((await CommonComponent.getHtmlElementData(addToWatchlistXpath) != undefined))) {
            await this.clickAddtoWatchlistBttn();
            contractNumber = await z.grabTextFrom(contractNumberXpath);
        } else {
            contractNumber = await z.grabTextFrom(contractNumberXpath);
        }
        return contractNumber;
    }

    /**
    * To get contract number
    * @param {string} contractPrefixText
    * @param {string} contractNumberXpath
    * @return {string} contractnumber
    * @author somnath.k
    */
    static async getContractNumber(contractPrefixText: string, contractNumberXpath: string) {
        let contractNoXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(contractPrefixText, contractNumberXpath);
        return await z.grabTextFrom(contractNoXpath);
    }

    /**
    * To navigate to dashboard page
    * @author somnath.k
    */
    static async navigateToDashboard() {
        await this.clickonHomeTab();
        await this.clickonCommonDashboardSubTab();
    }

    /**
    * To search contract in my watchlist widget
    * @author somnath.k
    */
    static async searchContractinMywatchlist(contractNumber: string) {
        await z.waitForVisible(await AuroraLmt.getElement(contractDetailsElements.MYWATCHLIST_WIDGET));
        if ((await CommonComponent.getHtmlElementData(await AuroraLmt.getElement(contractDetailsElements.MYWATCHLIST_WIDGET)) != null) || (await CommonComponent.getHtmlElementData(await AuroraLmt.getElement(contractDetailsElements.MYWATCHLIST_WIDGET)) != undefined)) {
            await z.scrollIntoView(await AuroraLmt.getElement(contractDetailsElements.MYWATCHLIST_WIDGET));
            await z.fillField(await AuroraLmt.getElement(contractDetailsElements.MYWATCHLIST_SEARCHBOX), contractNumber);
            await this.clickOnMywatchlistSearchIcon();
        } else {
            logger.info("My watchlist widget is not accessible in the dashboard page")
        }

    }

    /**
    * To navigate to alerts and reminder tab
    * @author somnath.k
    */
    static async navigateToAlertsAndReminderTab() {
        await this.clickonHomeTab();
        await this.clickonAlertsandRemindersTab();
    }

    /**
    * To select first contract from alert section
    * @author somnath.k
    */
    static async selectFirstContractFromAlertSection() {
        await this.clickonAlertsExpandIcon();
        await this.clickonAlertContractNoLink();
    }

    /**
    * To generate random date format
    * @author somnath.k
    */
    static async dateGenerator(fieldId) {
        await this.monthSelect();
        await this.yearSelect(fieldId);
        await this.daySelect();
    }

    /**
    * To select random month
    * @author somnath.k
    */
    static async monthSelect() {
        try {
            let monthlist = await CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt.getElement(contractDetailsElements.MONTH_OPTION_LIST));
            let index = await CommonComponent.getRandomNumber(monthlist.length + 1) as number;
            let dropdownVal = await z.grabTextFrom(monthlist[index] as string);
            await z.selectOption(await AuroraLmt.getElement(contractDetailsElements.MONTH_DROPDOWN), dropdownVal);
        } catch (error) {
            logger.info("Failed to select random month");
        }
    }

    /**
    * To select random year
    * @param {string} fieldId
    * @author somnath.k
    */
    static async yearSelect(fieldId: string) {
        try {
            let yearList = await CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt.getElement(contractDetailsElements.YEAR_OPTION_LIST));
            let values: String[] = [];
            let pos: number = 0;
            for (let yearXpath of yearList) {
                let yearText = await z.grabTextFrom(yearXpath as string);
                values.push(yearText);
            }
            await z.click(await AuroraLmt.getElement(contractDetailsElements.YEAR_DROPDOWN));
            let currentYear = await z.grabTextFrom(await AuroraLmt.getElement(contractDetailsElements.CURRENT_YEAR));
            let position: number = values.indexOf(currentYear) as number;
            let randomNo: number = await CommonComponent.getRandomNumber(2) as number;
            let index = randomNo + pos + 8; // +1 added to ensure, selected year is not the current year.
            if (fieldId == "Contract_Effective_Date") {
                let currentYearVal = await z.grabTextFrom(await AuroraLmt.getElement(contractDetailsElements.CURRENT_YEAR));
                await z.selectOption(await AuroraLmt.getElement(contractDetailsElements.YEAR_DROPDOWN), currentYearVal);
            }
            else {
                let yearval = await z.grabTextFrom(yearList[index] as string);
                await z.selectOption(await AuroraLmt.getElement(contractDetailsElements.YEAR_DROPDOWN), yearval);
            }
        } catch (error) {
            logger.info("Failed to select random year");
        }
    }

    /**
    * To select random day
    * @author somnath.k
    */
     static async daySelect() {
        let dateList = await CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt.getElement(contractDetailsElements.DAY_OPTION_LIST));
        let values: String[] = [];
        let pos: number = 0;
        let count = 0;
        for (let dateXpath of dateList) {
            count++;
            if (count > 24) {
                break;
            }else{
            let yearText = await z.grabTextFrom(dateXpath as string);
            values.push(yearText);
            }
        }
        let index = await CommonComponent.getRandomNumber(values.length) as number;
        index = index + 1;
        if (index > values.length) {
            index = values.length;
        }
        let flag = false;
        do {
            for (let i = index; i <= values.length; i++) {
                if (values[i] != null) {
                    let particularDayXpath = await CommonComponent.retrieveParticularElementXpathBasedonString("" + i, await AuroraLmt.getElement(contractDetailsElements.DNY_SELECT_DAY));
                    await z.click(particularDayXpath);
                    flag = true;
                    break;
                } else {
                    flag = false;
                }
            }
        } while (flag == false);
    }

    /**
    * To fill many to many atl fields
    * @author somnath.k
    */
    static async fillManyToManyAtl() {
        try {
            let atlList = await CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt.getElement(contractDetailsElements.MANY_TO_MANY_POPUP_LIST));
            let i: number = await CommonComponent.getRandomNumber(atlList.length) as number;
            if (atlList != null) {
                await z.click(atlList[i] as string);
                await z.click(await AuroraLmt.getElement(contractDetailsElements.BU_DONE_BTTN));
            } else {
                await z.click(await AuroraLmt.getElement(contractDetailsElements.BU_CANCEL_BTTN));
            }
        } catch (error) {
            logger.info("User could not fill many-to-many ATL field");
        }
    }

    /**
    * To fill business unit information
    * @author somnath.k
    */
    static async fillBuisnessUnit() {
        await z.scrollIntoView(await AuroraLmt.getElement(contractDetailsElements.BUSINESS_UNIT_BTTN));
        await z.click(await AuroraLmt.getElement(contractDetailsElements.BUSINESS_UNIT_BTTN));
        let buListTable = await AuroraLmt.getElement(contractDetailsElements.MANY_TO_MANY_POPUP_LIST);
        if (await CommonComponent.isElementPresent(buListTable)) {
            let buList = await CommonComponent.retrieveElementXpathBasedonIndex(buListTable);
            let i: number = await CommonComponent.getRandomNumber(buList.length) as number;
            await z.click(buList[i] as string);
            await z.click(await AuroraLmt.getElement(contractDetailsElements.BU_DONE_BTTN));
        } else {
            await z.click(await AuroraLmt.getElement(contractDetailsElements.BU_CANCEL_BTTN));
        }
    }

    /**
    * To save contract after filled contract details information
    * @param {string} contractPrefixText
    * @author somnath.k
    */
    static async saveContract(contractPrefixText: string/*,dropdownElements:string[],indexCount:number,metadataInputCount:string*/) {
        let count = 0;
        await z.click(await AuroraLmt.getElement(contractDetailsElements.SAVE_CONTRACT_BTTN));
        while (true) {
            let newContractNumber = await CommonComponent.retrieveParticularElementXpathBasedonString(contractPrefixText, await AuroraLmt.getElement(contractDetailsElements.DNY_OLD_CONTRACT_NUMBER));
            if ((await CommonComponent.getHtmlElementData(newContractNumber) != null) || (await CommonComponent.getHtmlElementData(newContractNumber) != undefined)) {
                GlobalVariables.contractNumber = "";
                GlobalVariables.contractNumber = await z.grabTextFrom(newContractNumber);
                break;
            } else {
                if (await CommonComponent.isEnabledByXpath(await AuroraLmt.getElement(contractDetailsElements.MANDATORY_ERROR_LABEL))) {
                    let mandatoryLabelXpath = await AuroraLmt.getElement(contractDetailsElements.MANDATORY_ERROR_LABEL);
                    let id = await z.grabAttributeFrom(mandatoryLabelXpath, "for");
                    let emptyField = "//*[@id='" + id + "' and contains(@class,'inputMaterial')]";
                    let fieldType = await z.grabAttributeFrom(emptyField, "fieldtype")
                    let fieldId = await z.grabAttributeFrom(emptyField, "id");
                    let fieldValue = "";
                    //await this.addValuesModify(fieldType, fieldId, fieldValue,dropdownElements,indexCount,metadataInputCount);
                    await z.click(await AuroraLmt.getElement(contractDetailsElements.SAVE_CONTRACT_BTTN));
                    count++;
                } else {
                    count++;
                }
            }
            if (count == 7) {
                break;
            }
        }
    }

    /**
    * To fill entire contract details information and click on save button
    * @param {string} contractPrefixText
    * @author somnath.k
    */
    static async fillContractDetailsInfo(contractPrefixText: string) {
        logger.info("In process of filling Contract Detail page ");
        try {
            let headerList = await CommonComponent.retrieveUITextListBasedonIndex(await AuroraLmt.getElement(contractDetailsElements.HEADER_LIST), await AuroraLmt.getElement(contractDetailsElements.DYN_PARTICULAR_HEADER_COUNT));
            logger.info("Number of Headers : " + headerList.length);
            let particularHeader: string;
            if (GlobalVariables.subHeaderWithmetadataandValue.size > 0) {
                GlobalVariables.subHeaderWithmetadataandValue.clear();
                logger.info("Removed previous contract details data from map");
            }
            for (let i = 0; i < headerList.length; i++) {
                logger.info("Header number " + (i + 1) + " : " + headerList[i]);
                let headerName = headerList[i];
                particularHeader = await AuroraLmt.getElement(contractDetailsElements.DYN_PARTICULAR_HEADER);
                particularHeader = particularHeader.replace("TempValue", "" + headerName);
                await z.scrollIntoView(particularHeader);
                await z.click(particularHeader);
                let subHeaderList = await CommonComponent.retrieveUITextListBasedonString(headerName as string, await AuroraLmt.getElement(contractDetailsElements.DYN_SUBHEADER_LIST));
                logger.info("Number of Sub Headers : " + subHeaderList.length);
                for (let j = 0; j < subHeaderList.length; j++) {
                    //for (let j = 0; j < 1; j++) {
                    let subHeaderName = subHeaderList[j] as string;
                    if (subHeaderName == "Basic details") {
                        subHeaderName = subHeaderName.replace("details", "Details");
                    }
                    logger.info("SubHeader number " + (j + 1) + " : " + subHeaderName);
                    try {
                        /**
                         * Input contract meta field values
                         */
                        await this.fillDetailsSubheaderLevel(subHeaderName);
                        /**
                        * Input Contract ATL meta field values
                        */
                        await this.fillContractAtlDetails(subHeaderName);
                    } catch (error) {
                        logger.info("No Fields identified under - " + subHeaderName);
                    }
                }
            }
        } catch (error) {
            logger.info("Failed to fill all the fields in the contract details page");
        }
        await this.saveContract(contractPrefixText);
        logger.info("****Contract Details data in map******", GlobalVariables.subHeaderWithmetadataandValue);
    }

    /**
    * To fill subheader level fields details
    * @param {string} subHeaderName
    * @author somnath.k
    */
    static async fillDetailsSubheaderLevel(subHeaderName: string) {
        let labelWebelement = await CommonComponent.retrieveElementXpathBasedonString(subHeaderName, await AuroraLmt.getElement(contractDetailsElements.DYN_METADATA_LABELS));
        let dropDownElements = await CommonComponent.retrieveElementXpathBasedonString(subHeaderName, await AuroraLmt.getElement(contractDetailsElements.DYN_DROPDOWN_ELEMENTS));
        let metadataInputCount = await CommonComponent.retrieveElementXpathBasedonString(subHeaderName, await AuroraLmt.getElement(contractDetailsElements.DYN_METADATA_INPUT));
        logger.info("Number of Fields : " + metadataInputCount.length);

        let count = 0;
        for (let k = 0; k < metadataInputCount.length; k++) {
            //for (let k = 0; k < 13; k++) {
            let metadataPresentonUI = await CommonComponent.isEnabledByXpath(metadataInputCount[k] as string);
            let metadataDisabled = (await CommonComponent.verifyFieldisDisabledOnUI(metadataInputCount[k] as string));
            let metadataDisabledCond2 = (await CommonComponent.verifyFieldisDisabledOnUI(metadataInputCount[k] as string) == undefined);
            let metadataHidden = (await CommonComponent.verifyFieldisHidden(metadataInputCount[k] as string));
            // let display1=await CommonComponent.verifyFieldisDisplayNone(metadataInputCount[k] + "/ancestor::td" as string);
            // let display2=await CommonComponent.verifyFieldHasParticularStyleAttribute(metadataInputCount[k] + "/ancestor::td" as string);
            let metadataDisplayNone = ((await CommonComponent.verifyFieldisDisplayNone(metadataInputCount[k] + "/ancestor::td" as string)) && (await CommonComponent.verifyFieldHasParticularStyleAttribute(metadataInputCount[k] + "/ancestor::td" as string)));
            let flag111 = (metadataPresentonUI == true && (metadataDisabled != true || metadataDisabled == null || metadataDisabled == undefined) && metadataHidden != true && metadataDisplayNone != true);
            logger.info("xpath ", metadataInputCount[k] as string);
            logger.info("values of each flag" + metadataPresentonUI + "   " + metadataDisabled + "  " + metadataHidden + "  " + metadataDisplayNone);
            if ((metadataPresentonUI == true && (metadataDisabled != true || metadataDisabled == null || metadataDisabled == undefined) && metadataHidden != true && metadataDisplayNone != true)) {
                if (await CommonComponent.verifyFieldHasParticularAttribute(metadataInputCount[k] as string) == true) {
                    let fieldType = await z.grabAttributeFrom(metadataInputCount[k] as string, "fieldtype");
                    let fieldId = await z.grabAttributeFrom(metadataInputCount[k] as string, "id");
                    let fieldValue = "";
                    try {
                        if (fieldId == "Contract_Owner") {
                            continue;
                        }
                        let value = await this.addValues(fieldType, fieldId, fieldValue, dropDownElements as string[], count, metadataInputCount[k] as string);
                        let labelXpath = metadataInputCount[k] + "/parent::div/label" as string;
                        let metadataLabel: string = await z.grabTextFrom(labelXpath);
                        metadataLabel = metadataLabel.replace("*", "").trim();
                        if (value.length == 0 || value == "" || value == null || value == undefined) {
                            continue;
                        } else {
                            let mapfieldValues = new Map<String, String>();
                            mapfieldValues.set(metadataLabel, value);
                            GlobalVariables.subHeaderWithmetadataandValue.set(subHeaderName + "_" + k, mapfieldValues);
                        }

                    } catch (error) {
                        logger.info(fieldId + " - Field is either Hidden or disabled. Kindly refer screenshot");
                    }
                } else {
                    logger.info("Metadata is not having fieldtype attribute,skipped");
                }
            } else {
                logger.info("Metadata is not available in the contract details page,skipped");

            }
        }
        logger.info("***************Old contract details*************", GlobalVariables.subHeaderWithmetadataandValue);
    }

    /**
    * To fill all types of fields and get all fields types of values in the dynamic page
    * @param {string} fieldType
    * @param {string} fieldId
    * @param {string} fieldValue
    * @param {string[]} dropDownElements
    * @param {number} count
    * @param {string} metadataInputCount
    * @return {string} fieldValue
    * @author somnath.k
    */
    static async addValues(fieldType: string, fieldId: string, fieldValue: string, dropDownElements: string[], count: number, metadataInputCount: string) {
        let fieldVal: string = "";
        if (fieldType == "DROPDOWN") {
            let index: number;
            try {
                let dropdownXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt.getElement(contractDetailsElements.DYN_DROPDOWNFIELD));
                await z.scrollIntoView(dropdownXpath);
                await z.click(dropdownXpath);
                let fieldListVal = await CommonComponent.retrieveElementXpathBasedonString(fieldId, await AuroraLmt.getElement(contractDetailsElements.DNY_DROPDOWNFIELDLIST));
                index = await CommonComponent.getRandomNumber(fieldListVal.length) as number;
                if (index == 0) {
                    index = index + 1;
                }
                if (fieldId == "MARKET_SEGMENT") { //Added for webelement issue in LM and UAT3
                    index = 2;
                }
                if (fieldId == "LINE_OF_BUSINESS") { //Added for LM and UAT3 workflow
                    index = 1;
                }
                if (fieldId == "AUTO_RENEW") {
                    for (let i = 1; i < fieldListVal.length - 1; i++) {
                        let dropdownVal = await z.grabTextFrom(fieldListVal[i] as string);
                        if (dropdownVal != "" || dropdownVal != null || dropdownVal != undefined) {
                            await z.fillField(await AuroraLmt.getElement(contractDetailsElements.DROPDOWN_FIELD_SEARCH_BOX), dropdownVal);
                        }
                        let searchedDropdownValXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt.getElement(contractDetailsElements.DNY_DROPDOWN_SEARCHED_VALUE));
                        await z.click(searchedDropdownValXpath);
                    }
                }
                if (fieldId != "Contract_Status") {

                    let dropdownVal = await z.grabTextFrom(fieldListVal[index] as string);
                    if (dropdownVal != "" || dropdownVal != null || dropdownVal != undefined) {
                        await z.fillField(await AuroraLmt.getElement(contractDetailsElements.DROPDOWN_FIELD_SEARCH_BOX), dropdownVal);
                    }
                    let searchedDropdownValXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt.getElement(contractDetailsElements.DNY_DROPDOWN_SEARCHED_VALUE));
                    await z.click(searchedDropdownValXpath);
                } else {
                    //passing value as inactive and will be handled later
                    let dropdownVal = "Inactive";
                    if (dropdownVal != "" || dropdownVal != null || dropdownVal != undefined) {
                        await z.fillField(await AuroraLmt.getElement(contractDetailsElements.DROPDOWN_FIELD_SEARCH_BOX), dropdownVal);
                    }
                    let searchedDropdownValXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt.getElement(contractDetailsElements.DNY_DROPDOWN_SEARCHED_VALUE));
                    await z.click(searchedDropdownValXpath);
                }
                fieldValue = await CommonComponent.getDropdownUITextUsingJavascript(metadataInputCount);
                logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
            } catch (error) {
                logger.info("Failed while filling the dropdown value");
            }
        } else if (fieldType == "STRING") {
            try {
                let stringXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt.getElement(contractDetailsElements.DYN_STRINGFIELD));
                if (await CommonComponent.verifyFieldisReadonly(stringXpath) == true) {
                    logger.info("Metadata is disabled on UI so value cannot be filled,Skipped");
                    fieldValue = "";
                } else {
                    await z.scrollIntoView(stringXpath);
                    fieldVal = await CommonComponent.randomString(16);
                    if (fieldId == "Contract_Title") {
                        await z.fillField(stringXpath, "Automation" + await CommonComponent.getRandomNumber(1000000));
                    } else {
                        if (fieldId == "Contract_Term") {
                            await z.fillField(stringXpath, "" + await CommonComponent.getRandomNumber(10));
                        }
                        else {
                            await z.fillField(stringXpath, fieldVal);
                        }
                    }
                    fieldValue = await CommonComponent.getUITextUsingJavascript(stringXpath);
                    logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
                }

            } catch (error) {
                logger.info("Failed while filling the string value");
            }

        } else if (fieldType == "DECIMAL") {
            try {
                let decimalXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt.getElement(contractDetailsElements.DYN_STRINGFIELD));
                if (await CommonComponent.verifyFieldisReadonly(decimalXpath) == true) {
                    logger.info("Metadata is disabled on UI so value cannot be filled,Skipped");
                    fieldValue = "";
                } else {
                    await z.scrollIntoView(decimalXpath);
                    fieldVal = await CommonComponent.getRandomNumber(1) + ".00";
                    await z.fillField(decimalXpath, fieldVal);
                }
                fieldValue = await CommonComponent.getUITextUsingJavascript(decimalXpath);
                logger.info(fieldId + " || " + fieldType + " || " + fieldValue);

            }
            catch (error) {
                logger.info("Failed while filling the decimal value");
            }

        } else if (fieldType == "INTEGER") {
            try {
                let integerXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt.getElement(contractDetailsElements.DYN_STRINGFIELD));
                if (await CommonComponent.verifyFieldisReadonly(integerXpath) == true) {
                    logger.info("Metadata is disabled on UI so value cannot be filled,Skipped");
                    fieldValue = "";
                } else {
                    await z.scrollIntoView(integerXpath);
                    if (fieldId != "AUTO_RENEWAL_PERIOD_MONTHS") {
                        fieldVal = await CommonComponent.randomNumberString(2);
                        await z.fillField(integerXpath, fieldVal);
                    } else {
                        fieldVal = await CommonComponent.randomNumberString(1);
                        await z.fillField(integerXpath, fieldVal);
                    }
                }
                fieldValue = await CommonComponent.getUITextUsingJavascript(integerXpath);
                logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
            }
            catch (error) {
                logger.info("Failed while filling the integer value");
            }
        } else if (fieldType == "DATE") {
            try {
                if (fieldId == "Contract_Expiration_Date") {
                    logger.info("Contract expiration date is already filled");
                } else {
                    let dayXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt.getElement(contractDetailsElements.DYN_STRINGFIELD));
                    await z.scrollIntoView(dayXpath);
                    await z.click(dayXpath);
                    if (fieldId == "Contract_Effective_Date") {
                        if ((await CommonComponent.getHtmlElementData(await AuroraLmt.getElement(contractDetailsElements.CURRENT_DAY_OPTION)) != null) || (await CommonComponent.getHtmlElementData(await AuroraLmt.getElement(contractDetailsElements.CURRENT_DAY_OPTION)) != undefined)) {
                            await z.click(await AuroraLmt.getElement(contractDetailsElements.CURRENT_DAY_OPTION));
                        } else {
                            await z.click(await AuroraLmt.getElement(contractDetailsElements.ALREADY_SELECTED_DAY));
                        }

                    } else if (fieldId != "Contract_Renewal_Date") {
                        await this.dateGenerator(fieldId);
                    } else {
                        let contractExpiryDate = await CommonComponent.retrieveParticularElementXpathBasedonString("Contract_Expiration_Date", await AuroraLmt.getElement(contractDetailsElements.DYN_STRINGFIELD));
                        let renewalDate = await z.grabAttributeFrom(contractExpiryDate, "value");
                        if (renewalDate != "") {
                            await z.fillField(dayXpath, renewalDate);
                        } else {
                            await this.dateGenerator(fieldId);
                        }
                    }
                    fieldVal = await z.grabAttributeFrom(dayXpath, "value");
                    fieldValue = await CommonComponent.getUITextUsingJavascript(dayXpath);
                    logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
                }
            } catch (error) {
                logger.info("Failed to fill date value in the contract");
            }
        } else if (fieldType == "TEXTAREA") {
            try {
                let textareaXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt.getElement(contractDetailsElements.DNY_TEXTAREA));
                if (await CommonComponent.verifyFieldisReadonly(textareaXpath) == true) {
                    logger.info("Metadata is disabled on UI so value cannot be filled,Skipped");
                    fieldValue = "";
                } else {
                    await z.scrollIntoView(textareaXpath);
                    fieldVal = await CommonComponent.randomString(40);
                    await z.fillField(textareaXpath, fieldVal);
                }
                fieldValue = await CommonComponent.getUITextUsingJavascript(textareaXpath);
                logger.info(fieldId + " || " + fieldType + " || " + fieldVal);
            } catch (error) {
                logger.info("Failed to fill textarea value in the contract");
            }
        } else if (fieldType == "FILE") {
            try {
                let fileXpath = await AuroraLmt.getElement(contractDetailsElements.UPLOAD_DIGITAL_DOCUMENT);
                await z.scrollIntoView(fileXpath);
                await z.attachFile(fileXpath, await AuroraLmt.getData("DOCX_FORMAT_DOCUMENT"));
                let fileInputXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt.getElement(contractDetailsElements.DYN_STRINGFIELD));
                await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(contractDetailsElements.PROCESSING_REQUEST_LOADER));
                fieldValue = await CommonComponent.getUITextUsingJavascript(fileInputXpath);
                logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
            }
            catch (error) {
                logger.info("Failed to upload contract in the contract");
            }
        } else if (fieldType == "RADIO") {
            logger.info("Field type is radio so,Skipped");
            // try {
            //     let radioXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt.getElement(contractDetailsElements.DNY_RADIO));
            //     await z.scrollIntoView(radioXpath);
            //     let index = await CommonComponent.getRandomNumber(2) as number;
            //     if (index == 0) {
            //         index = index + 1;
            //     }
            //     let radioXpathExtend = radioXpath + "/input[" + index + "]";
            //     await z.click(radioXpathExtend);
            //     fieldValue = await CommonComponent.getUITextUsingJavascript(radioXpathExtend);
            //     logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
            // } catch (error) {
            //     logger.info("Failed to select radio button in the contract");
            // }
        } else if (fieldType == "" || fieldType == null || fieldType == undefined) {
            logger.info("Manual case :Metadata field might be checkbox or invalid,Skipped");
        }
        else {
            logger.info("!!!!!!!!!!!!! Fieldtype not identified !!!!!!!!!!!!!!!!!!!");
        }
        return fieldValue;
    }

    /**
    * To fill atl fields and get atl values in the page
    * @param {string} subHeaderName
    * @author somnath.k
    */
    static async fillContractAtlDetails(subHeaderName: string) {
        let subEntityList = await CommonComponent.retrieveElementXpathBasedonString(subHeaderName, await AuroraLmt.getElement(contractDetailsElements.DNY_SUB_ENTITY_LIST));
        let noOfRowsBUGrid = await CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt.getElement(contractDetailsElements.ALL_ROWS_BU_GRID));
        logger.info("Number of ATLs : " + subEntityList.length);
        let sunEntityListToSingleAtl = await CommonComponent.retrieveParticularElementXpathBasedonString(subHeaderName, await AuroraLmt.getElement(contractDetailsElements.DYN_SUNENTITY_LIST_TO_SINGLE_ALTL));
        if ((sunEntityListToSingleAtl != null || sunEntityListToSingleAtl != undefined) && (await CommonComponent.getHtmlElementData(sunEntityListToSingleAtl) != null || await CommonComponent.getHtmlElementData(sunEntityListToSingleAtl) != undefined)) {
            if (subEntityList.length > 0 && await CommonComponent.isEnabledByXpath(sunEntityListToSingleAtl)
                && subHeaderName == "Business Unit Information") {
                await z.scrollIntoView(await AuroraLmt.getElement(contractDetailsElements.VIEW_ALL_BU));
                let columnData: String[];
                let BURow = new Map<String, String>();
                let BUHeader = await CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt.getElement(contractDetailsElements.BU_GRID_HEADER));
                for (let i = 0; i < noOfRowsBUGrid.length; i++) {
                    let AllColumnDataFromBUGrid = await AuroraLmt.getElement(contractDetailsElements.DNY_ALL_COLUMN_DATA_FROM_BUGRID);
                    AllColumnDataFromBUGrid = AllColumnDataFromBUGrid.replace("TempCount", "" + i + 1);
                    columnData = await CommonComponent.retrieveElementXpathBasedonIndex(AllColumnDataFromBUGrid);
                    for (let j = 0; j < columnData.length; j++) {
                        BURow.set(await z.grabTextFrom(BUHeader[j] as string), await z.grabTextFrom(columnData[j] as string));
                    }
                    GlobalVariables.ATLData.set("MainRow" + GlobalVariables.ATLData.size, BURow);
                    for (let k = 0; k < subEntityList.length; k++) {
                        try {
                            if (subHeaderName != "Business Unit Information") {
                                await z.scrollIntoView(await AuroraLmt.getElement(contractDetailsElements.VIEW_ALL_BU));
                                let columnData: String[];
                                let BURow = new Map<String, String>();
                                let BUHeader = await CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt.getElement(contractDetailsElements.BU_GRID_HEADER));
                                for (let i = 0; i < noOfRowsBUGrid.length; i++) {
                                    let AllColumnDataFromBUGrid = await AuroraLmt.getElement(contractDetailsElements.DNY_ALL_COLUMN_DATA_FROM_BUGRID);
                                    AllColumnDataFromBUGrid = AllColumnDataFromBUGrid.replace("TempCount", "" + i + 1);
                                    columnData = await CommonComponent.retrieveElementXpathBasedonIndex(AllColumnDataFromBUGrid);
                                    for (let j = 0; j < columnData.length; j++) {
                                        BURow.set(await z.grabTextFrom(BUHeader[j] as string), await z.grabTextFrom(columnData[j] as string));
                                    }
                                    GlobalVariables.ATLData.set("MainRow" + GlobalVariables.ATLData.size, BURow);
                                }
                            } else {
                                try {
                                    await z.scrollIntoView(subEntityList[0] as string);
                                    let ATLHeader = await CommonComponent.retrieveElementXpathBasedonString(subHeaderName, await AuroraLmt.getElement(contractDetailsElements.DNY_ALT_HEADER_DATA));
                                    let ATLRows = new Map<String, String>();
                                    for (let i = 0; i < ATLRows.size; i++) {
                                        let q = i + 1;
                                        let ATLColumnXpath = await AuroraLmt.getElement(contractDetailsElements.DYN_ATL_COLUMN_DATA);
                                        ATLColumnXpath = ATLColumnXpath.replace("TempValue", subHeaderName);
                                        ATLColumnXpath = ATLColumnXpath.replace("TempCount", "" + q);
                                        let ATLColumn = await CommonComponent.retrieveElementXpathBasedonIndex(ATLColumnXpath);
                                        for (let j = 0; j < ATLColumn.length; j++) {
                                            ATLRows.set(await z.grabTextFrom(ATLHeader[j] as string), await z.grabTextFrom(ATLColumn[j] as string));
                                        }
                                        GlobalVariables.ATLData.set("MainRow" + GlobalVariables.ATLData.size, ATLRows);
                                    }
                                } catch (error) {
                                    logger.info("No Fields identified under - " + subHeaderName);
                                }
                            }
                        }
                        catch (error) {
                            logger.info("No Fields identified under - " + subHeaderName);
                        }
                    }
                }
            } else {
                logger.info("Sub Header is not an ATL   " + subHeaderName);
            }
        }
    }

    /**
     * To verify metadata and values in aurora contract details page
     * @param {Map<String, Map<String, String>>} subHeaderWithmetadataandValue
     * @return {boolean} flag
     * @author somnath.k
     */
    static async verifyMetadataandValueInContractDetails(contractDetailsData: Map<String, Map<String, String>>) {
        let flag = false;
        // await this.clickOnExpandorCollapseAllIcon();
        // await this.clickOnExpandorCollapseAllIcon();
        logger.info("Test Data to verify in aurora", contractDetailsData);
        for (let mapEntry of contractDetailsData.entries()) {
            let subHeaderName = mapEntry[0] as string;
            let metadataName: string = "";
            let metadataValue: string = "";
            mapEntry[1].forEach((metaValue, metaName) => {
                metadataValue = metaValue as string;
                metadataName = metaName as string;
            })
            subHeaderName = subHeaderName.split("_")[0];
            flag = await this.verifyMetadataandValueisAvailable(subHeaderName, metadataName, metadataValue);
            logger.info("flag value inside verifyMetadataandValueInContractDetails",flag);
            if (flag == false) {
                break;
            }
        }
        return flag;
    }

    /**
    * To verify metadata and values are shown in sync in aurora details page
    * @param {string} metadataNamexpath
    * @param {string} metadataValue
    * @param {string} normalTextboxXpath
    * @param {string} radioButtonXpath
    * @param {string} dropdownnXpath
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyMetadataandValueinSync(metadataNamexpath: string, metadataValue: string, normalTextboxXpath: string, radioButtonXpath: string, dropdownnXpath: string) {
        let flag = false;
        await z.scrollIntoView(metadataNamexpath);
        if (await CommonComponent.isEnabledByXpath(metadataNamexpath) && ((await CommonComponent.getHtmlElementData(normalTextboxXpath) != null) || (await CommonComponent.getHtmlElementData(normalTextboxXpath) != undefined))) {
            let uiMetadataValue: string = await CommonComponent.getUITextUsingJavascript(normalTextboxXpath);
            logger.info("**************Field type is input****************");
            logger.info("old clm field value= " + metadataValue + " New aurora field value= " + uiMetadataValue);
            if ((await CommonComponent.isEnabledByXpath(metadataNamexpath)) && (metadataValue == uiMetadataValue)) {
                flag = true;
            } else {
                flag = false;
            }
        } else if (await CommonComponent.isEnabledByXpath(metadataNamexpath) && ((await CommonComponent.getHtmlElementData(radioButtonXpath) != null) || (await CommonComponent.getHtmlElementData(radioButtonXpath) != undefined))) {
            logger.info("**************Field type is radio****************");
            logger.info("old clm radio field value= " + metadataValue);
            if (metadataValue == "Yes") {
                if ((await CommonComponent.isEnabledByXpath(radioButtonXpath))) {
                    flag = true;
                } else {
                    flag = false;
                }
            } else {
                if (await CommonComponent.isEnabledByXpath(radioButtonXpath)) {
                    flag = true;
                } else {
                    flag = false;
                }
            }
        } else if (await CommonComponent.isEnabledByXpath(metadataNamexpath) && ((await CommonComponent.getHtmlElementData(dropdownnXpath) != null) || (await CommonComponent.getHtmlElementData(dropdownnXpath) != undefined))) {
            let uiMetadataValue: string = await z.grabTextFrom(dropdownnXpath);
            uiMetadataValue = uiMetadataValue.replace("×", "");//check if fails for blank
            metadataValue=metadataValue.replace("×", "");
            logger.info("**************Field type is dropdown****************");
            logger.info("old clm field value= " + metadataValue + " New aurora field value= " + uiMetadataValue);
            // if ((await CommonComponent.isEnabledByXpath(metadataNamexpath)) && (metadataValue.trim() === uiMetadataValue.trim())) {
            if ((await CommonComponent.isEnabledByXpath(metadataNamexpath)) && (uiMetadataValue.includes(metadataValue))) {
                flag = true;
            } else {
                flag = false;
            }
        }
        return flag;
    }


    /**
    * To verify metadata and values are available in aurora contract details page
    * @param {string} sunHeaderName
    * @param {string} metadataName
    * @param {string} metadataValue
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyMetadataandValueisAvailable(sunHeaderName: string, metadataName: string, metadataValue: string) {
        let flag = false;
        let subHeaderXpath = await AuroraLmt.getElement(contractDetailsElements.DYN_SUBHEADER_COMMON);
        let normalTextboxXpath = await AuroraLmt.getElement(contractDetailsElements.DYN_NORMAL_TEXTBOX_COMMON);
        let digitalContractMetadataXpath = await AuroraLmt.getElement(contractDetailsElements.MULTI_DYN_DIGITAL_CONTRACT_METADATA);
        let radioButtonXpath = await AuroraLmt.getElement(contractDetailsElements.DYN_RADIO_BUTTON_COMMON);
        let dropdownnXpath = await AuroraLmt.getElement(contractDetailsElements.DNY_DROPDOWN_COMMON);
        let metadataNameXpath = await AuroraLmt.getElement(contractDetailsElements.DYN_METADATA_NAME_COMMON);
        subHeaderXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(sunHeaderName as string, subHeaderXpath);
        metadataNameXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(metadataName as string, metadataNameXpath);
        normalTextboxXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(metadataName as string, normalTextboxXpath);
        digitalContractMetadataXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(metadataName as string, digitalContractMetadataXpath);
        digitalContractMetadataXpath = digitalContractMetadataXpath.replace("Filename", metadataValue as string);
        radioButtonXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(metadataName as string, radioButtonXpath);
        dropdownnXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(metadataName as string, dropdownnXpath);
        await z.scrollIntoView(subHeaderXpath);
        await z.waitForVisible(subHeaderXpath);
        let metadataCount = await CommonComponent.grabNumberElements(metadataNameXpath);
        let normalTextboxCount = await CommonComponent.grabNumberElements(normalTextboxXpath);
        if (metadataName == "Digital Contract Document") {
            await z.scrollIntoView(metadataNameXpath);
            if (await CommonComponent.isEnabledByXpath(metadataNameXpath) && await CommonComponent.isEnabledByXpath(digitalContractMetadataXpath)) {
                let uiMetadataValue = await z.grabTextFrom(digitalContractMetadataXpath);
                if (await CommonComponent.isEnabledByXpath(digitalContractMetadataXpath) && metadataValue == uiMetadataValue) {
                    flag = true;
                }
            }
        } else {
            if (metadataCount > 1 && normalTextboxCount > 1) {
                logger.info("Metadata " + metadataName + "is having more matching so please validate it manually");
                flag = true;
            }
            else {
                flag = await this.verifyMetadataandValueinSync(metadataNameXpath, metadataValue, normalTextboxXpath, radioButtonXpath, dropdownnXpath);
                logger.info("flag value inside verifyMetadataandValueisAvailable",flag);
            }
        }
        return flag;
    }

    /**
    * To verify uploaded document on UI
    * @param {string} uploadedFilename
    * @author somnath.k
    */
    static async verifyUploadedDocument(uploadedFilename: string) {
        let uiFilenamexpath = await AuroraLmt.getElement(contractDetailsElements.MULTI_DYN_DIGITAL_CONTRACT_METADATA);
        let digitalContractDocumentMetadataXpath = await CommonComponent.retrieveParticularElementXpathBasedonString("Digital Contract Document", await AuroraLmt.getElement(contractDetailsElements.DYN_METADATA_NAME_COMMON));
        uiFilenamexpath = await CommonComponent.retrieveParticularElementXpathBasedonString("Digital Contract Document", uiFilenamexpath);
        logger.info("File name recieved" + uploadedFilename);
        uiFilenamexpath = uiFilenamexpath.replace("Filename", uploadedFilename);
        logger.info("File name xpath formed" + uiFilenamexpath);
        await z.scrollIntoView(digitalContractDocumentMetadataXpath);
        await z.seeElement(uiFilenamexpath);
    }

    /**
    * To get particular value from contract detail data throug key value
    * @param {string} metadataName
    * @param {Map<String, Map<String, String>>} contractDetailsData
    * @return {String} metadataValue
    * @author somnath.k
    */
    static async getParticularMetadataValueFromContractDetailsData(metadataName: string, contractDetailsData: Map<String, Map<String, String>>) {
        let metadataValue: String = "";
        for (let mapEntry of contractDetailsData.entries()) {
            mapEntry[1].forEach((metaValue, metaName) => {
                if (metaName == metadataName) {
                    metadataValue = metaValue;
                }
            })
        }
        return metadataValue;
    }

    /**
    * To verify default value in document panel dropdown
    * @param {string} contractName
    * @return {boolean} actualValue
    * @author somnath.k
    */
    static async verifyDefaultValueinDocumentPanelDropdown(contractName: string) {
        await z.click(await AuroraLmt.getElement(contractDetailsElements.DOCUMENT_PANEL_DROPDOWN));
        let UIDropdownValue: string = await z.grabAttributeFrom(await AuroraLmt.getElement(contractDetailsElements.DOCUMENT_DROPDOWN_FIRST_OPTION),"title");
        logger.info("ui dropdown value***************************************************************",UIDropdownValue);
        // UIDropdownValue = UIDropdownValue.split(":")[1];
        GlobalVariables.defaultContractDocument = "";
        GlobalVariables.defaultContractDocument = UIDropdownValue[0].trim();
        let actualValue = contractName.trim() == UIDropdownValue[0].trim();
        return actualValue;
    }

    /**
    * To verify latest version value in document panel
    * @param {string} versionNumber
    * @return {boolean} actualValue
    * @author somnath.k
    */
    static async verifyLatestVersionNoinDocumentPanel(versionNumber: string) {
        await z.waitForVisible(await AuroraLmt.getElement(contractDetailsElements.VERSION_DROPDOWN_FIRST_OPTION));
        let UIDropdownValue = await z.grabTextFrom(await AuroraLmt.getElement(contractDetailsElements.DOCUMENT_PANEL_VERSION_DROPDOWN));
        GlobalVariables.defaultVersionNo = "";
        GlobalVariables.defaultVersionNo = UIDropdownValue;
        // let actualValue = versionNumber.trim() == UIDropdownValue.trim();
        let actualValue = UIDropdownValue.trim().includes(versionNumber.trim());
        return actualValue;
    }

    /**
    * To verify latest version count in document panel
    * @param {string} versionCount
    * @return {boolean} actualValue
    * @author somnath.k
    */
    static async verifyLatestVersionNoCountinDocumentPanel(versionCount: number) {
        let uiVersionCount = await CommonComponent.grabNumberElements(await AuroraLmt.getElement(contractDetailsElements.DOCUMENT_PANEL_VERSION_DROPDOWN_LIST));
        let actualValue = versionCount == uiVersionCount;
        return actualValue;
    }

    /**
    * To verify document preview are retained
    * @param {string} ContractDocument
    * @param {string} versionNumber
    * @return {boolean} actualValue
    * @author somnath.k
    */
    static async verifyDocumentPreviewRetained(ContractDocument: string, versionNumber: string) {
        let documentPanelDropdownVal: string = await z.grabTextFrom(await AuroraLmt.getElement(contractDetailsElements.DOCUMENT_PANEL_DROPDOWN));
        let versionDropdownVal = await z.grabTextFrom(await AuroraLmt.getElement(contractDetailsElements.DOCUMENT_PANEL_VERSION_DROPDOWN));
        let actualResult = (ContractDocument == documentPanelDropdownVal) && (versionNumber == versionDropdownVal);
        return actualResult;
    }

    /****************************************************** AURORA-554 **********************************************************************/

    /**
    * To make is cp madatory yes
    *
    * @author sowmyashree
    */
    static async makeIsCpMandatoryYes() {
        await z.waitForVisible(await AuroraLmt.getElement(await contractDetailsElements.IS_CP_MANDTRY_CHECK_BOX));
        let isCpMandChckBx = await AuroraLmt.getElement(await contractDetailsElements.IS_CP_MANDTRY_CHECK_BOX);
        let checkBoxStatus = await CommonComponent.verifyCheckboxIsSelectedUsingJavascript(isCpMandChckBx);
        if (checkBoxStatus == false) {
            await z.click(isCpMandChckBx);
            await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.APP_SETTINGS_SAVE_BUTTON));
            await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.APP_SETTINGS_CONFRM_POPUP_PROCEED_BTN));
            await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.APP_SETTINGS_SUCCESS_OK_BUTTON));

        }


    }

    /**
    * To make is cp madatory to no
    *
    * @author sowmyashree
    */
    static async makeIsCpMandatoryNo() {
        await z.waitForVisible(await AuroraLmt.getElement(contractDetailsElements.IS_CP_MANDTRY_CHECK_BOX));
        let isCpMandChckBx = await AuroraLmt.getElement(contractDetailsElements.IS_CP_MANDTRY_CHECK_BOX);
        let checkBoxStatus = await CommonComponent.verifyCheckboxIsSelectedUsingJavascript(isCpMandChckBx);
        if (checkBoxStatus == true) {
            await z.click(isCpMandChckBx);
            await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.APP_SETTINGS_SAVE_BUTTON));
            await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.APP_SETTINGS_CONFRM_POPUP_PROCEED_BTN));
            await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.APP_SETTINGS_SUCCESS_OK_BUTTON));
        }


    }

}

/*******************************************************Services Ends******************************************************/
