"use strict";
//Rule: classname should be ts file name with first letter as caps
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedContractActions = void 0;
/**
 * The class is to perform linked contract action
 *
 * @author somnath.k
 *
 *
*/
const AuroraContractDetailsActions_1 = require("../Contract Details/AuroraContractDetailsActions");
const AuroraLmt_1 = require("../../../common/Data/AuroraLmt");
const CommonComponent_1 = require("./../../commonKeywords/CommonComponent");
const GlobalVariables_1 = require("../../../common/dataCreation/GlobalVariables");
const AuroraContractDetailsElements_1 = require("../Contract Details/AuroraContractDetailsElements");
const LinkedContractElements_1 = require("./LinkedContractElements");
const logger_1 = require("../../../common/Logger/logger");
const z_1 = require("actionbot-wrapper/z");
const { I } = inject();
class LinkedContractActions {
    /********************************************************Sub Services Starts**********************************************************/
    /**
    * To click on linked contracts menu
    * @author somnath.k
    */
    static async clickonLinkedContractMenu() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINKED_CONTRACT_MENU));
    }
    /**
    * To click on link master agreement button
    * @author somnath.k
    */
    static async clickonlinkMasterAgreementBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_MASTER_AGREEMENT_BTTN));
    }
    /**
    * To click on link sub agreement button
    * @author somnath.k
    */
    static async clickonlinkSubAgreementBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
    }
    /**
    * To click on link button from the popup
    * @author somnath.k
    */
    static async clickonPopuplinkBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_BTTN_POPUP));
    }
    /**
    * To click on page count dropdown
    * @author somnath.k
    */
    static async clickonPageCountDropdown() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.PAGE_COUNT_FILTER_DROPDOWN));
    }
    /**
    * To click on last page icon
    * @author somnath.k
    */
    static async clickonLastPageIcon() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LAST_PAGE_ICON));
    }
    /**
    * To click on first page icon
    * @author somnath.k
    */
    static async clickonFirstPageIcon() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_PAGE_ICON));
    }
    /**
    * To click on next page icon
    * @author somnath.k
    */
    static async clickonNextPageIcon() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NEXT_PAGE_ICON));
    }
    /**
    * To click on previous page icon
    * @author somnath.k
    */
    static async clickonPreviousPageIcon() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.PREVIOUS_PAGE_ICON));
    }
    /**
    * To click on sort contract number icon
    * @author somnath.k
    */
    static async clickonSortContractNumber() {
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SORT_CONTRACT_NUMBER));
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    }
    /**
    * To click on sort contract title icon
    * @author somnath.k
    */
    static async clickonSortContractTitle() {
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SORT_CONTRACT_TITLE));
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    }
    /**
    * To click on sort contract category icon
    * @author somnath.k
    */
    static async clickonSortContractCategory() {
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SORT_CONTRACT_CATEGORY));
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    }
    /**
    * To click on sort contract type icon
    * @author somnath.k
    */
    static async clickonSortContractType() {
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SORT_CONTRACT_TYPE));
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    }
    /**
    * To click on sort contract subtype icon
    * @author somnath.k
    */
    static async clickonSortContractSubtype() {
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SORT_CONTRACT_SUBTYPE));
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    }
    /**
    * To click on sort contracting party icon
    * @author somnath.k
    */
    static async clickonSortContractingParty() {
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SORT_CONTRACTING_PARTY));
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    }
    /**
    * To click on sort contract status icon
    * @author somnath.k
    */
    static async clickonSortContractStatus() {
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SORT_CONTRACT_STATUS));
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    }
    /********************************************************Sub Services Ends************************************************************/
    /********************************************************Services Starts**************************************************************/
    /**
    * To search contract based on given hierarchy status
    * @param {number} statusIndex
    * @author somnath.k
    */
    static async searchContractBasedonHierarchyStatus(statusIndex) {
        await CommonComponent_1.CommonComponent.gridDropdownSelectionBasedonValue(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.HIERARCHY_STATUS_DROPDOWN), await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.HIERARCHY_STATUS_OPTION_LIST), statusIndex);
    }
    /**
    * To select and store all contract from the popup
    * @author somnath.k
    */
    static async selectandStoreAllContractinFirstPage() {
        if (GlobalVariables_1.GlobalVariables.entireRowData.size > 0) {
            GlobalVariables_1.GlobalVariables.entireRowData.clear();
        }
        let allRcordsCheckBoxXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.ALL_RECORDS_FROM_POPUP));
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SELECT_ALL_CONTRACTS_FROM_GRID));
        for (let i = 0; i < allRcordsCheckBoxXpathList.length; i++) {
            // let count = i + 1;
            let linkedContractNumberXpath = allRcordsCheckBoxXpathList[i] + "//following-sibling::div[@columnindex='1' and @role='gridcell']";
            let linkedContractNumber = await z_1.z.grabTextFrom(linkedContractNumberXpath);
            GlobalVariables_1.GlobalVariables.linkedContractNumbers.push(linkedContractNumber.trim());
        }
    }
    /**
    * To verify linked contract number in view linked contract page
    * @param {String[]} linkedContractNumber
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyAddedAgreementInCard(linkedContractNumber) {
        let flag = false;
        for (let i = 0; i < linkedContractNumber.length; i++) {
            let linkedContractNumberXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.DNY_LINKED_CONTRACT_NUMBER_IN_CARD);
            linkedContractNumberXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(linkedContractNumber[i].trim(), linkedContractNumberXpath);
            await z_1.z.scrollIntoView(linkedContractNumberXpath);
            if ((await CommonComponent_1.CommonComponent.getHtmlElementData(linkedContractNumberXpath) != null) || (await CommonComponent_1.CommonComponent.getHtmlElementData(linkedContractNumberXpath) != undefined)) {
                flag = true;
            }
            if (flag == false) {
                break;
            }
        }
        return flag;
    }
    /**
    * To verify default page count value in the page count
    * @param {String[]} linkedContractNumber
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyDefaultPageCountVal(defaultPageCount) {
        let flag = false;
        let UIPageCount = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.PAGE_COUNT_FILTER_DROPDOWN));
        if (UIPageCount.trim() == defaultPageCount.trim()) {
            flag = true;
        }
        return flag;
    }
    /**
    * To select and store random page count value
    * @author somnath.k
    */
    static async selectandStoreRandomPageCountVal() {
        GlobalVariables_1.GlobalVariables.temporayString = "";
        await this.clickonPageCountDropdown();
        //(await AuroraLmt.getElement(linkedContractElements.PAGE_COUNT_FILTER_DROPDOWN));
        GlobalVariables_1.GlobalVariables.temporayString = await CommonComponent_1.CommonComponent.clickRandomValueFromList(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.PAGE_COUNT_OPTION_LIST));
    }
    /**
    * To verify no of records based on page count selected
    * @param {number} selectedPageCountVal
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyRecordsBasedonPageCountFilter(selectedPageCountVal) {
        let flag = false;
        let allRcordscount = await CommonComponent_1.CommonComponent.grabNumberElements(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.ALL_RECORDS_FROM_POPUP));
        if (allRcordscount <= selectedPageCountVal) {
            flag = true;
        }
        return flag;
    }
    /**
    * To verify page count range
    * @param {string} pageNumberRange
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyPageCountRange(pageNumberRange) {
        let flag = false;
        let uiPageNumberRange = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.PAGE_NUMBER_RANGE));
        if (pageNumberRange.trim() == uiPageNumberRange.trim()) {
            flag = true;
        }
        return flag;
    }
    //********************************************************AURORA-928 *****************************************************************/
    /**
    * To verify particular aurora menus is disabled on the page
    * @param {String[]} disabledMenuList
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyParticularMenusDisabled(disabledMenuList) {
        let flag = false;
        let disabledMenuUITextList = await CommonComponent_1.CommonComponent.retrieveUITextListBasedonIndexWithSingleXpath(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CONTRACT_DISABLED_MENU_LIST));
        for (let i = 0; i < disabledMenuList.length; i++) {
            flag = disabledMenuUITextList.includes(disabledMenuList[0]);
            if (flag == true) {
                break;
            }
        }
        return flag;
    }
    /**
    * To select only particular cp to the contract
    * @param {string} selectCPName
    * @author somnath.k
    */
    static async selectOnlyParticularCP(selectCPName) {
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SEARCH_FIELD), selectCPName);
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SEARCH_LOADING));
        if ((await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_ADDED_TICK)) != null) || (await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_ADDED_TICK)) != undefined)) {
            logger_1.logger.info("Specified CP name is already selected in the contract ", selectCPName);
        }
        else {
            await AuroraContractDetailsActions_1.AuroraContractDetailsActions.selectCpTypeRandomly();
            await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SEARCH_FIELD), selectCPName);
            await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SEARCH_LOADING));
            await AuroraContractDetailsActions_1.AuroraContractDetailsActions.selectFirstCpFromAutosugstn();
        }
        let cpCardCount = await CommonComponent_1.CommonComponent.grabNumberElements(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_CARD_LIST));
        if (cpCardCount > 1) {
            await this.removeAllCPExceptSpecifiedCP(selectCPName);
        }
    }
    /**
    * To remove all cp except specified cp
    * @param {string} specifiedCP
    * @author somnath.k
    */
    static async removeAllCPExceptSpecifiedCP(specifiedCP) {
        let cpNameList = await CommonComponent_1.CommonComponent.retrieveUITextListBasedonIndexWithSingleXpath(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.ALL_ADDED_CP_NAMES));
        for (let i = 0; i < cpNameList.length; i++) {
            if (cpNameList[i].trim().includes(specifiedCP.trim())) {
                continue;
            }
            else {
                //remove cp code
                let count = i + 1;
                let dynamicThreedotsIconXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonIndexValue(count + "", await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.DNY_THREE_DOTS_IN_CARD));
                await z_1.z.click(dynamicThreedotsIconXpath);
                await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickOnRemvButton();
            }
        }
    }
    /**
    * To check all contracts displayed in the grid
    *
    * @author Sowmyashree
    */
    static async checkAllContractInGrid() {
        let flag = false;
        let gridRcrdXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.ALL_RECORDS_FROM_POPUP);
        let gridRecord = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(gridRcrdXpath);
        if (gridRecord.length > 0) {
            flag = true;
        }
    }
    /**
   * To select a contract to link
   *
   * @author Sowmyashree
   */
    static async selectandStoreParticularRandomContractFromPopup() {
        if (GlobalVariables_1.GlobalVariables.linkedContractNumbers.length > 0) {
            GlobalVariables_1.GlobalVariables.linkedContractNumbers = [];
        }
        let allRcordsXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.ALL_RECORDS_FROM_POPUP));
        let randomCount = await CommonComponent_1.CommonComponent.getRandomNumber(allRcordsXpathList.length);
        await z_1.z.click(allRcordsXpathList[randomCount]);
        let linkedContractNumberXpath = allRcordsXpathList[randomCount] + "//following-sibling::div[@columnindex='1' and @role='gridcell']";
        let linkedContractNumber = await z_1.z.grabTextFrom(linkedContractNumberXpath);
        GlobalVariables_1.GlobalVariables.linkedContractNumbers.push(linkedContractNumber.trim());
    }
    /**
    * To get contract details from the grid
    *
    * @author Sowmyashree
    */
    static async getContractDetails() {
        let columnXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.COLUMN_NAME);
        let columnValue = await CommonComponent_1.CommonComponent.retrieveUITextListBasedonIndexWithSingleXpath(columnXpath);
        for (let i = 1; i <= columnValue.length; i++) {
            let contractDetailXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.DYN_FIRST_ROW_CONTRACT_DETAIL);
            contractDetailXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonIndexValue(i + "", contractDetailXpath);
            let rowValue = await z_1.z.grabTextFrom(contractDetailXpath);
            GlobalVariables_1.GlobalVariables.ContractDetailsToLink.set(columnValue[i - 1], rowValue);
        }
    }
    /**
    * To search contract ID in the grid
    *
    * @author Sowmyashree
    */
    static async searchContractID() {
        let contractID = GlobalVariables_1.GlobalVariables.ContractDetailsToLink.get("ID");
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_ID_SEARCH_FIELD), contractID);
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    }
    /**
    * To check the searched ID result in the grid
    *
    * @author Sowmyashree
    */
    static async checkSearchID() {
        let flag = false;
        let contractDetailXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.DYN_FIRST_ROW_CONTRACT_DETAIL);
        contractDetailXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonIndexValue("1", contractDetailXpath);
        let rowValue = await z_1.z.grabTextFrom(contractDetailXpath);
        let contractID = GlobalVariables_1.GlobalVariables.ContractDetailsToLink.get("ID");
        if (rowValue.includes(contractID)) {
            flag = true;
        }
        return flag;
    }
    /**
   * To search contract title in the grid
   *
   * @author Sowmyashree
   */
    static async searchContractTitle() {
        let contractTitle = GlobalVariables_1.GlobalVariables.ContractDetailsToLink.get("Title");
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_TITLE_SEARCH_FIELD), contractTitle);
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    }
    /**
    * To check the searched contract title result in the grid
    *
    * @author Sowmyashree
    */
    static async checkSearchContractTitle() {
        let flag = false;
        let contractDetailXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.DYN_FIRST_ROW_CONTRACT_DETAIL);
        contractDetailXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonIndexValue("2", contractDetailXpath);
        let rowValue = await z_1.z.grabTextFrom(contractDetailXpath);
        let contractTitle = GlobalVariables_1.GlobalVariables.ContractDetailsToLink.get("Title");
        if (rowValue.includes(contractTitle)) {
            flag = true;
        }
        return flag;
    }
    /**
    * To search contracting party in the grid
    *
    * @author Sowmyashree
    */
    static async searchContractCp() {
        let contractCp = GlobalVariables_1.GlobalVariables.ContractDetailsToLink.get("Contracting Party");
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_CP_SEARCH_FIELD), contractCp);
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    }
    /**
    * To check the searched contracting party result in the grid
    *
    * @author Sowmyashree
    */
    static async checkContractCp() {
        let flag = false;
        let contractDetailXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.DYN_FIRST_ROW_CONTRACT_DETAIL);
        contractDetailXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonIndexValue("6", contractDetailXpath);
        let rowValue = await z_1.z.grabTextFrom(contractDetailXpath);
        let contractCp = GlobalVariables_1.GlobalVariables.ContractDetailsToLink.get("Contracting Party");
        if (rowValue.includes(contractCp)) {
            flag = true;
        }
        return flag;
    }
    /**
    * To select contract category in the grid
    *
    * @author Sowmyashree
    */
    static async selectContractCategory() {
        let contractCategory = GlobalVariables_1.GlobalVariables.ContractDetailsToLink.get("Category");
        let dropDownXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_CATEGORY_DROPDOWN);
        let dropDownlistXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_CATEGORY_DROPDOWN_LIST);
        await CommonComponent_1.CommonComponent.gridDropdownSelectionBasedonStringValue(dropDownXpath, dropDownlistXpath, contractCategory);
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    }
    /**
    * To check the contract category search result in the grid
    *
    * @author Sowmyashree
    */
    static async checkContractCategory() {
        let flag = false;
        let contractDetailXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.DYN_FIRST_ROW_CONTRACT_DETAIL);
        contractDetailXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonIndexValue("3", contractDetailXpath);
        let rowValue = await z_1.z.grabTextFrom(contractDetailXpath);
        let contractCategory = GlobalVariables_1.GlobalVariables.ContractDetailsToLink.get("Category");
        if (rowValue.includes(contractCategory)) {
            flag = true;
        }
        return flag;
    }
    /**
   * To select contract type in the grid
   *
   * @author Sowmyashree
   */
    static async selectContractType() {
        let contractCategory = GlobalVariables_1.GlobalVariables.ContractDetailsToLink.get("Type");
        let dropDownXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_TYPE_DROPDOWN);
        let dropDownlistXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_TYPE_DROPDOWN_LIST);
        await CommonComponent_1.CommonComponent.gridDropdownSelectionBasedonStringValue(dropDownXpath, dropDownlistXpath, contractCategory);
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    }
    /**
    * To check the contract type search result in the grid
    *
    * @author Sowmyashree
    */
    static async checkContractType() {
        let flag = false;
        let contractDetailXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.DYN_FIRST_ROW_CONTRACT_DETAIL);
        contractDetailXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonIndexValue("4", contractDetailXpath);
        let rowValue = await z_1.z.grabTextFrom(contractDetailXpath);
        let contractType = GlobalVariables_1.GlobalVariables.ContractDetailsToLink.get("Type");
        if (rowValue.includes(contractType)) {
            flag = true;
        }
        return flag;
    }
    /**
    * To select contract subtype in the grid
    *
    * @author Sowmyashree
    */
    static async selectContractSubType() {
        let contractCategory = GlobalVariables_1.GlobalVariables.ContractDetailsToLink.get("Subtype");
        let dropDownXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_SUBTYPE_DROPDOWN);
        let dropDownlistXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_SUBTYPE_DROPDOWN_LIST);
        await CommonComponent_1.CommonComponent.gridDropdownSelectionBasedonStringValue(dropDownXpath, dropDownlistXpath, contractCategory);
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    }
    /**
    * To check the contract subtype search result in the grid
    *
    * @author Sowmyashree
    */
    static async checkContractSubType() {
        let flag = false;
        let contractDetailXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.DYN_FIRST_ROW_CONTRACT_DETAIL);
        contractDetailXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonIndexValue("5", contractDetailXpath);
        let rowValue = await z_1.z.grabTextFrom(contractDetailXpath);
        let contractSubtype = GlobalVariables_1.GlobalVariables.ContractDetailsToLink.get("Subtype");
        if (rowValue.includes(contractSubtype)) {
            flag = true;
        }
        return flag;
    }
    /**
   * To select contract status in the grid
   *
   * @author Sowmyashree
   */
    static async selectContractStatus() {
        let contractStatus = GlobalVariables_1.GlobalVariables.ContractDetailsToLink.get("Status");
        let dropDownXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_STATUS_DROPDOWN);
        let dropDownlistXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_STATUS_DROPDOWN_LIST);
        await CommonComponent_1.CommonComponent.gridDropdownSelectionBasedonStringValue(dropDownXpath, dropDownlistXpath, contractStatus);
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.FIRST_RECORD_IN_GRID));
    }
    /**
    * To check the contract status search result in the grid
    *
    * @author Sowmyashree
    */
    static async checkContractStatus() {
        let flag = false;
        let contractDetailXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.DYN_FIRST_ROW_CONTRACT_DETAIL);
        contractDetailXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonIndexValue("7", contractDetailXpath);
        let rowValue = await z_1.z.grabTextFrom(contractDetailXpath);
        let contractStatus = GlobalVariables_1.GlobalVariables.ContractDetailsToLink.get("Status");
        if (rowValue.includes(contractStatus)) {
            flag = true;
        }
        return flag;
    }
    /**s
    * To check the contract status filter reset in the grid
    *
    * @author Sowmyashree
    */
    static async checkContractStatusFilterReset() {
        let flag = false;
        let dropDownXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_STATUS_DROPDOWN);
        let value = await z_1.z.grabTextFrom(dropDownXpath);
        let actual_Result = value == "" || value == null || value == undefined || value.length === 0;
        if (actual_Result == true) {
            flag = true;
        }
        return flag;
    }
    /**
        * To verify two buttons in Remove Master Contract Link Confirmation Dialog
        * @author Minaz Khan
        */
    static async verifyTwoButtonsRemoveMasterContractLinkConfirmationDialog() {
        await z_1.z.wait(2);
        let numOfButtons = await z_1.z.grabNumberOfVisibleElements(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.RMV_CONTRACT_LINK_MASTER_DIALOG_OPTIONS));
        return numOfButtons;
    }
    /**
    * To verify two buttons in Remove Sub Contract Link Confirmation Dialog
    * @author Minaz Khan
    */
    static async verifyTwoButtonsRemoveSubContractLinkConfirmationDialog() {
        await z_1.z.wait(2);
        let numOfButtons = await z_1.z.grabNumberOfVisibleElements(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.RMV_CONTRACT_LINK_SUB_CONTRACT_DIALOG_OPTIONS));
        return numOfButtons;
    }
    /**
    * To check Contract prview section displayed
    * @author Datta
    */
    static async checkContractPreviewSection() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_PREVIEW_SECTION));
    }
    static async checkContractHierachyMessageForStandaloneContarcts() {
        console.log("Under method");
        await z_1.z.wait(20);
        let expectedMsg = "Contract link cannot be established for Standalone Contracts. Please change the Hierarchy Status in Contract details tab to 'Master Contract' or 'Sub Contract' to establish contract links.";
        let validationText = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_HIERACHY_VALIDATION_MSG_FOR_STANDALONE_CONTRACTS));
        console.log(validationText);
        if (validationText.includes(expectedMsg)) {
            console.log("Validation text coming as expected");
        }
        else {
        }
    }
    static async checkContractDetailLink() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.VIEW_CONTRACT_DETAILS_BTN));
    }
    static async checkLinkedContracts() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINKED_CONTRACTS));
        let count = await z_1.z.grabNumberOfVisibleElements(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINKED_CONTRACTS));
        console.log("Number of linked contracts are:" + count);
    }
    static async clickOnAmendmentExpandIcon() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.AMENDMENT_EXPAND_ICON));
    }
    static async ckeckAmendmentSection() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.AMENDMENT_VIEW));
    }
    static async ckeckAmendmentDetailsOption() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.AMENDMENT_DETAILS_OPTION));
    }
    static async ckeckAmendmentNumField() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.AMENDMENT_NUM_FIELD));
    }
    static async CheckAmentmentLink() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.AMENDMENT_LINK));
    }
    static async ClickOnAmentmentLink() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.AMENDMENT_LINK));
    }
    static async ckeckNavigateAmendmentSectionDialog() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.AMENDMENT_NAVIGATION_DIALOG));
    }
    static async ckeckAmendmentUploadedByField() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.AMENDMENT_UPLOADED_BY_FIELD));
    }
    static async ckeckAmendmentUploadedOnField() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.AMENDMENT_UPLOADED_ON_FIELD));
    }
    static async ckeckDialogboxOption(option) {
        let dialogboxOptionXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.DYN_DIALOGBOX_OPTION);
        if (dialogboxOptionXpath.includes("TEMPCOUNT")) {
            dialogboxOptionXpath = dialogboxOptionXpath.replace("TEMPCOUNT", option);
        }
        await z_1.z.seeElement(dialogboxOptionXpath);
    }
    static async clickOnDialogboxOption(option) {
        let dialogboxOptionXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.DYN_DIALOGBOX_OPTION);
        if (dialogboxOptionXpath.includes("TEMPCOUNT")) {
            dialogboxOptionXpath = dialogboxOptionXpath.replace("TEMPCOUNT", option);
        }
        await z_1.z.click(dialogboxOptionXpath);
    }
    static async ckeckActiveSection() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.ACTIVE_SECTION));
        let header = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.ACTIVE_SECTION));
        console.log("User navigated to: " + header + " - Section");
    }
    static async ckeckAmendmentDescriptionField() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.AMENDMENT_DESCRIPTION_FIELD));
    }
    static async ckeckContractFlagIcon() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_FIELD_ICON));
    }
    static async ckeckContractTileField() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_TILE_FIELD));
    }
    static async ckeckContractNumField() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_NUM_FIELD));
    }
    static async ckeckContractTypeField() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_TYPE_FIELD));
    }
    static async ckeckContractSubTypeField() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_SUB_TYPE_FIELD));
    }
    static async ckeckContractStatusField() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_STATUS_ON_TILE));
        console.log("Contract status is availeble on tile view");
    }
    static async checkContractingPartyField() {
        console.log("Checking contracting party field");
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACTING_PARTY_ON_TILE_VIEW));
        console.log("contracting party field is available on tile view");
    }
    static async checkContractingPartiesInTooltip() {
        await z_1.z.moveCursorTo(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACTING_PARTY_ON_TILE_VIEW));
        //await z.seeElement(await AuroraLmt.getElement(linkedContractElements.CONTRACTING_PARTIES_IN_TOOLTIP));
    }
    static async checkContractDetailsButton() {
        console.log("Checking contract details Button");
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.VIEW_CONTRACT_DETAILS_BTN));
        console.log("Contract details Button is available");
    }
    static async checkContractDetailsLinkOnTileView() {
        console.log("Checking contract details link");
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.VIEW_CONTRACT_DETAILS_LNK_ON_TILE_VIEW));
        console.log("Contract details link is available");
    }
    static async clickOnContractDetailsLinkOnTileView() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.VIEW_CONTRACT_DETAILS_LNK_ON_TILE_VIEW));
        console.log("Clicked on Contract details link");
    }
    static async checkRemoveOptionLinkAvailable(label) {
        await z_1.z.waitForElement("//span[@class='linkedContractLabel']", 120);
        let flag;
        if (label == "Sub Agreements") {
            flag = await CommonComponent_1.CommonComponent.isElementPresent(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
        }
        if (label == "Master Agreement") {
            flag = await CommonComponent_1.CommonComponent.isElementPresent(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_MASTER_AGREEMENT_BTTN));
        }
        let y = new Boolean(true);
        if (flag == y) {
            // await z.seeElement(await AuroraLmt.getElement(linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
            console.log("No Linked Agreements available for " + label);
            if (label == "Sub Agreements") {
                await LinkedContractActions.clickOnLinkSubContractsOption();
                await LinkedContractActions.selectContractsFromGrid("1");
                await LinkedContractActions.clickOnLinkOption();
                await z_1.z.waitForElement("//p[contains(@class,'subAgreementHeading')]/following-sibling::ul//img[@class='action-icon']", 30);
                console.log("Remove link is availeble for linked " + label);
            }
            if (label == "Master Agreement") {
                await LinkedContractActions.clickOnLinkMasterAgreementOption();
                await LinkedContractActions.selectAContractFromGrid();
                await LinkedContractActions.clickOnLinkOption();
                await z_1.z.waitForElement("//p[contains(@class,'masterAgreementHeading')]/following-sibling::app-link-agreements//img[@class='action-icon']", 30);
                console.log("Remove link is availeble for linked " + label);
            }
        }
        else {
            await z_1.z.waitForElement("//img[@class='action-icon']", 30);
            if (label == "Sub Agreements") {
                await z_1.z.waitForElement("//p[contains(@class,'subAgreementHeading')]/following-sibling::ul//img[@class='action-icon']", 10);
                console.log("Remove link is availeble for linked " + label);
            }
            // let count = await z.grabNumberOfVisibleElements("//img[@class='action-icon']");
            // console.log("There are "+count+" Agreements linked to "+label);
            if (label == "Master Agreement") {
                await z_1.z.waitForElement("//p[contains(@class,'masterAgreementHeading')]/following-sibling::app-link-agreements//img[@class='action-icon']", 30);
                console.log("Remove link is availeble for linked " + label);
            }
        }
    }
    static async checkHirarchyEstablished(label) {
        await z_1.z.waitForElement("//span[@class='linkedContractLabel']", 120);
        let flag;
        flag = await CommonComponent_1.CommonComponent.isElementPresent("//img[@class='action-icon']");
        let y = new Boolean(true);
        if (flag == y) {
            console.log("Contract Hierarchy established");
        }
        else {
            console.log("No Linked Agreements available for " + label);
            if (label == "Master Agreement") {
                await LinkedContractActions.clickOnLinkSubContractsOption();
                await LinkedContractActions.selectContractsFromGrid("1");
                await LinkedContractActions.clickOnLinkOption();
                await z_1.z.waitForElement("//p[contains(@class,'subAgreementHeading')]/following-sibling::ul//img[@class='action-icon']", 30);
                console.log("Contract Hierarchy has been stablished for " + label);
            }
            if (label == "Sub Agreements") {
                await LinkedContractActions.clickOnLinkMasterAgreementOption();
                await LinkedContractActions.selectAContractFromGrid();
                await LinkedContractActions.clickOnLinkOption();
                await z_1.z.waitForElement("//p[contains(@class,'masterAgreementHeading')]/following-sibling::app-link-agreements//img[@class='action-icon']", 30);
                console.log("Contract Hierarchy has been stablished for " + label);
            }
        }
    }
    static async checkRemoveOptionLinkUnAvailable(label) {
        await z_1.z.waitForElement("//span[@class='linkedContractLabel']", 120);
        let flag;
        if (label == "Sub Agreements") {
            flag = await CommonComponent_1.CommonComponent.isElementPresent(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
        }
        if (label == "Master Agreement") {
            flag = await CommonComponent_1.CommonComponent.isElementPresent(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_MASTER_AGREEMENT_BTTN));
        }
        let y = new Boolean(true);
        if (flag == y) {
            console.log("No Linked Agreements available for " + label);
            if (label == "Sub Agreements") {
                await LinkedContractActions.clickOnLinkSubContractsOption();
                await LinkedContractActions.selectContractsFromGrid("1");
                await LinkedContractActions.clickOnLinkOption();
                await z_1.z.dontSeeElement("//p[contains(@class,'subAgreementHeading')]/following-sibling::ul//img[@class='action-icon']");
                console.log("Remove link is not availeble for " + label);
            }
            if (label == "Master Agreement") {
                await LinkedContractActions.clickOnLinkMasterAgreementOption();
                await LinkedContractActions.selectAContractFromGrid();
                await LinkedContractActions.clickOnLinkOption();
                await z_1.z.dontSeeElement("//p[contains(@class,'masterAgreementHeading')]/following-sibling::app-link-agreements//img[@class='action-icon']");
                console.log("Remove link is not availeble for " + label);
            }
        }
        else {
            await z_1.z.waitForElement("//img[@class='action-icon']", 30);
            if (label == "Sub Agreements") {
                await z_1.z.dontSeeElement("//p[contains(@class,'subAgreementHeading')]/following-sibling::ul//img[@class='action-icon']");
                console.log("Remove link is not availeble for " + label);
            }
            // let count = await z.grabNumberOfVisibleElements("//img[@class='action-icon']");
            // console.log("There are "+count+" Agreements linked to "+label);
            if (label == "Master Agreement") {
                await z_1.z.dontSeeElement("//p[contains(@class,'masterAgreementHeading')]/following-sibling::app-link-agreements//img[@class='action-icon']");
                console.log("Remove link is not availeble for " + label);
            }
        }
    }
    static async checkSubAgreementsOptionLink() {
        await z_1.z.waitForElement("//span[@class='linkedContractLabel']", 120);
        console.log("Looking for Link Sub Agreement button");
        let flag = await CommonComponent_1.CommonComponent.isElementPresent(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
        console.log("Falg value:" + flag);
        let y = new Boolean(true);
        if (flag == y) {
            await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
        }
        else {
            await z_1.z.waitForElement("//img[@class='action-icon']", 30);
            console.log("linked Agreements already available");
            let count = await z_1.z.grabNumberOfVisibleElements("//img[@class='action-icon']");
            let i;
            for (i = 1; i <= count; i++) {
                await z_1.z.click("//img[@class='action-icon']");
                await z_1.z.click("//span[text()='Remove Link']");
                await z_1.z.click("//button[contains(text(),'Remove')]");
                await z_1.z.wait(6);
            }
            await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
        }
    }
    static async checkMasterAgreementOptionLink() {
        await z_1.z.waitForElement("//span[@class='linkedContractLabel']", 120);
        console.log("Looking for Link Master Agreement button");
        let flag = await CommonComponent_1.CommonComponent.isElementPresent(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_MASTER_AGREEMENT_BTTN));
        let y = new Boolean(true);
        if (flag == y) {
            await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_MASTER_AGREEMENT_BTTN));
        }
        else {
            await z_1.z.waitForElement("//img[@class='action-icon']", 30);
            console.log("linked Agreements already available");
            let count = await z_1.z.grabNumberOfVisibleElements("//img[@class='action-icon']");
            console.log(count);
            let i;
            for (i = 1; i <= count; i++) {
                await z_1.z.click("//img[@class='action-icon']");
                await z_1.z.click("//span[text()='Remove Link']");
                await z_1.z.click("//button[contains(text(),'Remove')]");
                await z_1.z.wait(6);
            }
            await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_MASTER_AGREEMENT_BTTN));
        }
    }
    static async checkNumOfAmandmentsInMasterTile() {
        let text = await z_1.z.grabTextFrom("//p[contains(@class,'masterAgreementHeading')]/following-sibling::app-link-agreements//p[contains(@class,'amendments')]/span");
        let temp = text.replace(/^\D+/g, '');
        let arr = temp.split(")");
        GlobalVariables_1.GlobalVariables.numberOfAmendmentsOnContractTile = arr[0];
        logger_1.logger.info("Number of Amandments for Master contract are:" + GlobalVariables_1.GlobalVariables.numberOfAmendmentsOnContractTile);
    }
    static async checkNumOfAmandmentsInSubContractTile() {
        let text = await z_1.z.grabTextFrom("(//p[contains(@class,'subAgreementHeading')]/following-sibling::ul//p[contains(@class,'amendments')]/span)[1]");
        let temp = text.replace(/^\D+/g, '');
        let arr = temp.split(")");
        GlobalVariables_1.GlobalVariables.numberOfAmendmentsOnContractTile = arr[0];
        logger_1.logger.info("Number of Amandments for Sub contract are:" + GlobalVariables_1.GlobalVariables.numberOfAmendmentsOnContractTile);
    }
    static async verifyNumOfAmandmentsOnDocPage() {
        let text = await z_1.z.grabTextFrom("//div[@class='amendmentsWrapper']/div/span[@class='sectionHeading']");
        let temp = text.replace(/^\D+/g, '');
        let arr = temp.split(")");
        if (GlobalVariables_1.GlobalVariables.numberOfAmendmentsOnContractTile == arr[0]) {
            logger_1.logger.info("Number of Amandments for master contract are shown correctly");
        }
        else {
            throw new Error("Number of Amandments for master contract shown are incorrect");
        }
    }
    static async verifyNumOfAmandmentsTilesDisplayed() {
        let count = await z_1.z.grabNumberOfVisibleElements("//section[@class='amendmentCardWrapper']");
        if (GlobalVariables_1.GlobalVariables.numberOfAmendmentsOnContractTile == count) {
            logger_1.logger.info(count + " Amendment(s) is/are displayed in the document section for the contract");
        }
        else {
            throw new Error("Number of Amandments for master contract shown are incorrect");
        }
    }
    static async ClickOnAmendmentLink(label) {
        if (label == "Master") {
            await z_1.z.click("//p[contains(@class,'masterAgreementHeading')]/following-sibling::app-link-agreements//p[contains(@class,'amendments')]/span");
        }
        else if (label == "Sub") {
            await z_1.z.click("(//p[contains(@class,'subAgreementHeading')]/following-sibling::ul//p[contains(@class,'amendments')]/span)[1]");
        }
        await z_1.z.wait(10);
    }
    static async checkNoSubAgreementLinkedText() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NO_SUB_AGREEMENT_LINKED_TEXT));
        let actualText = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NO_SUB_AGREEMENT_LINKED_TEXT));
        if (actualText.includes("No linked contracts")) {
            console.log("validation text is comming as expected");
        }
        else {
            console.log("Mismatch in validation text");
        }
    }
    static async checkNoMasterAgreementLinkedText() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NO_MASTER_AGREEMENT_LINKED_TEXT));
        let actualText = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.NO_MASTER_AGREEMENT_LINKED_TEXT));
        if (actualText.includes("No linked contracts")) {
            console.log("validation text is comming as expected");
        }
        else {
            console.log("Mismatch in validation text");
        }
    }
    static async clickOnLinkSubContractsOption() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
    }
    static async clickOnLinkMasterAgreementOption() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_MASTER_AGREEMENT_BTTN));
    }
    static async checkGridViewOfSubAgreementsDisplayed() {
        await z_1.z.waitForElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.GRID_VIEW_OF_SUB_AGREEMENTS), 120);
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.GRID_VIEW_OF_SUB_AGREEMENTS));
        await z_1.z.wait(5);
        let actualText = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.GRID_VIEW_OF_SUB_AGREEMENTS));
        console.log("Title:" + actualText);
        if (actualText.includes("Link Sub Agreements")) {
            console.log("Grid view for linking Sub Agreements is displayed as expected");
        }
        else {
            throw new Error("Grid view for linking Sub Agreements is not displayed");
        }
    }
    static async removeAllSubAgreements() {
        let count = await z_1.z.grabNumberOfVisibleElements("//p[contains(@class,'subAgreementHeading')]/following-sibling::ul//img[@class='action-icon']");
        let i;
        for (i = 1; i <= count; i++) {
            await z_1.z.click("//p[contains(@class,'subAgreementHeading')]/following-sibling::ul//img[@class='action-icon']");
            await z_1.z.click("//span[text()='Remove Link']");
            await z_1.z.click("//button[contains(text(),'Remove')]");
            await z_1.z.wait(6);
        }
    }
    static async removeAAddedMasterAgreement() {
        await z_1.z.waitForVisible("//p[contains(@class,'masterAgreementHeading')]/following-sibling::app-link-agreements//img[@class='action-icon']", 60);
        await z_1.z.click("//p[contains(@class,'masterAgreementHeading')]/following-sibling::app-link-agreements//img[@class='action-icon']");
        await z_1.z.click("//span[text()='Remove Link']");
        await z_1.z.click("//button[contains(text(),'Remove')]");
        await z_1.z.wait(6);
    }
    static async checkAllLinkedAgreementsRemoved() {
        await z_1.z.wait(3);
        let flag1 = await CommonComponent_1.CommonComponent.isElementPresent(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
        let flag2 = await CommonComponent_1.CommonComponent.isElementPresent(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
        let yes = new Boolean(true);
        let no = new Boolean(false);
        if (flag1 == yes && flag2 == yes) {
            logger_1.logger.info("All the Linked Sub Agreements are removed");
        }
        else if (flag1 == no && flag2 == no) {
            logger_1.logger.info("All the Linked Sub Agreements are not removed");
        }
    }
    static async checkGridViewOfMasterAgreementsDisplayed() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.GRID_VIEW_OF_MASTER_AGREEMENT));
        let actualText = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.GRID_VIEW_OF_MASTER_AGREEMENT));
        if (actualText.includes("Link Master Agreement")) {
            console.log("Grid view for linking Sub Agreements is displayed as expected");
        }
        else {
            console.error("Grid view for linking Sub Agreements is not displayed");
        }
    }
    static async getContractsListOnGrid() {
        let contractIDs = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACTS_FROM_GRID));
        console.log(contractIDs);
    }
    static async checkNumberOfRecordsInTheGrid() {
        await z_1.z.wait(6);
        let noOfRec = 0;
        noOfRec = await z_1.z.grabNumberOfVisibleElements(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACTS_FROM_GRID));
        console.log("Number of record shown in the grid are: " + noOfRec);
    }
    static async updateVisibleNumberOfRows(noOfContracts) {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.PAGE_COUNT_FILTER_DROPDOWN));
        let recordCountOptionXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.DNY_GRID_ROW_COUNT);
        if (recordCountOptionXpath.includes("TEMPCOUNT")) {
            recordCountOptionXpath = recordCountOptionXpath.replace("TEMPCOUNT", noOfContracts);
            await z_1.z.click(recordCountOptionXpath);
        }
        else {
            logger_1.logger.info("Xpath does not contain TempCount");
        }
    }
    static async selectContractsFromGrid(noOfContracts) {
        let ontractCount = parseInt(noOfContracts);
        for (let i = 1; i <= ontractCount; i++) {
            let contractsCheckBoxXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.DNY_CONTRACT_FROM_GRID);
            if (contractsCheckBoxXpath.includes("TEMPCOUNT")) {
                contractsCheckBoxXpath = contractsCheckBoxXpath.replace("TEMPCOUNT", i.toString());
                await z_1.z.click(contractsCheckBoxXpath);
            }
            else {
                logger_1.logger.info("Xpath does not contain TempCount");
            }
        }
    }
    static async linkButtonStatus(noOfContracts) {
    }
    static async selectAContractFromGrid() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_FROM_GRID));
    }
    static async unselectAContractFromGrid() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_FROM_GRID));
    }
    static async checkIconTypeAvailabeToSelectContractForLinkingSubAgreement() {
        let iconType = await z_1.z.grabAttributeFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_CHECKBOX_FROM_GRID), "role");
        if (iconType == "checkbox") {
            console.log("Checkbox is available to select multiple sub agreements in the grid");
        }
        else {
            console.log("Checkbox is not available to select multiple sub agreements in the grid");
        }
    }
    static async checkIconTypeAvailabeToSelectContractForLinkingMasterAgreement() {
        let iconType = await z_1.z.grabAttributeFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_FROM_GRID), "role");
        if (iconType == "radio") {
            console.log("radio button is available to select a master agreement in the grid");
        }
        else {
            console.log("radio button is not available to select a master agreement in the grid");
        }
    }
    static async checkSelectedContractInGrid() {
        let selectedContractXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.SELECTED_CONTRACTS_FROM_GRID);
        let flag = await z_1.z.grabAttributeFrom(selectedContractXpath, "aria-checked");
        if (flag == "true") {
            console.log("Selected contract is listed on the top in the grid");
        }
        else {
            console.log("Selected contract is not listed on the top in the grid");
        }
    }
    static async clickOnLinkOption() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_LINK_BUTTON_IN_GRID));
    }
    static async clickOnLinkButtonFromTop() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONTRACT_LINK_BUTTON_FROM_TOP));
    }
    static async contractsAddedFromGrid(noOfContracts) {
        let contactsCount = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.AGREEMENTS_LINKED));
        if (contactsCount.includes(noOfContracts)) {
            logger_1.logger.info(noOfContracts + " contract(s) is/are linked as expected");
        }
        else {
            logger_1.logger.error("Number of contracts added are not as expected");
        }
    }
    static async clickOnActionIconOfAddedAgreements(contractsActionIcon) {
        let contractsCheckBoxXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.DNY_AGREEMENT_ACTION_ICON);
        if (contractsCheckBoxXpath.includes("TEMPCOUNT")) {
            contractsCheckBoxXpath = contractsCheckBoxXpath.replace("TEMPCOUNT", contractsActionIcon.toString());
        }
        await z_1.z.click(contractsCheckBoxXpath);
    }
    static async clickOnRemoveLinkOption() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.AGREEMENT_REMOVE_OPTION));
    }
    static async checkAgreementRemoved() {
        await z_1.z.dontSee(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.AGREEMENTS_LINKED));
    }
    static async checkMasterAgreementAddedFromGrid() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.MASTER_AGREEMENT_ADDED));
    }
    static async clickOnActionIconOfAddedAgreement() {
        let contractsCheckBoxXpath = await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.DNY_AGREEMENT_ACTION_ICON);
        if (contractsCheckBoxXpath.includes("TEMPCOUNT")) {
            contractsCheckBoxXpath = contractsCheckBoxXpath.replace("TEMPCOUNT", "1");
        }
        await z_1.z.click(contractsCheckBoxXpath);
    }
    static async checkViewContractDetailsButton() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.VIEW_CONTRACT_DETAILS_BTN));
    }
    static async clickOnViewContractDetailsButton() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.VIEW_CONTRACT_DETAILS_BTN));
    }
    static async checkOpenContarctsDetailsDialogBox(status) {
        if (status == "true") {
            await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.OPEN_CONTRACT_DETAILS_DIALOG_BOX));
        }
        else {
            await z_1.z.dontSee(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.OPEN_CONTRACT_DETAILS_DIALOG_BOX));
        }
    }
    static async checkCofirmationTextInsideDialogBox() {
        let expectedMsg = "Are you sure you want to navigate to Contract details of the selected contract?";
        let validationText = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONFIRMATION_MSG_IN_DIALOGBOX));
        z_1.z.assertEqual(expectedMsg, validationText);
    }
    static async checkOptionInsideDialogBox() {
        await z_1.z.see(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONFIRM_OPTION_INSIDE_DIALOG_BOX));
        await z_1.z.see(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CANCEL_OPTION_INSIDE_DIALOG_BOX));
    }
    static async searchColumnvalueWith(label, value) {
        let index = "";
        if (label == "Contract Number") {
            index = "1";
        }
        if (label == "Contract Title") {
            index = "2";
        }
        if (label == "Contracting Party") {
            index = "3";
        }
        await z_1.z.fillField("(//input[@placeholder='Search'])[" + index + "]", value);
        await z_1.z.pressKey("Enter");
        await z_1.z.wait(3);
        await z_1.z.waitForInvisible("//i[@class='p-datatable-loading-icon pi pi-spin pi-spinner']");
    }
    static async filterColumnvalueWith(label, value) {
        let index = "";
        if (label == "Category") {
            index = "1";
        }
        if (label == "Contract Type") {
            index = "2";
        }
        if (label == "Contract SubType") {
            index = "3";
        }
        if (label == "Contract status") {
            index = "4";
        }
        await z_1.z.click("(//p-dropdown[@placeholder='Select']/div)[" + index + "]");
        await z_1.z.fillField("//div[contains(@class,'dropdown-filter')]//input[@placeholder='Search']", value);
        await z_1.z.click("//span[@title='" + value + "']");
        await z_1.z.wait(3);
        await z_1.z.waitForInvisible("//i[@class='p-datatable-loading-icon pi pi-spin pi-spinner']");
    }
    static async checkConfirmationDialogTitle() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.REMOVE_MASTER_CONTRACT_CONFIRMATION_DIALOG));
        let dialogTitlePopup = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.REMOVE_MASTER_CONTRACT_CONFIRMATION_DIALOG));
        if (dialogTitlePopup.includes("Remove Agreement Link")) {
            logger_1.logger.info("Dialog title is shown as expected");
        }
        else {
            throw new Error("Dialog title shown is not as expected");
        }
    }
    static async clickOnConfirmOptionInsideDialogBox() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONFIRM_OPTION_INSIDE_DIALOG_BOX));
    }
    static async clickOnCancelOptionInsideDialogBox() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CANCEL_OPTION_INSIDE_DIALOG_BOX));
    }
    static async dragAndDropGridColumns() {
        await z_1.z.dragAndDrop(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.GRID_COL_1), await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.GRID_COL_2));
    }
    static async getInformativeTextFromConfirmationDialog() {
        let dialogPopupText = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONFIRMATION_DIALOG_TEXT));
        if (dialogPopupText.includes("Are you sure you want to remove master agreement link from the sub agreement(s)?")) {
            logger_1.logger.info("Dialog informative text is shown as expected");
        }
        else {
            throw new Error("Dialog informative text shown is not as expected");
        }
    }
    static async getInformativeTextFromConfirmationDialogForSubAgreement() {
        let dialogPopupText = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(LinkedContractElements_1.linkedContractElements.CONFIRMATION_DIALOG_TEXT));
        if (dialogPopupText.includes("Are you sure you want to remove sub agreement link from the master agreement ?")) {
            logger_1.logger.info("Dialog informative text is shown as expected");
        }
        else {
            throw new Error("Dialog informative text shown is not as expected");
        }
    }
}
exports.LinkedContractActions = LinkedContractActions;
