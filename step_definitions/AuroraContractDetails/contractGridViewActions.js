"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractGridViewActions = void 0;
//Rule: classname should be ts file name with first letter as caps
const AuroraLmt_1 = require("../../common/Data/AuroraLmt");
const contractGridViewElements_1 = require("./contractGridViewElements");
/**
 * The class is to perform contract details action
 *
 * @author somnath.k
 *
 *
*/
const z_1 = require("actionbot-wrapper/z");
const { I } = inject();
class ContractGridViewActions {
    /******************************************************Sub Services Starts******************************************************/
    /**
    * To Navigate with side navigation bar
    * @author Datta Ankalkar
    */
    static async clickOnSideNavigationBarLink(link) {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractGridViewElements_1.contractGridViewElements.CONTRACTS_NAVIGATION_LNK));
    }
    static async CheckContractsGridView() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractGridViewElements_1.contractGridViewElements.CONTRACTS_GRID_VIEW));
    }
    static async checkStandardColumnOnGridView(label, status) {
        let standardColumnlabelXpath = "";
        if (status == "true") {
            standardColumnlabelXpath = await AuroraLmt_1.AuroraLmt.getElement(contractGridViewElements_1.contractGridViewElements.DYN_GRID_LABEL);
            if (standardColumnlabelXpath.includes("TEMP_VALUE")) {
                standardColumnlabelXpath.replace("TEMP_VALUE", label);
            }
            await z_1.z.seeElement(standardColumnlabelXpath);
        }
        else {
            await z_1.z.dontSeeElement(standardColumnlabelXpath);
        }
    }
    static async checkFormat(label) {
        let labelFormatXpath = await AuroraLmt_1.AuroraLmt.getElement(contractGridViewElements_1.contractGridViewElements.DYN_LABEL_FORMAT);
        if (labelFormatXpath.includes("TEMP_VALUE")) {
            labelFormatXpath.replace("TEMP_VALUE", label);
        }
        let labelFormat = await z_1.z.grabTextFrom(labelFormatXpath);
        //Write logic to compare label value format
    }
    static async CheckPrimaryCPValueForContractingPartyColumn() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractGridViewElements_1.contractGridViewElements.PRIMARY_CP_LABEL_ON_GRID));
    }
    static async CheckCPLinkForSecondaryCPs() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractGridViewElements_1.contractGridViewElements.CP_LINK));
    }
    static async CheckSecondaryCPsUnderPopover() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractGridViewElements_1.contractGridViewElements.SECONDARY_CP_LIST));
    }
    static async checkMoreBUsUnderPopover() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractGridViewElements_1.contractGridViewElements.MORE_BU_LIST));
    }
    static async CheckBULink() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractGridViewElements_1.contractGridViewElements.BU_LINK));
    }
    static async ClickOnCPLinkForSecondaryCPs() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractGridViewElements_1.contractGridViewElements.CP_LINK));
    }
    static async ClickOnBULink() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractGridViewElements_1.contractGridViewElements.BU_LINK));
    }
    static async CheckPopoverForSecondaryCPs() {
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractGridViewElements_1.contractGridViewElements.CP_POPOVER));
    }
}
exports.ContractGridViewActions = ContractGridViewActions;
/*******************************************************Services Ends******************************************************/
