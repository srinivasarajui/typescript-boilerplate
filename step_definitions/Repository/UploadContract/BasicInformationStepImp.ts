import { AuroraLmt } from "../../../common/Data/AuroraLmt";
import { BasicInformationActions } from "./BasicInformationActions";
import { CommonComponent } from "./../../commonKeywords/CommonComponent";
import { GlobalVariables } from "./../../../common/dataCreation/GlobalVariables";
import { basicInformarationElements } from "./BasicInformationElements";
import { logger } from "../../../common/Logger/logger";
/**
 * Step definition file for Basic information feature file
 *
 * @author somnath.k
 *
 *
 */
import { z } from "actionbot-wrapper/z";

/******************************************** User Story AURORA18 Starts********************************************************** */

When('I clicked on upload contract in aurora button', async () => {
    await BasicInformationActions.clickonUploadContractinAuroraBttn();
    await z.switchToNextTab();
    await z.waitForVisible(await AuroraLmt.getElement(basicInformarationElements.PAGE_LOAD_ELEMENT));
});

Then('I land on new contract page', async () => {
    await z.waitForVisible(await AuroraLmt.getElement(basicInformarationElements.PAGE_LOAD_ELEMENT));
    await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.CONTINUE_BTTN));
});

Then('I check all metadata fields not having default value selected', async () => {
    await BasicInformationActions.getAllBasicInformation(GlobalVariables.basicInformationDetails);
    let actualResult = await BasicInformationActions.verifyAllFieldsareBlank(GlobalVariables.basicInformationDetails, 0);
    await z.assertEqual(true, actualResult);
});

Then('I check all the metadata fields are mandatory', async () => {
    let actual_Result = await BasicInformationActions.verifyAllFieldsareMandatory();
    await z.assertEqual(true, actual_Result);
});

When('I clicked on continue button in new contract page', async () => {
    // pause();
    await BasicInformationActions.clickonContinueBttn();
});

Then('I check mandatory message for all the metadata fields', async () => {
    let actual_Result = await BasicInformationActions.verifyAllFieldsMandatoryMsg();
    await z.assertEqual(true, actual_Result);
});

Then('I check no values are present for other fields except type field', async () => {
    let actual_Result = await BasicInformationActions.verifyExceptTypeFieldOtherFieldNovalues();
    await z.assertEqual(true, actual_Result);
});

Then('I check mandatory message for particular field and other fields are filled', async () => {
    let actual_Result = await BasicInformationActions.verifyEveryFieldMandatoryMsgbyIndividual();
    await z.assertEqual(true, actual_Result);
});

Then('I fill all the metadata fields in new contract page', async () => {
    await BasicInformationActions.fillAllBasicInformationFields();
    if(GlobalVariables.basicInformationDetails.size>0){
        GlobalVariables.basicInformationDetails.clear();
    }
    await BasicInformationActions.getAllBasicInformation(GlobalVariables.basicInformationDetails);
});

Then('I check mandatory message for contract document', async () => {
    await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.ALL_FIELDS_MANDATORY_MSG));
});

Then('I check mandatory message is not shown for filled metadatas', async () => {
    let allFieldsMandatoryMsg = await CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt.getElement(basicInformarationElements.ALL_FIELDS_MANDATORY_MSG));
    let actual_Result = (allFieldsMandatoryMsg.length >= 1);
    await z.assertEqual(true, actual_Result);
});

Then('I reland on the new contract page again', async () => {
    await z.switchToPreviousTab();
    await z.closeOtherTabs();
    await BasicInformationActions.clickonUploadContractinAuroraBttn();
    await z.switchToNextTab();
    await z.waitForVisible(await AuroraLmt.getElement(basicInformarationElements.PAGE_LOAD_ELEMENT));
});

When('I clicked on subtype dropdown', async () => {
    await BasicInformationActions.clickonParticularDropdownField(1);
});

Then('I check no values are present in subtype field', async () => {
    await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.NO_ITEMS_FOUND_MSG));
});

When('I select value for type metadata', async () => {
    await BasicInformationActions.selectValueInParticularDropdownField(0);
    await BasicInformationActions.getAllBasicInformation(GlobalVariables.basicInformationDetails);
});

Then('I check values are present in subtype field', async () => {
    await z.dontSeeElement(await AuroraLmt.getElement(basicInformarationElements.NO_ITEMS_FOUND_MSG));
    await BasicInformationActions.verifyValuesPresentinDropdown(1);
});

Then('I select value for subtype metadata', async () => {
    await BasicInformationActions.selectValueInParticularDropdownField(1);
});

When('I leave region field as unselected', async () => {
    let actualResult = await BasicInformationActions.verifyParticularDropdownFieldisEmpty(3);
    await z.assertEqual(true, actualResult);
});

Then('I check no values are present in bu field', async () => {
    await BasicInformationActions.clickonParticularDropdownField(4);
    await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.NO_ITEMS_FOUND_MSG));
});

When('I select value for region metadata', async () => {
    await BasicInformationActions.selectValueInParticularDropdownField(3);
});

Then('I check values are present in bu field', async () => {
    await z.dontSeeElement(await AuroraLmt.getElement(basicInformarationElements.NO_ITEMS_FOUND_MSG));
    await BasicInformationActions.verifyValuesPresentinDropdown(4);
});

When('I select multiple bu from the bu list', async () => {
    GlobalVariables.selectedBuList = await BasicInformationActions.selectMultipleBuFromList();
});

Then('I check selected bu are shown in the bu box', async () => {
    let actualResult = await BasicInformationActions.verifySelectedBUinBUBox(GlobalVariables.selectedBuList);
    await z.assertEqual(true, actualResult);
});

When('I delete individual bu from the selected Bu', async () => {
    GlobalVariables.deletedBuList = await BasicInformationActions.deleteRandomParticularBuFromBuBox(GlobalVariables.selectedBuList);
});

Then('I check deleted bu are not shown in the bu box', async () => {
    await BasicInformationActions.verifyDeletedBuNotPresentinBUBox(GlobalVariables.deletedBuList);
});

When('I click on clear all icon in the bu box', async () => {
    if (GlobalVariables.selectedBuList.length > 1) {
        await BasicInformationActions.clickonClearallBUIcon();
    } else {
        logger.info("clear all scenario cannot be tested for single bu selected,skipped");
    }
});

Then('I check no bu is selected in the bu box', async () => {
    await BasicInformationActions.verifyDeletedBuNotPresentinBUBox(GlobalVariables.selectedBuList);
});

Then('I check no result found message when all dropdown are searched with invalid data', async () => {
    let actualResult = await BasicInformationActions.searchInvalidDataandValidateResult();
    await z.assertEqual(true, actualResult);
});

Then('I search for dropdown value and select the searched value for all dropdown', async () => {
    await BasicInformationActions.searchandFillBasicInformation();
});

When('I change type value to some other value', async () => {
    GlobalVariables.noofValuesinDropdown=0;
    GlobalVariables.noofValuesinDropdown = await BasicInformationActions.selectValueInParticularDropdownField(0);
});

Then('I check rest all fields are changed to default value', async () => {
    if (GlobalVariables.noofValuesinDropdown <= 2) {
        logger.info("Dropdown is having only one value so scenario is skipped");
    }
    else {
        let actualResult = await BasicInformationActions.verifyExceptTypeandSubtypeFieldOtherFieldNovalues();
        await z.assertEqual(true, actualResult);
        //await BasicInformationActions.verifyAllFieldsMandatoryMsg();
    }
});

When('I change subtype value to some other value', async () => {
    GlobalVariables.noofValuesinDropdown=0;
    GlobalVariables.noofValuesinDropdown = await BasicInformationActions.selectValueInParticularDropdownField(1);
});

Then('I check rest all fields are changed to default value except type value', async () => {
    logger.info("**************************dropdown value*******************", GlobalVariables.noofValuesinDropdown);
    if (GlobalVariables.noofValuesinDropdown <= 2) {
        logger.info("Dropdown is having only one value so scenario is skipped");
    }
    else {
        await BasicInformationActions.getAllBasicInformation(GlobalVariables.basicInformationDetails);
        let actualResult = await BasicInformationActions.verifyAllFieldsareBlank(GlobalVariables.basicInformationDetails, 1);
        let actualResut1 = await BasicInformationActions.verifyAllFieldsMandatoryMsg();
        await z.assertEqual(true, (actualResult && actualResut1));
    }
});

Then('I check rest all fields are changed to default value except type and subtype value', async () => {
    logger.info("**************************dropdown value*******************", GlobalVariables.noofValuesinDropdown);
    if (GlobalVariables.noofValuesinDropdown <= 2) {
        logger.info("Dropdown is having only one value so scenario is skipped");
    }
    else {
        await BasicInformationActions.getAllBasicInformation(GlobalVariables.basicInformationDetails);
        let actualResult = await BasicInformationActions.verifyAllFieldsareBlank(GlobalVariables.basicInformationDetails, 2);
        let actualResut1 = await BasicInformationActions.verifyAllFieldsMandatoryMsg();
        await z.assertEqual(true, (actualResult && actualResut1));
        //await BasicInformationActions.verifyAllFieldsMandatoryMsg();
    }
});

Then('I logout from the application', async () => {
    await BasicInformationActions.clickonLogoutBttn();
});

/******************************************** User Story AURORA18 Ends********************************************************** */

/******************************************** User Story AURORA-49 Starts********************************************************** */

Given('I have drag and drop box details', async () => {
    GlobalVariables.dragAndDropBoxDetails = await BasicInformationActions.getDragAndDropBoxDetails();
});

When('I upload random invalid format document', async () => {
    await CommonComponent.uploadRandomDocument(await AuroraLmt.getData("RANDOM_INVALID_FORMAT_DOCUMENT"), await AuroraLmt.getElement(basicInformarationElements.BROWSER_FILE));
});

Then('I check invalid format error popup is shown', async () => {
    await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.INVALID_FORMAT_ERROR_POPUP));
});

When('I clicked on ok button in the invalid format related error popup', async () => {
    await BasicInformationActions.clickOnErrorPopupOkBttn();
});

Then('I check invalid format error popup disappears', async () => {
    await z.dontSeeElement(await AuroraLmt.getElement(basicInformarationElements.INVALID_FORMAT_ERROR_POPUP));
});

When('I upload random blank valid format document', async () => {
    await CommonComponent.uploadRandomDocument(await AuroraLmt.getData("RANDOM_VALID_BLANK_DOCUMENT"), await AuroraLmt.getElement(basicInformarationElements.BROWSER_FILE));
});

Then('I check blank document related error popup is shown', async () => {
    await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.BLANK_DOCUMENT_ERROR_POPUP));
});

When('I clicked on ok button in the blank document related error popup', async () => {
    await BasicInformationActions.clickOnErrorPopupOkBttn();
});

Then('I check blank document related error popup disappears', async () => {
    await z.dontSeeElement(await AuroraLmt.getElement(basicInformarationElements.BLANK_DOCUMENT_ERROR_POPUP));
});

When('I upload random zero kb valid format document', async () => {
    await CommonComponent.uploadRandomDocument(await AuroraLmt.getData("ZERO_KB_DOCUMENT"), await AuroraLmt.getElement(basicInformarationElements.BROWSER_FILE));
});

Then('I check zero kb related error popup is shown', async () => {
    await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.ZERO_KB_DOCUMENT_ERROR_POPUP));
});

When('I clicked on ok button in the zero kb related error popup', async () => {
    await BasicInformationActions.clickOnErrorPopupOkBttn();
});

Then('I check zero kb related error popup disappears', async () => {
    await z.dontSeeElement(await AuroraLmt.getElement(basicInformarationElements.ZERO_KB_DOCUMENT_ERROR_POPUP));
});

When('I upload randon valid format document greater than 40mb size', async () => {
    await CommonComponent.uploadRandomDocument(await AuroraLmt.getData("RANDOM_VALID_DOCUMENT_SIZE_GREATER_40MB"), await AuroraLmt.getElement(basicInformarationElements.BROWSER_FILE));
});

Then('I check file size should be less than 40 mb error popup is shown', async () => {
    await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.GREATER_SIZE_ERROR_POPUP));
});

When('I clicked on ok button in the file size greater than 40mb error popup', async () => {
    await BasicInformationActions.clickOnErrorPopupOkBttn();
});

Then('I check file size greater than 40mb error popup disappears', async () => {
    await z.dontSeeElement(await AuroraLmt.getElement(basicInformarationElements.GREATER_SIZE_ERROR_POPUP));
});

When('I upload 40mb valid document', async () => {
    GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent.uploadRandomDocument(await AuroraLmt.getData("SCENARIO_CHECK_40MB_PDF"), await AuroraLmt.getElement(basicInformarationElements.BROWSER_FILE));
});

Then('I check file upload is still in progress', async () => {
    await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.FILE_UPLOAD_PROGRESS_BAR));
});

When('I upload random valid format document', async () => {
    GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent.uploadRandomDocument(await AuroraLmt.getData("RANDOM_VALID_FORMAT_DOCUMENT"), await AuroraLmt.getElement(basicInformarationElements.BROWSER_FILE));
});

Then('I check replace document popup is shown', async () => {
    await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.REPLACE_DOCUMENT_POPUP));
});


Then('I close replace document popup', async () => {
    await BasicInformationActions.clickOnCancelBttnInReplacePopup();
});

When('I click on replace button in the replace document popup', async () => {
    await BasicInformationActions.clickOnReplaceBttnInPopup();
});

Then('I check file upload process is aborted', async () => {
    await z.dontSeeElement(await AuroraLmt.getElement(basicInformarationElements.FILE_UPLOAD_PROGRESS_BAR));
});

Then('I check cancel button is shown inside drag and drop box', async () => {
    await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.CANCEL_BTTN_IN_DRAG_AND_DROP_BOX));
});

When('I upload docx format document', async () => {
    GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent.uploadRandomDocument(await AuroraLmt.getData("DOCX_FORMAT_DOCUMENT"), await AuroraLmt.getElement(basicInformarationElements.BROWSER_FILE));
});

When('I click on cancel button from the replace document popup', async () => {
    await BasicInformationActions.clickOnCancelBttnInReplacePopup();
});

When('I clicked on cancel button in the drag and drop box', async () => {
    await BasicInformationActions.clickOnCancelBttnInDragAndDropBox();
});

When('I click on yes button in the popup',async ()=>{
    await BasicInformationActions.clickOnCancelBttnInPopup();
});

Then('I check drag and drop box details are retained', async () => {
    let actualResult = await BasicInformationActions.verifyDragAndDropBoxDetails(GlobalVariables.dragAndDropBoxDetails);
    await z.assertEqual(true, actualResult);
});

When('I upload doc format document', async () => {
    GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent.uploadRandomDocument(await AuroraLmt.getData("DOC_FORMAT_DOCUMENT"), await AuroraLmt.getElement(basicInformarationElements.BROWSER_FILE));
});

Then('I check file upload progress bar is shown', async () => {
    await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.FILE_UPLOAD_PROGRESS_BAR));
});

Then('I check uploaded file name in the drag and drop box is shown', async () => {
    await BasicInformationActions.verifyUploadedFilenameinDragandDropBox(GlobalVariables.uploadedFileNameInNewContractPage as string);
});

Then('I check loader icon is shown', async () => {
    await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.FILE_LOADER_IMAGE));
});

When('I wait until file is uploaded successfully', async () => {
    //await BasicInformationActions.waitUtilFileisUploaded();
    await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(basicInformarationElements.FILE_LOADER_IMAGE));
});

Then('I check document is uploaded successfully', async () => {
    await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.TICK_ICON_IN_DRAG_AND_DROP_BOX));
});

Then('I check file upload progress bar is not shown', async () => {
    await z.dontSeeElement(await AuroraLmt.getElement(basicInformarationElements.FILE_UPLOAD_PROGRESS_BAR));
});

Then('I check loder icon is not shown', async () => {
    await z.dontSeeElement(await AuroraLmt.getElement(basicInformarationElements.FILE_LOADER_IMAGE));
});

Then('I check green tick mark is shown', async () => {
    await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.TICK_ICON_IN_DRAG_AND_DROP_BOX));
});

Then('I check replace button is shown inside drag and drop box', async () => {
    await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.REPLACE_BTTN_IN_DRAG_AND_DROP_BOX));
});

When('I upload pdf format document', async () => {
    GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent.uploadRandomDocument(await AuroraLmt.getData("PDF_FORMAT_DOCUMENT"), await AuroraLmt.getElement(basicInformarationElements.BROWSER_FILE));
});

When('I upload scanned pdf format document', async () => {
    GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent.uploadRandomDocument(await AuroraLmt.getData("SCANNED_PDF_FORMAT_DOCUMENT"), await AuroraLmt.getElement(basicInformarationElements.BROWSER_FILE));
});

When('I upload content copying pdf format document', async () => {
    GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent.uploadRandomDocument(await AuroraLmt.getData("CONTENT_COPYING_PDF_FORMAT_DOCUMENT"), await AuroraLmt.getElement(basicInformarationElements.BROWSER_FILE));
});

When('I upload random clm document', async () => {
    GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent.uploadRandomDocument(await AuroraLmt.getData("RANDOM_CLM_DOCUMENT"), await AuroraLmt.getElement(basicInformarationElements.BROWSER_FILE));
});

When('I upload random valid format document having image inside it', async () => {
    GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent.uploadRandomDocument(await AuroraLmt.getData("RANDOM_DOCUMENT_HAING_IMAGES"), await AuroraLmt.getElement(basicInformarationElements.BROWSER_FILE));
});

When('I upload minimum name and size random valid format document', async () => {
    GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent.uploadRandomDocument(await AuroraLmt.getData("RANDOM_MAXIMUM_NAME_AND_SIZE_DOCUMENT"), await AuroraLmt.getElement(basicInformarationElements.BROWSER_FILE));
});

When('I upload randon valid document in which no space in between the character', async () => {
    GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent.uploadRandomDocument(await AuroraLmt.getData("RANDOM_ENTIRE_LINE_NO_SPACE_CONTENT_DOCUMENT"), await AuroraLmt.getElement(basicInformarationElements.BROWSER_FILE));
});

When('I upload print pdf document', async () => {
    GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent.uploadRandomDocument(await AuroraLmt.getData("RANDOM_PRINT_PDF_DOCUMENT"), await AuroraLmt.getElement(basicInformarationElements.BROWSER_FILE));
});

When('I upload maximum name and size random valid format document', async () => {
    GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent.uploadRandomDocument(await AuroraLmt.getData("RANDOM_MAXIMUM_NAME_AND_SIZE_DOCUMENT"), await AuroraLmt.getElement(basicInformarationElements.BROWSER_FILE));
});

/******************************************** User Story AURORA-49 Ends********************************************************** */

/******************************************** User Story AURORA-47 Starts********************************************************** */

When('I clicked on cancel button in new contract page', async () => {
    await BasicInformationActions.clickonCancelBttninNewContract();
});

Then('I check discard contract popup is not shown', async () => {
    await z.dontSeeElement(await AuroraLmt.getElement(basicInformarationElements.DISCARD_CONTRACT_POPUP));
});

Then('I check discard contract popup is shown', async () => {
    await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.DISCARD_CONTRACT_POPUP));
});

When('I clicked on discard button from the discard contract popup', async () => {
    await BasicInformationActions.clickonDiscardBttninPopup();
});

Then('I land on grid page', async () => {
    await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.UPLOAD_CONTRACT_IN_AURORA_BTTN));
});

Then('I check enter field value are not retained in new contract page', async () => {
    let actualResult = await BasicInformationActions.verifyAllFieldsareBlank(GlobalVariables.basicInformationDetails, 0);
    await z.assertEqual(false, actualResult);
});

When('I clicked on cancel button from the discard contract popup', async () => {
    await BasicInformationActions.clickonCancelBttninPopup();
});

Then('I check please wait popup is shown', async () => {
    await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.PLEASE_WAIT_POPUP));
});

When('I clicked on ok button in the please wait popup', async () => {
    await BasicInformationActions.clickOnErrorPopupOkBttn();
});

Then('I check please wait popup is not shown', async () => {
    await z.dontSeeElement(await AuroraLmt.getElement(basicInformarationElements.PLEASE_WAIT_POPUP));
});

When('I fill all the fields and upload random valid document', async () => {
    await BasicInformationActions.fillAllBasicInformationFields();
    GlobalVariables.basicInformationDetails.clear();
    await BasicInformationActions.getAllBasicInformation(GlobalVariables.basicInformationDetails);
    GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent.uploadRandomDocument(await AuroraLmt.getData("RANDOM_ENTIRE_LINE_NO_SPACE_CONTENT_DOCUMENT"), await AuroraLmt.getElement(basicInformarationElements.BROWSER_FILE));
});

When('I upload very less kb contract document',async ()=>{
    GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent.uploadRandomDocument(await AuroraLmt.getData("LESS_KB_CONTRACT_DOCUMENT"), await AuroraLmt.getElement(basicInformarationElements.BROWSER_FILE));
});

Then('I check data filled in new contract page is shown in aurora contract details page', async () => {
    logger.info("Values in map", GlobalVariables.basicInformationDetails);
    logger.info("file uploaded", GlobalVariables.uploadedFileNameInNewContractPage);
    let actualResult = await BasicInformationActions.verifyBasicInformationinContractDetails(GlobalVariables.basicInformationDetails, GlobalVariables.uploadedFileNameInNewContractPage as string);
    await z.assertEqual(true, actualResult);
});

Then('I check enter field value is retained in the new contract page', async () => {
    logger.info("*****************Data in Map***************************",GlobalVariables.basicInformationDetails);
    let actualResult = await BasicInformationActions.verifyAllFieldsValues(GlobalVariables.basicInformationDetails);
    await z.assertEqual(true, actualResult);
});


/******************************************** User Story AURORA-47 Ends********************************************************** */