"use strict";
/**
 * Step definition file for Contract Details feature file
 *
 * @author somnath.k
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const contractGridViewActions_1 = require("./contractGridViewActions");
const { I } = inject();
/**************************************************************************User Story AURORA- Starts******************************************** */
Given('I click on {string} link in the side Navigation Bar', async function (link) {
    await contractGridViewActions_1.ContractGridViewActions.clickOnSideNavigationBarLink(link);
});
When('I navigate to {string} page view', async function (page) {
    //await CommonComponent.verifyPageDisplayed(page)
});
When('I check standard column {string} displayed {string}', async function (label, status) {
    await contractGridViewActions_1.ContractGridViewActions.checkStandardColumnOnGridView(label, status);
});
Then('I check primary party value is shown for Contracting Party standard column', async () => {
    await contractGridViewActions_1.ContractGridViewActions.CheckPrimaryCPValueForContractingPartyColumn();
});
Then('I see a grid view for Contracts displayed', async () => {
    await contractGridViewActions_1.ContractGridViewActions.CheckContractsGridView();
});
Then('I check Contracting Party value has a link', async () => {
    await contractGridViewActions_1.ContractGridViewActions.CheckCPLinkForSecondaryCPs();
});
Then('I check Business Units value has a link', async () => {
    await contractGridViewActions_1.ContractGridViewActions.CheckBULink();
});
When('I click on Contracting Party value link', async () => {
    await contractGridViewActions_1.ContractGridViewActions.ClickOnCPLinkForSecondaryCPs();
});
When('I click on Business Units value link', async () => {
    await contractGridViewActions_1.ContractGridViewActions.ClickOnBULink();
});
Then('I see a popover with all CPs listed', async () => {
    await contractGridViewActions_1.ContractGridViewActions.CheckSecondaryCPsUnderPopover();
});
Then('I see a popover with all Business Units listed', async () => {
    await contractGridViewActions_1.ContractGridViewActions.checkMoreBUsUnderPopover();
});
Then('I check Data representation format for {string} standard column', async function (label) {
    await contractGridViewActions_1.ContractGridViewActions.checkFormat(label);
});
