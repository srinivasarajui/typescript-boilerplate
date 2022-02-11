"use strict";
//Rule: classname should be ts file name with first letter as caps
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuroraContractDetailsActions = void 0;
/**
 * The class is to perform aurora contract details action
 *
 * @author somnath.k
 *
 *
*/
const AuroraLmt_1 = require("../../../common/Data/AuroraLmt");
const CommonComponent_1 = require("./../../commonKeywords/CommonComponent");
const contractDetailsActions_1 = require("../../ContractDetails/contractDetailsActions");
const GlobalVariables_1 = require("../../../common/dataCreation/GlobalVariables");
const AuroraContractDetailsElements_1 = require("./AuroraContractDetailsElements");
const BasicInformationElements_1 = require("../UploadContract/BasicInformationElements");
const contractDetailsElements_1 = require("./../../ContractDetails/contractDetailsElements");
const logger_1 = require("../../../common/Logger/logger");
const z_1 = require("actionbot-wrapper/z");
const { I } = inject();
class AuroraContractDetailsActions {
    /********************************************************Sub Services Starts**********************************************************/
    /**
    * To click on save as draft button
    * @author somnath.k
    */
    static async clickonSaveasDraftBttn() {
        // GlobalVariables.contractNumber = "";
        // GlobalVariables.contractNumber = await AuroraContractDetailsActions.verifyNewContractNumberGenerated("CLM");
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.SAVE_AS_DRAFT_BTTN));
    }
    /**
    * To click on category dropdown box
    * @author somnath.k
    */
    static async clickonCategoryDropdownBox() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CONTRACT_CATEGORY_DROPDOWN));
    }
    /**
    * To click on contract category clear icon
    * @author somnath.k
    */
    static async clickonContractCategoryClearIcon() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CLEAR_CONTRACT_CATEGORY_VALUE));
    }
    /**
    * To get contract category value from dropdown
    * @return {string} contractcategoryValue
    * @author somnath.k
    */
    static async getContractCategoryDropdownVal() {
        return await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CONTRACT_CATEGORY_DROPDOWN));
    }
    /**
    * To get mandatory field error message count
    * @return {number} errorMessageCount
    * @author somnath.k
    */
    static async getMandatoryMessageCountForAllFields() {
        let allFieldsMandatoryErrorMsgXpathCunt = await CommonComponent_1.CommonComponent.grabNumberElements(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.ALL_FIELDS_MANDATORY_ERROR_MSG));
        return allFieldsMandatoryErrorMsgXpathCunt;
    }
    /**
    * To select particular dropdown from aurora contract detais page
    * @param {string} dropdownXpath
    * @return {number} errorMessageCount
    * @author somnath.k
    */
    static async selectParticularDropdownVal(dropdownXpath) {
        await z_1.z.scrollIntoView(dropdownXpath);
        let fieldListVal = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMON_DROPDOWN_LIST);
        let dropdownSearchBox = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMON_DROPDOWN_SEARCH_BOX);
        await CommonComponent_1.CommonComponent.searchRandomValueAndSelectinDropdownByClick(dropdownXpath, fieldListVal, dropdownSearchBox);
    }
    /**
    * To fill contract total value field
    * @param {string} contractTotalValue
    * @author somnath.k
    */
    static async fillContractTotalvalue(contractTotalValue) {
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CONTRACT_TOTAL_VALUE_FIELD), contractTotalValue);
    }
    /**
    * To click on folder dropdown box
    * @author somnath.k
    */
    static async clickonFolderDropdowBox() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.FOLDER_DROPDOWN));
    }
    /**
    * To click on contract details menu
    * @author somnath.k
    */
    static async clickonContractDetailsMenu() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CONTRACT_DETAILS_MENU));
    }
    /**
    * To click on save button
    * @author somnath.k
    */
    static async clickonSaveBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.SAVE_BUTTON));
        GlobalVariables_1.GlobalVariables.contractNumber = "";
        GlobalVariables_1.GlobalVariables.contractNumber = await AuroraContractDetailsActions.verifyNewContractNumberGenerated("CLM");
    }
    /**
    * To fill revision comments
    * @param {string} comments
    * @author somnath.k
    */
    static async fillandSubmitRevisionComment(comments) {
        if ((await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.REVISION_COMMENT_BOX)) != null) || ((await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.REVISION_COMMENT_BOX)) != undefined))) {
            await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.REVISION_COMMENT_BOX), comments);
            await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.REVISION_COMMENT_SUBMIT));
        }
    }
    /**
    * To fill comments box in publish contract popup
    * @param {string} comments
    * @author somnath.k
    */
    static async fillPublishPopupCommentBox(comments) {
        if ((await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMENT_MANDATORY_SYMBOL)) != null) || (await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMENT_MANDATORY_SYMBOL)) != undefined)) {
            await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMENT_BOX_PUBLISH_POPUP), comments);
        }
    }
    /**
    * To select no option for alerts in publish popup
    * @author somnath.k
    */
    static async selectNooptionforAlertinPublishPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.PUBLISH_POPUP_ALTER_NO_OPTION));
    }
    /**
    * To select yes option for alerts in publish popup
    * @author somnath.k
    */
    static async selectYesoptionforAlertinPublishPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.PUBLISH_POPUP_ALTER_YES_OPTION));
    }
    /**
    * To select no option for inform user in publish popup
    * @author somnath.k
    */
    static async selectNoOptionforInformUserinPublishPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.PUBLISH_POPUP_INFORM_NO_OPTION));
    }
    /**
    * To select Yes option for inform user in publish popup
    * @author somnath.k
    */
    static async selectYesOptionforInformUserinPublishPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.PUBLISH_POPUP_INFORM_YES_OPTION));
    }
    /**
    * To click on ok button from mandatory popup
    * @author somnath.k
    */
    static async clickonOkBttninFillallMandatoryPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.FILL_ALL_MANDATORY_POPUP_OK_BTTN));
    }
    /**
    * To fill contract source
    * @author somnath.k
    */
    static async searchAurthorContractSource() {
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CONTRACT_SOURCE), await AuroraLmt_1.AuroraLmt.getData("CONTRACT_SOURCE"));
    }
    /**
    * To close switch menu popup
    * @author somnath.k
    */
    static async closeSwitchMenuPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CLOSE_CHANGES_POPUP_SWITCH_MENU));
    }
    /**
    * To click on ok bttn in switch menu popup
    * @author somnath.k
    */
    static async clickOkBttnSwitchMenuPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.OK_BTTN_CHANGES_POPUP_SWITCH_MENU));
    }
    /**
    * To click on save as draft bttn
    * @author somnath.k
    */
    static async clickOnSaveAsDraftButton() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.SAVE_AS_DRAFT_BUTTON));
    }
    /**
    * To verify contract status in header
    * @param {string} contractStatusValue
    * @author somnath.k
    */
    static async verifyContractStatusinHeader(contractStatusValue) {
        let contractStatus = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_REPOSITORY_DRAFT_STATUS_HEADER);
        contractStatus = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(contractStatusValue, contractStatus);
        await z_1.z.waitForVisible(contractStatus);
        await z_1.z.seeElement(contractStatus);
    }
    /**
    * To verify contract status is not in header
    * @param {string} contractStatusValue
    * @author somnath.k
    */
    static async verifyContractStatusNotinHeader(contractStatusValue) {
        let contractStatus = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_REPOSITORY_DRAFT_STATUS_HEADER);
        contractStatus = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(contractStatusValue, contractStatus);
        await z_1.z.dontSeeElement(contractStatus);
    }
    //##################################################### AURORA-554 ###############################################################
    /**
    * To input valid cp
    * @author sowmyashree
    */
    static async inputValidCpName() {
        let cpName = await AuroraLmt_1.AuroraLmt.getData("CP_SEARCH");
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SEARCH_FIELD), cpName);
    }
    /**
    * To input invalid cp
    * @author sowmyashree
    */
    static async inputInvalidCpName() {
        let cpName = await CommonComponent_1.CommonComponent.randomString(16);
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SEARCH_FIELD), cpName);
    }
    /**
    * To select first cp from the autosuggestion
    * @author sowmyashree
    */
    static async selectFirstCpFromAutosugstn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_FIRST_OPTIN_AUTOSUGSTN));
    }
    /**
    * To click on cp address
    * @author sowmyashree
    */
    static async clickOnCpAddress() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SELECT_ADDRESS_DROPDOWN));
    }
    /**
    * To click on cp contact
    * @author sowmyashree
    */
    static async clickOnCpContact() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SELECT_CONTACT_DROPDOWN));
    }
    /**
    * To click on cp card options
    * @author sowmyashree
    */
    static async clickOnCardOptions() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_CARD_OPTIONS));
    }
    /**
    * To click on remove option
    * @author sowmyashree
    */
    static async clickOnRemvOptions() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_REMOVE_OPTION));
    }
    /**
    * To click on remove button
    * @author sowmyashree
    */
    static async clickOnRemvButton() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_REMOVE_BUTTON));
    }
    /**
   * To type and search again the cp
   * @author sowmyashree
   */
    static async inputCpSearchAgain() {
        let cpName = await AuroraLmt_1.AuroraLmt.getData("CP_SEARCH_AGAIN");
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SEARCH_FIELD), cpName);
    }
    /**
   * To click on cp card options
   * @author sowmyashree
   */
    static async clickOnMarkAsPrimary() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_MARK_AS_PRIMARY));
    }
    //###################################################### AURORA-554 Ends ##############################################################
    /**
   * To click on publish button
   * @author somnath.k
   */
    static async clickOnPublishBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.PUBLISH_BTTN));
    }
    /**
    * To click on ok button in unsaved data popup
    * @author somnath.k
    */
    static async clickonOKhBttninUnsavedDataPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.UPLOAD_FILE_ERRMSG_OK_BUTTON));
    }
    /**
    * To click on cancel button in the publish popup
    * @author somnath.k
    */
    static async clickonCancelBttninPublishPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.PUBLISH_POPUP_CANCEL_BTTN));
    }
    /**
    * To click on publish button in the publish popup
    * @author somnath.k
    */
    static async clickonPublishBttninPublishPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.PUBLISH_BTTN_IN_POPUP));
    }
    /**
    * To click on send mail button in the publish popup
    * @author somnath.k
    */
    static async clickonsendMailBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_SEND_BTTN));
    }
    /**
    * To enter email id in
    * @author somnath.k
    */
    static async enterMailIds(fieldXpath, emailId) {
        await z_1.z.fillField(fieldXpath, emailId);
        await z_1.z.pressKey('Tab');
    }
    /**
    * To remove mail id
    * @author somnath.k
    */
    static async removeMailID() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.REMOVE_EMAILID));
    }
    /**
    * To enter subject field value
    * @author somnath.k
    */
    static async enterSubjectField(subjectValue) {
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_SUBJECT_FIELD), subjectValue);
    }
    /**
    * To enter mail body
    * @author somnath.k
    */
    static async entermMilBodyField(mailBodyContent) {
        GlobalVariables_1.GlobalVariables.temporayString = "";
        GlobalVariables_1.GlobalVariables.temporayString = mailBodyContent;
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_BODY_FIELD), mailBodyContent);
    }
    /**
    * To click on remove attachment icon
    * @author somnath.k
    */
    static async clickonRemoveAttachmentIcon() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.REMOVE_ATTACHEMENT_ICON));
    }
    /**
    * To click on cancel button in the popup
    * @author somnath.k
    */
    static async clickonCancelBttnEmailPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CANCEL_EMAIL_POPUP));
    }
    /**
    * To click on skip mail button in the popup
    * @author somnath.k
    */
    static async clickonSkipMailBttnEmailPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.SKIP_EMAIL_BTTON_POPUP));
    }
    /**
    * To click on cancel button in skip mail popup
    * @author somnath.k
    */
    static async clickonCancelBttnSkipMailPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CANCEL_BTTN_SKIP_MAIL_POPUP));
    }
    /**
    * To click on create cp button
    * @author somnath.k
    */
    static async clickonCreateCpBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CREATE_CP_BTTN));
    }
    /**
    * To click on first cp type from the list
    * @author somnath.k
    */
    static async clickonFirstCPType() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.FIRST_CP_TYPE_LIST));
    }
    /**
    * To click on cancel button in the overlay
    * @author somnath.k
    */
    static async clickonOerlayCancelBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.OVERLAY_CANCEL_BTTN));
    }
    /**
    * To fill first field in the main form
    * @author somnath.k
    */
    static async fillFirstFieldinMainForm(value) {
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.MAIN_FORM_FIRST_FIELD), value);
    }
    /**
    * To click on submit button in the overlay
    * @author somnath.k
    */
    static async clickonOerlaySubmitBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.OVERLAY_SUBMIT_BTTN));
    }
    /**
    * To click on first header in the overlay
    * @author somnath.k
    */
    static async clickonOerlayFirstHeader() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.OVERLAY_FIRST_HEADER));
    }
    /**
    * To fill first field in the atl form
    * @author somnath.k
    */
    static async fillFirstFieldinATLForm(value) {
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.FIRST_FIELD_IN_ATL), value);
    }
    /********************************************************Sub Services Ends**********************************************************/
    /********************************************************Services Starts**********************************************************/
    /**
    * To verify aurora menus are disabled on the page
    * @param {String[]} disabledMenuList
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyAuroraMenusareDisabled(disabledMenuList) {
        let flag = true;
        let disabledMenuUITextList = await CommonComponent_1.CommonComponent.retrieveUITextListBasedonIndexWithSingleXpath(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CONTRACT_DISABLED_MENU_LIST));
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
    static async verifyContractTitleonUI(filledContractTitle) {
        let contractTitleXpath = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DYN_NORMAL_TEXTBOX_COMMON);
        contractTitleXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString("Contract Title", contractTitleXpath);
        let flag = filledContractTitle == await z_1.z.grabTextFrom(contractTitleXpath);
        return flag;
    }
    /**
    * To verify minimum mandatory error message on UI
    * @param {String[]} minimumMandatoryFieldList
    * @author somnath.k
    */
    static async verifyMinimumMandatoryErrorMSG(minimumMandatoryFieldList) {
        for (let i = 0; i < minimumMandatoryFieldList.length; i++) {
            let mandatoryFieldXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_SAVE_AS_DRAFT_ERROR_MSG);
            mandatoryFieldXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(minimumMandatoryFieldList[i].trim(), mandatoryFieldXpath);
            await z_1.z.seeElement(mandatoryFieldXpath);
        }
    }
    /**
    * To fill minimum mandatory fields required for save as draft
    * @author somnath.k
    */
    static async fillMinimumMandatoryDropDownFields() {
        let errorMetadata = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.MINIMUM_MANDATORY_DROPDOWN_FIELD_METADATA);
        let errorDropdownField = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.MINIMUM_MANDATORY_DROPDOWN_FIELDS);
        let errorDropdownFieldXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(errorDropdownField);
        let errorMetadataXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(errorMetadata);
        GlobalVariables_1.GlobalVariables.minimumMandatoryField.clear();
        for (let i = 0; i < errorDropdownFieldXpathList.length; i++) {
            let metadataName = await z_1.z.grabTextFrom(errorMetadataXpathList[i]);
            await z_1.z.click(errorDropdownFieldXpathList[i]);
            let metadataValue = await CommonComponent_1.CommonComponent.clickRandomValueFromList(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMON_DROPDOWN_LIST));
            GlobalVariables_1.GlobalVariables.minimumMandatoryField.set(metadataName.replace("*", "").trim(), metadataValue.trim());
        }
    }
    /**
    * To get and verify new aurora contract number in the header
    * @param {string} contractPrefixText
    * @return {string} newContractNo
    * @author somnath.k
    */
    static async verifyNewContractNumberGenerated(contractPrefixText) {
        await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTRACT_DETAILS_ERROR_TOASTER));
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.METADATA_VIEW_HEADER));
        await z_1.z.waitForVisible(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTRACT_NAME_METADATA));
        let newContractNumber = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(contractPrefixText, await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_NEW_CONTRACT_NUMBER_AURORA));
        let newContractNo = "";
        // await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(contractDetailsElements.CONTRACT_NAME_METADATA));
        await z_1.z.wait(3);
        if (await CommonComponent_1.CommonComponent.getHtmlElementData(newContractNumber) != null) {
            await z_1.z.seeElement(newContractNumber);
            newContractNo = await z_1.z.grabTextFrom(newContractNumber);
        }
        else {
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
    static async verifyContractEntryinTopGrid(recentSavedContractNumber) {
        let firstContractNumber = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.FIRST_CONTRACT_LINK));
        logger_1.logger.info("Contract Number from UI", firstContractNumber);
        logger_1.logger.info("Contract Number from UI", firstContractNumber);
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
    static async addValues(fieldValue, metadataInputCount, fieldType, clearFlag, dbTestDataFlag, dbTestData) {
        let fieldVal = "";
        //let fieldType = await z.grabAttributeFrom(metadataInputCount, "fieldtype");
        let fieldId = await z_1.z.grabAttributeFrom(metadataInputCount, "name");
        let classValue = "" + await z_1.z.grabAttributeFrom(metadataInputCount, "class");
        let classValueList = classValue.split(" ");
        // if (fieldType == "DROPDOWN" || fieldType == "MANY_TO_MANY") {
        if (fieldType == "DROPDOWN") {
            if (classValueList.includes("ng-select-disabled")) {
                logger_1.logger.info("Dropdown field is disabled on UI so cannot be filled,skipped");
            }
            else {
                try {
                    let dropdownXpath = metadataInputCount;
                    await z_1.z.scrollIntoView(dropdownXpath);
                    if (clearFlag == true) {
                        let dropdownClearIcon = dropdownXpath + "//span[@title='Clear all']";
                        logger_1.logger.info("dynamic doprdown clear icon", dropdownClearIcon);
                        if ((await CommonComponent_1.CommonComponent.getHtmlElementData(dropdownClearIcon) != null) || (await CommonComponent_1.CommonComponent.getHtmlElementData(dropdownClearIcon) != undefined)) {
                            await z_1.z.click(dropdownClearIcon);
                        }
                        else {
                            logger_1.logger.info("Dropdown doesnt have any value in the  and the xpath is", dropdownClearIcon);
                        }
                    }
                    else {
                        if (fieldId == "Contract_Status") {
                            let fieldListVal = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMON_DROPDOWN_LIST);
                            let dropdownSearchBox = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMON_DROPDOWN_SEARCH_BOX);
                            //passing value as inactive and will be handled later
                            let dropdownVal = "Inactive";
                            await CommonComponent_1.CommonComponent.searchValueAndSelectinDropdownByClick(dropdownXpath, fieldListVal, dropdownSearchBox, dropdownVal);
                        }
                        else if (fieldId == "AUTO_RENEW") {
                            let fieldListVal = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMON_DROPDOWN_LIST);
                            let dropdownSearchBox = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMON_DROPDOWN_SEARCH_BOX);
                            //passing value as inactive and will be handled later
                            let dropdownVal = "Single Term";
                            await CommonComponent_1.CommonComponent.searchValueAndSelectinDropdownByClick(dropdownXpath, fieldListVal, dropdownSearchBox, dropdownVal);
                        }
                        else {
                            let fieldListVal = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMON_DROPDOWN_LIST);
                            let dropdownSearchBox = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMON_DROPDOWN_SEARCH_BOX);
                            await CommonComponent_1.CommonComponent.searchRandomValueAndSelectinDropdownByClick(dropdownXpath, fieldListVal, dropdownSearchBox);
                        }
                    }
                    await z_1.z.waitForVisible(dropdownXpath);
                    fieldValue = await z_1.z.grabTextFrom(dropdownXpath);
                    logger_1.logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
                }
                catch (error) {
                    logger_1.logger.info("Failed while filling the dropdown value or dropdown is disabled on UI,skipped");
                }
            }
        }
        else if (fieldType == "STRING") {
            try {
                let stringXpath = metadataInputCount;
                if (await CommonComponent_1.CommonComponent.verifyFieldisReadonly(stringXpath) == true) {
                    logger_1.logger.info("Metadata is disabled on UI so value cannot be filled,Skipped");
                    fieldValue = "";
                }
                else {
                    await z_1.z.scrollIntoView(stringXpath);
                    if (clearFlag == true) {
                        await z_1.z.clearField(stringXpath);
                    }
                    else {
                        if (dbTestDataFlag == true) {
                            fieldVal = dbTestData;
                        }
                        else {
                            fieldVal = await CommonComponent_1.CommonComponent.randomString(16);
                        }
                        if (fieldId == "Contract_Title") {
                            await z_1.z.fillField(stringXpath, "Automation" + await CommonComponent_1.CommonComponent.getRandomNumber(1000000));
                        }
                        else {
                            if (fieldId == "Contract_Term") {
                                await z_1.z.fillField(stringXpath, "" + await CommonComponent_1.CommonComponent.getRandomNumber(10));
                            }
                            else {
                                await z_1.z.fillField(stringXpath, fieldVal);
                            }
                        }
                    }
                    await z_1.z.waitForVisible(stringXpath);
                    fieldValue = await CommonComponent_1.CommonComponent.getUITextUsingJavascript(stringXpath);
                    logger_1.logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
                }
            }
            catch (error) {
                logger_1.logger.info("Failed while filling the string value");
            }
        }
        else if (fieldType == "DECIMAL") {
            try {
                let decimalXpath = metadataInputCount;
                if (await CommonComponent_1.CommonComponent.verifyFieldisReadonly(decimalXpath) == true) {
                    logger_1.logger.info("Metadata is disabled on UI so value cannot be filled,Skipped");
                    fieldValue = "";
                }
                else {
                    await z_1.z.scrollIntoView(decimalXpath);
                    if (clearFlag == true) {
                        await z_1.z.clearField(decimalXpath);
                    }
                    else {
                        if (dbTestDataFlag == true) {
                            fieldVal = dbTestData;
                        }
                        else {
                            fieldVal = await CommonComponent_1.CommonComponent.getRandomNumber(10) + ".00";
                        }
                        await z_1.z.fillField(decimalXpath, fieldVal);
                    }
                }
                await z_1.z.waitForVisible(decimalXpath);
                fieldValue = await CommonComponent_1.CommonComponent.getUITextUsingJavascript(decimalXpath);
                logger_1.logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
            }
            catch (error) {
                logger_1.logger.info("Failed while filling the decimal value");
            }
        }
        else if (fieldType == "INTEGER") {
            try {
                let integerXpath = metadataInputCount;
                if (await CommonComponent_1.CommonComponent.verifyFieldisReadonly(integerXpath) == true) {
                    logger_1.logger.info("Metadata is disabled on UI so value cannot be filled,Skipped");
                    fieldValue = "";
                }
                else {
                    await z_1.z.scrollIntoView(integerXpath);
                    if (clearFlag == true) {
                        await z_1.z.clearField(integerXpath);
                    }
                    else {
                        if (fieldId != "AUTO_RENEWAL_PERIOD_MONTHS") {
                            if (dbTestDataFlag == true) {
                                fieldVal = dbTestData;
                            }
                            else {
                                fieldVal = await CommonComponent_1.CommonComponent.randomNumberString(2);
                            }
                            await z_1.z.fillField(integerXpath, fieldVal);
                        }
                        else {
                            if (dbTestDataFlag == true) {
                                fieldVal = dbTestData;
                            }
                            else {
                                fieldVal = await CommonComponent_1.CommonComponent.randomNumberString(1);
                            }
                            await z_1.z.fillField(integerXpath, fieldVal);
                        }
                    }
                }
                await z_1.z.waitForVisible(integerXpath);
                fieldValue = await CommonComponent_1.CommonComponent.getUITextUsingJavascript(integerXpath);
                logger_1.logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
            }
            catch (error) {
                logger_1.logger.info("Failed while filling the integer value");
            }
        }
        else if (fieldType == "DATE") {
            try {
                let dateField = metadataInputCount;
                await z_1.z.scrollIntoView(dateField);
                if (clearFlag == true) {
                    await z_1.z.clearField(dateField);
                }
                else {
                    if (dbTestDataFlag == true) {
                        fieldVal = dbTestData;
                        await z_1.z.fillField(dateField, fieldVal);
                    }
                    else {
                        if (fieldId == "Contract_Expiration_Date") {
                            logger_1.logger.info("Contract expiration date is already filled");
                        }
                        else {
                            await z_1.z.click(dateField);
                            if (fieldId == "Contract_Effective_Date") {
                                if ((await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.SELECTED_DAY)) != null) || (await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.SELECTED_DAY)) != undefined)) {
                                    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.SELECTED_DAY));
                                }
                                else {
                                    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CALENDAR_CURRENT_DAY));
                                }
                                // } else if (fieldId != "Contract_Renewal_Date") {
                            }
                            else if (fieldId != "Reminder_Date") {
                                // await CommonComponent.auroraRandomCombinedDateSelectionBasedonClick(await AuroraLmt.getElement(auroraContractDetailsElements.COMBINED_DAY_MONTH_YEAR), await AuroraLmt.getElement(auroraContractDetailsElements.CURRENT_RANGE_YEAR_MONTH_DAY_OPTION_LIST));
                                if ((await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.SELECTED_DAY)) != null) || (await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.SELECTED_DAY)) != undefined)) {
                                    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.SELECTED_DAY));
                                }
                                else {
                                    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CALENDAR_CURRENT_DAY));
                                }
                            }
                            else {
                                let contractExpiryDate = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CONTRACT_EXPIRATION_DATE_FIELD);
                                let contractExpiryDateValue = await z_1.z.grabAttributeFrom(contractExpiryDate, "value");
                                let splitedFormatList = contractExpiryDateValue.split("/");
                                let renewalDate = "";
                                // renewal date geneartion from contract expiry date
                                for (let i = 0; i < splitedFormatList.length; i++) {
                                    let stringCount = splitedFormatList[i].length;
                                    if (stringCount == 4) {
                                        let randomNo = await CommonComponent_1.CommonComponent.getRandomNumber(30);
                                        let modifyValue = parseInt(splitedFormatList[i]);
                                        modifyValue = modifyValue + randomNo;
                                        renewalDate = renewalDate + "" + modifyValue + "/";
                                    }
                                    else {
                                        renewalDate = renewalDate + "" + splitedFormatList[i] + "/";
                                    }
                                }
                                splitedFormatList = renewalDate.split("/");
                                renewalDate = splitedFormatList[0] + "/" + splitedFormatList[1] + "/" + splitedFormatList[2];
                                if (renewalDate != "") {
                                    await z_1.z.fillField(dateField, renewalDate);
                                }
                                else {
                                    await CommonComponent_1.CommonComponent.auroraRandomCombinedDateSelectionBasedonClick(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMBINED_DAY_MONTH_YEAR), await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CURRENT_RANGE_YEAR_MONTH_DAY_OPTION_LIST));
                                }
                            }
                        }
                    }
                }
                await z_1.z.waitForVisible(dateField);
                fieldValue = await CommonComponent_1.CommonComponent.getUITextUsingJavascript(dateField);
                logger_1.logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
            }
            catch (error) {
                logger_1.logger.info("Failed to fill date value in the contract");
            }
        }
        else if (fieldType == "TEXTAREA") {
            try {
                let textareaXpath = metadataInputCount;
                if (await CommonComponent_1.CommonComponent.verifyFieldisReadonly(textareaXpath) == true) {
                    logger_1.logger.info("Metadata is disabled on UI so value cannot be filled,Skipped");
                    fieldValue = "";
                }
                else {
                    await z_1.z.scrollIntoView(textareaXpath);
                    if (clearFlag == true) {
                        await z_1.z.clearField(textareaXpath);
                    }
                    else {
                        if (dbTestDataFlag == true) {
                            fieldVal = dbTestData;
                        }
                        else {
                            fieldVal = await CommonComponent_1.CommonComponent.randomString(40);
                        }
                        await z_1.z.fillField(textareaXpath, fieldVal);
                    }
                }
                await z_1.z.waitForVisible(textareaXpath);
                fieldValue = await CommonComponent_1.CommonComponent.getUITextUsingJavascript(textareaXpath);
                logger_1.logger.info(fieldId + " || " + fieldType + " || " + fieldVal);
            }
            catch (error) {
                logger_1.logger.info("Failed to fill textarea value in the contract");
            }
        }
        else if (fieldType == "FILE") {
            try {
                let fileXpath = metadataInputCount;
                await z_1.z.scrollIntoView(fileXpath);
                await z_1.z.attachFile(fileXpath, await AuroraLmt_1.AuroraLmt.getData("DOCX_FORMAT_DOCUMENT"));
                // let fileInputXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt.getElement(contractDetailsElements.DYN_STRINGFIELD));
                let fileInputXpath = metadataInputCount;
                await z_1.z.waitForVisible(fileInputXpath);
                fieldValue = await CommonComponent_1.CommonComponent.getUITextUsingJavascript(fileInputXpath);
                logger_1.logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
            }
            catch (error) {
                logger_1.logger.info("Failed to upload contract in the contract");
            }
        }
        else if (fieldType == "RADIO") {
            logger_1.logger.info("Manual case :Metadata field might be checkbox or radio button,Skipped");
        }
        else if (fieldType == "" || fieldType == null || fieldType == undefined) {
            logger_1.logger.info("Manual case :Metadata field might be checkbox or invalid,Skipped");
        }
        else {
            logger_1.logger.info("!!!!!!!!!!!!! Fieldtype not identified !!!!!!!!!!!!!!!!!!!");
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
    static async fillAuroraSubheaderDetails(headerValue, subHeaderName, fillOnlyMandatoryFlag, clearFieldFlag, dbTestDataFlag, dbTestData) {
        let dynamicMetadataXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_AURORA_METADATA_INPUT);
        logger_1.logger.info("*********************xpath dynamice metadata******************", dynamicMetadataXpath);
        if (dynamicMetadataXpath.includes("DynamicHeader")) {
            dynamicMetadataXpath = dynamicMetadataXpath.replace("DynamicHeader", headerValue);
        }
        else {
            logger_1.logger.info("Element DNY_AURORA_METADATA_INPUT doesnt have Keyword called TempValueHeader so fill details is failed");
        }
        logger_1.logger.info("*********************xpath after replaced dynamice metadata******************", dynamicMetadataXpath);
        let metadataInputCount = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonString(subHeaderName + " ", dynamicMetadataXpath);
        logger_1.logger.info("Number of Fields : " + metadataInputCount.length);
        for (let k = 0; k < metadataInputCount.length; k++) {
            let MetadatfieldId = await z_1.z.grabAttributeFrom(metadataInputCount[k], "name");
            if (MetadatfieldId == "Contract_Owner") {
                logger_1.logger.info("contract owner value is not filled,skipped");
                continue;
            }
            let metadataPresentonUI = await CommonComponent_1.CommonComponent.isEnabledByXpath(metadataInputCount[k]);
            let metadataDisabled = (await CommonComponent_1.CommonComponent.verifyFieldisDisabledOnUI(metadataInputCount[k]));
            let metadataHidden = (await CommonComponent_1.CommonComponent.verifyFieldisHidden(metadataInputCount[k]));
            if ((metadataPresentonUI == true && (metadataDisabled != true || metadataDisabled == null || metadataDisabled == undefined) && metadataHidden != true)) {
                if (await CommonComponent_1.CommonComponent.verifyFieldHasParticularAttribute(metadataInputCount[k]) == true) {
                    let fieldValue = "";
                    try {
                        let labelXpath = metadataInputCount[k] + "//ancestor::*/div[@for]";
                        let metadataLabel = await z_1.z.grabTextFrom(labelXpath);
                        let fieldType = await z_1.z.grabAttributeFrom(metadataInputCount[k], "fieldtype");
                        if (fieldType == "MANY_TO_MANY") {
                            logger_1.logger.info("Bu value is not filled,skipped");
                            continue;
                        }
                        let value;
                        if (fillOnlyMandatoryFlag == true) {
                            if (metadataLabel.includes("*")) {
                                logger_1.logger.info("********************In side fill only mandatory***********************");
                                value = await this.addValues(fieldValue, metadataInputCount[k], fieldType, clearFieldFlag, dbTestDataFlag, dbTestData);
                            }
                            else {
                                continue;
                            }
                        }
                        else {
                            value = await this.addValues(fieldValue, metadataInputCount[k], fieldType, clearFieldFlag, dbTestDataFlag, dbTestData);
                        }
                        metadataLabel = metadataLabel.replace("*", "").trim();
                        if (value.length == 0 || value == "" || value == null || value == undefined) {
                            let mapfieldValues = new Map();
                            mapfieldValues.set(metadataLabel, value);
                            GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandBlankValue.set(subHeaderName + "_" + k, mapfieldValues);
                        }
                        else {
                            let mapfieldValues = new Map();
                            mapfieldValues.set(metadataLabel, value);
                            GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue.set(subHeaderName + "_" + k, mapfieldValues);
                        }
                    }
                    catch (error) {
                        logger_1.logger.info("Field is either Hidden or disabled. Kindly refer screenshot");
                    }
                }
                else {
                    logger_1.logger.info("Metadata is not having fieldtype attribute,skipped");
                }
            }
            else {
                logger_1.logger.info("Metadata is not available in the contract details page,skipped");
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
    static async fillAuroraContractDetailsInfo(fillOnlyMandatoryFlag, clearFieldFlag, dbTestDataFlag, dbTestData) {
        logger_1.logger.info("In process of filling Contract Detail page ");
        try {
            let headerList = await CommonComponent_1.CommonComponent.retrieveUITextListBasedonIndexWithSingleXpath(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CONTRACT_DETAILS_HEADER_LIST));
            let headerXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CONTRACT_DETAILS_HEADER_LIST));
            logger_1.logger.info("Number of Headers : " + headerList.length);
            let particularHeader;
            if (GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue.size > 0) {
                GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue.clear();
                logger_1.logger.info("Removed previous contract details data from map");
            }
            if (GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandBlankValue.size > 0) {
                GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandBlankValue.clear();
                logger_1.logger.info("Removed previous contract details data from blank map");
            }
            for (let i = 0; i < headerList.length; i++) {
                logger_1.logger.info("Header number " + (i + 1) + " : " + headerList[i]);
                let headerName = headerList[i];
                if (headerName.includes("CP")) {
                    continue;
                }
                // commented below code bcoz Contract header is removed inside the form
                particularHeader = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_AURORA_PARTICULAR_HEADER);
                particularHeader = particularHeader.replace("TempValue", "" + headerName);
                await z_1.z.click(headerXpathList[i]);
                await z_1.z.scrollIntoView(particularHeader);
                // Changed above code to below one
                //await z.scrollIntoView(headerXpathList[i] as string);
                // await z.click(headerXpathList[i] as string);
                let subHeaderList = await CommonComponent_1.CommonComponent.retrieveUITextListBasedonString(headerName, await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_AURORA_SUBHEADER_LIST));
                logger_1.logger.info("Number of Sub Headers : " + subHeaderList.length);
                for (let j = 0; j < subHeaderList.length; j++) {
                    let subHeaderName = subHeaderList[j];
                    if (subHeaderName.includes("*")) {
                        subHeaderName = subHeaderName.replace("*", "");
                    }
                    logger_1.logger.info("SubHeader number " + (j + 1) + " : " + subHeaderName);
                    try {
                        /**
                         * Input contract meta field values
                         */
                        await this.fillAuroraSubheaderDetails(headerName, subHeaderName, fillOnlyMandatoryFlag, clearFieldFlag, dbTestDataFlag, dbTestData);
                    }
                    catch (error) {
                        logger_1.logger.info("No Fields identified under - " + subHeaderName);
                    }
                }
            }
        }
        catch (error) {
            logger_1.logger.info("Failed to fill all the fields in the contract details page");
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
    static async fillorClearSpecifiedFieldType(specifiedFieldTye, clearFieldFlag, dbTestDataFlag, dbTestData) {
        logger_1.logger.info("In process of filling or modifying Contract Detail page for type ", specifiedFieldTye);
        try {
            let headerList = await CommonComponent_1.CommonComponent.retrieveUITextListBasedonIndexWithSingleXpath(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CONTRACT_DETAILS_HEADER_LIST));
            logger_1.logger.info("Number of Headers : " + headerList.length);
            let particularHeader;
            if (GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue.size > 0) {
                GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue.clear();
                logger_1.logger.info("Removed previous contract details data from map");
            }
            if (GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandBlankValue.size > 0) {
                GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandBlankValue.clear();
                logger_1.logger.info("Removed previous contract details data from blank map");
            }
            for (let i = 0; i < headerList.length; i++) {
                logger_1.logger.info("Header number " + (i + 1) + " : " + headerList[i]);
                let headerName = headerList[i];
                if (headerName.includes("CP")) {
                    continue;
                }
                particularHeader = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_AURORA_PARTICULAR_HEADER);
                particularHeader = particularHeader.replace("TempValue", "" + headerName);
                await z_1.z.scrollIntoView(particularHeader);
                let subHeaderList = await CommonComponent_1.CommonComponent.retrieveUITextListBasedonString(headerName, await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_AURORA_SUBHEADER_LIST));
                logger_1.logger.info("Number of Sub Headers : " + subHeaderList.length);
                for (let j = 0; j < subHeaderList.length; j++) {
                    let subHeaderName = subHeaderList[j];
                    if (subHeaderName.includes("*")) {
                        subHeaderName = subHeaderName.replace("*", "");
                    }
                    logger_1.logger.info("SubHeader number " + (j + 1) + " : " + subHeaderName);
                    try {
                        /**
                         * Input contract meta field values
                         */
                        await this.fillAuroraSubheaderDetailSpecifiedType(headerName, subHeaderName, specifiedFieldTye, clearFieldFlag, dbTestDataFlag, dbTestData);
                    }
                    catch (error) {
                        logger_1.logger.info("No Fields identified under - " + subHeaderName);
                    }
                }
            }
        }
        catch (error) {
            logger_1.logger.info("Failed to fill all the fields in the contract details page");
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
    static async fillAuroraSubheaderDetailSpecifiedType(headerValue, subHeaderName, specifiedFieldTye, clearFieldFlag, dbTestDataFlag, dbTestData) {
        let dynamicMetadataXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DNY_AURORA_METADATA_INPUT);
        logger_1.logger.info("*********************xpath dynamice metadata******************", dynamicMetadataXpath);
        if (dynamicMetadataXpath.includes("DynamicHeader")) {
            dynamicMetadataXpath = dynamicMetadataXpath.replace("DynamicHeader", headerValue);
        }
        else {
            logger_1.logger.info("Element DNY_AURORA_METADATA_INPUT doesnt have Keyword called TempValueHeader so fill details is failed");
        }
        let metadataInputCount = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonString(subHeaderName + " ", dynamicMetadataXpath);
        logger_1.logger.info("Number of Fields : " + metadataInputCount.length);
        for (let k = 0; k < metadataInputCount.length; k++) {
            if ((await CommonComponent_1.CommonComponent.getHtmlElementData(metadataInputCount[k]) == null) || ((await CommonComponent_1.CommonComponent.getHtmlElementData(metadataInputCount[k]) == undefined))) {
                logger_1.logger.info("Metadata is not present in the UI and the xpath is", metadataInputCount[k]);
                continue;
            }
            let MetadatfieldId = await z_1.z.grabAttributeFrom(metadataInputCount[k], "name");
            if (MetadatfieldId == "Contract_Owner") {
                logger_1.logger.info("contract owner value is not filled,skipped");
                continue;
            }
            let metadataPresentonUI = await CommonComponent_1.CommonComponent.isEnabledByXpath(metadataInputCount[k]);
            let metadataDisabled = (await CommonComponent_1.CommonComponent.verifyFieldisDisabledOnUI(metadataInputCount[k]));
            let metadataHidden = (await CommonComponent_1.CommonComponent.verifyFieldisHidden(metadataInputCount[k]));
            if ((metadataPresentonUI == true && (metadataDisabled != true || metadataDisabled == null || metadataDisabled == undefined) && metadataHidden != true)) {
                if (await CommonComponent_1.CommonComponent.verifyFieldHasParticularAttribute(metadataInputCount[k]) == true) {
                    let fieldValue = "";
                    try {
                        let labelXpath = metadataInputCount[k] + "//ancestor::*/span[@for]";
                        let metadataLabel = await z_1.z.grabTextFrom(labelXpath);
                        let fieldType = await z_1.z.grabAttributeFrom(metadataInputCount[k], "fieldtype");
                        if (fieldType == "MANY_TO_MANY") {
                            logger_1.logger.info("Bu value is not filled,skipped");
                            continue;
                        }
                        let value;
                        if (specifiedFieldTye == fieldType) {
                            value = await this.addValues(fieldValue, metadataInputCount[k], fieldType, clearFieldFlag, dbTestDataFlag, dbTestData);
                        }
                        else {
                            continue;
                        }
                        metadataLabel = metadataLabel.replace("*", "").trim();
                        if (value.length == 0 || value == "" || value == null || value == undefined) {
                            let mapfieldValues = new Map();
                            mapfieldValues.set(metadataLabel, value);
                            GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandBlankValue.set(subHeaderName + "_" + k, mapfieldValues);
                        }
                        else {
                            let mapfieldValues = new Map();
                            mapfieldValues.set(metadataLabel, value);
                            GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue.set(subHeaderName + "_" + k, mapfieldValues);
                        }
                    }
                    catch (error) {
                        logger_1.logger.info("Field is either Hidden or disabled. Kindly refer screenshot");
                    }
                }
                else {
                    logger_1.logger.info("Metadata is not having fieldtype attribute,skipped");
                }
            }
            else {
                logger_1.logger.info("Metadata is not available in the contract details page,skipped");
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
        let allFieldsMandatorySymbolXpathCount = await CommonComponent_1.CommonComponent.grabNumberElements(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.ALL_FIELDS_MANDATORY_SYMBOL_BASEDON_ERROR_MSG));
        let allFieldsMandatoryErrorMsgXpathCunt = await CommonComponent_1.CommonComponent.grabNumberElements(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.ALL_FIELDS_MANDATORY_ERROR_MSG));
        let flag = allFieldsMandatorySymbolXpathCount == allFieldsMandatoryErrorMsgXpathCunt;
        return flag;
    }
    /*
    * To check the digital document is pdf or not
    *
    *
    */
    static async documentPdfOrNot(statusIndex) {
        let flag = false;
        for (let i = 3; i <= 15; i++) {
            let document = await CommonComponent_1.CommonComponent.getUITextUsingJavascript(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.DIGITAL_CONTRACT_DOCUMENT));
            let documentExtensionFromDigiDoc = await document.split(".");
            let documentExtension = await documentExtensionFromDigiDoc[1];
            let pdfExtension = "pdf";
            if (documentExtension == pdfExtension) {
                flag = true;
                break;
            }
            else {
                await contractDetailsActions_1.ContractDetailsActions.clickOnRepoContractCloseIcon();
                await CommonComponent_1.CommonComponent.gridDropdownSelectionBasedonValue(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.REPO_STATUS_DROPDOWN), await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTRACT_STATUS_OPTION_LIST), statusIndex);
                let contractLink = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CONTRACT_LINK);
                if (contractLink.includes("TempCount")) {
                    contractLink = contractLink.replace("TempCount", "" + i);
                    await z_1.z.click(contractLink);
                    await contractDetailsActions_1.ContractDetailsActions.clickOnRepoContractDetailsTab();
                }
                else {
                    logger_1.logger.info("Xpath does not contains TempCount keyword");
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
        let flag = false;
        let cpListXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SEARCH_LIST);
        let cpSearchText = await AuroraLmt_1.AuroraLmt.getData("CP_SEARCH");
        let cpSearchResult = await CommonComponent_1.CommonComponent.retrieveUITextListBasedonIndexWithSingleXpath(cpListXpath);
        logger_1.logger.info("Display " + cpSearchResult);
        logger_1.logger.info("Display " + cpSearchText);
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
        let cpTypeDropdownXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_TYPE_DROPDOWN);
        let cpTypeListXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_TYPE_LIST);
        await CommonComponent_1.CommonComponent.clickRandomValueFromDropdownBasedonOptionXpath(cpTypeDropdownXpath, cpTypeListXpath);
    }
    /**
    * To select cp address
    * @author sowmyashree
    */
    static async selectCpAddress() {
        let cpAddressDrpdwn = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SELECT_ADDRESS_DROPDOWN);
        let cpAddressListXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SELECT_ADDRESS);
        let cpAddressValueList = await CommonComponent_1.CommonComponent.retrieveUITextListBasedonIndexWithSingleXpathusingjavascript(cpAddressListXpath);
        let count = cpAddressValueList.length;
        await z_1.z.selectOption(cpAddressDrpdwn, cpAddressValueList[count - 1]);
        // await CommonComponent.gridDropdownSelectionBasedonRandomValue(cpAddressDrpdwn,cpAddressListXpath);
    }
    /**
   * To select cp contact
   * @author sowmyashree
   */
    static async selectCpContact() {
        let cpContactDrpdwn = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SELECT_CONTACT_DROPDOWN);
        let cpAddressListXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SELECT_CONTACT);
        let cpAddressValueList = await CommonComponent_1.CommonComponent.retrieveUITextListBasedonIndexWithSingleXpathusingjavascript(cpAddressListXpath);
        let count = cpAddressValueList.length;
        await z_1.z.selectOption(cpContactDrpdwn, cpAddressValueList[count - 1]);
        // await CommonComponent.gridDropdownSelectionBasedonRandomValue(cpContactDrpdwn,cpAddressListXpath);
    }
    /**
    * To check the selected cp address in cp card
    * @author sowmyashree
    */
    static async checkSelectedCpAddrsInCpCard() {
        let cpAddressDrpdwn = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SELECT_ADDRESS_DROPDOWN);
        let cpAddressText = await z_1.z.grabTextFrom(cpAddressDrpdwn);
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
        let cpCntctDrpdwn = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SELECT_CONTACT_DROPDOWN);
        let cpAddressText = await await z_1.z.grabTextFrom(cpCntctDrpdwn);
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
        await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SEARCH_LOADING));
        let xpathCpSearchList = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SEARCH_LIST);
        xpathCpSearchList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(xpathCpSearchList);
        let cpSearchFieldXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SEARCH_FIELD);
        for (let i = 0; i < xpathCpSearchList.length; i++) {
            await z_1.z.clearField(cpSearchFieldXpath);
            await AuroraContractDetailsActions.inputValidCpName();
            await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SEARCH_LOADING));
            await z_1.z.click(xpathCpSearchList[i]);
        }
    }
    /**
    * To verify ten cp cards
    * @author sowmyashree
    */
    static async verifyTenCpCards() {
        let flag = false;
        let tenCpCardXpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_TEN_CPCARDS);
        let cpCardsXpath = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(tenCpCardXpath);
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
        let cpName = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_NAME_ON_CPCARD));
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_SEARCH_FIELD), cpName);
    }
    /**
    * To check added cp is disabled in the search list
    * @author sowmyashree
    */
    static async verifyCpDisabled() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_ADDED_TICK));
    }
    /**
    * To check added cp is disabled in the search list
    * @author sowmyashree
    */
    static async verifyCpTypeIsDisplayed() {
        let defaultCpType = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_TYPE_DROPDOWN));
        let actual_Result = defaultCpType == "" || defaultCpType != null || defaultCpType != undefined || defaultCpType.length === 0;
        z_1.z.assertEqual(true, actual_Result);
    }
    /**
   * To check all available cp type
   * @author sowmyashree
   */
    static async viewAllCpType() {
        let flag = false;
        let xpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_TYPE_LIST);
        let noOfCpType = xpath.length;
        if (noOfCpType > 0) {
            logger_1.logger.info("CP Types are available");
            flag = true;
        }
        else {
            logger_1.logger.info("No CP Type is available");
            flag = false;
        }
        return flag;
    }
    /**
    * To check all available cp type
    * @author sowmyashree
    */
    static async checkCpInTheContract() {
        let xpath = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_CARD_LIST);
        let elementCount = await CommonComponent_1.CommonComponent.grabNumberElements(xpath);
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
        let contractingPartiesXpath = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CP_CARDS));
        logger_1.logger.info(contractingPartiesXpath.length);
        let tenRestrictingPartyXpath = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.MSR_COMMON_LINKS_XPATH));
        logger_1.logger.info(tenRestrictingPartyXpath.length);
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
    static async clearAllFieldsValEmailPopup(allFieldsXpath) {
        let allFieldsXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(allFieldsXpath);
        for (let fieldXpath of allFieldsXpathList) {
            await z_1.z.clearField(fieldXpath);
        }
    }
    /**
    * To verify mandatory error message for specified field list
    * @param {string} DnyMandatoryFieldXpath
    * @param {string[]} minimumMandatoryFieldList
    * @author somnath.k
    */
    static async verifyMandatoryErrorMSGforSpecifiedList(DnyMandatoryFieldXpath, minimumMandatoryFieldList) {
        for (let fieldXpath of minimumMandatoryFieldList) {
            let mandatoryFieldXpath = DnyMandatoryFieldXpath;
            mandatoryFieldXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(fieldXpath.trim(), mandatoryFieldXpath);
            await z_1.z.seeElement(mandatoryFieldXpath);
        }
    }
    /**
    * To verify no mandatory error message for specified field list
    * @param {string} DnyMandatoryFieldXpath
    * @param {string[]} minimumMandatoryFieldList
    * @author somnath.k
    */
    static async verifyNoMandatoryErrorMSGforSpecifiedList(DnyMandatoryFieldXpath, minimumMandatoryFieldList) {
        for (let fieldXpath of minimumMandatoryFieldList) {
            let mandatoryFieldXpath = DnyMandatoryFieldXpath;
            mandatoryFieldXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(fieldXpath.trim(), mandatoryFieldXpath);
            await z_1.z.dontSeeElement(mandatoryFieldXpath);
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
    static async fillMailPopupDetails(emailIDs, uploadAttachment, subjectVal, mailBodyVal) {
        for (let emailId of emailIDs) {
            await this.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_TO_FIELD), emailId);
            await this.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_CC_FIELD), emailId);
            await this.enterMailIds(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.EMAIL_BCC_FIELD), emailId);
        }
        await this.enterSubjectField(subjectVal);
        GlobalVariables_1.GlobalVariables.temporayArray = [];
        GlobalVariables_1.GlobalVariables.temporayArray = await CommonComponent_1.CommonComponent.uploadMultipleDocuments(uploadAttachment, await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BROWSER_FILE), await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.FILE_UPLOAD_PROGRESS_BAR));
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
    static async verifyAddedCpinCpSearchBox(cpSuggestionListXpath, cpName) {
        let suggestionVal = await CommonComponent_1.CommonComponent.retrieveUITextListBasedonIndexWithSingleXpath(cpSuggestionListXpath);
        return await suggestionVal.includes(cpName);
    }
}
exports.AuroraContractDetailsActions = AuroraContractDetailsActions;
