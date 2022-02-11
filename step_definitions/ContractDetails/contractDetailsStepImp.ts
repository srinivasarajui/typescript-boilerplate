/**
 * Step definition file for Contract Details feature file
 *
 * @author somnath.k
 *
 *
 */

import { AuroraLmt } from "../../common/Data/AuroraLmt";
import { BasicInformationActions } from "../Repository/UploadContract/BasicInformationActions";
import { CommonComponent } from "./../commonKeywords/CommonComponent";
import { ContractDetailsActions } from "./contractDetailsActions";
import { GlobalVariables } from "./../../common/dataCreation/GlobalVariables";
import { auroraContractDetailsElements } from "../Repository/Contract Details/AuroraContractDetailsElements";
import { contractDetailsElements } from "./contractDetailsElements";
import { logger } from "../../common/Logger/logger";
import { prop } from '../../common/config';
import { z } from "actionbot-wrapper/z";

/**************************************************************************User Story AURORA- Starts******************************************** */
 Given('I login to clm application', async () => {
   //  await ContractDetailsActions.loginToCLM(await Startup.users.get("USERNAME") as string, await Startup.users.get("PASSWORD") as string);
     await ContractDetailsActions.loginToCLM(prop.USERNAME,prop.PASSWORD);
 });

 Given('I click on {string} link in the side Navigation Bar', async function(link) {
    await ContractDetailsActions.clickOnSideNavigationBarLink(link);
});


 When('I select CLM product in product selection page', async () => {
     await ContractDetailsActions.selectClmProduct();
 });

 When('I click on manage contract tab', async () => {
     await ContractDetailsActions.clickonManageContractTab();
 });

 When('I click on repository sub tab', async () => {
     await ContractDetailsActions.clickonRepositorySubTab();
 });

 Then('I lands on repository grid page', async () => {
     await z.seeElement(await AuroraLmt.getElement(contractDetailsElements.REPOSITORY_GRID_PAGE));
 });

 When('I click on logout button in the home page', async () => {
     await BasicInformationActions.clickonLogoutBttn();
 });

 Then('I select respective product', async () => {
     await ContractDetailsActions.selectClmProduct();
 });

 Then('I check user lands on login page', async () => {
     await z.seeElement(await AuroraLmt.getElement(contractDetailsElements.LOGIN_BUTTON));
 });

 Then('I navigate to repository tab', async () => {
     await ContractDetailsActions.clickonRepositoryTab();
 });

 When('I search for repository draft status contract', async () => {
     await ContractDetailsActions.searchAndViewContractBasedonStatus(5);
 });

 When('I view first contract from the grid', async () => {
     await ContractDetailsActions.clickonFirstContractlink();
 });

 When('I open contract having amendment from the grid', async () => {
    await ContractDetailsActions.clickOnContractLinkHavingAmendment();
});

 Then('I check redirect to aurora link is present', async () => {
     // let viewinAuroraXpath = await AuroraLmt.getElement(contractDetailsElements.REDIRECT_TO_AURORA_LINK);
     // if ((await CommonComponent.getHtmlElementData(viewinAuroraXpath) != null) || (await CommonComponent.getHtmlElementData(viewinAuroraXpath) != undefined)) {
     //     await z.seeElement(await AuroraLmt.getElement(contractDetailsElements.REDIRECT_TO_AURORA_LINK));
     // } else {
     //     logger.info("The contract viewed is not an repository contract,skipped");
     // }
     await z.seeElement(await AuroraLmt.getElement(contractDetailsElements.REDIRECT_TO_AURORA_LINK));
 });

 Then('I select each enabled menu and check redirect to aurora link is present', async () => {
     await ContractDetailsActions.verifyAuroraLinkinEnabledLeftMenu();
 });

 When('I click on redirect to aurora button', async () => {
     await z.waitForVisible(await AuroraLmt.getElement(contractDetailsElements.CONTRACT_DETAILS_MENU));
     await ContractDetailsActions.clickonRedirectToAuroraBttn();
     await z.switchToNextTab(1,60);
     console.log("Redirected to Aurora");
 });

 Then('I land on aurora contract details page', async () => {
     //await z.switchToNextTab(1);
     console.log("On Aurora page");
     await z.wait(10);
     await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(auroraContractDetailsElements.AURORA_LOADER));
     await z.dontSeeElement(await AuroraLmt.getElement(contractDetailsElements.CONTRACT_DETAILS_ERROR_TOASTER));
     await z.waitForVisible(await AuroraLmt.getElement(contractDetailsElements.METADATA_VIEW_HEADER),120);
     //await z.seeElement(await AuroraLmt.getElement(contractDetailsElements.METADATA_VIEW_HEADER));
    console.log("clcik on Linked agreements");
    });


 Then('I click on linked agreements menu', async () => {
    await ContractDetailsActions.clickOnLinkedContractsOptionMenu();
});

 Given('I have document panel details',async ()=>{
     let UIDocumentDropdownValue: string = await z.grabTextFrom(await AuroraLmt.getElement(contractDetailsElements.DOCUMENT_DROPDOWN_FIRST_OPTION));
     UIDocumentDropdownValue = UIDocumentDropdownValue.split(":")[1];
     GlobalVariables.defaultContractDocument = "";
     GlobalVariables.defaultContractDocument = UIDocumentDropdownValue;
     let UIVersionDropdownValue = await z.grabTextFrom(await AuroraLmt.getElement(contractDetailsElements.DOCUMENT_PANEL_VERSION_DROPDOWN));
     GlobalVariables.defaultVersionNo = "";
     GlobalVariables.defaultVersionNo = UIVersionDropdownValue;
 });

 When('I close aurora opened tab', async () => {
     await z.switchToPreviousTab(1);
     await z.closeOtherTabs();
 });

 When('I close the viewed contract', async () => {
     await ContractDetailsActions.clickOnRepoContractCloseIcon();
 });

 When('I search for pending publish status contract', async () => {
     await ContractDetailsActions.searchAndViewContractBasedonStatus(6);
 });

 When('I search for active status contract', async () => {
     await ContractDetailsActions.searchAndViewContractBasedonStatus(1);
 });

 When('I search for inactive status contract', async () => {
     await ContractDetailsActions.searchAndViewContractBasedonStatus(2);
 });

 When('I search for expired status contract', async () => {
     await ContractDetailsActions.searchAndViewContractBasedonStatus(3);
 });

 When('I search for termination notice served status contract', async () => {
     await ContractDetailsActions.searchAndViewContractBasedonStatus(4);
 });

 When('I search for archived status contract', async () => {
     await ContractDetailsActions.searchAndViewContractBasedonStatus(7);
 });

 When('I add contract to my watchlist', async () => {
     await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(contractDetailsElements.PROCESSING_REQUEST_LOADER));
     GlobalVariables.contractNumber="";
     GlobalVariables.contractNumber = await ContractDetailsActions.retrieveAddedWatchlistContract("CLM");
     logger.info("grabbed contract number",GlobalVariables.contractNumber);
 });

 When('I navigate to dashboard tab and search for the contract', async () => {
     await ContractDetailsActions.navigateToDashboard();
     await z.waitForVisible(await AuroraLmt.getElement(contractDetailsElements.FIRST_DASHBOARD_WIDGET));
     await ContractDetailsActions.searchContractinMywatchlist(GlobalVariables.contractNumber as string);
 });

 When('I will view the contract in the my watchlist widget', async () => {
     await ContractDetailsActions.clickonMywatchlistFirstContractno(GlobalVariables.contractNumber as string);
 });

 Then('I navigate to alerts and reminders tab', async () => {
     await ContractDetailsActions.navigateToAlertsAndReminderTab();
 });

 Then('I will view first contract from alert section', async () => {
     await ContractDetailsActions.selectFirstContractFromAlertSection();
 });

 // Then('I create new contract and take it till contract details page', async () => {
 //     await ContractDetailsActions.clickonUploadContractBttn();
 //     await ContractDetailsActions.fillRepoCreateContractInfo();
 // });

 Then('I check redirect to aurora link is not present', async () => {
     await z.dontSeeElement(await AuroraLmt.getElement(contractDetailsElements.REDIRECT_TO_AURORA_LINK));
 });

 When('I fill all the contract details and click on save button', async () => {
     await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(contractDetailsElements.PROCESSING_REQUEST_LOADER));
     await ContractDetailsActions.fillContractDetailsInfo("CLM");
 });

 /**************************************************************************User Story AURORA- Ends******************************************** */

 /**************************************************************************User Story AURORA- starts******************************************** */
 Given('I have repository contract details data', async () => {
     GlobalVariables.subHeaderWithmetadataandValue;
 });

 When('I navigate to aurora from random contract profile menu', async () => {
     await ContractDetailsActions.selectAuroraLinkBasedonRandomMenu();
     await z.switchToNextTab(1);
 });

 When('I clicked on up and down arrow icon', async () => {
     await ContractDetailsActions.clickOnExpandorCollapseAllIcon();
 });

 Then('I check all subheaders are expanded', async () => {
     let expandCount = await CommonComponent.grabNumberElements(await AuroraLmt.getElement(contractDetailsElements.DNY_ALL_SUBHEADER_EXPAND_ICON));
     let headerCount = await CommonComponent.grabNumberElements(await AuroraLmt.getElement(contractDetailsElements.DNY_HEADER_LABEL_COUNT));
     let actualResult = expandCount == headerCount;
     await z.assertEqual(true, actualResult);
 });

 When('I click on expand or collapse all icon',async ()=>{
     await ContractDetailsActions.clickOnExpandorCollapseAllIcon();
 });

 Then('I check all subheaders are collapsed', async () => {
     let collapseCount = await CommonComponent.grabNumberElements(await AuroraLmt.getElement(contractDetailsElements.DNY_ALL_SUBHEADER_COLLAPSE_ICON));
     let headerCount = await CommonComponent.grabNumberElements(await AuroraLmt.getElement(contractDetailsElements.DNY_HEADER_LABEL_COUNT));
     let actualResult = collapseCount == headerCount;
     await z.assertEqual(true, actualResult);
 });

 When('I clicked on up arrow icon', async () => {
     let expandIcon = await CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt.getElement(contractDetailsElements.DNY_ALL_SUBHEADER_EXPAND_ICON));
     await z.click(expandIcon[0] as string);
 });

 Then('I check particualr subheader is collapsed', async () => {
     await z.dontSeeElement(await AuroraLmt.getElement(contractDetailsElements.CONTRACT_NAME_METADATA));
 });

 When('I clicked on down arrow icon', async () => {
     // let collapseIcon = await CommonComponent.retrieveElementXpathBasedonIndex(await AuroraLmt.getElement(contractDetailsElements.DNY_ALL_SUBHEADER_COLLAPSE_ICON));
     // await z.click(collapseIcon[1] as string);
     await z.click(await AuroraLmt.getElement(contractDetailsElements.COLLAPSE_BASIC_DETAILS_SUBHEADER));
 });

 Then('I check particular subheader is expanded', async () => {
     await z.seeElement(await AuroraLmt.getElement(contractDetailsElements.CONTRACT_NAME_METADATA));
 });

 Then('I check all metadatas and values of repository is present in aurora contract details page', async () => {
     let actualResult = await ContractDetailsActions.verifyMetadataandValueInContractDetails(GlobalVariables.subHeaderWithmetadataandValue);
     await z.assertEqual(true, actualResult);
 });


 /**************************************************************************User Story AURORA- Ends******************************************** */

 /**************************************************************************User Story AURORA- starts******************************************** */

 Given('I have repository details data,uploaded file name and version details', async () => {
     GlobalVariables.subHeaderWithmetadataandValue;
     GlobalVariables.uploadedFileName="";
     GlobalVariables.uploadedFileName = await ContractDetailsActions.getParticularMetadataValueFromContractDetailsData("Digital Contract Document", GlobalVariables.subHeaderWithmetadataandValue);
     logger.info("Current filename from contract details page"+GlobalVariables.uploadedFileName);
     GlobalVariables.newContractVersionNo = await AuroraLmt.getData("New_Contract_Version_No");
 });

 When('I click on expand or collapse document panel icon', async () => {
     await ContractDetailsActions.clickOnExpandorCollapseDocumentPanelIcon();
 });

 Then('I check document panel is collapsed', async () => {
     await z.dontSeeElement(await AuroraLmt.getElement(contractDetailsElements.DOCUMENT_PANEL));
 });

 Then('I check document panel is expanded', async () => {
     await z.seeElement(await AuroraLmt.getElement(contractDetailsElements.DOCUMENT_PANEL));
 });

 Then('I check uploaded document name in the metadata section', async () => {
     await ContractDetailsActions.verifyUploadedDocument(GlobalVariables.uploadedFileName as string);
     GlobalVariables.uploadedFileName = "";
 });

 Then('I check no data to preview message is not shown', async () => {
     await z.dontSeeElement(await AuroraLmt.getElement(contractDetailsElements.NO_DATA_TO_PREVIEW));
 });

 Then('I check default contract title name is shown in the document preview dropdown list', async () => {
     let contractName = await ContractDetailsActions.getParticularMetadataValueFromContractDetailsData("Contract Name", GlobalVariables.subHeaderWithmetadataandValue);
     let actualValue = await ContractDetailsActions.verifyDefaultValueinDocumentPanelDropdown(contractName as string);
     await z.assertEqual(true, actualValue);
 });

 Then('I check latest version number in the version dropdown', async () => {
     let versionNo = await AuroraLmt.getData("New_Contract_Version_No");
     let actualValue = await ContractDetailsActions.verifyLatestVersionNoinDocumentPanel(versionNo);
     await z.assertEqual(true, actualValue);
 });

 Then('I check version list count in the aurora page', async () => {
     let versionNoCount = 1
     let actualValue = await ContractDetailsActions.verifyLatestVersionNoCountinDocumentPanel(versionNoCount);
     await z.assertEqual(true, actualValue);
 });

 When('I clicked on document menu', async () => {
     await ContractDetailsActions.clickOnDocumentTab();
 });

 Then('I check selected preview is retained in the document pannel', async () => {
     let previousDocument = GlobalVariables.defaultContractDocument;
     let previousVersionNumber = GlobalVariables.defaultVersionNo;
     let previousDocFlag = await ContractDetailsActions.verifyDefaultValueinDocumentPanelDropdown(previousDocument as string);
     let previousVerFlag = await ContractDetailsActions.verifyLatestVersionNoinDocumentPanel(previousVersionNumber as string);
     let actualVal = previousDocFlag == previousVerFlag;
     await z.assertEqual(true, actualVal);
 });

 When('I navigate to contract details page', async () => {
     await ContractDetailsActions.clickOnRepoContractDetailsTab();
  });

  Then('I check Contract Details page is displayed', async () => {
    await z.seeElement(await AuroraLmt.getElement(contractDetailsElements.METADATA_VIEW_HEADER));
    console.log("Contract Details page is displayed")
 });

 When('I replace contract with pdf document', async () => {
     GlobalVariables.uploadedFileName = "";
     GlobalVariables.uploadedFileName = await CommonComponent.replaceDocument(await AuroraLmt.getElement(contractDetailsElements.UPLOAD_DIGITAL_DOCUMENT), await AuroraLmt.getData("PDF_FORMAT_DOCUMENT"));
 });

 When('I replace contract with docx document', async () => {
     GlobalVariables.uploadedFileName = "";
     GlobalVariables.uploadedFileName = await CommonComponent.replaceDocument(await AuroraLmt.getElement(contractDetailsElements.UPLOAD_DIGITAL_DOCUMENT), await AuroraLmt.getData("DOCX_FORMAT_DOCUMENT"));
 });

 Then('I click on save button in the repository contract details page', async () => {
     await ContractDetailsActions.clickonSaveContractButton();
 });

 When('I replace contract with scanned pdf document', async () => {
     GlobalVariables.uploadedFileName = "";
     GlobalVariables.uploadedFileName = await CommonComponent.replaceDocument(await AuroraLmt.getElement(contractDetailsElements.UPLOAD_DIGITAL_DOCUMENT), await AuroraLmt.getData("SCANNED_PDF_FORMAT_DOCUMENT"));
 });

 When('I wait until file is uploaded in the contract details page', async () => {
     await CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt.getElement(contractDetailsElements.PROCESSING_REQUEST_LOADER));
 });

 When('I replace contract with random clm template document', async () => {
     GlobalVariables.uploadedFileName = "";
     GlobalVariables.uploadedFileName = await CommonComponent.replaceRandomDocument(await AuroraLmt.getElement(contractDetailsElements.UPLOAD_DIGITAL_DOCUMENT), await AuroraLmt.getData("RANDOM_CLM_DOCUMENT"));
 });

 When('I replace contract with minimum name and size random valid format document', async () => {
     GlobalVariables.uploadedFileName = "";
     GlobalVariables.uploadedFileName = await CommonComponent.replaceRandomDocument(await AuroraLmt.getElement(contractDetailsElements.UPLOAD_DIGITAL_DOCUMENT), await AuroraLmt.getData("RANDOM_MINIMUM_NAME_AND_SIZE_DOCUMENT"));
 });

 When('I replace contract with maximum name and size random valid format document', async () => {
     GlobalVariables.uploadedFileName = "";
     GlobalVariables.uploadedFileName = await CommonComponent.replaceRandomDocument(await AuroraLmt.getElement(contractDetailsElements.UPLOAD_DIGITAL_DOCUMENT), await AuroraLmt.getData("RANDOM_MAXIMUM_NAME_AND_SIZE_DOCUMENT"));
 });

 When('I replace contract with content copying pdf document', async () => {
     GlobalVariables.uploadedFileName = "";
     GlobalVariables.uploadedFileName = await CommonComponent.replaceDocument(await AuroraLmt.getElement(contractDetailsElements.UPLOAD_DIGITAL_DOCUMENT), await AuroraLmt.getData("CONTENT_COPYING_PDF_FORMAT_DOCUMENT"));
 });

 When('I replace contract with random password protected document', async () => {
     GlobalVariables.uploadedFileName = "";
     GlobalVariables.uploadedFileName = await CommonComponent.replaceRandomDocument(await AuroraLmt.getElement(contractDetailsElements.UPLOAD_DIGITAL_DOCUMENT), await AuroraLmt.getData("RANDOM_PASSWORD_PROTECTED_DOCUMENT"));
 });



 /**************************************************************************User Story AURORA- Ends******************************************** */

 /****************************************************** AURORA-554 **********************************************************************/
 Given('I navigate to product configuration',async () => {
     await ContractDetailsActions.clickonSetupTab();
     await ContractDetailsActions.clickOnProdConfig();
 });

 When('I click on application settings',async () => {
     await ContractDetailsActions.clickOnAppSettings();
 });

 When('I set cp as mandatory in application settings',async () => {
     await ContractDetailsActions.makeIsCpMandatoryYes();
 });

 When('I set cp as non mandatory in application settings',async () => {
     await ContractDetailsActions.makeIsCpMandatoryNo();
 });

 /****************************************************** AURORA-554 **********************************************************************/

 /****************************************************** AURORA-927 **********************************************************************/


 When('I filter {string} contracts with {string} as {string}', async function(attributeType,label,status) {
    await ContractDetailsActions.filterContracts(attributeType,label,status);
    await z.wait(3);
 });

