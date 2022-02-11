"use strict";
/**
 * Step definition file for Contract Details feature file
 *
 * @author somnath.k
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AuroraLmt_1 = require("../../common/Data/AuroraLmt");
const BasicInformationActions_1 = require("../Repository/UploadContract/BasicInformationActions");
const CommonComponent_1 = require("./../commonKeywords/CommonComponent");
const contractDetailsActions_1 = require("./contractDetailsActions");
const GlobalVariables_1 = require("./../../common/dataCreation/GlobalVariables");
const AuroraContractDetailsElements_1 = require("../Repository/Contract Details/AuroraContractDetailsElements");
const contractDetailsElements_1 = require("./contractDetailsElements");
const logger_1 = require("../../common/Logger/logger");
const config_1 = require("../../common/config");
const z_1 = require("actionbot-wrapper/z");
/**************************************************************************User Story AURORA- Starts******************************************** */
Given('I login to clm application', async () => {
    //  await ContractDetailsActions.loginToCLM(await Startup.users.get("USERNAME") as string, await Startup.users.get("PASSWORD") as string);
    await contractDetailsActions_1.ContractDetailsActions.loginToCLM(config_1.prop.USERNAME, config_1.prop.PASSWORD);
});
Given('I click on {string} link in the side Navigation Bar', async function (link) {
    await contractDetailsActions_1.ContractDetailsActions.clickOnSideNavigationBarLink(link);
});
When('I select CLM product in product selection page', async () => {
    await contractDetailsActions_1.ContractDetailsActions.selectClmProduct();
});
When('I click on manage contract tab', async () => {
    await contractDetailsActions_1.ContractDetailsActions.clickonManageContractTab();
});
When('I click on repository sub tab', async () => {
    await contractDetailsActions_1.ContractDetailsActions.clickonRepositorySubTab();
});
Then('I lands on repository grid page', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.REPOSITORY_GRID_PAGE));
});
When('I click on logout button in the home page', async () => {
    await BasicInformationActions_1.BasicInformationActions.clickonLogoutBttn();
});
Then('I select respective product', async () => {
    await contractDetailsActions_1.ContractDetailsActions.selectClmProduct();
});
Then('I check user lands on login page', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.LOGIN_BUTTON));
});
Then('I navigate to repository tab', async () => {
    await contractDetailsActions_1.ContractDetailsActions.clickonRepositoryTab();
});
When('I search for repository draft status contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.searchAndViewContractBasedonStatus(5);
});
When('I view first contract from the grid', async () => {
    await contractDetailsActions_1.ContractDetailsActions.clickonFirstContractlink();
});
When('I open contract having amendment from the grid', async () => {
    await contractDetailsActions_1.ContractDetailsActions.clickOnContractLinkHavingAmendment();
});
Then('I check redirect to aurora link is present', async () => {
    // let viewinAuroraXpath = await AuroraLmt.getElement(contractDetailsElements.REDIRECT_TO_AURORA_LINK);
    // if ((await CommonComponent.getHtmlElementData(viewinAuroraXpath) != null) || (await CommonComponent.getHtmlElementData(viewinAuroraXpath) != undefined)) {
    //     await z.seeElement(await AuroraLmt.getElement(contractDetailsElements.REDIRECT_TO_AURORA_LINK));
    // } else {
    //     logger.info("The contract viewed is not an repository contract,skipped");
    // }
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.REDIRECT_TO_AURORA_LINK));
});
Then('I select each enabled menu and check redirect to aurora link is present', async () => {
    await contractDetailsActions_1.ContractDetailsActions.verifyAuroraLinkinEnabledLeftMenu();
});
When('I click on redirect to aurora button', async () => {
    await z_1.z.waitForVisible(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTRACT_DETAILS_MENU));
    await contractDetailsActions_1.ContractDetailsActions.clickonRedirectToAuroraBttn();
    await z_1.z.switchToNextTab(1, 60);
    console.log("Redirected to Aurora");
});
Then('I land on aurora contract details page', async () => {
    //await z.switchToNextTab(1);
    console.log("On Aurora page");
    await z_1.z.wait(10);
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.AURORA_LOADER));
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTRACT_DETAILS_ERROR_TOASTER));
    await z_1.z.waitForVisible(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.METADATA_VIEW_HEADER), 120);
    //await z.seeElement(await AuroraLmt.getElement(contractDetailsElements.METADATA_VIEW_HEADER));
    console.log("clcik on Linked agreements");
});
Then('I click on linked agreements menu', async () => {
    await contractDetailsActions_1.ContractDetailsActions.clickOnLinkedContractsOptionMenu();
});
Given('I have document panel details', async () => {
    let UIDocumentDropdownValue = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DOCUMENT_DROPDOWN_FIRST_OPTION));
    UIDocumentDropdownValue = UIDocumentDropdownValue.split(":")[1];
    GlobalVariables_1.GlobalVariables.defaultContractDocument = "";
    GlobalVariables_1.GlobalVariables.defaultContractDocument = UIDocumentDropdownValue;
    let UIVersionDropdownValue = await z_1.z.grabTextFrom(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DOCUMENT_PANEL_VERSION_DROPDOWN));
    GlobalVariables_1.GlobalVariables.defaultVersionNo = "";
    GlobalVariables_1.GlobalVariables.defaultVersionNo = UIVersionDropdownValue;
});
When('I close aurora opened tab', async () => {
    await z_1.z.switchToPreviousTab(1);
    await z_1.z.closeOtherTabs();
});
When('I close the viewed contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.clickOnRepoContractCloseIcon();
});
When('I search for pending publish status contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.searchAndViewContractBasedonStatus(6);
});
When('I search for active status contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.searchAndViewContractBasedonStatus(1);
});
When('I search for inactive status contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.searchAndViewContractBasedonStatus(2);
});
When('I search for expired status contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.searchAndViewContractBasedonStatus(3);
});
When('I search for termination notice served status contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.searchAndViewContractBasedonStatus(4);
});
When('I search for archived status contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.searchAndViewContractBasedonStatus(7);
});
When('I add contract to my watchlist', async () => {
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.PROCESSING_REQUEST_LOADER));
    GlobalVariables_1.GlobalVariables.contractNumber = "";
    GlobalVariables_1.GlobalVariables.contractNumber = await contractDetailsActions_1.ContractDetailsActions.retrieveAddedWatchlistContract("CLM");
    logger_1.logger.info("grabbed contract number", GlobalVariables_1.GlobalVariables.contractNumber);
});
When('I navigate to dashboard tab and search for the contract', async () => {
    await contractDetailsActions_1.ContractDetailsActions.navigateToDashboard();
    await z_1.z.waitForVisible(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.FIRST_DASHBOARD_WIDGET));
    await contractDetailsActions_1.ContractDetailsActions.searchContractinMywatchlist(GlobalVariables_1.GlobalVariables.contractNumber);
});
When('I will view the contract in the my watchlist widget', async () => {
    await contractDetailsActions_1.ContractDetailsActions.clickonMywatchlistFirstContractno(GlobalVariables_1.GlobalVariables.contractNumber);
});
Then('I navigate to alerts and reminders tab', async () => {
    await contractDetailsActions_1.ContractDetailsActions.navigateToAlertsAndReminderTab();
});
Then('I will view first contract from alert section', async () => {
    await contractDetailsActions_1.ContractDetailsActions.selectFirstContractFromAlertSection();
});
// Then('I create new contract and take it till contract details page', async () => {
//     await ContractDetailsActions.clickonUploadContractBttn();
//     await ContractDetailsActions.fillRepoCreateContractInfo();
// });
Then('I check redirect to aurora link is not present', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.REDIRECT_TO_AURORA_LINK));
});
When('I fill all the contract details and click on save button', async () => {
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.PROCESSING_REQUEST_LOADER));
    await contractDetailsActions_1.ContractDetailsActions.fillContractDetailsInfo("CLM");
});
/**************************************************************************User Story AURORA- Ends******************************************** */
/**************************************************************************User Story AURORA- starts******************************************** */
Given('I have repository contract details data', async () => {
    GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue;
});
When('I navigate to aurora from random contract profile menu', async () => {
    await contractDetailsActions_1.ContractDetailsActions.selectAuroraLinkBasedonRandomMenu();
    await z_1.z.switchToNextTab(1);
});
When('I clicked on up and down arrow icon', async () => {
    await contractDetailsActions_1.ContractDetailsActions.clickOnExpandorCollapseAllIcon();
});
Then('I check all subheaders are expanded', async () => {
    let expandCount = await CommonComponent_1.CommonComponent.grabNumberElements(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DNY_ALL_SUBHEADER_EXPAND_ICON));
    let headerCount = await CommonComponent_1.CommonComponent.grabNumberElements(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DNY_HEADER_LABEL_COUNT));
    let actualResult = expandCount == headerCount;
    await z_1.z.assertEqual(true, actualResult);
});
When('I click on expand or collapse all icon', async () => {
    await contractDetailsActions_1.ContractDetailsActions.clickOnExpandorCollapseAllIcon();
});
Then('I check all subheaders are collapsed', async () => {
    let collapseCount = await CommonComponent_1.CommonComponent.grabNumberElements(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DNY_ALL_SUBHEADER_COLLAPSE_ICON));
    let headerCount = await CommonComponent_1.CommonComponent.grabNumberElements(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DNY_HEADER_LABEL_COUNT));
    let actualResult = collapseCount == headerCount;
    await z_1.z.assertEqual(true, actualResult);
});
When('I clicked on up arrow icon', async () => {
    let expandIcon = await CommonComponent_1.CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DNY_ALL_SUBHEADER_EXPAND_ICON));
    await z_1.z.click(expandIcon[0]);
});
Then('I check particualr subheader is collapsed', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTRACT_NAME_METADATA));
});
When('I clicked on down arrow icon', async () => {
    // let collapseIcon = await CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt.getElement(contractDetailsElements.DNY_ALL_SUBHEADER_COLLAPSE_ICON));
    // await z.click(collapseIcon[1] as string);
    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.COLLAPSE_BASIC_DETAILS_SUBHEADER));
});
Then('I check particular subheader is expanded', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.CONTRACT_NAME_METADATA));
});
Then('I check all metadatas and values of repository is present in aurora contract details page', async () => {
    let actualResult = await contractDetailsActions_1.ContractDetailsActions.verifyMetadataandValueInContractDetails(GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue);
    await z_1.z.assertEqual(true, actualResult);
});
/**************************************************************************User Story AURORA- Ends******************************************** */
/**************************************************************************User Story AURORA- starts******************************************** */
Given('I have repository details data,uploaded file name and version details', async () => {
    GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue;
    GlobalVariables_1.GlobalVariables.uploadedFileName = "";
    GlobalVariables_1.GlobalVariables.uploadedFileName = await contractDetailsActions_1.ContractDetailsActions.getParticularMetadataValueFromContractDetailsData("Digital Contract Document", GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue);
    logger_1.logger.info("Current filename from contract details page" + GlobalVariables_1.GlobalVariables.uploadedFileName);
    GlobalVariables_1.GlobalVariables.newContractVersionNo = await AuroraLmt_1.AuroraLmt.getData("New_Contract_Version_No");
});
When('I click on expand or collapse document panel icon', async () => {
    await contractDetailsActions_1.ContractDetailsActions.clickOnExpandorCollapseDocumentPanelIcon();
});
Then('I check document panel is collapsed', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DOCUMENT_PANEL));
});
Then('I check document panel is expanded', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.DOCUMENT_PANEL));
});
Then('I check uploaded document name in the metadata section', async () => {
    await contractDetailsActions_1.ContractDetailsActions.verifyUploadedDocument(GlobalVariables_1.GlobalVariables.uploadedFileName);
    GlobalVariables_1.GlobalVariables.uploadedFileName = "";
});
Then('I check no data to preview message is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.NO_DATA_TO_PREVIEW));
});
Then('I check default contract title name is shown in the document preview dropdown list', async () => {
    let contractName = await contractDetailsActions_1.ContractDetailsActions.getParticularMetadataValueFromContractDetailsData("Contract Name", GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue);
    let actualValue = await contractDetailsActions_1.ContractDetailsActions.verifyDefaultValueinDocumentPanelDropdown(contractName);
    await z_1.z.assertEqual(true, actualValue);
});
Then('I check latest version number in the version dropdown', async () => {
    let versionNo = await AuroraLmt_1.AuroraLmt.getData("New_Contract_Version_No");
    let actualValue = await contractDetailsActions_1.ContractDetailsActions.verifyLatestVersionNoinDocumentPanel(versionNo);
    await z_1.z.assertEqual(true, actualValue);
});
Then('I check version list count in the aurora page', async () => {
    let versionNoCount = 1;
    let actualValue = await contractDetailsActions_1.ContractDetailsActions.verifyLatestVersionNoCountinDocumentPanel(versionNoCount);
    await z_1.z.assertEqual(true, actualValue);
});
When('I clicked on document menu', async () => {
    await contractDetailsActions_1.ContractDetailsActions.clickOnDocumentTab();
});
Then('I check selected preview is retained in the document pannel', async () => {
    let previousDocument = GlobalVariables_1.GlobalVariables.defaultContractDocument;
    let previousVersionNumber = GlobalVariables_1.GlobalVariables.defaultVersionNo;
    let previousDocFlag = await contractDetailsActions_1.ContractDetailsActions.verifyDefaultValueinDocumentPanelDropdown(previousDocument);
    let previousVerFlag = await contractDetailsActions_1.ContractDetailsActions.verifyLatestVersionNoinDocumentPanel(previousVersionNumber);
    let actualVal = previousDocFlag == previousVerFlag;
    await z_1.z.assertEqual(true, actualVal);
});
When('I navigate to contract details page', async () => {
    await contractDetailsActions_1.ContractDetailsActions.clickOnRepoContractDetailsTab();
});
Then('I check Contract Details page is displayed', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.METADATA_VIEW_HEADER));
    console.log("Contract Details page is displayed");
});
When('I replace contract with pdf document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileName = "";
    GlobalVariables_1.GlobalVariables.uploadedFileName = await CommonComponent_1.CommonComponent.replaceDocument(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.UPLOAD_DIGITAL_DOCUMENT), await AuroraLmt_1.AuroraLmt.getData("PDF_FORMAT_DOCUMENT"));
});
When('I replace contract with docx document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileName = "";
    GlobalVariables_1.GlobalVariables.uploadedFileName = await CommonComponent_1.CommonComponent.replaceDocument(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.UPLOAD_DIGITAL_DOCUMENT), await AuroraLmt_1.AuroraLmt.getData("DOCX_FORMAT_DOCUMENT"));
});
Then('I click on save button in the repository contract details page', async () => {
    await contractDetailsActions_1.ContractDetailsActions.clickonSaveContractButton();
});
When('I replace contract with scanned pdf document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileName = "";
    GlobalVariables_1.GlobalVariables.uploadedFileName = await CommonComponent_1.CommonComponent.replaceDocument(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.UPLOAD_DIGITAL_DOCUMENT), await AuroraLmt_1.AuroraLmt.getData("SCANNED_PDF_FORMAT_DOCUMENT"));
});
When('I wait until file is uploaded in the contract details page', async () => {
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.PROCESSING_REQUEST_LOADER));
});
When('I replace contract with random clm template document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileName = "";
    GlobalVariables_1.GlobalVariables.uploadedFileName = await CommonComponent_1.CommonComponent.replaceRandomDocument(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.UPLOAD_DIGITAL_DOCUMENT), await AuroraLmt_1.AuroraLmt.getData("RANDOM_CLM_DOCUMENT"));
});
When('I replace contract with minimum name and size random valid format document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileName = "";
    GlobalVariables_1.GlobalVariables.uploadedFileName = await CommonComponent_1.CommonComponent.replaceRandomDocument(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.UPLOAD_DIGITAL_DOCUMENT), await AuroraLmt_1.AuroraLmt.getData("RANDOM_MINIMUM_NAME_AND_SIZE_DOCUMENT"));
});
When('I replace contract with maximum name and size random valid format document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileName = "";
    GlobalVariables_1.GlobalVariables.uploadedFileName = await CommonComponent_1.CommonComponent.replaceRandomDocument(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.UPLOAD_DIGITAL_DOCUMENT), await AuroraLmt_1.AuroraLmt.getData("RANDOM_MAXIMUM_NAME_AND_SIZE_DOCUMENT"));
});
When('I replace contract with content copying pdf document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileName = "";
    GlobalVariables_1.GlobalVariables.uploadedFileName = await CommonComponent_1.CommonComponent.replaceDocument(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.UPLOAD_DIGITAL_DOCUMENT), await AuroraLmt_1.AuroraLmt.getData("CONTENT_COPYING_PDF_FORMAT_DOCUMENT"));
});
When('I replace contract with random password protected document', async () => {
    GlobalVariables_1.GlobalVariables.uploadedFileName = "";
    GlobalVariables_1.GlobalVariables.uploadedFileName = await CommonComponent_1.CommonComponent.replaceRandomDocument(await AuroraLmt_1.AuroraLmt.getElement(contractDetailsElements_1.contractDetailsElements.UPLOAD_DIGITAL_DOCUMENT), await AuroraLmt_1.AuroraLmt.getData("RANDOM_PASSWORD_PROTECTED_DOCUMENT"));
});
/**************************************************************************User Story AURORA- Ends******************************************** */
/****************************************************** AURORA-554 **********************************************************************/
Given('I navigate to product configuration', async () => {
    await contractDetailsActions_1.ContractDetailsActions.clickonSetupTab();
    await contractDetailsActions_1.ContractDetailsActions.clickOnProdConfig();
});
When('I click on application settings', async () => {
    await contractDetailsActions_1.ContractDetailsActions.clickOnAppSettings();
});
When('I set cp as mandatory in application settings', async () => {
    await contractDetailsActions_1.ContractDetailsActions.makeIsCpMandatoryYes();
});
When('I set cp as non mandatory in application settings', async () => {
    await contractDetailsActions_1.ContractDetailsActions.makeIsCpMandatoryNo();
});
/****************************************************** AURORA-554 **********************************************************************/
/****************************************************** AURORA-927 **********************************************************************/
When('I filter {string} contracts with {string} as {string}', async function (attributeType, label, status) {
    await contractDetailsActions_1.ContractDetailsActions.filterContracts(attributeType, label, status);
    await z_1.z.wait(3);
});
