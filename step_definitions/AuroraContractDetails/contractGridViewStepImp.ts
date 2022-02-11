/**
 * Step definition file for Contract Details feature file
 *
 * @author somnath.k
 *
 *
 */

import { ContractGridViewActions } from "./contractGridViewActions";

const { I } = inject();

 /**************************************************************************User Story AURORA- Starts******************************************** */


 Given('I click on {string} link in the side Navigation Bar', async function(link) {
    await ContractGridViewActions.clickOnSideNavigationBarLink(link);
});

When('I navigate to {string} page view', async function(page) {
    //await CommonComponent.verifyPageDisplayed(page)
});

When('I check standard column {string} displayed {string}', async function(label:string,status:string) {
    await ContractGridViewActions.checkStandardColumnOnGridView(label,status);
 });

Then('I check primary party value is shown for Contracting Party standard column', async () => {
    await ContractGridViewActions.CheckPrimaryCPValueForContractingPartyColumn();
});


Then('I see a grid view for Contracts displayed', async () => {
    await ContractGridViewActions.CheckContractsGridView();
});

Then('I check Contracting Party value has a link', async () => {
    await ContractGridViewActions.CheckCPLinkForSecondaryCPs();
});

Then('I check Business Units value has a link', async () => {
    await ContractGridViewActions.CheckBULink();
});


When('I click on Contracting Party value link', async () => {
    await ContractGridViewActions.ClickOnCPLinkForSecondaryCPs();
});

When('I click on Business Units value link', async () => {
    await ContractGridViewActions.ClickOnBULink();
});


Then('I see a popover with all CPs listed', async () => {
    await ContractGridViewActions.CheckSecondaryCPsUnderPopover();
});

Then('I see a popover with all Business Units listed', async () => {
    await ContractGridViewActions.checkMoreBUsUnderPopover();
});


Then('I check Data representation format for {string} standard column', async function(label:string){
    await ContractGridViewActions.checkFormat(label);
});









