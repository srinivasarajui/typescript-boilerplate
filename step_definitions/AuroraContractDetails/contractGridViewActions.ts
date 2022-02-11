//Rule: classname should be ts file name with first letter as caps
import { AuroraLmt } from "../../common/Data/AuroraLmt";
import { contractGridViewElements } from "./contractGridViewElements";
/**
 * The class is to perform contract details action
 *
 * @author somnath.k
 *
 *
*/
import { z } from "actionbot-wrapper/z";
const { I } = inject();
export class ContractGridViewActions {
    /******************************************************Sub Services Starts******************************************************/

    /**
    * To Navigate with side navigation bar
    * @author Datta Ankalkar
    */
   static async clickOnSideNavigationBarLink(link:string) {
        await z.click(await AuroraLmt.getElement(contractGridViewElements.CONTRACTS_NAVIGATION_LNK));
    }

    static async CheckContractsGridView() {
        await z.seeElement(await AuroraLmt.getElement(contractGridViewElements.CONTRACTS_GRID_VIEW));
    }

    static async checkStandardColumnOnGridView(label:string,status:string) {
        let standardColumnlabelXpath:string="";
        if(status=="true"){
            standardColumnlabelXpath=await AuroraLmt.getElement(contractGridViewElements.DYN_GRID_LABEL);
            if(standardColumnlabelXpath.includes("TEMP_VALUE")){
                standardColumnlabelXpath.replace("TEMP_VALUE",label);
            }
        await z.seeElement(standardColumnlabelXpath);
        }else{
            await z.dontSeeElement(standardColumnlabelXpath);
        }
    }

    static async checkFormat(label:string){
        let labelFormatXpath:string=await AuroraLmt.getElement(contractGridViewElements.DYN_LABEL_FORMAT);
        if(labelFormatXpath.includes("TEMP_VALUE")){
            labelFormatXpath.replace("TEMP_VALUE",label);
        }
        let labelFormat=await z.grabTextFrom(labelFormatXpath);
        //Write logic to compare label value format
    }

    static async CheckPrimaryCPValueForContractingPartyColumn() {
        await z.seeElement(await AuroraLmt.getElement(contractGridViewElements.PRIMARY_CP_LABEL_ON_GRID));
    }


    static async CheckCPLinkForSecondaryCPs() {
        await z.seeElement(await AuroraLmt.getElement(contractGridViewElements.CP_LINK));
    }

    static async CheckSecondaryCPsUnderPopover() {
        await z.seeElement(await AuroraLmt.getElement(contractGridViewElements.SECONDARY_CP_LIST));
    }
    static async checkMoreBUsUnderPopover() {
        await z.seeElement(await AuroraLmt.getElement(contractGridViewElements.MORE_BU_LIST));
    }


    static async CheckBULink() {
        await z.seeElement(await AuroraLmt.getElement(contractGridViewElements.BU_LINK));
    }


    static async ClickOnCPLinkForSecondaryCPs() {
        await z.click(await AuroraLmt.getElement(contractGridViewElements.CP_LINK));
    }

    static async ClickOnBULink() {
        await z.click(await AuroraLmt.getElement(contractGridViewElements.BU_LINK));
    }


    static async CheckPopoverForSecondaryCPs() {
        await z.seeElement(await AuroraLmt.getElement(contractGridViewElements.CP_POPOVER));
    }


}

/*******************************************************Services Ends******************************************************/
