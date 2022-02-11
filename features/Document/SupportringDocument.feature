# /**
#  *
#  * @author sangamesh Biradar
#  *
#  */
@AURORA_CLM
Feature: Supporting Documents

        Background:Login to clm
                Given I login to clm application
                When I select respective product
                And I navigate to repository tab


        # ****************************************[AURORA-988]****************************************

        #  **************************[Allow users to delete supporting documents]*************

        #  Manual Scenarios :
        # TC04:Verify the Message in the Delete Confirmation Popup in case of record with no name for supporting document
        # TC10:Verify the message in the toaster  displayed on deleting the supporting doc in case of record with no name for supporting document [Manual]
        # TC12:Verify if there is any error while deleting the document, retain the document information.[Manual]

        Scenario:TC01: Verify user is able to see the "Delete" option for the Supporting Docuemnts
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I check entered supporting document name for all documents below supporting document subheader is shown
                And I click on 3 dots inside supporting document card
                Then I see the Delete option is displayed for the supporting Document

        Scenario:TC02: Verify user is able to see the confirmation Popup when clicked on Delete option
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I check entered supporting document name for all documents below supporting document subheader is shown
                And I click on 3 dots inside supporting document card
                And I click on delete for a supporting Document
                Then I check remove alert popup is displayed

        Scenario:TC03: Verify the Message in the Delete Confirmation Popup
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I check entered supporting document name for all documents below supporting document subheader is shown
                And I click on 3 dots inside supporting document card
                And I click on delete for a supporting Document
                Then I check remove alert popup is displayed

        Scenario:TC05: Verify user is able to see Cancel and Delete option in the confirmation Popup
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I check entered supporting document name for all documents below supporting document subheader is shown
                And I click on 3 dots inside supporting document card
                And I click on delete for a supporting Document
                Then I check Cancel option is displayed in Supporting Doc Delete Confirmation Popup
                Then I see delete option is displayed in the confirmation popup

        Scenario:TC06:Verify user is able to click on Cancel option from the Delete confirmation Popup
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I check entered supporting document name for all documents below supporting document subheader is shown
                And I click on 3 dots inside supporting document card
                And I click on delete for a supporting Document
                When I check Cancel option is displayed in Supporting Doc Delete Confirmation Popup
                When I click on cancel button
                Then I check remove alert popup is closed

        Scenario:TC07:Verify Once confirmed on the delete pop-up, the supporting document will be removed from the contract
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I check entered supporting document name for all documents below supporting document subheader is shown
                And I click on 3 dots inside supporting document card
                And I click on delete for a supporting Document
                When I click on remove button
                Then I check remove alert popup is closed

        Scenario:TC08:Verify the toaster message is displayed on deleting the supporting doc
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I check entered supporting document name for all documents below supporting document subheader is shown
                And I click on 3 dots inside supporting document card
                And I click on delete for a supporting Document
                When I click on remove button
                Then I see Delete toaster message


        Scenario:TC09:Verify the message in the toaster  displayed on deleting the supporting doc
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I check entered supporting document name for all documents below supporting document subheader is shown
                And I click on 3 dots inside supporting document card
                And I click on delete for a supporting Document
                When I check Cancel option is displayed in Supporting Doc Delete Confirmation Popup
                When I click on remove button
                Then I see the delete toaster message content


        Scenario:TC11:Verify Deleted documents will not be listed on the RHS view
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I check all attached supportings document titles
                And I check number of documents attached
                And I click on 3 dots inside supporting document card
                And I click on delete for a supporting Document
                When I click on delete button option inside popup
                And I see Delete toaster message
                Then I check the Document is removed
                Then I check number of documents attached

        # ****************************************[AURORA-990]****************************************
        # [Bulk Actions | delete All documents]

        # Manual Scenarios:
        # TC11:Verify if there is any error while deleting all the document, retain the document information.[Manual]

        Scenario:TC01:Verify user is able to see the "Delete All" option for the Supporting Docuemnts
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I check entered supporting document name for all documents below supporting document subheader is shown
                And I click on 3 dots near the Supporting document header
                Then I see the Delete All option is displayed for the supporting Document

        Scenario:TC02:Verify user is able to see the confirmation Popup when clicked on "Delete All"option
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I check entered supporting document name for all documents below supporting document subheader is shown
                And I click on 3 dots near the Supporting document header
                And I see the Delete All option is displayed for the supporting Document
                When I click on Delete All option from Support Doc Header
                Then I check remove alert popup is displayed

        Scenario:TC03:Verify the Message in the Delete All Confirmation Popup
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I check entered supporting document name for all documents below supporting document subheader is shown
                And I click on 3 dots near the Supporting document header
                And I see the Delete All option is displayed for the supporting Document
                When I click on Delete All option from Support Doc Header
                Then I check remove alert popup is displayed

        Scenario:TC04:Verify user is able to see Cancel and Delete option in the "Delete All"  confirmation Popup
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I check entered supporting document name for all documents below supporting document subheader is shown
                And I click on 3 dots near the Supporting document header
                And I see the Delete All option is displayed for the supporting Document
                When I click on Delete All option from Support Doc Header
                Then I check Cancel option is displayed in Delete All Confirmation Popup
                Then I see delete option is displayed in the confirmation popup

        Scenario:TC05:Verify user is able to click on Cancel option from the "Delete All" confirmation Popup
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I check entered supporting document name for all documents below supporting document subheader is shown
                And I click on 3 dots near the Supporting document header
                And I see the Delete All option is displayed for the supporting Document
                When I click on Delete All option from Support Doc Header
                And I check Cancel option is displayed in Delete All Confirmation Popup
                When I click on cancel button
                Then I check remove alert popup is closed

        Scenario:TC06:Verify Once confirmed on the delete pop-up, all the supporting document will be removed from the contract
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I check entered supporting document name for all documents below supporting document subheader is shown
                And I check number of documents attached
                And I click on 3 dots near the Supporting document header
                And I see the Delete All option is displayed for the supporting Document
                When I click on Delete All option from Support Doc Header
                When I click on remove button
                And I check remove alert popup is closed
                Then I check number of documents attached

        Scenario:TC07:Verify the toaster message is displayed on deleting All the supporting doc
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I check entered supporting document name for all documents below supporting document subheader is shown
                And I click on 3 dots near the Supporting document header
                And I see the Delete All option is displayed for the supporting Document
                When I click on Delete All option from Support Doc Header
                When I click on remove button
                And I check remove alert popup is closed
                Then I see Delete toaster message

        Scenario:TC08:Verify the message in the toaster  displayed on deleting All  the supporting doc
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I check entered supporting document name for all documents below supporting document subheader is shown
                And I click on 3 dots near the Supporting document header
                And I see the Delete All option is displayed for the supporting Document
                When I click on Delete All option from Support Doc Header
                When I click on remove button
                And I check remove alert popup is closed
                Then I see the delete toaster message content

        Scenario:TC09:Verify All the Deleted documents will not be listed on the RHS view
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I check all attached supportings document titles
                And I check number of documents attached
                And I click on 3 dots near the Supporting document header
                And I see the Delete All option is displayed for the supporting Document
                When I click on Delete All option from Support Doc Header
                When I click on remove button
                And I check remove alert popup is closed
                Then I check number of documents attached


        # ------------------------------[US-Aorora-986]------------------------------
        #Manual Scenarios
        #        TC05:Verify user is able upload supporting doc on  dragging and dropping the file in document upload area for New Contract [Manual]
        #        TC20:Verify If add document form (RHS panel) contains more fields, show a vertical scroll bar
        #        TC23:Verify the fields on Add supporting document popup  form are configurable through step1
        #        TC25:Verify In case of failure on clicking save option it  show a a pop-up on the screen
        #        TC26:Verify if failure reasons (network error, server issues, etc), occurs on the pop-up itself, retain the pop-up data.
        #        TC27:Verify  if failure occurs after the pop-up closed, the data will get cleared. And user will land back on the documents base page.
        #        TC38:Verify If one file is already added, and the user tries to drop another file, show replace confirmation pop-up.
        #        TC39:Verify If multiple files are dragged together ,show an error through the mouse cursor.
        #        TC43:Verify when pressed the Keyboard tab button  the fous goes on next field/ button
        #        TC44:Verify when pressed the Keyboard Enter button action as per the button rule, no action should happen on fields
        #        TC45: Verify Esc handling on the form: same as cancel with validation checks
        #        TC46:Verify if user is entering details and refreshes the browser it shows the popup
        #        TC51:Verify for Existing Contract user is able upload supporting doc on  dragging and dropping the file in document upload area for Existing Contract
        #        TC60:Verify for Existing Contracts the fields on Add supporting document popup  form are configurable through step1 [MANUAL]
        #        TC67:Verify  for Exixting Contracts If add document form (RHS panel) contains more fields, show a vertical scroll bar.
        #       TC71: Verify for Exixting Contracts In case of failure on clicking save option it  show a a pop-up on the screen
        #       TC72: Verify for Exixting Contracts if failure reasons (network error, server issues, etc), occurs on the pop-up itself, retain the pop-up data.
        #       TC73:Verify for Exixting Contracts  if failure occurs after the pop-up closed, the data will get cleared. And user will land back on the documents base page.
        #       TC84:Verify for Existing Contacts  If one file is already added, and the user tries to drop another file, show replace confirmation pop-up.
        #       TC85:Verify for Existing Contacts If multiple files are dragged together ,show an error through the mouse cursor.
        #       TC89: Verify for Existing Contracts when pressed the Keyboard tab button  the fous goes on next field/ button
        #       TC90:Verify for Existing Contracts  when pressed the Keyboard Enter button action as per the button rule, no action should happen on fields
        #       TC91:Verify for Existing Contracts   Esc handling on the form: same as cancel with validation checks
        #       TC92:Verify for Existing Contracts   if user is entering details and refreshes the browser it shows the popup

        #Automation Scenarios


        Scenario:TC01:Verify user is able to see the  "+"  icon to add the Supporting Documents for New Contract
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                Then I see add icon to add supporting document

        Scenario:TC02:Verify When clicking on the add icon, users will be able to see  Add Supporting documents Popup  on a RHS panel for New Contract
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                Then I see the add supporting document popup on RHS panel

        Scenario:TC03:Verify User will be able to add supporting documents in a contract from Aurora screen for New Contract
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                Then I see the add supporting document popup on RHS panel
                Then I upload pdf format document

        Scenario:TC04:Verify user is able upload supporting doc on  clicking  browse button from the document upload area form the pop-up for New Contract
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                Then I upload pdf format document


        Scenario:TC06:Verify the form shows the document upload progress while uploading for New Contract
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                Then I see the add supporting document popup on RHS panel
                When I upload pdf format document
                Then I See the popup shows the document upload progress while uploading the document

        Scenario:TC07:Verify user is able to see the document size information while uploading is in progress for New Contract
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                Then I see the file size in the Popup when upload is in progress


        Scenario:TC08:verify user is able to see the Cancel option  while upload is in progress for New Contract
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                Then I see user is able to see the Cancel option  while upload is in progress

        Scenario:TC09:Verify When the supporting document upload is cancelled there will no confirmation on the screen for New Contract
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                When I click on cancel option while the upload is in progress

        Scenario:TC10:Verify user is able to see the Delete and Replace option after the supporting document is successfully uploaded for New Contract
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                Then I see Delete option on the Add Supporting document Popup
                Then I see Replace option on the Add Supporting document Popup

        Scenario:TC11:Verify user is able to see the confirmation Pop-up when clicked on Replace option after the supporting document is successfully uploaded for New Contract
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                When I see Replace option on the Add Supporting document Popup
                And I click on replace button in the Add supporting document popup
                Then I check the confirmation Pop-up is displayed when clicked on Replace option

        Scenario:TC12:Verify user is able to see the confirmation Pop-up when clicked on Delete option after the supporting document is successfully uploaded for New Contract
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                When I see Delete option on the Add Supporting document Popup
                And I click on Delete button in the Add supporting document popup
                Then I check the confirmation Pop-up is displayed when clicked on Delete option

        Scenario:TC13: Verify the previous file is retained when replacing the file is failed due to unsupported document  and show an error pop-up for this failure.
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload random invalid format document
                Then I see an error popup
                Then I check selected preview is retained in the Add supporting document Popup

        Scenario:TC14: Verify an Astrick symbol is displayed for the mandatrory field on the Add Supporting Document Pop-up
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                Then I check Astrick symbol for Document title on add supporting doc popup header
                Then I check Astrick symbol for Document Type on add supporting doc popup header


        Scenario:TC15:Verify when mandatory value is missing for Document Title when clicked on the 'save' button and an inline error message will be shown below the affected field

                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I click on save button in the Add Supporting Document Popup
                Then I check Error message below below Document Title field

        Scenario:TC16:Verify when mandatory value is missing for Document Type when clicked on the 'save' button and an inline error message will be shown below the affected field

                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I click on save button in the Add Supporting Document Popup
                Then I check Error message below below Document Type field

        Scenario:TC17:Verify character length validations is happened when clicked on the 'save' button and an inline error message will be shown below the affected field
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I enter the value in the Document Title field
                And I click on save button in the Add Supporting Document Popup
                Then I check the character limit is "100"


        Scenario:TC18:Verify If user has filled all the details and then clicks Cancel button, show a confirmation pop-up.
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                When I click on cancel button
                Then I check the confirmation Pop-up is displayed when clicked on Cancel option



        Scenario:TC19:Verify On the pop-up, if user confirms to exit the document form, the details will not be retained when next time user will open the same pop-up.
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I enter the value in the Document Title field
                When I click on cancel button
                And I click on ok button from the Cancel Popup
                Then I check the Add supporting Doc Popup is not displayed

        Scenario:TC21:Verify If user clicks on save button while any field validation fails user is auto-scroll(up/down) to  highlight the affected field.
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I click on save button in the Add Supporting Document Popup
                Then I check Error message below below Document Title field

        Scenario:TC22: Verify Once document is saved shows a toaster message on the screen along with the file name
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I enter the value in the Document Title field
                And I select the Document Type as "abc" from the dropdown
                And I click on save button in the Add Supporting Document Popup
                Then I check toaster message for Add Supporting Document is displayed

        Scenario:TC24:Verify Once document is saved the document is added on LHS Side
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I click on save button in the Add Supporting Document Popup
                Then I check the supporting Doc is displayed on LHS Side

        Scenario:TC28:Verify If user clicks on save while document upload is in progress, show a pop-up indicating the reason
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I click on save button in the Add Supporting Document Popup
                Then I check please wait popup is shown

        Scenario:TC29:Verify user is able to upload the file within 40 MB
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload 40mb valid document
                Then I see Delete option on the Add Supporting document Popup
                Then I see Replace option on the Add Supporting document Popup

        Scenario:TC30:Verify error pop-up when limit exceeds for the file size
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload randon valid format document greater than 40mb size
                Then I check file size should be less than 40 mb error popup is shown

        Scenario:TC31:Verify user is able to upload Password protected file but preview may not be available
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                And I upload password protected pdf file
                Then I check preview is not displayed for uploading Doc

        Scenario:TC32:Verify user is able to upload the DOCX format supporting  Document successfully
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                And I upload docx format document
                Then I check selected preview is retained in the Add supporting document Popup

        Scenario:TC33:Verify user is able to upload the PDF format supporting  Document successfully
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                Then I check selected preview is retained in the Add supporting document Popup

        Scenario:TC34:Verify user is unable to upload the  Invalid supporting Document successfully
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload randon valid format document greater than 40mb size
                Then I check preview is not displayed for uploading Doc

        Scenario:TC35:Verify user is able to upload the DOC format supporting  Document successfully
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload doc format document
                Then I check selected preview is retained in the Add supporting document Popup

        Scenario:TC36:Verify When clicked on the document card, the respective document's form will be shown on RHS in the view mode
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I click on save button in the Add Supporting Document Popup
                Then I check the supporting Doc is displayed on LHS Side
                When I click on the uploaded supporting Document
                Then I check the respective Supporting Document is displayed on RHS


        Scenario:TC37: Verify user can add only one file at a time
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel



        Scenario:TC40:Verify if File name is lengthy then it  appears with ellipses
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload maximum name and size random valid format document
                And I check selected preview is retained in the Add supporting document Popup
                Then I check the File name is displayed with ellipses

        Scenario:TC41:Verify if File name is lengthy then it  appears with ellipses  and on MouseHover full name is displayed
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload maximum name and size random valid format document
                Then I check full file name is displayed on MouseHover


        Scenario:TC42:Verify the character limit for Description field on the Add Supporting document popup
                When I clicked on upload contract in aurora button
                And I land on new contract page
                And I fill all the metadata fields in new contract page
                And I upload pdf format document
                And I wait until file is uploaded successfully
                And I clicked on continue button in new contract page
                And I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I enter the value in the Description field
                And I click on save button in the Add Supporting Document Popup
                Then I check the character limit is "100" for Description


        # --------------------------[For Existing contracts]------------------------------------------

        Scenario:TC47:Verify for Existing Contract ,user is able to see the  "+"  icon to select the Supporting Documents
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                Then I see add icon to add supporting document

        Scenario:TC48:Verify  for Existing Contract When clicking on the add icon, users will be able to see  Add Supporting documents Popup  on a RHS panel
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                Then I see the add supporting document popup on RHS panel

        Scenario:TC49: Verify  for Existing Contract  User will be able to add supporting documents in a contract from Aurora screen
                And I view first contract from the grid
                And I click on redirect to aurora button
                And I land on aurora contract details page
                When I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                Then I see the add supporting document popup on RHS panel
                And I check browse link is displayed on add supporting doc popup header

        Scenario:TC50:Verify for Existing Contract  user is able to upload supporting doc on  clicking  browse button from the document upload area form the pop-up
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                Then I upload pdf format document
                And I wait until file is uploaded successfully

        Scenario:TC52:Verify for Existing Contract the form shows the document upload progress while uploading
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                Then I See the popup shows the document upload progress while uploading the document

        Scenario:TC53:Verify for Existing Contract  user is able to see the document size information while uploading is in progress
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I See the popup shows the document upload progress while uploading the document
                Then I see the file size in the Popup when upload is in progress

        Scenario:TC54:Verify  for Existing Contract  user is able to see the Cancel option and  can cancel the upload while upload is in progress
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                Then I see user is able to see the Cancel option  while upload is in progress

        Scenario:TC55:Verify for Existing Contract When the supporting document upload is cancelled there will be no confirmation on the screen
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                When I click on cancel option while the upload is in progress
                Then I check the Cancel confirmation pop up is displayed


        Scenario:TC56:Verify for Existing Contract user is able to see the Delete and Replace option after the supporting document is successfully uploaded
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                # Then I see Delete option on the Add Supporting document Popup
                Then I see Replace option on the Add Supporting document Popup

        Scenario:TC57:Verify for Existing Contract user is able to see the confirmation Pop-up when clicked on Replace option after the supporting document is successfully uploaded
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I click on replace button in the Add supporting document popup
                Then I check the confirmation Pop-up is displayed when clicked on Replace option

        Scenario:TC58:Verify for Existing Contract user is able to see the confirmation Pop-up when clicked on Delete option after the supporting document is successfully uploaded
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel /
                When I upload pdf format document
                When I see Delete option on the Add Supporting document Popup
                And I click on Delete button in the Add supporting document popup
                Then I check the confirmation Pop-up is displayed when clicked on Delete option
        # On Hold

        Scenario:TC59:Verify for existing Contracts the previous file is retained when replacing the file is failed due to unsupported document  and show an error pop-up for this failure.
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I click on replace button in the Add supporting document popup
                And I click on ok button from the Replace Popup
                When I upload random invalid format document
                Then I see an error popup
                Then I check selected preview is retained in the Add supporting document Popup

        Scenario:TC61:Verify for Existing Contracts an Astrick symbol is displayed for the mandatrory field on the Add Supporting Document Pop-up
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                Then I check Astrick symbol for Document title on add supporting doc popup header

        Scenario:TC62:Verify for Existing Contract when mandatory value is missing for Document Title on clicking 'save' button  error message is displayed below the affected field
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I click on save button in the Add Supporting Document Popup
                Then I check Error message below below Document Title field


        Scenario:TC63:Verify for Existing Contract when mandatory value is missing for Document Type when clicked on the 'save' button and an inline error message will be shown below the affected field
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I click on save button in the Add Supporting Document Popup
                Then I check Error message below below Document Title field

        Scenario:TC64:Verify for Existing Contract character length validations is happened when clicked on the 'save' button and an inline error message will be shown below the affected field
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I enter the value in the Document Title field
                And I click on save button in the Add Supporting Document Popup
                Then I check Error message below below Document Title field


        Scenario:TC65:Verify for Existing Contract If user has filled all the details and then clicks Cancel button, show a confirmation pop-up.
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                When I click cancel from Add supporting document Popup
                Then I check the confirmation Pop-up is displayed when clicked on Cancel option


        Scenario:TC66:Verify for Exixting Contracts On the pop-up, if user confirms to exit the document form, the details will not be retained when next time user will open the same pop-up.
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I enter the value in the Document Title field
                When I click cancel from Add supporting document Popup
                And I click on ok button from the Cancel Popup
                Then I check the Add supporting Doc Popup is not displayed

        Scenario:TC68:Verify  for Exixting Contracts If user clicks on save button while any field validation fails user is auto-scroll(up/down) to  highlight the affected field.
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I click on save button in the Add Supporting Document Popup
                Then I check Error message below below Document Title field


        Scenario:TC69:Verify for Existing Contracts Once document is saved shows a toaster message on the screen along with the file name
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I click on save button in the Add Supporting Document Popup
                Then I check toaster message for Add Supporting Document is displayed


        Scenario:TC70:Verify for Exixting Contracts Once document is saved the document is added on LHS Side
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I enter the value in the Document Title field
                And I click on save button in the Add Supporting Document Popup
                Then I check the supporting Doc is displayed on LHS Side

        Scenario:TC74:Verify for Existing Contracts If user clicks on save while document upload is in progress, show a pop-up indicating the reason
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I click on save button in the Add Supporting Document Popup
                Then I check please wait popup is shown
        # Bug raised

        Scenario:TC75:Verify for Existing Contracts user is able to upload the file within 40 MB
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload 40mb valid document
                Then I see Delete option on the Add Supporting document Popup
                Then I see Replace option on the Add Supporting document Popup

        Scenario:TC76:Verify for Existing Contracts error pop-up when limit exceeds for the file size
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload randon valid format document greater than 40mb size
                Then I check file size should be less than 40 mb error popup is shown

        Scenario:TC77:Verify for Existing Contracts user is able to upload Password protected file but preview may not be available
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                And I upload password protected pdf file
                Then I check preview is not displayed for uploading Doc
        # Issue- Bug Raised


        Scenario:TC78:Verify for Existing Contract user is able to upload the DOC format supporting  Document successfully
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload doc format document
                Then I check selected preview is retained in the Add supporting document Popup

        Scenario:TC79:Verify for Existing Contract user is able to upload the DOCX format supporting  Document successfully
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                And I upload docx format document
                Then I check selected preview is retained in the Add supporting document Popup

        Scenario:TC80:Verify for Existing Contracts user is able to upload the PDF format supporting  Document successfully
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                Then I check selected preview is retained in the Add supporting document Popup


        Scenario:TC81:Verify for existing Contracts user is unable to upload the  Invalid supporting Document successfully
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload randon valid format document greater than 40mb size
                Then I check preview is not displayed for uploading Doc


        Scenario:TC82:Verify for Existing Contracts When clicked on the document card, the respective document's form will be shown on RHS in the view mode
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I enter the value in the Document Title field
                And I click on save button in the Add Supporting Document Popup
                When I check the supporting Doc is displayed on LHS Side
                When I click on the uploaded supporting Document
                Then I check the respective Supporting Document is displayed on RHS


        Scenario:TC83:Verify for Existing Contacts user can add only one file at a time.
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                Then I check selected preview is retained in the Add supporting document Popup

        Scenario:TC86:Verify for Existing Contacts if File name is lengthy then it  appears with ellipses
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload maximum name and size random valid format document
                And I check selected preview is retained in the Add supporting document Popup
                Then I check the File name is displayed with ellipses

        Scenario:TC87:Verify for Existieng Contracts if File name is lengthy then it  appears with ellipses  and on MouseHover  full name is displayed
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload maximum name and size random valid format document
                Then I check full file name is displayed on MouseHover

        Scenario:TC88:Verify for Existing Contracts the character limit for Description field on the Add Supporting document popup
                And I view first contract from the grid
                And I click on redirect to aurora button
                When I land on aurora contract details page
                And I clicked on document menu
                And I see add icon to add supporting document
                When I click on add supporting document icon
                And I see the add supporting document popup on RHS panel
                When I upload pdf format document
                And I enter the value in the Document Title field
                And I enter the value in the Description field
                And I click on save button in the Add Supporting Document Popup
                Then I check Error message below below Description field



        # //*************************************[Aurora-987]****************************

        # Manual Scenarios

        #Automation Scenarios
        Scenario:TC01:Verify user is able to see the "Edit" option for the Supporting Docuemnts
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I click on 3 dots inside supporting document card
                Then I see the Edit option is displayed for the supporting Document

        Scenario:TC02:Verify Once clicked on edit the "Edit Suppoting Document "Popup is displayed on RHS Side
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I click on 3 dots inside supporting document card
                And I click on Edit for a supporting Document
                Then I see the edit supporting document popup on RHS panel

        Scenario:TC03:Verify user is able to see the "Edit Supporting Document" header once the Popup is displayed
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I click on 3 dots inside supporting document card
                And I click on Edit for a supporting Document
                Then I see the header as edit supporting document on the Popup

        Scenario:TC04:Verify user is able to see the Supporting Document File Autopopulated with the document name in the Edit Supporting Document Popup
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I click on 3 dots inside supporting document card
                And I click on Edit for a supporting Document
                Then I check the user is able to see the document name autopopulated

        Scenario:TC05:Verify user is able to see  "Replace" and "Delete" option in the Edit Supporting Document Popup
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I click on 3 dots inside supporting document card
                And I click on Edit for a supporting Document
                Then I see Delete option on the Add Supporting document Popup
                Then I see Replace option on the Add Supporting document Popup

        Scenario:TC06:Verify the Popup shows the document upload progress while uploading the supporting Document
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I click on 3 dots inside supporting document card
                And I click on Edit for a supporting Document
                When I click on replace button in the Edit supporting document popup
                When I upload pdf format document
                Then I See the popup shows the document upload progress while uploading the document

        Scenario:TC07:Verify user is able to see the document size information while uploading is in progress in the Edit Supporting Document Popup
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I click on 3 dots inside supporting document card
                And I click on Edit for a supporting Document
                When I click on replace button in the Edit supporting document popup
                When I upload pdf format document
                Then I see the file size in the Popup when upload is in progress

        Scenario:TC08:Verify user is able to see the Cancel option  while upload is in progress
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I click on 3 dots inside supporting document card
                And I click on Edit for a supporting Document
                When I click on replace button in the Edit supporting document popup
                When I upload pdf format document
                Then I see user is able to see the Cancel option  while upload is in progress

        Scenario:TC09:Verify When the supporting document upload is cancelled there will be a confirmation on the screen
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I click on 3 dots inside supporting document card
                And I click on Edit for a supporting Document
                When I click on replace button in the Edit supporting document popup
                And I click on ok button from the Replace Popup
                And I upload pdf format document
                And I click on cancel option while the upload is in progress
                Then I check the Cancel confirmation pop up is displayed

        Scenario:TC10:Verify user is able to see the Document Title Autopopulated in the Edit Supporting Document Popup
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I click on 3 dots inside supporting document card
                And I click on Edit for a supporting Document
                Then I check the user is able to see the document title autopopulated

        Scenario:TC11:Verify user is able to see the Description autopopulated in the Edit Supporting Document Popup
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I click on 3 dots inside supporting document card
                And I click on Edit for a supporting Document
                Then I check the user is able to see the Description autopopulated


        Scenario:TC12:Verify user is able to see the Document uploaded by field is autopopulated in the Edit Supporting Document Popup
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I click on 3 dots inside supporting document card
                And I click on Edit for a supporting Document
                Then I check the user is able to see the Document uploaded by field is autopopulated
                Then I check the user is able to see the Document uploaded on field is autopopulated

        Scenario:TC13:Verify user is able to see the Document Uploaded on field is  autopopulated with the date  in the Edit Supporting Document Popup
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I click on 3 dots inside supporting document card
                And I click on Edit for a supporting Document
                Then I check the user is able to see the Document uploaded on field is autopopulated

        Scenario:TC14:Verify user is able to see the Document Type field is autopopulated in the Edit Supporting Document Popup
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I click on 3 dots inside supporting document card
                And I click on Edit for a supporting Document
                Then I check the user is able to see the Document Type is autopopulated

        Scenario:TC15:Verify user is able to see  "Cancel" and "Save" option in the Edit Supporting Document Popup
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I click on 3 dots inside supporting document card
                And I click on Edit for a supporting Document
                Then I check Cancel option is displayed in Edit Supporting Doc Confirmation Popup
                Then I check Save option is displayed in Edit Supporting Doc Confirmation Popup

        Scenario:TC16:Verify user is able to see the confirmation Pop-up when clicked on Replace option in the Edit Supporting Document Popup
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I click on 3 dots inside supporting document card
                And I click on Edit for a supporting Document
                When I see Replace option on the Add Supporting document Popup
                And I click on replace button in the Add supporting document popup
                Then I check the confirmation Pop-up is displayed when clicked on Replace option

        Scenario:TC17:Verify user is able to see the confirmation Pop-up when clicked on Delete option in the Edit Supporting Document Popup
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I click on 3 dots inside supporting document card
                And I click on Edit for a supporting Document
                When I see Delete option on the Add Supporting document Popup
                And I click on Delete button in the Add supporting document popup
                Then I check the confirmation Pop-up is displayed when clicked on Delete option

        Scenario:TC18:Verify user is able to see the confirmation Pop-up when clicked on Cancel  option in the Edit Supporting Document Popup
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I click on 3 dots inside supporting document card
                And I click on Edit for a supporting Document
                When I check Cancel option is displayed in Edit Supporting Doc Confirmation Popup
                And I click on Cancel option is in Edit Supporting Doc Confirmation Popup
                Then I check the confirmation Pop-up is displayed when clicked on Cancel option

        Scenario:TC19:Verify user is able to replace the supporting document from Edit Supporting Document popup
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I click on 3 dots inside supporting document card
                And I click on Edit for a supporting Document
                When I see Replace option on the Add Supporting document Popup
                And I click on replace button in the Add supporting document popup
                And I click on ok button from the Replace Popup
                When I upload doc format document
                Then I check selected preview is retained in the Add supporting document Popup


        Scenario:TC20:Verify user is able to delete the supporting Document from Edit Supporting Document popup
                When I view first contract from the grid
                And I navigate to Document page
                And I add multiple supporting documents with all the formats in the repository contract
                And I click on redirect to aurora button
                And I land on aurora contract details page
                And I clicked on document menu
                And I click on 3 dots inside supporting document card
                And I click on Edit for a supporting Document
                And I click on delete for a supporting Document
                When I click on remove button
                Then I check remove alert popup is closed





