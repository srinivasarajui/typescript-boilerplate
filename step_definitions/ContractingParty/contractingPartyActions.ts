import { AuroraLmt } from "../../common/Data/AuroraLmt";
import { CommonComponent } from "./../commonKeywords/CommonComponent";
import { ContractingPartyElements } from "./contractingPartyElements";
import { logger } from "../../common/Logger/logger";
/**
 * The class is to perform contract details action
 *
 * @author somnath.k
 *
 *
*/
import { z } from "actionbot-wrapper/z";
const { I } = inject();
export class ContractingPartyActions {
    /***************************************Sub Services Starts******************************************************/

    /**
    * To remove CP added to the contract
    * @author Datta Ankalkar
    */
   static async removeCPAddedToTheContract() {
    try{
        await z.wait(8);
        await CommonComponent.waitForElementVisible(await AuroraLmt.getElement(ContractingPartyElements.CP_CARDS));
        // await z.seeElement(await AuroraLmt.getElement(ContractingPartyElements.CP_CARDS));
    let cpCards:string[]=await z.grabNumberOfVisibleElements(await AuroraLmt.getElement(ContractingPartyElements.CP_CARDS));
    logger.info("Number of cards added are:"+cpCards);
    let i:number;
    for(i=0;i<cpCards.length;i++){
        // let companyName:string=await z.grabTextFrom(await AuroraLmt.getElement(ContractingPartyElements.COMPANY_NAME));
        // if(!companyName.includes("Automation")){
            await z.click(await AuroraLmt.getElement(ContractingPartyElements.CP_CARD_ACTION_MENU));
            let options:string=await AuroraLmt.getElement(ContractingPartyElements.DYN_CP_ACTION_OPTION);
            let optionXpath:string=options.replace("OPTION","Remove");
            await z.click(optionXpath);
            await z.wait(2);
            await z.click(await AuroraLmt.getElement(ContractingPartyElements.REMOVE_CP_POPUP_BUTTON));
            await z.wait(5);
        // }
        }
    }
    catch(error){
        logger.info("No CPs added to the contract");
        }
    }

    /**
    * To add CP to the contract
    * @author Datta Ankalkar
    */
    static async addCPToTheContract(cpName) {
        try{
        await z.click(await AuroraLmt.getElement(ContractingPartyElements.CP_SEARCH_BOX));
        await z.fillField(await AuroraLmt.getElement(ContractingPartyElements.CP_SEARCH_BOX),cpName);
        let options:string=await AuroraLmt.getElement(ContractingPartyElements.CP_SEARCH_OPTION_VALUE);
        let optionXpath:string=options.replace("OPTION",cpName);
        await z.click(optionXpath);
        }catch(error){
            await z.pressKey('Escape');
        }
        await z.wait(5);
    }

    /**
    * To check CP primary flag indication on CP card
    * @author Datta Ankalkar
    */
   static async checkPrimaryFlagIndication() {
       await z.seeElement(await AuroraLmt.getElement(ContractingPartyElements.CP_PRIMARY_FLAG));
   }

   /**
    * To check Company name and its type on CP card
    * @author Datta Ankalkar
    */
   static async checkCompanyNameAndType() {
    await z.seeElement(await AuroraLmt.getElement(ContractingPartyElements.COMPANY_NAME));
    await z.seeElement(await AuroraLmt.getElement(ContractingPartyElements.COMPANY_TYPE));
   }

   /**
    * To check CP Person dropdown on CP card
    * @author Datta Ankalkar
    */
   static async checkCPPDropDownOnCPCard() {
    await z.seeElement(await AuroraLmt.getElement(ContractingPartyElements.CP_PERSON_DROPDOWN));
   }

   /**
    * To check CP Address dropdown on CP card
    * @author Datta Ankalkar
    */
   static async checkAddressDropDownOnCPCard() {
    await z.seeElement(await AuroraLmt.getElement(ContractingPartyElements.CP_ADDRESS_DROPDOWN));
   }

   /**
    * To check CP Address dropdown on CP card
    * @author Datta Ankalkar
    */
   static async checkActionMenuOnCPCard() {
    await z.seeElement(await AuroraLmt.getElement(ContractingPartyElements.CP_ACTION_MENU));
   }

   /**
    * To check CP Address dropdown on CP card
    * @author Datta Ankalkar
    */
   static async clickOnActionMenuOnCPCard() {
    await z.click(await AuroraLmt.getElement(ContractingPartyElements.CP_ACTION_MENU));
   }

   /**
    * To check CP Action Option On CP Card
    * @author Datta Ankalkar
    */
   static async CheckActionMenuOptionsForCPCard(option) {
    let xpathoption=await AuroraLmt.getElement(ContractingPartyElements.CP_ACTION_MENU_OPTIONS);
    let optionpath=xpathoption.replace("DYN_OPTION",option);
    await z.seeElement(optionpath);
   }

    /**
    * To click on CP Action Option On CP Card
    * @author Datta Ankalkar
    */
     static async ClickOnCPCardActionMenuOptions(option) {
        let xpathoption=await AuroraLmt.getElement(ContractingPartyElements.CP_ACTION_MENU_OPTIONS);
        let optionpath=xpathoption.replace("DYN_OPTION",option);
        await z.click(optionpath);
    }

   /**
    * To check CCP dropdown is diabled on CP card
    * @author Datta Ankalkar
    */
   static async checkCPPDDDisabled() {
    await z.seeElement(await AuroraLmt.getElement(ContractingPartyElements.CP_PERSON_DROPDOWN_DISABLED));
   }
   /**
    * To check Address dropdown is disabled on CP card
    * @author Datta Ankalkar
    */
   static async checkAddressDDDisabled() {
    await z.seeElement(await AuroraLmt.getElement(ContractingPartyElements.CP_ADDRESS_DROPDOWN_DISABLED));
   }

   /**
    * To check CCP dropdown is Enbled on CP card
    * @author Datta Ankalkar
    */
   static async checkCPPDDEnabled() {
    await z.seeElement(await AuroraLmt.getElement(ContractingPartyElements.CP_PERSON_DROPDOWN_ENABLED));
   }
   /**
    * To check Address dropdown is Enabled on CP card
    * @author Datta Ankalkar
    */
   static async checkAddressDDEnabled() {
    await z.seeElement(await AuroraLmt.getElement(ContractingPartyElements.CP_ADDRESS_DROPDOWN_ENABLED));
   }

    /**
    * To click on CP Address dropdown on CP card
    * @author Datta Ankalkar
    */
     static async clickOnCPAddressDD() {
        await z.click(await AuroraLmt.getElement(ContractingPartyElements.CP_ADDRESS_DROPDOWN));
    }

    /**
    * To click on CP Person dropdown on CP card
    * @author Datta Ankalkar
    */
     static async clickOnCPPersonDD() {
        await z.click(await AuroraLmt.getElement(ContractingPartyElements.CP_PERSON_DROPDOWN));
    }

   /**
    * To check Default CCP  on CP card
    * @author Datta Ankalkar
    */
   static async checkCPDefaultPerson() {
    await z.seeElement(await AuroraLmt.getElement(ContractingPartyElements.DEFAULT_CP_PERSON));
    let cppValue=await z.grabAttributeFrom(await AuroraLmt.getElement(ContractingPartyElements.DEFAULT_CP_PERSON),'title');
    return cppValue;
   }
   /**
    * To check Default CC Address on CP card
    * @author Datta Ankalkar
    */
   static async checkCPDefaultAddress() {
    await z.seeElement(await AuroraLmt.getElement(ContractingPartyElements.DEFAULT_CP_ADDRESS));
    let cpAddressValue=await z.grabAttributeFrom(await AuroraLmt.getElement(ContractingPartyElements.DEFAULT_CP_ADDRESS),'title');
    return cpAddressValue;
   }
   /**
    * To check dropdown place holder On CP Card
    * @author Datta Ankalkar
    */
   static async CheckPlaceHolderVaule(dropdown) {
       let value:string="";
       if(dropdown=="CPP"){
       value = "user";
       }
       if(dropdown=="CP Address"){
        value = "location";
       }
        let xpathOption=await AuroraLmt.getElement(ContractingPartyElements.DYN_CP_DD_PLACEHOLDER);
        let optionpath=xpathOption.replace("DYN_OPTION",value);
        return await z.grabAttributeFrom(optionpath,"title");
   }


    /**
     * To check multiple CPs added to the contract
     * @author Datta Ankalkar
     */
    static async checkMultipleCPsAddedToTheContract() {
        await z.wait(8);
        let cpCards:string[]=await z.grabNumberOfVisibleElements(await AuroraLmt.getElement(ContractingPartyElements.CP_CARDS));
        let i:number;
        if(cpCards.length>1){
            logger.info("More than One CPs are added to the contract");
        }
    }

    /**
     * To check primary CP Card is displayed on top when multiple CPs added
     * @author Datta Ankalkar
     */
     static async chekPrimaryCPIsOnTop() {
        await z.wait(3);
        await z.seeElement(await AuroraLmt.getElement(ContractingPartyElements.PRIMARY_CP_ON_TOP));

    }


    /**
     * To enter Cp search value inside CP search box
     * @author Datta Ankalkar
     */
     static async enterCPSearchVaule(value) {
        await z.wait(3);
        await z.click(await AuroraLmt.getElement(ContractingPartyElements.CP_SEARCH_BOX));
        await z.fillField(await AuroraLmt.getElement(ContractingPartyElements.CP_SEARCH_BOX),value);
    }

    /**
     * To check invalid Cp search result for CP search box
     * @author Datta Ankalkar
     */
    static async checkInvalidCpSearchResult() {
        await z.wait(5);
        await z.seeElement(await AuroraLmt.getElement(ContractingPartyElements.NO_CP_FOUND_TEXT));
    }

    /**
     * To check clear icon for CP search box
     * @author Datta Ankalkar
     */
     static async checkCPSeachClearIcon() {
        await z.wait(5);
        await z.seeElement(await AuroraLmt.getElement(ContractingPartyElements.CP_SEARCH_BOX_CLEAR_ICON));
    }

    /**
     * To check note message inside CP dropdowns
     * @author Datta Ankalkar
     */
     static async checkNoteMessage(field,noteMsg) {
        await z.wait(5);
        let value:string="";
        if(field=="CPP"){
        value = "user";
        }
        if(field=="CP Address"){
            value = "location";
        }
        let xpathOption=await AuroraLmt.getElement(ContractingPartyElements.DYN_DD_NOTE_MSG);
        let optionpath=xpathOption.replace("FIELD",value);

        let noteMessage:string=await z.grabTextFrom(optionpath);
        if(noteMsg==noteMessage){
            logger.info("Note Message shown is as expected");
        }else{
            console.error("Note message shown is not as expected");
        }
    }

    /**
     * To check invalid Cp search result for CP search box
     * @author Datta Ankalkar
     */
     static async checkInactiveCPStatus() {
        await z.wait(5);
        await z.seeElement(await AuroraLmt.getElement(ContractingPartyElements.INACTIVE_CP_STATUS));
    }


    /**
     * To check check Warning meassage Popup Displayed for editing inactive CP
     * @author Datta Ankalkar
     */
     static async checkWarningPopupDisplayed() {
        await z.wait(5);
        await z.seeElement(await AuroraLmt.getElement(ContractingPartyElements.CP_DEACTIVE_POPUP));
    }

    /**
     * To check check Warning Popup title for editing inactive CP
     * @author Datta Ankalkar
     */
     static async checkWarningPopupTitle() {
        await z.wait(5);
        let title:string=await z.grabTextFrom(await AuroraLmt.getElement(ContractingPartyElements.CP_DEACTIVE_POPUP_TITLE));
        return title;
    }

    /**
     * To check check Warning Popup Message for editing inactive CP
     * @author Datta Ankalkar
     */
     static async checkWarningPopupMessage() {
        await z.wait(5);
        let msg:string=await z.grabTextFrom(await AuroraLmt.getElement(ContractingPartyElements.CP_DEACTIVE_POPUP_MSG));
        return msg;
    }

/**
     * To check check Warning Popup Button label for editing inactive CP
     * @author Datta Ankalkar
     */
 static async checkWarningPopupButton() {
    await z.wait(5);
    let buttonLabel:string=await z.grabTextFrom(await AuroraLmt.getElement(ContractingPartyElements.CP_DEACTIVE_POPUP_BUTTON));
    return buttonLabel;
}



}
