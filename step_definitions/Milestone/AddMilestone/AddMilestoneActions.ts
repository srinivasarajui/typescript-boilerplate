/**
 * The class is to perform add milestone actions
 *
 * @author somnath.k
 *
 *
*/

import { AuroraLmt } from "../../../common/Data/AuroraLmt";
import { addMilestoneElements } from "./AddMilestoneElements";
import { z } from "actionbot-wrapper/z";
const { I } = inject();


export class AddMilestoneActions {


    /********************************************************Sub Services Starts**********************************************************/


    /**
    * To click on milestone menu
    * @author somnath.k
    */
    static async clickonMilestoneMenu() {
        await z.click(await AuroraLmt.getElement(addMilestoneElements.MILESTONE_MENU));
    }

    /**
    * To click on add new button
    * @author somnath.k
    */
     static async clickonAddNewBttn() {
        await z.click(await AuroraLmt.getElement(addMilestoneElements.MILESTONE_ADD_NEW_BTTN));
    }

    /**
    * To click on add icon
    * @author somnath.k
    */
     static async clickonAddIcon() {
        await z.click(await AuroraLmt.getElement(addMilestoneElements.MILESTONE_ADD_ICON));
    }

    /**
    * To click on cross icon in the milestone overlay
    * @author somnath.k
    */
     static async clickonCrossIcon() {
        await z.click(await AuroraLmt.getElement(addMilestoneElements.MILESTONE_CROSS_ICON));
    }

    /**
    * To click on no button in the discard changes popup
    * @author somnath.k
    */
     static async clickonNoBttnPopup() {
        await z.click(await AuroraLmt.getElement(addMilestoneElements.DISCARD_NO_OPTION));
    }

    /**
    * To click on yes button in the discard changes popup
    * @author somnath.k
    */
     static async clickonYesBttnPopup() {
        await z.click(await AuroraLmt.getElement(addMilestoneElements.DISCARD_NO_OPTION));
    }

    /**
    * To click on cancel button in the milestone overlay
    * @author somnath.k
    */
     static async clickonMilestoneOverlayCancelBttn() {
        await z.click(await AuroraLmt.getElement(addMilestoneElements.MILESTONE_OVERLAY_CANCEL_BTTN));
    }

    /**
    * To click on save button in the milestone overlay
    * @author somnath.k
    */
     static async clickonMilestoneOverlaySaveBttn() {
        await z.click(await AuroraLmt.getElement(addMilestoneElements.MILESTONE_OVERLAY_SAVE_BTTN));
    }


    /**
    * To click on On radio button in the milestone overlay
    * @author somnath.k
    */
     static async clickonMilestoneOverlayOnRBttn() {
        await z.click(await AuroraLmt.getElement(addMilestoneElements.MILESTONE_OVERLAY_ON_RADIO_BTTN));
    }



    /***************************************************************************Sub Services Ends*********************************************************************/



    /***************************************************************************Services Starts***********************************************************************/



    /***************************************************************************Services Ends*************************************************************************/


}

