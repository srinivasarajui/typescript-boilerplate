//Rule: classname should be ts file name with first letter as caps

import { AuroraLmt } from "../../common/Data/AuroraLmt";
import { auroraContractGridViewElements } from "./auroraContractGridViewElements";
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
export class AuroraContractGridViewActions {
    /******************************************************Sub Services Starts******************************************************/

    /**
    * To Navigate with side navigation bar
    * @author Datta Ankalkar
    */
   static async navigateToContyractsPage(expectedTitle:string) {
        await z.wait(8);
        await z.click(await AuroraLmt.getElement(auroraContractGridViewElements.CONTRACTS_NAVIGATION_LNK));
        await z.wait(5);
        let actualTitle:string=await z.grabTextFrom("//h1[@class='repoGridTitle ng-star-inserted']");
        if(actualTitle.includes(expectedTitle)){
        logger.info("Successfully navigated to "+expectedTitle+" page");
        }
    }


    static async checkClearFilterIconStatus(state:string){
       let expectedState:string= await z.grabAttributeFrom(await AuroraLmt.getElement(auroraContractGridViewElements.CLEAR_FILTER_ICON),"class");
       logger.info(expectedState);
       if(state=="true"){
            if(expectedState.includes("clearFilter filterValues")){
                logger.info("Clear Filter status is enabled as expected");
            }else{
                console.error("Clear Filter status is not as expected.");
            }
        }else if(state=="false"){
            if(expectedState.includes("clearFilter clearFilterdisabled")){
                logger.info("Clear Filter status is disabled as expected");
            }else{
                console.error("Clear Filter status is not as expected..");

            }
        }
    }

    static async checkHeaderIcon(label:string){
        switch(label){
            case "Hamburger icon":
                await z.seeElement("//div[@class='hamburger']");
                logger.info("Hamburger icon is available on the Grid");
                break;
            case "Ultria Logo":
                await z.seeElement("//img[contains(@src,'logo')]");
                logger.info("Ultria Logo is available on the Grid");
                break;
            case "Search Icon":
                await z.seeElement("//img[contains(@src,'search')]");
                logger.info("Search Icon is available on the Grid");
                break;
            case "Notification Icon":
                await z.seeElement("//img[contains(@src,'Notification')]");
                logger.info("Notification Icon is available on the Grid");
                break;
            case "User profile icon":
                await z.seeElement("//img[contains(@src,'user_with_bg')]");
                logger.info("User profile icon is available on the Grid");
                break;
            case "Clear Filter icon":
                await z.seeElement("//div[contains(@class,'clearFilter')]");
                logger.info("Clear Filter icon is available on the Grid");
                break;
            case "Customize grid icon":
                await z.seeElement("//div[contains(@class,'columnSelection')]");
                logger.info("Customize grid icon for column selection is available on the Grid");
                break;
            case "Download icon":
                await z.seeElement("//div[contains(@class,'exportGrid')]");
                logger.info("Download icon for exporting grid is available on the Grid");
                break;
            case "Upload button":
                await z.seeElement("//button[@label='Upload Contract']");
                logger.info("Upload button is available on the Grid for Uploading contracts");
                break;

        }
    }


    static async clickOnGridIcons(element:string){
        switch(element){
            case "Hamburger icon":
                await z.click("//div[@class='hamburger']");
                logger.info("Clicked on Hamburger icon available on the Grid");
                break;
            case "Search Icon":
                await z.click("//img[contains(@src,'search')]");
                logger.info("Clicked on Search Icon available on the Grid");
                break;
            case "Notification Icon":
                await z.click("//img[contains(@src,'Notification')]");
                logger.info("Clicked on Notification Icon available on the Grid");
                break;
            case "User profile icon":
                await z.click("//img[contains(@src,'user_with_bg')]");
                logger.info("Clicked on User profile icon available on the Grid");
                break;
            case "Clear Filter icon":
                await z.click("//div[contains(@class,'clearFilter')]");
                logger.info("Clicked on Clear Filter icon available on the Grid");
                break;
            case "Customize grid icon":
                await z.click("//div[contains(@class,'columnSelection')]");
                logger.info("Clicked on Customize grid icon for column selection available on the Grid");
                break;
            case "Download icon":
                await z.click("//div[contains(@class,'exportGrid')]");
                logger.info("Clicked on Download icon for exporting grid available on the Grid");
                break;
            case "Upload button":
                await z.click("//span[contains(text(),'Upload Contract')]");
                logger.info("Clicked on Upload button available on the Grid for Uploading contracts");
                break;
        }
    }

    static async clickOnGridResetLink(){
        await z.click("//span[text()='Reset']");
    }

    static async checkCreateContractPageDisplayed(){
        await z.seeElement("//div[@class='ultria-create-contract-container disable-pointer-events']");
        logger.info("Create Contract page is displayed");
    }

    static async CheckCustomizeGridPopup(){
        await z.seeElement("//h3[contains(text(),'Customize Grid')]");
        logger.info("Customize Grid Popup is displayed");
    }

    static async checkOnlySelectedItemsShownOnGrid(){
        let selectedColumns:string=await z.grabTextFrom("//input[@aria-checked='true']/../../../..//span[@class='columnName']");
        await z.click("//span[text()='Cancel']");
        let shownColumnsOnGrid:string=await z.grabTextFrom("//span[@class='colHeaderTitle']");
        JSON.stringify(selectedColumns) === JSON.stringify(shownColumnsOnGrid);
        logger.info("Selected columns are shown on grid as expected");
    }

    static async checkUnchecdItemsNotShownOnGrid(){
        let uncheckItems:string=await z.grabTextFrom("//input[@aria-checked='false']/../../../..//span[@class='columnName']");
        await z.click("//span[text()='Cancel']");
        let i:number;
        for(i=0;i<uncheckItems.length;i++){
            await z.dontSee(uncheckItems[i]);
            logger.info(uncheckItems[i]+" is not available on Grid");
        }
    }

    static async checkGridHeaderTitle(header:string){
        let actualTitle:string=await z.grabTextFrom("//h1[contains(@class,'repoGridTitle')]");
        await z.assertEqual(header,actualTitle);
        logger.info("Header tilte is coming as expected");
    }

    static async filterColumnvalueWith(type:string,label:string,value:string){
    //    await z.fillField("//span[@class='colHeaderTitle' and @title='Contract Number']/../../..//input[@placeholder='Search']",value);
        await z.fillField("//span[@class='colHeaderTitle' and @title='"+label+"']/../../..//input[@placeholder='"+type+"']",value);
        await z.pressKey("Enter");
        await z.wait(10);
    }

    static async CheckContractsGridView() {
        await z.wait(10);
        await z.seeElement(await AuroraLmt.getElement(auroraContractGridViewElements.AURORA_CONTRACTS_GRID_VIEW));
    }

    static async CheckContractNumIsALink() {
       let link:string= await z.grabAttributeFrom("//span/a/../../../td[contains(@class,'fieldLink')]","href");
       if(link===null){
            logger.info("Contract number is not a link");
       }else{
        logger.info("Contract number is a link");
       }

    }

    static async CheckContractHavingAmendment() {
        await z.seeElement(await AuroraLmt.getElement(auroraContractGridViewElements.AURORA_CONTRACT_WITH_AMENDMENT));
    }

    static async CheckAmendmentAttchementIcon() {
        await z.seeElement(await AuroraLmt.getElement(auroraContractGridViewElements.AURORA_CONTRACT_AMENDMENT_ICON));
    }

    static async clickFirstContractActionLink() {
        await z.click(await AuroraLmt.getElement(auroraContractGridViewElements.AURORA_FIRST_CONTRACT_ACTION_LNK));
    }

    static async checkContractActionOption(label:string,actionOption:string) {
        let standardColumnlabelXpath:string="";
            standardColumnlabelXpath=await AuroraLmt.getElement(auroraContractGridViewElements.DYN_GRID_CONTRACT_ACTION_OPTION);
            if(standardColumnlabelXpath.includes("TEMP_VALUE")){
                standardColumnlabelXpath=standardColumnlabelXpath.replace("TEMP_VALUE",actionOption);
            }await z.seeElement(standardColumnlabelXpath);
            logger.info(label+" option is available under Actions menu");
    }

    static async clickOnContractActionOption(label:string,actionOption:string) {
        let standardColumnlabelXpath:string="";
            standardColumnlabelXpath=await AuroraLmt.getElement(auroraContractGridViewElements.DYN_GRID_CONTRACT_ACTION_OPTION);
            if(standardColumnlabelXpath.includes("TEMP_VALUE")){
                standardColumnlabelXpath=standardColumnlabelXpath.replace("TEMP_VALUE",actionOption);
            }await z.click(standardColumnlabelXpath);
            logger.info("Clicked on "+label+" option available under Actions menu");
    }

    static async clickOnAmendmentAttchementIcon() {
        await z.click(await AuroraLmt.getElement(auroraContractGridViewElements.AURORA_CONTRACT_AMENDMENT_ICON));
    }


    static async checkGridColumnArrangement() {
        await z.wait(8);
        let headers:string[]=await z.grabNumberOfVisibleElements(await AuroraLmt.getElement(auroraContractGridViewElements.GRID_HEADERS));
        let i:number;
        for(i=0;i<headers.length;i++){
            logger.info(headers[i]);
        }
    }

    static async dragAndDropGridCol(){
        let standardColumnlabelXpath=await AuroraLmt.getElement(auroraContractGridViewElements.GRID_HEADERS);
        let columns=await z.grabNumberOfVisibleElements(standardColumnlabelXpath);
        await z.moveCursorTo(columns[1]);
        await z.dragAndDrop(columns[1],columns[2]);
        logger.info("Rearranged column1 and column2 Successfully");
    }

    static async checkSelectAllCheckboxOnGrid() {
        await z.seeElement(await AuroraLmt.getElement(auroraContractGridViewElements.SELECT_ALL_CHECKBOX_ON_GRID_VIEW));
    }

    static async checkGridTitleAndDescription() {
        let title=await z.grabTextFrom(await AuroraLmt.getElement(auroraContractGridViewElements.AURORA_REPOSITORY_GRID_TITLE));
        logger.info("Title displayed on the grid is:"+title);
    }

    static async checkGridSelectorCell() {
        await z.seeElement(await AuroraLmt.getElement(auroraContractGridViewElements.AURORA_REPOSITORY_GRID_SELECTOR_CELLS));
    }

    static async checkColumnSortLNKForGridHeaders() {
        await z.wait(5);
        await z.waitForInvisible("//i[@class='p-datatable-loading-icon pi pi-spin pi-spinner']");
        logger.info("first");
        await z.moveCursorTo("//span[@class='colHeaderTitle' and @title='Contract Title']");
        logger.info("Hovered");
        await z.seeElement(await AuroraLmt.getElement(auroraContractGridViewElements.AURORA_REPOSITORY_GRID_HEADER_SORT_LNK));
    }

    static async clickOnFirstContractNumberFromGrid() {
        await z.click(await AuroraLmt.getElement(auroraContractGridViewElements.AURORA_GRID_FIRST_CONTRACT_NUMBER));
        await z.wait(5);
    }


    static async checkStandardColumnOnGridView(label:string,status:string) {
        let standardColumnlabelXpath:string="";
        if(status=="true"){
            standardColumnlabelXpath=await AuroraLmt.getElement(auroraContractGridViewElements.DYN_GRID_HEADER_LABEL);
            if(standardColumnlabelXpath.includes("TEMP_VALUE")){
                standardColumnlabelXpath=standardColumnlabelXpath.replace("TEMP_VALUE",label);
            }
            await z.scrollIntoView(standardColumnlabelXpath,{behavior: "auto", block: "center", inline: "center"});
            await z.seeElement(standardColumnlabelXpath);
            logger.info("A column with header: "+label+" is available on Grid");
        }else{
            standardColumnlabelXpath=await AuroraLmt.getElement(auroraContractGridViewElements.DYN_GRID_HEADER_LABEL);
            if(standardColumnlabelXpath.includes("TEMP_VALUE")){
                standardColumnlabelXpath=standardColumnlabelXpath.replace("TEMP_VALUE",label);
            }
            await z.dontSeeElement(standardColumnlabelXpath);
            logger.info("A column with header: "+label+" is not available on Grid")
        }
    }


    static async checkAndAddColumnToGridView(column:string) {
        // await z.checkOption("//input[@value='"+column+"']");
        // logger.info("A column with header: "+column+" is added to the Grid");
        // await z.wait(25);
        await z.scrollIntoView("//input[@value='"+column+"']",{behavior: "auto", block: "center", inline: "center"});
        let status:string=await I.grabAttributeFrom("//input[@value='"+column+"']","aria-checked");
        console.log("test"+status);
        if(status=="true"){
            logger.info("A column with header: "+column+" is already configured for Grid");
            await z.click("//button[@label='Cancel']");
        }else if(status=="false"){
            await z.click("//span[@class='columnName' and text()='"+column+"']/../p-checkbox//div[contains(@class,'component')]");
            await z.click("//button[@label='Save']");
            await z.wait(15);
            logger.info("A column with header: "+column+" is added to the Grid");
        }
    }

    static async checkStandardColumnAlignmentOnGridView(label:string,alignment:string) {
        let standardColumnlabelXpath:string="";
        if(alignment=="left"){
            standardColumnlabelXpath=await AuroraLmt.getElement(auroraContractGridViewElements.GRID_HEADERS);
            let columns:string[]=await z.grabAttributeFrom(standardColumnlabelXpath,"title");
            if(columns[0]==label){
                console.log(label+" is left aligned");
            }else{
                console.log(label+" is not left aligned");
            }
        }else if(alignment=="right"){
            standardColumnlabelXpath=await AuroraLmt.getElement(auroraContractGridViewElements.GRID_HEADERS);
            let columns:string[]=await z.grabAttributeFrom(standardColumnlabelXpath,"title");
            console.log("test: "+columns[columns.length-1]);
            if(columns[columns.length-1]==label){
                console.log(label+" is right aligned");
            }else{
                console.log(label+" is not right aligned");
            }
        }
    }

    static async checkFormat(label:string){
        let labelFormatXpath:string=await AuroraLmt.getElement(auroraContractGridViewElements.DYN_LABEL_FORMAT);
        if(labelFormatXpath.includes("TEMP_VALUE")){
            labelFormatXpath.replace("TEMP_VALUE",label);
        }
        let labelFormat=await z.grabTextFrom(labelFormatXpath);
        //Write logic to compare label value format
    }

    static async checkGridSearchboxForColumn(label:string){
        await z.seeElement("//span[@class='colHeaderTitle' and @title='"+label+"']/../../..//input[@placeholder='Search']");
        // let searchboxXpath:string=await AuroraLmt.getElement(auroraContractGridViewElements.DYN_GRID_COLUMN_SEARCHBOX);
        // if(searchboxXpath.includes("TEMP_VALUE")){
        //     searchboxXpath.replace("TEMP_VALUE",searchbox);
        // }
        // let labelFormat=await z.seeElement(searchboxXpath);
    }


    static async checkGridDropDownForColumn(label:string){

        await z.seeElement("//span[@class='colHeaderTitle' and @title='Contract Source']/../../..//div[contains(@class,'p-dropdown p-component p-dropdown-clearable')]");
        // let dropdownXpath:string=await AuroraLmt.getElement(auroraContractGridViewElements.DYN_GRID_COLUMN_DROPDOWN_FILTER);
        // if(dropdownXpath.includes("TEMP_VALUE")){
        //     dropdownXpath.replace("TEMP_VALUE",label);
        // }
        // let labelFormat=await z.seeElement(dropdownXpath);
    }

    // static async CheckPrimaryCPValueForContractingPartyColumn() {
    //     await z.seeElement(await AuroraLmt.getElement(auroraContractGridViewElements.PRIMARY_CP_LABEL_ON_GRID));
    // }


    static async CheckCPLinkForSecondaryCPs() {
        await z.seeElement(await AuroraLmt.getElement(auroraContractGridViewElements.CP_LINK));

    }

    static async CheckPrimaryCPsUnderPopover() {
        let primaryCPXpath:string=await AuroraLmt.getElement(auroraContractGridViewElements.PRIMARY_CP_LABEL);
        await z.seeElement(primaryCPXpath);
        let primaryCP=await z.grabTextFrom(primaryCPXpath);
        logger.info("Primary CP:"+primaryCP);

    }

    static async CheckSecondaryCPsUnderPopover() {
        // let secondaryCPXpath:string=await AuroraLmt.getElement(auroraContractGridViewElements.SECONDARY_CP_LIST);
        // await z.seeElement(secondaryCPXpath);
        // let secondaryCP=await z.grabTextFrom(secondaryCPXpath);
        await z.click(await AuroraLmt.getElement(auroraContractGridViewElements.CP_LINK));
        let secondaryCP=await z.grabTextFrom("//div[@class='contract-name subCPList']");
        logger.info("Secondary CPs:");
        logger.info(secondaryCP);
    }
    static async checkMoreBUsUnderPopover() {
        await z.seeElement(await AuroraLmt.getElement(auroraContractGridViewElements.MORE_BU_LIST));
        let bUs= await z.grabTextFrom(await AuroraLmt.getElement(auroraContractGridViewElements.MORE_BU_LIST));
        logger.info("Bu list is:");
        logger.info(bUs);
    }

    static async CheckBULink() {
        await z.seeElement(await AuroraLmt.getElement(auroraContractGridViewElements.BU_LINK));
    }


    static async ClickOnCPLinkForAllCPs() {
        await z.click(await AuroraLmt.getElement(auroraContractGridViewElements.CP_LINK));
    }

    static async ClickOnBULink() {
        await z.click(await AuroraLmt.getElement(auroraContractGridViewElements.BU_LINK));
    }


    static async CheckPopoverForSecondaryCPs() {
        await z.seeElement(await AuroraLmt.getElement(auroraContractGridViewElements.CP_POPOVER));
    }


}

/*******************************************************Services Ends******************************************************/
