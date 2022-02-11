//Rule: classname should be ts file name with first letter as caps

/**
 * The class is to perform linked contract action
 *
 * @author somnath.k
 *
 *
*/

import { AuroraContractDetailsActions } from "../Contract Details/AuroraContractDetailsActions";
import { AuroraLmt } from "../../../common/Data/AuroraLmt";
import { CommonComponent } from "./../../commonKeywords/CommonComponent";
import { GlobalVariables } from "../../../common/dataCreation/GlobalVariables";
import { auroraContractDetailsElements } from "../Contract Details/AuroraContractDetailsElements";
import { linkedContractElements } from "./LinkedContractElements";
import { logger } from "../../../common/Logger/logger";
import { z } from "actionbot-wrapper/z";
const { I } = inject();


export class LinkedContractActions {

    /********************************************************Sub Services Starts**********************************************************/


    /**
    * To click on linked contracts menu
    * @author somnath.k
    */
    static async clickonLinkedContractMenu() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.LINKED_CONTRACT_MENU));
    }

    /**
    * To click on link master agreement button
    * @author somnath.k
    */
    static async clickonlinkMasterAgreementBttn() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.LINK_MASTER_AGREEMENT_BTTN));
    }

    /**
    * To click on link sub agreement button
    * @author somnath.k
    */
    static async clickonlinkSubAgreementBttn() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
    }

    /**
    * To click on link button from the popup
    * @author somnath.k
    */
    static async clickonPopuplinkBttn() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.LINK_BTTN_POPUP));
    }

    /**
    * To click on page count dropdown
    * @author somnath.k
    */
    static async clickonPageCountDropdown() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.PAGE_COUNT_FILTER_DROPDOWN));
    }

    /**
    * To click on last page icon
    * @author somnath.k
    */
    static async clickonLastPageIcon() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.LAST_PAGE_ICON));
    }

    /**
    * To click on first page icon
    * @author somnath.k
    */
    static async clickonFirstPageIcon() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.FIRST_PAGE_ICON));
    }

    /**
    * To click on next page icon
    * @author somnath.k
    */
    static async clickonNextPageIcon() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.NEXT_PAGE_ICON));
    }

    /**
    * To click on previous page icon
    * @author somnath.k
    */
    static async clickonPreviousPageIcon() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.PREVIOUS_PAGE_ICON));
    }

    /**
    * To click on sort contract number icon
    * @author somnath.k
    */
    static async clickonSortContractNumber() {
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));
        await z.click(await AuroraLmt.getElement(linkedContractElements.SORT_CONTRACT_NUMBER));
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));
    }

    /**
    * To click on sort contract title icon
    * @author somnath.k
    */
    static async clickonSortContractTitle() {
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));
        await z.click(await AuroraLmt.getElement(linkedContractElements.SORT_CONTRACT_TITLE));
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));
    }

    /**
    * To click on sort contract category icon
    * @author somnath.k
    */
    static async clickonSortContractCategory() {
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));
        await z.click(await AuroraLmt.getElement(linkedContractElements.SORT_CONTRACT_CATEGORY));
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));
    }

    /**
    * To click on sort contract type icon
    * @author somnath.k
    */
    static async clickonSortContractType() {
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));
        await z.click(await AuroraLmt.getElement(linkedContractElements.SORT_CONTRACT_TYPE));
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));
    }

    /**
    * To click on sort contract subtype icon
    * @author somnath.k
    */
    static async clickonSortContractSubtype() {
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));
        await z.click(await AuroraLmt.getElement(linkedContractElements.SORT_CONTRACT_SUBTYPE));
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));
    }

    /**
    * To click on sort contracting party icon
    * @author somnath.k
    */
    static async clickonSortContractingParty() {
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));
        await z.click(await AuroraLmt.getElement(linkedContractElements.SORT_CONTRACTING_PARTY));
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));
    }

    /**
    * To click on sort contract status icon
    * @author somnath.k
    */
    static async clickonSortContractStatus() {
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));
        await z.click(await AuroraLmt.getElement(linkedContractElements.SORT_CONTRACT_STATUS));
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));
    }



    /********************************************************Sub Services Ends************************************************************/


    /********************************************************Services Starts**************************************************************/

    /**
    * To search contract based on given hierarchy status
    * @param {number} statusIndex
    * @author somnath.k
    */
    static async searchContractBasedonHierarchyStatus(statusIndex: number) {
        await CommonComponent.gridDropdownSelectionBasedonValue(await AuroraLmt.getElement(linkedContractElements.HIERARCHY_STATUS_DROPDOWN), await AuroraLmt.getElement(linkedContractElements.HIERARCHY_STATUS_OPTION_LIST), statusIndex);
    }






    /**
    * To select and store all contract from the popup
    * @author somnath.k
    */
    static async selectandStoreAllContractinFirstPage() {
        if (GlobalVariables.entireRowData.size > 0) {
            GlobalVariables.entireRowData.clear();
        }
        let allRcordsCheckBoxXpathList = await CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt.getElement(linkedContractElements.ALL_RECORDS_FROM_POPUP));
        await z.click(await AuroraLmt.getElement(linkedContractElements.SELECT_ALL_CONTRACTS_FROM_GRID));
        for (let i = 0; i < allRcordsCheckBoxXpathList.length; i++) {
            // let count = i + 1;
            let linkedContractNumberXpath = allRcordsCheckBoxXpathList[i] + "//following-sibling::div[@columnindex='1' and @role='gridcell']";
            let linkedContractNumber = await z.grabTextFrom(linkedContractNumberXpath);
            GlobalVariables.linkedContractNumbers.push(linkedContractNumber.trim());
        }
    }

    /**
    * To verify linked contract number in view linked contract page
    * @param {String[]} linkedContractNumber
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyAddedAgreementInCard(linkedContractNumber: String[]) {
        let flag = false;
        for (let i = 0; i < linkedContractNumber.length; i++) {
            let linkedContractNumberXpath = await AuroraLmt.getElement(linkedContractElements.DNY_LINKED_CONTRACT_NUMBER_IN_CARD);
            linkedContractNumberXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(linkedContractNumber[i].trim() as string, linkedContractNumberXpath);
            await z.scrollIntoView(linkedContractNumberXpath);
            if ((await CommonComponent.getHtmlElementData(linkedContractNumberXpath) != null) || (await CommonComponent.getHtmlElementData(linkedContractNumberXpath) != undefined)) {
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
    static async verifyDefaultPageCountVal(defaultPageCount: string) {
        let flag = false;
        let UIPageCount = await z.grabTextFrom(await AuroraLmt.getElement(linkedContractElements.PAGE_COUNT_FILTER_DROPDOWN));
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
        GlobalVariables.temporayString = "";
        await this.clickonPageCountDropdown();
        //(await AuroraLmt.getElement(linkedContractElements.PAGE_COUNT_FILTER_DROPDOWN));
        GlobalVariables.temporayString = await CommonComponent.clickRandomValueFromList(await AuroraLmt.getElement(linkedContractElements.PAGE_COUNT_OPTION_LIST));
    }

    /**
    * To verify no of records based on page count selected
    * @param {number} selectedPageCountVal
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyRecordsBasedonPageCountFilter(selectedPageCountVal: number) {
        let flag = false;
        let allRcordscount = await CommonComponent.grabNumberElements(await AuroraLmt.getElement(linkedContractElements.ALL_RECORDS_FROM_POPUP));
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
    static async verifyPageCountRange(pageNumberRange: string) {
        let flag = false;
        let uiPageNumberRange = await z.grabTextFrom(await AuroraLmt.getElement(linkedContractElements.PAGE_NUMBER_RANGE));
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
    static async verifyParticularMenusDisabled(disabledMenuList: String[]) {
        let flag = false;
        let disabledMenuUITextList = await CommonComponent.retrieveUITextListBasedonIndexWithSingleXpath(await AuroraLmt.getElement(auroraContractDetailsElements.CONTRACT_DISABLED_MENU_LIST));
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
    static async selectOnlyParticularCP(selectCPName: string) {
        await z.fillField(await AuroraLmt.getElement(auroraContractDetailsElements.CP_SEARCH_FIELD), selectCPName);
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(auroraContractDetailsElements.CP_SEARCH_LOADING));
        if ((await CommonComponent.getHtmlElementData(await AuroraLmt.getElement(auroraContractDetailsElements.CP_ADDED_TICK)) != null) || (await CommonComponent.getHtmlElementData(await AuroraLmt.getElement(auroraContractDetailsElements.CP_ADDED_TICK)) != undefined)) {
            logger.info("Specified CP name is already selected in the contract ", selectCPName);
        } else {
            await AuroraContractDetailsActions.selectCpTypeRandomly();
            await z.fillField(await AuroraLmt.getElement(auroraContractDetailsElements.CP_SEARCH_FIELD), selectCPName);
            await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(auroraContractDetailsElements.CP_SEARCH_LOADING));
            await AuroraContractDetailsActions.selectFirstCpFromAutosugstn();
        }
        let cpCardCount = await CommonComponent.grabNumberElements(await AuroraLmt.getElement(auroraContractDetailsElements.CP_CARD_LIST));
        if (cpCardCount > 1) {
            await this.removeAllCPExceptSpecifiedCP(selectCPName);
        }
    }

    /**
    * To remove all cp except specified cp
    * @param {string} specifiedCP
    * @author somnath.k
    */
    static async removeAllCPExceptSpecifiedCP(specifiedCP: string) {
        let cpNameList = await CommonComponent.retrieveUITextListBasedonIndexWithSingleXpath(await AuroraLmt.getElement(linkedContractElements.ALL_ADDED_CP_NAMES));
        for (let i = 0; i < cpNameList.length; i++) {
            if (cpNameList[i].trim().includes(specifiedCP.trim())) {
                continue;
            } else {
                //remove cp code
                let count = i + 1;
                let dynamicThreedotsIconXpath = await CommonComponent.retrieveParticularElementXpathBasedonIndexValue(count + "", await AuroraLmt.getElement(linkedContractElements.DNY_THREE_DOTS_IN_CARD));
                await z.click(dynamicThreedotsIconXpath);
                await AuroraContractDetailsActions.clickOnRemvButton();
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
        let gridRcrdXpath = await AuroraLmt.getElement(linkedContractElements.ALL_RECORDS_FROM_POPUP);
        let gridRecord = await CommonComponent.retrieveElementXpathBasedonIndex(gridRcrdXpath);
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
        if (GlobalVariables.linkedContractNumbers.length > 0) {
            GlobalVariables.linkedContractNumbers = [];
        }
        let allRcordsXpathList = await CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt.getElement(linkedContractElements.ALL_RECORDS_FROM_POPUP));
        let randomCount = await CommonComponent.getRandomNumber(allRcordsXpathList.length) as number;
        await z.click(allRcordsXpathList[randomCount] as string);
        let linkedContractNumberXpath = allRcordsXpathList[randomCount] + "//following-sibling::div[@columnindex='1' and @role='gridcell']";
        let linkedContractNumber = await z.grabTextFrom(linkedContractNumberXpath);
        GlobalVariables.linkedContractNumbers.push(linkedContractNumber.trim());
    }


    /**
    * To get contract details from the grid
    *
    * @author Sowmyashree
    */
    static async getContractDetails() {
        let columnXpath = await AuroraLmt.getElement(linkedContractElements.COLUMN_NAME);
        let columnValue: String[] = await CommonComponent.retrieveUITextListBasedonIndexWithSingleXpath(columnXpath);
        for (let i = 1; i <= columnValue.length; i++) {
            let contractDetailXpath = await AuroraLmt.getElement(linkedContractElements.DYN_FIRST_ROW_CONTRACT_DETAIL);
            contractDetailXpath = await CommonComponent.retrieveParticularElementXpathBasedonIndexValue(i + "", contractDetailXpath);
            let rowValue = await z.grabTextFrom(contractDetailXpath);
            GlobalVariables.ContractDetailsToLink.set(columnValue[i - 1], rowValue);

        }

    }

    /**
    * To search contract ID in the grid
    *
    * @author Sowmyashree
    */
    static async searchContractID() {
        let contractID = GlobalVariables.ContractDetailsToLink.get("ID");
        await z.fillField(await AuroraLmt.getElement(linkedContractElements.CONTRACT_ID_SEARCH_FIELD), contractID);
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));

    }

    /**
    * To check the searched ID result in the grid
    *
    * @author Sowmyashree
    */
    static async checkSearchID() {
        let flag = false;
        let contractDetailXpath = await AuroraLmt.getElement(linkedContractElements.DYN_FIRST_ROW_CONTRACT_DETAIL);
        contractDetailXpath = await CommonComponent.retrieveParticularElementXpathBasedonIndexValue("1", contractDetailXpath);
        let rowValue: string = await z.grabTextFrom(contractDetailXpath);
        let contractID = GlobalVariables.ContractDetailsToLink.get("ID") as string;
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
        let contractTitle = GlobalVariables.ContractDetailsToLink.get("Title");
        await z.fillField(await AuroraLmt.getElement(linkedContractElements.CONTRACT_TITLE_SEARCH_FIELD), contractTitle);
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));

    }

    /**
    * To check the searched contract title result in the grid
    *
    * @author Sowmyashree
    */
    static async checkSearchContractTitle() {
        let flag = false;
        let contractDetailXpath = await AuroraLmt.getElement(linkedContractElements.DYN_FIRST_ROW_CONTRACT_DETAIL);
        contractDetailXpath = await CommonComponent.retrieveParticularElementXpathBasedonIndexValue("2", contractDetailXpath);
        let rowValue: string = await z.grabTextFrom(contractDetailXpath);
        let contractTitle = GlobalVariables.ContractDetailsToLink.get("Title") as string;
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
        let contractCp = GlobalVariables.ContractDetailsToLink.get("Contracting Party") as string;
        await z.fillField(await AuroraLmt.getElement(linkedContractElements.CONTRACT_CP_SEARCH_FIELD), contractCp);
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));

    }

    /**
    * To check the searched contracting party result in the grid
    *
    * @author Sowmyashree
    */
    static async checkContractCp() {
        let flag = false;
        let contractDetailXpath = await AuroraLmt.getElement(linkedContractElements.DYN_FIRST_ROW_CONTRACT_DETAIL);
        contractDetailXpath = await CommonComponent.retrieveParticularElementXpathBasedonIndexValue("6", contractDetailXpath);
        let rowValue: string = await z.grabTextFrom(contractDetailXpath);
        let contractCp = GlobalVariables.ContractDetailsToLink.get("Contracting Party") as string;
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
        let contractCategory = GlobalVariables.ContractDetailsToLink.get("Category") as string;
        let dropDownXpath = await AuroraLmt.getElement(linkedContractElements.CONTRACT_CATEGORY_DROPDOWN);
        let dropDownlistXpath = await AuroraLmt.getElement(linkedContractElements.CONTRACT_CATEGORY_DROPDOWN_LIST);
        await CommonComponent.gridDropdownSelectionBasedonStringValue(dropDownXpath, dropDownlistXpath, contractCategory)
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));

    }

    /**
    * To check the contract category search result in the grid
    *
    * @author Sowmyashree
    */
    static async checkContractCategory() {
        let flag = false;
        let contractDetailXpath = await AuroraLmt.getElement(linkedContractElements.DYN_FIRST_ROW_CONTRACT_DETAIL);
        contractDetailXpath = await CommonComponent.retrieveParticularElementXpathBasedonIndexValue("3", contractDetailXpath);
        let rowValue: string = await z.grabTextFrom(contractDetailXpath);
        let contractCategory = GlobalVariables.ContractDetailsToLink.get("Category") as string;
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
        let contractCategory = GlobalVariables.ContractDetailsToLink.get("Type") as string;
        let dropDownXpath = await AuroraLmt.getElement(linkedContractElements.CONTRACT_TYPE_DROPDOWN);
        let dropDownlistXpath = await AuroraLmt.getElement(linkedContractElements.CONTRACT_TYPE_DROPDOWN_LIST);
        await CommonComponent.gridDropdownSelectionBasedonStringValue(dropDownXpath, dropDownlistXpath, contractCategory)
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));

    }

    /**
    * To check the contract type search result in the grid
    *
    * @author Sowmyashree
    */
    static async checkContractType() {
        let flag = false;
        let contractDetailXpath = await AuroraLmt.getElement(linkedContractElements.DYN_FIRST_ROW_CONTRACT_DETAIL);
        contractDetailXpath = await CommonComponent.retrieveParticularElementXpathBasedonIndexValue("4", contractDetailXpath);
        let rowValue: string = await z.grabTextFrom(contractDetailXpath);
        let contractType = GlobalVariables.ContractDetailsToLink.get("Type") as string;
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
        let contractCategory = GlobalVariables.ContractDetailsToLink.get("Subtype") as string;
        let dropDownXpath = await AuroraLmt.getElement(linkedContractElements.CONTRACT_SUBTYPE_DROPDOWN);
        let dropDownlistXpath = await AuroraLmt.getElement(linkedContractElements.CONTRACT_SUBTYPE_DROPDOWN_LIST);
        await CommonComponent.gridDropdownSelectionBasedonStringValue(dropDownXpath, dropDownlistXpath, contractCategory)
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));

    }

    /**
    * To check the contract subtype search result in the grid
    *
    * @author Sowmyashree
    */
    static async checkContractSubType() {
        let flag = false;
        let contractDetailXpath = await AuroraLmt.getElement(linkedContractElements.DYN_FIRST_ROW_CONTRACT_DETAIL);
        contractDetailXpath = await CommonComponent.retrieveParticularElementXpathBasedonIndexValue("5", contractDetailXpath);
        let rowValue: string = await z.grabTextFrom(contractDetailXpath);
        let contractSubtype = GlobalVariables.ContractDetailsToLink.get("Subtype") as string;
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
        let contractStatus = GlobalVariables.ContractDetailsToLink.get("Status") as string;
        let dropDownXpath = await AuroraLmt.getElement(linkedContractElements.CONTRACT_STATUS_DROPDOWN);
        let dropDownlistXpath = await AuroraLmt.getElement(linkedContractElements.CONTRACT_STATUS_DROPDOWN_LIST);
        await CommonComponent.gridDropdownSelectionBasedonStringValue(dropDownXpath, dropDownlistXpath, contractStatus);
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(linkedContractElements.FIRST_RECORD_IN_GRID));

    }

    /**
    * To check the contract status search result in the grid
    *
    * @author Sowmyashree
    */
    static async checkContractStatus() {
        let flag = false;
        let contractDetailXpath = await AuroraLmt.getElement(linkedContractElements.DYN_FIRST_ROW_CONTRACT_DETAIL);
        contractDetailXpath = await CommonComponent.retrieveParticularElementXpathBasedonIndexValue("7", contractDetailXpath);
        let rowValue: string = await z.grabTextFrom(contractDetailXpath);
        let contractStatus = GlobalVariables.ContractDetailsToLink.get("Status") as string;
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
        let dropDownXpath = await AuroraLmt.getElement(linkedContractElements.CONTRACT_STATUS_DROPDOWN);
        let value = await z.grabTextFrom(dropDownXpath);
        let actual_Result = value == "" || value == null || value == undefined || value.length === 0
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
        await z.wait(2);
        let numOfButtons:number= await z.grabNumberOfVisibleElements( await AuroraLmt.getElement(linkedContractElements.RMV_CONTRACT_LINK_MASTER_DIALOG_OPTIONS));
        return numOfButtons;
    }

    /**
    * To verify two buttons in Remove Sub Contract Link Confirmation Dialog
    * @author Minaz Khan
    */
    static async verifyTwoButtonsRemoveSubContractLinkConfirmationDialog() {
        await z.wait(2);
        let numOfButtons:number= await z.grabNumberOfVisibleElements(await AuroraLmt.getElement(linkedContractElements.RMV_CONTRACT_LINK_SUB_CONTRACT_DIALOG_OPTIONS));
        return numOfButtons;
    }



    /**
    * To check Contract prview section displayed
    * @author Datta
    */
    static async checkContractPreviewSection() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.CONTRACT_PREVIEW_SECTION));
    }

    static async checkContractHierachyMessageForStandaloneContarcts() {
        console.log("Under method");
        await z.wait(20);
        let expectedMsg = "Contract link cannot be established for Standalone Contracts. Please change the Hierarchy Status in Contract details tab to 'Master Contract' or 'Sub Contract' to establish contract links."
        let validationText = await z.grabTextFrom(await AuroraLmt.getElement(linkedContractElements.CONTRACT_HIERACHY_VALIDATION_MSG_FOR_STANDALONE_CONTRACTS));
        console.log(validationText);
        if (validationText.includes(expectedMsg)) {
            console.log("Validation text coming as expected");
        } else {
        }
    }

    static async checkContractDetailLink() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.VIEW_CONTRACT_DETAILS_BTN));
    }

    static async checkLinkedContracts() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.LINKED_CONTRACTS));
        let count = await z.grabNumberOfVisibleElements(await AuroraLmt.getElement(linkedContractElements.LINKED_CONTRACTS));
        console.log("Number of linked contracts are:" + count);
    }


    static async clickOnAmendmentExpandIcon() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.AMENDMENT_EXPAND_ICON));
    }

    static async ckeckAmendmentSection() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.AMENDMENT_VIEW));
    }

    static async ckeckAmendmentDetailsOption() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.AMENDMENT_DETAILS_OPTION));
    }

    static async ckeckAmendmentNumField() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.AMENDMENT_NUM_FIELD));
    }
     static async CheckAmentmentLink() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.AMENDMENT_LINK));
    }

    static async ClickOnAmentmentLink() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.AMENDMENT_LINK));
    }

    static async ckeckNavigateAmendmentSectionDialog() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.AMENDMENT_NAVIGATION_DIALOG));
    }

    static async ckeckAmendmentUploadedByField() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.AMENDMENT_UPLOADED_BY_FIELD));
    }

    static async ckeckAmendmentUploadedOnField() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.AMENDMENT_UPLOADED_ON_FIELD));
    }
    static async ckeckDialogboxOption(option: string) {
        let dialogboxOptionXpath = await AuroraLmt.getElement(linkedContractElements.DYN_DIALOGBOX_OPTION);
        if (dialogboxOptionXpath.includes("TEMPCOUNT")) {
            dialogboxOptionXpath = dialogboxOptionXpath.replace("TEMPCOUNT", option);
        }
        await z.seeElement(dialogboxOptionXpath);
    }

    static async clickOnDialogboxOption(option: string) {
        let dialogboxOptionXpath = await AuroraLmt.getElement(linkedContractElements.DYN_DIALOGBOX_OPTION);
        if (dialogboxOptionXpath.includes("TEMPCOUNT")) {
            dialogboxOptionXpath = dialogboxOptionXpath.replace("TEMPCOUNT", option);
        }
        await z.click(dialogboxOptionXpath);
    }

    static async ckeckActiveSection() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.ACTIVE_SECTION));
        let header = await z.grabTextFrom(await AuroraLmt.getElement(linkedContractElements.ACTIVE_SECTION));
        console.log("User navigated to: " + header + " - Section");
    }
    static async ckeckAmendmentDescriptionField() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.AMENDMENT_DESCRIPTION_FIELD));
    }

    static async ckeckContractFlagIcon() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.CONTRACT_FIELD_ICON));
    }

    static async ckeckContractTileField() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.CONTRACT_TILE_FIELD));
    }

    static async ckeckContractNumField() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.CONTRACT_NUM_FIELD));
    }

    static async ckeckContractTypeField() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.CONTRACT_TYPE_FIELD));
    }

    static async ckeckContractSubTypeField() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.CONTRACT_SUB_TYPE_FIELD));
    }

    static async ckeckContractStatusField() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.CONTRACT_STATUS_ON_TILE));
        console.log("Contract status is availeble on tile view");
    }

    static async checkContractingPartyField() {
        console.log("Checking contracting party field");
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.CONTRACTING_PARTY_ON_TILE_VIEW));
        console.log("contracting party field is available on tile view");
    }

    static async checkContractingPartiesInTooltip() {
        await z.moveCursorTo(await AuroraLmt.getElement(linkedContractElements.CONTRACTING_PARTY_ON_TILE_VIEW));
        //await z.seeElement(await AuroraLmt.getElement(linkedContractElements.CONTRACTING_PARTIES_IN_TOOLTIP));
    }

    static async checkContractDetailsButton() {
        console.log("Checking contract details Button");
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.VIEW_CONTRACT_DETAILS_BTN));
        console.log("Contract details Button is available");
    }

    static async checkContractDetailsLinkOnTileView() {
        console.log("Checking contract details link");
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.VIEW_CONTRACT_DETAILS_LNK_ON_TILE_VIEW));
        console.log("Contract details link is available");
    }

    static async clickOnContractDetailsLinkOnTileView() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.VIEW_CONTRACT_DETAILS_LNK_ON_TILE_VIEW));
        console.log("Clicked on Contract details link");
    }

    static async checkRemoveOptionLinkAvailable(label:string) {
        await z.waitForElement("//span[@class='linkedContractLabel']",120);
        let flag;
        if(label=="Sub Agreements"){
        flag = await CommonComponent.isElementPresent(await AuroraLmt.getElement(linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
        }
        if(label=="Master Agreement"){
            flag = await CommonComponent.isElementPresent(await AuroraLmt.getElement(linkedContractElements.LINK_MASTER_AGREEMENT_BTTN));
        }
        let y = new Boolean(true);
        if (flag == y) {
            // await z.seeElement(await AuroraLmt.getElement(linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
            console.log("No Linked Agreements available for "+label);
            if(label=="Sub Agreements"){
                await LinkedContractActions.clickOnLinkSubContractsOption();
                await LinkedContractActions.selectContractsFromGrid("1");
                await LinkedContractActions.clickOnLinkOption();
                await z.waitForElement("//p[contains(@class,'subAgreementHeading')]/following-sibling::ul//img[@class='action-icon']",30);
                console.log("Remove link is availeble for linked "+label);
            }
            if(label=="Master Agreement"){
                await LinkedContractActions.clickOnLinkMasterAgreementOption();
                await LinkedContractActions.selectAContractFromGrid();
                await LinkedContractActions.clickOnLinkOption();
                await z.waitForElement("//p[contains(@class,'masterAgreementHeading')]/following-sibling::app-link-agreements//img[@class='action-icon']",30);
                console.log("Remove link is availeble for linked "+label);
            }
        } else {
            await z.waitForElement("//img[@class='action-icon']",30);
            if(label=="Sub Agreements"){
                await z.waitForElement("//p[contains(@class,'subAgreementHeading')]/following-sibling::ul//img[@class='action-icon']",10);
                console.log("Remove link is availeble for linked "+label);
            }

            // let count = await z.grabNumberOfVisibleElements("//img[@class='action-icon']");
            // console.log("There are "+count+" Agreements linked to "+label);

            if(label=="Master Agreement"){
                await z.waitForElement("//p[contains(@class,'masterAgreementHeading')]/following-sibling::app-link-agreements//img[@class='action-icon']",30);
                console.log("Remove link is availeble for linked "+label);
            }
        }
    }
    static async checkHirarchyEstablished(label:string){
        await z.waitForElement("//span[@class='linkedContractLabel']",120);
        let flag;
        flag = await CommonComponent.isElementPresent("//img[@class='action-icon']");
        let y = new Boolean(true);
        if (flag == y) {
            console.log("Contract Hierarchy established");
        }else{
            console.log("No Linked Agreements available for "+label);
            if(label=="Master Agreement"){
                await LinkedContractActions.clickOnLinkSubContractsOption();
                await LinkedContractActions.selectContractsFromGrid("1");
                await LinkedContractActions.clickOnLinkOption();
                await z.waitForElement("//p[contains(@class,'subAgreementHeading')]/following-sibling::ul//img[@class='action-icon']",30);
                console.log("Contract Hierarchy has been stablished for "+label);
            }
            if(label=="Sub Agreements"){
                await LinkedContractActions.clickOnLinkMasterAgreementOption();
                await LinkedContractActions.selectAContractFromGrid();
                await LinkedContractActions.clickOnLinkOption();
                await z.waitForElement("//p[contains(@class,'masterAgreementHeading')]/following-sibling::app-link-agreements//img[@class='action-icon']",30);
                console.log("Contract Hierarchy has been stablished for "+label);
            }
        }
    }
    static async checkRemoveOptionLinkUnAvailable(label:string) {
        await z.waitForElement("//span[@class='linkedContractLabel']",120);
        let flag;
        if(label=="Sub Agreements"){
        flag = await CommonComponent.isElementPresent(await AuroraLmt.getElement(linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
        }
        if(label=="Master Agreement"){
            flag = await CommonComponent.isElementPresent(await AuroraLmt.getElement(linkedContractElements.LINK_MASTER_AGREEMENT_BTTN));
        }
        let y = new Boolean(true);
        if (flag == y) {

            console.log("No Linked Agreements available for "+label);
            if(label=="Sub Agreements"){
                await LinkedContractActions.clickOnLinkSubContractsOption();
                await LinkedContractActions.selectContractsFromGrid("1");
                await LinkedContractActions.clickOnLinkOption();
                await z.dontSeeElement("//p[contains(@class,'subAgreementHeading')]/following-sibling::ul//img[@class='action-icon']");
                console.log("Remove link is not availeble for "+label);
            }
            if(label=="Master Agreement"){
                await LinkedContractActions.clickOnLinkMasterAgreementOption();
                await LinkedContractActions.selectAContractFromGrid();
                await LinkedContractActions.clickOnLinkOption();
                await z.dontSeeElement("//p[contains(@class,'masterAgreementHeading')]/following-sibling::app-link-agreements//img[@class='action-icon']");
                console.log("Remove link is not availeble for "+label);
            }
        } else {
            await z.waitForElement("//img[@class='action-icon']",30);
            if(label=="Sub Agreements"){
                await z.dontSeeElement("//p[contains(@class,'subAgreementHeading')]/following-sibling::ul//img[@class='action-icon']");
                console.log("Remove link is not availeble for "+label);
            }

            // let count = await z.grabNumberOfVisibleElements("//img[@class='action-icon']");
            // console.log("There are "+count+" Agreements linked to "+label);

            if(label=="Master Agreement"){
                await z.dontSeeElement("//p[contains(@class,'masterAgreementHeading')]/following-sibling::app-link-agreements//img[@class='action-icon']");
                console.log("Remove link is not availeble for "+label);
            }
        }
    }

    static async checkSubAgreementsOptionLink() {
        await z.waitForElement("//span[@class='linkedContractLabel']",120);
        console.log("Looking for Link Sub Agreement button");
        let flag = await CommonComponent.isElementPresent(await AuroraLmt.getElement(linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
        console.log("Falg value:" + flag);
        let y = new Boolean(true);
        if (flag == y) {
            await z.seeElement(await AuroraLmt.getElement(linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
        } else {
            await z.waitForElement("//img[@class='action-icon']",30);
            console.log("linked Agreements already available");
            let count = await z.grabNumberOfVisibleElements("//img[@class='action-icon']");
            let i: number;
            for (i = 1; i <= count; i++) {
                await z.click("//img[@class='action-icon']");
                await z.click("//span[text()='Remove Link']");
                await z.click("//button[contains(text(),'Remove')]");
                await z.wait(6);
            }
            await z.seeElement(await AuroraLmt.getElement(linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
        }
    }

    static async checkMasterAgreementOptionLink() {
        await z.waitForElement("//span[@class='linkedContractLabel']",120);
        console.log("Looking for Link Master Agreement button");
        let flag = await CommonComponent.isElementPresent(await AuroraLmt.getElement(linkedContractElements.LINK_MASTER_AGREEMENT_BTTN));
        let y = new Boolean(true);
        if (flag == y) {
            await z.seeElement(await AuroraLmt.getElement(linkedContractElements.LINK_MASTER_AGREEMENT_BTTN));
        } else {
            await z.waitForElement("//img[@class='action-icon']",30);
            console.log("linked Agreements already available");
            let count = await z.grabNumberOfVisibleElements("//img[@class='action-icon']");
            console.log(count);
            let i: number;
            for (i = 1; i <= count; i++) {
                await z.click("//img[@class='action-icon']");
                await z.click("//span[text()='Remove Link']");
                await z.click("//button[contains(text(),'Remove')]");
                await z.wait(6);
            }
            await z.seeElement(await AuroraLmt.getElement(linkedContractElements.LINK_MASTER_AGREEMENT_BTTN));

        }
    }

    static async checkNumOfAmandmentsInMasterTile(){
        let text:string=await z.grabTextFrom("//p[contains(@class,'masterAgreementHeading')]/following-sibling::app-link-agreements//p[contains(@class,'amendments')]/span");
        let temp = text.replace( /^\D+/g, '');
        let arr=temp.split(")");
        GlobalVariables.numberOfAmendmentsOnContractTile=arr[0];
        logger.info("Number of Amandments for Master contract are:"+ GlobalVariables.numberOfAmendmentsOnContractTile);

    }

    static async checkNumOfAmandmentsInSubContractTile(){
        let text:string=await z.grabTextFrom("(//p[contains(@class,'subAgreementHeading')]/following-sibling::ul//p[contains(@class,'amendments')]/span)[1]");
        let temp = text.replace( /^\D+/g, '');
        let arr=temp.split(")");
        GlobalVariables.numberOfAmendmentsOnContractTile=arr[0];
        logger.info("Number of Amandments for Sub contract are:"+ GlobalVariables.numberOfAmendmentsOnContractTile);
    }
    static async verifyNumOfAmandmentsOnDocPage(){
        let text:string=await z.grabTextFrom("//div[@class='amendmentsWrapper']/div/span[@class='sectionHeading']");
        let temp = text.replace( /^\D+/g, '');
        let arr=temp.split(")");
        if(GlobalVariables.numberOfAmendmentsOnContractTile==arr[0]){
        logger.info("Number of Amandments for master contract are shown correctly");
        }else{
            throw new Error("Number of Amandments for master contract shown are incorrect")
        }
    }

    static async verifyNumOfAmandmentsTilesDisplayed(){
        let count=await z.grabNumberOfVisibleElements("//section[@class='amendmentCardWrapper']");
        if(GlobalVariables.numberOfAmendmentsOnContractTile==count){
            logger.info(count+ " Amendment(s) is/are displayed in the document section for the contract");
            }else{
                throw new Error("Number of Amandments for master contract shown are incorrect")
            }
    }


    static async ClickOnAmendmentLink(label:string){
        if(label=="Master"){
            await z.click("//p[contains(@class,'masterAgreementHeading')]/following-sibling::app-link-agreements//p[contains(@class,'amendments')]/span");
        }else if(label=="Sub"){
            await z.click("(//p[contains(@class,'subAgreementHeading')]/following-sibling::ul//p[contains(@class,'amendments')]/span)[1]");
        }
        await z.wait(10);
    }


    static async checkNoSubAgreementLinkedText() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.NO_SUB_AGREEMENT_LINKED_TEXT));
        let actualText = await z.grabTextFrom(await AuroraLmt.getElement(linkedContractElements.NO_SUB_AGREEMENT_LINKED_TEXT));
        if (actualText.includes("No linked contracts")) {
            console.log("validation text is comming as expected");
        } else {
            console.log("Mismatch in validation text");
        }
    }

    static async checkNoMasterAgreementLinkedText() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.NO_MASTER_AGREEMENT_LINKED_TEXT));
        let actualText = await z.grabTextFrom(await AuroraLmt.getElement(linkedContractElements.NO_MASTER_AGREEMENT_LINKED_TEXT));
        if (actualText.includes("No linked contracts")) {
            console.log("validation text is comming as expected");
        } else {
            console.log("Mismatch in validation text");
        }
    }

    static async clickOnLinkSubContractsOption() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
    }

    static async clickOnLinkMasterAgreementOption() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.LINK_MASTER_AGREEMENT_BTTN));
    }

    static async checkGridViewOfSubAgreementsDisplayed() {
        await z.waitForElement(await AuroraLmt.getElement(linkedContractElements.GRID_VIEW_OF_SUB_AGREEMENTS),120);
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.GRID_VIEW_OF_SUB_AGREEMENTS));
        await z.wait(5);
        let actualText = await z.grabTextFrom(await AuroraLmt.getElement(linkedContractElements.GRID_VIEW_OF_SUB_AGREEMENTS));
        console.log("Title:"+actualText);
        if (actualText.includes("Link Sub Agreements")) {
            console.log("Grid view for linking Sub Agreements is displayed as expected");
        } else {
            throw new Error("Grid view for linking Sub Agreements is not displayed");
        }
    }

    static async removeAllSubAgreements(){
        let count = await z.grabNumberOfVisibleElements("//p[contains(@class,'subAgreementHeading')]/following-sibling::ul//img[@class='action-icon']");
            let i: number;
            for (i = 1; i <= count; i++) {
                await z.click("//p[contains(@class,'subAgreementHeading')]/following-sibling::ul//img[@class='action-icon']");
                await z.click("//span[text()='Remove Link']");
                await z.click("//button[contains(text(),'Remove')]");
                await z.wait(6);
        }
    }

    static async removeAAddedMasterAgreement(){
        await z.waitForVisible("//p[contains(@class,'masterAgreementHeading')]/following-sibling::app-link-agreements//img[@class='action-icon']",60);
        await z.click("//p[contains(@class,'masterAgreementHeading')]/following-sibling::app-link-agreements//img[@class='action-icon']");
        await z.click("//span[text()='Remove Link']");
        await z.click("//button[contains(text(),'Remove')]");
        await z.wait(6);
    }

    static async checkAllLinkedAgreementsRemoved(){
        await z.wait(3);
        let flag1 = await CommonComponent.isElementPresent(await AuroraLmt.getElement(linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
        let flag2 = await CommonComponent.isElementPresent(await AuroraLmt.getElement(linkedContractElements.LINK_SUB_AGREEMENT_BTTN));
        let yes = new Boolean(true);
        let no = new Boolean(false);
        if (flag1 == yes && flag2 == yes) {
            logger.info("All the Linked Sub Agreements are removed");
        }else if (flag1 == no && flag2 == no) {
            logger.info("All the Linked Sub Agreements are not removed");
        }
    }

    static async checkGridViewOfMasterAgreementsDisplayed() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.GRID_VIEW_OF_MASTER_AGREEMENT));
        let actualText = await z.grabTextFrom(await AuroraLmt.getElement(linkedContractElements.GRID_VIEW_OF_MASTER_AGREEMENT));
        if (actualText.includes("Link Master Agreement")) {
            console.log("Grid view for linking Sub Agreements is displayed as expected");
        } else {
            console.error("Grid view for linking Sub Agreements is not displayed");
        }
    }

    static async getContractsListOnGrid() {
        let contractIDs = await z.grabTextFrom(await AuroraLmt.getElement(linkedContractElements.CONTRACTS_FROM_GRID));
        console.log(contractIDs);
    }

    static async checkNumberOfRecordsInTheGrid() {
        await z.wait(6);
        let noOfRec: number=0;
        noOfRec= await z.grabNumberOfVisibleElements(await AuroraLmt.getElement(linkedContractElements.CONTRACTS_FROM_GRID));
        console.log("Number of record shown in the grid are: " + noOfRec);
    }

    static async updateVisibleNumberOfRows(noOfContracts: string) {
        await z.click(await AuroraLmt.getElement(linkedContractElements.PAGE_COUNT_FILTER_DROPDOWN));
        let recordCountOptionXpath = await AuroraLmt.getElement(linkedContractElements.DNY_GRID_ROW_COUNT);
        if (recordCountOptionXpath.includes("TEMPCOUNT")) {
            recordCountOptionXpath = recordCountOptionXpath.replace("TEMPCOUNT", noOfContracts);
            await z.click(recordCountOptionXpath);
        } else {
            logger.info("Xpath does not contain TempCount");
        }

    }

    static async selectContractsFromGrid(noOfContracts: string) {
        let ontractCount = parseInt(noOfContracts);
        for (let i = 1; i <= ontractCount; i++) {
            let contractsCheckBoxXpath = await AuroraLmt.getElement(linkedContractElements.DNY_CONTRACT_FROM_GRID);
            if (contractsCheckBoxXpath.includes("TEMPCOUNT")) {
                contractsCheckBoxXpath = contractsCheckBoxXpath.replace("TEMPCOUNT", i.toString());
                await z.click(contractsCheckBoxXpath);
            } else {
                logger.info("Xpath does not contain TempCount");
            }
        }
    }

    static async linkButtonStatus(noOfContracts: string) {

    }

    static async selectAContractFromGrid() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.CONTRACT_FROM_GRID));
    }

    static async unselectAContractFromGrid() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.CONTRACT_FROM_GRID));
    }

    static async checkIconTypeAvailabeToSelectContractForLinkingSubAgreement() {
        let iconType = await z.grabAttributeFrom(await AuroraLmt.getElement(linkedContractElements.CONTRACT_CHECKBOX_FROM_GRID), "role");
        if (iconType == "checkbox") {
            console.log("Checkbox is available to select multiple sub agreements in the grid");
        } else {
            console.log("Checkbox is not available to select multiple sub agreements in the grid");
        }
    }

    static async checkIconTypeAvailabeToSelectContractForLinkingMasterAgreement() {
        let iconType = await z.grabAttributeFrom(await AuroraLmt.getElement(linkedContractElements.CONTRACT_FROM_GRID), "role");
        if (iconType == "radio") {
            console.log("radio button is available to select a master agreement in the grid");
        } else {
            console.log("radio button is not available to select a master agreement in the grid");
        }
    }

    static async checkSelectedContractInGrid() {
        let selectedContractXpath = await AuroraLmt.getElement(linkedContractElements.SELECTED_CONTRACTS_FROM_GRID);
        let flag = await z.grabAttributeFrom(selectedContractXpath, "aria-checked");
        if (flag == "true") {
            console.log("Selected contract is listed on the top in the grid");
        } else {
            console.log("Selected contract is not listed on the top in the grid")
        }
    }


    static async clickOnLinkOption() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.CONTRACT_LINK_BUTTON_IN_GRID));
    }

    static async clickOnLinkButtonFromTop() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.CONTRACT_LINK_BUTTON_FROM_TOP));
    }



    static async contractsAddedFromGrid(noOfContracts: string) {
        let contactsCount = await z.grabTextFrom(await AuroraLmt.getElement(linkedContractElements.AGREEMENTS_LINKED));
        if (contactsCount.includes(noOfContracts)) {
            logger.info(noOfContracts+" contract(s) is/are linked as expected");
        } else {
            logger.error("Number of contracts added are not as expected");
        }
    }



    static async clickOnActionIconOfAddedAgreements(contractsActionIcon) {
        let contractsCheckBoxXpath = await AuroraLmt.getElement(linkedContractElements.DNY_AGREEMENT_ACTION_ICON);
        if (contractsCheckBoxXpath.includes("TEMPCOUNT")) {
            contractsCheckBoxXpath = contractsCheckBoxXpath.replace("TEMPCOUNT", contractsActionIcon.toString());
        }
        await z.click(contractsCheckBoxXpath);
    }

    static async clickOnRemoveLinkOption() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.AGREEMENT_REMOVE_OPTION));
    }


    static async checkAgreementRemoved() {
        await z.dontSee(await AuroraLmt.getElement(linkedContractElements.AGREEMENTS_LINKED));
    }

    static async checkMasterAgreementAddedFromGrid() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.MASTER_AGREEMENT_ADDED));
    }

    static async clickOnActionIconOfAddedAgreement() {
        let contractsCheckBoxXpath = await AuroraLmt.getElement(linkedContractElements.DNY_AGREEMENT_ACTION_ICON);
        if (contractsCheckBoxXpath.includes("TEMPCOUNT")) {
            contractsCheckBoxXpath = contractsCheckBoxXpath.replace("TEMPCOUNT", "1");
        }
        await z.click(contractsCheckBoxXpath);
    }

    static async checkViewContractDetailsButton() {
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.VIEW_CONTRACT_DETAILS_BTN));
    }

    static async clickOnViewContractDetailsButton() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.VIEW_CONTRACT_DETAILS_BTN));
    }

    static async checkOpenContarctsDetailsDialogBox(status: string) {
        if (status == "true") {
            await z.seeElement(await AuroraLmt.getElement(linkedContractElements.OPEN_CONTRACT_DETAILS_DIALOG_BOX));
        } else {
            await z.dontSee(await AuroraLmt.getElement(linkedContractElements.OPEN_CONTRACT_DETAILS_DIALOG_BOX));
        }
    }

    static async checkCofirmationTextInsideDialogBox() {
        let expectedMsg = "Are you sure you want to navigate to Contract details of the selected contract?"
        let validationText = await z.grabTextFrom(await AuroraLmt.getElement(linkedContractElements.CONFIRMATION_MSG_IN_DIALOGBOX));
        z.assertEqual(expectedMsg, validationText);
    }

    static async checkOptionInsideDialogBox() {
        await z.see(await AuroraLmt.getElement(linkedContractElements.CONFIRM_OPTION_INSIDE_DIALOG_BOX));
        await z.see(await AuroraLmt.getElement(linkedContractElements.CANCEL_OPTION_INSIDE_DIALOG_BOX));
    }


    static async searchColumnvalueWith(label:string,value:string){
        let index:string="";
        if(label=="Contract Number"){
            index="1";
        }
        if(label=="Contract Title"){
            index="2";
        }
        if(label=="Contracting Party"){
            index="3";
        }

        await z.fillField("(//input[@placeholder='Search'])["+index+"]",value);
        await z.pressKey("Enter");
        await z.wait(3);
        await z.waitForInvisible("//i[@class='p-datatable-loading-icon pi pi-spin pi-spinner']");
    }

    static async filterColumnvalueWith(label:string,value:string){
        let index:string="";
        if(label=="Category"){
            index="1";
        }
        if(label=="Contract Type"){
            index="2";
        }
        if(label=="Contract SubType"){
            index="3";
        }
        if(label=="Contract status"){
            index="4";
        }

        await z.click("(//p-dropdown[@placeholder='Select']/div)["+index+"]");
        await z.fillField("//div[contains(@class,'dropdown-filter')]//input[@placeholder='Search']",value);
        await z.click("//span[@title='"+value+"']");
        await z.wait(3);
        await z.waitForInvisible("//i[@class='p-datatable-loading-icon pi pi-spin pi-spinner']");
    }

    static async checkConfirmationDialogTitle(){
        await z.seeElement(await AuroraLmt.getElement(linkedContractElements.REMOVE_MASTER_CONTRACT_CONFIRMATION_DIALOG));
        let dialogTitlePopup:string=await z.grabTextFrom(await AuroraLmt.getElement(linkedContractElements.REMOVE_MASTER_CONTRACT_CONFIRMATION_DIALOG));
        if(dialogTitlePopup.includes("Remove Agreement Link")){
          logger.info("Dialog title is shown as expected");
        }else{
            throw new Error("Dialog title shown is not as expected");
        }
    }

    static async clickOnConfirmOptionInsideDialogBox() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.CONFIRM_OPTION_INSIDE_DIALOG_BOX));
    }
    static async clickOnCancelOptionInsideDialogBox() {
        await z.click(await AuroraLmt.getElement(linkedContractElements.CANCEL_OPTION_INSIDE_DIALOG_BOX));
    }


    static async dragAndDropGridColumns() {
        await z.dragAndDrop(await AuroraLmt.getElement(linkedContractElements.GRID_COL_1), await AuroraLmt.getElement(linkedContractElements.GRID_COL_2));
    }


    static async getInformativeTextFromConfirmationDialog(){
        let dialogPopupText:string=await z.grabTextFrom(await AuroraLmt.getElement(linkedContractElements.CONFIRMATION_DIALOG_TEXT));
        if(dialogPopupText.includes("Are you sure you want to remove master agreement link from the sub agreement(s)?")){
            logger.info("Dialog informative text is shown as expected");
          }else{
              throw new Error("Dialog informative text shown is not as expected");
          }
    }

    static async getInformativeTextFromConfirmationDialogForSubAgreement(){
        let dialogPopupText:string=await z.grabTextFrom(await AuroraLmt.getElement(linkedContractElements.CONFIRMATION_DIALOG_TEXT));
        if(dialogPopupText.includes("Are you sure you want to remove sub agreement link from the master agreement ?")){
            logger.info("Dialog informative text is shown as expected");
          }else{
              throw new Error("Dialog informative text shown is not as expected");
          }
    }

    /********************************************************Services Ends****************************************************************/

}