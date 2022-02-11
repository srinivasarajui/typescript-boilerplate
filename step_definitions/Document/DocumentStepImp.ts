/**
 * Step definition file for Document feature file
 *
 * @author Sowmyashree R V
 *
 *
 */

import { AuroraLmt } from "../../common/Data/AuroraLmt";
import { CommonComponent } from "./../commonKeywords/CommonComponent";
import { ContractDetailsActions } from "../ContractDetails/contractDetailsActions";
import { GlobalVariables } from "../../common/dataCreation/GlobalVariables";
import { auroraContractDetailsElements } from "../Repository/Contract Details/AuroraContractDetailsElements";
import { basicInformarationElements } from "../Repository/UploadContract/BasicInformationElements";
import { contractDetailsElements } from "../ContractDetails/contractDetailsElements";
import { documentActions } from "./DocumentActions";
import { documentElements } from "./DocumentElements";
import { logger } from "../../common/Logger/logger";
import { z } from "actionbot-wrapper/z";

/*********************************************************** Verify all the scenario related to document header in the document page    Starts ******************************************************************/

Given('I have repository details data,uploaded file name and supporting document details', async () => {
    await documentActions.getContractDetails();
});

When('I navigate to Document page', async () => {
    //await z.waitForVisible(await AuroraLmt.getElement(documentElements.CLM_DOCUMENTS_TAB));
    await z.click(await AuroraLmt.getElement(documentElements.CLM_DOCUMENTS_TAB));
});

Then('I add multiple supporting documents with all the formats in the repository contract', async () => {
    // where is the code to navigate to document menu in old clm
    if (GlobalVariables.supportingDocumentDetails.size > 0) {
        GlobalVariables.supportingDocumentDetails.clear()
    }
    await documentActions.uploadMultipleSupportingDocuments();
});

When('I add supporting document without attachment', async () => {
    if (GlobalVariables.supportingDocumentDetails.size > 0) {
        GlobalVariables.supportingDocumentDetails.clear()
    }
    await documentActions.clickOnUploadButton();
    await documentActions.fillDocumentDetails("", 1, true);
});

Then('I check user lands on document page', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.DOCUMENT_LAND_ON));
});

When('I click on expand or collapse document panel icon', async () => {
    await documentActions.clickOnExpandOrCollapseButton();
});

Then('I select random document panel option', async () => {
    await documentActions.clickOnExpandOrCollapseButton();
});

Then('I check contract and supporting documents subheader', async () => {
    let actual_Result = await documentActions.checkContractAndSupportingDocumentSubheader();
    await z.assertEqual(true, actual_Result);
});

Then('I check contract title value is shown below contract subheader', async () => {
    let actual_Result = await documentActions.contractTitleValidation();
    await z.assertEqual(true, actual_Result);
});

Then('I check c icon to the contract document below contract subheader', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.C_ICON_ON_CARD));
});

Then('I check uploaded contract document name below contract subheader', async () => {
    let actual_Result = await documentActions.uploadedFilenameValidation();
    await z.assertEqual(true, actual_Result);
});

Then('I check contract owner name below contract subheader', async () => {
    let actual_Result = await documentActions.contractOwnerNameValidation();
    await z.assertEqual(true, actual_Result);
});

Then('I check contract creation date below contract subheader', async () => {
    let actual_Result = await documentActions.contractCreationDateValidation();
    await z.assertEqual(true, actual_Result);
});

Then('I check download option for contract is clickable', async () => {
    await documentActions.clickOnDownloadIconContractCard();
});

Then('I check supporting document count is shown in the supporting document subheader', async () => {
    let actual_Result = await documentActions.countOfSupportingDocument();
    await z.assertEqual(true, actual_Result);
});

Then('I check entered supporting document name for all documents below supporting document subheader is shown', async () => {
    let supportingDocNameMap = GlobalVariables.supportingDocumentDetails.values();
    let supportingDocName = supportingDocNameMap.next().value;
    logger.info("supporting doc name " + supportingDocName[0]);
    let actual_Result = await documentActions.toValidateSupportingDocumentName(supportingDocName[0]);
    await z.assertEqual(true, actual_Result);

});

Then('I check entered supporting document name for all documents in the document preview dropdown is shown', async () => {
    let supportingDocNameMap = GlobalVariables.supportingDocumentDetails.values();
    let supportingDocName = supportingDocNameMap.next().value;
    logger.info("supporting doc name " + supportingDocName[0]);
    let actual_Result = await documentActions.toValidateSupportingDocumentNameInPreviewDropdown(supportingDocName[0]);
    await z.assertEqual(true, actual_Result);
});

Then('I check uploaded supporting document name for all documents below supporting document subheader is shown', async () => {
    let supportingDocFileNameMap = GlobalVariables.supportingDocumentDetails.values();
    let supportingDocFileName = supportingDocFileNameMap.next().value;
    logger.info("supporting doc name " + supportingDocFileName[2]);
    let actual_Result = await documentActions.toValidateUploadedSupportingDocNameOnCard(supportingDocFileName[2]);
    await z.assertEqual(true, actual_Result);

});

Then('I check contract owner name for all documents below supporting document subheader is shown', async () => {
    let supportingDocOwnerNameMap = GlobalVariables.supportingDocumentDetails.values();
    let supportingDocOwnerName = supportingDocOwnerNameMap.next().value;
    logger.info("supporting Doc Owner name " + supportingDocOwnerName[3]);
    let actual_Result = await documentActions.toValidateContractOwnerNameOnCard(supportingDocOwnerName[3]);
    await z.assertEqual(true, actual_Result);
});

// Then('I check uploaded on date for all documents below supporting document subheader is shown',async ()=>{
//     let actual_Result = await documentActions.toValidateUploadedOnDate(CommonComponent.getCurrentDate);
//     await z.assertEqual(true,actual_Result);
// });

Then('I check download option shown for all document below supporting document subheader is clickable', async () => {
    await documentActions.toCheckDownloadAll();
});

Then('I check download option available on random supporting document card is clickable', async () => {
    await documentActions.toCheckIndividualSupportingDocDownload();
});

When('I click on random download option from the supporting document card', async () => {
    await documentActions.toCheckIndividualSupportingDocDownload();
});

When('I click on download option based on document name from the supporting document card', async () => {
    let uiDocumentname;
    logger.info("********************data in map****************************", GlobalVariables.supportingDocumentDetails);
    for (let val of GlobalVariables.supportingDocumentDetails.values()) {
        uiDocumentname = val[0];
    }
    logger.info("particular val from map", uiDocumentname);
    let individualActionXpath = await AuroraLmt.getElement(documentElements.DYN_INDIVIDUAL_ACTIONS_ICON_FROM_DOC_NAME);
    individualActionXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(uiDocumentname, individualActionXpath);
    await z.click(individualActionXpath);
    await z.click(await AuroraLmt.getElement(documentElements.INDIVIDUAL_SUPPORTING_DOC_DOWNLOAD_OPTION));
});

Then('I check download related toaster message is shown', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.DOWNLOAD_TOASTER_MSG));
});

Then('I check supporting document name is shown in the toaster message', async () => {
    let uiDocumentname;
    logger.info("********************data in map****************************", GlobalVariables.supportingDocumentDetails);
    for (let val of GlobalVariables.supportingDocumentDetails.values()) {
        uiDocumentname = val[0];
    }
    logger.info("particular val from map", uiDocumentname);
    let toasterMsgXpath = await AuroraLmt.getElement(documentElements.DNY_DOCUMENT_NAME_IN_TOASTER_MSG);
    toasterMsgXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(uiDocumentname, toasterMsgXpath);
    await z.seeElement(toasterMsgXpath);
});

When('I click on delete option', async () => {
    await documentActions.toCheckIndividualSupportingDocDelete();
});

Then('I check remove alert popup is displayed', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.REMOVE_ALERT_POPUP));
});

When('I click on cancel button', async () => {
    await documentActions.clickOnCancelButton();
});

Then('I check remove alert popup is closed', async () => {
    await z.dontSeeElement(await AuroraLmt.getElement(documentElements.REMOVE_ALERT_POPUP));
});

When('I click on remove button', async () => {
    await documentActions.clickOnRemoveButton();
});

Then('I check supporting document is deleted', async () => {
    let actual_Result = documentActions.toCheckSupportingDocIsDeleted();
    await z.assertEqual(false, actual_Result);
});

Then('I check success popup is displayed', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.SUPPORTING_DOC_DELETE_SUCCESS_MSG));

});

When('I click on delete all option', async () => {
    await documentActions.toClickOnDeleteAll();
});

Then('I check all the supporting document is deleted', async () => {
    await z.dontSeeElement(await AuroraLmt.getElement(documentElements.NUMBER_OF_SUPP_DOC_CARDS));
});

Then('I check success popup is displayed', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.SUPPORTING_DOC_DELETE_SUCCESS_MSG));

});

Then('I check no supporting document message', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.NO_OF_SUPP_DOCS_TO_DISPLAY_MESSAGE));
});

Then('I check supporting document count as zero', async () => {
    await documentActions.countOfSupportingDocumentIsZero();
});

Then('I check download all and delete all option is disabled', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.SUPPORTING_DOC_DOWNLOADALL_OPTION_DSBLD));
});

/**************************************************************** Scenario Ends ********************************************************************************/

/***************************************************** Verify all the scenarios related to document preview section in aurora document page  Starts *****************************************/

When('I clicked on contract document card below the document header', async () => {
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickOnContractCard();
});

Then('I check selected contract document is shown in the document panel', async () => {
    await z.dontSeeElement(await AuroraLmt.getElement(documentElements.YOU_ARE_NOT_VIEWING_CURRENT_VERSION_MESSAGE));
});

Then('I check contract title and latest version is shown on the document panel header', async () => {
    let actual_Result = documentActions.toCheckTitleNVersion();
    await z.assertEqual(true, actual_Result);
});

Then('I check document is reflected in the document panel', async () => {
    let actual_Result = documentActions.toCheckSuppDocInThePanel();
    await z.assertEqual(true, actual_Result);
});

Then('I check supporting document related ribbon message is shown', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.YOU_ARE_NOT_VIEWING_CURRENT_VERSION_MESSAGE));
});

Then('I check version list dropdown is not shown in the document panel', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.CONTRACT_TITLE_IN_PREVIEW_HEADER));
});

Then('I select document from the document preview dropdown and check document is reflected in the document panel', async () => {
    await documentActions.toClickAndSelectSuppDocFromPreviewDropdown();
});

When('I select contract from random place in the document tab', async () => {
    await z.click(await AuroraLmt.getElement(documentElements.CONTRACT_TITLE_NAME_ON_CARD));
});

Then('I check supporting document related ribbon message is not shown', async () => {
    await documentActions.toCheckRibbonMessage();
});

//************************************************************************AURORA-1035 startc**************************************************************************************

Then('I check download option available for random supporting document card', async () => {
    let actual_Result = await documentActions.verifyDownloadIconRandomSuppCard();
    await z.assertEqual(true, actual_Result);
});

Then('I check download option is disabled for supporting document without attachment', async () => {
    let uiDocumentname;
    logger.info("********************data in map****************************", GlobalVariables.supportingDocumentDetails);
    for (let val of GlobalVariables.supportingDocumentDetails.values()) {
        uiDocumentname = val[0];
    }
    logger.info("particular val from map");
    let individualActionXpath = await AuroraLmt.getElement(documentElements.DYN_INDIVIDUAL_ACTIONS_ICON_FROM_DOC_NAME);
    individualActionXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(uiDocumentname, individualActionXpath);
    await z.click(individualActionXpath);
    await z.seeElement(await AuroraLmt.getElement(documentElements.DISABLED_DOWNLOAD_ICON));
});

//************************************************************************AURORA-1035 ends**************************************************************************************

//************************************************************************AURORA-991 Starts**************************************************************************************

When('I click on three dots of supporting document header', async () => {
    await documentActions.clickOnActionsIcon();
});

Then('I check download all option is disabled for no supporting document added to contract', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.DISABLED_DOWNLOAD_ICON));
});

When('I click on download all option inside three dots', async () => {
    await documentActions.clickOnDownlaodAll();
});

Then('I check no document uploaded message is shown', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.NO_DOCUMENT_UPLOADED_MSG));
});

Then('I check no document uploaded message is not shown', async () => {
    await z.dontSeeElement(await AuroraLmt.getElement(documentElements.NO_DOCUMENT_UPLOADED_MSG));
});

Then('I check more than one same document message is shown', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.MORE_THAN_ONE_SAME_DOC_MSG));
});
//************************************************************************AURORA-991 Ends**************************************************************************************


//************************************************************************AURORA-606**************************************************************************************

Then('I check digital signed copy field is not shown', async () => {
    await z.dontSeeElement(await AuroraLmt.getElement(auroraContractDetailsElements.DIGITAL_CONTRACT_DOCUMENT));
});

When('I click on 3 dots inside contract card', async () => {
    // pause();
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickonContractCardThreeDotsIcon();
});

Then('I check replace button is shown to user', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.CONTRACT_CARD_REPLACE_BTTN));
});

Then('I check replace button is not shown to user', async () => {
    // await z.seeElement(await AuroraLmt.getElement(documentElements.CONTRACT_CARD_DISABLED_REPLACE_BTTN));
    await z.dontSeeElement(await AuroraLmt.getElement(documentElements.CONTRACT_CARD_REPLACE_BTTN));
});

When('I click on replace button inside contract card 3 dots icon', async () => {
    await z.click(await AuroraLmt.getElement(documentElements.CONTRACT_CARD_REPLACE_BTTN));
});

When('I search for any status existing contract', async () => {
    let val = await AuroraLmt.getData("REPO_ALL_STATUS_VALUE");
    let contractStatusVal = await CommonComponent.getListFromString("|", val);
    let randomOption = await CommonComponent.getRandomNumber(contractStatusVal.length) as number;
    await CommonComponent.gridDropdownSelectionBasedonStringValue(await AuroraLmt.getElement(contractDetailsElements.REPO_STATUS_DROPDOWN), await AuroraLmt.getElement(contractDetailsElements.CONTRACT_STATUS_OPTION_LIST), contractStatusVal[randomOption]);
});

Then('I check replace contract form section is shown towards right side of the page', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_FORM));
});

Then('I check document preview panel dropdown is not shown', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.DOCUMENT_PREVIEW_DROPDOWN));
});

When('I click on 3 dots icon on the replace contract form section', async () => {
    await documentActions.clickonReplaceFormThreeDotsIcon();
});

Then('I check replace document icon is not shown in the replace contract form section inside 3 dots', async () => {
    // await z.seeElement(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_FORM_DISABLED_REPLACE_ICON));
    await z.dontSeeElement(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_FORM_REPLACE_ICON));
});

Then('I check replace document icon is shown in the replace contract form section inside 3 dots', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_FORM_REPLACE_ICON));
});

Then('I check download icon is shown in the replace contract form section', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_FORM_DOWNLOAD_ICON));
});

Then('I check download icon is not shown in the replace contract form section', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_FORM_DOWNLOAD_ICON));
});

When('I click on cross icon at header of the replace contract form', async () => {
    await documentActions.clickonreplaceContractFormCorssIcon();
});

// Then('I check latest contract document is shown in the document preview panel',async ()=>{
//     logger.info("*************data in temp array*******************",GlobalVariables.temporayArray);
//     let flag1=await ContractDetailsActions.verifyDefaultValueinDocumentPanelDropdown(GlobalVariables.temporayArray[0]);
//     let flag2=await ContractDetailsActions.verifyLatestVersionNoinDocumentPanel(GlobalVariables.temporayArray[1]);
//     await z.assertEqual(true,(flag1==flag2));
//     await z.seeElement(await AuroraLmt.getElement(documentElements.DOCUMENT_PREVIEW_LATEST_ICON));
// });

Then('I land on aurora document menu page', async () => {
    await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(auroraContractDetailsElements.AURORA_LOADER));
    await z.dontSeeElement(await AuroraLmt.getElement(contractDetailsElements.CONTRACT_DETAILS_ERROR_TOASTER));
    // await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(documentElements.DOCUMENT_PAGE_LOADER));
    await CommonComponent.waitUntilAuroraLoaderDisappears("(//div[contains(@class,'manage-contract-LHS')]//document//ngx-skeleton-loader)[2]");

    // await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(documentElements.CONTRACT_CARD_THREE_DOTS_ICON));
    await z.wait(10);
});

Then('I check replace contract form section is not shown towards right side of the page', async () => {
    await z.dontSeeElement(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_FORM));
});

When('I click on view document link of contract cards', async () => {
    await documentActions.clickonContractCardViewDocumentLink();
});

Then('I check contract document is viewed in the document preview panel', async () => {
    let contractTitleCard = await z.grabTextFrom(await AuroraLmt.getElement(documentElements.CONTRACT_TITLE_NAME_ON_CARD));
    logger.info("*******************Contract Title in contract card***********************", contractTitleCard);
    let actual_Result = await ContractDetailsActions.verifyDefaultValueinDocumentPanelDropdown(contractTitleCard);
    await z.assertEqual(true, actual_Result);
    await z.seeElement(await AuroraLmt.getElement(documentElements.DOCUMENT_PREVIEW_LATEST_ICON));
});

Then('I check expand or collapse document panel icon is disabled', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.EXPAND_OR_COLLAPSE_DOCUMENT_PANEL_DISBALED));
});

When('I click on 3 dots inside supporting document card', async () => {
    await documentActions.clickonSuppDocCardThreeDotsIcon();
});

Then('I check replace button is not shown to user', async () => {
    await z.dontSeeElement(await AuroraLmt.getElement(documentElements.CONTRACT_CARD_REPLACE_BTTN));
});

When('I click on replace button inside contract cards', async () => {
    await documentActions.clickonContractCardReplaceBttn();
});

When('I replace original contract document with invalid random format document', async () => {
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickonContractCardThreeDotsIcon();
    await documentActions.clickonContractCardReplaceBttn();
    // await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(documentElements.UPLOAD_DOCUMENT_HEADER));
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceRandomDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("RANDOM_INVALID_FORMAT_DOCUMENT"));
});

Then('I check replace document progress bar is not shown', async () => {
    await z.dontSeeElement(await AuroraLmt.getElement(basicInformarationElements.FILE_UPLOAD_PROGRESS_BAR));
});

When('I replace original contract document with blank or zero kb document', async () => {
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickonContractCardThreeDotsIcon();
    await documentActions.clickonContractCardReplaceBttn();
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceRandomDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("RANDOM_VALID_BLANK_DOCUMENT"));
});

Then('I check blank document or zero kb related error popup is shown', async () => {
    // if ((await CommonComponent.getHtmlElementData(await AuroraLmt.getElement(basicInformarationElements.BLANK_DOCUMENT_ERROR_POPUP)) != null) || (await CommonComponent.getHtmlElementData(await AuroraLmt.getElement(basicInformarationElements.BLANK_DOCUMENT_ERROR_POPUP)) != undefined)) {
    if (await CommonComponent.getHtmlElementData(await AuroraLmt.getElement(basicInformarationElements.BLANK_DOCUMENT_ERROR_POPUP)) != null) {

        await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.BLANK_DOCUMENT_ERROR_POPUP));
    } else {
        await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.ZERO_KB_DOCUMENT_ERROR_POPUP));
    }
});

Then('I check blank document or zero kb related error popup disappears', async () => {
    await z.dontSeeElement(await AuroraLmt.getElement(basicInformarationElements.BLANK_DOCUMENT_ERROR_POPUP));
    await z.dontSeeElement(await AuroraLmt.getElement(basicInformarationElements.ZERO_KB_DOCUMENT_ERROR_POPUP));
});

When('I replace original contract document with valid random more than 40 mb document', async () => {
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickonContractCardThreeDotsIcon();
    await documentActions.clickonContractCardReplaceBttn();
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceRandomDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("RANDOM_VALID_DOCUMENT_SIZE_GREATER_40MB"));
});

When('I replace original contract document with valid passowrd protected document', async () => {
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickonContractCardThreeDotsIcon();
    await documentActions.clickonContractCardReplaceBttn();
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceRandomDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("RANDOM_PASSWORD_PROTECTED_DOCUMENT"));
});

Then('I check error popup related to passowrd protected document is shown', async () => {
    await z.seeElement(await AuroraLmt.getElement(auroraContractDetailsElements.UPLOAD_FAILED_ALERT));
});

When('I replace original contract document with valid random format document', async () => {
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickonContractCardThreeDotsIcon();
    await documentActions.clickonContractCardReplaceBttn();
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceRandomDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("RANDOM_VALID_FORMAT_DOCUMENT"));
});

Then('I check upload document section is shown towards right side of the page', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.UPLOAD_DOCUMENT_HEADER));
});

When('I replace original contract document with valid 40 mb document', async () => {
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickonContractCardThreeDotsIcon();
    await documentActions.clickonContractCardReplaceBttn();
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceRandomDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("SCENARIO_CHECK_40MB_PDF"));
});

When('I replace in progress document with another valid random document', async () => {
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceRandomDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("DOC_FORMAT_DOCUMENT"));
});

When('I replace in progress document with another random invalid document', async () => {
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceRandomDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("RANDOM_INVALID_FORMAT_DOCUMENT"));
});

Then('I check file upload in prgress popup is shown', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.FILE_UPLOAD_INPROGRESS_POPUP));
});

Then('I check previous original contract document details is shown in the browse document box', async () => {
    logger.info("*******************************Data in temp array**********************", GlobalVariables.temporayArray);
    await documentActions.verifyUploadedFilenameinBrowseDocumentBox(GlobalVariables.temporayArray[0]);
});

Then('I check cancel button is shown inside browse document box', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.CANCEL_BTTN_IN_BROWSE_DOCUMENT_BOX));
});

When('I click on cross icon at the top header of the upload document section', async () => {
    await documentActions.clickonUploadDocumentCrossIcon();
});

Then('I check discard the changes popup is shown', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.DISCARD_CHANGES_POPUP));
});

When('I click on continue button in discard the changes popup', async () => {
    await documentActions.clickonDiscardContinueBttn();
});

Then('I check replace document progress bar is shown', async () => {
    await z.seeElement(await AuroraLmt.getElement(basicInformarationElements.FILE_UPLOAD_PROGRESS_BAR));
});

Then('I check uploaded file name is shown in the browse document box', async () => {
    logger.info("*******************************uploaded file name**********************", GlobalVariables.uploadedFileName);
    await documentActions.verifyUploadedFilenameinBrowseDocumentBox(GlobalVariables.uploadedFileName as string);
});

When('I click on save button at the bottom of upload document section', async () => {
    // pause();
    await documentActions.clickonUploadDocumentSaveBttn();
});

Then('I check previous document will be replaced ribbon is shown', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.REPLACE_DOCUMENT_RIBBON_MSG));
});

When('I replace original contract document with doc format document', async () => {
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickonContractCardThreeDotsIcon();
    await documentActions.clickonContractCardReplaceBttn();
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("DOC_FORMAT_DOCUMENT"));
});

Then('I check loader icon is not shown', async () => {
    await z.dontSeeElement(await AuroraLmt.getElement(basicInformarationElements.FILE_LOADER_IMAGE));
});

When('I click on replace file link inside browse document box', async () => {
    await z.click(await AuroraLmt.getElement(documentElements.UPLOAD_DOCUMENT_REPLACE_FILE_LINK));
});

Then('I check replace file link is shown inside browse document box', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.UPLOAD_DOCUMENT_REPLACE_FILE_LINK));
});

Then('I check replaced document name is shown in the browse document box', async () => {
    logger.info("*******************************uploaded file name**********************", GlobalVariables.uploadedFileName);
    await documentActions.verifyUploadedFilenameinBrowseDocumentBox(GlobalVariables.uploadedFileName as string);
});

When('I replace original contract document with docx format document', async () => {
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickonContractCardThreeDotsIcon();
    await documentActions.clickonContractCardReplaceBttn();
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("DOCX_FORMAT_DOCUMENT"));
    // await BasicInformationActions.clickOnReplaceBttnInPopup();
});

When('I replace original contract document with pdf format document', async () => {
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickonContractCardThreeDotsIcon();
    await documentActions.clickonContractCardReplaceBttn();
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("PDF_FORMAT_DOCUMENT"));
});

When('I replace original contract document with scanned pdf format document', async () => {
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickonContractCardThreeDotsIcon();
    await documentActions.clickonContractCardReplaceBttn();
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("SCANNED_PDF_FORMAT_DOCUMENT"));
});

When('I replace original contract document with content copying pdf format document', async () => {
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickonContractCardThreeDotsIcon();
    await documentActions.clickonContractCardReplaceBttn();
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("CONTENT_COPYING_PDF_FORMAT_DOCUMENT"));
});

When('I replace original contract document with random clm document', async () => {
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickonContractCardThreeDotsIcon();
    await documentActions.clickonContractCardReplaceBttn();
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceRandomDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("RANDOM_CLM_DOCUMENT"));
});

When('I replace original contract document with random valid format document having image inside it', async () => {
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickonContractCardThreeDotsIcon();
    await documentActions.clickonContractCardReplaceBttn();
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceRandomDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("RANDOM_DOCUMENT_HAING_IMAGES"));
});

When('I replace original contract document with minimum name and size random valid format document', async () => {
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickonContractCardThreeDotsIcon();
    await documentActions.clickonContractCardReplaceBttn();
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceRandomDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("RANDOM_MINIMUM_NAME_AND_SIZE_DOCUMENT"));
});

When('I replace original contract document with randon valid document in which no space in between the character', async () => {
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickonContractCardThreeDotsIcon();
    await documentActions.clickonContractCardReplaceBttn();
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceRandomDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("RANDOM_ENTIRE_LINE_NO_SPACE_CONTENT_DOCUMENT"));
});

When('I replace original contract document with print pdf document', async () => {
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickonContractCardThreeDotsIcon();
    await documentActions.clickonContractCardReplaceBttn();
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceRandomDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("RANDOM_PRINT_PDF_DOCUMENT"));
});

When('I replace original contract document with maximum name and size random valid format document', async () => {
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickonContractCardThreeDotsIcon();
    await documentActions.clickonContractCardReplaceBttn();
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceRandomDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("RANDOM_MAXIMUM_NAME_AND_SIZE_DOCUMENT"));
});

When('I replace original contract document with caps PDF format document', async () => {
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickonContractCardThreeDotsIcon();
    await documentActions.clickonContractCardReplaceBttn();
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("CPDF_FORMAT_DOCUMENT"));
});

When('I replace original contract document with pdf file greater than 10mb', async () => {
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickonContractCardThreeDotsIcon();
    await documentActions.clickonContractCardReplaceBttn();
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("PDF_MORETHAN_TEN_MB"));
});

When('I replace original contract document with with graphical pdf document', async () => {
    await documentActions.storeLatestDocumentpreviewDetails();
    await documentActions.clickonContractCardThreeDotsIcon();
    await documentActions.clickonContractCardReplaceBttn();
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("PDF_GRAPHICAL_DOCUMENT"));
});

Then('I check original contract document is replaced with recent document', async () => {
    logger.info("*****************Data in map***************", GlobalVariables.temporayArray);
    let actualResult = await documentActions.verifyReplacedContractinContractCard(GlobalVariables.temporayArray[0], await CommonComponent.getCurrentDate());
    await z.assertEqual(true, actualResult);
});

Then('I check replaced document is shown in the document preview panel', async () => {
    logger.info("*************data in temp array*******************", GlobalVariables.temporayArray);
    let flag1 = await ContractDetailsActions.verifyDefaultValueinDocumentPanelDropdown(GlobalVariables.temporayArray[0]);
    let flag2 = await documentActions.generateAndVerifyVersionNoFromExisting(GlobalVariables.temporayArray[1]);
    await z.assertEqual(true, (flag1 == flag2));
    await z.seeElement(await AuroraLmt.getElement(documentElements.DOCUMENT_PREVIEW_LATEST_ICON));
});

Then('I check original contract document is not replaced with recent document', async () => {
    logger.info("*************data in temp array*******************", GlobalVariables.temporayArray);
    let flag1 = await ContractDetailsActions.verifyDefaultValueinDocumentPanelDropdown(GlobalVariables.temporayArray[0]);
    let flag2 = await ContractDetailsActions.verifyLatestVersionNoinDocumentPanel(GlobalVariables.temporayArray[1]);
    await z.assertEqual(true, (flag1 == flag2));
    await z.seeElement(await AuroraLmt.getElement(documentElements.DOCUMENT_PREVIEW_LATEST_ICON));
});

When('I clicked on cancel button at the bottom of upload document section', async () => {
    await documentActions.clickonUploadDocuemntFooterCancelBttn();
});

When('I click on cancel button that is shown inside browse document box', async () => {
    await documentActions.clickonUploadDocumentInsideCancelBttn();
});

Then('I check cancel upload popup is shown', async () => {
    await z.seeElement(await AuroraLmt.getElement(auroraContractDetailsElements.UPLOAD_FAILED_ALERT));
});

When('I click on no button in cancel upload popup', async () => {
    await documentActions.clickonNoBttninCancelUploadPopup();
});

When('I click on yes button in cancel upload popup', async () => {
    await documentActions.clickonYesBttninCancelUploadPopup()
});

When('I replace contract document with valid random format document from replace contract form section', async () => {
    await documentActions.clickonReplaceFormThreeDotsIcon();
    await documentActions.clickonContractCardReplaceBttn();
    GlobalVariables.uploadedFileName = "";
    GlobalVariables.uploadedFileName = await CommonComponent.replaceRandomDocument(await AuroraLmt.getElement(documentElements.REPLACE_CONTRACT_DOCUMENT_UPLOAD), await AuroraLmt.getData("RANDOM_VALID_FORMAT_DOCUMENT"));
});

When('I clicked on cancel button in the discard the changes popup', async () => {
    await documentActions.clickOnCancelButton();
});

When('I click on disabled section on ui', async () => {
    // await z.click(await AuroraLmt.getElement(documentElements.EXPAND_OR_COLLAPSE_DOCUMENT_PANEL_DISBALED));
    await CommonComponent.clickUsingJsByXpath(await AuroraLmt.getElement(documentElements.EXPAND_OR_COLLAPSE_DOCUMENT_PANEL_DISBALED));
});


// ***********************************[AURORA-988]*********************************(((


Then('I see the Delete option is displayed for the supporting Document', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.SUPPORTING_DOC_DELETE_OPTION));
});

When('I click on delete for a supporting Document', async () => {
    await documentActions.clickOnDeleteOptionForSupDoc();
});

Then('I check Cancel option is displayed in Supporting Doc Delete Confirmation Popup', async () => {
    await z.wait(2);
    await z.seeElement(await AuroraLmt.getElement(documentElements.CANCEL_BUTTON_REMOVE_POPUP));
});

Then('I see delete option is displayed in the confirmation popup', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.DELETE_OPTION_DELETE_CONFIRMATION_POPUP));
});

When('I click on cancel button', async () => {
    await documentActions.clickOnCancelButton();
});

Then('I see Delete toaster message', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.DELETE_TOASTER_MESSAGE));
});

Then('I see the delete toaster message content', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.DELETE_TOASTER_MESSAGE_CONTENT));
});

When('I click on delete button option inside popup', async () => {
    await documentActions.clickOnDeleteButtonInsidePopup();
    await z.wait(3);

});
When('I check the Document is removed', async () => {
    await documentActions.checkDocumentIsRemoved();
    await z.wait(3);
});

When('I check number of documents attached', async () => {
    await documentActions.checkNumberOfDocumentAttatched();
});

When('I check all attached supportings document titles', async () => {
    await documentActions.getAllSupportingDocTitles();
});

// *******************************[]AURORA-990]***********************************

When('I click on 3 dots near the Supporting document header', async () => {
    await documentActions.clickonThreeDotsIconNearSuppDocHeader();
});

Then('I see the Delete All option is displayed for the supporting Document', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.SUPPORTING_DOC_DELETE_ALL_OPTION));
});

When('I click on Delete All option from Support Doc Header', async () => {
    await documentActions.clickOnDeleteOptionForSupDoc();
});

Then('I check Cancel option is displayed in Delete All Confirmation Popup', async () => {
    await z.wait(2);
    await z.seeElement(await AuroraLmt.getElement(documentElements.CANCEL_BUTTON_REMOVE_POPUP));
});






// ------------------------------[US Aurora-986]--------------------------------

Then('I see add icon to add supporting document', async () => {
    await documentActions.checkAddIconForAddSupportingDocs();
});

Then('I click on add supporting document icon', async () => {
    await documentActions.clickOnAddIconForAddSupportingDocs();
});

Then('I see the add supporting document popup on RHS panel', async () => {
    await documentActions.checkAddSupportingDocsPopupHeader();
});

Then('I check browse link is displayed on add supporting doc popup header', async () => {
    await documentActions.checkOnBrowseForUploadingSupportingDocs();
});

Then('I See the popup shows the document upload progress while uploading the document', async () => {
    await documentActions.checkUploadProgressonPopup();
});

Then('I see the file size in the Popup when upload is in progress', async () => {
    await documentActions.checkDocSizeInfo();
});

Then('I see user is able to see the Cancel option  while upload is in progress', async () => {
    await documentActions.checkCancelOptionforUploadInProgress();
});

Then('I click on cancel option while the upload is in progress', async () => {
    await documentActions.clickCancelOptionWhileUploadInProgress();
});

Then('I check the Cancel confirmation pop up is displayed', async () => {
    await documentActions.checkConfirmationPopupForCancel();
});

Then('I see Delete option on the Add Supporting document Popup', async () => {
    await documentActions.checkDeleteOptionOnAddSupportingDocPopup();
});

Then('I see Replace option on the Add Supporting document Popup', async () => {
    await documentActions.checkReplaceOptionOnAddSupportingDocPopup();
});

When('I click on replace button in the Add supporting document popup', async () => {
    await documentActions.clickOnReplaceBttnInPopup();
});

When('I click on Delete button in the Add supporting document popup', async () => {
    await documentActions.clickOnDeleteBttnInPopup();
});

Then('I check the confirmation Pop-up is displayed when clicked on Replace option', async () => {
    await documentActions.checkReplaceConfrmationPopupForAddSupportingDoc();
});

Then('I check the confirmation Pop-up is displayed when clicked on Delete option', async () => {
    await documentActions.checkDeleteConfrmationPopupForAddSupportingDoc();
});

Then('I check selected preview is retained in the Add supporting document Popup', async () => {
    await documentActions.checkAddSupportingDocUploadedPreview();
});

Then('I check Astrick symbol for Document title on add supporting doc popup header', async () => {
    await documentActions.checkAstrickSymbolForDocTitle();
});

Then('I check Astrick symbol for Document Type on add supporting doc popup header', async () => {
    await documentActions.checkAstrickSymbolForDocType();
});

Then('I click on save button in the Add Supporting Document Popup', async () => {
    await documentActions.clickonSaveContractButton();
});

Then('I check Error message below below Document Title field', async () => {
    await documentActions.verifyErrorMsgForDocTitleField();
});

Then('I check Error message below below Description field', async () => {
    await documentActions.verifyErrorMsgForDescriptionField();
});

Then('I check Error message below below Document Type field', async () => {
    await documentActions.verifyErrorMsgForDocTypeField();
});

When('I select the Document Type as {string} from the dropdown', async function (value) {
    await documentActions.selectValueFromDocType(value);
});


Then('I check the confirmation Pop-up is displayed when clicked on Cancel option', async () => {
    await documentActions.checkCancelConfrmationPopupForAddSupportingDoc();
});

When('I enter the value in the Document Title field', async () => {
    await documentActions.enterDocumentTitle("A contract can have multiple supporting documents.");
});

When('I enter the value in the Description field', async () => {
    await documentActions.enterDescriptioninAddSupportingDocPopup("User will be able to add supporting documents in a contract. A contract can have multiple supporting documents.User will be able to add supporting documents in a contract. A contract can have multiple supporting documents.User will be able to add supporting documents in a contract. A contract can have multiple supporting documents.User will");
});

When('I check the character limit is {string}', async function (value) {
    await documentActions.checkCharacterLimitForDocTitle(value);
});

When('I check the character limit is {string} for Description', async function (value) {
    await documentActions.checkCharacterLimitForDescription(value);
});

When('I click on ok button from the Cancel Popup', async () => {
    await documentActions.clickOnOKButtonForCancelPopup();
});
When('I click on ok button from the Replace Popup', async () => {
    await documentActions.clickOnOKButtonForReplacePopup();
});

Then('I check the Add supporting Doc Popup is not displayed', async () => {
    await documentActions.checkAddSupportingDocPopup();
});

Then('I check toaster message for Add Supporting Document is displayed', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.TOASTER_FOR_SAVING_ADD_SUPPORTING_DOC))
});

Then('I check the supporting Doc is displayed on LHS Side', async () => {
    await documentActions.checkSupportingDocDisplayedLHSSide();
});

Then('I check preview is not displayed for uploading Doc', async () => {
    await documentActions.checkPreviewisNotDisplayed();
});

When('I click on the uploaded supporting Document', async () => {
    await documentActions.clickOnSupportDocFromLHS();
});

Then('I check the respective Supporting Document is displayed on RHS', async () => {
    await documentActions.checkSupportingDocDisplayedRHSSide();
});
Then('I check the File name is displayed with ellipses', async () => {
    await documentActions.checkFileNamedDisplayedWithElipses();
});

Then('I check full file name is displayed on MouseHover', async () => {
    await documentActions.checkFullNameOnMouseHover();
});

When('I upload multiple supporting Documents', async () => {
    GlobalVariables.uploadedFileNameInNewContractPage = "";
    GlobalVariables.uploadedFileNameInNewContractPage = await CommonComponent.uploadRandomDocument(await AuroraLmt.getData("PDF_FORMAT_DOCUMENT"), await AuroraLmt.getElement(basicInformarationElements.BROWSER_FILE));
});

When('I click cancel from Add supporting document Popup', async () => {
    await documentActions.clickOnCancelFromAddSupportingDocPopup();
});

// ***********************************[AURORA-987]*********************************(((


Then('I see the Edit option is displayed for the supporting Document', async () => {
    await z.seeElement(await AuroraLmt.getElement(documentElements.SUPPORTING_DOC_EDIT_OPTION));
});
When('I click on Edit for a supporting Document', async () => {
    await documentActions.clickOnEditOptionForSupDoc();
});
Then('I see the edit supporting document popup on RHS panel', async () => {
    await documentActions.checkEditSupportingDocsPopupHeader();
});

Then('I see the header as edit supporting document on the Popup', async () => {
    await documentActions.checkEditSupportingDocsPopupHeader();
});
Then('I check the user is able to see the document name autopopulated', async () => {
    await documentActions.checkEditSupportingDocumentName();
});
When('I click on replace button in the Edit supporting document popup', async () => {
    await documentActions.clickOnReplaceBttnInPopup();
});

Then('I check the user is able to see the document title autopopulated', async () => {
    await documentActions.checkEditSupportingDocumentTitle();
});
Then('I check the user is able to see the Description autopopulated', async () => {
    await documentActions.checkEditSupportingDocumentDescription();
});
Then('I check the user is able to see the Document uploaded by field is autopopulated', async () => {
    await documentActions.checkEditSupportingDocumentUploadByField();
});
Then('I check the user is able to see the Document uploaded on field is autopopulated', async () => {
    await documentActions.checkEditSupportingDocumentUploadOnField();
});
Then('I check the user is able to see the Document Type is autopopulated', async () => {
    await documentActions.checkEditSupportingDocumentTypeField();
});

Then('I check Cancel option is displayed in Edit Supporting Doc Confirmation Popup', async () => {
    await documentActions.checkCancelOptionOnSuppDocPopup();
});
Then('I check Save option is displayed in Edit Supporting Doc Confirmation Popup', async () => {
    await documentActions.clickonSaveContractButton();
});
When('I click on Cancel option is in Edit Supporting Doc Confirmation Popup', async () => {
    await documentActions.clickOnCancelOptionEditSuppDocPopup();
});





