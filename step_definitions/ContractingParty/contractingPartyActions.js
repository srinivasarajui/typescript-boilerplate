"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractingPartyActions = void 0;
const AuroraLmt_1 = require("../../common/Data/AuroraLmt");
const CommonComponent_1 = require("./../commonKeywords/CommonComponent");
const contractingPartyElements_1 = require("./contractingPartyElements");
const logger_1 = require("../../common/Logger/logger");
/**
 * The class is to perform contract details action
 *
 * @author somnath.k
 *
 *
*/
const z_1 = require("actionbot-wrapper/z");
const { I } = inject();
class ContractingPartyActions {
    /***************************************Sub Services Starts******************************************************/
    /**
    * To remove CP added to the contract
    * @author Datta Ankalkar
    */
    static async removeCPAddedToTheContract() {
        try {
            await z_1.z.wait(8);
            await CommonComponent_1.CommonComponent.waitForElementVisible(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_CARDS));
            // await z.seeElement(await AuroraLmt.getElement(ContractingPartyElements.CP_CARDS));
            let cpCards = await z_1.z.grabNumberOfVisibleElements(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_CARDS));
            logger_1.logger.info("Number of cards added are:" + cpCards);
            let i;
            for (i = 0; i < cpCards.length; i++) {
                // let companyName:string=await z.grabTextFrom(await AuroraLmt.getElement(ContractingPartyElements.COMPANY_NAME));
                // if(!companyName.includes("Automation")){
                await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_CARD_ACTION_MENU));
                let options = await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.DYN_CP_ACTION_OPTION);
                let optionXpath = options.replace("OPTION", "Remove");
                await z_1.z.click(optionXpath);
                await z_1.z.wait(2);
                await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.REMOVE_CP_POPUP_BUTTON));
                await z_1.z.wait(5);
                // }
            }
        }
        catch (error) {
            logger_1.logger.info("No CPs added to the contract");
        }
    }
    /**
    * To add CP to the contract
    * @author Datta Ankalkar
    */
    static async addCPToTheContract(cpName) {
        try {
            await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_SEARCH_BOX));
            await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_SEARCH_BOX), cpName);
            let options = await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_SEARCH_OPTION_VALUE);
            let optionXpath = options.replace("OPTION", cpName);
            await z_1.z.click(optionXpath);
        }
        catch (error) {
            await z_1.z.pressKey('Escape');
        }
        await z_1.z.wait(5);
    }
    /**
    * To check CP primary flag indication on CP card
    * @author Datta Ankalkar
    */
    static async checkPrimaryFlagIndication() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_PRIMARY_FLAG));
    }
    /**
     * To check Company name and its type on CP card
     * @author Datta Ankalkar
     */
    static async checkCompanyNameAndType() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.COMPANY_NAME));
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.COMPANY_TYPE));
    }
    /**
     * To check CP Person dropdown on CP card
     * @author Datta Ankalkar
     */
    static async checkCPPDropDownOnCPCard() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_PERSON_DROPDOWN));
    }
    /**
     * To check CP Address dropdown on CP card
     * @author Datta Ankalkar
     */
    static async checkAddressDropDownOnCPCard() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_ADDRESS_DROPDOWN));
    }
    /**
     * To check CP Address dropdown on CP card
     * @author Datta Ankalkar
     */
    static async checkActionMenuOnCPCard() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_ACTION_MENU));
    }
    /**
     * To check CP Address dropdown on CP card
     * @author Datta Ankalkar
     */
    static async clickOnActionMenuOnCPCard() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_ACTION_MENU));
    }
    /**
     * To check CP Action Option On CP Card
     * @author Datta Ankalkar
     */
    static async CheckActionMenuOptionsForCPCard(option) {
        let xpathoption = await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_ACTION_MENU_OPTIONS);
        let optionpath = xpathoption.replace("DYN_OPTION", option);
        await z_1.z.seeElement(optionpath);
    }
    /**
    * To click on CP Action Option On CP Card
    * @author Datta Ankalkar
    */
    static async ClickOnCPCardActionMenuOptions(option) {
        let xpathoption = await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_ACTION_MENU_OPTIONS);
        let optionpath = xpathoption.replace("DYN_OPTION", option);
        await z_1.z.click(optionpath);
    }
    /**
     * To check CCP dropdown is diabled on CP card
     * @author Datta Ankalkar
     */
    static async checkCPPDDDisabled() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_PERSON_DROPDOWN_DISABLED));
    }
    /**
     * To check Address dropdown is disabled on CP card
     * @author Datta Ankalkar
     */
    static async checkAddressDDDisabled() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_ADDRESS_DROPDOWN_DISABLED));
    }
    /**
     * To check CCP dropdown is Enbled on CP card
     * @author Datta Ankalkar
     */
    static async checkCPPDDEnabled() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_PERSON_DROPDOWN_ENABLED));
    }
    /**
     * To check Address dropdown is Enabled on CP card
     * @author Datta Ankalkar
     */
    static async checkAddressDDEnabled() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_ADDRESS_DROPDOWN_ENABLED));
    }
    /**
    * To click on CP Address dropdown on CP card
    * @author Datta Ankalkar
    */
    static async clickOnCPAddressDD() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_ADDRESS_DROPDOWN));
    }
    /**
    * To click on CP Person dropdown on CP card
    * @author Datta Ankalkar
    */
    static async clickOnCPPersonDD() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_PERSON_DROPDOWN));
    }
    /**
     * To check Default CCP  on CP card
     * @author Datta Ankalkar
     */
    static async checkCPDefaultPerson() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.DEFAULT_CP_PERSON));
        let cppValue = await z_1.z.grabAttributeFrom(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.DEFAULT_CP_PERSON), 'title');
        return cppValue;
    }
    /**
     * To check Default CC Address on CP card
     * @author Datta Ankalkar
     */
    static async checkCPDefaultAddress() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.DEFAULT_CP_ADDRESS));
        let cpAddressValue = await z_1.z.grabAttributeFrom(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.DEFAULT_CP_ADDRESS), 'title');
        return cpAddressValue;
    }
    /**
     * To check dropdown place holder On CP Card
     * @author Datta Ankalkar
     */
    static async CheckPlaceHolderVaule(dropdown) {
        let value = "";
        if (dropdown == "CPP") {
            value = "user";
        }
        if (dropdown == "CP Address") {
            value = "location";
        }
        let xpathOption = await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.DYN_CP_DD_PLACEHOLDER);
        let optionpath = xpathOption.replace("DYN_OPTION", value);
        return await z_1.z.grabAttributeFrom(optionpath, "title");
    }
    /**
     * To check multiple CPs added to the contract
     * @author Datta Ankalkar
     */
    static async checkMultipleCPsAddedToTheContract() {
        await z_1.z.wait(8);
        let cpCards = await z_1.z.grabNumberOfVisibleElements(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_CARDS));
        let i;
        if (cpCards.length > 1) {
            logger_1.logger.info("More than One CPs are added to the contract");
        }
    }
    /**
     * To check primary CP Card is displayed on top when multiple CPs added
     * @author Datta Ankalkar
     */
    static async chekPrimaryCPIsOnTop() {
        await z_1.z.wait(3);
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.PRIMARY_CP_ON_TOP));
    }
    /**
     * To enter Cp search value inside CP search box
     * @author Datta Ankalkar
     */
    static async enterCPSearchVaule(value) {
        await z_1.z.wait(3);
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_SEARCH_BOX));
        await z_1.z.fillField(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_SEARCH_BOX), value);
    }
    /**
     * To check invalid Cp search result for CP search box
     * @author Datta Ankalkar
     */
    static async checkInvalidCpSearchResult() {
        await z_1.z.wait(5);
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.NO_CP_FOUND_TEXT));
    }
    /**
     * To check clear icon for CP search box
     * @author Datta Ankalkar
     */
    static async checkCPSeachClearIcon() {
        await z_1.z.wait(5);
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_SEARCH_BOX_CLEAR_ICON));
    }
    /**
     * To check note message inside CP dropdowns
     * @author Datta Ankalkar
     */
    static async checkNoteMessage(field, noteMsg) {
        await z_1.z.wait(5);
        let value = "";
        if (field == "CPP") {
            value = "user";
        }
        if (field == "CP Address") {
            value = "location";
        }
        let xpathOption = await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.DYN_DD_NOTE_MSG);
        let optionpath = xpathOption.replace("FIELD", value);
        let noteMessage = await z_1.z.grabTextFrom(optionpath);
        if (noteMsg == noteMessage) {
            logger_1.logger.info("Note Message shown is as expected");
        }
        else {
            console.error("Note message shown is not as expected");
        }
    }
    /**
     * To check invalid Cp search result for CP search box
     * @author Datta Ankalkar
     */
    static async checkInactiveCPStatus() {
        await z_1.z.wait(5);
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.INACTIVE_CP_STATUS));
    }
    /**
     * To check check Warning meassage Popup Displayed for editing inactive CP
     * @author Datta Ankalkar
     */
    static async checkWarningPopupDisplayed() {
        await z_1.z.wait(5);
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_DEACTIVE_POPUP));
    }
    /**
     * To check check Warning Popup title for editing inactive CP
     * @author Datta Ankalkar
     */
    static async checkWarningPopupTitle() {
        await z_1.z.wait(5);
        let title = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_DEACTIVE_POPUP_TITLE));
        return title;
    }
    /**
     * To check check Warning Popup Message for editing inactive CP
     * @author Datta Ankalkar
     */
    static async checkWarningPopupMessage() {
        await z_1.z.wait(5);
        let msg = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_DEACTIVE_POPUP_MSG));
        return msg;
    }
    /**
         * To check check Warning Popup Button label for editing inactive CP
         * @author Datta Ankalkar
         */
    static async checkWarningPopupButton() {
        await z_1.z.wait(5);
        let buttonLabel = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(contractingPartyElements_1.ContractingPartyElements.CP_DEACTIVE_POPUP_BUTTON));
        return buttonLabel;
    }
}
exports.ContractingPartyActions = ContractingPartyActions;
