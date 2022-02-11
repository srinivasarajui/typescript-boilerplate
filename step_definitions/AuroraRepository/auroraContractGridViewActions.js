"use strict";
//Rule: classname should be ts file name with first letter as caps
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuroraContractGridViewActions = void 0;
const AuroraLmt_1 = require("../../common/Data/AuroraLmt");
const auroraContractGridViewElements_1 = require("./auroraContractGridViewElements");
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
class AuroraContractGridViewActions {
    /******************************************************Sub Services Starts******************************************************/
    /**
    * To Navigate with side navigation bar
    * @author Datta Ankalkar
    */
    static async navigateToContyractsPage(expectedTitle) {
        await z_1.z.wait(8);
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.CONTRACTS_NAVIGATION_LNK));
        await z_1.z.wait(5);
        let actualTitle = await z_1.z.grabTextFrom("//h1[@class='repoGridTitle ng-star-inserted']");
        if (actualTitle.includes(expectedTitle)) {
            logger_1.logger.info("Successfully navigated to " + expectedTitle + " page");
        }
    }
    static async checkClearFilterIconStatus(state) {
        let expectedState = await z_1.z.grabAttributeFrom(await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.CLEAR_FILTER_ICON), "class");
        logger_1.logger.info(expectedState);
        if (state == "true") {
            if (expectedState.includes("clearFilter filterValues")) {
                logger_1.logger.info("Clear Filter status is enabled as expected");
            }
            else {
                console.error("Clear Filter status is not as expected.");
            }
        }
        else if (state == "false") {
            if (expectedState.includes("clearFilter clearFilterdisabled")) {
                logger_1.logger.info("Clear Filter status is disabled as expected");
            }
            else {
                console.error("Clear Filter status is not as expected..");
            }
        }
    }
    static async checkHeaderIcon(label) {
        switch (label) {
            case "Hamburger icon":
                await z_1.z.seeElement("//div[@class='hamburger']");
                logger_1.logger.info("Hamburger icon is available on the Grid");
                break;
            case "Ultria Logo":
                await z_1.z.seeElement("//img[contains(@src,'logo')]");
                logger_1.logger.info("Ultria Logo is available on the Grid");
                break;
            case "Search Icon":
                await z_1.z.seeElement("//img[contains(@src,'search')]");
                logger_1.logger.info("Search Icon is available on the Grid");
                break;
            case "Notification Icon":
                await z_1.z.seeElement("//img[contains(@src,'Notification')]");
                logger_1.logger.info("Notification Icon is available on the Grid");
                break;
            case "User profile icon":
                await z_1.z.seeElement("//img[contains(@src,'user_with_bg')]");
                logger_1.logger.info("User profile icon is available on the Grid");
                break;
            case "Clear Filter icon":
                await z_1.z.seeElement("//div[contains(@class,'clearFilter')]");
                logger_1.logger.info("Clear Filter icon is available on the Grid");
                break;
            case "Customize grid icon":
                await z_1.z.seeElement("//div[contains(@class,'columnSelection')]");
                logger_1.logger.info("Customize grid icon for column selection is available on the Grid");
                break;
            case "Download icon":
                await z_1.z.seeElement("//div[contains(@class,'exportGrid')]");
                logger_1.logger.info("Download icon for exporting grid is available on the Grid");
                break;
            case "Upload button":
                await z_1.z.seeElement("//button[@label='Upload Contract']");
                logger_1.logger.info("Upload button is available on the Grid for Uploading contracts");
                break;
        }
    }
    static async clickOnGridIcons(element) {
        switch (element) {
            case "Hamburger icon":
                await z_1.z.click("//div[@class='hamburger']");
                logger_1.logger.info("Clicked on Hamburger icon available on the Grid");
                break;
            case "Search Icon":
                await z_1.z.click("//img[contains(@src,'search')]");
                logger_1.logger.info("Clicked on Search Icon available on the Grid");
                break;
            case "Notification Icon":
                await z_1.z.click("//img[contains(@src,'Notification')]");
                logger_1.logger.info("Clicked on Notification Icon available on the Grid");
                break;
            case "User profile icon":
                await z_1.z.click("//img[contains(@src,'user_with_bg')]");
                logger_1.logger.info("Clicked on User profile icon available on the Grid");
                break;
            case "Clear Filter icon":
                await z_1.z.click("//div[contains(@class,'clearFilter')]");
                logger_1.logger.info("Clicked on Clear Filter icon available on the Grid");
                break;
            case "Customize grid icon":
                await z_1.z.click("//div[contains(@class,'columnSelection')]");
                logger_1.logger.info("Clicked on Customize grid icon for column selection available on the Grid");
                break;
            case "Download icon":
                await z_1.z.click("//div[contains(@class,'exportGrid')]");
                logger_1.logger.info("Clicked on Download icon for exporting grid available on the Grid");
                break;
            case "Upload button":
                await z_1.z.click("//span[contains(text(),'Upload Contract')]");
                logger_1.logger.info("Clicked on Upload button available on the Grid for Uploading contracts");
                break;
        }
    }
    static async clickOnGridResetLink() {
        await z_1.z.click("//span[text()='Reset']");
    }
    static async checkCreateContractPageDisplayed() {
        await z_1.z.seeElement("//div[@class='ultria-create-contract-container disable-pointer-events']");
        logger_1.logger.info("Create Contract page is displayed");
    }
    static async CheckCustomizeGridPopup() {
        await z_1.z.seeElement("//h3[contains(text(),'Customize Grid')]");
        logger_1.logger.info("Customize Grid Popup is displayed");
    }
    static async checkOnlySelectedItemsShownOnGrid() {
        let selectedColumns = await z_1.z.grabTextFrom("//input[@aria-checked='true']/../../../..//span[@class='columnName']");
        await z_1.z.click("//span[text()='Cancel']");
        let shownColumnsOnGrid = await z_1.z.grabTextFrom("//span[@class='colHeaderTitle']");
        JSON.stringify(selectedColumns) === JSON.stringify(shownColumnsOnGrid);
        logger_1.logger.info("Selected columns are shown on grid as expected");
    }
    static async checkUnchecdItemsNotShownOnGrid() {
        let uncheckItems = await z_1.z.grabTextFrom("//input[@aria-checked='false']/../../../..//span[@class='columnName']");
        await z_1.z.click("//span[text()='Cancel']");
        let i;
        for (i = 0; i < uncheckItems.length; i++) {
            await z_1.z.dontSee(uncheckItems[i]);
            logger_1.logger.info(uncheckItems[i] + " is not available on Grid");
        }
    }
    static async checkGridHeaderTitle(header) {
        let actualTitle = await z_1.z.grabTextFrom("//h1[contains(@class,'repoGridTitle')]");
        await z_1.z.assertEqual(header, actualTitle);
        logger_1.logger.info("Header tilte is coming as expected");
    }
    static async filterColumnvalueWith(type, label, value) {
        //    await z.fillField("//span[@class='colHeaderTitle' and @title='Contract Number']/../../..//input[@placeholder='Search']",value);
        await z_1.z.fillField("//span[@class='colHeaderTitle' and @title='" + label + "']/../../..//input[@placeholder='" + type + "']", value);
        await z_1.z.pressKey("Enter");
        await z_1.z.wait(10);
    }
    static async CheckContractsGridView() {
        await z_1.z.wait(10);
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.AURORA_CONTRACTS_GRID_VIEW));
    }
    static async CheckContractNumIsALink() {
        let link = await z_1.z.grabAttributeFrom("//span/a/../../../td[contains(@class,'fieldLink')]", "href");
        if (link === null) {
            logger_1.logger.info("Contract number is not a link");
        }
        else {
            logger_1.logger.info("Contract number is a link");
        }
    }
    static async CheckContractHavingAmendment() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.AURORA_CONTRACT_WITH_AMENDMENT));
    }
    static async CheckAmendmentAttchementIcon() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.AURORA_CONTRACT_AMENDMENT_ICON));
    }
    static async clickFirstContractActionLink() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.AURORA_FIRST_CONTRACT_ACTION_LNK));
    }
    static async checkContractActionOption(label, actionOption) {
        let standardColumnlabelXpath = "";
        standardColumnlabelXpath = await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.DYN_GRID_CONTRACT_ACTION_OPTION);
        if (standardColumnlabelXpath.includes("TEMP_VALUE")) {
            standardColumnlabelXpath = standardColumnlabelXpath.replace("TEMP_VALUE", actionOption);
        }
        await z_1.z.seeElement(standardColumnlabelXpath);
        logger_1.logger.info(label + " option is available under Actions menu");
    }
    static async clickOnContractActionOption(label, actionOption) {
        let standardColumnlabelXpath = "";
        standardColumnlabelXpath = await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.DYN_GRID_CONTRACT_ACTION_OPTION);
        if (standardColumnlabelXpath.includes("TEMP_VALUE")) {
            standardColumnlabelXpath = standardColumnlabelXpath.replace("TEMP_VALUE", actionOption);
        }
        await z_1.z.click(standardColumnlabelXpath);
        logger_1.logger.info("Clicked on " + label + " option available under Actions menu");
    }
    static async clickOnAmendmentAttchementIcon() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.AURORA_CONTRACT_AMENDMENT_ICON));
    }
    static async checkGridColumnArrangement() {
        await z_1.z.wait(8);
        let headers = await z_1.z.grabNumberOfVisibleElements(await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.GRID_HEADERS));
        let i;
        for (i = 0; i < headers.length; i++) {
            logger_1.logger.info(headers[i]);
        }
    }
    static async dragAndDropGridCol() {
        let standardColumnlabelXpath = await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.GRID_HEADERS);
        let columns = await z_1.z.grabNumberOfVisibleElements(standardColumnlabelXpath);
        await z_1.z.moveCursorTo(columns[1]);
        await z_1.z.dragAndDrop(columns[1], columns[2]);
        logger_1.logger.info("Rearranged column1 and column2 Successfully");
    }
    static async checkSelectAllCheckboxOnGrid() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.SELECT_ALL_CHECKBOX_ON_GRID_VIEW));
    }
    static async checkGridTitleAndDescription() {
        let title = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.AURORA_REPOSITORY_GRID_TITLE));
        logger_1.logger.info("Title displayed on the grid is:" + title);
    }
    static async checkGridSelectorCell() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.AURORA_REPOSITORY_GRID_SELECTOR_CELLS));
    }
    static async checkColumnSortLNKForGridHeaders() {
        await z_1.z.wait(5);
        await z_1.z.waitForInvisible("//i[@class='p-datatable-loading-icon pi pi-spin pi-spinner']");
        logger_1.logger.info("first");
        await z_1.z.moveCursorTo("//span[@class='colHeaderTitle' and @title='Contract Title']");
        logger_1.logger.info("Hovered");
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.AURORA_REPOSITORY_GRID_HEADER_SORT_LNK));
    }
    static async clickOnFirstContractNumberFromGrid() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.AURORA_GRID_FIRST_CONTRACT_NUMBER));
        await z_1.z.wait(5);
    }
    static async checkStandardColumnOnGridView(label, status) {
        let standardColumnlabelXpath = "";
        if (status == "true") {
            standardColumnlabelXpath = await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.DYN_GRID_HEADER_LABEL);
            if (standardColumnlabelXpath.includes("TEMP_VALUE")) {
                standardColumnlabelXpath = standardColumnlabelXpath.replace("TEMP_VALUE", label);
            }
            await z_1.z.scrollIntoView(standardColumnlabelXpath, { behavior: "auto", block: "center", inline: "center" });
            await z_1.z.seeElement(standardColumnlabelXpath);
            logger_1.logger.info("A column with header: " + label + " is available on Grid");
        }
        else {
            standardColumnlabelXpath = await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.DYN_GRID_HEADER_LABEL);
            if (standardColumnlabelXpath.includes("TEMP_VALUE")) {
                standardColumnlabelXpath = standardColumnlabelXpath.replace("TEMP_VALUE", label);
            }
            await z_1.z.dontSeeElement(standardColumnlabelXpath);
            logger_1.logger.info("A column with header: " + label + " is not available on Grid");
        }
    }
    static async checkAndAddColumnToGridView(column) {
        // await z.checkOption("//input[@value='"+column+"']");
        // logger.info("A column with header: "+column+" is added to the Grid");
        // await z.wait(25);
        await z_1.z.scrollIntoView("//input[@value='" + column + "']", { behavior: "auto", block: "center", inline: "center" });
        let status = await I.grabAttributeFrom("//input[@value='" + column + "']", "aria-checked");
        console.log("test" + status);
        if (status == "true") {
            logger_1.logger.info("A column with header: " + column + " is already configured for Grid");
            await z_1.z.click("//button[@label='Cancel']");
        }
        else if (status == "false") {
            await z_1.z.click("//span[@class='columnName' and text()='" + column + "']/../p-checkbox//div[contains(@class,'component')]");
            await z_1.z.click("//button[@label='Save']");
            await z_1.z.wait(15);
            logger_1.logger.info("A column with header: " + column + " is added to the Grid");
        }
    }
    static async checkStandardColumnAlignmentOnGridView(label, alignment) {
        let standardColumnlabelXpath = "";
        if (alignment == "left") {
            standardColumnlabelXpath = await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.GRID_HEADERS);
            let columns = await z_1.z.grabAttributeFrom(standardColumnlabelXpath, "title");
            if (columns[0] == label) {
                console.log(label + " is left aligned");
            }
            else {
                console.log(label + " is not left aligned");
            }
        }
        else if (alignment == "right") {
            standardColumnlabelXpath = await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.GRID_HEADERS);
            let columns = await z_1.z.grabAttributeFrom(standardColumnlabelXpath, "title");
            console.log("test: " + columns[columns.length - 1]);
            if (columns[columns.length - 1] == label) {
                console.log(label + " is right aligned");
            }
            else {
                console.log(label + " is not right aligned");
            }
        }
    }
    static async checkFormat(label) {
        let labelFormatXpath = await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.DYN_LABEL_FORMAT);
        if (labelFormatXpath.includes("TEMP_VALUE")) {
            labelFormatXpath.replace("TEMP_VALUE", label);
        }
        let labelFormat = await z_1.z.grabTextFrom(labelFormatXpath);
        //Write logic to compare label value format
    }
    static async checkGridSearchboxForColumn(label) {
        await z_1.z.seeElement("//span[@class='colHeaderTitle' and @title='" + label + "']/../../..//input[@placeholder='Search']");
        // let searchboxXpath:string=await AuroraLmt.getElement(auroraContractGridViewElements.DYN_GRID_COLUMN_SEARCHBOX);
        // if(searchboxXpath.includes("TEMP_VALUE")){
        //     searchboxXpath.replace("TEMP_VALUE",searchbox);
        // }
        // let labelFormat=await z.seeElement(searchboxXpath);
    }
    static async checkGridDropDownForColumn(label) {
        await z_1.z.seeElement("//span[@class='colHeaderTitle' and @title='Contract Source']/../../..//div[contains(@class,'p-dropdown p-component p-dropdown-clearable')]");
        // let dropdownXpath:string=await AuroraLmt.getElement(auroraContractGridViewElements.DYN_GRID_COLUMN_DROPDOWN_FILTER);
        // if(dropdownXpath.includes("TEMP_VALUE")){
        //     dropdownXpath.replace("TEMP_VALUE",label);
        // }
        // let labelFormat=await z.seeElement(dropdownXpath);
    }
    // static async CheckPrimaryCPValueForContractingPartyColumn() {
    //     await z.seeElement(await AuroraLmt.getElement(auroraContractGridViewElements.PRIMARY_CP_LABEL_ON_GRID));
    // }
    static async CheckCPLinkForSecondaryCPs() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.CP_LINK));
    }
    static async CheckPrimaryCPsUnderPopover() {
        let primaryCPXpath = await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.PRIMARY_CP_LABEL);
        await z_1.z.seeElement(primaryCPXpath);
        let primaryCP = await z_1.z.grabTextFrom(primaryCPXpath);
        logger_1.logger.info("Primary CP:" + primaryCP);
    }
    static async CheckSecondaryCPsUnderPopover() {
        // let secondaryCPXpath:string=await AuroraLmt.getElement(auroraContractGridViewElements.SECONDARY_CP_LIST);
        // await z.seeElement(secondaryCPXpath);
        // let secondaryCP=await z.grabTextFrom(secondaryCPXpath);
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.CP_LINK));
        let secondaryCP = await z_1.z.grabTextFrom("//div[@class='contract-name subCPList']");
        logger_1.logger.info("Secondary CPs:");
        logger_1.logger.info(secondaryCP);
    }
    static async checkMoreBUsUnderPopover() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.MORE_BU_LIST));
        let bUs = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.MORE_BU_LIST));
        logger_1.logger.info("Bu list is:");
        logger_1.logger.info(bUs);
    }
    static async CheckBULink() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.BU_LINK));
    }
    static async ClickOnCPLinkForAllCPs() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.CP_LINK));
    }
    static async ClickOnBULink() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.BU_LINK));
    }
    static async CheckPopoverForSecondaryCPs() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(auroraContractGridViewElements_1.auroraContractGridViewElements.CP_POPOVER));
    }
}
exports.AuroraContractGridViewActions = AuroraContractGridViewActions;
/*******************************************************Services Ends******************************************************/
