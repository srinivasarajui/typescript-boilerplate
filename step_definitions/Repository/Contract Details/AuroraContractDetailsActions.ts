//Rule: classname should be ts file name with first letter as caps

/**
 * The class is to perform aurora contract details action
 *
 * @author somnath.k
 *
 *
*/

import { AuroraLmt } from "../../../common/Data/AuroraLmt";
import { CommonComponent } from "./../../commonKeywords/CommonComponent";
import { ContractDetailsActions } from "../../ContractDetails/contractDetailsActions";
import { GlobalVariables } from "../../../common/dataCreation/GlobalVariables";
import { auroraContractDetailsElements } from "./AuroraContractDetailsElements";
import { basicInformarationElements } from "../UploadContract/BasicInformationElements";
import { contractDetailsElements } from "./../../ContractDetails/contractDetailsElements";
import { logger } from "../../../common/Logger/logger";
import { z } from "actionbot-wrapper/z";
const { I } = inject();


export class AuroraContractDetailsActions {


    /********************************************************Sub Services Starts**********************************************************/

    /**
    * To click on save as draft button
    * @author somnath.k
    */
    static async clickonSaveasDraftBttn() {
        // GlobalVariables.contractNumber = "";
        // GlobalVariables.contractNumber = await AuroraContractDetailsActions.verifyNewContractNumberGenerated("CLM");
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.SAVE_AS_DRAFT_BTTN));
    }

    /**
    * To click on category dropdown box
    * @author somnath.k
    */
    static async clickonCategoryDropdownBox() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.CONTRACT_CATEGORY_DROPDOWN));
    }

    /**
    * To click on contract category clear icon
    * @author somnath.k
    */
    static async clickonContractCategoryClearIcon() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.CLEAR_CONTRACT_CATEGORY_VALUE));
    }

    /**
    * To get contract category value from dropdown
    * @return {string} contractcategoryValue
    * @author somnath.k
    */
    static async getContractCategoryDropdownVal() {
        return await z.grabTextFrom(await AuroraLmt.getElement(auroraContractDetailsElements.CONTRACT_CATEGORY_DROPDOWN));
    }

    /**
    * To get mandatory field error message count
    * @return {number} errorMessageCount
    * @author somnath.k
    */
    static async getMandatoryMessageCountForAllFields() {
        let allFieldsMandatoryErrorMsgXpathCunt = await CommonComponent.grabNumberElements(await AuroraLmt.getElement(auroraContractDetailsElements.ALL_FIELDS_MANDATORY_ERROR_MSG));
        return allFieldsMandatoryErrorMsgXpathCunt;
    }

    /**
    * To select particular dropdown from aurora contract detais page
    * @param {string} dropdownXpath
    * @return {number} errorMessageCount
    * @author somnath.k
    */
    static async selectParticularDropdownVal(dropdownXpath: string) {
        await z.scrollIntoView(dropdownXpath);
        let fieldListVal = await AuroraLmt.getElement(auroraContractDetailsElements.COMMON_DROPDOWN_LIST);
        let dropdownSearchBox = await AuroraLmt.getElement(auroraContractDetailsElements.COMMON_DROPDOWN_SEARCH_BOX);
        await CommonComponent.searchRandomValueAndSelectinDropdownByClick(dropdownXpath, fieldListVal, dropdownSearchBox);
    }

    /**
    * To fill contract total value field
    * @param {string} contractTotalValue
    * @author somnath.k
    */
    static async fillContractTotalvalue(contractTotalValue: string) {
        await z.fillField(await AuroraLmt.getElement(auroraContractDetailsElements.CONTRACT_TOTAL_VALUE_FIELD), contractTotalValue);
    }

    /**
    * To click on folder dropdown box
    * @author somnath.k
    */
    static async clickonFolderDropdowBox() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.FOLDER_DROPDOWN));
    }

    /**
    * To click on contract details menu
    * @author somnath.k
    */
    static async clickonContractDetailsMenu() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.CONTRACT_DETAILS_MENU));
    }

    /**
    * To click on save button
    * @author somnath.k
    */
    static async clickonSaveBttn() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.SAVE_BUTTON));
        GlobalVariables.contractNumber = "";
        GlobalVariables.contractNumber = await AuroraContractDetailsActions.verifyNewContractNumberGenerated("CLM");
    }

    /**
    * To fill revision comments
    * @param {string} comments
    * @author somnath.k
    */
    static async fillandSubmitRevisionComment(comments: string) {
        if ((await CommonComponent.getHtmlElementData(await AuroraLmt.getElement(auroraContractDetailsElements.REVISION_COMMENT_BOX)) != null) || ((await CommonComponent.getHtmlElementData(await AuroraLmt.getElement(auroraContractDetailsElements.REVISION_COMMENT_BOX)) != undefined))) {
            await z.fillField(await AuroraLmt.getElement(auroraContractDetailsElements.REVISION_COMMENT_BOX), comments);
            await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.REVISION_COMMENT_SUBMIT));
        }
    }

    /**
    * To fill comments box in publish contract popup
    * @param {string} comments
    * @author somnath.k
    */
    static async fillPublishPopupCommentBox(comments: string) {
        if ((await CommonComponent.getHtmlElementData(await AuroraLmt.getElement(auroraContractDetailsElements.COMMENT_MANDATORY_SYMBOL)) != null) || (await CommonComponent.getHtmlElementData(await AuroraLmt.getElement(auroraContractDetailsElements.COMMENT_MANDATORY_SYMBOL)) != undefined)) {
            await z.fillField(await AuroraLmt.getElement(auroraContractDetailsElements.COMMENT_BOX_PUBLISH_POPUP), comments);
        }
    }

    /**
    * To select no option for alerts in publish popup
    * @author somnath.k
    */
    static async selectNooptionforAlertinPublishPopup() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.PUBLISH_POPUP_ALTER_NO_OPTION));
    }

    /**
    * To select yes option for alerts in publish popup
    * @author somnath.k
    */
    static async selectYesoptionforAlertinPublishPopup() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.PUBLISH_POPUP_ALTER_YES_OPTION));
    }

    /**
    * To select no option for inform user in publish popup
    * @author somnath.k
    */
    static async selectNoOptionforInformUserinPublishPopup() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.PUBLISH_POPUP_INFORM_NO_OPTION));
    }

    /**
    * To select Yes option for inform user in publish popup
    * @author somnath.k
    */
    static async selectYesOptionforInformUserinPublishPopup() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.PUBLISH_POPUP_INFORM_YES_OPTION));
    }

    /**
    * To click on ok button from mandatory popup
    * @author somnath.k
    */
    static async clickonOkBttninFillallMandatoryPopup() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.FILL_ALL_MANDATORY_POPUP_OK_BTTN));
    }

    /**
    * To fill contract source
    * @author somnath.k
    */
    static async searchAurthorContractSource() {
        await z.fillField(await AuroraLmt.getElement(auroraContractDetailsElements.CONTRACT_SOURCE), await AuroraLmt.getData("CONTRACT_SOURCE"));
    }

    /**
    * To close switch menu popup
    * @author somnath.k
    */
    static async closeSwitchMenuPopup() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.CLOSE_CHANGES_POPUP_SWITCH_MENU));
    }

    /**
    * To click on ok bttn in switch menu popup
    * @author somnath.k
    */
    static async clickOkBttnSwitchMenuPopup() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.OK_BTTN_CHANGES_POPUP_SWITCH_MENU));
    }

    /**
    * To click on save as draft bttn
    * @author somnath.k
    */
    static async clickOnSaveAsDraftButton() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.SAVE_AS_DRAFT_BUTTON));
    }

    /**
    * To verify contract status in header
    * @param {string} contractStatusValue
    * @author somnath.k
    */
    static async verifyContractStatusinHeader(contractStatusValue: string) {
        let contractStatus = await AuroraLmt.getElement(auroraContractDetailsElements.DNY_REPOSITORY_DRAFT_STATUS_HEADER);
        contractStatus = await CommonComponent.retrieveParticularElementXpathBasedonString(contractStatusValue, contractStatus);
        await z.waitForVisible(contractStatus);
        await z.seeElement(contractStatus);
    }

    /**
    * To verify contract status is not in header
    * @param {string} contractStatusValue
    * @author somnath.k
    */
    static async verifyContractStatusNotinHeader(contractStatusValue: string) {
        let contractStatus = await AuroraLmt.getElement(auroraContractDetailsElements.DNY_REPOSITORY_DRAFT_STATUS_HEADER);
        contractStatus = await CommonComponent.retrieveParticularElementXpathBasedonString(contractStatusValue, contractStatus);
        await z.dontSeeElement(contractStatus);
    }

    //##################################################### AURORA-554 ###############################################################
    /**
    * To input valid cp
    * @author sowmyashree
    */
    static async inputValidCpName() {
        let cpName = await AuroraLmt.getData("CP_SEARCH");
        await z.fillField(await AuroraLmt.getElement(auroraContractDetailsElements.CP_SEARCH_FIELD), cpName);
    }

    /**
    * To input invalid cp
    * @author sowmyashree
    */
    static async inputInvalidCpName() {
        let cpName = await CommonComponent.randomString(16);
        await z.fillField(await AuroraLmt.getElement(auroraContractDetailsElements.CP_SEARCH_FIELD), cpName);
    }

    /**
    * To select first cp from the autosuggestion
    * @author sowmyashree
    */
    static async selectFirstCpFromAutosugstn() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.CP_FIRST_OPTIN_AUTOSUGSTN));
    }

    /**
    * To click on cp address
    * @author sowmyashree
    */
    static async clickOnCpAddress() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.CP_SELECT_ADDRESS_DROPDOWN));
    }

    /**
    * To click on cp contact
    * @author sowmyashree
    */
    static async clickOnCpContact() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.CP_SELECT_CONTACT_DROPDOWN));
    }

    /**
    * To click on cp card options
    * @author sowmyashree
    */
    static async clickOnCardOptions() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.CP_CARD_OPTIONS));
    }

    /**
    * To click on remove option
    * @author sowmyashree
    */
    static async clickOnRemvOptions() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.CP_REMOVE_OPTION));
    }

    /**
    * To click on remove button
    * @author sowmyashree
    */
    static async clickOnRemvButton() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.CP_REMOVE_BUTTON));
    }

    /**
   * To type and search again the cp
   * @author sowmyashree
   */
    static async inputCpSearchAgain() {
        let cpName = await AuroraLmt.getData("CP_SEARCH_AGAIN");
        await z.fillField(await AuroraLmt.getElement(auroraContractDetailsElements.CP_SEARCH_FIELD), cpName);
    }

    /**
   * To click on cp card options
   * @author sowmyashree
   */
    static async clickOnMarkAsPrimary() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.CP_MARK_AS_PRIMARY));
    }

    //###################################################### AURORA-554 Ends ##############################################################


    /**
   * To click on publish button
   * @author somnath.k
   */
    static async clickOnPublishBttn() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.PUBLISH_BTTN));
    }

    /**
    * To click on ok button in unsaved data popup
    * @author somnath.k
    */
    static async clickonOKhBttninUnsavedDataPopup() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.UPLOAD_FILE_ERRMSG_OK_BUTTON));
    }


    /**
    * To click on cancel button in the publish popup
    * @author somnath.k
    */
    static async clickonCancelBttninPublishPopup() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.PUBLISH_POPUP_CANCEL_BTTN));
    }

    /**
    * To click on publish button in the publish popup
    * @author somnath.k
    */
    static async clickonPublishBttninPublishPopup() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.PUBLISH_BTTN_IN_POPUP));
    }

    /**
    * To click on send mail button in the publish popup
    * @author somnath.k
    */
    static async clickonsendMailBttn() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.EMAIL_SEND_BTTN));
    }

    /**
    * To enter email id in
    * @author somnath.k
    */
    static async enterMailIds(fieldXpath: string, emailId: string) {
        await z.fillField(fieldXpath, emailId);
        await z.pressKey('Tab');
    }

    /**
    * To remove mail id
    * @author somnath.k
    */
    static async removeMailID() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.REMOVE_EMAILID));
    }

    /**
    * To enter subject field value
    * @author somnath.k
    */
    static async enterSubjectField(subjectValue: string) {
        await z.fillField(await AuroraLmt.getElement(auroraContractDetailsElements.EMAIL_SUBJECT_FIELD), subjectValue);
    }

    /**
    * To enter mail body
    * @author somnath.k
    */
    static async entermMilBodyField(mailBodyContent: string) {
        GlobalVariables.temporayString = "";
        GlobalVariables.temporayString = mailBodyContent;
        await z.fillField(await AuroraLmt.getElement(auroraContractDetailsElements.EMAIL_BODY_FIELD), mailBodyContent);
    }

    /**
    * To click on remove attachment icon
    * @author somnath.k
    */
    static async clickonRemoveAttachmentIcon() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.REMOVE_ATTACHEMENT_ICON));
    }

    /**
    * To click on cancel button in the popup
    * @author somnath.k
    */
    static async clickonCancelBttnEmailPopup() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.CANCEL_EMAIL_POPUP));
    }

    /**
    * To click on skip mail button in the popup
    * @author somnath.k
    */
    static async clickonSkipMailBttnEmailPopup() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.SKIP_EMAIL_BTTON_POPUP));
    }

    /**
    * To click on cancel button in skip mail popup
    * @author somnath.k
    */
    static async clickonCancelBttnSkipMailPopup() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.CANCEL_BTTN_SKIP_MAIL_POPUP));
    }

    /**
    * To click on create cp button
    * @author somnath.k
    */
    static async clickonCreateCpBttn() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.CREATE_CP_BTTN));
    }

    /**
    * To click on first cp type from the list
    * @author somnath.k
    */
    static async clickonFirstCPType() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.FIRST_CP_TYPE_LIST));
    }

    /**
    * To click on cancel button in the overlay
    * @author somnath.k
    */
    static async clickonOerlayCancelBttn() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.OVERLAY_CANCEL_BTTN));
    }

    /**
    * To fill first field in the main form
    * @author somnath.k
    */
    static async fillFirstFieldinMainForm(value: string) {
        await z.fillField(await AuroraLmt.getElement(auroraContractDetailsElements.MAIN_FORM_FIRST_FIELD), value);
    }

    /**
    * To click on submit button in the overlay
    * @author somnath.k
    */
    static async clickonOerlaySubmitBttn() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.OVERLAY_SUBMIT_BTTN));
    }

    /**
    * To click on first header in the overlay
    * @author somnath.k
    */
    static async clickonOerlayFirstHeader() {
        await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.OVERLAY_FIRST_HEADER));
    }

    /**
    * To fill first field in the atl form
    * @author somnath.k
    */
    static async fillFirstFieldinATLForm(value: string) {
        await z.fillField(await AuroraLmt.getElement(auroraContractDetailsElements.FIRST_FIELD_IN_ATL), value);
    }



    /********************************************************Sub Services Ends**********************************************************/

    /********************************************************Services Starts**********************************************************/


    /**
    * To verify aurora menus are disabled on the page
    * @param {String[]} disabledMenuList
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyAuroraMenusareDisabled(disabledMenuList: String[]) {
        let flag = true;
        let disabledMenuUITextList = await CommonComponent.retrieveUITextListBasedonIndexWithSingleXpath(await AuroraLmt.getElement(auroraContractDetailsElements.CONTRACT_DISABLED_MENU_LIST));
        for (let i = 0; i < disabledMenuList.length; i++) {
            flag = disabledMenuUITextList.includes(disabledMenuList[i]);
            if (flag == true) {
                break;
            }
        }
        return flag;
    }

    /**
    * To verify contract title in aurora contract details page
    * @param {string} filledContractTitle
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyContractTitleonUI(filledContractTitle: string) {
        let contractTitleXpath = await AuroraLmt.getElement(contractDetailsElements.DYN_NORMAL_TEXTBOX_COMMON);
        contractTitleXpath = await CommonComponent.retrieveParticularElementXpathBasedonString("Contract Title" as string, contractTitleXpath);
        let flag = filledContractTitle == await z.grabTextFrom(contractTitleXpath);
        return flag;
    }

    /**
    * To verify minimum mandatory error message on UI
    * @param {String[]} minimumMandatoryFieldList
    * @author somnath.k
    */
    static async verifyMinimumMandatoryErrorMSG(minimumMandatoryFieldList: String[]) {
        for (let i = 0; i < minimumMandatoryFieldList.length; i++) {
            let mandatoryFieldXpath = await AuroraLmt.getElement(auroraContractDetailsElements.DNY_SAVE_AS_DRAFT_ERROR_MSG);
            mandatoryFieldXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(minimumMandatoryFieldList[i].trim() as string, mandatoryFieldXpath);
            await z.seeElement(mandatoryFieldXpath);
        }
    }

    /**
    * To fill minimum mandatory fields required for save as draft
    * @author somnath.k
    */
    static async fillMinimumMandatoryDropDownFields() {
        let errorMetadata = await AuroraLmt.getElement(auroraContractDetailsElements.MINIMUM_MANDATORY_DROPDOWN_FIELD_METADATA);
        let errorDropdownField = await AuroraLmt.getElement(auroraContractDetailsElements.MINIMUM_MANDATORY_DROPDOWN_FIELDS);
        let errorDropdownFieldXpathList = await CommonComponent.retrieveElementXpathBasedonIndex(errorDropdownField);
        let errorMetadataXpathList = await CommonComponent.retrieveElementXpathBasedonIndex(errorMetadata);
        GlobalVariables.minimumMandatoryField.clear();
        for (let i = 0; i < errorDropdownFieldXpathList.length; i++) {
            let metadataName: String = await z.grabTextFrom(errorMetadataXpathList[i] as string);
            await z.click(errorDropdownFieldXpathList[i] as string);
            let metadataValue: String = await CommonComponent.clickRandomValueFromList(await AuroraLmt.getElement(auroraContractDetailsElements.COMMON_DROPDOWN_LIST));
            GlobalVariables.minimumMandatoryField.set(metadataName.replace("*", "").trim(), metadataValue.trim());
        }
    }

    /**
    * To get and verify new aurora contract number in the header
    * @param {string} contractPrefixText
    * @return {string} newContractNo
    * @author somnath.k
    */
    static async verifyNewContractNumberGenerated(contractPrefixText: string) {
        await z.dontSeeElement(await AuroraLmt.getElement(contractDetailsElements.CONTRACT_DETAILS_ERROR_TOASTER));
        await z.seeElement(await AuroraLmt.getElement(contractDetailsElements.METADATA_VIEW_HEADER));
        await z.waitForVisible(await AuroraLmt.getElement(contractDetailsElements.CONTRACT_NAME_METADATA));
        let newContractNumber = await CommonComponent.retrieveParticularElementXpathBasedonString(contractPrefixText, await AuroraLmt.getElement(auroraContractDetailsElements.DNY_NEW_CONTRACT_NUMBER_AURORA));
        let newContractNo = "";
        // await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(contractDetailsElements.CONTRACT_NAME_METADATA));
        await z.wait(3);
        if (await CommonComponent.getHtmlElementData(newContractNumber) != null) {
            await z.seeElement(newContractNumber);
            newContractNo = await z.grabTextFrom(newContractNumber);
        } else {
            newContractNo = "Not Generated";
        }
        return newContractNo;
    }

    /**
    * To verify contract in top of the gird
    * @param {string} recentSavedContractNumber
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyContractEntryinTopGrid(recentSavedContractNumber: String) {
        let firstContractNumber: String = await z.grabTextFrom(await AuroraLmt.getElement(contractDetailsElements.FIRST_CONTRACT_LINK));
        logger.info("Contract Number from UI", firstContractNumber);
        logger.info("Contract Number from UI", firstContractNumber);
        // await z.wait(15);
        let flag = recentSavedContractNumber == firstContractNumber;
        return flag;
    }

    /**
    * To add random value/test data table value/clear to all type of fields
    * @param {string} fieldValue
    * @param {string} metadataInputCount
    * @param {string} fieldType
    * @param {boolean} clearFlag   //to clear field on UI
    * @param {boolean} dbTestDataFlag //flag to pass value from test data table
    * @param {string} dbTestData  //to pass value from test data table
    * @return {string} fieldValue
    * @author somnath.k
    */
    static async addValues(fieldValue: string, metadataInputCount: string, fieldType: string, clearFlag: boolean, dbTestDataFlag: boolean, dbTestData: string) {
        let fieldVal: string = "";
        //let fieldType = await z.grabAttributeFrom(metadataInputCount, "fieldtype");
        let fieldId = await z.grabAttributeFrom(metadataInputCount, "name");
        let classValue: String = "" + await z.grabAttributeFrom(metadataInputCount, "class");
        let classValueList: String[] = classValue.split(" ");

        // if (fieldType == "DROPDOWN" || fieldType == "MANY_TO_MANY") {
        if (fieldType == "DROPDOWN") {
            if (classValueList.includes("ng-select-disabled")) {
                logger.info("Dropdown field is disabled on UI so cannot be filled,skipped");
            } else {
                try {
                    let dropdownXpath = metadataInputCount;
                    await z.scrollIntoView(dropdownXpath);

                    if (clearFlag == true) {
                        let dropdownClearIcon = dropdownXpath + "//span[@title='Clear all']";
                        logger.info("dynamic doprdown clear icon", dropdownClearIcon);
                        if ((await CommonComponent.getHtmlElementData(dropdownClearIcon) != null) || (await CommonComponent.getHtmlElementData(dropdownClearIcon) != undefined)) {
                            await z.click(dropdownClearIcon);
                        } else {
                            logger.info("Dropdown doesnt have any value in the  and the xpath is", dropdownClearIcon);
                        }
                    } else {
                        if (fieldId == "Contract_Status") {
                            let fieldListVal = await AuroraLmt.getElement(auroraContractDetailsElements.COMMON_DROPDOWN_LIST);
                            let dropdownSearchBox = await AuroraLmt.getElement(auroraContractDetailsElements.COMMON_DROPDOWN_SEARCH_BOX);
                            //passing value as inactive and will be handled later
                            let dropdownVal = "Inactive";
                            await CommonComponent.searchValueAndSelectinDropdownByClick(dropdownXpath, fieldListVal, dropdownSearchBox, dropdownVal);
                        } else if (fieldId == "AUTO_RENEW") {
                            let fieldListVal = await AuroraLmt.getElement(auroraContractDetailsElements.COMMON_DROPDOWN_LIST);
                            let dropdownSearchBox = await AuroraLmt.getElement(auroraContractDetailsElements.COMMON_DROPDOWN_SEARCH_BOX);
                            //passing value as inactive and will be handled later
                            let dropdownVal = "Single Term";
                            await CommonComponent.searchValueAndSelectinDropdownByClick(dropdownXpath, fieldListVal, dropdownSearchBox, dropdownVal);
                        }
                        else {
                            let fieldListVal = await AuroraLmt.getElement(auroraContractDetailsElements.COMMON_DROPDOWN_LIST);
                            let dropdownSearchBox = await AuroraLmt.getElement(auroraContractDetailsElements.COMMON_DROPDOWN_SEARCH_BOX);
                            await CommonComponent.searchRandomValueAndSelectinDropdownByClick(dropdownXpath, fieldListVal, dropdownSearchBox);
                        }
                    }
                    await z.waitForVisible(dropdownXpath);
                    fieldValue = await z.grabTextFrom(dropdownXpath);
                    logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
                } catch (error) {
                    logger.info("Failed while filling the dropdown value or dropdown is disabled on UI,skipped");
                }
            }
        } else if (fieldType == "STRING") {
            try {
                let stringXpath = metadataInputCount;
                if (await CommonComponent.verifyFieldisReadonly(stringXpath) == true) {
                    logger.info("Metadata is disabled on UI so value cannot be filled,Skipped");
                    fieldValue = "";
                } else {
                    await z.scrollIntoView(stringXpath);
                    if (clearFlag == true) {
                        await z.clearField(stringXpath);
                    } else {
                        if (dbTestDataFlag == true) {
                            fieldVal = dbTestData;
                        } else {
                            fieldVal = await CommonComponent.randomString(16);
                        }
                        if (fieldId == "Contract_Title") {
                            await z.fillField(stringXpath, "Automation" + await CommonComponent.getRandomNumber(1000000));
                        } else {
                            if (fieldId == "Contract_Term") {
                                await z.fillField(stringXpath, "" + await CommonComponent.getRandomNumber(10));
                            }
                            else {
                                await z.fillField(stringXpath, fieldVal);
                            }
                        }

                    }
                    await z.waitForVisible(stringXpath);
                    fieldValue = await CommonComponent.getUITextUsingJavascript(stringXpath);
                    logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
                }

            } catch (error) {
                logger.info("Failed while filling the string value");
            }

        } else if (fieldType == "DECIMAL") {
            try {
                let decimalXpath = metadataInputCount;
                if (await CommonComponent.verifyFieldisReadonly(decimalXpath) == true) {
                    logger.info("Metadata is disabled on UI so value cannot be filled,Skipped");
                    fieldValue = "";
                } else {
                    await z.scrollIntoView(decimalXpath);
                    if (clearFlag == true) {
                        await z.clearField(decimalXpath);
                    } else {
                        if (dbTestDataFlag == true) {
                            fieldVal = dbTestData;
                        } else {
                            fieldVal = await CommonComponent.getRandomNumber(10) + ".00";
                        }
                        await z.fillField(decimalXpath, fieldVal);
                    }
                }
                await z.waitForVisible(decimalXpath);
                fieldValue = await CommonComponent.getUITextUsingJavascript(decimalXpath);
                logger.info(fieldId + " || " + fieldType + " || " + fieldValue);

            }
            catch (error) {
                logger.info("Failed while filling the decimal value");
            }

        } else if (fieldType == "INTEGER") {
            try {
                let integerXpath = metadataInputCount;
                if (await CommonComponent.verifyFieldisReadonly(integerXpath) == true) {
                    logger.info("Metadata is disabled on UI so value cannot be filled,Skipped");
                    fieldValue = "";
                } else {
                    await z.scrollIntoView(integerXpath);
                    if (clearFlag == true) {
                        await z.clearField(integerXpath);
                    } else {
                        if (fieldId != "AUTO_RENEWAL_PERIOD_MONTHS") {
                            if (dbTestDataFlag == true) {
                                fieldVal = dbTestData;
                            } else {
                                fieldVal = await CommonComponent.randomNumberString(2);
                            }

                            await z.fillField(integerXpath, fieldVal);
                        } else {
                            if (dbTestDataFlag == true) {
                                fieldVal = dbTestData;
                            } else {
                                fieldVal = await CommonComponent.randomNumberString(1);
                            }
                            await z.fillField(integerXpath, fieldVal);
                        }
                    }
                }
                await z.waitForVisible(integerXpath);
                fieldValue = await CommonComponent.getUITextUsingJavascript(integerXpath);
                logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
            }
            catch (error) {
                logger.info("Failed while filling the integer value");
            }
        } else if (fieldType == "DATE") {
            try {
                let dateField = metadataInputCount;
                await z.scrollIntoView(dateField);
                if (clearFlag == true) {
                    await z.clearField(dateField);
                } else {
                    if (dbTestDataFlag == true) {
                        fieldVal = dbTestData;
                        await z.fillField(dateField, fieldVal);
                    } else {

                        if (fieldId == "Contract_Expiration_Date") {
                            logger.info("Contract expiration date is already filled");
                        } else {
                            await z.click(dateField);
                            if (fieldId == "Contract_Effective_Date") {
                                if ((await CommonComponent.getHtmlElementData(await AuroraLmt.getElement(auroraContractDetailsElements.SELECTED_DAY)) != null) || (await CommonComponent.getHtmlElementData(await AuroraLmt.getElement(auroraContractDetailsElements.SELECTED_DAY)) != undefined)) {
                                    await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.SELECTED_DAY));
                                } else {
                                    await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.CALENDAR_CURRENT_DAY));
                                }

                                // } else if (fieldId != "Contract_Renewal_Date") {
                            } else if (fieldId != "Reminder_Date") {
                                // await CommonComponent.auroraRandomCombinedDateSelectionBasedonClick(await AuroraLmt.getElement(auroraContractDetailsElements.COMBINED_DAY_MONTH_YEAR), await AuroraLmt.getElement(auroraContractDetailsElements.CURRENT_RANGE_YEAR_MONTH_DAY_OPTION_LIST));
                                if ((await CommonComponent.getHtmlElementData(await AuroraLmt.getElement(auroraContractDetailsElements.SELECTED_DAY)) != null) || (await CommonComponent.getHtmlElementData(await AuroraLmt.getElement(auroraContractDetailsElements.SELECTED_DAY)) != undefined)) {
                                    await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.SELECTED_DAY));
                                } else {
                                    await z.click(await AuroraLmt.getElement(auroraContractDetailsElements.CALENDAR_CURRENT_DAY));
                                }
                            } else {
                                let contractExpiryDate = await AuroraLmt.getElement(auroraContractDetailsElements.CONTRACT_EXPIRATION_DATE_FIELD);
                                let contractExpiryDateValue = await z.grabAttributeFrom(contractExpiryDate, "value");
                                let splitedFormatList: String[] = contractExpiryDateValue.split("/");
                                let renewalDate: String = "";
                                // renewal date geneartion from contract expiry date
                                for (let i = 0; i < splitedFormatList.length; i++) {
                                    let stringCount = splitedFormatList[i].length;
                                    if (stringCount == 4) {
                                        let randomNo: number = await CommonComponent.getRandomNumber(30) as number;
                                        let modifyValue: number = parseInt(splitedFormatList[i] as string);
                                        modifyValue = modifyValue + randomNo;
                                        renewalDate = renewalDate + "" + modifyValue + "/";
                                    } else {
                                        renewalDate = renewalDate + "" + splitedFormatList[i] + "/";
                                    }
                                }
                                splitedFormatList = renewalDate.split("/");
                                renewalDate = splitedFormatList[0] + "/" + splitedFormatList[1] + "/" + splitedFormatList[2];
                                if (renewalDate != "") {
                                    await z.fillField(dateField, renewalDate);
                                } else {
                                    await CommonComponent.auroraRandomCombinedDateSelectionBasedonClick(await AuroraLmt.getElement(auroraContractDetailsElements.COMBINED_DAY_MONTH_YEAR), await AuroraLmt.getElement(auroraContractDetailsElements.CURRENT_RANGE_YEAR_MONTH_DAY_OPTION_LIST));
                                }
                            }

                        }
                    }

                }
                await z.waitForVisible(dateField);
                fieldValue = await CommonComponent.getUITextUsingJavascript(dateField);
                logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
            } catch (error) {
                logger.info("Failed to fill date value in the contract");
            }
        } else if (fieldType == "TEXTAREA") {
            try {
                let textareaXpath = metadataInputCount;
                if (await CommonComponent.verifyFieldisReadonly(textareaXpath) == true) {
                    logger.info("Metadata is disabled on UI so value cannot be filled,Skipped");
                    fieldValue = "";
                } else {
                    await z.scrollIntoView(textareaXpath);
                    if (clearFlag == true) {
                        await z.clearField(textareaXpath);
                    } else {
                        if (dbTestDataFlag == true) {
                            fieldVal = dbTestData;
                        } else {
                            fieldVal = await CommonComponent.randomString(40);
                        }
                        await z.fillField(textareaXpath, fieldVal);
                    }
                }
                await z.waitForVisible(textareaXpath);
                fieldValue = await CommonComponent.getUITextUsingJavascript(textareaXpath);
                logger.info(fieldId + " || " + fieldType + " || " + fieldVal);
            } catch (error) {
                logger.info("Failed to fill textarea value in the contract");
            }
        } else if (fieldType == "FILE") {
            try {
                let fileXpath = metadataInputCount;
                await z.scrollIntoView(fileXpath);
                await z.attachFile(fileXpath, await AuroraLmt.getData("DOCX_FORMAT_DOCUMENT"));
                // let fileInputXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt.getElement(contractDetailsElements.DYN_STRINGFIELD));
                let fileInputXpath = metadataInputCount;
                await z.waitForVisible(fileInputXpath);
                fieldValue = await CommonComponent.getUITextUsingJavascript(fileInputXpath);
                logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
            }
            catch (error) {
                logger.info("Failed to upload contract in the contract");
            }
        } else if (fieldType == "RADIO") {
            logger.info("Manual case :Metadata field might be checkbox or radio button,Skipped");
        } else if (fieldType == "" || fieldType == null || fieldType == undefined) {
            logger.info("Manual case :Metadata field might be checkbox or invalid,Skipped");
        }
        else {
            logger.info("!!!!!!!!!!!!! Fieldtype not identified !!!!!!!!!!!!!!!!!!!");
        }
        return fieldValue;
    }

    /**
    * To fill/clear only mandatory/all subheader level fields details
    * @param {string} headerValue
    * @param {string} subHeaderName
    * @param {boolean} fillOnlyMandatoryFlag //flag to fill only mandatory fields
    * @param {boolean} clearFieldFlag   //to clear field on UI
    * @param {boolean} dbTestDataFlag //flag to pass value from test data table
    * @param {string} dbTestData   //to pass value from test data table
    * @author somnath.k
    */
    static async fillAuroraSubheaderDetails(headerValue: string, subHeaderName: string, fillOnlyMandatoryFlag: boolean, clearFieldFlag: boolean, dbTestDataFlag: boolean, dbTestData: string) {
        let dynamicMetadataXpath = await AuroraLmt.getElement(auroraContractDetailsElements.DNY_AURORA_METADATA_INPUT);
        logger.info("*********************xpath dynamice metadata******************", dynamicMetadataXpath);
        if (dynamicMetadataXpath.includes("DynamicHeader")) {
            dynamicMetadataXpath = dynamicMetadataXpath.replace("DynamicHeader", headerValue);
        } else {
            logger.info("Element DNY_AURORA_METADATA_INPUT doesnt have Keyword called TempValueHeader so fill details is failed");
        }
        logger.info("*********************xpath after replaced dynamice metadata******************", dynamicMetadataXpath);
        let metadataInputCount = await CommonComponent.retrieveElementXpathBasedonString(subHeaderName + " ", dynamicMetadataXpath);
        logger.info("Number of Fields : " + metadataInputCount.length);
        for (let k = 0; k < metadataInputCount.length; k++) {
            let MetadatfieldId = await z.grabAttributeFrom(metadataInputCount[k] as string, "name");
            if (MetadatfieldId == "Contract_Owner") {
                logger.info("contract owner value is not filled,skipped");
                continue;
            }

            let metadataPresentonUI = await CommonComponent.isEnabledByXpath(metadataInputCount[k] as string);
            let metadataDisabled = (await CommonComponent.verifyFieldisDisabledOnUI(metadataInputCount[k] as string));
            let metadataHidden = (await CommonComponent.verifyFieldisHidden(metadataInputCount[k] as string));
            if ((metadataPresentonUI == true && (metadataDisabled != true || metadataDisabled == null || metadataDisabled == undefined) && metadataHidden != true)) {
                if (await CommonComponent.verifyFieldHasParticularAttribute(metadataInputCount[k] as string) == true) {
                    let fieldValue = "";
                    try {
                        let labelXpath = metadataInputCount[k] + "//ancestor::*/div[@for]" as string;
                        let metadataLabel: string = await z.grabTextFrom(labelXpath);
                        let fieldType = await z.grabAttributeFrom(metadataInputCount[k] as string, "fieldtype");
                        if (fieldType == "MANY_TO_MANY") {
                            logger.info("Bu value is not filled,skipped");
                            continue;
                        }
                        let value;
                        if (fillOnlyMandatoryFlag == true) {
                            if (metadataLabel.includes("*")) {
                                logger.info("********************In side fill only mandatory***********************");
                                value = await this.addValues(fieldValue, metadataInputCount[k] as string, fieldType, clearFieldFlag, dbTestDataFlag, dbTestData);
                            } else {
                                continue;
                            }
                        } else {
                            value = await this.addValues(fieldValue, metadataInputCount[k] as string, fieldType, clearFieldFlag, dbTestDataFlag, dbTestData);
                        }
                        metadataLabel = metadataLabel.replace("*", "").trim();
                        if (value.length == 0 || value == "" || value == null || value == undefined) {
                            let mapfieldValues = new Map<String, String>();
                            mapfieldValues.set(metadataLabel, value);
                            GlobalVariables.subHeaderWithmetadataandBlankValue.set(subHeaderName + "_" + k, mapfieldValues);
                        } else {
                            let mapfieldValues = new Map<String, String>();
                            mapfieldValues.set(metadataLabel, value);
                            GlobalVariables.subHeaderWithmetadataandValue.set(subHeaderName + "_" + k, mapfieldValues);
                        }
                    } catch (error) {
                        logger.info("Field is either Hidden or disabled. Kindly refer screenshot");
                    }
                } else {
                    logger.info("Metadata is not having fieldtype attribute,skipped");
                }
            } else {
                logger.info("Metadata is not available in the contract details page,skipped");

            }
        }
    }



    /**
    * To fill entire aurora contract details information
    * @param {boolean} fillOnlyMandatoryFlag //flag to fill only mandatory fields
    * @param {boolean} clearFieldFlag   //to clear field on UI
    * @param {boolean} dbTestDataFlag //flag to pass value from test data table
    * @param {string} dbTestData  //to pass value from test data table
    * @author somnath.k
    */
    static async fillAuroraContractDetailsInfo(fillOnlyMandatoryFlag: boolean, clearFieldFlag: boolean, dbTestDataFlag: boolean, dbTestData: string) {
        logger.info("In process of filling Contract Detail page ");
        try {
            let headerList = await CommonComponent.retrieveUITextListBasedonIndexWithSingleXpath(await AuroraLmt.getElement(auroraContractDetailsElements.CONTRACT_DETAILS_HEADER_LIST));
            let headerXpathList = await CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt.getElement(auroraContractDetailsElements.CONTRACT_DETAILS_HEADER_LIST));
            logger.info("Number of Headers : " + headerList.length);
            let particularHeader: string;
            if (GlobalVariables.subHeaderWithmetadataandValue.size > 0) {
                GlobalVariables.subHeaderWithmetadataandValue.clear();
                logger.info("Removed previous contract details data from map");
            }
            if (GlobalVariables.subHeaderWithmetadataandBlankValue.size > 0) {
                GlobalVariables.subHeaderWithmetadataandBlankValue.clear();
                logger.info("Removed previous contract details data from blank map");
            }
            for (let i = 0; i < headerList.length; i++) {
                logger.info("Header number " + (i + 1) + " : " + headerList[i]);
                let headerName = headerList[i];
                if (headerName.includes("CP")) {
                    continue;
                }
                // commented below code bcoz Contract header is removed inside the form
                particularHeader = await AuroraLmt.getElement(auroraContractDetailsElements.DNY_AURORA_PARTICULAR_HEADER);
                particularHeader = particularHeader.replace("TempValue", "" + headerName);
                await z.click(headerXpathList[i] as string);
                await z.scrollIntoView(particularHeader);
                // Changed above code to below one
                //await z.scrollIntoView(headerXpathList[i] as string);
                // await z.click(headerXpathList[i] as string);
                let subHeaderList = await CommonComponent.retrieveUITextListBasedonString(headerName as string, await AuroraLmt.getElement(auroraContractDetailsElements.DNY_AURORA_SUBHEADER_LIST));
                logger.info("Number of Sub Headers : " + subHeaderList.length);
                for (let j = 0; j < subHeaderList.length; j++) {
                    let subHeaderName = subHeaderList[j] as string;
                    if (subHeaderName.includes("*")) {
                        subHeaderName = subHeaderName.replace("*", "");
                    }
                    logger.info("SubHeader number " + (j + 1) + " : " + subHeaderName);
                    try {
                        /**
                         * Input contract meta field values
                         */
                        await this.fillAuroraSubheaderDetails(headerName as string, subHeaderName, fillOnlyMandatoryFlag, clearFieldFlag, dbTestDataFlag, dbTestData);
                    } catch (error) {
                        logger.info("No Fields identified under - " + subHeaderName);
                    }
                }
            }
        } catch (error) {
            logger.info("Failed to fill all the fields in the contract details page");
        }
    }

    /**
    * To fill/clear specified field type in aurora contract details page
    * @param {string} specifiedFieldTye
    * @param {boolean} clearFieldFlag   //to clear field on UI
    * @param {boolean} dbTestDataFlag //flag to pass value from test data table
    * @param {string} dbTestData    //to pass value from test data table
    * @author somnath.k
    */
    static async fillorClearSpecifiedFieldType(specifiedFieldTye: string, clearFieldFlag: boolean, dbTestDataFlag: boolean, dbTestData: string) {
        logger.info("In process of filling or modifying Contract Detail page for type ", specifiedFieldTye);
        try {
            let headerList = await CommonComponent.retrieveUITextListBasedonIndexWithSingleXpath(await AuroraLmt.getElement(auroraContractDetailsElements.CONTRACT_DETAILS_HEADER_LIST));
            logger.info("Number of Headers : " + headerList.length);
            let particularHeader: string;
            if (GlobalVariables.subHeaderWithmetadataandValue.size > 0) {
                GlobalVariables.subHeaderWithmetadataandValue.clear();
                logger.info("Removed previous contract details data from map");
            }
            if (GlobalVariables.subHeaderWithmetadataandBlankValue.size > 0) {
                GlobalVariables.subHeaderWithmetadataandBlankValue.clear();
                logger.info("Removed previous contract details data from blank map");
            }
            for (let i = 0; i < headerList.length; i++) {
                logger.info("Header number " + (i + 1) + " : " + headerList[i]);
                let headerName = headerList[i];
                if (headerName.includes("CP")) {
                    continue;
                }
                particularHeader = await AuroraLmt.getElement(auroraContractDetailsElements.DNY_AURORA_PARTICULAR_HEADER);
                particularHeader = particularHeader.replace("TempValue", "" + headerName);
                await z.scrollIntoView(particularHeader);
                let subHeaderList = await CommonComponent.retrieveUITextListBasedonString(headerName as string, await AuroraLmt.getElement(auroraContractDetailsElements.DNY_AURORA_SUBHEADER_LIST));
                logger.info("Number of Sub Headers : " + subHeaderList.length);
                for (let j = 0; j < subHeaderList.length; j++) {
                    let subHeaderName = subHeaderList[j] as string;
                    if (subHeaderName.includes("*")) {
                        subHeaderName = subHeaderName.replace("*", "");
                    }
                    logger.info("SubHeader number " + (j + 1) + " : " + subHeaderName);
                    try {
                        /**
                         * Input contract meta field values
                         */
                        await this.fillAuroraSubheaderDetailSpecifiedType(headerName as string, subHeaderName, specifiedFieldTye, clearFieldFlag, dbTestDataFlag, dbTestData);
                    } catch (error) {
                        logger.info("No Fields identified under - " + subHeaderName);
                    }
                }
            }
        } catch (error) {
            logger.info("Failed to fill all the fields in the contract details page");
        }

    }

    /**
    * To fill/clear specified field type in subheader level
    * @param {string} headerValue
    * @param {string} subHeaderName
    * @param {string} specifiedFieldTye
    * @param {boolean} clearFieldFlag   //to clear field on UI
    * @param {boolean} dbTestDataFlag //flag to pass value from test data table
    * @param {string} dbTestData   //to pass value from test data table
    * @author somnath.k
    */
    static async fillAuroraSubheaderDetailSpecifiedType(headerValue: string, subHeaderName: string, specifiedFieldTye: string, clearFieldFlag: boolean, dbTestDataFlag: boolean, dbTestData: string) {
        let dynamicMetadataXpath = await AuroraLmt.getElement(auroraContractDetailsElements.DNY_AURORA_METADATA_INPUT);
        logger.info("*********************xpath dynamice metadata******************", dynamicMetadataXpath);
        if (dynamicMetadataXpath.includes("DynamicHeader")) {
            dynamicMetadataXpath = dynamicMetadataXpath.replace("DynamicHeader", headerValue);
        } else {
            logger.info("Element DNY_AURORA_METADATA_INPUT doesnt have Keyword called TempValueHeader so fill details is failed");
        }
        let metadataInputCount = await CommonComponent.retrieveElementXpathBasedonString(subHeaderName + " ", dynamicMetadataXpath);
        logger.info("Number of Fields : " + metadataInputCount.length);
        for (let k = 0; k < metadataInputCount.length; k++) {
            if ((await CommonComponent.getHtmlElementData(metadataInputCount[k] as string) == null) || ((await CommonComponent.getHtmlElementData(metadataInputCount[k] as string) == undefined))) {
                logger.info("Metadata is not present in the UI and the xpath is", metadataInputCount[k] as string);
                continue;
            }
            let MetadatfieldId = await z.grabAttributeFrom(metadataInputCount[k] as string, "name");
            if (MetadatfieldId == "Contract_Owner") {
                logger.info("contract owner value is not filled,skipped");
                continue;
            }
            let metadataPresentonUI = await CommonComponent.isEnabledByXpath(metadataInputCount[k] as string);
            let metadataDisabled = (await CommonComponent.verifyFieldisDisabledOnUI(metadataInputCount[k] as string));
            let metadataHidden = (await CommonComponent.verifyFieldisHidden(metadataInputCount[k] as string));
            if ((metadataPresentonUI == true && (metadataDisabled != true || metadataDisabled == null || metadataDisabled == undefined) && metadataHidden != true)) {
                if (await CommonComponent.verifyFieldHasParticularAttribute(metadataInputCount[k] as string) == true) {
                    let fieldValue = "";
                    try {
                        let labelXpath = metadataInputCount[k] + "//ancestor::*/span[@for]" as string;
                        let metadataLabel: string = await z.grabTextFrom(labelXpath);
                        let fieldType = await z.grabAttributeFrom(metadataInputCount[k] as string, "fieldtype");
                        if (fieldType == "MANY_TO_MANY") {
                            logger.info("Bu value is not filled,skipped");
                            continue;
                        }
                        let value;
                        if (specifiedFieldTye == fieldType) {
                            value = await this.addValues(fieldValue, metadataInputCount[k] as string, fieldType, clearFieldFlag, dbTestDataFlag, dbTestData);
                        } else {
                            continue;
                        }
                        metadataLabel = metadataLabel.replace("*", "").trim();
                        if (value.length == 0 || value == "" || value == null || value == undefined) {
                            let mapfieldValues = new Map<String, String>();
                            mapfieldValues.set(metadataLabel, value);
                            GlobalVariables.subHeaderWithmetadataandBlankValue.set(subHeaderName + "_" + k, mapfieldValues);
                        } else {
                            let mapfieldValues = new Map<String, String>();
                            mapfieldValues.set(metadataLabel, value);
                            GlobalVariables.subHeaderWithmetadataandValue.set(subHeaderName + "_" + k, mapfieldValues);
                        }
                    } catch (error) {
                        logger.info("Field is either Hidden or disabled. Kindly refer screenshot");
                    }
                } else {
                    logger.info("Metadata is not having fieldtype attribute,skipped");
                }
            } else {
                logger.info("Metadata is not available in the contract details page,skipped");

            }
        }
    }

    // static async fillRandomDropdown(fieldValue: string, metadataInputCount: string){
    //     let fieldType = await z.grabAttributeFrom(metadataInputCount, "fieldtype");


    // }

    /**
    * To fill minimum mandatory fields required for save as draft
    * @author somnath.k
    */
    static async verifyMandatoryMessageForAllmandatoryFields() {
        let allFieldsMandatorySymbolXpathCount = await CommonComponent.grabNumberElements(await AuroraLmt.getElement(auroraContractDetailsElements.ALL_FIELDS_MANDATORY_SYMBOL_BASEDON_ERROR_MSG));
        let allFieldsMandatoryErrorMsgXpathCunt = await CommonComponent.grabNumberElements(await AuroraLmt.getElement(auroraContractDetailsElements.ALL_FIELDS_MANDATORY_ERROR_MSG));
        let flag = allFieldsMandatorySymbolXpathCount == allFieldsMandatoryErrorMsgXpathCunt;
        return flag;
    }


    /*
    * To check the digital document is pdf or not
    *
    *
    */
    static async documentPdfOrNot(statusIndex: number) {
        let flag = false;
        for (let i = 3; i <= 15; i++) {
            let document: string = await CommonComponent.getUITextUsingJavascript(await AuroraLmt.getElement(auroraContractDetailsElements.DIGITAL_CONTRACT_DOCUMENT));
            let documentExtensionFromDigiDoc = await document.split(".");
            let documentExtension: String = await documentExtensionFromDigiDoc[1];
            let pdfExtension = "pdf";
            if (documentExtension == pdfExtension) {
                flag = true;
                break;
            }
            else {
                await ContractDetailsActions.clickOnRepoContractCloseIcon()
                await CommonComponent.gridDropdownSelectionBasedonValue(await AuroraLmt.getElement(contractDetailsElements.REPO_STATUS_DROPDOWN), await AuroraLmt.getElement(contractDetailsElements.CONTRACT_STATUS_OPTION_LIST), statusIndex);
                let contractLink = await AuroraLmt.getElement(auroraContractDetailsElements.CONTRACT_LINK);
                if (contractLink.includes("TempCount")) {
                    contractLink = contractLink.replace("TempCount", "" + i);
                    await z.click(contractLink);
                    await ContractDetailsActions.clickOnRepoContractDetailsTab();
                }
                else {
                    logger.info("Xpath does not contains TempCount keyword");
                }

            }
        }
        return flag;

    }



    /****************************************************** AURORA-554 **********************************************************************/

    /**
    * To cp search autosuggestion list validation
    * @author sowmyashree
    */
    static async CpSearchListAutosuggestionValidation() {
        let flag = false
        let cpListXpath = await AuroraLmt.getElement(auroraContractDetailsElements.CP_SEARCH_LIST);
        let cpSearchText = await AuroraLmt.getData("CP_SEARCH");
        let cpSearchResult: String[] = await CommonComponent.retrieveUITextListBasedonIndexWithSingleXpath(cpListXpath);
        logger.info("Display " + cpSearchResult);
        logger.info("Display " + cpSearchText);
        for (let i = 0; i < cpSearchResult.length; i++) {
            if (cpSearchResult.includes(cpSearchText)) {
                flag = true;
            }
            else {
                flag = false;
                break;
            }
            return flag;
        }

    }

    /**
    * To select cp type randomly
    * @author sowmyashree
    */
    static async selectCpTypeRandomly() {
        let cpTypeDropdownXpath = await AuroraLmt.getElement(auroraContractDetailsElements.CP_TYPE_DROPDOWN);
        let cpTypeListXpath = await AuroraLmt.getElement(auroraContractDetailsElements.CP_TYPE_LIST);
        await CommonComponent.clickRandomValueFromDropdownBasedonOptionXpath(cpTypeDropdownXpath, cpTypeListXpath);

    }

    /**
    * To select cp address
    * @author sowmyashree
    */
    static async selectCpAddress() {
        let cpAddressDrpdwn = await AuroraLmt.getElement(auroraContractDetailsElements.CP_SELECT_ADDRESS_DROPDOWN);
        let cpAddressListXpath = await AuroraLmt.getElement(auroraContractDetailsElements.CP_SELECT_ADDRESS);
        let cpAddressValueList = await CommonComponent.retrieveUITextListBasedonIndexWithSingleXpathusingjavascript(cpAddressListXpath);
        let count = cpAddressValueList.length;
        await z.selectOption(cpAddressDrpdwn, cpAddressValueList[count - 1] as string);
        // await CommonComponent.gridDropdownSelectionBasedonRandomValue(cpAddressDrpdwn,cpAddressListXpath);
    }

    /**
   * To select cp contact
   * @author sowmyashree
   */
    static async selectCpContact() {
        let cpContactDrpdwn = await AuroraLmt.getElement(auroraContractDetailsElements.CP_SELECT_CONTACT_DROPDOWN);
        let cpAddressListXpath = await AuroraLmt.getElement(auroraContractDetailsElements.CP_SELECT_CONTACT);
        let cpAddressValueList = await CommonComponent.retrieveUITextListBasedonIndexWithSingleXpathusingjavascript(cpAddressListXpath);
        let count = cpAddressValueList.length;
        await z.selectOption(cpContactDrpdwn, cpAddressValueList[count - 1] as string);
        // await CommonComponent.gridDropdownSelectionBasedonRandomValue(cpContactDrpdwn,cpAddressListXpath);
    }

    /**
    * To check the selected cp address in cp card
    * @author sowmyashree
    */
    static async checkSelectedCpAddrsInCpCard() {
        let cpAddressDrpdwn = await AuroraLmt.getElement(auroraContractDetailsElements.CP_SELECT_ADDRESS_DROPDOWN);
        let cpAddressText = await z.grabTextFrom(cpAddressDrpdwn);
        let flag = false;
        if (cpAddressText.includes("Select Address")) {
            flag = false;
        }
        else {
            flag = true;
        }
        return flag;

    }

    /**
    * To check the selected cp address in cp card
    * @author sowmyashree
    */
    static async checkSelectedCpCntctInCpCard() {
        let cpCntctDrpdwn = await AuroraLmt.getElement(auroraContractDetailsElements.CP_SELECT_CONTACT_DROPDOWN);
        let cpAddressText = await await z.grabTextFrom(cpCntctDrpdwn);
        let flag = false;
        if (cpAddressText.includes("Select Contact")) {
            flag = false;
        }
        else {
            flag = true;
        }
        return flag;

    }

    /**
    * To select and add 10 cps
    * @author sowmyashree
    */
    static async selectAndAddTenCps() {

        await AuroraContractDetailsActions.inputValidCpName();
        await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(auroraContractDetailsElements.CP_SEARCH_LOADING));
        let xpathCpSearchList: any = await AuroraLmt.getElement(auroraContractDetailsElements.CP_SEARCH_LIST);
        xpathCpSearchList = await CommonComponent.retrieveElementXpathBasedonIndex(xpathCpSearchList);
        let cpSearchFieldXpath = await AuroraLmt.getElement(auroraContractDetailsElements.CP_SEARCH_FIELD);
        for (let i = 0; i < xpathCpSearchList.length; i++) {
            await z.clearField(cpSearchFieldXpath);
            await AuroraContractDetailsActions.inputValidCpName();
            await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(auroraContractDetailsElements.CP_SEARCH_LOADING));
            await z.click(xpathCpSearchList[i]);

        }
    }

    /**
    * To verify ten cp cards
    * @author sowmyashree
    */
    static async verifyTenCpCards() {
        let flag = false;
        let tenCpCardXpath = await AuroraLmt.getElement(auroraContractDetailsElements.CP_TEN_CPCARDS);
        let cpCardsXpath = await CommonComponent.retrieveElementXpathBasedonIndex(tenCpCardXpath);
        if (cpCardsXpath.length == 10) {
            flag = true;
        }
        else {
            flag = false;
        }
        return flag;
    }


    /**
    * To search already selected cp
    * @author sowmyashree
    */
    static async searchCpAlreadyAdded() {
        let cpName = await z.grabTextFrom(await AuroraLmt.getElement(auroraContractDetailsElements.CP_NAME_ON_CPCARD));
        await z.fillField(await AuroraLmt.getElement(auroraContractDetailsElements.CP_SEARCH_FIELD), cpName);

    }


    /**
    * To check added cp is disabled in the search list
    * @author sowmyashree
    */
    static async verifyCpDisabled() {
        await z.seeElement(await AuroraLmt.getElement(auroraContractDetailsElements.CP_ADDED_TICK));

    }


    /**
    * To check added cp is disabled in the search list
    * @author sowmyashree
    */
    static async verifyCpTypeIsDisplayed() {
        let defaultCpType = await z.grabTextFrom(await AuroraLmt.getElement(auroraContractDetailsElements.CP_TYPE_DROPDOWN));
        let actual_Result = defaultCpType == "" || defaultCpType != null || defaultCpType != undefined || defaultCpType.length === 0;
        z.assertEqual(true, actual_Result);

    }

    /**
   * To check all available cp type
   * @author sowmyashree
   */
    static async viewAllCpType() {
        let flag = false;
        let xpath = await AuroraLmt.getElement(auroraContractDetailsElements.CP_TYPE_LIST);
        let noOfCpType = xpath.length;
        if (noOfCpType > 0) {
            logger.info("CP Types are available");
            flag = true;

        }
        else {
            logger.info("No CP Type is available");
            flag = false;
        }
        return flag;
    }

    /**
    * To check all available cp type
    * @author sowmyashree
    */
    static async checkCpInTheContract() {
        let xpath = await AuroraLmt.getElement(auroraContractDetailsElements.CP_CARD_LIST);
        let elementCount = await CommonComponent.grabNumberElements(xpath);
        if (elementCount == 0) {
            await AuroraContractDetailsActions.inputValidCpName();
            await AuroraContractDetailsActions.selectFirstCpFromAutosugstn();
            await AuroraContractDetailsActions.clickOnCardOptions();
            await AuroraContractDetailsActions.clickOnRemvOptions();



        }
        else if (elementCount > 1) {
            for (let i = 0; i < xpath.length - 1; i++) {
                await AuroraContractDetailsActions.clickOnCardOptions();
                await AuroraContractDetailsActions.clickOnRemvOptions();
                await AuroraContractDetailsActions.clickOnRemvButton();
            }
            await AuroraContractDetailsActions.clickOnCardOptions();
            await AuroraContractDetailsActions.clickOnRemvOptions();



        }
        else {
            await AuroraContractDetailsActions.clickOnCardOptions();
            await AuroraContractDetailsActions.clickOnRemvOptions();


        }


    }



    /****************************************************** AURORA-554 Ends **********************************************************************/
    /****************************************************** AURORA-603 Starts **********************************************************************/

    /**
   * To verify ten cp cards
   * @author Minaz Khan
   */

    static async verifyTenRestrictingPartyLabel() {
        let flag = false;
        let contractingPartiesXpath = await CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt.getElement(auroraContractDetailsElements.CP_CARDS));
        logger.info(contractingPartiesXpath.length);
        let tenRestrictingPartyXpath = await CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt.getElement(auroraContractDetailsElements.MSR_COMMON_LINKS_XPATH));
        logger.info(tenRestrictingPartyXpath.length);
        if (tenRestrictingPartyXpath.length == contractingPartiesXpath.length) {
            flag = true;
        }
        else {
            flag = false;
        }
        return flag;
    }

    /************************************************** AURORA-603 Ends ********************************************************************/

    /***************************************************AURORA-97 Starts**************************************************************************** */

    // static async selectParticularValueFromAuroraDropdown() {
    //     let dropdownXpath = "";
    //     let fieldListVal = await AuroraLmt.getElement(auroraContractDetailsElements.COMMON_DROPDOWN_LIST);
    //     let dropdownSearchBox = await AuroraLmt.getElement(auroraContractDetailsElements.COMMON_DROPDOWN_SEARCH_BOX);
    //     //passing value as inactive and will be handled later
    //     let dropdownVal = "Inactive";
    //     await CommonComponent.searchValueAndSelectinDropdownByClick(dropdownXpath, fieldListVal, dropdownSearchBox, dropdownVal);
    // }

    /**
    * To clear all fields value from the email popup
    * @param {string} allFieldsXpath
    * @author somnath.k
    */
    static async clearAllFieldsValEmailPopup(allFieldsXpath: string) {
        let allFieldsXpathList = await CommonComponent.retrieveElementXpathBasedonIndex(allFieldsXpath);
        for (let fieldXpath of allFieldsXpathList) {
            await z.clearField(fieldXpath as string);
        }
    }

    /**
    * To verify mandatory error message for specified field list
    * @param {string} DnyMandatoryFieldXpath
    * @param {string[]} minimumMandatoryFieldList
    * @author somnath.k
    */
    static async verifyMandatoryErrorMSGforSpecifiedList(DnyMandatoryFieldXpath: string, minimumMandatoryFieldList: string[]) {
        for (let fieldXpath of minimumMandatoryFieldList) {
            let mandatoryFieldXpath = DnyMandatoryFieldXpath;
            mandatoryFieldXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(fieldXpath.trim(), mandatoryFieldXpath);
            await z.seeElement(mandatoryFieldXpath);
        }
    }

    /**
    * To verify no mandatory error message for specified field list
    * @param {string} DnyMandatoryFieldXpath
    * @param {string[]} minimumMandatoryFieldList
    * @author somnath.k
    */
    static async verifyNoMandatoryErrorMSGforSpecifiedList(DnyMandatoryFieldXpath: string, minimumMandatoryFieldList: string[]) {
        for (let fieldXpath of minimumMandatoryFieldList) {
            let mandatoryFieldXpath = DnyMandatoryFieldXpath;
            mandatoryFieldXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(fieldXpath.trim(), mandatoryFieldXpath);
            await z.dontSeeElement(mandatoryFieldXpath);
        }
    }

    /**
    * To verify no mandatory error message for specified field list
    * @param {string[]} emailIDs
    * @param {string} uploadAttachment
    * @param {string} subjectVal
    * @param {string} mailBodyVal
    * @author somnath.k
    */
    static async fillMailPopupDetails(emailIDs: string[], uploadAttachment: string, subjectVal: string, mailBodyVal: string) {
        for (let emailId of emailIDs) {
            await this.enterMailIds(await AuroraLmt.getElement(auroraContractDetailsElements.EMAIL_TO_FIELD), emailId);
            await this.enterMailIds(await AuroraLmt.getElement(auroraContractDetailsElements.EMAIL_CC_FIELD), emailId);
            await this.enterMailIds(await AuroraLmt.getElement(auroraContractDetailsElements.EMAIL_BCC_FIELD), emailId);
        }
        await this.enterSubjectField(subjectVal);
        GlobalVariables.temporayArray = [];
        GlobalVariables.temporayArray = await CommonComponent.uploadMultipleDocuments(uploadAttachment, await AuroraLmt.getElement(basicInformarationElements.BROWSER_FILE), await AuroraLmt.getElement(basicInformarationElements.FILE_UPLOAD_PROGRESS_BAR));
        await this.entermMilBodyField(mailBodyVal);

    }

    /***************************************************AURORA-97 ENDS**************************************************************************** */


    /***************************************************AURORA-2975 Starts**************************************************************************** */

    /**
    * To verify newmly added cp in the searchbox
    * @param {string} cpSuggestionListXpath
    * @param {string} cpName
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyAddedCpinCpSearchBox(cpSuggestionListXpath: string, cpName: string) {
        let suggestionVal = await CommonComponent.retrieveUITextListBasedonIndexWithSingleXpath(cpSuggestionListXpath);
        return await suggestionVal.includes(cpName);
    }


    /***************************************************AURORA-2975 Ends**************************************************************************** */


    /********************************************************Services Ends**********************************************************/
}