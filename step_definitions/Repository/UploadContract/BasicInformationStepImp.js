"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuroraLmt_1 = require("../../../common/Data/AuroraLmt");
const BasicInformationActions_1 = require("./BasicInformationActions");
const CommonComponent_1 = require("./../../commonKeywords/CommonComponent");
const GlobalVariables_1 = require("./../../../common/dataCreation/GlobalVariables");
const BasicInformationElements_1 = require("./BasicInformationElements");
const logger_1 = require("../../../common/Logger/logger");
/**
 * Step definition file for Basic information feature file
 *
 * @author somnath.k
 *
 *
 */
const z_1 = require("actionbot-wrapper/z");
/******************************************** User Story AURORA18 Starts********************************************************** */
When('I clicked on upload contract in aurora button', async () => {
    await BasicInformationActions_1.BasicInformationActions.clickonUploadContractinAuroraBttn();
    await z_1.z.switchToNextTab();
    await z_1.z.waitForVisible(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.PAGE_LOAD_ELEMENT));
});
Then('I land on new contract page', async () => {
    await z_1.z.waitForVisible(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.PAGE_LOAD_ELEMENT));
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.CONTINUE_BTTN));
});
Then('I check all metadata fields not having default value selected', async () => {
    await BasicInformationActions_1.BasicInformationActions.getAllBasicInformation(GlobalVariables_1.GlobalVariables.basicInformationDetails);
    let actualResult = await BasicInformationActions_1.BasicInformationActions.verifyAllFieldsareBlank(GlobalVariables_1.GlobalVariables.basicInformationDetails, 0);
    await z_1.z.assertEqual(true, actualResult);
});
Then('I check all the metadata fields are mandatory', async () => {
    let actual_Result = await BasicInformationActions_1.BasicInformationActions.verifyAllFieldsareMandatory();
    await z_1.z.assertEqual(true, actual_Result);
});
When('I clicked on continue button in new contract page', async () => {
    // pause();
    await BasicInformationActions_1.BasicInformationActions.clickonContinueBttn();
});
Then('I check mandatory message for all the metadata fields', async () => {
    let actual_Result = await BasicInformationActions_1.BasicInformationActions.verifyAllFieldsMandatoryMsg();
    await z_1.z.assertEqual(true, actual_Result);
});
Then('I check no values are present for other fields except type field', async () => {
    let actual_Result = await BasicInformationActions_1.BasicInformationActions.verifyExceptTypeFieldOtherFieldNovalues();
    await z_1.z.assertEqual(true, actual_Result);
});
Then('I check mandatory message for particular field and other fields are filled', async () => {
    let actual_Result = await BasicInformationActions_1.BasicInformationActions.verifyEveryFieldMandatoryMsgbyIndividual();
    await z_1.z.assertEqual(true, actual_Result);
});
Then('I fill all the metadata fields in new contract page', async () => {
    await BasicInformationActions_1.BasicInformationActions.fillAllBasicInformationFields();
    if (GlobalVariables_1.GlobalVariables.basicInformationDetails.size > 0) {
        GlobalVariables_1.GlobalVariables.basicInformationDetails.clear();
    }
    await BasicInformationActions_1.BasicInformationActions.getAllBasicInformation(GlobalVariables_1.GlobalVariables.basicInformationDetails);
});
Then('I check mandatory message for contract document', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.ALL_FIELDS_MANDATORY_MSG));
});
Then('I check mandatory message is not shown for filled metadatas', async () => {
    let allFieldsMandatoryMsg = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.ALL_FIELDS_MANDATORY_MSG));
    let actual_Result = (allFieldsMandatoryMsg.length >= 1);
    await z_1.z.assertEqual(true, actual_Result);
});
Then('I reland on the new contract page again', async () => {
    await z_1.z.switchToPreviousTab();
    await z_1.z.closeOtherTabs();
    await BasicInformationActions_1.BasicInformationActions.clickonUploadContractinAuroraBttn();
    await z_1.z.switchToNextTab();
    await z_1.z.waitForVisible(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.PAGE_LOAD_ELEMENT));
});
When('I clicked on subtype dropdown', async () => {
    await BasicInformationActions_1.BasicInformationActions.clickonParticularDropdownField(1);
});
Then('I check no values are present in subtype field', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.NO_ITEMS_FOUND_MSG));
});
When('I select value for type metadata', async () => {
    await BasicInformationActions_1.BasicInformationActions.selectValueInParticularDropdownField(0);
    await BasicInformationActions_1.BasicInformationActions.getAllBasicInformation(GlobalVariables_1.GlobalVariables.basicInformationDetails);
});
Then('I check values are present in subtype field', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.NO_ITEMS_FOUND_MSG));
    await BasicInformationActions_1.BasicInformationActions.verifyValuesPresentinDropdown(1);
});
Then('I select value for subtype metadata', async () => {
    await BasicInformationActions_1.BasicInformationActions.selectValueInParticularDropdownField(1);
});
When('I leave region field as unselected', async () => {
    let actualResult = await BasicInformationActions_1.BasicInformationActions.verifyParticularDropdownFieldisEmpty(3);
    await z_1.z.assertEqual(true, actualResult);
});
Then('I check no values are present in bu field', async () => {
    await BasicInformationActions_1.BasicInformationActions.clickonParticularDropdownField(4);
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.NO_ITEMS_FOUND_MSG));
});
When('I select value for region metadata', async () => {
    await BasicInformationActions_1.BasicInformationActions.selectValueInParticularDropdownField(3);
});
Then('I check values are present in bu field', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.NO_ITEMS_FOUND_MSG));
    await BasicInformationActions_1.BasicInformationActions.verifyValuesPresentinDropdown(4);
});
When('I select multiple bu from the bu list', async () => {
    GlobalVariables_1.GlobalVariables.selectedBuList = await BasicInformationActions_1.BasicInformationActions.selectMultipleBuFromList();
});
Then('I check selected bu are shown in the bu box', async () => {
    let actualResult = await BasicInformationActions_1.BasicInformationActions.verifySelectedBUinBUBox(GlobalVariables_1.GlobalVariables.selectedBuList);
    await z_1.z.assertEqual(true, actualResult);
});
When('I delete individual bu from the selected Bu', async () => {
    GlobalVariables_1.GlobalVariables.deletedBuList = await BasicInformationActions_1.BasicInformationActions.deleteRandomParticularBuFromBuBox(GlobalVariables_1.GlobalVariables.selectedBuList);
});
Then('I check deleted bu are not shown in the bu box', async () => {
    await BasicInformationActions_1.BasicInformationActions.verifyDeletedBuNotPresentinBUBox(GlobalVariables_1.GlobalVariables.deletedBuList);
});
When('I click on clear all icon in the bu box', async () => {
    if (GlobalVariables_1.GlobalVariables.selectedBuList.length > 1) {
        await BasicInformationActions_1.BasicInformationActions.clickonClearallBUIcon();
    }
    else {
        logger_1.logger.info("clear all scenario cannot be tested for single bu selected,skipped");
    }
});
Then('I check no bu is selected in the bu box', async () => {
    await BasicInformationActions_1.BasicInformationActions.verifyDeletedBuNotPresentinBUBox(GlobalVariables_1.GlobalVariables.selectedBuList);
});
Then('I check no result found message when all dropdown are searched with invalid data', async () => {
    let actualResult = await BasicInformationActions_1.BasicInformationActions.searchInvalidDataandValidateResult();
    await z_1.z.assertEqual(true, actualResult);
});
Then('I search for dropdown value and select the searched value for all dropdown', async () => {
    await BasicInformationActions_1.BasicInformationActions.searchandFillBasicInformation();
});
When('I change type value to some other value', async () => {
    GlobalVariables_1.GlobalVariables.noofValuesinDropdown = 0;
    GlobalVariables_1.GlobalVariables.noofValuesinDropdown = await BasicInformationActions_1.BasicInformationActions.selectValueInParticularDropdownField(0);
});
Then('I check rest all fields are changed to default value', async () => {
    if (GlobalVariables_1.GlobalVariables.noofValuesinDropdown <= 2) {
        logger_1.logger.info("Dropdown is having only one value so scenario is skipped");
    }
    else {
        let actualResult = await BasicInformationActions_1.BasicInformationActions.verifyExceptTypeandSubtypeFieldOtherFieldNovalues();
        await z_1.z.assertEqual(true, actualResult);
        //await BasicInformationActions.verifyAllFieldsMandatoryMsg();
    }
});
When('I change subtype value to some other value', async () => {
    GlobalVariables_1.GlobalVariables.noofValuesinDropdown = 0;
    GlobalVariables_1.GlobalVariables.noofValuesinDropdown = await BasicInformationActions_1.BasicInformationActions.selectValueInParticularDropdownField(1);
});
Then('I check rest all fields are changed to default value except type value', async () => {
    logger_1.logger.info("**************************dropdown value*******************", GlobalVariables_1.GlobalVariables.noofValuesinDropdown);
    if (GlobalVariables_1.GlobalVariables.noofValuesinDropdown <= 2) {
        logger_1.logger.info("Dropdown is having only one value so scenario is skipped");
    }
    else {
        await BasicInformationActions_1.BasicInformationActions.getAllBasicInformation(GlobalVariables_1.GlobalVariables.basicInformationDetails);
        let actualResult = await BasicInformationActions_1.BasicInformationActions.verifyAllFieldsareBlank(GlobalVariables_1.GlobalVariables.basicInformationDetails, 1);
        let actualResut1 = await BasicInformationActions_1.BasicInformationActions.verifyAllFieldsMandatoryMsg();
        await z_1.z.assertEqual(true, (actualResult && actualResut1));
    }
});
Then('I check rest all fields are changed to default value except type and subtype value', async () => {
    logger_1.logger.info("**************************dropdown value*******************", GlobalVariables_1.GlobalVariables.noofValuesinDropdown);
    if (GlobalVariables_1.GlobalVariables.noofValuesinDropdown <= 2) {
        logger_1.logger.info("Dropdown is having only one value so scenario is skipped");
    }
    else {
        await BasicInformationActions_1.BasicInformationActions.getAllBasicInformation(GlobalVariables_1.GlobalVariables.basicInformationDetails);
        let actualResult = await BasicInformationActions_1.BasicInformationActions.verifyAllFieldsareBlank(GlobalVariables_1.GlobalVariables.basicInformationDetails, 2);
        let actualResut1 = await BasicInformationActions_1.BasicInformationActions.verifyAllFieldsMandatoryMsg();
        await z_1.z.assertEqual(true, (actualResult && actualResut1));
        //await BasicInformationActions.verifyAllFieldsMandatoryMsg();
    }
});
Then('I logout from the application', async () => {
    await BasicInformationActions_1.BasicInformationActions.clickonLogoutBttn();
});
/******************************************** User Story AURORA18 Ends********************************************************** */
/******************************************** User Story AURORA-49 Starts********************************************************** */
Given('I have drag and drop box details', async () => {
    GlobalVariables_1.GlobalVariables.dragAndDropBoxDetails = await BasicInformationActions_1.BasicInformationActions.getDragAndDropBoxDetails();
});
When('I upload random invalid format document', async () => {
    await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("RANDOM_INVALID_FORMAT_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
Then('I check invalid format error popup is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.INVALID_FORMAT_ERROR_POPUP));
});
When('I clicked on ok button in the invalid format related error popup', async () => {
    await BasicInformationActions_1.BasicInformationActions.clickOnErrorPopupOkBttn();
});
Then('I check invalid format error popup disappears', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.INVALID_FORMAT_ERROR_POPUP));
});
When('I upload random blank valid format document', async () => {
    await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("RANDOM_VALID_BLANK_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
Then('I check blank document related error popup is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BLANK_DOCUMENT_ERROR_POPUP));
});
When('I clicked on ok button in the blank document related error popup', async () => {
    await BasicInformationActions_1.BasicInformationActions.clickOnErrorPopupOkBttn();
});
Then('I check blank document related error popup disappears', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BLANK_DOCUMENT_ERROR_POPUP));
});
When('I upload random zero kb valid format document', async () => {
    await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("ZERO_KB_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
Then('I check zero kb related error popup is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.ZERO_KB_DOCUMENT_ERROR_POPUP));
});
When('I clicked on ok button in the zero kb related error popup', async () => {
    await BasicInformationActions_1.BasicInformationActions.clickOnErrorPopupOkBttn();
});
Then('I check zero kb related error popup disappears', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.ZERO_KB_DOCUMENT_ERROR_POPUP));
});
When('I upload randon valid format document greater than 40mb size', async () => {
    await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("RANDOM_VALID_DOCUMENT_SIZE_GREATER_40MB"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
Then('I check file size should be less than 40 mb error popup is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.GREATER_SIZE_ERROR_POPUP));
});
When('I clicked on ok button in the file size greater than 40mb error popup', async () => {
    await BasicInformationActions_1.BasicInformationActions.clickOnErrorPopupOkBttn();
});
Then('I check file size greater than 40mb error popup disappears', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.GREATER_SIZE_ERROR_POPUP));
});
When('I upload 40mb valid document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("SCENARIO_CHECK_40MB_PDF"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
Then('I check file upload is still in progress', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.FILE_UPLOAD_PROGRESS_BAR));
});
When('I upload random valid format document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("RANDOM_VALID_FORMAT_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
Then('I check replace document popup is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.REPLACE_DOCUMENT_POPUP));
});
Then('I close replace document popup', async () => {
    await BasicInformationActions_1.BasicInformationActions.clickOnCancelBttnInReplacePopup();
});
When('I click on replace button in the replace document popup', async () => {
    await BasicInformationActions_1.BasicInformationActions.clickOnReplaceBttnInPopup();
});
Then('I check file upload process is aborted', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.FILE_UPLOAD_PROGRESS_BAR));
});
Then('I check cancel button is shown inside drag and drop box', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.CANCEL_BTTN_IN_DRAG_AND_DROP_BOX));
});
When('I upload docx format document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("DOCX_FORMAT_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
When('I click on cancel button from the replace document popup', async () => {
    await BasicInformationActions_1.BasicInformationActions.clickOnCancelBttnInReplacePopup();
});
When('I clicked on cancel button in the drag and drop box', async () => {
    await BasicInformationActions_1.BasicInformationActions.clickOnCancelBttnInDragAndDropBox();
});
When('I click on yes button in the popup', async () => {
    await BasicInformationActions_1.BasicInformationActions.clickOnCancelBttnInPopup();
});
Then('I check drag and drop box details are retained', async () => {
    let actualResult = await BasicInformationActions_1.BasicInformationActions.verifyDragAndDropBoxDetails(GlobalVariables_1.GlobalVariables.dragAndDropBoxDetails);
    await z_1.z.assertEqual(true, actualResult);
});
When('I upload doc format document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("DOC_FORMAT_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
Then('I check file upload progress bar is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.FILE_UPLOAD_PROGRESS_BAR));
});
Then('I check uploaded file name in the drag and drop box is shown', async () => {
    await BasicInformationActions_1.BasicInformationActions.verifyUploadedFilenameinDragandDropBox(GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage);
});
Then('I check loader icon is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.FILE_LOADER_IMAGE));
});
When('I wait until file is uploaded successfully', async () => {
    //await BasicInformationActions.waitUtilFileisUploaded();
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.FILE_LOADER_IMAGE));
});
Then('I check document is uploaded successfully', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.TICK_ICON_IN_DRAG_AND_DROP_BOX));
});
Then('I check file upload progress bar is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.FILE_UPLOAD_PROGRESS_BAR));
});
Then('I check loder icon is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.FILE_LOADER_IMAGE));
});
Then('I check green tick mark is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.TICK_ICON_IN_DRAG_AND_DROP_BOX));
});
Then('I check replace button is shown inside drag and drop box', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.REPLACE_BTTN_IN_DRAG_AND_DROP_BOX));
});
When('I upload pdf format document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("PDF_FORMAT_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
When('I upload scanned pdf format document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("SCANNED_PDF_FORMAT_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
When('I upload content copying pdf format document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("CONTENT_COPYING_PDF_FORMAT_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
When('I upload random clm document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("RANDOM_CLM_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
When('I upload random valid format document having image inside it', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("RANDOM_DOCUMENT_HAING_IMAGES"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
When('I upload minimum name and size random valid format document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("RANDOM_MAXIMUM_NAME_AND_SIZE_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
When('I upload randon valid document in which no space in between the character', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("RANDOM_ENTIRE_LINE_NO_SPACE_CONTENT_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
When('I upload print pdf document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("RANDOM_PRINT_PDF_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
When('I upload maximum name and size random valid format document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("RANDOM_MAXIMUM_NAME_AND_SIZE_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
/******************************************** User Story AURORA-49 Ends********************************************************** */
/******************************************** User Story AURORA-47 Starts********************************************************** */
When('I clicked on cancel button in new contract page', async () => {
    await BasicInformationActions_1.BasicInformationActions.clickonCancelBttninNewContract();
});
Then('I check discard contract popup is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DISCARD_CONTRACT_POPUP));
});
Then('I check discard contract popup is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DISCARD_CONTRACT_POPUP));
});
When('I clicked on discard button from the discard contract popup', async () => {
    await BasicInformationActions_1.BasicInformationActions.clickonDiscardBttninPopup();
});
Then('I land on grid page', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.UPLOAD_CONTRACT_IN_AURORA_BTTN));
});
Then('I check enter field value are not retained in new contract page', async () => {
    let actualResult = await BasicInformationActions_1.BasicInformationActions.verifyAllFieldsareBlank(GlobalVariables_1.GlobalVariables.basicInformationDetails, 0);
    await z_1.z.assertEqual(false, actualResult);
});
When('I clicked on cancel button from the discard contract popup', async () => {
    await BasicInformationActions_1.BasicInformationActions.clickonCancelBttninPopup();
});
Then('I check please wait popup is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.PLEASE_WAIT_POPUP));
});
When('I clicked on ok button in the please wait popup', async () => {
    await BasicInformationActions_1.BasicInformationActions.clickOnErrorPopupOkBttn();
});
Then('I check please wait popup is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.PLEASE_WAIT_POPUP));
});
When('I fill all the fields and upload random valid document', async () => {
    await BasicInformationActions_1.BasicInformationActions.fillAllBasicInformationFields();
    GlobalVariables_1.GlobalVariables.basicInformationDetails.clear();
    await BasicInformationActions_1.BasicInformationActions.getAllBasicInformation(GlobalVariables_1.GlobalVariables.basicInformationDetails);
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("RANDOM_ENTIRE_LINE_NO_SPACE_CONTENT_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
When('I upload very less kb contract document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent_1.CommonComponent.uploadRandomDocument(await AuroraLmt_1.AuroraLmt.getData("LESS_KB_CONTRACT_DOCUMENT"), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE));
});
Then('I check data filled in new contract page is shown in aurora contract details page', async () => {
    logger_1.logger.info("Values in map", GlobalVariables_1.GlobalVariables.basicInformationDetails);
    logger_1.logger.info("file uploaded", GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage);
    let actualResult = await BasicInformationActions_1.BasicInformationActions.verifyBasicInformationinContractDetails(GlobalVariables_1.GlobalVariables.basicInformationDetails, GlobalVariables_1.GlobalVariables.uploadedFileNameInNewContractPage);
    await z_1.z.assertEqual(true, actualResult);
});
Then('I check enter field value is retained in the new contract page', async () => {
    logger_1.logger.info("*****************Data in Map***************************", GlobalVariables_1.GlobalVariables.basicInformationDetails);
    let actualResult = await BasicInformationActions_1.BasicInformationActions.verifyAllFieldsValues(GlobalVariables_1.GlobalVariables.basicInformationDetails);
    await z_1.z.assertEqual(true, actualResult);
});
/******************************************** User Story AURORA-47 Ends********************************************************** */ 
