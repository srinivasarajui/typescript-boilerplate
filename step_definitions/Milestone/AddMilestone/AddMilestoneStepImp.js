"use strict";
/**
 * Step definition file for add milestone feature file
 *
 * @author somnath.k
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AddMilestoneActions_1 = require("./AddMilestoneActions");
const AuroraLmt_1 = require("../../../common/Data/AuroraLmt");
const CommonComponent_1 = require("./../../commonKeywords/CommonComponent");
const GlobalVariables_1 = require("../../../common/dataCreation/GlobalVariables");
const AddMilestoneElements_1 = require("./AddMilestoneElements");
const DocumentElements_1 = require("../../Document/DocumentElements");
const logger_1 = require("../../../common/Logger/logger");
const z_1 = require("actionbot-wrapper/z");
// ********************************************************************AURORA-894******************************************************************************************************
When('I click on milestone menu', async () => {
    await AddMilestoneActions_1.AddMilestoneActions.clickonMilestoneMenu();
});
When('I land on milestone page', async () => {
    await CommonComponent_1.CommonComponent.waitUntilAuroraLoaderDisappears(await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.MILESTONE_ADD_ICON));
});
Then('I check add new button is shown in center of LHS', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.MILESTONE_ADD_NEW_BTTN));
});
Then('I check add icon is shown in LHS top', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.MILESTONE_ADD_ICON));
});
When('I click on add button that is shown in center of LHS', async () => {
    await AddMilestoneActions_1.AddMilestoneActions.clickonAddNewBttn();
});
Then('I check add milestone overlay is shown', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.SUPPORTING_DOCUMENT_DISPLAY_ON_RHS));
});
When('I click on add icon that is shown in LHS top', async () => {
    await AddMilestoneActions_1.AddMilestoneActions.clickonAddIcon();
});
When('I click on cross icon in add milestone overlay', async () => {
    await AddMilestoneActions_1.AddMilestoneActions.clickonCrossIcon();
});
Then('I check discard the changes popup is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.DISCARD_CHANGES_POPUP));
});
When('I click no button in the discard changes popup', async () => {
    await AddMilestoneActions_1.AddMilestoneActions.clickonNoBttnPopup();
});
When('I click on yes button in discard the changes popup', async () => {
    await AddMilestoneActions_1.AddMilestoneActions.clickonYesBttnPopup();
});
Then('I check add milestone overlay is not shown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(DocumentElements_1.documentElements.SUPPORTING_DOCUMENT_DISPLAY_ON_RHS));
});
When('I click cancel button in the add milestone overlay', async () => {
    await AddMilestoneActions_1.AddMilestoneActions.clickonMilestoneOverlayCancelBttn();
});
When('I click on save button in the add milestone overlay', async () => {
    await AddMilestoneActions_1.AddMilestoneActions.clickonMilestoneOverlaySaveBttn();
});
Then('I check clear icon field is not for dropdown', async () => {
    await z_1.z.dontSeeElement(await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.MILESTONE_OVERLAY_CLEAR_ALL_ICON));
});
Then('I check status field value is by default selected with planned value', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.MILESTONE_OVERLAY_PLANNED_STATUS_VAL));
});
Then('I check milestone type field value is by default selected with payable value', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.MILESTONE_OVERLAY_PAYABLE_MTYPE_VAL));
});
Then('I check deliverable type field value is by default selected with product value', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.MILESTONE_OVERLAY_PRODUCT_DTYPE_VAL));
});
Then('I check notification reference field is by default selected with option as Before and Select day as 5days', async () => {
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.MILESTONE_OVERLAY_BEFORE_RADIO_CHKD));
    await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.MILESTONE_OVERLAY_5DAYS_SDAY_VAL));
});
When('I click on On option under notification reference field', async () => {
    await AddMilestoneActions_1.AddMilestoneActions.clickonMilestoneOverlayOnRBttn();
});
Then('I check Select day field is in date type', async () => {
});
When('I fill all the fields in the add milestone overlay', async () => {
    let headeListXpath = await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.OVERLAY_HEADER_LIST);
    let particularHeaderXpath = await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.DNY_OVERLAY_PARTICULAR_HEADER);
    let dynMetadataXpath = await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.DNY_METADATA_LIST);
    await CommonComponent_1.CommonComponent.fillOverlayeDetails(headeListXpath, particularHeaderXpath, dynMetadataXpath, false, false, false, "", false, "");
    logger_1.logger.info("***************filled overlay details*************", GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue);
});
Then('I check mandatory message for all the unfilled mandatory fields is shown', async () => {
    // let actualResult=await CommonComponent.verifyMandatoryMessageForAllmandatoryFields();
    // await z.assertEqual(true,actualResult);
});
When('I fill all numeric fields in the form with invalid data', async () => {
    let headeListXpath = await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.OVERLAY_HEADER_LIST);
    let particularHeaderXpath = await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.DNY_OVERLAY_PARTICULAR_HEADER);
    let dynMetadataXpath = await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.DNY_METADATA_LIST);
    await CommonComponent_1.CommonComponent.fillOverlayeDetails(headeListXpath, particularHeaderXpath, dynMetadataXpath, false, false, true, await AuroraLmt_1.AuroraLmt.getData("INVALID_DATA_INTEGER"), true, "number");
    logger_1.logger.info("***************filled overlay details*************", GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue);
});
Then('I check invalid error message for each numeric field in the add milestone overlay is shown', async () => {
    let headeListXpath = await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.OVERLAY_HEADER_LIST);
    let particularHeaderXpath = await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.DNY_OVERLAY_PARTICULAR_HEADER);
    let dynMetadataXpath = await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.DNY_METADATA_LIST);
    let actualResult = await CommonComponent_1.CommonComponent.verifyErrorMsgSpecifiedFieldType(headeListXpath, particularHeaderXpath, dynMetadataXpath, "number");
    await z_1.z.assertEqual(true, actualResult);
});
When('I fill all string fields in the form with invalid data', async () => {
    let headeListXpath = await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.OVERLAY_HEADER_LIST);
    let particularHeaderXpath = await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.DNY_OVERLAY_PARTICULAR_HEADER);
    let dynMetadataXpath = await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.DNY_METADATA_LIST);
    await CommonComponent_1.CommonComponent.fillOverlayeDetails(headeListXpath, particularHeaderXpath, dynMetadataXpath, false, false, true, await AuroraLmt_1.AuroraLmt.getData("INVALID_DATA_STRING"), true, "string");
    logger_1.logger.info("***************filled overlay details*************", GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue);
});
Then('I check invalid error message for string field in the add milestone overlay is shown', async () => {
    let headeListXpath = await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.OVERLAY_HEADER_LIST);
    let particularHeaderXpath = await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.DNY_OVERLAY_PARTICULAR_HEADER);
    let dynMetadataXpath = await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.DNY_METADATA_LIST);
    let actualResult = await CommonComponent_1.CommonComponent.verifyErrorMsgSpecifiedFieldType(headeListXpath, particularHeaderXpath, dynMetadataXpath, "string");
    await z_1.z.assertEqual(true, actualResult);
});
When('I fill all non mandatory string fields in the form with invalid data', async () => {
    let headeListXpath = await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.OVERLAY_HEADER_LIST);
    let particularHeaderXpath = await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.DNY_OVERLAY_PARTICULAR_HEADER);
    let dynMetadataXpath = await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.DNY_METADATA_LIST);
    await CommonComponent_1.CommonComponent.fillOverlayeDetails(headeListXpath, particularHeaderXpath, dynMetadataXpath, false, false, true, await AuroraLmt_1.AuroraLmt.getData("INVALID_DATA_STRING"), true, "string");
    logger_1.logger.info("***************filled overlay details*************", GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue);
});
When('I fill all non mandatory numeric fields in the form with invalid data', async () => {
    let headeListXpath = await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.OVERLAY_HEADER_LIST);
    let particularHeaderXpath = await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.DNY_OVERLAY_PARTICULAR_HEADER);
    let dynMetadataXpath = await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.DNY_METADATA_LIST);
    await CommonComponent_1.CommonComponent.fillOverlayeDetails(headeListXpath, particularHeaderXpath, dynMetadataXpath, false, false, true, await AuroraLmt_1.AuroraLmt.getData("INVALID_DATA_INTEGER"), true, "number");
    logger_1.logger.info("***************filled overlay details*************", GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue);
});
