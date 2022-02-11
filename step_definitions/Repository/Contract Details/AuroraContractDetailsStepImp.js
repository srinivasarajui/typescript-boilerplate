"use strict";
/**
 * Step definition file for aurora Contract Details feature file
 *
 * @author somnath.k
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AuroraContractDetailsActions_1 = require("./AuroraContractDetailsActions");
const AuroraLmt_1 = require("../../../common/Data/AuroraLmt");
const BasicInformationActions_1 = require("../UploadContract/BasicInformationActions");
const CommonComponent_1 = require("../../commonKeywords/CommonComponent");
const contractDetailsActions_1 = require("../../ContractDetails/contractDetailsActions");
const GlobalVariables_1 = require("../../../common/dataCreation/GlobalVariables");
const AuroraContractDetailsElements_1 = require("./AuroraContractDetailsElements");
const BasicInformationElements_1 = require("../UploadContract/BasicInformationElements");
const contractDetailsElements_1 = require("../../ContractDetails/contractDetailsElements");
const logger_1 = require("../../../common/Logger/logger");
const z_1 = require("actionbot-wrapper/z");
const { I } = inject();
/**************************************************************************User Story AURORA-96 Starts******************************************** */
Then('I check save as draft button is not present', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.SAVE_AS_DRAFT_BTTN));
});
Then('I check save as draft button is present', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.SAVE_AS_DRAFT_BTTN));
});
Then('I check repository draft status is not shown', async () => {
    //await z.dontSeeElement(await AuroraLmt.getElement(auroraContractDetailsElements.REPOSITORY_DRAFT_STATUS_HEADER));
    let contractStatusVal = await AuroraLmt_1.AuroraLmt.getData("REPO_STATUS_VALUE");
    let contractStatusVals = await CommonComponent_1.CommonComponent.getListFromString("||", contractStatusVal);
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyContractStatusNotinHeader(contractStatusVals[0].trim());
});
Then('I check contract number is not generated in the header', async () => {
    let contractNumberXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString("FT", await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_AURORA_CONTRACT_NUMBER));
    await z_1.z.dontSeeElement(contractNumberXpath);
});
Then('I check bookmark icon is not shown in the header', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.BOOKMARK_ICON));
});
Then('I check other menus are disabled except contract details menu', async () => {
    let disabledMenu = await AuroraLmt_1.AuroraLmt.getData("REPOSITORY_CONTRACT_DISABLED_MENU_LIST");
    let disabledMenuList = disabledMenu.split("|");
    let actualDisabledMenuList = [];
    actualDisabledMenuList.push(disabledMenuList[1]);
    let actualResult = await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyAuroraMenusareDisabled(actualDisabledMenuList);
    await z_1.z.assertEqual(false, actualResult);
});
Then('I check supporting document operation is not shown', async () => {
    let disabledMenu = await AuroraLmt_1.AuroraLmt.getData("REPOSITORY_CONTRACT_DISABLED_MENU_LIST");
    let disabledMenuList = disabledMenu.split("|");
    let actualDisabledMenuList = [];
    actualDisabledMenuList.push(disabledMenuList[2]);
    let actualResult = await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyAuroraMenusareDisabled(actualDisabledMenuList);
    await z_1.z.assertEqual(false, actualResult);
});
When('I clicked on save as draft button in the aurora contract details page', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonSaveasDraftBttn();
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.AURORA_LOADER));
});
Then('I check mandatory message for minimum mandatory fields', async () => {
    let mandatoryField = await AuroraLmt_1.AuroraLmt.getData("SAVE_AS_DRAFT_MINIMUM_MANDATORY_FIELD");
    let mandatoryFieldList = mandatoryField.split("|");
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyMinimumMandatoryErrorMSG(mandatoryFieldList);
});
When('I enter category field in the aurora contract details page', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonCategoryDropdownBox();
    await CommonComponent_1.CommonComponent.clickRandomValueFromList(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMON_DROPDOWN_LIST));
});
Then('I check mandatory message is shown for folder field', async () => {
    let mandatoryField = await AuroraLmt_1.AuroraLmt.getData("SAVE_AS_DRAFT_MINIMUM_MANDATORY_FIELD");
    let mandatoryFieldList = mandatoryField.split("|");
    let mandatoryFieldXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_SAVE_AS_DRAFT_ERROR_MSG);
    mandatoryFieldXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(mandatoryFieldList[1], mandatoryFieldXpath);
    await z_1.z.seeElement(mandatoryFieldXpath);
});
When('I clear contract category field value', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonContractCategoryClearIcon();
});
When('I enter folder field in the aurora contract details page', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonFolderDropdowBox();
    await CommonComponent_1.CommonComponent.clickRandomValueFromList(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMON_DROPDOWN_LIST));
});
Then('I check mandatory message is shown for contract category field', async () => {
    let mandatoryField = await AuroraLmt_1.AuroraLmt.getData("SAVE_AS_DRAFT_MINIMUM_MANDATORY_FIELD");
    let mandatoryFieldList = mandatoryField.split("|");
    let mandatoryFieldXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_SAVE_AS_DRAFT_ERROR_MSG);
    mandatoryFieldXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(mandatoryFieldList[0].trim(), mandatoryFieldXpath);
    await z_1.z.seeElement(mandatoryFieldXpath);
});
When('I fill minimum mandatory fields', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillMinimumMandatoryDropDownFields();
    logger_1.logger.info("map value in minimum mandatory field map", GlobalVariables_1.GlobalVariables.minimumMandatoryField);
});
Then('I check repository draft status is shown', async () => {
    // await z.seeElement(await AuroraLmt.getElement(auroraContractDetailsElements.REPOSITORY_DRAFT_STATUS_HEADER));
    let contractStatus = await AuroraLmt_1.AuroraLmt.getData("REPO_STATUS_VALUE");
    let contractStatusVal = await CommonComponent_1.CommonComponent.getListFromString("|", contractStatus);
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyContractStatusinHeader(contractStatusVal[0].trim());
});
Then('I check contract number is generated in the header', async () => {
    GlobalVariables_1.GlobalVariables.contractNumber = "";
    GlobalVariables_1.GlobalVariables.contractNumber = await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyNewContractNumberGenerated("CLM");
});
Then('I check bookmark icon is shown in the header', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.BOOKMARK_ICON));
});
Then('I check supporting document operation is shown', async () => {
    let disabledMenu = await AuroraLmt_1.AuroraLmt.getData("REPOSITORY_CONTRACT_DISABLED_MENU_LIST");
    let disabledMenuList = disabledMenu.split("|");
    let actualDisabledMenuList = [];
    actualDisabledMenuList.push(disabledMenuList[2]);
    let actualResult = await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyAuroraMenusareDisabled(actualDisabledMenuList);
    await z_1.z.assertEqual(false, actualResult);
});
Then('I check contract entry is shown in the top in the grid', async () => {
    let actualResult = await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyContractEntryinTopGrid(GlobalVariables_1.GlobalVariables.contractNumber);
    await z_1.z.assertEqual(true, actualResult);
});
When('I search contract based on contract number in the grid', async () => {
    await CommonComponent_1.CommonComponent.gridNormalTextBoxSearch(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.GRID_CONTRACT_NUMBER_FILTER_SEARCH_BOX), GlobalVariables_1.GlobalVariables.contractNumber);
});
Then('I check contract entry is shown in the grid', async () => {
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.PROCESSING_REQUEST_LOADER));
    let actualResult = await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyContractEntryinTopGrid(GlobalVariables_1.GlobalVariables.contractNumber);
    await z_1.z.assertEqual(true, actualResult);
});
When('I search contract based on contract category in the grid', async () => {
    let contractCategoryVal;
    for (let fieldvalue of GlobalVariables_1.GlobalVariables.basicInformationDetails.values()) {
        if (fieldvalue[0] == "Contract Category") {
            contractCategoryVal = fieldvalue[1].trim();
            break;
        }
    }
    logger_1.logger.info("contract category value from the grid", contractCategoryVal);
    await CommonComponent_1.CommonComponent.gridDropdownSelectionBasedonStringValue(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.GRID_CONTRACT_CATEGORY_DROPDOWN), await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.GRID_CONTRACT_CATEGORY_DROPDOWN_OPTION_LIST), contractCategoryVal);
});
//  When('I search contract based on folder in the grid',async ()=>{
//     let contractCategoryVal=GlobalVariables.minimumMandatoryField.get("Contract Category") as String;
//     await CommonComponent.gridDropdownSelectionBasedonStringValue(await AuroraLmt.getElement(auroraContractDetailsElements.GRID_CONTRACT_CATEGORY_DROPDOWN),await AuroraLmt.getElement(auroraContractDetailsElements.GRID_CONTRACT_CATEGORY_DROPDOWN_OPTION_LIST),contractCategoryVal);
//  });
Then('I fill all the aurora contract details and click on save as draft button', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillAuroraContractDetailsInfo(false, false, false, "");
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonSaveasDraftBttn();
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.AURORA_LOADER));
});
When('I refresh the page', async () => {
    await z_1.z.refreshPage();
});
/**************************************************************************User Story AURORA-96 Ends******************************************** */
/**************************************************************************User Story AURORA-54 Starts******************************************** */
Then('I check contracting party section is enabled in the aurora contract details page', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CONTRACTING_PARTY_HEADER));
});
Then('I check save button is present in the contract details page', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.SAVE_BUTTON));
});
Then('I check save button is not present in the contract details page', async () => {
    await z_1.z.dontSee(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.SAVE_BUTTON));
});
When('I clicked on contract details menu', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonContractDetailsMenu();
});
When('I search for random status existing contract except archived status', async () => {
    // await CommonComponent.gridDropdownSelectionBasedonRandomValue(await AuroraLmt.getElement(contractDetailsElements.REPO_STATUS_DROPDOWN), await AuroraLmt.getElement(contractDetailsElements.CONTRACT_STATUS_OPTION_LIST));
    let contractStatus = await AuroraLmt_1.AuroraLmt.getData("REPO_STATUS_VALUE");
    let contractStatusVal = await CommonComponent_1.CommonComponent.getListFromString("|", contractStatus);
    let randomOption = await CommonComponent_1.CommonComponent.getRandomNumber(contractStatusVal.length);
    await CommonComponent_1.CommonComponent.gridDropdownSelectionBasedonStringValue(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.REPO_STATUS_DROPDOWN), await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTRACT_STATUS_OPTION_LIST), contractStatusVal[randomOption]);
});
Then('I check changes done in contract details page cannot be saved messgae popup is not show', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.MENU_SWITCH_POPUP));
});
Then('I fill all the fields in the aurora contract details page', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillAuroraContractDetailsInfo(false, false, false, "");
});
When('I fill all the fields in the aurora contract details page and save contract for multiple times', async () => {
    //below code will be optimized smaller written for time being
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillAuroraContractDetailsInfo(false, false, false, "");
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.AURORA_LOADER));
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTRACT_DETAILS_ERROR_TOASTER));
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.METADATA_VIEW_HEADER));
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonSaveBttn();
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.AURORA_LOADER));
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTRACT_DETAILS_ERROR_TOASTER));
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.METADATA_VIEW_HEADER));
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonSaveBttn();
});
When('I clicked on save button in the aurora contract details page', async () => {
    //pause();
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonSaveBttn();
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillandSubmitRevisionComment(await CommonComponent_1.CommonComponent.randomString(20));
});
Then('I check toaster message for contract saved is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.FIRST_CONTRACT_SAVE_TOASTER));
});
When('I search for previously modified contract in the grid', async () => {
    await CommonComponent_1.CommonComponent.gridNormalTextBoxSearch(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.GRID_CONTRACT_NUMBER_FILTER_SEARCH_BOX), GlobalVariables_1.GlobalVariables.contractNumber);
});
Then('I check previously filled data is retained in the aurora contract details page', async () => {
    let actual_Result = await contractDetailsActions_1.ContractDetailsActions.verifyMetadataandValueInContractDetails(GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue);
    await z_1.z.assertEqual(true, actual_Result);
});
Then('I check fill all mandatory fields popup is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.FILL_ALL_MANDATORY_POPUP));
});
When('I clicked on ok button in the fill all mandatory fields popup', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonOkBttninFillallMandatoryPopup();
});
Then('I check fill all mandatory fields popup is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.FILL_ALL_MANDATORY_POPUP));
});
Then('I check mandatory message below each mandatory field in the aurora contract details page is shown', async () => {
    let actualResult = await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyMandatoryMessageForAllmandatoryFields();
    await z_1.z.assertEqual(true, actualResult);
});
Then('I check pending publish status is shown in the header', async () => {
    let contractStatus = await AuroraLmt_1.AuroraLmt.getData("REPO_STATUS_VALUE");
    let contractStatusVal = await CommonComponent_1.CommonComponent.getListFromString("|", contractStatus);
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyContractStatusinHeader(contractStatusVal[1].trim());
});
When('I fill only mandatory fields in the aurora contract details page', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillAuroraContractDetailsInfo(true, false, false, "");
});
When('I search for newly created contract in the grid based on contract number', async () => {
    await CommonComponent_1.CommonComponent.gridNormalTextBoxSearch(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.GRID_CONTRACT_NUMBER_FILTER_SEARCH_BOX), GlobalVariables_1.GlobalVariables.contractNumber);
});
Then('I check only one new contract entry is shown in the grid', async () => {
    let actualResult = await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyContractEntryinTopGrid(GlobalVariables_1.GlobalVariables.contractNumber);
    await z_1.z.assertEqual(true, actualResult);
    let contractNumberlinkcount = await CommonComponent_1.CommonComponent.grabNumberElements(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.ALL_CONTRACT_NUMBER_LINK));
    actualResult = contractNumberlinkcount == 1;
    await z_1.z.assertEqual(true, actualResult);
});
Then('I check contract category dropdown field value is blank', async () => {
    let UIContractCategoryVal = await AuroraContractDetailsActions_1.AuroraContractDetailsActions.getContractCategoryDropdownVal();
    let actualResult = UIContractCategoryVal == "";
    await z_1.z.assertEqual(true, actualResult);
});
Then('I check clear icon for contract category dropdown field is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CLEAR_CONTRACT_CATEGORY_VALUE));
});
When('I select contract category dropdown value', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.selectParticularDropdownVal(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CONTRACT_CATEGORY_DROPDOWN));
});
Then('I check clear icon for contract category dropdown field is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CLEAR_CONTRACT_CATEGORY_VALUE));
});
When('I clear values of each numeric field in the aurora contract details page', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillorClearSpecifiedFieldType("INTEGER", true, false, "");
});
Then('I check each numeric field value in the aurora contract details page is blank', async () => {
    let actual_Result = await contractDetailsActions_1.ContractDetailsActions.verifyMetadataandValueInContractDetails(GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandBlankValue);
    logger_1.logger.info("flag value inside step def", actual_Result);
    await z_1.z.assertEqual(true, actual_Result);
});
When('I clear values of each dropdown field in the aurora contract details page', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillorClearSpecifiedFieldType("DROPDOWN", true, false, "");
});
Then('I check each dropdown field value in the aurora contract details page is blank', async () => {
    let actual_Result = await contractDetailsActions_1.ContractDetailsActions.verifyMetadataandValueInContractDetails(GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandBlankValue);
    await z_1.z.assertEqual(true, actual_Result);
});
When('I clear values of each date field in the aurora contract details page', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillorClearSpecifiedFieldType("DATE", true, false, "");
});
Then('I check each date field value in the aurora contract details page is blank', async () => {
    let actual_Result = await contractDetailsActions_1.ContractDetailsActions.verifyMetadataandValueInContractDetails(GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandBlankValue);
    await z_1.z.assertEqual(true, actual_Result);
});
When('I clear values of each string field in the aurora contract details page', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillorClearSpecifiedFieldType("STRING", true, false, "");
});
Then('I check each string field value in the aurora contract details page is blank', async () => {
    let actual_Result = await contractDetailsActions_1.ContractDetailsActions.verifyMetadataandValueInContractDetails(GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandBlankValue);
    await z_1.z.assertEqual(true, actual_Result);
});
When('I clear all the data from aurora contract details page except digital contract document field', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillAuroraContractDetailsInfo(false, true, false, "");
});
When('I fill all numeric fields with invalid data', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillorClearSpecifiedFieldType("INTEGER", false, true, await AuroraLmt_1.AuroraLmt.getData("INVALID_DATA_INTEGER"));
});
When('I fill all string fields with invalid data', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillorClearSpecifiedFieldType("STRING", false, true, await AuroraLmt_1.AuroraLmt.getData("INVALID_DATA_STRING"));
});
When('I fill all non mandatory string fields with invalid data', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillorClearSpecifiedFieldType("STRING", false, true, await AuroraLmt_1.AuroraLmt.getData("INVALID_DATA_STRING"));
});
Then('I check invalid error message for each numeric field in the aurora contract details page is shown', async () => {
    let actualResult = (GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue.size == await AuroraContractDetailsActions_1.AuroraContractDetailsActions.getMandatoryMessageCountForAllFields());
    await z_1.z.assertEqual(true, actualResult);
});
When('I fill all non mandatory numeric fields with invalid data', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillorClearSpecifiedFieldType("INTEGER", false, true, await AuroraLmt_1.AuroraLmt.getData("INVALID_DATA_INTEGER"));
});
When('I fill all date fields with invalid data', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillorClearSpecifiedFieldType("DATE", false, true, await AuroraLmt_1.AuroraLmt.getData("INVALID_DATA_DATE"));
});
Then('I check invalid error message for each date field in the aurora contract details page is shown', async () => {
    let actualResult = (GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue.size == await AuroraContractDetailsActions_1.AuroraContractDetailsActions.getMandatoryMessageCountForAllFields());
    await z_1.z.assertEqual(true, actualResult);
});
When('I fill all non mandatory date fields with invalid data', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillorClearSpecifiedFieldType("DATE", false, true, await AuroraLmt_1.AuroraLmt.getData("INVALID_DATA_DATE"));
});
When('I fill all numeric field and string field with maximum value limit and other fields with normal limit', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillorClearSpecifiedFieldType("INTEGER", false, true, await AuroraLmt_1.AuroraLmt.getData("MAX_LIMIT_NUMERIC_VALUE"));
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillorClearSpecifiedFieldType("STRING", false, true, await AuroraLmt_1.AuroraLmt.getData("MAX_LIMIT_STRING_VALUE"));
});
Then('I check changes done in contract details page cannot be saved message popup is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CHANGES_POPUP_SWITCH_MENU));
});
When('I close changes may lost popup in the contract details page', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.closeSwitchMenuPopup();
});
Then('I check modified data is retained in the contract details page', async () => {
    let actual_Result = await contractDetailsActions_1.ContractDetailsActions.verifyMetadataandValueInContractDetails(GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue);
    await z_1.z.assertEqual(true, actual_Result);
});
When('I click on ok button in the changes may lost popup', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickOkBttnSwitchMenuPopup();
});
Then('I check changes done in the contract details page is not retained', async () => {
    let filledContractTitle = await contractDetailsActions_1.ContractDetailsActions.getParticularMetadataValueFromContractDetailsData("Contract Title", GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue);
    await z_1.z.assertEqual(false, await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyContractTitleonUI(filledContractTitle));
});
When('I fill contract total value field with more than 14 digits value', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillContractTotalvalue(await CommonComponent_1.CommonComponent.randomNumberString(17));
});
Then('I check Maximum 14 digits allowed. error message is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CONTRACT_TOTAL_VALUE_MAX_ERR_MSG));
});
When('I fill contract total value field with less than or equal to 14 digits', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillContractTotalvalue(await CommonComponent_1.CommonComponent.randomNumberString(13));
});
Then('I check Maximum 14 digits allowed. error message is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CONTRACT_TOTAL_VALUE_MAX_ERR_MSG));
});
/**************************************************************************User Story AURORA-54 Ends******************************************** */
/************************************************** AURORA-49 STARTS ********************************************************************/
Then('I check loader icon is available', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.OCR_LOADER));
});
Then('I see ocr success field icon', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.OCR_SUCCESSFUL_ICON));
});
Then('I see success toast message', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.OCR_SUCCESS_TOAST_MSG));
});
When('I upload PDF format document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("CPDF_FORMAT_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.BROWSER_FILE));
});
When('I upload pdf file greater than 10mb', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("PDF_MORETHAN_TEN_MB"), await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.BROWSER_FILE));
});
Then('I check loader icon is not available', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.OCR_LOADER));
});
Then('I dont see success toast message', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.OCR_SUCCESS_TOAST_MSG));
});
When('I upload password protected pdf file', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("PDF_PASSWORD_PROTECTED"), await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.BROWSER_FILE));
});
Then('I see an error popup', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.UPLOAD_FAILED_ALERT));
});
When('I clicked on ok button in the error popup', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.UPLOAD_FILE_ERRMSG_OK_BUTTON));
});
When('I upload graphical pdf file', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("PDF_GRAPHICAL_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.BROWSER_FILE));
});
When('I fill mandatory fields in contract details page', async () => {
    await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CONTRACT_TITLE_NEW), await AuroraLmt_1.AuroraLmt.getElement("CONTRACT_TITLE_OCR"));
});
When('I search for repository draft status and authoring as source', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.searchAurthorContractSource();
});
When('I clicked on save as draft button in the contract details page', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickOnSaveAsDraftButton();
});
When('I have new contract number from aurora', async () => {
    GlobalVariables_1.GlobalVariables.contractNumber = "";
    GlobalVariables_1.GlobalVariables.contractNumber = await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyNewContractNumberGenerated("CLM");
    logger_1.logger.info("Contract Number after save", GlobalVariables_1.GlobalVariables.contractNumber);
});
/***************************************************** AURORA-49 Ends ******************************************************/
/***************************************************** AURORA-554 Starts ******************************************************/
Then('I check mandatory symbol near cp header', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_MANDATORY_SYMBOL));
});
Then('I see cp mandatory message', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_MANDATORY_MSG));
});
When('I type invalid cp name in the search field', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.inputInvalidCpName();
});
Then('I see no matching found message in the search result', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_NO_MATCHING_MSG));
});
When('I search for a cp', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.inputValidCpName();
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SEARCH_LOADING));
});
Then('I see the respective autosuggestion list', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.CpSearchListAutosuggestionValidation;
});
When('I select a cp from the dropdown list', async () => {
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SEARCH_LOADING));
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.selectFirstCpFromAutosugstn();
});
When('I select a cp type randomly', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.selectCpTypeRandomly();
});
Then('I see the selected cp card display', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_CARD));
});
When('I select cp address from the dropdown', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.selectCpAddress();
});
When('I select cpp from the dropdown', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.selectCpContact();
});
Then('I see selected address being populated in the cp card', async () => {
    let actual_Result = await AuroraContractDetailsActions_1.AuroraContractDetailsActions.checkSelectedCpAddrsInCpCard();
    await z_1.z.assertEqual(true, actual_Result);
    // await AuroraContractDetailsActions.checkSelectedCpAddrsInCpCard();
});
// When('I click on the cpp dropdown in the cp card',async () => {
//    await AuroraContractDetailsActions.clickOnCpContact()   ;
// });
Then('I check contact person in the cp card', async () => {
    let actual_Result = await AuroraContractDetailsActions_1.AuroraContractDetailsActions.checkSelectedCpCntctInCpCard();
    await z_1.z.assertEqual(true, actual_Result);
});
Then('I check cp name in the cp card', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_NAME_IN_CP_CARD));
});
Then('I check address in the cp card', async () => {
    let actual_Result = await AuroraContractDetailsActions_1.AuroraContractDetailsActions.checkSelectedCpAddrsInCpCard();
    await z_1.z.assertEqual(true, actual_Result);
});
Then('I check contact person in the cp card', async () => {
    let actual_Result = await AuroraContractDetailsActions_1.AuroraContractDetailsActions.checkSelectedCpCntctInCpCard();
    await z_1.z.assertEqual(true, actual_Result);
});
Then('I check restricted party screening option in the cp card', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_RESTRICTED_PARTY_SCREEN));
});
Then('I check primary tag in the cp card', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_PRIMARY_TAG));
});
Then('I check options avaialble in the cp card', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_CARD_OPTIONS));
});
Then('I see address icon beside the address field', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_ADDRESS_ICON));
});
Then('I see contact person icon is displayed beside the contact person field', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_CONTACT_ICON));
});
When('I click on options in cp card', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickOnCardOptions();
});
Then('I see remove option is disabled', async () => {
    await CommonComponent_1.CommonComponent.verifyFieldisDisabledOnUI(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_REMOVE_OPTION));
});
Then('I see mark as primary option is disabled', async () => {
    await CommonComponent_1.CommonComponent.verifyFieldisDisabledOnUI(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_MARK_AS_PRIMARY));
});
When('I click on remove option', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickOnRemvOptions();
});
Then('I see cp mandatory toast message', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_ONE_CP_MANDTRY_TOAST_MSG));
});
When('I select and add 10 cps', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.selectAndAddTenCps();
});
Then('I see added cp cards displayed', async () => {
    let actual_Result = await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyTenCpCards();
    await z_1.z.assertEqual(true, actual_Result);
});
When('I type and search for a cp again', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.inputCpSearchAgain();
});
When('I select more than ten cp from the dropdown list', async () => {
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SEARCH_LOADING));
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_TO_SELECT_AFTR_TEN_CPS));
});
Then('I see cannot add cp warning toast message', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_CANNOT_ADD_TOAST_MSG));
});
Then('I see maximum ten cps are allowed error message', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_MAX_TEN_CPS_ARE_ALLOWED_MSG));
});
Then('I check the number displayed beside the cp header', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_COUNT));
});
When('I click on collapse button', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(await AuroraContractDetailsElements_1.auroraContractDetailsElements.EXPAND_OR_COLLAPSE_DOCUMENT_PANEL));
});
Then('I see cp header is expanded', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(await AuroraContractDetailsElements_1.auroraContractDetailsElements.PREVIEW_DROPDOWN));
});
When('I click on expand button', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(await AuroraContractDetailsElements_1.auroraContractDetailsElements.EXPAND_OR_COLLAPSE_DOCUMENT_PANEL));
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(await AuroraContractDetailsElements_1.auroraContractDetailsElements.EXPAND_OR_COLLAPSE_DOCUMENT_PANEL));
});
Then('I see cp header is collapsed', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(await AuroraContractDetailsElements_1.auroraContractDetailsElements.EXPAND_OR_COLLAPSE_DOCUMENT_PANEL));
});
When('I click on mark as primary option', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickOnMarkAsPrimary();
});
Then('I see the present cp card having primary tag', async () => {
});
Then('I get a remove popup', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_REMOVE_POPUP));
});
When('I clicked on cancel button in remove popup', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_REMOVE_CANCEL_BUTTON));
});
Then('I see remove popup is canceled', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_REMOVE_POPUP));
});
When('I click on remove button in remove popup', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_REMOVE_BUTTON));
});
Then('I see cp is removed from the list', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_COUNT));
});
When('I start typing the invalid cp name', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.inputInvalidCpName();
});
Then('I see the error message', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_NO_MATCHING_MSG));
});
When('I search for a same cp which is already added', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.searchCpAlreadyAdded();
});
Then('I see the already added cp is shows disabled in the search list', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyCpDisabled();
});
Then('I see added cp is saved', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SINGLE_COUNT_AFTER_SAVE));
});
Then('I check address is not mandatory in cp card', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_NO_MANDTRY_IN_CPCARD));
});
Then('I check cpp is not mandatory in cp card', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_NO_MANDTRY_IN_CPCARD));
});
Then('I check no mandatory symbol near cp header', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_MANDATORY_SYMBOL));
});
Then('I check default cp type in the cp type field', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyCpTypeIsDisplayed();
});
When('I click on cp type dropdown', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_TYPE_DROPDOWN));
});
Then('I see all the cp types', async () => {
    let actual_Result = await AuroraContractDetailsActions_1.AuroraContractDetailsActions.viewAllCpType();
    await z_1.z.assertEqual(true, actual_Result);
});
When('I link one cp to the contract and remove', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.checkCpInTheContract();
});
/***************************************************** AURORA-554 Ends ******************************************************/
/************************************************** AURORA-603 Starts ********************************************************************/
Then('I should be able to click on Restricted Part Screeninng label', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.MSR_LINK));
});
Then('I should be able to see Restricted Part Screeninng label for all the CPs', async () => {
    let actual_Result = await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyTenRestrictingPartyLabel();
    await z_1.z.assertEqual(true, actual_Result);
});
When('I click on cp card on top near contract name', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.MSR_LINK));
});
Then('I should not see the Restricted Part Screeninng label', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.NO_MSR_LABEL_ON_TOP_CP_CARD));
});
Then('I see risk details on rightside of the form', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.MSR_ALERT_POPUP));
});
Then('Restricted Party Screening result form is seen', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.MSR_FORM));
});
When('I click on Restricted Party Screening result form close option', async () => {
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.MSR_FORM_CLOSE));
});
Then('I should see the Restricted Party Screening result form should getting closed', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.MSR_FORM));
});
Then('I should see  Restricted Party Screening label of that cp disabled', async () => {
    await CommonComponent_1.CommonComponent.verifyFieldisDisabledOnUI(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.MSR_LINK));
});
/************************************************** AURORA-603 Ends ********************************************************************/
/************************************************** AURORA-97 starts ********************************************************************/
Then('I check publish button is partially disabled for repository draft status contract', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DISABLED_PUBLISH));
});
Then('I check publish button is not present in the contract header', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.PUBLISH_BTTN));
});
Then('I check publish button is present in the contract header', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.PUBLISH_BTTN));
});
When('I clicked on publish button in the contract header', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickOnPublishBttn();
});
Then('I check unsaved data popup is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.UNSAVED_POPUP));
});
Then('I check unsaved data popup is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.UNSAVED_POPUP));
});
When('I clicked on ok button from the unsaved data popup', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonOKhBttninUnsavedDataPopup();
});
When('I add random cp type cp in the contracting party section', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.selectCpTypeRandomly();
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.inputValidCpName();
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SEARCH_LOADING));
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SEARCH_LOADING));
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.selectFirstCpFromAutosugstn();
});
Then('I see cp mandatory toast message is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_ONE_CP_MANDTRY_TOAST_MSG));
});
When('I click on cancel button from the publish contract popup', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonCancelBttninPublishPopup();
});
Then('I check published successfully toaster message is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CONTRACT_PUBLISHED_TOASTER_MSG));
});
Then('I check publish contract popup is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.PUBLISH_POPUP));
});
Then('I check publish contract popup is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.PUBLISH_POPUP));
});
When('I select renewal option that will show expiry date field', async () => {
    let dropdownVal = "Single Term";
    let dropdownXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.AUTO_RENEWAL_DROPDOWN);
    let fieldListVal = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMON_DROPDOWN_LIST);
    let dropdownSearchBox = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMON_DROPDOWN_SEARCH_BOX);
    await CommonComponent_1.CommonComponent.searchValueAndSelectinDropdownByClick(dropdownXpath, fieldListVal, dropdownSearchBox, dropdownVal);
});
Then('I check quick alerts entry is shown in the publish contract popup', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.PUBLISH_POPUP_ALTER_MSG));
});
When('I clicked on publish button in the publish contract popup', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonPublishBttninPublishPopup();
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.AURORA_LOADER));
});
Then('I check comment mandatory error message is shown', async () => {
    if ((await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMENT_MANDATORY_SYMBOL)) != null) || (await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMENT_MANDATORY_SYMBOL)) != undefined)) {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMENT_MANDATORY_ERROR_MSG));
    }
    else {
        logger_1.logger.info("Comments section is not mandatory so scenario check is skipped");
    }
});
When('I fill comment box and select no option for both inform user and quick alerts options', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillPublishPopupCommentBox(await CommonComponent_1.CommonComponent.randomString(20));
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.selectNooptionforAlertinPublishPopup();
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.selectNoOptionforInformUserinPublishPopup();
});
Then('I check email popup is not shown on the ui', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_POPUP));
});
Then('I check alerts added toaster message is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.ALERT_ADDED_TOASTER_MSG));
});
Then('I check published successfully toaster message is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CONTRACT_PUBLISHED_TOASTER_MSG));
});
Then('I check contract status is not in pending publish status in the contract header', async () => {
    let contractStatus = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_REPOSITORY_DRAFT_STATUS_HEADER);
    contractStatus = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString("Pending Publish", contractStatus);
    await z_1.z.dontSeeElement(contractStatus);
});
When('I fill other fields and select inform user as yes option', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillPublishPopupCommentBox(await CommonComponent_1.CommonComponent.randomString(20));
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.selectNooptionforAlertinPublishPopup();
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.selectYesOptionforInformUserinPublishPopup();
});
Then('I check email popup is shown on the ui', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_POPUP));
});
Then('I check default to field in the send publish information is blank', async () => {
    let toFieldVal = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_TO_FIELD));
    let actual_Result = (toFieldVal.length == 0);
    await z_1.z.assertEqual(true, actual_Result);
});
Then('I check subject field in the send publish information popup is not blank', async () => {
    let subjectFieldVal = await CommonComponent_1.CommonComponent.getUITextUsingJavascript(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_SUBJECT_FIELD));
    logger_1.logger.info("UI value of subject", subjectFieldVal);
    logger_1.logger.info("UI value of subject", subjectFieldVal.length);
    let actual_Result = (subjectFieldVal.length != 0);
    await z_1.z.assertEqual(true, actual_Result);
});
Then('I check cc and bcc field box is shown in the send publish information popup', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_CC_FIELD));
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_BCC_FIELD));
});
Then('I check cc and bcc field box in the send publish information popup is blank', async () => {
    let ccFieldVal = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_CC_FIELD));
    let bccFieldVal = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_BCC_FIELD));
    let actual_Result = (ccFieldVal.length == 0 && bccFieldVal.length == 0);
    await z_1.z.assertEqual(true, actual_Result);
});
When('I make all the fields in the send publish information popup as blank', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clearAllFieldsValEmailPopup(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.ALL_FIELDS_IN_EMAIL_POPUP));
});
When('I click on send button in the send publish information popup', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonsendMailBttn();
});
Then('I check mandatory message for all the fields mandatory fields in the send publish information popup is shown', async () => {
    let mandatoryFields = await AuroraLmt_1.AuroraLmt.getData("EMAIL_MANDATORY_FIELDS");
    let mandatoryFieldsList = await CommonComponent_1.CommonComponent.getListFromString("|", mandatoryFields);
    let mandatoryFieldXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_MANDATORY_FIELD_ERROR_MSG);
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyMandatoryErrorMSGforSpecifiedList(mandatoryFieldXpath, mandatoryFieldsList);
});
Then('I check mandatory message for cc and bcc is not shown in the send publish information popup', async () => {
    let mandatoryFields = await AuroraLmt_1.AuroraLmt.getData("EMAIL_NON_MANDATORY_FIELDS");
    let mandatoryFieldsList = await CommonComponent_1.CommonComponent.getListFromString("|", mandatoryFields);
    let mandatoryFieldXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_MANDATORY_FIELD_ERROR_MSG);
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyNoMandatoryErrorMSGforSpecifiedList(mandatoryFieldXpath, mandatoryFieldsList);
});
When('I enter random no of emails in the to field box', async () => {
    let randomEmailIDs = await CommonComponent_1.CommonComponent.generateRandomNoofEmailId(8, 10);
    for (let emailId of randomEmailIDs) {
        await AuroraContractDetailsActions_1.AuroraContractDetailsActions.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_TO_FIELD), emailId);
    }
});
Then('I check mandatory error message for to field is not shown in the send publish information popup', async () => {
    let mandatoryFieldsList = ["To"];
    let mandatoryFieldXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_MANDATORY_FIELD_ERROR_MSG);
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyNoMandatoryErrorMSGforSpecifiedList(mandatoryFieldXpath, mandatoryFieldsList);
});
Then('I check mandatory error message for subject field is shown in the send publish information popup', async () => {
    let mandatoryFieldsList = ["Subject"];
    let mandatoryFieldXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_MANDATORY_FIELD_ERROR_MSG);
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyMandatoryErrorMSGforSpecifiedList(mandatoryFieldXpath, mandatoryFieldsList);
});
When('I clear to field in the send publish information popup', async () => {
    let closeIconList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.REMOVE_EMAILID));
    for (let closeIconXpath of closeIconList) {
        await z_1.z.click(closeIconXpath);
    }
});
Then('I check to field in the send publish information popup is blank', async () => {
    let ccFieldVal = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_CC_FIELD));
    let actual_Result = (ccFieldVal.length == 0 || ccFieldVal == undefined || ccFieldVal == "" || ccFieldVal == null);
    await z_1.z.assertEqual(true, actual_Result);
});
When('I enter value in the subject in the send publish information popup', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.enterSubjectField(await CommonComponent_1.CommonComponent.randomString(12));
});
Then('I check no mandatory error message for subject field is shown in the send publish information popup', async () => {
    let mandatoryFieldsList = ["Subject"];
    let mandatoryFieldXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_MANDATORY_FIELD_ERROR_MSG);
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyNoMandatoryErrorMSGforSpecifiedList(mandatoryFieldXpath, mandatoryFieldsList);
});
Then('I check mandatory error message for to field is shown in the send publish information popup', async () => {
    let mandatoryFieldsList = ["To"];
    let mandatoryFieldXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_MANDATORY_FIELD_ERROR_MSG);
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyMandatoryErrorMSGforSpecifiedList(mandatoryFieldXpath, mandatoryFieldsList);
});
When('I enter random invalid email ids in the cc and bcc field of send publish information popup', async () => {
    let randomInvalidEmailIDs = await CommonComponent_1.CommonComponent.generateRandomNoofInvalidEmailId(5, 5);
    for (let emailId of randomInvalidEmailIDs) {
        await AuroraContractDetailsActions_1.AuroraContractDetailsActions.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_CC_FIELD), emailId);
        await AuroraContractDetailsActions_1.AuroraContractDetailsActions.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_BCC_FIELD), emailId);
    }
});
Then('I check error message related to invalid email id is shown', async () => {
    let actual_Result = await CommonComponent_1.CommonComponent.verifySpecifiedColorPresentonUI(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_ID_CHIPS), "background-color", "rgba(223, 67, 84, 1)");
    await z_1.z.assertEqual(true, actual_Result);
});
When('I add email id which is having 256 character length in cc and bcc field of the send publish information popup', async () => {
    let emailID = await AuroraLmt_1.AuroraLmt.getData("MAX_LIMIT_STRING_VALUE");
    emailID = emailID + "@ultria.com";
    logger_1.logger.info("total email id", emailID);
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_CC_FIELD), emailID);
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_BCC_FIELD), emailID);
});
Then('I check error message related to more than 255 character length in the mail id is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_MORE_THAN_255_CHAR_ERR_MSG));
});
When('I add 500 duplicate email ids in cc and bcc field box of send publish information popup', async () => {
    let emailIDList = await CommonComponent_1.CommonComponent.generateDuplicateNoofEmailId(8, 500);
    for (let emailId of emailIDList) {
        await AuroraContractDetailsActions_1.AuroraContractDetailsActions.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_CC_FIELD), emailId);
        await AuroraContractDetailsActions_1.AuroraContractDetailsActions.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_BCC_FIELD), emailId);
    }
});
Then('I check error message related to more than 500 email ids added is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_ID_MORE_THAN_500_ERR_MSG));
});
When('I add each mail id with 255 character length upto 500 mail ids in cc and bcc of send publish information popup', async () => {
    let emailIDList = await CommonComponent_1.CommonComponent.generateSpecifiedNoofEmailId(249, 500);
    for (let emailId of emailIDList) {
        await AuroraContractDetailsActions_1.AuroraContractDetailsActions.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_CC_FIELD), emailId);
        await AuroraContractDetailsActions_1.AuroraContractDetailsActions.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_BCC_FIELD), emailId);
    }
});
When('I add 1 character length email id name in cc and bcc of send publish information popup', async () => {
    let emailIDList = await CommonComponent_1.CommonComponent.generateSpecifiedNoofEmailId(1, 1);
    for (let emailId of emailIDList) {
        await AuroraContractDetailsActions_1.AuroraContractDetailsActions.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_CC_FIELD), emailId);
        await AuroraContractDetailsActions_1.AuroraContractDetailsActions.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_BCC_FIELD), emailId);
    }
});
When('I enter random invalid email ids in the to field of send publish information popup', async () => {
    let randomInvalidEmailIDs = await CommonComponent_1.CommonComponent.generateRandomNoofInvalidEmailId(5, 5);
    for (let emailId of randomInvalidEmailIDs) {
        await AuroraContractDetailsActions_1.AuroraContractDetailsActions.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_TO_FIELD), emailId);
    }
});
When('I add 500 duplicate email ids in to field box of send publish information popup', async () => {
    let emailIDList = await CommonComponent_1.CommonComponent.generateDuplicateNoofEmailId(8, 500);
    for (let emailId of emailIDList) {
        await AuroraContractDetailsActions_1.AuroraContractDetailsActions.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_TO_FIELD), emailId);
    }
});
When('I add email id which is having 256 character length in to field', async () => {
    let emailIDList = await CommonComponent_1.CommonComponent.generateSpecifiedNoofEmailId(255, 1);
    for (let emailId of emailIDList) {
        await AuroraContractDetailsActions_1.AuroraContractDetailsActions.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_TO_FIELD), emailId);
    }
});
When('I add 501 email ids in the to field of send publish information popup', async () => {
    let emailIDList = await CommonComponent_1.CommonComponent.generateSpecifiedNoofEmailId(4, 501);
    for (let emailId of emailIDList) {
        await AuroraContractDetailsActions_1.AuroraContractDetailsActions.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_TO_FIELD), emailId);
    }
});
Then('I check error message related to more than 500 email ids added is shown', async () => {
    // await z.seeElement(await AuroraLmt.getElement(auroraContractDetailsElements.EMAIL_ID_MORE_THAN_500_ERR_MSG));
    let mandatoryFieldsList = ["To"];
    let mandatoryFieldXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_MANDATORY_FIELD_ERROR_MSG);
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyMandatoryErrorMSGforSpecifiedList(mandatoryFieldXpath, mandatoryFieldsList);
});
When('I add each mail id with 255 character length upto 500 mail ids in to field of send publish information popup', async () => {
    let emailIDList = await CommonComponent_1.CommonComponent.generateSpecifiedNoofEmailId(249, 500);
    for (let emailId of emailIDList) {
        await AuroraContractDetailsActions_1.AuroraContractDetailsActions.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_TO_FIELD), emailId);
    }
});
When('I add 1 character length email id name in to field of send publish information popup', async () => {
    let emailIDList = await CommonComponent_1.CommonComponent.generateSpecifiedNoofEmailId(1, 1);
    for (let emailId of emailIDList) {
        await AuroraContractDetailsActions_1.AuroraContractDetailsActions.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_TO_FIELD), emailId);
    }
});
When('I enter 255 character length subject value in the subject field of send publish information popup', async () => {
    let subjectVal = await AuroraLmt_1.AuroraLmt.getData("MAX_LIMIT_STRING_VALUE");
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.enterSubjectField(subjectVal);
});
Then('I check error message related to invalid subject field is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.SUBJECT_VAL_MORE_THAN_255_CHAR_ERR_MSG));
});
When('I enter some random value in the mail body of send publish information popup', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.entermMilBodyField(await CommonComponent_1.CommonComponent.randomString(255));
});
Then('I check entered value is reflected in the mail body of send publish information popup', async () => {
    let UIMailBodyVal = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_BODY_FIELD));
    let actual_Result = UIMailBodyVal.includes(GlobalVariables_1.GlobalVariables.temporayString);
    await z_1.z.assertEqual(true, actual_Result);
});
When('I add content upto 5000 character length in the mail body of send publish information popup', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.entermMilBodyField(await CommonComponent_1.CommonComponent.randomString(5000));
});
Then('I check 5000 of 5000 characters message is shown below the mail body of send publish information popup', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CHAR_5000_OF_5000_MSG));
});
When('I upload random invalid format document in the send publish information popup', async () => {
    await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("RANDOM_INVALID_FORMAT_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
When('I upload random blank valid format document in the send publish information popup', async () => {
    await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("RANDOM_VALID_BLANK_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
When('I upload random valid format document greater than 5mb size in the send publish information popup', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("SCENARIO_CHECK_40MB_PDF"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
Then('I check file size limit exceeded message popup is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.FILE_5MB_SIZE_EXCEED_LIMIT_POPUP));
});
When('I upload random format password protected document in the send publish information popup', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("RANDOM_PASSWORD_PROTECTED_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.BROWSER_FILE));
});
When('I clicked on ok button in the password protected related error popup', async () => {
    await BasicInformationActions_1.BasicInformationActions.clickOnErrorPopupOkBttn();
});
Then('I check password protected related error message is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.UPLOAD_FAILED_ALERT));
});
When('I upload random valid format document in the send publish information popup', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("RANDOM_VALID_FORMAT_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
Then('I check invalid format error popup is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.INVALID_FORMAT_ERROR_POPUP));
});
When('I upload 40mb valid random format document in the send publish information popup', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("SCENARIO_CHECK_40MB_PDF"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
Then('I check file upload progress bar is shown in the send publish information popup', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.FILE_UPLOAD_PROGRESS_BAR));
});
When('I upload below 5mb format document in the send publish information popup', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("PDF_3_POINT_8_MB_FOR_EMAIL"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
When('I remove recently uploaded attachement', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonRemoveAttachmentIcon();
});
Then('I check no attachment is shown in the send publish information popup', async () => {
    let uploadedAttachmentXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_UPLOADED_ATTACHMENT_MAIL);
    uploadedAttachmentXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage, uploadedAttachmentXpath);
    await z_1.z.dontSeeElement(uploadedAttachmentXpath);
});
When('I upload multiple valid format documents until max limit is reached', async () => {
    GlobalVariables_1.GlobalVariables.temporayArray = [];
    GlobalVariables_1.GlobalVariables.temporayArray = await CommonComponent_1.CommonComponent.uploadMultipleDocuments(GlobalVariables_1.GlobalVariables.multipleDocumentsPath, await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.FILE_UPLOAD_PROGRESS_BAR));
});
When('I click on cancel button in the send publish information popup', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonCancelBttnEmailPopup();
});
Then('I check skip sending this mail popup is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.UPLOAD_FAILED_ALERT));
});
When('I click on skip Email button', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonSkipMailBttnEmailPopup();
});
When('I click on cancel button in skip mail popup', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonCancelBttnSkipMailPopup();
});
When('I fill all the fields in the email popup', async () => {
    // let randomEmailIDs = await CommonComponent.generateRandomNoofEmailId(8, 10);
    // for (let emailId of randomEmailIDs) {
    //    await AuroraContractDetailsActions.enterMailIds(await AuroraLmt.getElement(auroraContractDetailsElements.EMAIL_TO_FIELD), emailId);
    // }
    let emailIDList = await CommonComponent_1.CommonComponent.getListFromString("|", await AuroraLmt_1.AuroraLmt.getData("VALID_EMAIL_IDS"));
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillMailPopupDetails(emailIDList, await AuroraLmt_1.AuroraLmt.getData("RANDOM_MINIMUM_NAME_AND_SIZE_DOCUMENT"), await CommonComponent_1.CommonComponent.randomString(100), await CommonComponent_1.CommonComponent.randomString(100));
});
Then('I check mail sent successfully toaster message is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.PUBLISH_MAIL_SENT_TOASTER_MSG));
});
When('I add 500 email ids in the to field of send publish information popup', async () => {
    let emailIDList = await CommonComponent_1.CommonComponent.generateSpecifiedNoofEmailId(8, 500);
    for (let emailId of emailIDList) {
        await AuroraContractDetailsActions_1.AuroraContractDetailsActions.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_TO_FIELD), emailId);
    }
});
When('I make alter option as yes in send publish information popup', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.selectYesoptionforAlertinPublishPopup();
});
Then('I check alerts added toaster message is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.ALERT_ADDED_TOASTER_MSG));
});
When('I add email id which is having 255 character length', async () => {
    let emailIDList = await CommonComponent_1.CommonComponent.generateSpecifiedNoofEmailId(249, 1);
    for (let emailId of emailIDList) {
        await AuroraContractDetailsActions_1.AuroraContractDetailsActions.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_TO_FIELD), emailId);
    }
});
/************************************************** AURORA-97 ends ********************************************************************/
/*********************************************************************** User Story AURORA-2975 :- Starts ************************************************************/
When('I click on create button inside cp section', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonCreateCpBttn();
});
When('I select first cp type from the list', async () => {
    GlobalVariables_1.GlobalVariables.temporayString = "";
    GlobalVariables_1.GlobalVariables.temporayString = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.FIRST_CP_TYPE_LIST));
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonFirstCPType();
});
Then('I check add cp overlay is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.ADD_CP_OVERLAY));
});
When('I click on cancel option from the overlay', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonOerlayCancelBttn();
});
Then('I check discard changes popup is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DISCARD_CHANGES_POPUP));
});
Then('I check cp type list disappears', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.FIRST_CP_TYPE_LIST));
});
When('I fill first field from the overlay', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillFirstFieldinMainForm(await CommonComponent_1.CommonComponent.randomString(5));
});
When('I click on submit button in the overlay', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonOerlaySubmitBttn();
});
Then('I check new cp added toaster message is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_ADDED_TOASTER_MSG));
});
Then('I check create button is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CREATE_CP_BTTN));
});
Then('I check submit is disabled in the overlay', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DISABLED_SUBMIT_BTTN));
});
Then('I check submit button is enabled', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.OVERLAY_SUBMIT_BTTN));
});
When('I expand first header in the overlay', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonOerlayFirstHeader();
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonOerlayFirstHeader();
});
Then('I check first field is shown in the expanded header', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.MAIN_FORM_FIRST_FIELD));
});
When('I collapse first header in the overlay', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.clickonOerlayFirstHeader();
});
Then('I check first field is not shown in the collapsed header', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.MAIN_FORM_FIRST_FIELD));
});
When('I fill first field in the atl section', async () => {
    await AuroraContractDetailsActions_1.AuroraContractDetailsActions.fillFirstFieldinATLForm(await CommonComponent_1.CommonComponent.randomString(5));
});
Then('I check form is unfilled message is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.ATL_FORM_UNFILLED_MSG));
});
Then('I check altest one atl related message is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.ATLEAST_ONE_ATL_MSG));
});
When('I fill all the mandatory fields in the add cp overlay', async () => {
    let headeListXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.OVERLAY_HEADER_LIST);
    let particularHeaderXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_OVERLAY_PARTICULAR_HEADER);
    let dynMetadataXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_METADATA_LIST);
    await CommonComponent_1.CommonComponent.fillOverlayeDetails(headeListXpath, particularHeaderXpath, dynMetadataXpath, false, false, false, "", false, "");
    logger_1.logger.info("***************filled overlay details*************", GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue);
});
Then('I check new added cp is shown in the cp search box', async () => {
    let cpName = await contractDetailsActions_1.ContractDetailsActions.getParticularMetadataValueFromContractDetailsData("Legal Name", GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue);
    await CommonComponent_1.CommonComponent.gridDropdownSelectionBasedonStringValue(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_TYPE_DROPDOWN), await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.FIRST_CP_TYPE_LIST), GlobalVariables_1.GlobalVariables.temporayString);
    await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SEARCH_FIELD), cpName);
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SEARCH_LOADING));
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SEARCH_LOADING));
    let actualValue = await AuroraContractDetailsActions_1.AuroraContractDetailsActions.verifyAddedCpinCpSearchBox(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_AUTO_SUGG_LIST), cpName);
    await z_1.z.assertEqual(true, actualValue);
});
Then('I check new cp is associated with contract', async () => {
    let cpName = await contractDetailsActions_1.ContractDetailsActions.getParticularMetadataValueFromContractDetailsData("Legal Name", GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue);
    let cpXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(cpName, await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_PARTICULAR_CP_NAME_IN_CP_CARD));
    let actualValue = ((await CommonComponent_1.CommonComponent.getHtmlElementData(cpXpath) != null) || (await CommonComponent_1.CommonComponent.getHtmlElementData(cpXpath) != undefined));
    await z_1.z.assertEqual(true, actualValue);
});
Then('I check mandatory error message is shown for all unfilled mandatory fields', async () => {
    let allMandatorySymbolXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.OVERLAY_MANDATORY_SYMBOL);
    let allMandatoryErrMsgXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.OVERLAY_MANDATORY_MESSAGE);
    let actualResult = await CommonComponent_1.CommonComponent.verifyMandatoryMessageForAllmandatoryFields(allMandatorySymbolXpath, allMandatoryErrMsgXpath);
    await z_1.z.assertEqual(true, actualResult);
});
When('I input all numeric fields with invalid data in the overlay', async () => {
    let headeListXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.OVERLAY_HEADER_LIST);
    let particularHeaderXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_OVERLAY_PARTICULAR_HEADER);
    let dynMetadataXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_METADATA_LIST);
    await CommonComponent_1.CommonComponent.fillOverlayeDetails(headeListXpath, particularHeaderXpath, dynMetadataXpath, false, false, true, await AuroraLmt_1.AuroraLmt.getData("INVALID_DATA_INTEGER"), true, "INTEGER");
    logger_1.logger.info("***************filled overlay details*************", GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue);
});
Then('I check invalid error message below each filled field in the overlay', async () => {
    let allMandatoryErrMsgXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.OVERLAY_MANDATORY_SYMBOL);
    let mapSize = GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue.size;
    let actualResult = await CommonComponent_1.CommonComponent.verifyErrorMsgForSpecificType(allMandatoryErrMsgXpath, mapSize);
    await z_1.z.assertEqual(true, actualResult);
});
When('I input all string fields with invalid data in the overlay', async () => {
    let headeListXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.OVERLAY_HEADER_LIST);
    let particularHeaderXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_OVERLAY_PARTICULAR_HEADER);
    let dynMetadataXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_METADATA_LIST);
    await CommonComponent_1.CommonComponent.fillOverlayeDetails(headeListXpath, particularHeaderXpath, dynMetadataXpath, false, false, true, await AuroraLmt_1.AuroraLmt.getData("INVALID_DATA_STRING"), true, "STRING");
    logger_1.logger.info("***************filled overlay details*************", GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue);
});
When('I input all string fields with more than 255 character data in the overlay', async () => {
    let headeListXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.OVERLAY_HEADER_LIST);
    let particularHeaderXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_OVERLAY_PARTICULAR_HEADER);
    let dynMetadataXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_METADATA_LIST);
    await CommonComponent_1.CommonComponent.fillOverlayeDetails(headeListXpath, particularHeaderXpath, dynMetadataXpath, false, false, true, await AuroraLmt_1.AuroraLmt.getData("STRING_VALUE_MORE_THAN_255C"), true, "STRING");
    logger_1.logger.info("***************filled overlay details*************", GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue);
});
When('I input all numeric fields with more than 255 character data in the overlay', async () => {
    let headeListXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.OVERLAY_HEADER_LIST);
    let particularHeaderXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_OVERLAY_PARTICULAR_HEADER);
    let dynMetadataXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_METADATA_LIST);
    await CommonComponent_1.CommonComponent.fillOverlayeDetails(headeListXpath, particularHeaderXpath, dynMetadataXpath, false, false, true, await AuroraLmt_1.AuroraLmt.getData("INTEGER_VALUE_MORE_THAN_255C"), true, "INTEGER");
    logger_1.logger.info("***************filled overlay details*************", GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue);
});
When('I upload blank or zero kb document in the overlay', async () => {
    await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("ZERO_KB_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
Then('I check error message related to blank document or zero kb document is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.UPLOAD_DOC_INLINE_ERROR_MSG));
});
When('I upload password protected document in the overlay', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("PDF_PASSWORD_PROTECTED"), await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.BROWSER_FILE));
});
Then('I check error message related to password protected document is not shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.UPLOAD_DOC_INLINE_ERROR_MSG));
});
Then('I check error message related to more than 40mb is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.UPLOAD_DOC_INLINE_ERROR_MSG));
});
Then('I check cross icon is shown in the file upload section', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.UPLOAD_CROSS_ICON));
});
Then('I check replace option is shown in the file upload section', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.UPLOAD_REPLACE_BTTN));
});
When('I upload clm blacklisted document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("CLM_BLACKLISTED_DOCS"), await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.BROWSER_FILE));
});
Then('I check error message below file upload section is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.UPLOAD_DOC_INLINE_ERROR_MSG));
});
Then('I check upload is in progress message is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.UPLOAD_PROGRESS_BAR));
});
/*********************************************************************** User Story AURORA-2975 :- Ends ************************************************************/
