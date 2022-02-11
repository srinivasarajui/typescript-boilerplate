"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicInformationActions = void 0;
const AuroraLmt_1 = require("../../../common/Data/AuroraLmt");
const CommonComponent_1 = require("./../../commonKeywords/CommonComponent");
const BasicInformationElements_1 = require("./BasicInformationElements");
const contractDetailsElements_1 = require("./../../ContractDetails/contractDetailsElements");
const logger_1 = require("../../../common/Logger/logger");
/**
 * The class is to perform basic information actions
 *
 * @author somnath.k
 *
 *
*/
const z_1 = require("actionbot-wrapper/z");
class BasicInformationActions {
    /*************************************************Sub Services Starts*************************************************************/
    /**
    * To click on upload contract in aurora button
    * @author somnath.k
    */
    static async clickonUploadContractinAuroraBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.UPLOAD_CONTRACT_IN_AURORA_BTTN));
    }
    /**
    * To click on aurora continue button
    * @author somnath.k
    */
    static async clickonContinueBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.CONTINUE_BTTN));
    }
    /**
    * To click on particular dropdown field
    * @author somnath.k
    */
    static async clickonParticularDropdownField(dropdownNumber) {
        let dropdownXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DYNAMIC_DROPDOWNS));
        await z_1.z.click(dropdownXpathList[dropdownNumber]);
    }
    /**
    * To click on clear all bu icon
    * @author somnath.k
    */
    static async clickonClearallBUIcon() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.CLEAR_ALL_BU_ICON));
    }
    /**
    * To click on ok button in error popup
    * @author somnath.k
    */
    static async clickOnErrorPopupOkBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.ERROR_POPUP_OK_BUTTON));
    }
    /**
    * To click on cancel button in replace popup
    * @author somnath.k
    */
    static async clickOnCancelBttnInReplacePopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.CANCEL_BUTTON_IN_REPLACE_POPUP));
    }
    /**
    * To click on replace button in replace popup
    * @author somnath.k
    */
    static async clickOnReplaceBttnInPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.REPLACE_BUTTON_IN_POPUP));
    }
    /**
    * To click on cancel button in drag and drop box
    * @author somnath.k
    */
    static async clickOnCancelBttnInDragAndDropBox() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.CANCEL_BTTN_IN_DRAG_AND_DROP_BOX));
    }
    /**
    * To click on yes button in the cancel popup
    * @author somnath.k
    */
    static async clickOnCancelBttnInPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.YES_BTTN_IN_POPUP));
    }
    /**
    * To click on cancel button in new contract page
    * @author somnath.k
    */
    static async clickonCancelBttninNewContract() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.CANCEL_BTTN_IN_NEW_CONTRACT));
    }
    /**
    * To click on discard button in popup
    * @author somnath.k
    */
    static async clickonDiscardBttninPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DISCARD_BUTTON_IN_DISCARD_POPUP));
    }
    /**
    * To click on cancel button in popup
    * @author somnath.k
    */
    static async clickonCancelBttninPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.CANCEL_BTTN_IN_DISCARD_POPUP));
    }
    /**
    * To click on logout bttn
    * @author somnath.k
    */
    static async clickonLogoutBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.LOGOUT_BTTN));
    }
    /*************************************************Sub Services Ends**************************************************************/
    /*************************************************Services Starts******************************************************************/
    /**
    * To get all basic information details
    * @param {Map<String, String[]>} basicInformationDetails
    * @author somnath.k
    */
    static async getAllBasicInformation(basicInformationDetails) {
        let count = 0;
        let allFieldsMetadataLabelXpath = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.ALL_FIELDS_METADATA_LABEL));
        let allFieldsXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.ALL_FIELDS_DATA));
        for (let i = 0; i < allFieldsXpathList.length; i++) {
            count++;
            let allFieldsData = [];
            let metadataLabelName = await z_1.z.grabTextFrom(allFieldsMetadataLabelXpath[i]);
            let metadataValue = await z_1.z.grabTextFrom(allFieldsXpathList[i]);
            if (metadataValue == "" || metadataValue == null || metadataValue == undefined) {
                metadataValue = "";
            }
            allFieldsData = [metadataLabelName, metadataValue];
            basicInformationDetails.set("row" + count, allFieldsData);
            logger_1.logger.info("values in map", basicInformationDetails);
        }
    }
    /**
    * To verify all fields value in new contract page
    * @param {Map<String, String[]>} basicInformationDetails
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyAllFieldsValues(basicInformationDetails) {
        let flag = false;
        let currentbasicInformation = new Map();
        await this.getAllBasicInformation(currentbasicInformation);
        for (let map1Entry of basicInformationDetails.values()) {
            for (let map2Entry of currentbasicInformation.values()) {
                if ((map1Entry[0] == map2Entry[0]) && (map1Entry[0] == map2Entry[0])) {
                    flag = true;
                    break;
                }
                else {
                    flag = false;
                }
            }
            if (flag == false) {
                break;
            }
        }
        return flag;
    }
    // static async verifyAllFieldsareBlank(allFieldsData:String[]){
    //     let flag=false;
    //     if(allFieldsData.length ==0){
    //         logger.info("All fields value are blank after landed on new contract page");
    //         flag=true;
    //     }else{
    //         for(let i=0;i<allFieldsData.length;i++){
    //             if(allFieldsData[i] =="" || allFieldsData[i] == null || allFieldsData[i]==undefined){
    //                 flag=true;
    //             }else{
    //                 flag=false;
    //                 break;
    //             }
    //         }
    //     }
    //     return flag;
    // }
    /**
    * To verify all fields value are blank
    * @param {Map<String, String[]>} basicInformationDetails
    * @param {number} startField
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyAllFieldsareBlank(basicInformationDetails, startField) {
        let flag = false;
        let count = 0;
        if (basicInformationDetails.size == 0) {
            logger_1.logger.info("All fields value are blank after landed on new contract page");
            flag = true;
        }
        else {
            for (let fieldValue of basicInformationDetails.values()) {
                count++;
                if (count <= startField) {
                    continue;
                }
                if (fieldValue[1] == "" || fieldValue[1] == null || fieldValue[1] == undefined) {
                    flag = true;
                }
                else {
                    flag = false;
                    break;
                }
            }
        }
        return flag;
    }
    /**
    * To check all fields are mandatory
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyAllFieldsareMandatory() {
        let flag = false;
        let allFieldsMandatoryXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.ALL_FIELDS_MANDATORY_SYMBOL));
        for (let i = 0; i < allFieldsMandatoryXpathList.length; i++) {
            if (await CommonComponent_1.CommonComponent.isEnabledByXpath(allFieldsMandatoryXpathList[i])) {
                flag = true;
            }
            else {
                flag = false;
                break;
            }
        }
        return flag;
    }
    /**
    * To check all fields mandatory message
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyAllFieldsMandatoryMsg() {
        let flag = false;
        let allFieldsMandatoryXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.ALL_FIELDS_MANDATORY_MSG));
        for (let i = 0; i < allFieldsMandatoryXpathList.length; i++) {
            if ((await CommonComponent_1.CommonComponent.getHtmlElementData(allFieldsMandatoryXpathList[i]) != null) || (await CommonComponent_1.CommonComponent.getHtmlElementData(allFieldsMandatoryXpathList[i]) != undefined)) {
                flag = true;
            }
            else {
                flag = false;
                break;
            }
        }
        return flag;
    }
    /**
    * To check each field madatory message
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyEveryFieldMandatoryMsgbyIndividual() {
        let flag = false;
        await this.clickonContinueBttn();
        let allFieldsMandatoryXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.ALL_FIELDS_MANDATORY_MSG));
        let dropdownXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DYNAMIC_DROPDOWNS));
        for (let i = 0; i < dropdownXpathList.length; i++) {
            await this.selectValueInParticularDropdownField(0);
            for (let j = 0; j < dropdownXpathList.length; j++) {
                if (i == j) {
                    continue;
                }
                else {
                    if (await z_1.z.grabAttributeFrom(dropdownXpathList[i], "formcontrolname") == "contractBU") {
                        await z_1.z.click(dropdownXpathList[j]);
                        await CommonComponent_1.CommonComponent.clickRandomValueFromList(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BU_FIELD_OPTION_LIST));
                    }
                    else {
                        await z_1.z.click(dropdownXpathList[j]);
                        await CommonComponent_1.CommonComponent.clickRandomValueFromList(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DYNAMIC_DROPDOWN_OPTION_LIST));
                    }
                }
            }
            await this.clickonContinueBttn();
            if (await CommonComponent_1.CommonComponent.isEnabledByXpath(allFieldsMandatoryXpathList[i])) {
                flag = true;
                await z_1.z.switchToPreviousTab();
                await z_1.z.closeOtherTabs();
                await BasicInformationActions.clickonUploadContractinAuroraBttn();
            }
            else {
                flag = false;
                break;
            }
        }
        return flag;
    }
    /**
    * To fill all the basic information fields
    * @author somnath.k
    */
    static async fillAllBasicInformationFields() {
        let dropdownXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DYNAMIC_DROPDOWNS));
        for (let i = 0; i < dropdownXpathList.length; i++) {
            if (await z_1.z.grabAttributeFrom(dropdownXpathList[i], "formcontrolname") == "contractBU") {
                await z_1.z.click(dropdownXpathList[i]);
                await z_1.z.waitForVisible(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.SEARCH_BOX_INSIDE_DROPDOWN));
                await CommonComponent_1.CommonComponent.clickRandomValueFromList(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BU_FIELD_OPTION_LIST));
                await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.OVERVIEW_HEADER));
            }
            else {
                await z_1.z.click(dropdownXpathList[i]);
                await z_1.z.waitForVisible(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.SEARCH_BOX_INSIDE_DROPDOWN));
                await CommonComponent_1.CommonComponent.clickRandomValueFromList(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DYNAMIC_DROPDOWN_OPTION_LIST));
                await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.OVERVIEW_HEADER));
            }
        }
    }
    /**
    * To select value in the particular dropdown field
    * @param {number} dropdownNumber
    * @return {number} noofValuesinDropdown
    * @author somnath.k
    */
    static async selectValueInParticularDropdownField(dropdownNumber) {
        let noofValuesinDropdown = 0;
        let dropdownXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DYNAMIC_DROPDOWNS));
        let dropdownValue = await z_1.z.grabTextFrom(dropdownXpathList[dropdownNumber]);
        if ((dropdownValue == "" || dropdownValue == null || dropdownValue == undefined)) {
            if (await z_1.z.grabAttributeFrom(dropdownXpathList[dropdownNumber], "formcontrolname") == "contractBU") {
                await z_1.z.click(dropdownXpathList[dropdownNumber]);
                noofValuesinDropdown = await CommonComponent_1.CommonComponent.clickRandomValueFromList(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BU_FIELD_OPTION_LIST));
            }
            else {
                await z_1.z.click(dropdownXpathList[dropdownNumber]);
                noofValuesinDropdown = await CommonComponent_1.CommonComponent.clickRandomValueFromList(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DYNAMIC_DROPDOWN_OPTION_LIST));
            }
        }
        else {
            if (await z_1.z.grabAttributeFrom(dropdownXpathList[dropdownNumber], "formcontrolname") == "contractBU") {
                await z_1.z.click(dropdownXpathList[dropdownNumber]);
                noofValuesinDropdown = await CommonComponent_1.CommonComponent.clickRandomUniqueValueFromList(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BU_FIELD_OPTION_LIST), dropdownValue);
            }
            else {
                await z_1.z.click(dropdownXpathList[dropdownNumber]);
                noofValuesinDropdown = await CommonComponent_1.CommonComponent.clickRandomUniqueValueFromList(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DYNAMIC_DROPDOWN_OPTION_LIST), dropdownValue);
            }
        }
        return noofValuesinDropdown;
    }
    /**
    * To verify other fields is not having no values except type
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyExceptTypeFieldOtherFieldNovalues() {
        let flag = false;
        let dropdownXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DYNAMIC_DROPDOWNS));
        for (let i = 0; i < dropdownXpathList.length; i++) {
            if (i == 0) {
                continue;
            }
            await z_1.z.click(dropdownXpathList[i]);
            if ((await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.NO_ITEMS_FOUND_MSG)) != null) || ((await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.NO_ITEMS_FOUND_MSG)) != undefined))) {
                flag = true;
            }
            else {
                flag = false;
                break;
            }
            await z_1.z.click(dropdownXpathList[i]);
        }
        return flag;
    }
    /**
    * To verify other fields is not having no values except type and subtype
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyExceptTypeandSubtypeFieldOtherFieldNovalues() {
        let flag = false;
        let dropdownXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DYNAMIC_DROPDOWNS));
        for (let i = 0; i < dropdownXpathList.length; i++) {
            if (i == 0 || i == 1) {
                continue;
            }
            await z_1.z.click(dropdownXpathList[i]);
            if ((await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.NO_ITEMS_FOUND_MSG)) != null) || ((await CommonComponent_1.CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.NO_ITEMS_FOUND_MSG)) != undefined))) {
                flag = true;
            }
            else {
                flag = false;
                break;
            }
            await z_1.z.click(dropdownXpathList[i]);
        }
        return flag;
    }
    /**
    * To verify values are present in dropdown
    * @author somnath.k
    */
    static async verifyValuesPresentinDropdown(dropdownNumber) {
        let dropdownXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DYNAMIC_DROPDOWNS));
        await this.clickonParticularDropdownField(dropdownNumber);
        if (await z_1.z.grabAttributeFrom(dropdownXpathList[dropdownNumber], "formcontrolname") == "contractBU") {
            let buOptionXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BU_FIELD_OPTION_LIST));
            await z_1.z.seeElement(buOptionXpathList[0]);
        }
        else {
            let optionXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DYNAMIC_DROPDOWN_OPTION_LIST));
            await z_1.z.seeElement(optionXpathList[0]);
        }
        await this.clickonParticularDropdownField(dropdownNumber);
    }
    /**
    * To verify particular dropdown field is empty
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyParticularDropdownFieldisEmpty(dropdownNumber) {
        let flag = false;
        let allFieldsXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.ALL_FIELDS_DATA));
        let fieldValue = await z_1.z.grabTextFrom(allFieldsXpathList[dropdownNumber]);
        if (fieldValue == "" || fieldValue == null || fieldValue == undefined) {
            flag = true;
        }
        else {
            flag = false;
        }
        return flag;
    }
    /**
    * To select multiple bu values in the list
    * @return {String[]} selectedBuList
    * @author somnath.k
    */
    static async selectMultipleBuFromList() {
        let selectedBuList = [];
        await this.clickonParticularDropdownField(4);
        let optionXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BU_FIELD_OPTION_LIST));
        for (let i = 0; i < optionXpathList.length; i++) {
            selectedBuList.push(await z_1.z.grabTextFrom(optionXpathList[i]));
            await z_1.z.click(optionXpathList[i]);
        }
        return selectedBuList;
    }
    /**
    * To verify selected bu in bu box
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifySelectedBUinBUBox(selectedBuList) {
        let flag = false;
        let BUinBox = await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DNY_BU_VALUE_IN_BOX);
        for (let i = 0; i < selectedBuList.length; i++) {
            let selectedValueXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(selectedBuList[i], BUinBox);
            if (await CommonComponent_1.CommonComponent.isEnabledByXpath(selectedValueXpath)) {
                flag = true;
            }
            else {
                flag = false;
                break;
            }
        }
        return flag;
    }
    /**
    * To delete random bu from bu box
    * @param {String[]} selectedBuList
    * @return {String[]} deletedBUList
    * @author somnath.k
    */
    static async deleteRandomParticularBuFromBuBox(selectedBuList) {
        let deletedBUList = [];
        let randomBuCount = await CommonComponent_1.CommonComponent.getRandomNumber(selectedBuList.length);
        let randomBu = selectedBuList[randomBuCount];
        deletedBUList.push(randomBu);
        let deleteBUxpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(randomBu, await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DNY_DELETE_INDIVIDUAL_BU_IN_BOX));
        await z_1.z.click(deleteBUxpath);
        return deletedBUList;
    }
    /**
    * To verify deleted bu not present in bu box
    * @param {String[]} deletedBUList
    * @author somnath.k
    */
    static async verifyDeletedBuNotPresentinBUBox(deletedBUList) {
        let BUinBox = await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DNY_BU_VALUE_IN_BOX);
        for (let i = 0; i < deletedBUList.length; i++) {
            let deletedBUXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(deletedBUList[i], BUinBox);
            await z_1.z.dontSeeElement(deletedBUXpath);
        }
    }
    /**
    * To search invalid data in the dropdown field
    * @return {boolean} flag
    * @author somnath.k
    */
    static async searchInvalidDataandValidateResult() {
        let flag = false;
        let dropdownXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DYNAMIC_DROPDOWNS));
        for (let i = 0; i < dropdownXpathList.length; i++) {
            await z_1.z.click(dropdownXpathList[i]);
            await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.SEARCH_BOX_INSIDE_DROPDOWN), await AuroraLmt_1.AuroraLmt.getData("INVALID_DATA_DROPDOWN"));
            if (await CommonComponent_1.CommonComponent.isEnabledByXpath(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.NO_ITEMS_FOUND_MSG))) {
                flag = true;
            }
            else {
                flag = false;
                break;
            }
            await z_1.z.click(dropdownXpathList[i]);
        }
        return flag;
    }
    /**
    * To search and fill basic information
    * @author somnath.k
    */
    static async searchandFillBasicInformation() {
        let dropdownXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DYNAMIC_DROPDOWNS));
        let searchBoxXpath = await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.SEARCH_BOX_INSIDE_DROPDOWN);
        for (let i = 0; i < dropdownXpathList.length; i++) {
            if (await z_1.z.grabAttributeFrom(dropdownXpathList[i], "formcontrolname") == "contractBU") {
                let buOptionXpathList = await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.BU_FIELD_OPTION_LIST);
                await CommonComponent_1.CommonComponent.searchRandomValueAndSelectinDropdownByClick(dropdownXpathList[i], buOptionXpathList, searchBoxXpath);
            }
            else {
                let optionXpathList = await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DYNAMIC_DROPDOWN_OPTION_LIST);
                await CommonComponent_1.CommonComponent.searchRandomValueAndSelectinDropdownByClick(dropdownXpathList[i], optionXpathList, searchBoxXpath);
            }
        }
    }
    /**
    * To get drag and drop box details
    * @return {String[]} dragAndDropDetails
    * @author somnath.k
    */
    static async getDragAndDropBoxDetails() {
        let dragAndDropDetails = [];
        let dragAndDropXpathList = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DRAG_AND_DROP_BOX_DETAILS));
        for (let i = 0; i < dragAndDropXpathList.length; i++) {
            dragAndDropDetails.push(await z_1.z.grabTextFrom(dragAndDropXpathList[i]));
        }
        return dragAndDropDetails;
    }
    /**
    * To verify drag and drop box details
    * @param {String[]} dragAndDropBoxDetails
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyDragAndDropBoxDetails(dragAndDropBoxDetails) {
        let flag = false;
        for (let i = 0; i < dragAndDropBoxDetails.length; i++) {
            let dragAndDropBoxDetailXpath = await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DNY_PARTICULAR_DRAG_AND_DROP_DETAIL);
            dragAndDropBoxDetailXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(dragAndDropBoxDetails[i], dragAndDropBoxDetailXpath);
            if (await CommonComponent_1.CommonComponent.isEnabledByXpath(dragAndDropBoxDetailXpath)) {
                flag = true;
            }
            else {
                flag = false;
                break;
            }
        }
        return flag;
    }
    /**
    * To verify drag and drop box details
    * @param {string} uploadedFileName
    * @author somnath.k
    */
    static async verifyUploadedFilenameinDragandDropBox(uploadedFileName) {
        let uploadedFileNameXpath = await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DNY_UPLOADED_FILE_NAME_IN_DRAG_AND_DROP_BOX);
        uploadedFileNameXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(uploadedFileName, uploadedFileNameXpath);
        await z_1.z.seeElement(uploadedFileNameXpath);
    }
    // /**
    // * To await until file is uploaded
    // * @author somnath.k
    // */
    // static async waitUtilFileisUploaded() {
    //     let stopWaitXpath = await AuroraLmt.getElement(basicInformarationElements.FILE_LOADER_IMAGE);
    //     let count = 0;
    //     while (true) {
    //         count++;
    //         // if (await CommonComponent.isEnabledByXpath(stopWaitXpath)) {
    //         //     await z.wait(2);
    //         // } else {
    //         //     break;
    //         // }
    //         // if (count == 200) {
    //         //     logger.info("File upload is taking more time to upload proper document,Failed");
    //         //     break;
    //         // }
    //         if ((await CommonComponent.getHtmlElementData(stopWaitXpath) != null) || (await CommonComponent.getHtmlElementData(stopWaitXpath) != undefined)) {
    //             await z.wait(2);
    //         } else {
    //             break;
    //         }
    //         if (count == 200) {
    //             logger.info("File upload is taking more time to upload proper document,Failed");
    //             break;
    //         }
    //     }
    // }
    /**
    * To verify basic information in contract details
    * @param {Map<String, String[]>} basicInformationDetails
    * @param {string} uploadedFileName
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyBasicInformationinContractDetails(basicInformationDetails, uploadedFileName) {
        let flag = false;
        let flag2 = false;
        let digitalContractMetadataXpath = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.MULTI_DYN_DIGITAL_CONTRACT_METADATA);
        for (let fieldvalue of basicInformationDetails.values()) {
            if (fieldvalue[0] == "Contract Type" || fieldvalue[0] == "Contract Subtype") {
                let headerXpath = await AuroraLmt_1.AuroraLmt.getElement(BasicInformationElements_1.basicInformarationElements.DNY_TYPE_SUBTYPE_IN_HEADER);
                headerXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(fieldvalue[1], headerXpath);
                if (await CommonComponent_1.CommonComponent.isEnabledByXpath(headerXpath)) {
                    flag = true;
                }
                else {
                    flag = false;
                    break;
                }
            }
            else {
                let dropdownnXpath = await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DNY_DROPDOWN_COMMON);
                //added bcoz of BU issue
                if (fieldvalue[0].trim() == "BU") {
                    fieldvalue[0] = "Business Unit";
                }
                dropdownnXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString(fieldvalue[0], dropdownnXpath);
                await z_1.z.scrollIntoView(dropdownnXpath);
                let dropdownValue = await z_1.z.grabTextFrom(dropdownnXpath);
                dropdownValue = dropdownValue.replace("×", "");
                if (dropdownValue.includes("×")) {
                    dropdownValue = dropdownValue.replace("×", "");
                }
                fieldvalue[1] = fieldvalue[1].replace("×", "");
                logger_1.logger.info("Check dropdown and UI" + dropdownValue + "      " + fieldvalue[1]);
                if (dropdownValue.trim() == fieldvalue[1].trim()) {
                    flag = true;
                }
                else {
                    flag = false;
                    break;
                }
            }
        }
        if (flag == true) {
            digitalContractMetadataXpath = await CommonComponent_1.CommonComponent.retrieveParticularElementXpathBasedonString("Digital Contract Document", digitalContractMetadataXpath);
            digitalContractMetadataXpath = digitalContractMetadataXpath.replace("Filename", uploadedFileName);
            await z_1.z.scrollIntoView(digitalContractMetadataXpath);
            if ((await CommonComponent_1.CommonComponent.getHtmlElementData(digitalContractMetadataXpath) != null) || (await CommonComponent_1.CommonComponent.getHtmlElementData(digitalContractMetadataXpath) != undefined)) {
                flag2 = true;
            }
        }
        else {
            flag2 = false;
        }
        if (flag == true && flag2 == true) {
            flag = true;
        }
        else {
            flag = false;
        }
        return flag;
    }
}
exports.BasicInformationActions = BasicInformationActions;
