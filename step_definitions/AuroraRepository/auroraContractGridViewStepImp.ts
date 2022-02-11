/**
 * Step definition file for Contract Details feature file
 *
 * @author Datta
 *
 *
 */

import { AuroraContractGridViewActions } from "./auroraContractGridViewActions";
import { z } from "actionbot-wrapper/z";

const { I } = inject();

 /*************************************************AURORA-660 Starts******************************************** */


 Given('I click on {string} link in the side Navigation Bar', async function(link:string) {

});

When('I navigate to {string} page view', async function(page:string) {
    await AuroraContractGridViewActions.navigateToContyractsPage(page);
});

When('I check the header title is {string}', async function(header:string) {
    await AuroraContractGridViewActions.checkGridHeaderTitle(header);
});


Then('I check Clear Filter Icon is enable is {string}', async function(status:string) {
    await AuroraContractGridViewActions.checkClearFilterIconStatus(status);
});

Then('I {string} for {string} as {string} on grid', async function(type:string,label:string,value:string) {
    await AuroraContractGridViewActions.filterColumnvalueWith(type,label,value);
});

Then('I check {string} included in the header', async function(label:string) {
    await AuroraContractGridViewActions.checkHeaderIcon(label);
});

Then('I click on {string} available in the header', async function(icon:string) {
    await AuroraContractGridViewActions.clickOnGridIcons(icon);
    await z.wait(3);
});

Then('I reset grid to default Header columns', async () => {
    await AuroraContractGridViewActions.clickOnGridResetLink();
});


Then('I see a popover panel displayed to select columns and ordering on the grid', async () => {
    await AuroraContractGridViewActions.CheckCustomizeGridPopup();
});


Then('I land on create new contract page', async () => {
    await AuroraContractGridViewActions.checkCreateContractPageDisplayed();
});


Then('I check only selected items are shown on the grid', async () => {
    await AuroraContractGridViewActions.checkOnlySelectedItemsShownOnGrid();
});

Then('I check unchecked items are not shown on the grid', async () => {
    console.log("testing");
    await AuroraContractGridViewActions.checkUnchecdItemsNotShownOnGrid();
});

When('I customize grid by adding {string} column to the grid', async function(label:string) {
    await AuroraContractGridViewActions.checkAndAddColumnToGridView(label);
 });

When('I check standard column {string} displayed {string}', async function(label:string,status:string) {
    await AuroraContractGridViewActions.checkStandardColumnOnGridView(label,status);
 });

Then('I click on contract number of first contract', async () => {
    await AuroraContractGridViewActions.clickOnFirstContractNumberFromGrid();
});


 When('I check standard column {string} is freezed from {string} end of the grid', async function(label:string,alignment:string) {
    await AuroraContractGridViewActions.checkStandardColumnAlignmentOnGridView(label,alignment);
 });


// Then('I check primary party value is shown for Contracting Party standard column', async () => {
//     await AuroraContractGridViewActions.CheckPrimaryCPValueForContractingPartyColumn();
// });


Then('I see a grid view for Contracts displayed', async () => {
    await AuroraContractGridViewActions.CheckContractsGridView();
});

Then('I check Contract Number is visible in blue color as a link', async () => {
    await AuroraContractGridViewActions.CheckContractNumIsALink();
});


Then('I click on actions link of first contract', async () => {
    await AuroraContractGridViewActions.clickFirstContractActionLink();
});

Then('I check {string} option under Actions', async function(label:string) {
    let actionOption:string="";
    if(label=="View"){
        actionOption="view";
    }
    if(label=="Create Amendment"){
        actionOption="createamendment";
    }
    if(label=="Request Amendment"){
        actionOption="requestamendment";
    }
    if(label=="Clone in Repository"){
        actionOption="clonerepo";
    }
    if(label=="Clone in Authoring"){
        actionOption="cloneauth";
    }
    if(label=="Delete"){
        actionOption="delete";
    }
    await AuroraContractGridViewActions.checkContractActionOption(label,actionOption);
});

Then('I click on {string} option under Actions', async function(label:string) {
    let actionOption:string="";
    if(label=="View"){
        actionOption="view";
    }
    if(label=="Create Amendment"){
        actionOption="createamendment";
    }
    if(label=="Request Amendment"){
        actionOption="requestamendment";
    }
    if(label=="Clone in Repository"){
        actionOption="clonerepo";
    }
    if(label=="Clone in Authoring"){
        actionOption="cloneauth";
    }
    if(label=="Delete"){
        actionOption="delete";
    }
    await AuroraContractGridViewActions.clickOnContractActionOption(label,actionOption);
});





Then('I check for contact having Amendment attached', async () => {
    await AuroraContractGridViewActions.CheckContractHavingAmendment();
});

Then('I see an amendment attached Icon next contract number', async () => {
    await AuroraContractGridViewActions.CheckAmendmentAttchementIcon();
});

Then('I click on Amendment Icon next contract number', async () => {
    await AuroraContractGridViewActions.clickOnAmendmentAttchementIcon();
});

When('I check grid column arrangement', async () => {
    await AuroraContractGridViewActions.checkGridColumnArrangement();
});

When('I drag and drop repoGrid columns', async () => {
    await AuroraContractGridViewActions.dragAndDropGridCol();
});


When('I check Select All checkbox is availbale to select and unselect all items in the grid', async () => {
    await AuroraContractGridViewActions.checkSelectAllCheckboxOnGrid();
});

When('I check gird has title and optional description', async () => {
    await AuroraContractGridViewActions.checkGridTitleAndDescription();
});

When('I check gird has Selector Cells', async () => {
    await AuroraContractGridViewActions.checkGridSelectorCell();
});

When('I check grid headers have sort link added to each columns', async () => {
    await AuroraContractGridViewActions.checkColumnSortLNKForGridHeaders();
});


Then('I check Contracting Party value has a link', async () => {
    await AuroraContractGridViewActions.CheckCPLinkForSecondaryCPs();
});

Then('I check Business Units value has a link', async () => {
    await AuroraContractGridViewActions.CheckBULink();
});


When('I click on Contracting Party value link', async () => {
    await AuroraContractGridViewActions.ClickOnCPLinkForAllCPs();
});

When('I click on Business Units value link', async () => {
    await AuroraContractGridViewActions.ClickOnBULink();
});


Then('I see a popover with all CPs listed', async () => {
    await AuroraContractGridViewActions.CheckPrimaryCPsUnderPopover();
    await AuroraContractGridViewActions.CheckSecondaryCPsUnderPopover();
});

Then('I see a popover with all Business Units listed', async () => {
    await AuroraContractGridViewActions.checkMoreBUsUnderPopover();
});


Then('I check Data representation format for {string} standard column', async function(label:string){
    await AuroraContractGridViewActions.checkFormat(label);
});

Then('I check Search functionality available to search contracts with {string}', async function(label:string){
    await AuroraContractGridViewActions.checkGridSearchboxForColumn(label);
});

Then('I check dropdown to filter contracts with {string}', async function(label:string){
    await AuroraContractGridViewActions.checkGridDropDownForColumn(label);
});











