"use strict";
/**
 * The class is to perform add milestone actions
 *
 * @author somnath.k
 *
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMilestoneActions = void 0;
const AuroraLmt_1 = require("../../../common/Data/AuroraLmt");
const AddMilestoneElements_1 = require("./AddMilestoneElements");
const z_1 = require("actionbot-wrapper/z");
const { I } = inject();
class AddMilestoneActions {
    /********************************************************Sub Services Starts**********************************************************/
    /**
    * To click on milestone menu
    * @author somnath.k
    */
    static async clickonMilestoneMenu() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.MILESTONE_MENU));
    }
    /**
    * To click on add new button
    * @author somnath.k
    */
    static async clickonAddNewBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.MILESTONE_ADD_NEW_BTTN));
    }
    /**
    * To click on add icon
    * @author somnath.k
    */
    static async clickonAddIcon() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.MILESTONE_ADD_ICON));
    }
    /**
    * To click on cross icon in the milestone overlay
    * @author somnath.k
    */
    static async clickonCrossIcon() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.MILESTONE_CROSS_ICON));
    }
    /**
    * To click on no button in the discard changes popup
    * @author somnath.k
    */
    static async clickonNoBttnPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.DISCARD_NO_OPTION));
    }
    /**
    * To click on yes button in the discard changes popup
    * @author somnath.k
    */
    static async clickonYesBttnPopup() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.DISCARD_NO_OPTION));
    }
    /**
    * To click on cancel button in the milestone overlay
    * @author somnath.k
    */
    static async clickonMilestoneOverlayCancelBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.MILESTONE_OVERLAY_CANCEL_BTTN));
    }
    /**
    * To click on save button in the milestone overlay
    * @author somnath.k
    */
    static async clickonMilestoneOverlaySaveBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.MILESTONE_OVERLAY_SAVE_BTTN));
    }
    /**
    * To click on On radio button in the milestone overlay
    * @author somnath.k
    */
    static async clickonMilestoneOverlayOnRBttn() {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AddMilestoneElements_1.addMilestoneElements.MILESTONE_OVERLAY_ON_RADIO_BTTN));
    }
}
exports.AddMilestoneActions = AddMilestoneActions;
