"use strict";
//Rule: classname should be ts file name with first letter as caps
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractDetailsActions = void 0;
const AuroraLmt_1 = require("../../common/Data/AuroraLmt");
const CommonComponent_1 = require("./../commonKeywords/CommonComponent");
const GlobalVariables_1 = require("../../common/dataCreation/GlobalVariables");
const AuroraContractDetailsElements_1 = require("../Repository/Contract Details/AuroraContractDetailsElements");
const contractDetailsElements_1 = require("./contractDetailsElements");
const logger_1 = require("../../common/Logger/logger");
/**
 * The class is to perform contract details action
 *
 * @author somnath.k
 *
 *
*/
const z_1 = require("actionbot-wrapper/z");
const { I } = inject();
class ContractDetailsActions {
    /******************************************************Sub Services Starts******************************************************/
    /**
    * To enter email id
    * @author somnath.k
    */
    static async enterEmailId(username) {
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.EMAIL_ADDRESS_TEXTBOX), username);
    }
    /**
    * To enter email password
    * @author somnath.k
    */
    static async enterPassword(password) {
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.PASSWORD_TEXTBOX), password);
    }
    /**
    * To click on login button
    * @author somnath.k
    */
    static async clickonLoginBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.LOGIN_BUTTON));
    }
    /**
    * To click on clm product
    * @author somnath.k
    */
    static async clickonCLMProduct() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.SELECT_CLM_PRODUCT));
    }
    /**
    * To select clm product
    * @author somnath.k
    */
    static async selectClmProduct() {
        let flag = true;
        let count = 0;
        while (flag == true) {
            if ((await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.SELECT_CLM_PRODUCT)) == null) || (await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.SELECT_CLM_PRODUCT)) == undefined)) {
                count++;
                await z_1.z.scrollIntoView(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CLM_Visible_Element));
            }
            else {
                flag = false;
            }
            if (count == 15) {
                flag = false;
            }
        }
        await z_1.z.moveCursorTo(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CLM_Visible_Element));
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.SELECT_CLM_PRODUCT));
    }
    static async clickOnSideNavigationBarLink(link) {
        let sideNavigationLinkXpath = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_SIDE_NAVIGATION_BAR_LINK).toString();
        if (sideNavigationLinkXpath.includes("TEMP_VAL")) {
            sideNavigationLinkXpath = sideNavigationLinkXpath.replace("TEMP_VAL", link);
        }
        await z_1.z.click(sideNavigationLinkXpath);
    }
    /**
    * To click on repository tab
    * @author somnath.k
    */
    static async clickonRepositoryTab() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.MANAGE_CONTRACT_TAB));
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.SELECT_REPOSITORY_TAB));
    }
    /**
    * To click on contract status dropdown
    * @author somnath.k
    */
    static async clickonRepoContractStatusDropdown() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.REPO_STATUS_DROPDOWN));
    }
    /**
    * To click on first contract through link
    * @author somnath.k
    */
    static async clickonFirstContractlink() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.FIRST_CONTRACT_LINK));
    }
    /**
    * To click on contract through link having amendment attached
    * @author Datta
    */
    static async clickOnContractLinkHavingAmendment() {
        try {
            await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTRACT_LINK_HAVING_AMENDMENT));
        }
        catch (error) {
            //write logic to
            await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.FIRST_CONTRACT_LINK_HAVING_AMENDMENT));
        }
    }
    /**
    * To click on view in aurora button
    * @author somnath.k
    */
    static async clickonRedirectToAuroraBttn() {
        await z_1.z.wait(2);
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.REDIRECT_TO_AURORA_LINK));
        await z_1.z.wait(2);
    }
    static async clickOnLinkedContractsOptionMenu() {
        console.log("clicking on Linked Agreements");
        await z_1.z.wait(30);
        try {
            await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.LINKED_CONTRACT_MENU));
            console.log("clicked on Linked Agreements");
        }
        catch (error) {
            console.error("unable to click on Linked Agreements menu option");
        }
    }
    /**
    * To click on add to watchlist button
    * @author somnath.k
    */
    static async clickAddtoWatchlistBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.ADD_TO_WATCHLIST));
    }
    /**
    * To click on home tab
    * @author somnath.k
    */
    static async clickonHomeTab() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.HOME_TAB));
    }
    /**
    * To click on dashboard sub tab
    * @author somnath.k
    */
    static async clickonCommonDashboardSubTab() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.COMMON_DASHBOARD));
    }
    /**
    * To on search icon in my watchlist widget
    * @author somnath.k
    */
    static async clickOnMywatchlistSearchIcon() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.MYWATCHLIST_SEARCH_ICON));
    }
    /**
    * To click on first contract in my watchlist widget
    * @author somnath.k
    */
    static async clickonMywatchlistFirstContractno(contractNumber) {
        let contractLinkXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(contractNumber, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DNY_MYWATCHLIST_FIRST_CONTRACT_NUMBER));
        await z_1.z.click(contractLinkXpath);
    }
    /**
    * To click on alerts and reminders tab
    * @author somnath.k
    */
    static async clickonAlertsandRemindersTab() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.ALERTS_AND_REMINDER_TAB));
    }
    /**
    * To click on alerts expand icon
    * @author somnath.k
    */
    static async clickonAlertsExpandIcon() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.ALERTS_EXPAND_ICON));
    }
    /**
    * To click on alert contract number link
    * @author somnath.k
    */
    static async clickonAlertContractNoLink() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.ALERT_CONTRACT_NUMBER_LINK));
    }
    /**
    * To click on upload contract button
    * @author somnath.k
    */
    static async clickonUploadContractBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.UPLOAD_CONTRACT_BTTN));
    }
    /**
    * To click on contine button in create contract page
    * @author somnath.k
    */
    static async clickonCreateContractContinueBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTINUE_BTTN));
    }
    /**
    * To click on expand or collapse all icon
    * @author somnath.k
    */
    static async clickOnExpandorCollapseAllIcon() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.EXPAND_OR_COLLAPSE_ALL));
    }
    /**
    * To click on expand or collapse document panel icon
    * @author somnath.k
    */
    static async clickOnExpandorCollapseDocumentPanelIcon() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.EXPAND_OR_COLLAPSE_DOCUMENT_PANEL));
    }
    /**
    * To click on document tab
    * @author somnath.k
    */
    static async clickOnDocumentTab() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DOCUMENT_MENU));
    }
    /**
   * To click on contract details tab
   * @author somnath.k
   */
    static async clickOnRepoContractDetailsTab() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTRACT_DETAILS_TAB));
    }
    /**
    * To click on close contract icon
    * @author somnath.k
    */
    static async clickOnRepoContractCloseIcon() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CLOSE_REPO_CONTRACT));
    }
    /**
    * To click on save contract button
    * @author somnath.k
    */
    static async clickonSaveContractButton() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.SAVE_CONTRACT_BTTN));
    }
    /**
    * To click on repository sub tab
    * @author somnath.k
    */
    static async clickonRepositorySubTab() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.SELECT_REPOSITORY_TAB));
    }
    /**
    * To click on manage contract tab
    * @author somnath.k
    */
    static async clickonManageContractTab() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.MANAGE_CONTRACT_TAB));
    }
    /**
    * To click on setup tab
    * @author sowmyashree
    */
    static async clickonSetupTab() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.SETUP_TAB));
    }
    /**
    * To click on product configuration
    * @author sowmyashree
    */
    static async clickOnProdConfig() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.SETUP_PRODUCT_CONFIG_TAB));
    }
    /**
    * To click on application
    * @author sowmyashree
    */
    static async clickOnAppSettings() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.APPLICATION_SETTINGS));
    }
    /**
    * To click is cp mandatory check box
    * @author sowmyashree
    */
    static async clickOnIsCpMandatoryCheckBox() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.IS_CP_MANDTRY_CHECK_BOX));
    }
    /******************************************************Sub Services Ends******************************************************/
    /******************************************************Services Starts******************************************************/
    /**
    * To login to clm application
    * @param {string} username
    * @param {string} password
    * @author somnath.k
    */
    static async loginToCLM(username, password) {
        await z_1.z.amOnPage(await AuroraLmt_1.AuroraLmt.getData("url"));
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
    static async searchAndViewContractBasedonStatus(statusIndex) {
        await CommonComponent_1.CommonComponent.gridDropdownSelectionBasedonValue(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.REPO_STATUS_DROPDOWN), await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTRACT_STATUS_OPTION_LIST), statusIndex);
    }
    /**
    * To view contracts based on given index for Hierarchy status
    * @param {number} statusIndex
    * @author Datta
    */
    static async viewContractBasedOnHierarchyStatus(status) {
        let dropDownXpath = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.HIERARCHY_STATUS_DROPDOWN);
        await CommonComponent_1.CommonComponent.selectValueFromGridDropDown(dropDownXpath, status);
    }
    /**
        * To view contracts based on field and status value
        * @param
        * @author Datta
        */
    static async filterContracts(attributrType, label, status) {
        if (attributrType == "select") {
            let dropDownXpath = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_CONTACT_HEADER_LABEL);
            dropDownXpath = dropDownXpath.replace("TEMP_VAL1", attributrType);
            dropDownXpath = dropDownXpath.replace("TEMP_VAL2", label);
            await CommonComponent_1.CommonComponent.selectValueFromGridDropDown(dropDownXpath, status);
        }
        else {
            let dropDownXpath = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_CONTACT_HEADER_LABEL);
            dropDownXpath = dropDownXpath.replace("TEMP_VAL1", attributrType);
            dropDownXpath = dropDownXpath.replace("TEMP_VAL2", label);
            await z_1.z.fillField(dropDownXpath, status);
            await z_1.z.pressKey('Enter');
        }
    }
    /**
    * To verify aurora link in all the contract profile menus
    * @author somnath.k
    */
    static async verifyAuroraLinkinEnabledLeftMenu() {
        await z_1.z.waitForVisible(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTRACT_DETAILS_MENU));
        let noofMenus = await CommonComponent_1.CommonComponent.grabNumberElements(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTRACT_LEFT_MENU_LIST));
        for (let i = 2; i <= noofMenus; i++) {
            let menuXpath = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_PARTICULAR_LEFT_MENU);
            if (menuXpath.includes("TempCount")) {
                menuXpath = menuXpath.replace("TempCount", "" + i);
            }
            else {
                logger_1.logger.info("left menu xpath does not contains TempCount keyword");
            }
            if ((await CommonComponent_1.CommonComponent.getHtmlElementData(menuXpath) != null) || (await CommonComponent_1.CommonComponent.getHtmlElementData(menuXpath) != undefined)) {
                await CommonComponent_1.CommonComponent.clickUsingJsByXpath(menuXpath);
                await z_1.z.waitForElement(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.REDIRECT_TO_AURORA_LINK));
                await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.REDIRECT_TO_AURORA_LINK));
            }
            else {
                logger_1.logger.info("Menu is not enabled so skipped to click");
            }
        }
    }
    /**
    * To select aurora link based on random menu selection
    * @author somnath.k
    */
    static async selectAuroraLinkBasedonRandomMenu() {
        await z_1.z.waitForVisible(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTRACT_DETAILS_MENU));
        let noofMenus = await CommonComponent_1.CommonComponent.grabNumberElements(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTRACT_LEFT_MENU_LIST));
        for (let i = 1; i <= noofMenus; i++) {
            let menuXpath = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_PARTICULAR_LEFT_MENU);
            let randomCount = await CommonComponent_1.CommonComponent.getRandomNumber(noofMenus);
            if (randomCount == 0 || randomCount == 1 || randomCount == 2) {
                randomCount = 2;
            }
            if (menuXpath.includes("TempCount")) {
                menuXpath = menuXpath.replace("TempCount", "" + randomCount);
            }
            else {
                logger_1.logger.info("left menu xpath does not contains TempCount keyword");
            }
            if ((await CommonComponent_1.CommonComponent.getHtmlElementData(menuXpath) != null) || (await CommonComponent_1.CommonComponent.getHtmlElementData(menuXpath) != undefined)) {
                await z_1.z.scrollIntoView(menuXpath);
                await z_1.z.click(menuXpath);
                await z_1.z.waitForElement(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.REDIRECT_TO_AURORA_LINK));
                await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.REDIRECT_TO_AURORA_LINK));
                break;
            }
            else {
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
    static async retrieveAddedWatchlistContract(contractPrefixText) {
        let contractNumber;
        await z_1.z.waitForVisible(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTRACT_DETAILS_MENU));
        await z_1.z.waitForVisible(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.SUMMARY_FIRST_MENU));
        let contractNumberXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(contractPrefixText, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DNY_OLD_CONTRACT_NUMBER));
        let addToWatchlistXpath = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.WATCHLIST_ICON);
        if ((await CommonComponent_1.CommonComponent.getHtmlElementData(addToWatchlistXpath) != null) || ((await CommonComponent_1.CommonComponent.getHtmlElementData(addToWatchlistXpath) != undefined))) {
            await this.clickAddtoWatchlistBttn();
            contractNumber = await z_1.z.grabTextFrom(contractNumberXpath);
        }
        else {
            contractNumber = await z_1.z.grabTextFrom(contractNumberXpath);
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
    static async getContractNumber(contractPrefixText, contractNumberXpath) {
        let contractNoXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(contractPrefixText, contractNumberXpath);
        return await z_1.z.grabTextFrom(contractNoXpath);
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
    static async searchContractinMywatchlist(contractNumber) {
        await z_1.z.waitForVisible(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.MYWATCHLIST_WIDGET));
        if ((await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.MYWATCHLIST_WIDGET)) != null) || (await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.MYWATCHLIST_WIDGET)) != undefined)) {
            await z_1.z.scrollIntoView(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.MYWATCHLIST_WIDGET));
            await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.MYWATCHLIST_SEARCHBOX), contractNumber);
            await this.clickOnMywatchlistSearchIcon();
        }
        else {
            logger_1.logger.info("My watchlist widget is not accessible in the dashboard page");
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
            let monthlist = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.MONTH_OPTION_LIST));
            let index = await CommonComponent_1.CommonComponent.getRandomNumber(monthlist.length + 1);
            let dropdownVal = await z_1.z.grabTextFrom(monthlist[index]);
            await z_1.z.selectOption(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.MONTH_DROPDOWN), dropdownVal);
        }
        catch (error) {
            logger_1.logger.info("Failed to select random month");
        }
    }
    /**
    * To select random year
    * @param {string} fieldId
    * @author somnath.k
    */
    static async yearSelect(fieldId) {
        try {
            let yearList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.YEAR_OPTION_LIST));
            let values = [];
            let pos = 0;
            for (let yearXpath of yearList) {
                let yearText = await z_1.z.grabTextFrom(yearXpath);
                values.push(yearText);
            }
            await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.YEAR_DROPDOWN));
            let currentYear = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CURRENT_YEAR));
            let position = values.indexOf(currentYear);
            let randomNo = await CommonComponent_1.CommonComponent.getRandomNumber(2);
            let index = randomNo + pos + 8; // +1 added to ensure, selected year is not the current year.
            if (fieldId == "Contract_Effective_Date") {
                let currentYearVal = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CURRENT_YEAR));
                await z_1.z.selectOption(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.YEAR_DROPDOWN), currentYearVal);
            }
            else {
                let yearval = await z_1.z.grabTextFrom(yearList[index]);
                await z_1.z.selectOption(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.YEAR_DROPDOWN), yearval);
            }
        }
        catch (error) {
            logger_1.logger.info("Failed to select random year");
        }
    }
    /**
    * To select random day
    * @author somnath.k
    */
    static async daySelect() {
        let dateList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DAY_OPTION_LIST));
        let values = [];
        let pos = 0;
        let count = 0;
        for (let dateXpath of dateList) {
            count++;
            if (count > 24) {
                break;
            }
            else {
                let yearText = await z_1.z.grabTextFrom(dateXpath);
                values.push(yearText);
            }
        }
        let index = await CommonComponent_1.CommonComponent.getRandomNumber(values.length);
        index = index + 1;
        if (index > values.length) {
            index = values.length;
        }
        let flag = false;
        do {
            for (let i = index; i <= values.length; i++) {
                if (values[i] != null) {
                    let particularDayXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString("" + i, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DNY_SELECT_DAY));
                    await z_1.z.click(particularDayXpath);
                    flag = true;
                    break;
                }
                else {
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
            let atlList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.MANY_TO_MANY_POPUP_LIST));
            let i = await CommonComponent_1.CommonComponent.getRandomNumber(atlList.length);
            if (atlList != null) {
                await z_1.z.click(atlList[i]);
                await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.BU_DONE_BTTN));
            }
            else {
                await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.BU_CANCEL_BTTN));
            }
        }
        catch (error) {
            logger_1.logger.info("User could not fill many-to-many ATL field");
        }
    }
    /**
    * To fill business unit information
    * @author somnath.k
    */
    static async fillBuisnessUnit() {
        await z_1.z.scrollIntoView(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.BUSINESS_UNIT_BTTN));
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.BUSINESS_UNIT_BTTN));
        let buListTable = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.MANY_TO_MANY_POPUP_LIST);
        if (await CommonComponent_1.CommonComponent.isElementPresent(buListTable)) {
            let buList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(buListTable);
            let i = await CommonComponent_1.CommonComponent.getRandomNumber(buList.length);
            await z_1.z.click(buList[i]);
            await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.BU_DONE_BTTN));
        }
        else {
            await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.BU_CANCEL_BTTN));
        }
    }
    /**
    * To save contract after filled contract details information
    * @param {string} contractPrefixText
    * @author somnath.k
    */
    static async saveContract(contractPrefixText /*,dropdownElements:string[],indexCount:number,metadataInputCount:string*/) {
        let count = 0;
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.SAVE_CONTRACT_BTTN));
        while (true) {
            let newContractNumber = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(contractPrefixText, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DNY_OLD_CONTRACT_NUMBER));
            if ((await CommonComponent_1.CommonComponent.getHtmlElementData(newContractNumber) != null) || (await CommonComponent_1.CommonComponent.getHtmlElementData(newContractNumber) != undefined)) {
                GlobalVariables_1.GlobalVariables.contractNumber = "";
                GlobalVariables_1.GlobalVariables.contractNumber = await z_1.z.grabTextFrom(newContractNumber);
                break;
            }
            else {
                if (await CommonComponent_1.CommonComponent.isEnabledByXpath(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.MANDATORY_ERROR_LABEL))) {
                    let mandatoryLabelXpath = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.MANDATORY_ERROR_LABEL);
                    let id = await z_1.z.grabAttributeFrom(mandatoryLabelXpath, "for");
                    let emptyField = "//*[@id='" + id + "' and contains(@class,'inputMaterial')]";
                    let fieldType = await z_1.z.grabAttributeFrom(emptyField, "fieldtype");
                    let fieldId = await z_1.z.grabAttributeFrom(emptyField, "id");
                    let fieldValue = "";
                    //await this.addValuesModify(fieldType, fieldId, fieldValue,dropdownElements,indexCount,metadataInputCount);
                    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.SAVE_CONTRACT_BTTN));
                    count++;
                }
                else {
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
    static async fillContractDetailsInfo(contractPrefixText) {
        logger_1.logger.info("In process of filling Contract Detail page ");
        try {
            let headerList = await CommonComponent_1.CommonComponent.retrieveUITextListBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.HEADER_LIST), await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_PARTICULAR_HEADER_COUNT));
            logger_1.logger.info("Number of Headers : " + headerList.length);
            let particularHeader;
            if (GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue.size > 0) {
                GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue.clear();
                logger_1.logger.info("Removed previous contract details data from map");
            }
            for (let i = 0; i < headerList.length; i++) {
                logger_1.logger.info("Header number " + (i + 1) + " : " + headerList[i]);
                let headerName = headerList[i];
                particularHeader = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_PARTICULAR_HEADER);
                particularHeader = particularHeader.replace("TempValue", "" + headerName);
                await z_1.z.scrollIntoView(particularHeader);
                await z_1.z.click(particularHeader);
                let subHeaderList = await CommonComponent_1.CommonComponent.retrieveUITextListBasedonString(headerName, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_SUBHEADER_LIST));
                logger_1.logger.info("Number of Sub Headers : " + subHeaderList.length);
                for (let j = 0; j < subHeaderList.length; j++) {
                    //for (let j = 0; j < 1; j++) {
                    let subHeaderName = subHeaderList[j];
                    if (subHeaderName == "Basic details") {
                        subHeaderName = subHeaderName.replace("details", "Details");
                    }
                    logger_1.logger.info("SubHeader number " + (j + 1) + " : " + subHeaderName);
                    try {
                        /**
                         * Input contract meta field values
                         */
                        await this.fillDetailsSubheaderLevel(subHeaderName);
                        /**
                        * Input Contract ATL meta field values
                        */
                        await this.fillContractAtlDetails(subHeaderName);
                    }
                    catch (error) {
                        logger_1.logger.info("No Fields identified under - " + subHeaderName);
                    }
                }
            }
        }
        catch (error) {
            logger_1.logger.info("Failed to fill all the fields in the contract details page");
        }
        await this.saveContract(contractPrefixText);
        logger_1.logger.info("****Contract Details data in map******", GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue);
    }
    /**
    * To fill subheader level fields details
    * @param {string} subHeaderName
    * @author somnath.k
    */
    static async fillDetailsSubheaderLevel(subHeaderName) {
        let labelWebelement = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonString(subHeaderName, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_METADATA_LABELS));
        let dropDownElements = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonString(subHeaderName, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_DROPDOWN_ELEMENTS));
        let metadataInputCount = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonString(subHeaderName, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_METADATA_INPUT));
        logger_1.logger.info("Number of Fields : " + metadataInputCount.length);
        let count = 0;
        for (let k = 0; k < metadataInputCount.length; k++) {
            //for (let k = 0; k < 13; k++) {
            let metadataPresentonUI = await CommonComponent_1.CommonComponent.isEnabledByXpath(metadataInputCount[k]);
            let metadataDisabled = (await CommonComponent_1.CommonComponent.verifyFieldisDisabledOnUI(metadataInputCount[k]));
            let metadataDisabledCond2 = (await CommonComponent_1.CommonComponent.verifyFieldisDisabledOnUI(metadataInputCount[k]) == undefined);
            let metadataHidden = (await CommonComponent_1.CommonComponent.verifyFieldisHidden(metadataInputCount[k]));
            // let display1=await CommonComponent.verifyFieldisDisplayNone(metadataInputCount[k] + "/ancestor::td" as string);
            // let display2=await CommonComponent.verifyFieldHasParticularStyleAttribute(metadataInputCount[k] + "/ancestor::td" as string);
            let metadataDisplayNone = ((await CommonComponent_1.CommonComponent.verifyFieldisDisplayNone(metadataInputCount[k] + "/ancestor::td")) && (await CommonComponent_1.CommonComponent.verifyFieldHasParticularStyleAttribute(metadataInputCount[k] + "/ancestor::td")));
            let flag111 = (metadataPresentonUI == true && (metadataDisabled != true || metadataDisabled == null || metadataDisabled == undefined) && metadataHidden != true && metadataDisplayNone != true);
            logger_1.logger.info("xpath ", metadataInputCount[k]);
            logger_1.logger.info("values of each flag" + metadataPresentonUI + "   " + metadataDisabled + "  " + metadataHidden + "  " + metadataDisplayNone);
            if ((metadataPresentonUI == true && (metadataDisabled != true || metadataDisabled == null || metadataDisabled == undefined) && metadataHidden != true && metadataDisplayNone != true)) {
                if (await CommonComponent_1.CommonComponent.verifyFieldHasParticularAttribute(metadataInputCount[k]) == true) {
                    let fieldType = await z_1.z.grabAttributeFrom(metadataInputCount[k], "fieldtype");
                    let fieldId = await z_1.z.grabAttributeFrom(metadataInputCount[k], "id");
                    let fieldValue = "";
                    try {
                        if (fieldId == "Contract_Owner") {
                            continue;
                        }
                        let value = await this.addValues(fieldType, fieldId, fieldValue, dropDownElements, count, metadataInputCount[k]);
                        let labelXpath = metadataInputCount[k] + "/parent::div/label";
                        let metadataLabel = await z_1.z.grabTextFrom(labelXpath);
                        metadataLabel = metadataLabel.replace("*", "").trim();
                        if (value.length == 0 || value == "" || value == null || value == undefined) {
                            continue;
                        }
                        else {
                            let mapfieldValues = new Map();
                            mapfieldValues.set(metadataLabel, value);
                            GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue.set(subHeaderName + "_" + k, mapfieldValues);
                        }
                    }
                    catch (error) {
                        logger_1.logger.info(fieldId + " - Field is either Hidden or disabled. Kindly refer screenshot");
                    }
                }
                else {
                    logger_1.logger.info("Metadata is not having fieldtype attribute,skipped");
                }
            }
            else {
                logger_1.logger.info("Metadata is not available in the contract details page,skipped");
            }
        }
        logger_1.logger.info("***************Old contract details*************", GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue);
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
    static async addValues(fieldType, fieldId, fieldValue, dropDownElements, count, metadataInputCount) {
        let fieldVal = "";
        if (fieldType == "DROPDOWN") {
            let index;
            try {
                let dropdownXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_DROPDOWNFIELD));
                await z_1.z.scrollIntoView(dropdownXpath);
                await z_1.z.click(dropdownXpath);
                let fieldListVal = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonString(fieldId, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DNY_DROPDOWNFIELDLIST));
                index = await CommonComponent_1.CommonComponent.getRandomNumber(fieldListVal.length);
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
                        let dropdownVal = await z_1.z.grabTextFrom(fieldListVal[i]);
                        if (dropdownVal != "" || dropdownVal != null || dropdownVal != undefined) {
                            await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DROPDOWN_FIELD_SEARCH_BOX), dropdownVal);
                        }
                        let searchedDropdownValXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DNY_DROPDOWN_SEARCHED_VALUE));
                        await z_1.z.click(searchedDropdownValXpath);
                    }
                }
                if (fieldId != "Contract_Status") {
                    let dropdownVal = await z_1.z.grabTextFrom(fieldListVal[index]);
                    if (dropdownVal != "" || dropdownVal != null || dropdownVal != undefined) {
                        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DROPDOWN_FIELD_SEARCH_BOX), dropdownVal);
                    }
                    let searchedDropdownValXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DNY_DROPDOWN_SEARCHED_VALUE));
                    await z_1.z.click(searchedDropdownValXpath);
                }
                else {
                    //passing value as inactive and will be handled later
                    let dropdownVal = "Inactive";
                    if (dropdownVal != "" || dropdownVal != null || dropdownVal != undefined) {
                        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DROPDOWN_FIELD_SEARCH_BOX), dropdownVal);
                    }
                    let searchedDropdownValXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DNY_DROPDOWN_SEARCHED_VALUE));
                    await z_1.z.click(searchedDropdownValXpath);
                }
                fieldValue = await CommonComponent_1.CommonComponent.getDropdownUITextUsingJavascript(metadataInputCount);
                logger_1.logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
            }
            catch (error) {
                logger_1.logger.info("Failed while filling the dropdown value");
            }
        }
        else if (fieldType == "STRING") {
            try {
                let stringXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_STRINGFIELD));
                if (await CommonComponent_1.CommonComponent.verifyFieldisReadonly(stringXpath) == true) {
                    logger_1.logger.info("Metadata is disabled on UI so value cannot be filled,Skipped");
                    fieldValue = "";
                }
                else {
                    await z_1.z.scrollIntoView(stringXpath);
                    fieldVal = await CommonComponent_1.CommonComponent.randomString(16);
                    if (fieldId == "Contract_Title") {
                        await z_1.z.fillField(stringXpath, "Automation" + await CommonComponent_1.CommonComponent.getRandomNumber(1000000));
                    }
                    else {
                        if (fieldId == "Contract_Term") {
                            await z_1.z.fillField(stringXpath, "" + await CommonComponent_1.CommonComponent.getRandomNumber(10));
                        }
                        else {
                            await z_1.z.fillField(stringXpath, fieldVal);
                        }
                    }
                    fieldValue = await CommonComponent_1.CommonComponent.getUITextUsingJavascript(stringXpath);
                    logger_1.logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
                }
            }
            catch (error) {
                logger_1.logger.info("Failed while filling the string value");
            }
        }
        else if (fieldType == "DECIMAL") {
            try {
                let decimalXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_STRINGFIELD));
                if (await CommonComponent_1.CommonComponent.verifyFieldisReadonly(decimalXpath) == true) {
                    logger_1.logger.info("Metadata is disabled on UI so value cannot be filled,Skipped");
                    fieldValue = "";
                }
                else {
                    await z_1.z.scrollIntoView(decimalXpath);
                    fieldVal = await CommonComponent_1.CommonComponent.getRandomNumber(1) + ".00";
                    await z_1.z.fillField(decimalXpath, fieldVal);
                }
                fieldValue = await CommonComponent_1.CommonComponent.getUITextUsingJavascript(decimalXpath);
                logger_1.logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
            }
            catch (error) {
                logger_1.logger.info("Failed while filling the decimal value");
            }
        }
        else if (fieldType == "INTEGER") {
            try {
                let integerXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_STRINGFIELD));
                if (await CommonComponent_1.CommonComponent.verifyFieldisReadonly(integerXpath) == true) {
                    logger_1.logger.info("Metadata is disabled on UI so value cannot be filled,Skipped");
                    fieldValue = "";
                }
                else {
                    await z_1.z.scrollIntoView(integerXpath);
                    if (fieldId != "AUTO_RENEWAL_PERIOD_MONTHS") {
                        fieldVal = await CommonComponent_1.CommonComponent.randomNumberString(2);
                        await z_1.z.fillField(integerXpath, fieldVal);
                    }
                    else {
                        fieldVal = await CommonComponent_1.CommonComponent.randomNumberString(1);
                        await z_1.z.fillField(integerXpath, fieldVal);
                    }
                }
                fieldValue = await CommonComponent_1.CommonComponent.getUITextUsingJavascript(integerXpath);
                logger_1.logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
            }
            catch (error) {
                logger_1.logger.info("Failed while filling the integer value");
            }
        }
        else if (fieldType == "DATE") {
            try {
                if (fieldId == "Contract_Expiration_Date") {
                    logger_1.logger.info("Contract expiration date is already filled");
                }
                else {
                    let dayXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_STRINGFIELD));
                    await z_1.z.scrollIntoView(dayXpath);
                    await z_1.z.click(dayXpath);
                    if (fieldId == "Contract_Effective_Date") {
                        if ((await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CURRENT_DAY_OPTION)) != null) || (await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CURRENT_DAY_OPTION)) != undefined)) {
                            await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CURRENT_DAY_OPTION));
                        }
                        else {
                            await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.ALREADY_SELECTED_DAY));
                        }
                    }
                    else if (fieldId != "Contract_Renewal_Date") {
                        await this.dateGenerator(fieldId);
                    }
                    else {
                        let contractExpiryDate = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString("Contract_Expiration_Date", await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_STRINGFIELD));
                        let renewalDate = await z_1.z.grabAttributeFrom(contractExpiryDate, "value");
                        if (renewalDate != "") {
                            await z_1.z.fillField(dayXpath, renewalDate);
                        }
                        else {
                            await this.dateGenerator(fieldId);
                        }
                    }
                    fieldVal = await z_1.z.grabAttributeFrom(dayXpath, "value");
                    fieldValue = await CommonComponent_1.CommonComponent.getUITextUsingJavascript(dayXpath);
                    logger_1.logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
                }
            }
            catch (error) {
                logger_1.logger.info("Failed to fill date value in the contract");
            }
        }
        else if (fieldType == "TEXTAREA") {
            try {
                let textareaXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DNY_TEXTAREA));
                if (await CommonComponent_1.CommonComponent.verifyFieldisReadonly(textareaXpath) == true) {
                    logger_1.logger.info("Metadata is disabled on UI so value cannot be filled,Skipped");
                    fieldValue = "";
                }
                else {
                    await z_1.z.scrollIntoView(textareaXpath);
                    fieldVal = await CommonComponent_1.CommonComponent.randomString(40);
                    await z_1.z.fillField(textareaXpath, fieldVal);
                }
                fieldValue = await CommonComponent_1.CommonComponent.getUITextUsingJavascript(textareaXpath);
                logger_1.logger.info(fieldId + " || " + fieldType + " || " + fieldVal);
            }
            catch (error) {
                logger_1.logger.info("Failed to fill textarea value in the contract");
            }
        }
        else if (fieldType == "FILE") {
            try {
                let fileXpath = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.UPLOAD_DIGITAL_DOCUMENT);
                await z_1.z.scrollIntoView(fileXpath);
                await z_1.z.attachFile(fileXpath, await AuroraLmt_1.AuroraLmt.getData("DOCX_FORMAT_DOCUMENT"));
                let fileInputXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_STRINGFIELD));
                await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.PROCESSING_REQUEST_LOADER));
                fieldValue = await CommonComponent_1.CommonComponent.getUITextUsingJavascript(fileInputXpath);
                logger_1.logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
            }
            catch (error) {
                logger_1.logger.info("Failed to upload contract in the contract");
            }
        }
        else if (fieldType == "RADIO") {
            logger_1.logger.info("Field type is radio so,Skipped");
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
        }
        else if (fieldType == "" || fieldType == null || fieldType == undefined) {
            logger_1.logger.info("Manual case :Metadata field might be checkbox or invalid,Skipped");
        }
        else {
            logger_1.logger.info("!!!!!!!!!!!!! Fieldtype not identified !!!!!!!!!!!!!!!!!!!");
        }
        return fieldValue;
    }
    /**
    * To fill atl fields and get atl values in the page
    * @param {string} subHeaderName
    * @author somnath.k
    */
    static async fillContractAtlDetails(subHeaderName) {
        let subEntityList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonString(subHeaderName, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DNY_SUB_ENTITY_LIST));
        let noOfRowsBUGrid = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.ALL_ROWS_BU_GRID));
        logger_1.logger.info("Number of ATLs : " + subEntityList.length);
        let sunEntityListToSingleAtl = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(subHeaderName, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_SUNENTITY_LIST_TO_SINGLE_ALTL));
        if ((sunEntityListToSingleAtl != null || sunEntityListToSingleAtl != undefined) && (await CommonComponent_1.CommonComponent.getHtmlElementData(sunEntityListToSingleAtl) != null || await CommonComponent_1.CommonComponent.getHtmlElementData(sunEntityListToSingleAtl) != undefined)) {
            if (subEntityList.length > 0 && await CommonComponent_1.CommonComponent.isEnabledByXpath(sunEntityListToSingleAtl)
                && subHeaderName == "Business Unit Information") {
                await z_1.z.scrollIntoView(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.VIEW_ALL_BU));
                let columnData;
                let BURow = new Map();
                let BUHeader = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.BU_GRID_HEADER));
                for (let i = 0; i < noOfRowsBUGrid.length; i++) {
                    let AllColumnDataFromBUGrid = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DNY_ALL_COLUMN_DATA_FROM_BUGRID);
                    AllColumnDataFromBUGrid = AllColumnDataFromBUGrid.replace("TempCount", "" + i + 1);
                    columnData = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(AllColumnDataFromBUGrid);
                    for (let j = 0; j < columnData.length; j++) {
                        BURow.set(await z_1.z.grabTextFrom(BUHeader[j]), await z_1.z.grabTextFrom(columnData[j]));
                    }
                    GlobalVariables_1.GlobalVariables.ATLData.set("MainRow" + GlobalVariables_1.GlobalVariables.ATLData.size, BURow);
                    for (let k = 0; k < subEntityList.length; k++) {
                        try {
                            if (subHeaderName != "Business Unit Information") {
                                await z_1.z.scrollIntoView(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.VIEW_ALL_BU));
                                let columnData;
                                let BURow = new Map();
                                let BUHeader = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.BU_GRID_HEADER));
                                for (let i = 0; i < noOfRowsBUGrid.length; i++) {
                                    let AllColumnDataFromBUGrid = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DNY_ALL_COLUMN_DATA_FROM_BUGRID);
                                    AllColumnDataFromBUGrid = AllColumnDataFromBUGrid.replace("TempCount", "" + i + 1);
                                    columnData = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(AllColumnDataFromBUGrid);
                                    for (let j = 0; j < columnData.length; j++) {
                                        BURow.set(await z_1.z.grabTextFrom(BUHeader[j]), await z_1.z.grabTextFrom(columnData[j]));
                                    }
                                    GlobalVariables_1.GlobalVariables.ATLData.set("MainRow" + GlobalVariables_1.GlobalVariables.ATLData.size, BURow);
                                }
                            }
                            else {
                                try {
                                    await z_1.z.scrollIntoView(subEntityList[0]);
                                    let ATLHeader = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonString(subHeaderName, await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DNY_ALT_HEADER_DATA));
                                    let ATLRows = new Map();
                                    for (let i = 0; i < ATLRows.size; i++) {
                                        let q = i + 1;
                                        let ATLColumnXpath = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_ATL_COLUMN_DATA);
                                        ATLColumnXpath = ATLColumnXpath.replace("TempValue", subHeaderName);
                                        ATLColumnXpath = ATLColumnXpath.replace("TempCount", "" + q);
                                        let ATLColumn = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(ATLColumnXpath);
                                        for (let j = 0; j < ATLColumn.length; j++) {
                                            ATLRows.set(await z_1.z.grabTextFrom(ATLHeader[j]), await z_1.z.grabTextFrom(ATLColumn[j]));
                                        }
                                        GlobalVariables_1.GlobalVariables.ATLData.set("MainRow" + GlobalVariables_1.GlobalVariables.ATLData.size, ATLRows);
                                    }
                                }
                                catch (error) {
                                    logger_1.logger.info("No Fields identified under - " + subHeaderName);
                                }
                            }
                        }
                        catch (error) {
                            logger_1.logger.info("No Fields identified under - " + subHeaderName);
                        }
                    }
                }
            }
            else {
                logger_1.logger.info("Sub Header is not an ATL   " + subHeaderName);
            }
        }
    }
    /**
     * To verify metadata and values in aurora contract details page
     * @param {Map<String, Map<String, String>>} subHeaderWithmetadataandValue
     * @return {boolean} flag
     * @author somnath.k
     */
    static async verifyMetadataandValueInContractDetails(contractDetailsData) {
        let flag = false;
        // await this.clickOnExpandorCollapseAllIcon();
        // await this.clickOnExpandorCollapseAllIcon();
        logger_1.logger.info("Test Data to verify in aurora", contractDetailsData);
        for (let mapEntry of contractDetailsData.entries()) {
            let subHeaderName = mapEntry[0];
            let metadataName = "";
            let metadataValue = "";
            mapEntry[1].forEach((metaValue, metaName) => {
                metadataValue = metaValue;
                metadataName = metaName;
            });
            subHeaderName = subHeaderName.split("_")[0];
            flag = await this.verifyMetadataandValueisAvailable(subHeaderName, metadataName, metadataValue);
            logger_1.logger.info("flag value inside verifyMetadataandValueInContractDetails", flag);
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
    static async verifyMetadataandValueinSync(metadataNamexpath, metadataValue, normalTextboxXpath, radioButtonXpath, dropdownnXpath) {
        let flag = false;
        await z_1.z.scrollIntoView(metadataNamexpath);
        if (await CommonComponent_1.CommonComponent.isEnabledByXpath(metadataNamexpath) && ((await CommonComponent_1.CommonComponent.getHtmlElementData(normalTextboxXpath) != null) || (await CommonComponent_1.CommonComponent.getHtmlElementData(normalTextboxXpath) != undefined))) {
            let uiMetadataValue = await CommonComponent_1.CommonComponent.getUITextUsingJavascript(normalTextboxXpath);
            logger_1.logger.info("**************Field type is input****************");
            logger_1.logger.info("old clm field value= " + metadataValue + " New aurora field value= " + uiMetadataValue);
            if ((await CommonComponent_1.CommonComponent.isEnabledByXpath(metadataNamexpath)) && (metadataValue == uiMetadataValue)) {
                flag = true;
            }
            else {
                flag = false;
            }
        }
        else if (await CommonComponent_1.CommonComponent.isEnabledByXpath(metadataNamexpath) && ((await CommonComponent_1.CommonComponent.getHtmlElementData(radioButtonXpath) != null) || (await CommonComponent_1.CommonComponent.getHtmlElementData(radioButtonXpath) != undefined))) {
            logger_1.logger.info("**************Field type is radio****************");
            logger_1.logger.info("old clm radio field value= " + metadataValue);
            if (metadataValue == "Yes") {
                if ((await CommonComponent_1.CommonComponent.isEnabledByXpath(radioButtonXpath))) {
                    flag = true;
                }
                else {
                    flag = false;
                }
            }
            else {
                if (await CommonComponent_1.CommonComponent.isEnabledByXpath(radioButtonXpath)) {
                    flag = true;
                }
                else {
                    flag = false;
                }
            }
        }
        else if (await CommonComponent_1.CommonComponent.isEnabledByXpath(metadataNamexpath) && ((await CommonComponent_1.CommonComponent.getHtmlElementData(dropdownnXpath) != null) || (await CommonComponent_1.CommonComponent.getHtmlElementData(dropdownnXpath) != undefined))) {
            let uiMetadataValue = await z_1.z.grabTextFrom(dropdownnXpath);
            uiMetadataValue = uiMetadataValue.replace("×", ""); //check if fails for blank
            metadataValue = metadataValue.replace("×", "");
            logger_1.logger.info("**************Field type is dropdown****************");
            logger_1.logger.info("old clm field value= " + metadataValue + " New aurora field value= " + uiMetadataValue);
            // if ((await CommonComponent.isEnabledByXpath(metadataNamexpath)) && (metadataValue.trim() === uiMetadataValue.trim())) {
            if ((await CommonComponent_1.CommonComponent.isEnabledByXpath(metadataNamexpath)) && (uiMetadataValue.includes(metadataValue))) {
                flag = true;
            }
            else {
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
    static async verifyMetadataandValueisAvailable(sunHeaderName, metadataName, metadataValue) {
        let flag = false;
        let subHeaderXpath = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_SUBHEADER_COMMON);
        let normalTextboxXpath = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_NORMAL_TEXTBOX_COMMON);
        let digitalContractMetadataXpath = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.MULTI_DYN_DIGITAL_CONTRACT_METADATA);
        let radioButtonXpath = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_RADIO_BUTTON_COMMON);
        let dropdownnXpath = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DNY_DROPDOWN_COMMON);
        let metadataNameXpath = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_METADATA_NAME_COMMON);
        subHeaderXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(sunHeaderName, subHeaderXpath);
        metadataNameXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(metadataName, metadataNameXpath);
        normalTextboxXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(metadataName, normalTextboxXpath);
        digitalContractMetadataXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(metadataName, digitalContractMetadataXpath);
        digitalContractMetadataXpath = digitalContractMetadataXpath.replace("Filename", metadataValue);
        radioButtonXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(metadataName, radioButtonXpath);
        dropdownnXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(metadataName, dropdownnXpath);
        await z_1.z.scrollIntoView(subHeaderXpath);
        await z_1.z.waitForVisible(subHeaderXpath);
        let metadataCount = await CommonComponent_1.CommonComponent.grabNumberElements(metadataNameXpath);
        let normalTextboxCount = await CommonComponent_1.CommonComponent.grabNumberElements(normalTextboxXpath);
        if (metadataName == "Digital Contract Document") {
            await z_1.z.scrollIntoView(metadataNameXpath);
            if (await CommonComponent_1.CommonComponent.isEnabledByXpath(metadataNameXpath) && await CommonComponent_1.CommonComponent.isEnabledByXpath(digitalContractMetadataXpath)) {
                let uiMetadataValue = await z_1.z.grabTextFrom(digitalContractMetadataXpath);
                if (await CommonComponent_1.CommonComponent.isEnabledByXpath(digitalContractMetadataXpath) && metadataValue == uiMetadataValue) {
                    flag = true;
                }
            }
        }
        else {
            if (metadataCount > 1 && normalTextboxCount > 1) {
                logger_1.logger.info("Metadata " + metadataName + "is having more matching so please validate it manually");
                flag = true;
            }
            else {
                flag = await this.verifyMetadataandValueinSync(metadataNameXpath, metadataValue, normalTextboxXpath, radioButtonXpath, dropdownnXpath);
                logger_1.logger.info("flag value inside verifyMetadataandValueisAvailable", flag);
            }
        }
        return flag;
    }
    /**
    * To verify uploaded document on UI
    * @param {string} uploadedFilename
    * @author somnath.k
    */
    static async verifyUploadedDocument(uploadedFilename) {
        let uiFilenamexpath = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.MULTI_DYN_DIGITAL_CONTRACT_METADATA);
        let digitalContractDocumentMetadataXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString("Digital Contract Document", await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_METADATA_NAME_COMMON));
        uiFilenamexpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString("Digital Contract Document", uiFilenamexpath);
        logger_1.logger.info("File name recieved" + uploadedFilename);
        uiFilenamexpath = uiFilenamexpath.replace("Filename", uploadedFilename);
        logger_1.logger.info("File name xpath formed" + uiFilenamexpath);
        await z_1.z.scrollIntoView(digitalContractDocumentMetadataXpath);
        await z_1.z.seeElement(uiFilenamexpath);
    }
    /**
    * To get particular value from contract detail data throug key value
    * @param {string} metadataName
    * @param {Map<String, Map<String, String>>} contractDetailsData
    * @return {String} metadataValue
    * @author somnath.k
    */
    static async getParticularMetadataValueFromContractDetailsData(metadataName, contractDetailsData) {
        let metadataValue = "";
        for (let mapEntry of contractDetailsData.entries()) {
            mapEntry[1].forEach((metaValue, metaName) => {
                if (metaName == metadataName) {
                    metadataValue = metaValue;
                }
            });
        }
        return metadataValue;
    }
    /**
    * To verify default value in document panel dropdown
    * @param {string} contractName
    * @return {boolean} actualValue
    * @author somnath.k
    */
    static async verifyDefaultValueinDocumentPanelDropdown(contractName) {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DOCUMENT_PANEL_DROPDOWN));
        let UIDropdownValue = await z_1.z.grabAttributeFrom(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DOCUMENT_DROPDOWN_FIRST_OPTION), "title");
        logger_1.logger.info("ui dropdown value***************************************************************", UIDropdownValue);
        // UIDropdownValue = UIDropdownValue.split(":")[1];
        GlobalVariables_1.GlobalVariables.defaultContractDocument = "";
        GlobalVariables_1.GlobalVariables.defaultContractDocument = UIDropdownValue[0].trim();
        let actualValue = contractName.trim() == UIDropdownValue[0].trim();
        return actualValue;
    }
    /**
    * To verify latest version value in document panel
    * @param {string} versionNumber
    * @return {boolean} actualValue
    * @author somnath.k
    */
    static async verifyLatestVersionNoinDocumentPanel(versionNumber) {
        await z_1.z.waitForVisible(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.VERSION_DROPDOWN_FIRST_OPTION));
        let UIDropdownValue = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DOCUMENT_PANEL_VERSION_DROPDOWN));
        GlobalVariables_1.GlobalVariables.defaultVersionNo = "";
        GlobalVariables_1.GlobalVariables.defaultVersionNo = UIDropdownValue;
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
    static async verifyLatestVersionNoCountinDocumentPanel(versionCount) {
        let uiVersionCount = await CommonComponent_1.CommonComponent.grabNumberElements(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DOCUMENT_PANEL_VERSION_DROPDOWN_LIST));
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
    static async verifyDocumentPreviewRetained(ContractDocument, versionNumber) {
        let documentPanelDropdownVal = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DOCUMENT_PANEL_DROPDOWN));
        let versionDropdownVal = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DOCUMENT_PANEL_VERSION_DROPDOWN));
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
        await z_1.z.waitForVisible(await AuroraLmt_1.AuroraLmt.getElement(await contractDetailsElements_1.contractDetailsElements.IS_CP_MANDTRY_CHECK_BOX));
        let isCpMandChckBx = await AuroraLmt_1.AuroraLmt.getElement(await contractDetailsElements_1.contractDetailsElements.IS_CP_MANDTRY_CHECK_BOX);
        let checkBoxStatus = await CommonComponent_1.CommonComponent.verifyCheckboxIsSelectedUsingJavascript(isCpMandChckBx);
        if (checkBoxStatus == false) {
            await z_1.z.click(isCpMandChckBx);
            await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.APP_SETTINGS_SAVE_BUTTON));
            await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.APP_SETTINGS_CONFRM_POPUP_PROCEED_BTN));
            await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.APP_SETTINGS_SUCCESS_OK_BUTTON));
        }
    }
    /**
    * To make is cp madatory to no
    *
    * @author sowmyashree
    */
    static async makeIsCpMandatoryNo() {
        await z_1.z.waitForVisible(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.IS_CP_MANDTRY_CHECK_BOX));
        let isCpMandChckBx = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.IS_CP_MANDTRY_CHECK_BOX);
        let checkBoxStatus = await CommonComponent_1.CommonComponent.verifyCheckboxIsSelectedUsingJavascript(isCpMandChckBx);
        if (checkBoxStatus == true) {
            await z_1.z.click(isCpMandChckBx);
            await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.APP_SETTINGS_SAVE_BUTTON));
            await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.APP_SETTINGS_CONFRM_POPUP_PROCEED_BTN));
            await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.APP_SETTINGS_SUCCESS_OK_BUTTON));
        }
    }
}
exports.ContractDetailsActions = ContractDetailsActions;
/*******************************************************Services Ends******************************************************/
