"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentActions = void 0;
const AuroraLmt_1 = require("../../common/Data/AuroraLmt");
const CommonComponent_1 = require("./../commonKeywords/CommonComponent");
const GlobalVariables_1 = require("../../common/dataCreation/GlobalVariables");
const AuroraContractDetailsElements_1 = require("../Repository/Contract Details/AuroraContractDetailsElements");
const BasicInformationElements_1 = require("../Repository/UploadContract/BasicInformationElements");
const contractDetailsElements_1 = require("../ContractDetails/contractDetailsElements");
const DocumentElements_1 = require("./DocumentElements");
const logger_1 = require("../../common/Logger/logger");
const z_1 = require("actionbot-wrapper/z");
/*
* The class is to perform document actions
*
* @author sowmyashree r v
*
*
*/
class documentActions {
    /************************************ Subservices ***********************************************/
    /*
    * Click on Add document information button
    *
    *
    */
    static async clickOnUploadButton() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.ADD_DOCUMENT_INFORMATION));
    }
    /*
    * Click on Save button
    *
    *
    */
    static async clickOnSave() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_SAVE_BUTTON));
    }
    /*
    * Click on ok button in the save popup
    *
    *
    */
    static async clickOnOkInSavePopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_SAVE_OK));
    }
    /*
    * Click on Expand or Collapse button
    *
    *
    */
    static async clickOnExpandOrCollapseButton() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.EXPAND_OR_COLLAPSE_DOCUMENT_PANEL));
    }
    /*
    * Click on contract card option button
    *
    *
    */
    static async clickOnContractCardOption() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOWNLOAD_ICON_CONTRACT_CARD));
    }
    /*
    * Click on download button in contract card
    *
    *
    */
    static async clickOnDownloadIconContractCard() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CONTRACT_CARD_OPTION));
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOWNLOAD_ICON_CONTRACT_CARD));
    }
    /*
    * Click on supporting document actions icon
    *
    *
    */
    static async clickOnActionsIcon() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.SUPPORTING_DOC_ACTION_ICON));
    }
    /*
    * Click on download all option
    *
    *
    */
    static async clickOnDownlaodAll() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.SUPPORTING_DOC_DOWNLOADALL_OPTION));
    }
    /*
    * Click on delete all option
    *
    *
    */
    static async clickOnDeleteAll() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.SUPPORTING_DOC_DELETEALL_BUTTON));
    }
    /*
    * Click on cancel button in remove alert popup
    *
    *
    */
    static async clickOnCancelButton() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CANCEL_BTTN_SKIP_MAIL_POPUP));
    }
    /*
    * Click on remove button in remove alert popup
    *
    *
    */
    static async clickOnRemoveButton() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.REMOVE_BUTTON_REMOVE_POPUP));
    }
    /*
    * Click on contract card
    *
    *
    */
    static async clickOnContractCard() {
        let contractCard = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CONTRACT_CARD);
        await z_1.z.moveCursorTo(contractCard);
        await z_1.z.click(contractCard);
    }
    /*
    * Click on contract card
    *
    *
    */
    static async clickOnSupportingDocCard() {
        let supportingDocCard = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CONTRACT_CARD);
        await z_1.z.moveCursorTo(supportingDocCard);
        await z_1.z.click(supportingDocCard);
    }
    /*
    * Click on preview dropdown
    *
    *
    */
    static async clickOnPreviewDropdown() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.PREVIEW_DROPDOWN));
    }
    /**
    * To click on three dots icon inside contract card
    * @author somnath.k
    */
    static async clickonContractCardThreeDotsIcon() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CONTRACT_CARD_THREE_DOTS_ICON));
    }
    /**
    * To click on cancel button in upload document footer
    * @author somnath.k
    */
    static async clickonUploadDocuemntFooterCancelBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.UPLOAD_DOCUMENT_FOOTER_CANCEL));
    }
    /**
    * To click on cancel button inside drag and dropbox
    * @author somnath.k
    */
    static async clickonUploadDocumentInsideCancelBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CANCEL_BTTN_IN_BROWSE_DOCUMENT_BOX));
    }
    /**
    * To click on no button in cancel upload popup
    * @author somnath.k
    */
    static async clickonNoBttninCancelUploadPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CANCEL_BTTN_SKIP_MAIL_POPUP));
    }
    /**
    * To click on yes button in cancel upload popup
    * @author somnath.k
    */
    static async clickonYesBttninCancelUploadPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.YES_BTTN_IN_POPUP));
    }
    /**
    * To click on three dots icon inside contract card
    * @author somnath.k
    */
    static async clickonReplaceFormThreeDotsIcon() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.REPLACE_FORM_THREE_DOTS_ICON));
    }
    /**
    * To click on cross icon in replace contract form
    * @author somnath.k
    */
    static async clickonreplaceContractFormCorssIcon() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.REPLACE_CONTRACT_FORM_CROSS_ICON));
    }
    /**
    * To click on view document link inside contract card
    * @author somnath.k
    */
    static async clickonContractCardViewDocumentLink() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CONTRACT_CARD_VIEW_DOCUMENT_LINK));
    }
    /**
    * To click on three dots icon inside supporting document card
    * @author somnath.k
    */
    static async clickonSuppDocCardThreeDotsIcon() {
        await z_1.z.wait(2);
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.SUPPORTING_DOC_CARD_THREE_DOTS_ICON));
    }
    /**
    * To click on replace button inside contract card
    * @author somnath.k
    */
    static async clickonContractCardReplaceBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CONTRACT_CARD_REPLACE_BTTN));
    }
    /**
    * To click on cross icon in upload document section
    * @author somnath.k
    */
    static async clickonUploadDocumentCrossIcon() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.UPLOAD_DOCUMENT_CROSS_ICON));
    }
    /**
    * To click on continue button in discard popup
    * @author somnath.k
    */
    static async clickonDiscardContinueBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DISCARD_CHANGES_CONTINUE_BTTN));
    }
    /**
    * To click on save button in upload document section
    * @author somnath.k
    */
    static async clickonUploadDocumentSaveBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.UPLOAD_DOCUMENT_SAVE_BTTN));
    }
    /*************************************** Services ***********************************************/
    /*
    * To fill the details for supporting document
    *
    *
    */
    static async fillDocumentDetails(filename, count, withoutAttachmentFlag) {
        let individualSupportingDocumentDetails;
        let currentDate = await CommonComponent_1.CommonComponent.getCurrentDate();
        logger_1.logger.info(currentDate);
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_NAME), "Document_" + await CommonComponent_1.CommonComponent.getRandomNumber(20));
        let supportingDocumentName = await CommonComponent_1.CommonComponent.getUITextUsingJavascript(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_NAME));
        logger_1.logger.info("supporting doc name " + supportingDocumentName);
        let uploadedBy;
        uploadedBy = await AuroraLmt_1.AuroraLmt.getData("UPLOADED_BY");
        //await CommonComponent.selectValueFromDropdownRandom(await AuroraLmt.getElement(documentElements.DOCUMENT_TYPE_DROPDOWN),await AuroraLmt.getElement(documentElements.DOCUMENT_TYPE_DROPDOWN_LIST),await AuroraLmt.getElement(documentElements.DYN_PARTICUAL_DOCUMENT_DROPDOWN_VALUE));
        await CommonComponent_1.CommonComponent.searchAndSelectRandomValueFromDropdown(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_TYPE_DROPDOWN), await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_TYPE_DROPDOWN_LIST), await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.FIRST_LIST_VALUE), await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DROPDOWN_SEARCH_BOX));
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_DESCRIPTION), await CommonComponent_1.CommonComponent.randomString(50));
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_UPLOADED_ON), currentDate);
        let supportingDocumentUploadedOn = await CommonComponent_1.CommonComponent.getUITextUsingJavascript(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_UPLOADED_ON));
        logger_1.logger.info("uploaded on : " + supportingDocumentUploadedOn);
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_UPLOADED_BY), uploadedBy);
        let supportingDocOwnerName = await CommonComponent_1.CommonComponent.getUITextUsingJavascript(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_UPLOADED_BY));
        let supportingDocumentFilename;
        if (!withoutAttachmentFlag) {
            await CommonComponent_1.CommonComponent.uploadDocument(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_UPLOAD_BUTTON), "SINGLE", filename);
            supportingDocumentFilename = await CommonComponent_1.CommonComponent.getUITextUsingJavascript(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_UPLOADED_FIELD));
            logger_1.logger.info("Uploaded filename :" + supportingDocumentFilename);
        }
        else {
            supportingDocumentFilename = "No Document Uploaded";
        }
        individualSupportingDocumentDetails = [supportingDocumentName, supportingDocumentUploadedOn, supportingDocumentFilename, supportingDocOwnerName];
        GlobalVariables_1.GlobalVariables.supportingDocumentDetails.set("Supporting Document_" + count, individualSupportingDocumentDetails);
        await this.clickOnSave();
        await this.clickOnOkInSavePopup();
    }
    /*
    * To upload multiple supporting document
    *
    *
    */
    static async uploadMultipleSupportingDocuments() {
        let filepath = await AuroraLmt_1.AuroraLmt.getData("ALL_FORMAT_SUPPORTING_DOCUMENTS");
        let filepathList = filepath.split("|");
        for (let i = 0; i < filepathList.length; i++) {
            // for (let i = 0; i < 1; i++) {
            await documentActions.clickOnUploadButton();
            await documentActions.fillDocumentDetails(filepathList[i], 1, false);
        }
        let supportingDocCountInClm = await CommonComponent_1.CommonComponent.grabNumberElements(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_COUNT_FROM_CLM));
        GlobalVariables_1.GlobalVariables.supportingDocumentCountInClm = supportingDocCountInClm;
        console.log("Supporting doc count in clm:" + supportingDocCountInClm);
    }
    /*
    * To check the contract document subheader and supporting document subhearder
    *
    *
    */
    static async checkContractAndSupportingDocumentSubheader() {
        let flag = false;
        let contractSubheader;
        let documentSubheader;
        contractSubheader = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CONTRACT_SUBHEADER);
        documentSubheader = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.SUPPORTING_DOCUMENT_SUBHEADER);
        if (((await CommonComponent_1.CommonComponent.isEnabledByXpath(documentSubheader)) == true) && (await CommonComponent_1.CommonComponent.isEnabledByXpath(documentSubheader)) == true) {
            flag = true;
        }
        // if (contractSubheader.includes("Contract"))
        //     return flag;
        return flag;
    }
    /*
    * To get the contract details from aurora basic details page
    *
    *
    */
    static async getContractDetails() {
        let auroContractDetails;
        //let contractTitle: String;
        //let digitalDocument: String;
        //let contractOwner: String;
        let xpathContractTitle = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CONTRACT_NAME);
        let xpathContractOwner = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CONTRACT_OWNER);
        let xpathDigitalDocument = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DIGITAL_DOCUMENT);
        //contractTitle = await z.grabTextFrom(await AuroraLmt.getElement(documentElements.CONTRACT_NAME));
        let contractTitle = await CommonComponent_1.CommonComponent.getUITextUsingJavascript(xpathContractTitle);
        logger_1.logger.info("Display text for contractTitle" + contractTitle);
        //digitalDocument = await z.grabTextFrom(await AuroraLmt.getElement(documentElements.DIGITAL_DOCUMENT));
        let digitalDocument = await CommonComponent_1.CommonComponent.getUITextUsingJavascript(xpathDigitalDocument);
        logger_1.logger.info("digital" + digitalDocument);
        //contractOwner = await z.grabTextFrom(await AuroraLmt.getElement(documentElements.CONTRACT_OWNER));
        //let contractOwner = await CommonComponent.getUITextUsingJavascript(xpathContractOwner);
        //logger.info("contract owner"+contractOwner);
        //let createDate = await CommonComponent.getCurrentDate();
        GlobalVariables_1.GlobalVariables.contractDetails = [contractTitle, digitalDocument];
    }
    /*
    * To check the contract title below contract subheader
    *
    *
    */
    static async contractTitleValidation() {
        let contractTitleCard;
        let contractTitle;
        contractTitle = await GlobalVariables_1.GlobalVariables.contractDetails[0];
        let flag = false;
        contractTitleCard = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CONTRACT_TITLE_NAME_ON_CARD));
        if (contractTitleCard == contractTitle) {
            flag = true;
        }
        return flag;
    }
    /*
    * To check the uploaded filename below contract subheader
    *
    *
    */
    static async uploadedFilenameValidation() {
        let uploadedFileNameCard;
        let uploadedFileNameExact;
        let contractTitle;
        let flag = false;
        uploadedFileNameCard = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.UPLOADED_FILENAME_ON_CARD));
        let digitalDocument = GlobalVariables_1.GlobalVariables.contractDetails[1];
        contractTitle = GlobalVariables_1.GlobalVariables.contractDetails[0];
        let fileName = digitalDocument.split(".");
        uploadedFileNameExact = contractTitle + "." + fileName[1];
        logger_1.logger.info("uploaderFileNameExact  " + uploadedFileNameExact);
        logger_1.logger.info("uploaderfilenamecard " + uploadedFileNameCard);
        if (uploadedFileNameCard == uploadedFileNameExact) {
            flag = true;
        }
        return flag;
    }
    /*
    * To check the contract owner name below contract subheader
    *
    *
    */
    static async contractOwnerNameValidation() {
        let flag = false;
        let contractOwnerNameCard = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CONTRACT_OWNER));
        logger_1.logger.info(contractOwnerNameCard);
        //let contractOwnerName = GlobalVariables.contractDetails[2];
        let contractOwnerName = await AuroraLmt_1.AuroraLmt.getData("CONTRACT_OWNER");
        logger_1.logger.info("Contract owner name :" + contractOwnerName);
        logger_1.logger.info("Contract owner name on card :" + contractOwnerNameCard);
        if (contractOwnerNameCard == contractOwnerName) {
            flag = true;
        }
        return flag;
    }
    /*
    * To check the contract creation date below contract subheader
    *
    *
    */
    static async contractCreationDateValidation() {
        let flag = false;
        let currentDate = await CommonComponent_1.CommonComponent.getCurrentDate();
        logger_1.logger.info("Current date: " + currentDate);
        let contractCreationDateXpath = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CONTRACT_CREATION_DATE);
        if (contractCreationDateXpath.includes("TempValue")) {
            logger_1.logger.info(contractCreationDateXpath);
            contractCreationDateXpath = contractCreationDateXpath.replace("TempValue", "" + currentDate);
            logger_1.logger.info("Contract creation date xpath: " + contractCreationDateXpath);
        }
        else {
            logger_1.logger.info("status xpath does not contains TempValue keyword");
        }
        let contractCreationDateCard = await z_1.z.grabTextFrom(contractCreationDateXpath);
        //let contractCreationDate = await CommonComponent.getCurrentDate();
        //let contractCreationDate = await AuroraLmt.getData("CONTRACT_CREATION_DATE");
        //logger.info(contractCreationDate);
        logger_1.logger.info(contractCreationDateCard);
        if (contractCreationDateCard == currentDate) {
            flag = true;
        }
        return flag;
    }
    /*
    * To check the count of the uploaded supporting document
    *
    *
    */
    static async countOfSupportingDocument() {
        let flag = false;
        let supportingDocNo = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.SUPPORTING_DOCUMENT_COUNT));
        let supportingDocNumber = supportingDocNo.split("(")[1].split(")")[0];
        let supportingDocNumberInClm = await GlobalVariables_1.GlobalVariables.supportingDocumentCountInClm;
        console.log("Supporting doc count in clm" + supportingDocNumberInClm);
        console.log("supporting doc no:" + supportingDocNumber);
        if (supportingDocNumber == supportingDocNumberInClm) {
            flag = true;
        }
        return flag;
    }
    /*
    * To get the supporting document details
    *
    *
    */
    static async getSupportingDocumentDetails(supportingDocDetails) {
        for (let supportingDocumentValue of supportingDocDetails.values()) {
            if (supportingDocumentValue != null || supportingDocumentValue != "" || supportingDocumentValue != undefined) {
                break;
            }
            else {
                continue;
            }
        }
    }
    /*
    * To validate the supporting document name on supporting document card
    *
    *
    */
    static async toValidateSupportingDocumentName(supportingDocNameInClm) {
        let flag = false;
        logger_1.logger.info(supportingDocNameInClm);
        let supportingDocNameXpath = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DYN_SUPPORTING_DOCUMENT_NAME_ON_CARD);
        supportingDocNameXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(supportingDocNameInClm, supportingDocNameXpath);
        await z_1.z.scrollIntoView(supportingDocNameXpath);
        if (await CommonComponent_1.CommonComponent.isEnabledByXpath(supportingDocNameXpath)) {
            flag = true;
        }
        return flag;
    }
    /*
    * To validate the supporting document name in document preview dropdown
    *
    *
    */
    static async toValidateSupportingDocumentNameInPreviewDropdown(supportingDocNameInClm) {
        let flag = false;
        await documentActions.clickOnPreviewDropdown();
        let supportingDocNameInPrevDropdownXpath = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DNY_PREVIEW_SUPPORTING_DOCUMENT_DROPDOWN);
        supportingDocNameInPrevDropdownXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(supportingDocNameInClm, supportingDocNameInPrevDropdownXpath);
        logger_1.logger.info(supportingDocNameInPrevDropdownXpath);
        await z_1.z.scrollIntoView(supportingDocNameInPrevDropdownXpath);
        if (await CommonComponent_1.CommonComponent.isEnabledByXpath(supportingDocNameInPrevDropdownXpath)) {
            flag = true;
        }
        return flag;
    }
    /*
    * To validate the uploaded supporting document name supporting document card
    *
    *
    */
    static async toValidateUploadedSupportingDocNameOnCard(uploadedSupportingDocNameInClm) {
        let flag = false;
        let uploadedSupportingDocNameXpath = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DYN_SUPPORTING_DOCUMENT_FILENAME_ON_CARD);
        uploadedSupportingDocNameXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(uploadedSupportingDocNameInClm, uploadedSupportingDocNameXpath);
        await z_1.z.scrollIntoView(uploadedSupportingDocNameXpath);
        if (await CommonComponent_1.CommonComponent.isEnabledByXpath(uploadedSupportingDocNameXpath)) {
            flag = true;
        }
        return flag;
    }
    /*
    * To validate contract owner name on supporting document card
    *
    *
    */
    static async toValidateContractOwnerNameOnCard(contractOwner) {
        let flag = false;
        let noOfCards = await z_1.z.grabNumberOfVisibleElements(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.NUMBER_OF_SUPP_DOC_CARDS));
        for (let i = 1; i <= noOfCards; i++) {
            let contractOwnerNameXpath = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.MULTI_DNY_OWNERNAME_ON_CARD);
            contractOwnerNameXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(contractOwner, contractOwnerNameXpath);
            if (contractOwnerNameXpath.includes("TempCount")) {
                contractOwnerNameXpath = contractOwnerNameXpath.replace("TempCount", "" + i);
                if (await CommonComponent_1.CommonComponent.isEnabledByXpath(contractOwnerNameXpath)) {
                    flag = true;
                }
                else {
                    flag = false;
                    break;
                }
            }
            else {
                logger_1.logger.info("Xpath does not contains TempCount keyword");
            }
        }
        return flag;
    }
    /*
    * To validate Uploaded on date in supporting document card
    *
    *
    */
    // static async toValidateUploadedOnDate(uploadedOn) {
    //     let flag = false;
    //     let noOfCards: number = await z.grabNumberOfVisibleElements(await AuroraLmt.getElement(documentElements.NUMBER_OF_SUPP_DOC_CARDS));
    //     logger.info(noOfCards);
    //     for (let i = 1; i <= noOfCards; i++) {
    //         let uploadedOnXpath = await AuroraLmt.getElement(documentElements.MULTI_DNY_OWNERNAME_ON_CARD);
    //         uploadedOnXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(uploadedOn, uploadedOnXpath);
    //         if((uploadedOnXpath.includes("TempCount"))&&(uploadedOnXpath.includes("TempValue"))) {
    //             uploadedOnXpath = uploadedOnXpath.replace("TempCount", "" + i);
    //             uploadedOnXpath = uploadedOnXpath.replace("TempValue",)
    //             if (await CommonComponent.isEnabledByXpath(uploadedOnXpath)) {
    //                 flag = true;
    //             }
    //             else {
    //                 flag = false;
    //                 break;
    //             }
    //         }
    //         else {
    //             logger.info("Xpath does not contains TempCount keyword");
    //         }
    //     }
    //     return flag;
    // }
    /*
    * To check download all option
    *
    *
    */
    static async toCheckDownloadAll() {
        let flag = false;
        await documentActions.clickOnActionsIcon();
        await documentActions.clickOnDownlaodAll();
        await z_1.z.wait(2);
        await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.SUPPORTING_DOC_DOWNLOADALL_OPTION));
    }
    /*
    * To check individual download option
    *
    *
    */
    static async toCheckIndividualSupportingDocDownload() {
        let noOfCards = await CommonComponent_1.CommonComponent.grabNumberElements(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.NUMBER_OF_SUPP_DOC_CARDS));
        let individualDownloadXpath = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DYN_INDIVIDUAL_SUPPORTING_DOC_ACTIONS_ICON);
        let downloadOption = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.INDIVIDUAL_SUPPORTING_DOC_DOWNLOAD_OPTION);
        if (individualDownloadXpath.includes("TempCount")) {
            let i = await CommonComponent_1.CommonComponent.getRandomNumber(noOfCards);
            if (i == 0) {
                i = i + 1;
            }
            individualDownloadXpath = individualDownloadXpath.replace("TempCount", "" + i);
            await z_1.z.click(individualDownloadXpath);
            await z_1.z.click(downloadOption);
        }
        else {
            logger_1.logger.info("Xpath does not contain TempCount keyword");
        }
    }
    /*
    * To check individual delete option is clickable
    *
    *
    */
    static async toCheckIndividualSupportingDocDelete() {
        let noOfCards = await z_1.z.grabNumberOfVisibleElements(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.NUMBER_OF_SUPP_DOC_CARDS));
        let individualDeleteXpath = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DYN_INDIVIDUAL_SUPPORTING_DOC_ACTIONS_ICON);
        let deleteOption = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.INDIVIDUAL_SUPPORTING_DOC_DELETE_OPTION);
        if (individualDeleteXpath.includes("TempCount")) {
            let i = await CommonComponent_1.CommonComponent.getRandomNumber(noOfCards);
            if (i = 0) {
                i = i + 1;
            }
            individualDeleteXpath = individualDeleteXpath.replace("TempCount", "" + i);
            await z_1.z.click(await individualDeleteXpath);
            await z_1.z.click(await deleteOption);
        }
        return individualDeleteXpath;
    }
    /*
    * To check individual delete option is clickable
    *
    *
    */
    static async verifyDownloadIconRandomSuppCard() {
        let flag = false;
        let noOfCards = await z_1.z.grabNumberOfVisibleElements(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.NUMBER_OF_SUPP_DOC_CARDS));
        let individualDownloadXpath = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DYN_INDIVIDUAL_SUPPORTING_DOC_ACTIONS_ICON);
        let downloadOption = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.INDIVIDUAL_SUPPORTING_DOC_DOWNLOAD_OPTION);
        if (individualDownloadXpath.includes("TempCount")) {
            let i = await CommonComponent_1.CommonComponent.getRandomNumber(noOfCards);
            if (i == 0) {
                i = i + 1;
            }
            individualDownloadXpath = individualDownloadXpath.replace("TempCount", "" + i);
            await z_1.z.click(individualDownloadXpath);
            await z_1.z.wait(2);
            if ((await CommonComponent_1.CommonComponent.getHtmlElementData(downloadOption) != null) || (await CommonComponent_1.CommonComponent.getHtmlElementData(downloadOption) != undefined)) {
                flag = true;
            }
        }
        else {
            logger_1.logger.info("Xpath does not contain TempCount keyword");
        }
        return flag;
    }
    /*
    * To check remove alert popup
    *
    *
    */
    static async toCheckSupportingDocIsDeleted() {
        let flag = false;
        let deletedSupportingDoc = await documentActions.toCheckIndividualSupportingDocDelete();
        if (await CommonComponent_1.CommonComponent.isEnabledByXpath(deletedSupportingDoc)) {
            flag = false;
        }
        return flag;
    }
    /*
    * To check delete all option
    *
    *
    */
    static async toClickOnDeleteAll() {
        documentActions.clickOnActionsIcon();
        documentActions.clickOnDeleteAll();
    }
    /*
    * To check the count of the uploaded supporting document is zero
    *
    *
    */
    static async countOfSupportingDocumentIsZero() {
        let supportingDocNo = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.SUPPORTING_DOCUMENT_COUNT));
        let flag = false;
        if (supportingDocNo == 0) {
            flag = true;
        }
        return flag;
    }
    /*
    * To check the document is shown in the document preview panel
    *
    *
    */
    static async toCheckDocumentInDocPreview() {
        let docuemntHeaderXpath = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOC_PANEL_HEADER);
        if (await CommonComponent_1.CommonComponent.isEnabledByXpath(docuemntHeaderXpath)) {
        }
    }
    /*
    * To check the contract title and version in document preview header
    *
    *
    */
    static async toCheckTitleNVersion() {
        let flag = false;
        let contractTitleInHeader = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CONTRACT_TITLE_IN_PREVIEW_HEADER));
        let versionInHeader = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.VERSION_IN_PREVIEW_HEADER));
        contractTitleInHeader = await contractTitleInHeader.split(":");
        if ((contractTitleInHeader[0] == "Contract") && (versionInHeader.includes("Version"))) {
            flag = true;
        }
        return flag;
    }
    /*
    * To check the supporting document seen in the panel
    *
    *
    */
    static async toCheckSuppDocInThePanel() {
        let flag = false;
        let youAreNotViewingCurrentVersionMessage = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.YOU_ARE_NOT_VIEWING_CURRENT_VERSION_MESSAGE);
        /*documentActions.toCheckSuppDocInThePanel();*/
        if (await CommonComponent_1.CommonComponent.isEnabledByXpath(youAreNotViewingCurrentVersionMessage)) {
            flag = true;
        }
        return flag;
    }
    /*
    * To select supporting doc in the dropdown and check the supporting document seen in the panel
    *
    *
    */
    static async toClickAndSelectSuppDocFromPreviewDropdown() {
        let flag = false;
        let youAreNotViewingCurrentVersionMessage = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.YOU_ARE_NOT_VIEWING_CURRENT_VERSION_MESSAGE);
        CommonComponent_1.CommonComponent.selectValueFromDropDownByXpath(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_PREVIEW_DROPDOWN), await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_PREVIEW_DROPDOWN_OPTION));
        if (await CommonComponent_1.CommonComponent.isEnabledByXpath(youAreNotViewingCurrentVersionMessage)) {
            flag = true;
        }
        return flag;
    }
    /*
    * To select contract doc from randomly and check respective supporting doc message is displayed or not
    *
    *
    */
    static async toCheckRibbonMessage() {
        let flag = true;
        let youAreNotViewingCurrentVersionMessage = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.YOU_ARE_NOT_VIEWING_CURRENT_VERSION_MESSAGE);
        if (await CommonComponent_1.CommonComponent.isEnabledByXpath(youAreNotViewingCurrentVersionMessage)) {
            flag = false;
        }
        return flag;
    }
    /**
    * To store document preview details
    * @author somnath.k
    */
    static async storeLatestDocumentpreviewDetails() {
        // if (GlobalVariables.temporayArray.length > 0) {
        // }
        GlobalVariables_1.GlobalVariables.temporayArray = [];
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DOCUMENT_PANEL_DROPDOWN));
        let contractName = await z_1.z.grabAttributeFrom(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DOCUMENT_DROPDOWN_FIRST_OPTION), "title");
        // contractName = contractName.split(":")[1];
        logger_1.logger.info("value of contract title while storing", contractName[0]);
        GlobalVariables_1.GlobalVariables.temporayArray.push(contractName[0]);
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DOCUMENT_PANEL_VERSION_DROPDOWN));
        let versionNo = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_PANEL_FIRST_VERSION));
        logger_1.logger.info("value of version while storing", versionNo);
        GlobalVariables_1.GlobalVariables.temporayArray.push(versionNo);
    }
    /**
    * To verify uploaded file name in browse document box
    * @param {string} uploadedFileName
    * @author somnath.k
    */
    static async verifyUploadedFilenameinBrowseDocumentBox(uploadedFileName) {
        let uploadedFileNameXpath = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DNY_UPLOADED_FILE_NAME_IN_REPLACE_BOX);
        uploadedFileNameXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(uploadedFileName, uploadedFileNameXpath);
        await z_1.z.seeElement(uploadedFileNameXpath);
    }
    /**
    * To verify replaced contract details inside contract card
    * @param {string} documentName
    * @param {string} uploadedDate
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyReplacedContractinContractCard(documentName, uploadedDate) {
        let flag1 = await this.verifyDocumentNameinContractCard(documentName);
        let flag2 = await this.verifyUploadedDateinContractCard(uploadedDate);
        return flag1 == flag2;
    }
    /**
    * To verify uploaded date inside contract card
    * @param {string} uploadedDate
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyUploadedDateinContractCard(uploadedDate) {
        let flag = false;
        let uiUploadedDate = await z_1.z.grabAttributeFrom(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CONTRACT_CARD_UPLOADED_DATE), "title");
        logger_1.logger.info("UI date value", uiUploadedDate[0]);
        // logger.info("code date value",uploadedDate);
        // // let uiSplittedDate = await CommonComponent.getListFromString("/", uiUploadedDate[0]);
        // // let uiValue:string=uiUploadedDate[0].reverse();
        // let uiSplittedDate = uiUploadedDate[0].replace("/"," ");
        // logger.info("splitted value before loop",uiUploadedDate[0].replace("/"," "));
        // for (let i = 0; i < uiSplittedDate.length; i++) {
        //     logger.info("splitted value",uiUploadedDate[i]);
        //     if (uploadedDate.includes(uiUploadedDate[i])) {
        //         flag = true;
        //     } else {
        //         flag = false;
        //         break;
        //     }
        // }
        flag = uiUploadedDate.includes(uploadedDate);
        logger_1.logger.info("value after flag", flag);
        return flag;
    }
    /**
    * To verify document name inside contract card
    * @param {string} documentName
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyDocumentNameinContractCard(documentName) {
        let uiDocumentName = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CONTRACT_CARD_DOCUMENT_NAME));
        logger_1.logger.info("UI value of contract card", uiDocumentName);
        return (uiDocumentName.trim() == documentName.trim());
    }
    /**
    * To generate and verify version no in document preview panel
    * @param {string} versionNumber
    * @return {boolean} flag
    * @author somnath.k
    */
    static async generateAndVerifyVersionNoFromExisting(versionNumber) {
        await z_1.z.wait(5);
        let versionNoList = await CommonComponent_1.CommonComponent.getListFromString(" ", versionNumber);
        await z_1.z.waitForVisible(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.VERSION_DROPDOWN_FIRST_OPTION));
        let UIDropdownValue = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_PANEL_FIRST_VERSION));
        let uiVersionNoList = await CommonComponent_1.CommonComponent.getListFromString(" ", UIDropdownValue);
        logger_1.logger.info("value of ui version", uiVersionNoList[2]);
        logger_1.logger.info("value of code version", versionNoList[2]);
        return Number(uiVersionNoList[2]) > Number(versionNoList[2]);
    }
    // ************************[AURORA-988]********************************
    static async checkDeleteOptionForSuppDoc() {
        await z_1.z.wait(3);
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.SUPPORTING_DOC_DELETE_OPTION));
    }
    static async clickOnDeleteOptionForSupDoc() {
        await z_1.z.wait(3);
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.SUPPORTING_DOC_DELETE_OPTION));
    }
    static async checkNumberOfDocumentAttatched() {
        await z_1.z.wait(3);
        GlobalVariables_1.GlobalVariables.docCount = parseInt(await z_1.z.grabNumberOfVisibleElements(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_COUNT)));
        console.log("Number of Documents attached are:" + GlobalVariables_1.GlobalVariables.docCount);
    }
    static async clickOnDeleteButtonInsidePopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DELETE_BUTTON_INSIDE_POPUP));
    }
    static async checkDocumentIsRemoved() {
        let docCount = parseInt(await z_1.z.grabNumberOfVisibleElements(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_COUNT)));
        if (GlobalVariables_1.GlobalVariables.docCount < docCount) {
            console.log("Document removed successfully");
        }
        else {
            console.error("Failed to remove Document");
        }
    }
    static async getAllSupportingDocTitles() {
        let titlesCountXpath = parseInt(await z_1.z.grabNumberOfVisibleElements(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.SUPPORTING_DOC_TITLES)));
        let i;
        for (i = 2; i <= titlesCountXpath; i++) {
            let titlexpath = await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DYN_SUPPORTING_DOC_TITLES);
            if (titlexpath.includes("TEMP_VALUE")) {
                titlexpath.replace("TEMP_VALUE", i.toString());
                let title = await z_1.z.grabAttributeFrom(titlexpath, "title");
                GlobalVariables_1.GlobalVariables.suppDocTitles.push(title);
            }
            console.log("Titles are " + GlobalVariables_1.GlobalVariables.suppDocTitles);
        }
    }
    // *********************************[AURORA-990]*****************************
    static async clickonThreeDotsIconNearSuppDocHeader() {
        await z_1.z.wait(2);
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.SUPPORTING_DOC_HEADER_THREE_DOTS_ICON));
    }
    // ---------------------[US Aurora-986]----------------------------
    static async checkAddIconForAddSupportingDocs() {
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.ADD_SUPPORTING_DOC_ICON));
    }
    static async clickOnAddIconForAddSupportingDocs() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.ADD_SUPPORTING_DOC_ICON));
    }
    static async checkAddSupportingDocsPopupHeader() {
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.ADD_SUPPORTING_DOC_POPUP_HEADER));
    }
    static async checkOnBrowseForUploadingSupportingDocs() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.BROWSE_LINK_SUPPORTING_DOC));
    }
    static async checkUploadProgressonPopup() {
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.SUPPORTING_DOC_UPLOAD_PROGRESS));
    }
    static async checkDocSizeInfo() {
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOC_SIZE_INFORMATION));
    }
    static async checkCancelOptionforUploadInProgress() {
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CANCEL_OPTION_ON_SUPPORTING_DOC_POPUP));
    }
    static async clickCancelOptionWhileUploadInProgress() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CANCEL_OPTION_ON_SUPPORTING_DOC_POPUP));
    }
    static async checkConfirmationPopupForCancel() {
        await z_1.z.wait(2);
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CANCEL_CONFIRMATION_POPUP_ON_UPLOAD));
    }
    static async checkDeleteOptionOnAddSupportingDocPopup() {
        await z_1.z.wait(2);
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DELETE_OPTION_ON_SUPPORTING_DOC_POPUP));
    }
    static async checkReplaceOptionOnAddSupportingDocPopup() {
        await z_1.z.wait(3);
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.REPLACE_OPTION_ON_SUPPORTING_DOC_POPUP));
    }
    static async clickOnReplaceBttnInPopup() {
        await z_1.z.wait(5);
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.REPLACE_OPTION_ON_SUPPORTING_DOC_POPUP));
    }
    static async clickOnDeleteBttnInPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DELETE_OPTION_ON_SUPPORTING_DOC_POPUP));
    }
    static async checkReplaceConfrmationPopupForAddSupportingDoc() {
        await z_1.z.wait(2);
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.REPLACE_CONFIRMATION_POPUP_ADD_SUPPORTING_DOC));
    }
    static async checkDeleteConfrmationPopupForAddSupportingDoc() {
        await z_1.z.wait(2);
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DELETE_CONFIRMATION_POPUP_ADD_SUPPORTING_DOC));
    }
    static async checkAddSupportingDocUploadedPreview() {
        await z_1.z.wait(2);
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.ADD_SUPPORTING_DOC_PREVIEW));
    }
    static async checkAstrickSymbolForDocTitle() {
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.ASTRICK_SYMBOL_FOR_DOC_TITLE));
    }
    static async checkAstrickSymbolForDocType() {
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.ASTRICK_SYMBOL_FOR_DOC_TYPE));
    }
    static async clickonSaveContractButton() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.SAVE_SUPPORTING_DOC_BTN));
    }
    static async verifyErrorMsgForDocTitleField() {
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.ERROR_MSG_FOR_DOC_TITLE));
    }
    static async verifyErrorMsgForDescriptionField() {
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.ERROR_MSG_FOR_DOC_DESCRIPTION));
    }
    static async verifyErrorMsgForDocTypeField() {
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.ERROR_MSG_FOR_DOC_TYPE));
    }
    static async checkCancelConfrmationPopupForAddSupportingDoc() {
        await z_1.z.wait(2);
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CANCEL_CONFIRMATION_POPUP_ADD_SUPPORTING_DOC));
    }
    static async enterDocumentTitle(value) {
        await z_1.z.wait(2);
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_TITLE), value);
    }
    static async enterDescriptioninAddSupportingDocPopup(value) {
        await z_1.z.wait(2);
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.ADD_SUPPORTING_DOC_DESCRICPTION), value);
    }
    static async selectValueFromDocType(value) {
        await CommonComponent_1.CommonComponent.selectValueFromGridDropDown(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_TYPE), value);
    }
    static async checkCharacterLimitForDocTitle(value) {
        let ExpectedCharLength = await z_1.z.grabAttributeFrom(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DOCUMENT_TITLE), "DummyAttribute");
        await z_1.z.assertEqual(ExpectedCharLength, value);
    }
    static async checkCharacterLimitForDescription(value) {
        let ExpectedCharLength = await z_1.z.grabAttributeFrom(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.ADD_SUPPORTING_DOC_DESCRICPTION), "DummyAttribute");
        await z_1.z.assertEqual(ExpectedCharLength, value);
    }
    static async clickOnOKButtonForCancelPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.ACCEPT_CANCEL_FROM_POPUP));
    }
    static async clickOnOKButtonForReplacePopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.ACCEPT_REPLACE_FROM_POPUP));
    }
    static async checkAddSupportingDocPopup() {
        await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.ADD_SUPPORTING_DOC_POPUP_HEADER));
    }
    static async checkSupportingDocDisplayedLHSSide() {
        await z_1.z.wait(2);
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.SUPPORTING_DOCUMENT_DISPLAY_ON_LHS));
    }
    static async checkSupportingDocDisplayedRHSSide() {
        await z_1.z.wait(2);
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.SUPPORTING_DOCUMENT_DISPLAY_ON_RHS));
    }
    static async checkPreviewisNotDisplayed() {
        await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.ADD_SUPPORTING_DOC_PREVIEW));
    }
    static async clickOnSupportDocFromLHS() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.SUPPORTING_DOCUMENT_DISPLAY_ON_LHS));
    }
    static async checkFileNamedDisplayedWithElipses() {
        await z_1.z.wait(2);
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.FILE_NAME_WITH_ELLIPSES));
    }
    static async checkFullNameOnMouseHover() {
        await z_1.z.wait(2);
        z_1.z.moveCursorTo(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.FILE_NAME_WITH_ELLIPSES));
        z_1.z.saveScreenshot("FileName.png", true);
    }
    static async clickOnCancelFromAddSupportingDocPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CANCEL_OPTION_SUPP_DOC_POPUP));
    }
    // ************************[Aurora-987]******************************
    static async clickOnEditOptionForSupDoc() {
        await z_1.z.wait(3);
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.SUPPORTING_DOC_EDIT_OPTION));
    }
    static async checkEditSupportingDocsPopupHeader() {
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.EDIT_SUPPORTING_DOC_POPUP_HEADER));
    }
    static async checkEditSupportingDocumentName() {
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.EDIT_SUPPORTING_DOC_NAME));
    }
    static async checkEditSupportingDocumentTitle() {
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.EDIT_SUPPORTING_DOC_TITLE));
    }
    static async checkEditSupportingDocumentDescription() {
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.EDIT_SUPPORTING_DOC_DESCRIPTION));
    }
    static async checkEditSupportingDocumentUploadByField() {
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.EDIT_SUPPORTING_DOC_UPLOAD_BY_FIELD));
    }
    static async checkEditSupportingDocumentUploadOnField() {
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.EDIT_SUPPORTING_DOC_UPLOAD_ON_FIELD));
    }
    static async checkEditSupportingDocumentTypeField() {
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.EDIT_SUPPORTING_DOC_TYPE));
    }
    static async checkCancelOptionOnSuppDocPopup() {
        await z_1.z.wait(2);
        z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CANCEL_OPTION_SUPP_DOC_POPUP));
    }
    static async clickOnCancelOptionEditSuppDocPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.CANCEL_OPTION_ON_SUPPORTING_DOC_POPUP));
    }
}
exports.documentActions = documentActions;
