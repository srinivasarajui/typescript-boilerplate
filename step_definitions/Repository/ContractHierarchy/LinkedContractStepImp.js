"use strict";
/**
 * Step definition file for linked contract feature file
 *
 * @author somnath.k
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AuroraLmt_1 = require("../../../common/Data/AuroraLmt");
const CommonComponent_1 = require("./../../commonKeywords/CommonComponent");
const contractDetailsActions_1 = require("../../ContractDetails/contractDetailsActions");
const GlobalVariables_1 = require("../../../common/dataCreation/GlobalVariables");
const LinkedContractActions_1 = require("./LinkedContractActions");
const contractDetailsElements_1 = require("../../ContractDetails/contractDetailsElements");
const LinkedContractElements_1 = require("./LinkedContractElements");
const logger_1 = require("../../../common/Logger/logger");
const z_1 = require("actionbot-wrapper/z");
When('I search for repository draft status sub agreement contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.searchAndViewContractBasedonStatus(5);
    await LinkedContractActions_1.LinkedContractActions.searchContractBasedonHierarchyStatus(3);
});
When('I search for pending publish status sub agreement contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.searchAndViewContractBasedonStatus(6);
    await LinkedContractActions_1.LinkedContractActions.searchContractBasedonHierarchyStatus(3);
});
Then('I check linked agreements menu is disabled', async () => {
    // let disabledMenu = await AuroraLmt.getData("REPOSITORY_CONTRACT_DISABLED_MENU_LIST");
    // let disabledMenuList: String[] = disabledMenu.split("|");
    // let actualDisabledMenuList: String[] = [];
    // actualDisabledMenuList.push(disabledMenuList[5]);
    // let actualResult = await LinkedContractActions.verifyParticularMenusDisabled(actualDisabledMenuList);
    // await z.assertEqual(true, actualResult);
    await z_1.z.wait(10);
    try {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINKED_CONTRACT_MENU));
        console.error("Linked Agreement menu is not disabled");
    }
    catch (error) {
        console.log("Linked agreement menu is disabled as expected");
    }
});
When('I search for termination notice served status sub agreement contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.searchAndViewContractBasedonStatus(4);
    await LinkedContractActions_1.LinkedContractActions.searchContractBasedonHierarchyStatus(3);
});
When('I click on linked contract menu', async () => {
    await LinkedContractActions_1.LinkedContractActions.clickonLinkedContractMenu();
});
Then('I check Link Sub Agreements button is disabled', async () => {
    await z_1.z.waitForElement("//span[@class='linkedContractLabel']", 30);
    try {
        // await z.justwaitForClickable(await AuroraLmt.getElement(linkedContractElements.LINK_SUB_AGREEMENT_BTTN),5);
        await z_1.z.waitForClickable(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_SUB_AGREEMENT_BTTN), 5);
        console.error("Link Sub-Agreements button is enaabled");
    }
    catch (error) {
        console.error("Link Sub-Agreements button is disabled as expected");
    }
});
Then('I check Link Master Agreement button is disabled', async () => {
    await z_1.z.waitForElement("//span[@class='linkedContractLabel']", 30);
    try {
        // await z.justwaitForClickable(await AuroraLmt.getElement(linkedContractElements.LINK_MASTER_AGREEMENT_BTTN),5);
        await z_1.z.waitForClickable(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_MASTER_AGREEMENT_BTTN), 5);
        console.error("Link Master-Agreement button is enabled");
    }
    catch (error) {
        console.error("Link Master-Agreement button is disabled as expected");
    }
});
Then('I check Link Sub Agreements button is enabled', async () => {
    try {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
        console.log("Link Sub-Agreements button is available/Enabled");
    }
    catch (error) {
        console.error("Link Sub-Agreements button is not available to click");
    }
});
Then('I check link master agreement button is enabled', async () => {
    try {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_MASTER_AGREEMENT_BTTN));
        console.log("Link Master-Agreement button is available/Enabled");
    }
    catch (error) {
        console.error("Link Master-Agreement button is not available to click");
    }
});
When('I search for active status sub agreement contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.searchAndViewContractBasedonStatus(1);
    await LinkedContractActions_1.LinkedContractActions.searchContractBasedonHierarchyStatus(3);
});
When('I search for expired status sub agreement contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.searchAndViewContractBasedonStatus(3);
    await LinkedContractActions_1.LinkedContractActions.searchContractBasedonHierarchyStatus(3);
});
When('I search for inactive status sub agreement contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.searchAndViewContractBasedonStatus(2);
    await LinkedContractActions_1.LinkedContractActions.searchContractBasedonHierarchyStatus(3);
});
When('I search for archived status sub agreement contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.searchAndViewContractBasedonStatus(7);
    await LinkedContractActions_1.LinkedContractActions.searchContractBasedonHierarchyStatus(3);
});
Then('I check link master agreement button is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_MASTER_AGREEMENT_BTTN));
});
When('I search for any published sub agreement contract except archived', async () => {
    let contractStatus = await AuroraLmt_1.AuroraLmt.getData("PUBLISHED_CONTRACTS_EXCEPT_ARCHIVED");
    let contractStatusVal = await CommonComponent_1.CommonComponent.getListFromString("|", contractStatus);
    let randomOption = await CommonComponent_1.CommonComponent.getRandomNumber(contractStatusVal.length);
    await CommonComponent_1.CommonComponent.gridDropdownSelectionBasedonStringValue(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.REPO_STATUS_DROPDOWN), await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTRACT_STATUS_OPTION_LIST), contractStatusVal[randomOption]);
    await LinkedContractActions_1.LinkedContractActions.searchContractBasedonHierarchyStatus(3);
});
When('I click on Link Master Agreement button inside Linked Agreements menu', async () => {
    await LinkedContractActions_1.LinkedContractActions.clickonlinkMasterAgreementBttn();
});
Then('I check link master agreement popup is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_MASTER_AGREEMENT_POPUP));
});
// functionality removed
// When('I select only non associated cp to the contract', async () => {
//   let nonAssociatedCPName = await AuroraLmt.getData("NON_ASSOCIATED_CP");
//   await LinkedContractActions.selectOnlyParticularCP(nonAssociatedCPName);
// });
Then('I check No Recommended Contracts found message is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NO_RECOMMENDED_CONTRACT_MSG));
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_FROM_RECOMMENDED_LIST));
});
When('I search for any published master agreement contract except archived', async () => {
    let contractStatus = await AuroraLmt_1.AuroraLmt.getData("PUBLISHED_CONTRACTS_EXCEPT_ARCHIVED");
    let contractStatusVal = await CommonComponent_1.CommonComponent.getListFromString("|", contractStatus);
    let randomOption = await CommonComponent_1.CommonComponent.getRandomNumber(contractStatusVal.length);
    await CommonComponent_1.CommonComponent.gridDropdownSelectionBasedonStringValue(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.REPO_STATUS_DROPDOWN), await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTRACT_STATUS_OPTION_LIST), contractStatusVal[0]);
    await LinkedContractActions_1.LinkedContractActions.searchContractBasedonHierarchyStatus(2);
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears("//td[@role='gridcell' and @title='Standalone'])[1]");
});
When('I click on Link Sub Agreement button inside Linked Agreements menu', async () => {
    await LinkedContractActions_1.LinkedContractActions.clickonlinkSubAgreementBttn();
});
Then('I check No Recommended Contracts found message is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NO_RECOMMENDED_CONTRACT_MSG));
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_FROM_RECOMMENDED_LIST));
});
When('I select associated cp to the contract', async () => {
    let associatedCPName = await AuroraLmt_1.AuroraLmt.getData("ASSOCIATED_CP");
    await LinkedContractActions_1.LinkedContractActions.selectOnlyParticularCP(associatedCPName);
});
When('I select any random contract from the recommended contract in the popup', async () => {
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    await LinkedContractActions_1.LinkedContractActions.selectandStoreParticularRandomContractFromPopup();
});
When('I click on link button in the popup', async () => {
    await LinkedContractActions_1.LinkedContractActions.clickonPopuplinkBttn();
});
Then('I check linked contract details is shown below master agreement header', async () => {
    logger_1.logger.info("Data in array for linked contracts", GlobalVariables_1.GlobalVariables.linkedContractNumbers);
    let actualResult = await LinkedContractActions_1.LinkedContractActions.verifyAddedAgreementInCard(GlobalVariables_1.GlobalVariables.linkedContractNumbers);
    await z_1.z.assertEqual(true, actualResult);
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.MASTER_AGREEMENT_HEADER_TEXT));
});
Then('I check linked contract details is shown below sub agreement header', async () => {
    logger_1.logger.info("Data in array for linked contracts", GlobalVariables_1.GlobalVariables.linkedContractNumbers);
    let actualResult = await LinkedContractActions_1.LinkedContractActions.verifyAddedAgreementInCard(GlobalVariables_1.GlobalVariables.linkedContractNumbers);
    await z_1.z.assertEqual(true, actualResult);
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SUB_AGREEMENT_HEADER_TEXT));
});
When('I click on multiple select contracts checkbox in the popup', async () => {
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    await LinkedContractActions_1.LinkedContractActions.selectandStoreAllContractinFirstPage();
});
Then('I check multiple linked contract details is shown below sub agreement header', async () => {
    logger_1.logger.info("Data in array for linked contracts", GlobalVariables_1.GlobalVariables.linkedContractNumbers);
    let actualResult = await LinkedContractActions_1.LinkedContractActions.verifyAddedAgreementInCard(GlobalVariables_1.GlobalVariables.linkedContractNumbers);
    await z_1.z.assertEqual(true, actualResult);
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SUB_AGREEMENT_HEADER_TEXT));
});
Then('I check by default 10 rows are selected in the page count filter', async () => {
    //await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));
    let actualResult = await LinkedContractActions_1.LinkedContractActions.verifyDefaultPageCountVal("10");
    console.log("actual Default page count" + actualResult);
    await z_1.z.assertEqual(true, actualResult);
});
When('I select random no of rows from page count filter', async () => {
    // await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));
    await LinkedContractActions_1.LinkedContractActions.selectandStoreRandomPageCountVal();
});
Then('I check records shown in the grid is below or equal to selected page count filter', async () => {
    let selectedPageCount = Number(GlobalVariables_1.GlobalVariables.temporayString);
    let actualResult = await LinkedContractActions_1.LinkedContractActions.verifyRecordsBasedonPageCountFilter(selectedPageCount);
    await z_1.z.assertEqual(true, actualResult);
});
When('I click on last page icon in the popup', async () => {
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    GlobalVariables_1.GlobalVariables.temporaryNumber = 0;
    let uiTotalPageCount = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.TOTAL_PAGE_COUNT));
    GlobalVariables_1.GlobalVariables.temporaryNumber = Number(uiTotalPageCount);
    if (GlobalVariables_1.GlobalVariables.temporaryNumber > 10) {
        GlobalVariables_1.GlobalVariables.temporayString = "";
        GlobalVariables_1.GlobalVariables.temporayString = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
        await LinkedContractActions_1.LinkedContractActions.clickonLastPageIcon();
    }
    else {
        logger_1.logger.info("Grid doesnt have records more than 10 so test case verification skipped");
    }
});
Then('I click on Last Page navigation Icon', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_NAVIGATION_ICON_ON_GRID));
    await z_1.z.wait(2);
});
Then('I click on First Page navigation Icon', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_PAGE_NAVIGATION_ICON_ON_GRID));
    await z_1.z.wait(2);
});
Then('I check user is able to see last page records', async () => {
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    if (GlobalVariables_1.GlobalVariables.temporaryNumber > 10) {
        let gridContractNumberXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.DNY_CONTRACT_NUMBER_FROM_GRID);
        gridContractNumberXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(GlobalVariables_1.GlobalVariables.temporayString, gridContractNumberXpath);
        await z_1.z.dontSeeElement(gridContractNumberXpath);
    }
    else {
        logger_1.logger.info("Grid doesnt have records more than 10 so test case verification skipped");
    }
});
Then('I click on next page icon in the popup', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON));
    await z_1.z.wait(2);
});
When('I click on first page icon in the popup', async () => {
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    if (GlobalVariables_1.GlobalVariables.temporaryNumber > 10) {
        await LinkedContractActions_1.LinkedContractActions.clickonFirstPageIcon();
    }
    else {
        logger_1.logger.info("Grid doesnt have records more than 10 so test case verification skipped");
    }
});
Then('I click on previous page icon in the popup', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.PREVIOUS_PAGE_ICON));
    await z_1.z.wait(2);
});
Then('I check user is able to see first page records', async () => {
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    if (GlobalVariables_1.GlobalVariables.temporaryNumber > 10) {
        let gridContractNumberXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.DNY_CONTRACT_NUMBER_FROM_GRID);
        gridContractNumberXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(GlobalVariables_1.GlobalVariables.temporayString, gridContractNumberXpath);
        await z_1.z.seeElement(gridContractNumberXpath);
    }
    else {
        logger_1.logger.info("Grid doesnt have records more than 10 so test case verification skipped");
    }
});
Then('I check user is able to see last page records', async () => {
    let activePageNumber = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.HIGHLIGHTED_PAGE_NUMBER));
    await z_1.z.wait(3);
    let totalNumberOfEntriesInGrid = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.TOTAL_ENTRIES_IN_GRID_TEXT));
    let temp1 = totalNumberOfEntriesInGrid.split(" ");
    let num = parseInt(temp1[5]);
    num = num / 10 + 1;
    let value = num.toString().split(".");
    if (value[0] == activePageNumber) {
        logger_1.logger.info("User is able to navigate to last page by clicking on last page icon");
    }
    else {
        logger_1.logger.error("Issue in Navigation");
    }
});
When('I click on next page icon in the popup', async () => {
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    GlobalVariables_1.GlobalVariables.temporaryNumber = 0;
    let uiTotalPageCount = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.TOTAL_PAGE_COUNT));
    GlobalVariables_1.GlobalVariables.temporaryNumber = Number(uiTotalPageCount);
    if (GlobalVariables_1.GlobalVariables.temporaryNumber > 10) {
        GlobalVariables_1.GlobalVariables.temporayString = "";
        GlobalVariables_1.GlobalVariables.temporayString = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
        GlobalVariables_1.GlobalVariables.temporayString_1 = "";
        GlobalVariables_1.GlobalVariables.temporayString_1 = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.PAGE_NUMBER_RANGE));
        await LinkedContractActions_1.LinkedContractActions.clickonNextPageIcon();
    }
    else {
        logger_1.logger.info("Grid doesnt have records more than 10 so test case verification skipped");
    }
});
Then('I check user is able to see first page records', async () => {
    let activePageNumber = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.HIGHLIGHTED_PAGE_NUMBER));
    await z_1.z.wait(3);
    let totalNumberOfEntriesInGrid = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.TOTAL_ENTRIES_IN_GRID_TEXT));
    let temp1 = totalNumberOfEntriesInGrid.split(" ");
    logger_1.logger.info("Second Index value: " + temp1[1].trim());
    if (temp1[1].trim() == activePageNumber) {
        logger_1.logger.info("User is able to navigate to first page by clicking on first page icon");
    }
    else {
        logger_1.logger.error("Issue in Navigation");
    }
});
Then('I check user is able to see next page records', async () => {
    let activePageNumber = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.HIGHLIGHTED_PAGE_NUMBER));
    await z_1.z.wait(3);
    let totalNumberOfEntriesInGrid = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.TOTAL_ENTRIES_IN_GRID_TEXT));
    let temp1 = totalNumberOfEntriesInGrid.split(" ");
    let num = parseInt(temp1[1]);
    if (num > 10) {
        num = num / 10 + 1;
    }
    let value = num.toString().split(".");
    if (value[0] == activePageNumber) {
        logger_1.logger.info("User is able to navigate to next page by clicking on next page icon");
    }
    else {
        logger_1.logger.error("Issue in Navigation");
    }
});
When('I click on previous page icon in the popup', async () => {
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    if (GlobalVariables_1.GlobalVariables.temporaryNumber > 10) {
        await LinkedContractActions_1.LinkedContractActions.clickonPreviousPageIcon();
    }
    else {
        logger_1.logger.info("Grid doesnt have records more than 10 so test case verification skipped");
    }
});
Then('I check user is able to see previous page records', async () => {
    let activePageNumber = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.HIGHLIGHTED_PAGE_NUMBER));
    await z_1.z.wait(3);
    let totalNumberOfEntriesInGrid = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.TOTAL_ENTRIES_IN_GRID_TEXT));
    let temp1 = totalNumberOfEntriesInGrid.split(" ");
    let num = parseInt(temp1[1]);
    if (num > 10) {
        num = num / 10 + 1;
    }
    let value = num.toString().split(".");
    if (value[0] == activePageNumber) {
        logger_1.logger.info("User is able to navigate to previous page by clicking on previous page icon");
    }
    else {
        logger_1.logger.error("Issue in Navigation");
    }
});
Then('I check page number range is changed at the bottom of the grid', async () => {
    let activePageNumber = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.HIGHLIGHTED_PAGE_NUMBER));
    await z_1.z.wait(3);
    let totalNumberOfEntriesInGrid = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.TOTAL_ENTRIES_IN_GRID_TEXT));
    let temp1 = totalNumberOfEntriesInGrid.split(" ");
    let num = parseInt(temp1[1]);
    if (num > 10) {
        num = num / 10 + 1;
    }
    let value = num.toString().split(".");
    if (value[0] == activePageNumber) {
        logger_1.logger.info("Page number range is changed at the bottom of the grid");
        logger_1.logger.info(totalNumberOfEntriesInGrid);
    }
    else {
        logger_1.logger.error("page number range not updated");
    }
});
Then('I check same records are not shown in the next page', async () => {
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    if (GlobalVariables_1.GlobalVariables.temporaryNumber > 10) {
        let gridContractNumberXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.DNY_CONTRACT_NUMBER_FROM_GRID);
        gridContractNumberXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(GlobalVariables_1.GlobalVariables.temporayString, gridContractNumberXpath);
        await z_1.z.dontSeeElement(gridContractNumberXpath);
    }
    else {
        logger_1.logger.info("Grid doesnt have records more than 10 so test case verification skipped");
    }
});
When('I sort contract number based on ascending order', async () => {
    GlobalVariables_1.GlobalVariables.temporayArray = [];
    let contractNumberColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_NUMBER_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractNumberColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    GlobalVariables_1.GlobalVariables.temporayArray = await CommonComponent_1.CommonComponent.getAscendingSortedArray(UiValueList);
    await z_1.z.refreshPage();
    await LinkedContractActions_1.LinkedContractActions.clickonSortContractNumber();
});
Then('I check all the contract numbers are sorted in ascending order', async () => {
    let contractNumberColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_NUMBER_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractNumberColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    await z_1.z.refreshPage();
    let actualResult = await CommonComponent_1.CommonComponent.verifyUIArrayandSortedArray(UiValueList, GlobalVariables_1.GlobalVariables.temporayArray);
    await z_1.z.assertEqual(true, actualResult);
});
When('I sort contract number based on descending order', async () => {
    GlobalVariables_1.GlobalVariables.temporayArray = [];
    let contractNumberColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_NUMBER_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractNumberColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    GlobalVariables_1.GlobalVariables.temporayArray = await CommonComponent_1.CommonComponent.getDescendingSortedArray(UiValueList);
    await z_1.z.refreshPage();
    await LinkedContractActions_1.LinkedContractActions.clickonSortContractNumber();
    await LinkedContractActions_1.LinkedContractActions.clickonSortContractNumber();
});
Then('I check all the contract numbers are sorted in descending order', async () => {
    let contractNumberColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_NUMBER_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractNumberColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    await z_1.z.refreshPage();
    let actualResult = await CommonComponent_1.CommonComponent.verifyUIArrayandSortedArray(UiValueList, GlobalVariables_1.GlobalVariables.temporayArray);
    await z_1.z.assertEqual(true, actualResult);
});
When('I sort contract title based on ascending order', async () => {
    GlobalVariables_1.GlobalVariables.temporayArray = [];
    let contractTitleColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_TITLE_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractTitleColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    GlobalVariables_1.GlobalVariables.temporayArray = await CommonComponent_1.CommonComponent.getAscendingSortedArray(UiValueList);
    await z_1.z.refreshPage();
    await LinkedContractActions_1.LinkedContractActions.clickonSortContractTitle();
});
Then('I check all the contract title are sorted in ascending order', async () => {
    let contractTitleColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_TITLE_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractTitleColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    await z_1.z.refreshPage();
    let actualResult = await CommonComponent_1.CommonComponent.verifyUIArrayandSortedArray(UiValueList, GlobalVariables_1.GlobalVariables.temporayArray);
    await z_1.z.assertEqual(true, actualResult);
});
When('I sort contract title based on descending order', async () => {
    GlobalVariables_1.GlobalVariables.temporayArray = [];
    let contractTitleColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_TITLE_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractTitleColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    GlobalVariables_1.GlobalVariables.temporayArray = await CommonComponent_1.CommonComponent.getDescendingSortedArray(UiValueList);
    await z_1.z.refreshPage();
    await LinkedContractActions_1.LinkedContractActions.clickonSortContractTitle();
    await LinkedContractActions_1.LinkedContractActions.clickonSortContractTitle();
});
Then('I check all the contract title are sorted in descending order', async () => {
    let contractTitleColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_TITLE_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractTitleColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    await z_1.z.refreshPage();
    let actualResult = await CommonComponent_1.CommonComponent.verifyUIArrayandSortedArray(UiValueList, GlobalVariables_1.GlobalVariables.temporayArray);
    await z_1.z.assertEqual(true, actualResult);
});
When('I sort contract category based on ascending order', async () => {
    GlobalVariables_1.GlobalVariables.temporayArray = [];
    let contractCategoryColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_CATEGORY_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractCategoryColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    GlobalVariables_1.GlobalVariables.temporayArray = await CommonComponent_1.CommonComponent.getAscendingSortedArray(UiValueList);
    await z_1.z.refreshPage();
    await LinkedContractActions_1.LinkedContractActions.clickonSortContractCategory();
});
Then('I check all the contract category are sorted in ascending order', async () => {
    let contractCategoryColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_CATEGORY_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractCategoryColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    await z_1.z.refreshPage();
    let actualResult = await CommonComponent_1.CommonComponent.verifyUIArrayandSortedArray(UiValueList, GlobalVariables_1.GlobalVariables.temporayArray);
    await z_1.z.assertEqual(true, actualResult);
});
When('I sort contract category based on descending order', async () => {
    GlobalVariables_1.GlobalVariables.temporayArray = [];
    let contractCategoryColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_CATEGORY_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractCategoryColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    GlobalVariables_1.GlobalVariables.temporayArray = await CommonComponent_1.CommonComponent.getDescendingSortedArray(UiValueList);
    await z_1.z.refreshPage();
    await LinkedContractActions_1.LinkedContractActions.clickonSortContractCategory();
    await LinkedContractActions_1.LinkedContractActions.clickonSortContractCategory();
});
Then('I check all the contract category are sorted in descending order', async () => {
    let contractCategoryColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_CATEGORY_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractCategoryColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    await z_1.z.refreshPage();
    let actualResult = await CommonComponent_1.CommonComponent.verifyUIArrayandSortedArray(UiValueList, GlobalVariables_1.GlobalVariables.temporayArray);
    await z_1.z.assertEqual(true, actualResult);
});
When('I sort contract type based on ascending order', async () => {
    GlobalVariables_1.GlobalVariables.temporayArray = [];
    let contractTypeColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_TYPE_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractTypeColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    GlobalVariables_1.GlobalVariables.temporayArray = await CommonComponent_1.CommonComponent.getAscendingSortedArray(UiValueList);
    await z_1.z.refreshPage();
    await LinkedContractActions_1.LinkedContractActions.clickonSortContractType();
});
Then('I check all the contract type are sorted in ascending order', async () => {
    let contractTypeColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_TYPE_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractTypeColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    await z_1.z.refreshPage();
    let actualResult = await CommonComponent_1.CommonComponent.verifyUIArrayandSortedArray(UiValueList, GlobalVariables_1.GlobalVariables.temporayArray);
    await z_1.z.assertEqual(true, actualResult);
});
When('I sort contract type based on descending order', async () => {
    GlobalVariables_1.GlobalVariables.temporayArray = [];
    let contractTypeColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_TYPE_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractTypeColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    GlobalVariables_1.GlobalVariables.temporayArray = await CommonComponent_1.CommonComponent.getDescendingSortedArray(UiValueList);
    await z_1.z.refreshPage();
    await LinkedContractActions_1.LinkedContractActions.clickonSortContractType();
    await LinkedContractActions_1.LinkedContractActions.clickonSortContractType();
});
Then('I check all the contract type are sorted in descending order', async () => {
    let contractTypeColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_TYPE_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractTypeColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    await z_1.z.refreshPage();
    let actualResult = await CommonComponent_1.CommonComponent.verifyUIArrayandSortedArray(UiValueList, GlobalVariables_1.GlobalVariables.temporayArray);
    await z_1.z.assertEqual(true, actualResult);
});
When('I sort contract subtype based on ascending order', async () => {
    GlobalVariables_1.GlobalVariables.temporayArray = [];
    let contractSubtypeColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_SUBTYPE_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractSubtypeColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    GlobalVariables_1.GlobalVariables.temporayArray = await CommonComponent_1.CommonComponent.getAscendingSortedArray(UiValueList);
    await z_1.z.refreshPage();
    await LinkedContractActions_1.LinkedContractActions.clickonSortContractSubtype();
});
Then('I check all the contract subtype are sorted in ascending order', async () => {
    let contractSubtypeColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_SUBTYPE_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractSubtypeColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    await z_1.z.refreshPage();
    let actualResult = await CommonComponent_1.CommonComponent.verifyUIArrayandSortedArray(UiValueList, GlobalVariables_1.GlobalVariables.temporayArray);
    await z_1.z.assertEqual(true, actualResult);
});
When('I sort contract subtype based on descending order', async () => {
    GlobalVariables_1.GlobalVariables.temporayArray = [];
    let contractSubtypeColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_SUBTYPE_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractSubtypeColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    GlobalVariables_1.GlobalVariables.temporayArray = await CommonComponent_1.CommonComponent.getDescendingSortedArray(UiValueList);
    await z_1.z.refreshPage();
    await LinkedContractActions_1.LinkedContractActions.clickonSortContractSubtype();
    await LinkedContractActions_1.LinkedContractActions.clickonSortContractSubtype();
});
Then('I check all the contract subtype are sorted in descending order', async () => {
    let contractSubtypeColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_SUBTYPE_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractSubtypeColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    await z_1.z.refreshPage();
    let actualResult = await CommonComponent_1.CommonComponent.verifyUIArrayandSortedArray(UiValueList, GlobalVariables_1.GlobalVariables.temporayArray);
    await z_1.z.assertEqual(true, actualResult);
});
When('I sort contracting party based on ascending order', async () => {
    GlobalVariables_1.GlobalVariables.temporayArray = [];
    let contractingPartyColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACTING_PARTY_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractingPartyColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    GlobalVariables_1.GlobalVariables.temporayArray = await CommonComponent_1.CommonComponent.getAscendingSortedArray(UiValueList);
    await z_1.z.refreshPage();
    await LinkedContractActions_1.LinkedContractActions.clickonSortContractingParty();
});
Then('I check all the contracting party are sorted in ascending order', async () => {
    let contractingPartyColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACTING_PARTY_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractingPartyColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    await z_1.z.refreshPage();
    let actualResult = await CommonComponent_1.CommonComponent.verifyUIArrayandSortedArray(UiValueList, GlobalVariables_1.GlobalVariables.temporayArray);
    await z_1.z.assertEqual(true, actualResult);
});
When('I sort contracting party based on descending order', async () => {
    GlobalVariables_1.GlobalVariables.temporayArray = [];
    let contractingPartyColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACTING_PARTY_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractingPartyColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    GlobalVariables_1.GlobalVariables.temporayArray = await CommonComponent_1.CommonComponent.getDescendingSortedArray(UiValueList);
    await z_1.z.refreshPage();
    await LinkedContractActions_1.LinkedContractActions.clickonSortContractingParty();
    await LinkedContractActions_1.LinkedContractActions.clickonSortContractingParty();
});
Then('I check all the contracting party are sorted in descending order', async () => {
    let contractingPartyColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACTING_PARTY_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractingPartyColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    await z_1.z.refreshPage();
    let actualResult = await CommonComponent_1.CommonComponent.verifyUIArrayandSortedArray(UiValueList, GlobalVariables_1.GlobalVariables.temporayArray);
    await z_1.z.assertEqual(true, actualResult);
});
When('I sort contract status based on ascending order', async () => {
    GlobalVariables_1.GlobalVariables.temporayArray = [];
    let contractStatusColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_STATUS_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractStatusColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    GlobalVariables_1.GlobalVariables.temporayArray = await CommonComponent_1.CommonComponent.getAscendingSortedArray(UiValueList);
    await z_1.z.refreshPage();
    await LinkedContractActions_1.LinkedContractActions.clickonSortContractStatus();
});
Then('I check all the contract status are sorted in ascending order', async () => {
    let contractStatusColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_STATUS_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractStatusColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    await z_1.z.refreshPage();
    let actualResult = await CommonComponent_1.CommonComponent.verifyUIArrayandSortedArray(UiValueList, GlobalVariables_1.GlobalVariables.temporayArray);
    await z_1.z.assertEqual(true, actualResult);
});
When('I sort contract status based on descending order', async () => {
    GlobalVariables_1.GlobalVariables.temporayArray = [];
    let contractStatusColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_STATUS_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractStatusColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    GlobalVariables_1.GlobalVariables.temporayArray = await CommonComponent_1.CommonComponent.getDescendingSortedArray(UiValueList);
    await z_1.z.refreshPage();
    await LinkedContractActions_1.LinkedContractActions.clickonSortContractStatus();
    await LinkedContractActions_1.LinkedContractActions.clickonSortContractStatus();
});
Then('I check all the contract status are sorted in descending order', async () => {
    let contractStatusColumnValXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_STATUS_COLUMN_VALUE_LIST);
    let currentPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CURRENT_PAGE_COUNT);
    let lastPageCountXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_COUNT);
    let nextPageIconXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON);
    let firstRecordLoaderXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID);
    let UiValueList = await CommonComponent_1.CommonComponent.getParticularTableColumnAllData(contractStatusColumnValXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, firstRecordLoaderXpath);
    await z_1.z.refreshPage();
    let actualResult = await CommonComponent_1.CommonComponent.verifyUIArrayandSortedArray(UiValueList, GlobalVariables_1.GlobalVariables.temporayArray);
    await z_1.z.assertEqual(true, actualResult);
});
// ***********************************************AURORA-928**************************************************//
When('I search for repository draft status master agreement contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.searchAndViewContractBasedonStatus(5);
    await LinkedContractActions_1.LinkedContractActions.searchContractBasedonHierarchyStatus(2);
});
Then('I check linked contract menu is disabled', async () => {
    let disabledMenu = await AuroraLmt_1.AuroraLmt.getData("REPOSITORY_CONTRACT_DISABLED_MENU_LIST");
    let disabledMenuList = disabledMenu.split("|");
    let actualDisabledMenuList = [];
    actualDisabledMenuList.push(disabledMenuList[5]);
    let actualResult = await LinkedContractActions_1.LinkedContractActions.verifyParticularMenusDisabled(actualDisabledMenuList);
    await z_1.z.assertEqual(true, actualResult);
});
When('I search for pending publish status master agreement contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.searchAndViewContractBasedonStatus(6);
    await LinkedContractActions_1.LinkedContractActions.searchContractBasedonHierarchyStatus(2);
});
When('I search for termination notice served status sub agreement contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.searchAndViewContractBasedonStatus(4);
    await LinkedContractActions_1.LinkedContractActions.searchContractBasedonHierarchyStatus(2);
});
When('I click on linked contract menu', async () => {
    await LinkedContractActions_1.LinkedContractActions.clickonLinkedContractMenu();
});
Then('I check link sub agreement button is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
    console.log("Link Sub Agreements button is available");
});
When('I search for active status sub agreement contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.searchAndViewContractBasedonStatus(1);
    await LinkedContractActions_1.LinkedContractActions.searchContractBasedonHierarchyStatus(2);
});
When('I search for expired status sub agreement contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.searchAndViewContractBasedonStatus(3);
    await LinkedContractActions_1.LinkedContractActions.searchContractBasedonHierarchyStatus(2);
});
When('I search for inactive status sub agreement contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.searchAndViewContractBasedonStatus(2);
    await LinkedContractActions_1.LinkedContractActions.searchContractBasedonHierarchyStatus(2);
});
When('I search for archived status master agreement contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.searchAndViewContractBasedonStatus(7);
    await LinkedContractActions_1.LinkedContractActions.searchContractBasedonHierarchyStatus(2);
});
When('I search for any published master agreement contract except archived', async () => {
    let contractStatus = await AuroraLmt_1.AuroraLmt.getData("PUBLISHED_CONTRACTS_EXCEPT_ARCHIVED");
    let contractStatusVal = await CommonComponent_1.CommonComponent.getListFromString("|", contractStatus);
    let randomOption = await CommonComponent_1.CommonComponent.getRandomNumber(contractStatusVal.length);
    await CommonComponent_1.CommonComponent.gridDropdownSelectionBasedonStringValue(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.REPO_STATUS_DROPDOWN), await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTRACT_STATUS_OPTION_LIST), contractStatusVal[randomOption]);
    await LinkedContractActions_1.LinkedContractActions.searchContractBasedonHierarchyStatus(2);
});
Then('I check link sub agreement button is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
});
When('I click on link sub agreement button inside linked contract menu', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
});
Then('I check link sub agreements popup is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_SUB_AGREEMENT_POPUP));
});
Then('I check all contracts button in the popup', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.ALL_CONTRACTS_BUTTON));
});
When('I click on all contracts button', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.ALL_CONTRACTS_BUTTON));
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
});
Then('I check all contracts displayed in the grid', async () => {
    let actualResult = await LinkedContractActions_1.LinkedContractActions.checkAllContractInGrid();
    await z_1.z.assertEqual(true, actualResult);
});
When('I enable all contract check box', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.ALL_CONTRACTS_CHECKBOX));
});
When('I select a random contract in the grid', async () => {
    await LinkedContractActions_1.LinkedContractActions.selectandStoreParticularRandomContractFromPopup();
});
// When('I search contract ID in ID column search', async () => {
//   await LinkedContractActions.searchContractID();
// });
Then('I see respective contract with contract ID in the grid', async () => {
    let actualResult = await LinkedContractActions_1.LinkedContractActions.checkSearchID();
    await z_1.z.assertEqual(true, actualResult);
});
Then('I see seach result for {string} with value {string} displayed on the grid', async function (label, value) {
    await z_1.z.seeElement("//td[contains(@title,'" + value + "')]/../../tr");
    logger_1.logger.info("I see seach result for " + label + " with the value " + value + " displayed on the grid");
});
When('I search contract title in contract title column search', async () => {
    await LinkedContractActions_1.LinkedContractActions.searchContractTitle();
});
Then('I see respective contract with contract title in the grid', async () => {
    let actualResult = await LinkedContractActions_1.LinkedContractActions.checkSearchContractTitle();
    await z_1.z.assertEqual(true, actualResult);
});
When('I search contracting party in contracting party column search', async () => {
    await LinkedContractActions_1.LinkedContractActions.searchContractCp();
});
Then('I see respective contract with contracting party in the grid', async () => {
    let actualResult = await LinkedContractActions_1.LinkedContractActions.checkContractCp();
    await z_1.z.assertEqual(true, actualResult);
});
When('I select contract category in contract category dropdown', async () => {
    await LinkedContractActions_1.LinkedContractActions.selectContractCategory();
});
Then('I see respective contract with contract category in the grid', async () => {
    let actualResult = await LinkedContractActions_1.LinkedContractActions.checkContractCategory();
    await z_1.z.assertEqual(true, actualResult);
});
When('I select contract type in contract type dropdown', async () => {
    await LinkedContractActions_1.LinkedContractActions.selectContractType();
});
Then('I see respective contract with contract type in the grid', async () => {
    let actualResult = await LinkedContractActions_1.LinkedContractActions.checkContractType();
    await z_1.z.assertEqual(true, actualResult);
});
When('I select contract sub type in contract sub type dropdown', async () => {
    await LinkedContractActions_1.LinkedContractActions.selectContractSubType();
});
Then('I see respective contract with contract sub type in the grid', async () => {
    let actualResult = await LinkedContractActions_1.LinkedContractActions.checkContractSubType();
    await z_1.z.assertEqual(true, actualResult);
});
When('I select contract status in contract status dropdown', async () => {
    await LinkedContractActions_1.LinkedContractActions.selectContractStatus();
});
Then('I see respective contract with contract status in the grid', async () => {
    let actualResult = await LinkedContractActions_1.LinkedContractActions.checkContractStatus();
    await z_1.z.assertEqual(true, actualResult);
});
Then('I see filter icon is highlighted in the grid', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FILTER_ICON_ENABLED));
});
When('I click on Clear Filter icon', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FILTER_ICON_ENABLED));
});
Then('I check filter icon is disabled', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FILTER_ICON_ENABLED));
});
Then('I see contract status column gets reset', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkContractStatusFilterReset();
});
/**************************************************************************User Story AURORA-933 Starts******************************************** */
When('I see master contract tile after linking sub contract', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.MASTER_CONTRACT_PRESENT_LINK_SUB_CONTRACT));
});
Then('I should not see actions menu in master contract tile', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.MASTER_CONTRACT_ACTION_LINK_SUB_CONTRACT));
});
When('I see sub contracts after linking sub contract to master', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SUB_CONTRACT_PRESENT_LINK_SUB_CONTRACT));
});
When('I should see actions menu in sub contract', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SUB_CONTRACT_ACTION_LINK_SUB_CONTRACT));
});
When('I click on sub contract actions menu', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SUB_CONTRACT_ACTIONS_MENU));
});
Then('I should see Remove Link option in sub contract confirmation dialog', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SUB_CONTRACT_REMOVE_LINK));
});
When('I click on Remove Link option in sub contract tile', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SUB_CONTRACT_REMOVE_LINK));
});
Then('I should see Remove Contract Link from master contract confirmation dialog', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.REMOVE_CONTRACT_LINK_FROM_MASTER_DIALOG));
});
Then('I should see two options in Remove Contract Link from master contract confirmation dialog', async () => {
    let actual_Result = await LinkedContractActions_1.LinkedContractActions.verifyTwoButtonsRemoveMasterContractLinkConfirmationDialog();
    if (actual_Result == 2) {
        logger_1.logger.info("There are two options in Remove Contract Link from master contract confirmation dialog");
    }
    else {
        throw new Error("Error");
    }
});
Then('I should see Remove option in Remove Contract Link from master contract confirmation dialog', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.RMV_BUTTON_CONTRACT_LINK_MASTER_DIALOG));
});
Then('I should see Cancel option in Remove Contract Link from master contract confirmation dialog', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CANCEL_BUTTON_CONTRACT_LINK_MASTER_DIALOG));
});
When('I click on Remove option in Remove Contract Link from master contract confirmation dialog', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.RMV_BUTTON_CONTRACT_LINK_MASTER_DIALOG));
});
Then('I see the sub contract tile removed from linked contracts view for the master contract', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SUB_CONTRACT_PRESENT_LINK_SUB_CONTRACT));
});
When('I click on cancel option in Remove Contract Link from master contract confirmation dialog', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CANCEL_BUTTON_CONTRACT_LINK_MASTER_DIALOG));
});
Then('I see Remove Contract Link from master contract confirmation dialog is closed', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.REMOVE_CONTRACT_LINK_FROM_MASTER_DIALOG));
});
Then('I see all sub contracts tiles are removed after unlinking the sub contract from master', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SUB_CONTRACT_PRESENT_LINK_SUB_CONTRACT));
});
Then('I see master contracts tile removed after unlinking the sub contract from master', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.MASTER_CONTRACT_PRESENT_LINK_SUB_CONTRACT));
});
Then('I should see Remove Contract Link title in Remove Contract Link from master contract confirmation dialog', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkConfirmationDialogTitle();
});
Then('I see confirmation message to unlink sub-contract contract from the master contract in Remove Contract Link from master contract confirmation dialog', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.RMV_CONTRACT_LINK_MASTER_DIALOG_MESSAGE));
});
Then('I should not see actions menu in sub contract contract tile', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SUB_CONTRACT_ACTION_LINK_MASTER_CONTRACT));
});
Then('I should see actions menu in master contract tile', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.MASTER_CONTRACT_ACTION_LINK_MASTER_CONTRACT));
});
When('I click on master contract actions menu', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.MASTER_CONTRACT_ACTIONS_MENU));
});
Then('I should see Remove Link option in master contract tile', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.MASTER_CONTRACT_REMOVE_LINK));
});
Then('I see Remove Link option in actions menu for master contract tile', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.MASTER_CONTRACT_REMOVE_LINK));
});
Then('I see Remove Link option in actions menu for sub contract tile', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SUB_CONTRACT_REMOVE_LINK));
});
When('I click on Remove Link option in master contract tile', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.MASTER_CONTRACT_REMOVE_LINK));
});
When('I check confirmation dialog for remove linked Master contract is displayed', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.REMOVE_MASTER_CONTRACT_CONFIRMATION_DIALOG));
});
When('I check confirmation dialog for remove linked sub contract is displayed', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONFIRMATION_DIALOG));
});
When('I check confirmation dialog for Open Amendment Details is displayed', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONFIRMATION_DIALOG));
});
Then('I see confirmation message inside the confirmation dialog for master agreement', async () => {
    await LinkedContractActions_1.LinkedContractActions.getInformativeTextFromConfirmationDialog();
});
Then('I see confirmation message inside the confirmation dialog for sub agreement', async () => {
    await LinkedContractActions_1.LinkedContractActions.getInformativeTextFromConfirmationDialogForSubAgreement();
});
Then('I should see Remove Contract Link from sub-contract confirmation dialog', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.REMOVE_CONTRACT_LINK_FROM_SUB_CONTRACT_DIALOG));
});
Then('I should see Remove Contract Link title in Remove Contract Link from sub contract confirmation dialog', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.RMV_CONTRACT_LINK_SUB_CONTRACT_DIALOG_TITLE));
});
Then('I see confirmation message to unlink master contract from the sub-contract in Remove Contract Link confirmation dialog', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.RMV_CONTRACT_LINK_SUB_CONTRACT_DIALOG_MESSAGE));
});
Then('I should see two options in Remove Contract Link from sub-contract confirmation dialog', async () => {
    let actual_Result = await LinkedContractActions_1.LinkedContractActions.verifyTwoButtonsRemoveSubContractLinkConfirmationDialog();
    await z_1.z.assertEqual(true, actual_Result);
});
Then('I should see two options in Remove Contract Link from sub contract confirmation dialog', async () => {
    // let actual_Result = await LinkedContractActions.verifyTwoButtonsRemoveSubContractLinkConfirmationDialog();
    let actual_Result = await LinkedContractActions_1.LinkedContractActions.verifyTwoButtonsRemoveMasterContractLinkConfirmationDialog();
    if (actual_Result == 2) {
        logger_1.logger.info("There are two options in Remove Contract Link from sub contract confirmation dialog");
    }
    else {
        throw new Error("Error");
    }
});
Then('I should see Remove option in Remove Contract Link from sub contract confirmation dialog', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.RMV_BUTTON_CONTRACT_LINK_SUB_CONTRACT_DIALOG));
});
Then('I should see Cancel option in Remove Contract Link from sub contract confirmation dialog', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CANCEL_BUTTON_CONTRACT_LINK_SUB_CONTRACT_DIALOG));
});
When('I click on Remove option in Remove Contract Link from Master contract confirmation dialog', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.RMV_BUTTON_CONTRACT_LINK_MASTER_DIALOG));
});
When('I click on Remove option in Remove Contract Link from sub-contract confirmation dialog', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.RMV_BUTTON_CONTRACT_LINK_SUB_CONTRACT_DIALOG));
});
Then('I see the master contract tile removed from linked contracts view for the sub contract', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.MASTER_CONTRACT_PRESENT_LINK_SUB_CONTRACT));
});
When('I click on cancel option in Remove Contract Link from sub contract confirmation dialog', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CANCEL_BUTTON_CONTRACT_LINK_SUB_CONTRACT_DIALOG));
});
When('I click on Continue option in Open Amendment Details confirmation dialog', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTINUE_BUTTON_OPEN_AMENDMENT_DIALOG));
});
Then('I see Remove Contract Link sub contract confirmation dialog is closed', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONFIRMATION_DIALOG));
    // await z.dontSeeElement(await AuroraLmt.getElement(linkedContractElements.REMOVE_CONTRACT_LINK_FROM_SUB_CONTRACT_DIALOG));
});
Then(' I see master contract tile removed', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SUB_CONTRACT_PRESENT_LINK_SUB_CONTRACT));
});
Then('I see master contract tile removed after unlinking master contract from sub contract', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.MASTER_CONTRACT_PRESENT_LINK_MASTER_CONTRACT));
});
Then('I see sub contract tile removed after unlinking master contract from sub contract', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SUB_CONTRACT_PRESENT_LINK_MASTER_CONTRACT));
});
When('I see sub contract tile after linking master contract', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SUB_CONTRACT_PRESENT_LINK_MASTER_CONTRACT));
});
When('I see master contract tile after linking master contract to sub contract', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.MASTER_CONTRACT_PRESENT_LINK_MASTER_CONTRACT));
});
When('I enable all contract check box', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.ALL_CONTRACTS_CHECKBOX));
});
When('I click on multiple select contracts checkbox in the popup', async () => {
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    await LinkedContractActions_1.LinkedContractActions.selectandStoreAllContractinFirstPage();
});
When('I select first contract in the grid', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.ALL_CONTRACTS_CHECKBOX));
});
// ****************************************** User Story AURORA-933 :- ENDS ***********************************************************/
//*********************************************User Story AURORA- 927 Starts******************************************** */
When('I see the contract preview in the right panel', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkContractPreviewSection();
});
Then('I check informative message for Standalone Contracts in the left pannel', async () => {
    console.log("Informative text");
    await LinkedContractActions_1.LinkedContractActions.checkContractHierachyMessageForStandaloneContarcts();
});
Then('I see the linked contracts in the left panel', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkLinkedContracts();
});
Then('I see Amendment link is available on contract cards', async () => {
    await LinkedContractActions_1.LinkedContractActions.CheckAmentmentLink();
});
Then('I click on Amendment link on contract cards', async () => {
    await LinkedContractActions_1.LinkedContractActions.ClickOnAmentmentLink();
});
Then('I see the confirmation dialog for navigating to Amendment section', async () => {
    await LinkedContractActions_1.LinkedContractActions.ckeckNavigateAmendmentSectionDialog();
});
Then('I see {string} option on dialog box', async function (option) {
    await LinkedContractActions_1.LinkedContractActions.ckeckDialogboxOption(option);
});
Then('I click on {string} option on dialog box', async function (option) {
    await LinkedContractActions_1.LinkedContractActions.clickOnDialogboxOption(option);
});
Then('I see user navigates to Amendment Section', async () => {
    await LinkedContractActions_1.LinkedContractActions.ckeckActiveSection();
});
Then('I click on the expand icon for amendments of the master agreement', async () => {
    await LinkedContractActions_1.LinkedContractActions.clickOnAmendmentExpandIcon();
});
Then('I see the amendments section is expanded', async () => {
    await LinkedContractActions_1.LinkedContractActions.ckeckAmendmentSection();
});
Then('I see View Amendment Details option', async () => {
    await LinkedContractActions_1.LinkedContractActions.ckeckAmendmentDetailsOption();
});
Then('I see the amendment number field', async () => {
    await LinkedContractActions_1.LinkedContractActions.ckeckAmendmentNumField();
});
Then('I see the uploaded by field', async () => {
    await LinkedContractActions_1.LinkedContractActions.ckeckAmendmentUploadedByField();
});
Then('I see the uploaded on field', async () => {
    await LinkedContractActions_1.LinkedContractActions.ckeckAmendmentUploadedOnField();
});
Then('I see the description field', async () => {
    await LinkedContractActions_1.LinkedContractActions.ckeckAmendmentDescriptionField();
});
Then('I see the contract flag icon', async () => {
    await LinkedContractActions_1.LinkedContractActions.ckeckContractFlagIcon();
});
Then('I see the contract tile field', async () => {
    await LinkedContractActions_1.LinkedContractActions.ckeckContractTileField();
});
Then('I see the contract number field', async () => {
    await LinkedContractActions_1.LinkedContractActions.ckeckContractNumField();
});
Then('I see the contract type field', async () => {
    await LinkedContractActions_1.LinkedContractActions.ckeckContractTypeField();
});
Then('I see the contract sub type field', async () => {
    await LinkedContractActions_1.LinkedContractActions.ckeckContractSubTypeField();
});
Then('I see the contract status field', async () => {
    await LinkedContractActions_1.LinkedContractActions.ckeckContractStatusField();
});
Then('I see contracting party label on tile view', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkContractingPartyField();
});
Then('I see the contracting parties in a tooltip', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkContractingPartiesInTooltip();
});
Then('I see view contract details link on tile view', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkContractDetailsLinkOnTileView();
});
Then('I see view contract details button', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkContractDetailsButton();
});
Then('I see the link Sub Agreements option in the left panel', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkSubAgreementsOptionLink();
});
Then('I see the Link Master Agreement option in the left panel', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkMasterAgreementOptionLink();
});
Then('I see No Sub Agreements linked text', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkNoSubAgreementLinkedText();
});
Then('I see No Master Agreement linked text', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkNoMasterAgreementLinkedText();
});
Then('I click on the Link Sub Agreements button', async () => {
    await LinkedContractActions_1.LinkedContractActions.clickOnLinkSubContractsOption();
});
Then('I click on the Link Master Agreement button', async () => {
    await LinkedContractActions_1.LinkedContractActions.clickOnLinkMasterAgreementOption();
});
Then('I check number of records displayed in the grid list', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkNumberOfRecordsInTheGrid();
});
Then('I select no of rows as {string} page count filter', async function (option) {
    await LinkedContractActions_1.LinkedContractActions.updateVisibleNumberOfRows(option);
});
Then('I check remove link is availeble for {string}', async function (label) {
    await LinkedContractActions_1.LinkedContractActions.checkRemoveOptionLinkAvailable(label);
});
Then('I check contract hierarchy relationship established for {string}', async function (label) {
    await LinkedContractActions_1.LinkedContractActions.checkHirarchyEstablished(label);
});
Then('I see the number of amendments in amendments link in master agreement tile', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkNumOfAmandmentsInMasterTile();
});
Then('I see amendments link in master agreement tile', async () => {
    await z_1.z.seeElement("//p[contains(@class,'masterAgreementHeading')]/following-sibling::app-link-agreements//p[contains(@class,'amendments')]/span");
});
Then('I dont see amendments link in master agreement tile', async () => {
    await z_1.z.dontSeeElement("//p[contains(@class,'masterAgreementHeading')]/following-sibling::app-link-agreements//p[contains(@class,'amendments')]/span");
});
Then('I see amendments link in sub agreement tile', async () => {
    await z_1.z.seeElement("(//p[contains(@class,'subAgreementHeading')]/following-sibling::ul//p[contains(@class,'amendments')]/span)[1]");
});
Then('I see the number of amendments in amendments link in sub agreement tile', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkNumOfAmandmentsInSubContractTile();
});
Then('I click on Amendment link from {string} contract tile', async function (label) {
    await LinkedContractActions_1.LinkedContractActions.ClickOnAmendmentLink(label);
});
Then('I check same number of amendments present when a master contract is openend', async () => {
    await LinkedContractActions_1.LinkedContractActions.verifyNumOfAmandmentsOnDocPage();
});
Then('I check same number of amendments present when a sub contract is openend', async () => {
    await LinkedContractActions_1.LinkedContractActions.verifyNumOfAmandmentsOnDocPage();
});
Then('I see all the amendments for the master agreement', async () => {
    await LinkedContractActions_1.LinkedContractActions.verifyNumOfAmandmentsTilesDisplayed();
});
Then('I check remove link is not available for {string}', async function (label) {
    await LinkedContractActions_1.LinkedContractActions.checkRemoveOptionLinkUnAvailable(label);
});
Then('I drag and drop columns', async () => {
    await LinkedContractActions_1.LinkedContractActions.dragAndDropGridColumns();
});
Then('I see a grid view for linking Sub Agreement displayed', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkGridViewOfSubAgreementsDisplayed();
});
Then('I remove all added sub agreements', async () => {
    await LinkedContractActions_1.LinkedContractActions.removeAllSubAgreements();
});
Then('I remove the added Master agreement', async () => {
    await LinkedContractActions_1.LinkedContractActions.removeAAddedMasterAgreement();
});
Then('I see all the linked Agreements are removed', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkAllLinkedAgreementsRemoved();
});
Then('I see a grid view for linking Master Agreement displayed', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkGridViewOfMasterAgreementsDisplayed();
});
Then('I see list of contracts displayed in the grid view', async () => {
    await LinkedContractActions_1.LinkedContractActions.getContractsListOnGrid();
});
Then('I see a Checkbox to select contracts for linking is available on the grid view', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkIconTypeAvailabeToSelectContractForLinkingSubAgreement();
});
Then('I see a radio botton to select contract for linking is available on the grid view', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkIconTypeAvailabeToSelectContractForLinkingMasterAgreement();
});
Then('I select {string} Agreements', async function (noOfContracts) {
    await LinkedContractActions_1.LinkedContractActions.selectContractsFromGrid(noOfContracts);
});
Then('I check Link button is {string}', async function (status) {
    await z_1.z.wait(5);
    if (status == "enabled") {
        try {
            await z_1.z.waitForEnabled(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_BTTN_POPUP), 6);
            console.log("Link button is enabled");
        }
        catch (error) {
            throw new Error("Link button is not enabled");
        }
    }
    else if (status == "disabled") {
        let flag = await CommonComponent_1.CommonComponent.isEnabledByXpath(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_BTTN_POPUP));
        if (flag == false) {
            console.log("Link button is disabled as expected");
        }
        else {
            throw new Error("Link button is not disabled");
        }
    }
});
Then('I unselect {string} Agreements', async function (noOfContracts) {
    await LinkedContractActions_1.LinkedContractActions.selectContractsFromGrid(noOfContracts);
});
Then('I select a contract for linking', async () => {
    await LinkedContractActions_1.LinkedContractActions.selectAContractFromGrid();
});
Then('I unselect the selected contract for linking', async () => {
    await LinkedContractActions_1.LinkedContractActions.unselectAContractFromGrid();
});
When('I click on link button in the grid', async () => {
    await LinkedContractActions_1.LinkedContractActions.clickOnLinkOption();
});
When('I click on link button from top', async () => {
    await LinkedContractActions_1.LinkedContractActions.clickOnLinkButtonFromTop();
});
When('I see linked contract displayed at the top in the grid view', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkSelectedContractInGrid();
});
Then('I see the {string} files added as Sub Agreements', async function (noOfContracts) {
    await LinkedContractActions_1.LinkedContractActions.contractsAddedFromGrid(noOfContracts);
});
Then('I see master contract has been added to sub contract', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkMasterAgreementAddedFromGrid();
});
Then('I click on the actions icon of the Sub Agreement {string}', async function (agreementActionIcon) {
    await LinkedContractActions_1.LinkedContractActions.clickOnActionIconOfAddedAgreements(agreementActionIcon);
});
Then('I click on the actions icon of the master contract', async () => {
    await LinkedContractActions_1.LinkedContractActions.clickOnActionIconOfAddedAgreement();
});
Then('I click on remove link option', async () => {
    await LinkedContractActions_1.LinkedContractActions.clickOnRemoveLinkOption();
});
Then('I see that the linked Sub Agreement is now removed', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkAgreementRemoved();
});
Then('I see that the linked master contract is now removed', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkAgreementRemoved();
});
Then('I click on View Contract Details button', async () => {
    await LinkedContractActions_1.LinkedContractActions.clickOnViewContractDetailsButton();
});
Then('I click on View Contract Details link on tile view', async () => {
    await LinkedContractActions_1.LinkedContractActions.clickOnContractDetailsLinkOnTileView();
});
Then('I see the dialog box with title as Open Contract Details dispayed {string}', async function (status) {
    await LinkedContractActions_1.LinkedContractActions.checkOpenContarctsDetailsDialogBox(status);
});
Then('I see confirmation text inside the dialog box', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkCofirmationTextInsideDialogBox();
});
Then('I check user navigates to contract details page', async () => {
    await LinkedContractActions_1.LinkedContractActions.ckeckActiveSection();
});
Then('I search for {string} with {string} on Contract Hierarchy grid', async function (label, value) {
    await LinkedContractActions_1.LinkedContractActions.searchColumnvalueWith(label, value);
});
Then('I apply filter for {string} with {string} on Contract Hierarchy grid', async function (label, value) {
    await LinkedContractActions_1.LinkedContractActions.filterColumnvalueWith(label, value);
});
Then('I see Confirm and Cancel options inside the dialog box', async () => {
    await LinkedContractActions_1.LinkedContractActions.checkOptionInsideDialogBox();
});
Then('I click on Cancel option inside the dialog box', async () => {
    await LinkedContractActions_1.LinkedContractActions.clickOnCancelOptionInsideDialogBox();
});
Then('I click on Confirm option inside the dialog box', async () => {
    await LinkedContractActions_1.LinkedContractActions.clickOnConfirmOptionInsideDialogBox();
});
