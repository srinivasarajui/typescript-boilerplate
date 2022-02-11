"use strict";
/**
 * Step definition file for Contract Details feature file
 *
 * @author Datta
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const auroraContractGridViewActions_1 = require("./auroraContractGridViewActions");
const z_1 = require("actionbot-wrapper/z");
const { I } = inject();
/*************************************************AURORA-660 Starts******************************************** */
Given('I click on {string} link in the side Navigation Bar', async function (link) {
});
When('I navigate to {string} page view', async function (page) {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.navigateToContyractsPage(page);
});
When('I check the header title is {string}', async function (header) {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.checkGridHeaderTitle(header);
});
Then('I check Clear Filter Icon is enable is {string}', async function (status) {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.checkClearFilterIconStatus(status);
});
Then('I {string} for {string} as {string} on grid', async function (type, label, value) {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.filterColumnvalueWith(type, label, value);
});
Then('I check {string} included in the header', async function (label) {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.checkHeaderIcon(label);
});
Then('I click on {string} available in the header', async function (icon) {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.clickOnGridIcons(icon);
    await z_1.z.wait(3);
});
Then('I reset grid to default Header columns', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.clickOnGridResetLink();
});
Then('I see a popover panel displayed to select columns and ordering on the grid', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.CheckCustomizeGridPopup();
});
Then('I land on create new contract page', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.checkCreateContractPageDisplayed();
});
Then('I check only selected items are shown on the grid', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.checkOnlySelectedItemsShownOnGrid();
});
Then('I check unchecked items are not shown on the grid', async () => {
    console.log("testing");
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.checkUnchecdItemsNotShownOnGrid();
});
When('I customize grid by adding {string} column to the grid', async function (label) {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.checkAndAddColumnToGridView(label);
});
When('I check standard column {string} displayed {string}', async function (label, status) {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.checkStandardColumnOnGridView(label, status);
});
Then('I click on contract number of first contract', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.clickOnFirstContractNumberFromGrid();
});
When('I check standard column {string} is freezed from {string} end of the grid', async function (label, alignment) {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.checkStandardColumnAlignmentOnGridView(label, alignment);
});
// Then('I check primary party value is shown for Contracting Party standard column', async () => {
//     await AuroraContractGridViewActions.CheckPrimaryCPValueForContractingPartyColumn();
// });
Then('I see a grid view for Contracts displayed', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.CheckContractsGridView();
});
Then('I check Contract Number is visible in blue color as a link', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.CheckContractNumIsALink();
});
Then('I click on actions link of first contract', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.clickFirstContractActionLink();
});
Then('I check {string} option under Actions', async function (label) {
    let actionOption = "";
    if (label == "View") {
        actionOption = "view";
    }
    if (label == "Create Amendment") {
        actionOption = "createamendment";
    }
    if (label == "Request Amendment") {
        actionOption = "requestamendment";
    }
    if (label == "Clone in Repository") {
        actionOption = "clonerepo";
    }
    if (label == "Clone in Authoring") {
        actionOption = "cloneauth";
    }
    if (label == "Delete") {
        actionOption = "delete";
    }
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.checkContractActionOption(label, actionOption);
});
Then('I click on {string} option under Actions', async function (label) {
    let actionOption = "";
    if (label == "View") {
        actionOption = "view";
    }
    if (label == "Create Amendment") {
        actionOption = "createamendment";
    }
    if (label == "Request Amendment") {
        actionOption = "requestamendment";
    }
    if (label == "Clone in Repository") {
        actionOption = "clonerepo";
    }
    if (label == "Clone in Authoring") {
        actionOption = "cloneauth";
    }
    if (label == "Delete") {
        actionOption = "delete";
    }
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.clickOnContractActionOption(label, actionOption);
});
Then('I check for contact having Amendment attached', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.CheckContractHavingAmendment();
});
Then('I see an amendment attached Icon next contract number', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.CheckAmendmentAttchementIcon();
});
Then('I click on Amendment Icon next contract number', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.clickOnAmendmentAttchementIcon();
});
When('I check grid column arrangement', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.checkGridColumnArrangement();
});
When('I drag and drop repoGrid columns', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.dragAndDropGridCol();
});
When('I check Select All checkbox is availbale to select and unselect all items in the grid', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.checkSelectAllCheckboxOnGrid();
});
When('I check gird has title and optional description', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.checkGridTitleAndDescription();
});
When('I check gird has Selector Cells', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.checkGridSelectorCell();
});
When('I check grid headers have sort link added to each columns', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.checkColumnSortLNKForGridHeaders();
});
Then('I check Contracting Party value has a link', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.CheckCPLinkForSecondaryCPs();
});
Then('I check Business Units value has a link', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.CheckBULink();
});
When('I click on Contracting Party value link', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.ClickOnCPLinkForAllCPs();
});
When('I click on Business Units value link', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.ClickOnBULink();
});
Then('I see a popover with all CPs listed', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.CheckPrimaryCPsUnderPopover();
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.CheckSecondaryCPsUnderPopover();
});
Then('I see a popover with all Business Units listed', async () => {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.checkMoreBUsUnderPopover();
});
Then('I check Data representation format for {string} standard column', async function (label) {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.checkFormat(label);
});
Then('I check Search functionality available to search contracts with {string}', async function (label) {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.checkGridSearchboxForColumn(label);
});
Then('I check dropdown to filter contracts with {string}', async function (label) {
    await auroraContractGridViewActions_1.AuroraContractGridViewActions.checkGridDropDownForColumn(label);
});
