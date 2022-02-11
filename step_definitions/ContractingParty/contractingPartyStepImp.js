"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contractingPartyActions_1 = require("./contractingPartyActions");
/**
 * Step definition file for Contract Details feature file
 *
 * @author Datta
 *
 *
 */
const logger_1 = require("../../common/Logger/logger");
const { I } = inject();
/*************************************************AURORA-660 Starts******************************************** */
// Templates:
// When('', async () => {
//     // await
// });
// When('', async function(parameter1,parameter2) {
//     // await
// });
Then('I remove added CPs to the contract', async () => {
    await contractingPartyActions_1.ContractingPartyActions.removeCPAddedToTheContract();
    logger_1.logger.info("CP added is/are removed from the contract");
});
Then('I add CP {string} to the contract', async function (cpName) {
    await contractingPartyActions_1.ContractingPartyActions.addCPToTheContract(cpName);
    logger_1.logger.info("CP " + cpName + " is added to the contract");
});
When('I check Primary flag indication is available for primary CP as a card element', async () => {
    await contractingPartyActions_1.ContractingPartyActions.checkPrimaryFlagIndication();
    logger_1.logger.info("Primary CP flag is available on CP card");
});
When('I check Company name followed by its type is available as a card element', async () => {
    await contractingPartyActions_1.ContractingPartyActions.checkCompanyNameAndType();
    logger_1.logger.info("Company name followed by its type is available on CP card");
});
Then('I check a drop down to select CPP is available', async () => {
    await contractingPartyActions_1.ContractingPartyActions.checkCPPDropDownOnCPCard();
    logger_1.logger.info("CP Person Dropsown is available on CP card");
});
Then('I check a drop down to select address is available', async () => {
    await contractingPartyActions_1.ContractingPartyActions.checkAddressDropDownOnCPCard();
    logger_1.logger.info("CP Address Dropsown is available on CP card");
});
Then('I check action menu is available as a card element', async () => {
    await contractingPartyActions_1.ContractingPartyActions.checkActionMenuOnCPCard();
    logger_1.logger.info("Action menu is available on CP card");
});
Then('I click on Action menu from card', async () => {
    await contractingPartyActions_1.ContractingPartyActions.clickOnActionMenuOnCPCard();
    logger_1.logger.info("Clicked on ction menu from CP card");
});
Then('I click on Action menu from inactive CP card', async () => {
    await contractingPartyActions_1.ContractingPartyActions.clickOnActionMenuOnCPCard();
    logger_1.logger.info("Clicked on ction menu from CP card");
});
When('I see a popup with option {string}', async function (option) {
    await contractingPartyActions_1.ContractingPartyActions.CheckActionMenuOptionsForCPCard(option);
    logger_1.logger.info("The Action menu option " + option + " is available on CP Card");
});
When('I click on {string} action option', async function (option) {
    await contractingPartyActions_1.ContractingPartyActions.ClickOnCPCardActionMenuOptions(option);
    logger_1.logger.info("clicked on Action menu option " + option + " available on CP Card");
});
Then('I see CP Person dropdown is disabled', async () => {
    await contractingPartyActions_1.ContractingPartyActions.checkCPPDDDisabled();
    logger_1.logger.info("CP Person drop down is disabled on CP card");
});
Then('I see CP Address dropdown is disabled', async () => {
    await contractingPartyActions_1.ContractingPartyActions.checkAddressDDDisabled();
    logger_1.logger.info("CP Address drop down is disabled on CP card");
});
Then('I see CP Person dropdown is enabled', async () => {
    await contractingPartyActions_1.ContractingPartyActions.checkCPPDDEnabled();
    logger_1.logger.info("CP Person drop down is Enabled on CP card");
});
Then('I see CP Address dropdown is enabled', async () => {
    await contractingPartyActions_1.ContractingPartyActions.checkAddressDDEnabled();
    logger_1.logger.info("CP Address drop down is Enabled on CP card");
});
Then('I click on CP Address dropdown from the CP card', async () => {
    await contractingPartyActions_1.ContractingPartyActions.clickOnCPAddressDD();
    logger_1.logger.info("Successfully clicked on CP Address drop down on CP card");
});
Then('I click on CP Person dropdown from the CP card', async () => {
    await contractingPartyActions_1.ContractingPartyActions.clickOnCPPersonDD();
    logger_1.logger.info("Successfully clicked on CP Person drop down on CP card");
});
Then('I see respective CPP value by default on the CP card is shown', async () => {
    let cpp = await contractingPartyActions_1.ContractingPartyActions.checkCPDefaultPerson();
    logger_1.logger.info("Default CP Person " + cpp + " is selected on CP card as there is only one CP Person is added");
});
Then('I see respective Address value by default on the CP card is shown', async () => {
    let cpAddress = await contractingPartyActions_1.ContractingPartyActions.checkCPDefaultAddress();
    logger_1.logger.info("Default CP Address: " + cpAddress + " is selected on CP card as there is only one CP Address is added");
});
When('I check {string} drop down has place holder value {string}', async function (dropdown, placeholderExpectedValue) {
    let placeholderActualValue = await contractingPartyActions_1.ContractingPartyActions.CheckPlaceHolderVaule(dropdown);
    if (placeholderActualValue == placeholderExpectedValue) {
        logger_1.logger.info("The " + dropdown + " dropdown has placeholder value on CP Card as:" + placeholderExpectedValue);
    }
});
Then('I check multiple CPs are added to the contract', async () => {
    let cpAddress = await contractingPartyActions_1.ContractingPartyActions.checkMultipleCPsAddedToTheContract();
    logger_1.logger.info("Multiple CP are added to the contract");
});
Then('I check Primary CP card displayed on top', async () => {
    let cpAddress = await contractingPartyActions_1.ContractingPartyActions.chekPrimaryCPIsOnTop();
    logger_1.logger.info("The primary CP card is displayed on top");
});
When('I enter text inside CP search box as {string}', async function (dropdown) {
    await contractingPartyActions_1.ContractingPartyActions.enterCPSearchVaule(dropdown);
});
When('I check no data is found is shown as search result', async () => {
    await contractingPartyActions_1.ContractingPartyActions.checkInvalidCpSearchResult();
});
When('I check Clear option is available inside the search box', async () => {
    await contractingPartyActions_1.ContractingPartyActions.checkCPSeachClearIcon();
});
When('I see a note {string} for {string}', async function (field, dropdown) {
    await contractingPartyActions_1.ContractingPartyActions.checkNoteMessage(field, dropdown);
});
When('I see status label Inactive for deactivated CP on CP card', async () => {
    await contractingPartyActions_1.ContractingPartyActions.checkInactiveCPStatus();
});
When('I see a warning popup is displayed', async () => {
    await contractingPartyActions_1.ContractingPartyActions.checkWarningPopupDisplayed();
});
When('I check popup title should be {string}', async function (expectedTitle) {
    let actualTitle = await contractingPartyActions_1.ContractingPartyActions.checkWarningPopupTitle();
    if (actualTitle.includes(expectedTitle)) {
        logger_1.logger.info("Popup title shown is as expected");
    }
    else {
        console.error("Popup title shown is not as expected");
    }
});
When('I check popup message should be {string}', async function (expectedMsg) {
    let actualMsg = await contractingPartyActions_1.ContractingPartyActions.checkWarningPopupMessage();
    if (actualMsg.includes(expectedMsg)) {
        logger_1.logger.info("Popup message shown is as expected");
    }
    else {
        console.error("Popup message shown is not as expected");
    }
});
When('I check popup has button with label {string}', async function (expectedBTNLabel) {
    let actualButtonLabel = await contractingPartyActions_1.ContractingPartyActions.checkWarningPopupButton();
    if (actualButtonLabel.includes(expectedBTNLabel)) {
        logger_1.logger.info("Popup button Label shown is as expected");
    }
    else {
        console.error("Popup button label shown is not as expected");
    }
});
