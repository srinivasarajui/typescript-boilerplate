# /**
#  * The feature file is used to automate the view contract timeline feature
#  *
#  * @author somnath.k
#  */
Feature: Contract Timeline:-Access History

    Background: Login to CLM application and land on repository grid page
        Given I login to clm application
        When I select CLM product in product selection page
        And I click on manage contract tab
        And I click on repository sub tab
        And I lands on repository grid page


    # ********************************************************************User Story AURORA-1000*************************************************************************************
    # Manual Scenarios
    # Verify that date and time shown in the timeline page is based on the user timezone
    # Verify that date and time format shown in the timeline page is baed on the user profile
    # Verify that UI developed for timeline page is matching with ux design
    # Verify that all actions taken by logged in user is tracked in the audit trial
    # Verify that excel format file is downloaded when clicked on download icon
    # Verify that excel file is downloaded with name CONTRACT_NUMBER_CAR_excel_export.xlsx
    # Verify that excel contains columns like Contract State,Date,Time,Module,Username,Email ID,Action Taken and Records Affected
    # Verify that cell that is not having any value should be shown as blank instead of null or hyphen
    # Verify that data shown in access history page is matching with the data is shown in the downloaded excel
    # Verify that sheet name inside excel report should be CAR
    # Verify that actions taken by other user are also tracked in the access history and can be seen by the contract owner
    # Verify that user always sees latest action detail when the page is refreshed
    # Verify that default view of contract timeline is retained when the page is refreshed
    # Verify that timeline menu is enabled for repository draft status cloned contract
    # Verify that automatically added amendment in the amendment section action is tracked in the access history
    # Verify that view action is tracked for the page where user has refreshed the page
    # Verify that view action is tracked when user switches between any menu through browser back and forward button
    # Verify that Contract Published to repository action is tracked in access history page
    # Verify that Contract status updated to 'Archived' action is tracked in access history page


    Scenario: Verify that contrat timeline-->access history section is not shown when contract timeline flag is turned off from application setting
        When I navigate to product configuration
        And I click on application settings
        And I make contract timeline flag as no
        And I save the application setting configuration
        And I navigate to repository tab
        And I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check access history section is not shown

    Scenario: Verify that contrat timeline-->access history section is shown when contract timeline flag is turned on from application setting
        When I navigate to product configuration
        And I click on application settings
        And I make contract timeline flag as yes
        And I save the application setting configuration
        And I navigate to repository tab
        And I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check access history section is shown

    Scenario: Verify that timeline menu is disbaled for new contract(contract number is not generated yet).
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        Then I check timeline menu is disabled

    Scenario: Verify that timeline menu is enabled for repository draft status contract
        When I search for repository draft status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check timeline menu is enabled

    Scenario: Verify that timeline menu is enabled for pending publish status contract
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check timeline menu is enabled

    Scenario: Verify that timeline menu is enabled for active status contract
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check timeline menu is enabled

    Scenario: Verify that timeline menu is enabled for expired status contract
        When I search for expired status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check timeline menu is enabled

    Scenario: Verify that timeline menu is enabled for inactive status contract
        When I search for inactive status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check timeline menu is enabled

    Scenario: Verify that timeline menu is enabled for termination notice served status contract
        When I search for termination notice served status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check timeline menu is enabled

    Scenario: Verify that timeline menu is enabled for achived status contract
        When I search for archived status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check timeline menu is enabled

    Scenario: Verify that user is able to navigate to timeline page for repository draft status contract
        When I search for repository draft status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check access history section is shown

    Scenario: Verify that user is able to navigate to timeline page for pending publish status contract
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check access history section is shown

    Scenario: Verify that user is able to navigate to timeline page for active status contract
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check access history section is shown

    Scenario: Verify that user is able to navigate to timeline page for expired status contract
        When I search for expired status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check access history section is shown

    Scenario: Verify that user is able to navigate to timeline page for inactive status contract
        When I search for inactive status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check access history section is shown

    Scenario: Verify that user is able to navigate to timeline page for termination notice served status contract
        When I search for termination notice served status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check access history section is shown

    Scenario: Verify that user is able to navigate to timeline page for achived status contract
        When I search for archived status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check access history section is shown

    Scenario: Verify that by default expland/collapse document preview pannel is collapsed in access history page
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check document panel is collapsed

    Scenario: Verify that user is allowed to expand document preview panel in timeline page
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on expand or collapse document panel icon
        Then I check document panel is expanded

    Scenario: Verify that timeline filter section goes off when document preview panel is expanded
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on expand or collapse document panel icon
        Then I check access history filter section is not shown

    Scenario: Verify that actions section and document preview panel is shown when document preview panel is expanded
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on expand or collapse document panel icon
        Then I check action section and document preview panel is shown

    Scenario: Verify that separate tab for access history is shown inside timeline menu
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check access history is an separate header


    # all the actions

    Scenario: Verify that New Contract--->Contract Uploaded action is tracked in access history page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I clicked on save as draft button in the aurora contract details page
        And I fill minimum mandatory fields
        And I clicked on save as draft button in the aurora contract details page
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check Contract--->Contract Uploaded action is tracked in the latest state group


    Scenario: Verify that Contract Details--->Viewed action is tracked in access history page
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check Contract Details--->Viewed action is tracked in the latest state group

    Scenario: Verify that Contract details--->CP--->Added action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check Contract details--->CP--->Added action is tracked in the latest state group

    Scenario: Verify that Contract details---><Metadata header name>--->Added action is tracked in access history page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I clicked on save as draft button in the aurora contract details page
        And I fill minimum mandatory fields
        And I clicked on save as draft button in the aurora contract details page
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check Contract details--->Metadata header name--->Added action is tracked in the latest state group

    Scenario: Verify that Contract Details--->Edited action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check Contract Details--->Edited action is tracked in the latest state group

    Scenario: Verify that Documents--->Viewed action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I click on timeline menu
        And I land on timeline page
        Then I check Documents--->Viewed action is tracked in the latest state group

    Scenario: Verify that Documents--->Contract--->Contract Document Replaced action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace contract document with new contract document
        And I click on timeline menu
        And I land on timeline page
        Then I check Documents--->Contract--->Contract Document Replaced action is tracked in the latest state group

    Scenario: Verify that Documents--->Contract--->Downloaded action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I add supporting document in aurora
        And I download the supporting document
        And I click on timeline menu
        And I land on timeline page
        Then I check Documents--->Contract--->Downloaded action is tracked in the latest state group

    Scenario: Verify that Documents--->Supporting Documents--->Added action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I add supporting document inside document menu
        And I click on timeline menu
        And I land on timeline page
        Then I check Documents--->Supporting Documents--->Added action is tracked in the latest state group

    Scenario: Verify that Documents--->Amendments--->Added action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I add amendment inside document menu
        And I click on timeline menu
        And I land on timeline page
        Then I check  Documents--->Amendments--->Added action is tracked in the latest state group

    Scenario: Verify that Documents--->Supporting Documents--->Edited action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I add supporting document inside document menu
        And I edit the already added supporting document inside document menu
        And I click on timeline menu
        And I land on timeline page
        Then I check Documents--->Supporting Documents--->Edited action is tracked in the latest state group

    Scenario: Verify that Documents--->Amendments--->Edited action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I add amendment inside document menu
        And I edit the already added amendment inside document menu
        And I click on timeline menu
        And I land on timeline page
        Then I check Documents--->Amendments--->Edited action is tracked in the latest state group

    Scenario: Verify that Documents--->Supporting Documents--->Deleted action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I add supporting document inside document menu
        And I delete already added supporting document
        And I click on timeline menu
        And I land on timeline page
        Then I check Documents--->Supporting Documents--->Deleted action is tracked in the latest state group

    Scenario: Verify that Documents--->Amendments--->Deleted action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I add amendment inside document menu
        And I delete already added amendment document
        And I click on timeline menu
        And I land on timeline page
        Then I check Documents--->Amendments--->Deleted action is tracked in the latest state group

    Scenario: Verify that Documents--->Supporting Documents--->Downloaded action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I add supporting document inside document menu
        And I download already added supporting document
        And I click on timeline menu
        And I land on timeline page
        Then I check Documents--->Supporting Documents--->Downloaded action is tracked in the latest state group

    Scenario: Verify that Documents--->Amendments--->Downloaded action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I add amendment inside document menu
        And I download already added amendment document
        And I click on timeline menu
        And I land on timeline page
        Then I check Documents--->Supporting Documents--->Downloaded action is tracked in the latest state group

    Scenario: Verify that Milestones--->Viewed action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on timeline menu
        And I land on timeline page
        Then I check Milestones--->Viewed action is tracked in the latest state group

    Scenario: Verify that Milestones--->Added action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I add milestone to the contract
        And I land on milestone page
        And I click on timeline menu
        And I land on timeline page
        Then I check Milestones--->Added action is tracked in the latest state group

    Scenario: Verify that Milestones--->Edited action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I add milestone to the contract
        And I land on milestone page
        And I edit already added milestone to the contract
        And I land on milestone page
        And I click on timeline menu
        And I land on timeline page
        Then I check Milestones--->Edited action is tracked in the latest state group

    Scenario: Verify that Milestones--->Deleted action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I add milestone to the contract
        And I land on milestone page
        And I delete already added milestone to the contract
        And I land on milestone page
        And I click on timeline menu
        And I land on timeline page
        Then I check Milestones--->Deleted action is tracked in the latest state group

    Scenario: Verify that Line Items--->Viewed action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on line item menu
        And I land on line item page
        And I click on timeline menu
        And I land on timeline page
        Then I check Line Items--->Viewed action is tracked in the latest state group

    Scenario: Verify that Line Items--->Added action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on line item menu
        And I land on line item page
        And I add line item to the contract
        And I land on line item page
        And I click on timeline menu
        And I land on timeline page
        Then I check Line Items--->Added action is tracked in the latest state group

    Scenario: Verify that Line Items--->Edited action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on line item menu
        And I land on line item page
        And I add line item to the contract
        And I land on line item page
        And I edit already added line item to the contract
        And I land on line item page
        And I click on timeline menu
        And I land on timeline page
        Then I check Line Items--->Added action is tracked in the latest state group

    Scenario: Verify that Line Items--->Downloaded action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on line item menu
        And I land on line item page
        And I add line item to the contract
        And I land on line item page
        And I download already added line Item
        And I click on timeline menu
        And I land on timeline page
        Then I check Line Items--->Downloaded action is tracked in the latest state group

    Scenario: Verify that Line Items--->Deleted action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on line item menu
        And I land on line item page
        And I add line item to the contract
        And I land on line item page
        And I delete already added line item to the contract
        And I land on line item page
        And I click on timeline menu
        And I land on timeline page
        Then I check Line Items--->Deleted action is tracked in the latest state group

    Scenario: Verify that Linked Contract--->Viewed action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked contract menu
        And I land on linked contract page
        And I click on timeline menu
        And I land on timeline page
        Then I check Linked Contract--->Viewed action is tracked in the latest state group

    Scenario: Verify that Linked Contract--->Contract Linked action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked contract menu
        And I land on linked contract page
        And I link contract to the contract
        And I land on linked contract page
        And I click on timeline menu
        And I land on timeline page
        Then I check Linked Contract--->Contract Linked action is tracked in the latest state group

    Scenario: Verify that Linked Contract--->Contract Link removed action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked contract menu
        And I land on linked contract page
        And I link contract to the contract
        And I land on linked contract page
        And I remove already linked contract
        And I land on linked contract page
        And I click on timeline menu
        And I land on timeline page
        Then I check Linked Contract--->Contract Link removed action is tracked in the latest state group

    Scenario: Verify that Timeline--->Access History--->Viewed action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I refresh the page
        And I land on timeline page
        Then I check Timeline--->Access History--->Viewed action is tracked in the latest state group

    Scenario: Verify that Timeline--->Access History--->Downloaded action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I download access history report
        And I refresh the page
        And I land on timeline page
        Then I check Timeline--->Access History--->Downloaded action is tracked in the latest state group

    Scenario: Verify that Alerts & Reminders--->Viewed action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on alerts and reminder menu
        And I land on alerts and reminders page
        And I click on timeline menu
        And I land on timeline page
        Then I check Alerts & Reminders--->Viewed action is tracked in the latest state group

    Scenario: Verify that Alerts & Reminders--->Alerts--->Added action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I click on alerts and reminders menu
        And I land on alerts and reminders page
        And I add alert to the contract
        And I land on alerts and reminders page
        And I click on timeline menu
        And I land on timeline page
        Then I check Alerts & Reminders--->Alerts--->Added action is tracked in the latest state group

    Scenario: Verify that Alerts & Reminders--->Alerts--->Edited action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I click on alerts and reminders menu
        And I land on alerts and reminders page
        And I add alert to the contract
        And I land on alerts and reminders page
        And I edit already added alert to the contract
        And I land on alerts and reminders page
        And I click on timeline menu
        And I land on timeline page
        Then I check Alerts & Reminders--->Alerts--->Edited action is tracked in the latest state group

    Scenario: Verify that Alerts & Reminders--->Alerts--->Deleted action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I click on alerts and reminders menu
        And I land on alerts and reminders page
        And I add alert to the contract
        And I land on alerts and reminders page
        And I delete already added alert to the contract
        And I land on alerts and reminders page
        And I click on timeline menu
        And I land on timeline page
        Then I check Alerts & Reminders--->Alerts--->Deleted action is tracked in the latest state group


    Scenario: Verify that Alerts & Reminders--->Reminders--->Added action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I click on alerts and reminders menu
        And I land on alerts and reminders page
        And I add reminder to the contract
        And I land on alerts and reminders page
        And I click on timeline menu
        And I land on timeline page
        Then I check Alerts & Reminders--->Reminders--->Added action is tracked in the latest state group

    Scenario: Verify that Alerts & Reminders--->Reminders--->Edited action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I click on alerts and reminders menu
        And I land on alerts and reminders page
        And I reminder alert to the contract
        And I land on alerts and reminders page
        And I edit already added reminder to the contract
        And I land on alerts and reminders page
        And I click on timeline menu
        And I land on timeline page
        Then I check Alerts & Reminders--->Reminders--->Edited action is tracked in the latest state group

    Scenario: Verify that Alerts & Reminders--->Reminders--->Deleted action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I click on alerts and reminders menu
        And I land on alerts and reminders page
        And I add reminder to the contract
        And I land on alerts and reminders page
        And I delete already added reminder to the contract
        And I land on alerts and reminders page
        And I click on timeline menu
        And I land on timeline page
        Then I check Alerts & Reminders--->Reminders--->Deleted action is tracked in the latest state group

    Scenario: Verify that Audit trail--->Viewed action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on audit trail menu
        And I land on audit trail page
        And I click on timeline menu
        And I land on timeline page
        Then I check Audit trail--->Viewed action is tracked in the latest state group

    Scenario: Verify that Audit trail--->Contract Version--->Compared action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on audit trail menu
        And I land on audit trail page
        And I compare any two contract version
        And I click on timeline menu
        And I land on timeline page
        Then I check Audit trail--->Contract Version--->Compared action is tracked in the latest state group

    Scenario: Verify that Audit trail--->Contract Version--->Downloaded action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on audit trail menu
        And I land on audit trail page
        And I download any contract version
        And I click on timeline menu
        And I land on timeline page
        Then I check Audit trail--->Contract Version--->Downloaded action is tracked in the latest state group

    Scenario: Verify that Contract status updated to 'Expired' action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I change contract status value to expired
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check Contract status updated to Expired action is tracked in the latest state group

    Scenario: Verify that Contract status updated to 'Inactive' action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I change contract status value to inactive
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check Contract status updated to Inactive action is tracked in the latest state group

    Scenario: Verify that Contract status updated to 'Termination Notice Served' action is tracked in access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I terminate the contract
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check Contract status updated to Termination Notice Served action is tracked in the latest state group

    Scenario: Verify that actions tracked also contains records affected details in the access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I add supporting document inside document menu
        And I click on timeline menu
        And I land on timeline page
        Then I check Documents--->Supporting Documents--->Added action is tracked in the latest state group
        And I check record affected detail is also shown in the action

    Scenario: Verify that each action is tracked with logged in user current date in access history page
        Given I have logged in user details
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I click on timeline menu
        And I land on timeline page
        Then I check user current date is shown in the latest action tracked

    Scenario: Verify that each action is tracked with logged in user current time in access history page
        Given I have logged in user details
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I click on timeline menu
        And I land on timeline page
        Then I check user current time is shown in the latest action tracked

    Scenario: Verify that each action is tracked with logged in user's TMS username
        Given I have logged in user details
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I click on timeline menu
        And I land on timeline page
        Then I check logged in username is shown in the latest action tracked

    Scenario: Verify that each action is tracked with logged in user's email id
        Given I have logged in user details
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I click on timeline menu
        And I land on timeline page
        Then I check logged in user email id is shown in the latest action tracked


    Scenario: Verify that user is allowed to download all actions taken in the excel format by clicking on download icon
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check download access history link is clickable

    Scenario: Verify that first 10 actions or less than 10 are shown in the access history at a time
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check first 10 actions or less than 10 are shown in the access history

    Scenario: Verify that View More link is shown when there are more than 10 actions in the access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check view more link is shown

    Scenario: Verify that View More link is not shown when there are 10 or less than 10 actions in the access history page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check view more link is not shown

    Scenario: Verify that next records are shown when clicked on View Nore link
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check view more link is shown

    Scenario: Verify that View More link is not shown when user goes till end of the action tracked in the access history page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I will take user till end of the record
        Then I check view more link is not shown

    Scenario: Verify that Top icon is shown after clicked on View More link
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on view more link
        Then I check top icon is shown

    Scenario: Verify that user navigates to latest action details when clicked on Top icon
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on view more link
        And I click top icon
        Then I check user navigates to latest action details

    Scenario: Verify that Top icon is not shown when user navigates to latest action details after clicked on Top icon
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on view more link
        And I click top icon
        Then I check top icon is not shown

    Scenario: Verify that there is no impact on View More link and Top icon when document preview panel is expanded
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on view more link
        And I click top icon
        Then I check top icon is not shown



    # *******************************************************************AURORA-1001********************************************************************


    # Manual Scenario
    # Verify that user list shown in the username dropdown is coming from the TMS
    # Verify that applied filter is highlighted in blue color when document panel is collapsed
    # Verify that sub module data is shown is based on the selected module filter
    # Verify that action tracked in old clm is matching with aurora and vice 
    # Verify that system tracked actions are tracked in both old clm and aurora
    

    # Automation Scenario


    Scenario: Verify that module filter list contains Contract Summary as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on module filter dropdown
        Then I check Contract Summary value is shown in the module filter list

    Scenario: Verify that module filter list contains Contract Details as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on module filter dropdown
        Then I check Contract Details value is shown in the module filter list

    Scenario: Verify that module filter list contains Documents as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on module filter dropdown
        Then I check Documents value is shown in the module filter list

    Scenario: Verify that module filter list contains Milestones as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on module filter dropdown
        Then I check Documents value is shown in the module filter list

    Scenario: Verify that module filter list contains Line Items as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on module filter dropdown
        Then I check Line Items value is shown in the module filter list

    Scenario: Verify that module filter list contains Author Review as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on module filter dropdown
        Then I check Line Items value is shown in the module filter list

    Scenario: Verify that module filter list contains Negotiate Review as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on module filter dropdown
        Then I check Negotiate Review value is shown in the module filter list

    Scenario: Verify that module filter list contains Signoff Review as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on module filter dropdown
        Then I check Signoff Review value is shown in the module filter list

    Scenario: Verify that module filter list contains Signoff Approval as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on module filter dropdown
        Then I check Signoff Approval value is shown in the module filter list

    Scenario: Verify that module filter list contains Signers as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on module filter dropdown
        Then I check Signers value is shown in the module filter list

    Scenario: Verify that module filter list contains Alerts & reminders as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on module filter dropdown
        Then I check Alerts & reminders value is shown in the module filter list

    Scenario: Verify that module filter list contains Linked Agreements as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on module filter dropdown
        Then I check Linked Agreements value is shown in the module filter list

    Scenario: Verify that module filter list contains Timeline as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on module filter dropdown
        Then I check Timeline value is shown in the module filter list

    Scenario: Verify that module filter list contains Audit Trail as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on module filter dropdown
        Then I check Audit Trail value is shown in the module filter list

    Scenario: Verify that sub module filter list contains Executive Summary as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I select Contract Summary module value
        And I click on sub module filter dropdown
        Then I check Executive Summary value is shown in the sub module filter list

    Scenario: Verify that sub module filter list contains CP as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I select Contract Details module value
        And I click on sub module filter dropdown
        Then I check CP value is shown in the sub module filter list

    Scenario: Verify that sub module filter list contains Contract Data as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I select Contract Details module value
        And I click on sub module filter dropdown
        Then I check Contract Data value is shown in the sub module filter list

    Scenario: Verify that sub module filter list contains Contract as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I select Contract Details module value
        And I click on sub module filter dropdown
        Then I check Contract value is shown in the sub module filter list

    Scenario: Verify that sub module filter list contains Supporting Documents as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I select Documents module value
        And I click on sub module filter dropdown
        Then I check Supporting Documents value is shown in the sub module filter list

    Scenario: Verify that sub module filter list contains Amendments as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I select Documents module value
        And I click on sub module filter dropdown
        Then I check Amendments value is shown in the sub module filter list

    Scenario: Verify that sub module filter list contains Negotiate Reviewer as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I select Author Review module value
        And I click on sub module filter dropdown
        Then I check Negotiate Reviewer value is shown in the sub module filter list

    Scenario: Verify that sub module filter list contains Parallel Review as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I select Negotiate Review module value
        And I click on sub module filter dropdown
        Then I check Parallel Review value is shown in the sub module filter list

    Scenario: Verify that sub module filter list contains Serial Contract Review as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I select Negotiate Review module value
        And I click on sub module filter dropdown
        Then I check Serial Contract Review value is shown in the sub module filter list

    Scenario: Verify that sub module filter list contains Clause Review as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I select Negotiate Review module value
        And I click on sub module filter dropdown
        Then I check Clause Review value is shown in the sub module filter list

    Scenario: Verify that sub module filter list contains Alerts as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I select Alerts & reminders module value
        And I click on sub module filter dropdown
        Then I check Alerts value is shown in the sub module filter list

    Scenario: Verify that sub module filter list contains Reminders as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I select Alerts & reminders module value
        And I click on sub module filter dropdown
        Then I check Reminders value is shown in the sub module filter list

    Scenario: Verify that sub module filter list contains Access history as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I select Timeline module value
        And I click on sub module filter dropdown
        Then I check Access history value is shown in the sub module filter list

    Scenario: Verify that sub module filter list contains Worflow as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I select Timeline module value
        And I click on sub module filter dropdown
        Then I check Worflow value is shown in the sub module filter list

    Scenario: Verify that sub module filter list contains Documents as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I select Audit Trail module value
        And I click on sub module filter dropdown
        Then I check Documents value is shown in the sub module filter list

    Scenario: Verify that sub module filter list contains Document Version as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I select Audit Trail module value
        And I click on sub module filter dropdown
        Then I check Document Version value is shown in the sub module filter list

    Scenario: Verify that sub module filter list contains Contract Preview as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I select Audit Trail module value
        And I click on sub module filter dropdown
        Then I check Contract Preview value is shown in the sub module filter list

    Scenario: Verify that action filter list contains Contract Created as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on action filter dropdown
        Then I check Contract Created  value is shown in the action filter list

    Scenario: Verify that action filter list contains Added as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on action filter dropdown
        Then I check Contract Created  value is shown in the action filter list

    Scenario: Verify that action filter list contains Edited as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on action filter dropdown
        Then I check Edited value is shown in the action filter list

    Scenario: Verify that action filter list contains Contract Replaced as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on action filter dropdown
        Then I check Contract Replaced value is shown in the action filter list

    Scenario: Verify that action filter list contains Downloaded as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on action filter dropdown
        Then I check Downloaded value is shown in the action filter list

    Scenario: Verify that action filter list contains Uploaded as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on action filter dropdown
        Then I check Uploaded value is shown in the action filter list

    Scenario: Verify that action filter list contains Viewed as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on action filter dropdown
        Then I check Viewed value is shown in the action filter list

    Scenario: Verify that action filter list contains Deleted as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on action filter dropdown
        Then I check Deleted value is shown in the action filter list

    Scenario: Verify that action filter list contains Others as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on action filter dropdown
        Then I check Others value is shown in the action filter list

    Scenario: Verify that action filter list contains Published as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on action filter dropdown
        Then I check Published value is shown in the action filter list

    Scenario: Verify that action filter list contains Updated as value
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on action filter dropdown
        Then I check Updated value is shown in the action filter list

    Scenario: Verify that user is allowed to filter timeline actions based random username
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I select contract owner username
        And I click on apply button in the filter section
        Then I check timeline actions are shown based on selected usernme

    Scenario: Verify that user is allowed to filter timeline actions based on already visited module
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I navigate to Document page
        And I land on document page
        And I click on timeline menu
        And I land on timeline page
        And I select Documents module value
        And I click on apply button in the filter section
        Then I check timeline actions are shown based on selected module value

    Scenario: Verify that user is allowed to filter timeline actions based on already visited sub module
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I navigate to Document page
        And I land on document page
        And I add supporting document in aurora
        And I land on document page
        And I click on timeline menu
        And I land on timeline page
        And I select Documents module value
        And I select supporting documents sub module value
        And I click on apply button in the filter section
        Then I check timeline actions are shown based on selected sub module value

    Scenario: Verify that user is allowed to filter timeline actions based on already done action 
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I navigate to Document page
        And I land on document page
        And I add supporting document in aurora
        And I land on document page
        And I click on timeline menu
        And I land on timeline page
        And I select added action value
        And I click on apply button in the filter section
        Then I check timeline actions are shown based on selected action value

    Scenario: Verify that user is allowed to filter timeline actions based on date range
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I navigate to Document page
        And I land on document page
        And I add supporting document in aurora
        And I land on document page
        And I click on timeline menu
        And I land on timeline page
        And I select current date for start and end date
        And I click on apply button in the filter section
        Then I check timeline actions are shown based on selected date range value

    Scenario: Verify that user is allowed to filter timeline actions based on all the filters at once
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I navigate to Document page
        And I land on document page
        And I add supporting document in aurora
        And I land on document page
        And I click on timeline menu
        And I land on timeline page
        And I apply all the filters based on already tracked action
        And I click on apply button in the filter section
        Then I check timeline actions are shown based on all the filters applied

    Scenario: Verify that clear all link is shown in LHM after any filter is applied
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I navigate to Document page
        And I land on document page
        And I click on timeline menu
        And I land on timeline page
        And I select Documents module value
        And I click on apply button in the filter section
        Then I check clear all link is shown in LHS

    Scenario: Verify that user is allowed to clear already applied filter
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I navigate to Document page
        And I land on document page
        And I click on timeline menu
        And I land on timeline page
        And I select Documents module value
        And I click on apply button in the filter section
        And I click on clear all link
        Then I check applied filter is cleared and latest actions are shown in RHS

    Scenario: Verify that applied filter count is shown when document panel is collapsed
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I navigate to Document page
        And I land on document page
        And I click on timeline menu
        And I land on timeline page
        And I select Documents module value
        And I click on apply button in the filter section
        And I click on expand or collapse document panel icon
        Then I check applied filter count is shown

    Scenario: Verify that document panel is expanded when clicked on filter icon
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I navigate to Document page
        And I land on document page
        And I click on timeline menu
        And I land on timeline page
        And I select Documents module value
        And I click on apply button in the filter section
        And I click on expand or collapse document panel icon
        And I click on filter icon shown in the LHS
        Then I check document panel is expanded

    Scenario: Verify that applied filter data is retained when document panel is collapsed
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I navigate to Document page
        And I land on document page
        And I click on timeline menu
        And I land on timeline page
        And I select Documents module value
        And I click on apply button in the filter section
        And I click on expand or collapse document panel icon
        Then I check applied filter data is retained

    Scenario: Verify that contract transition history is disabled when already any filter is applied
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I navigate to Document page
        And I land on document page
        And I click on timeline menu
        And I land on timeline page
        And I select Documents module value
        And I click on apply button in the filter section
        Then I check contract transition history is disabled

    Scenario: Verify that contract transition history is enabled when any filters are not applied
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check contract transition history is enabled

    Scenario: Verify that normal filters are disabled when contract transition history filter is applied
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on contract transition history toggle
        Then I check normal filters are disabled

    Scenario: Verify that actions tracked based on state wise is shown when clicked on contract transition history toggle button
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on contract transition history toggle
        Then I check timeline actions are shown based contract state wise

    Scenario: Verify that contract transition history toggle is shown in LHS when document panel is collapsed
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on expand or collapse document panel icon
        Then I check contract transition history toggle is shown in LHS

    Scenario: Verify that latest actions are shown when contract transition history toggle is clicked from LHS
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on contract transition history toggle
        And I click on expand or collapse document panel icon
        And I click on contract transition history toggle
        Then I check latest actions are shown in the LHS

    Scenario: Verify that user gets confirm navigation popup when filters are applied and clicked on other menus
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I navigate to Document page
        And I land on document page
        And I click on timeline menu
        And I land on timeline page
        And I select Documents module value
        And I click on apply button in the filter section
        And I clicked on document menu
        Then I check confirm navigation popup is shown

    Scenario: Verify that actions shown based on applied filter is retained when confirm navigation popup is closed
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I navigate to Document page
        And I land on document page
        And I click on timeline menu
        And I land on timeline page
        And I select Documents module value
        And I click on apply button in the filter section
        And I clicked on document menu
        And I click no button in the confirm navigation popup
        Then I check timeline action are retained based on applied filter

    Scenario: Verify that actions shown based on applied filter is not retained when confirm navigation popup is accepted
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I navigate to Document page
        And I land on document page
        And I click on timeline menu
        And I land on timeline page
        And I select Documents module value
        And I click on apply button in the filter section
        And I clicked on document menu
        And I click yes button in the confirm navigation popup
        Then I check timeline action are not retained based on applied filter

    Scenario: Verify that applied filters are retained when the page is refreshed after filter is applied
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I navigate to Document page
        And I land on document page
        And I click on timeline menu
        And I land on timeline page
        And I select Documents module value
        And I click on apply button in the filter section
        And I refresh the page
        Then I check timeline action are retained based on applied filter

    Scenario: Verify that user is not allowed to apply filter only on sub module without selecting module
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I navigate to Document page
        And I land on document page
        And I click on timeline menu
        And I land on timeline page
        And I click on sub module filter dropdown
        And I click on apply button in the filter section
        Then I check sub module filter is shown as blank

    Scenario: Verify that please select a module message is shown when clicked on sub module dropdown without selecting module dropdown
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I navigate to Document page
        And I land on document page
        And I click on timeline menu
        And I land on timeline page
        And I click on sub module filter dropdown
        And I click on apply button in the filter section
        Then I check please select a module message is shown

    Scenario: Verify that showing filter data message is shown when any filter is applied
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I navigate to Document page
        And I land on document page
        And I click on timeline menu
        And I land on timeline page
        And I click on module filter dropdown
        And I select Documents module value
        And I click on apply button in the filter section
        Then I check showing filter data message is shown

    Scenario: Verify that no result found message is shown when applied filter does matches with the already tracked actions
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I navigate to Document page
        And I land on document page
        And I click on timeline menu
        And I land on timeline page
        And I select Milestone module value
        And I click on apply button in the filter section
        Then I check no result found message is shown

    Scenario: Verify that disbaled applied button is shown when any filter is applied
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I navigate to Document page
        And I land on document page
        And I click on timeline menu
        And I land on timeline page
        And I select Documents module value
        And I click on apply button in the filter section
        Then I check disabled applied button is shown

    Scenario: Verify that selected sub module filter data gets cleared when module data is cleared
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I navigate to Document page
        And I land on document page
        And I click on timeline menu
        And I land on timeline page
        And I select Documents module value
        And I select Supporting documents sub module value
        And I clear module filter values
        Then I check sub module filter value is blank




#***********************************************************************AURORA-1002***************************************************************


# Manual Scenario
# Verify that all the actions with latest data is downloaded when clicked on download access history option
# Verify that excel format file is downloaded when clicked on download icon
# Verify that excel file is downloaded with name CONTRACT_NUMBER_CAR_excel_export.xlsx
# Verify that excel contains columns like Contract State,Date,Time,Module,Username,Email ID,Action Taken and Records Affected
# Verify that cell that is not having any value should be shown as blank instead of null or hyphen
# Verify that data shown in access history page is matching with the data is shown in the downloaded excel
# Verify that sheet name inside excel report should be CAR
# Verify that user is allowed to download only filtered data in the excel sheet
# Verify that user is allowed to download only contract transition history data in the excel sheet
# Verify that Download Access History tooltip is shown when hovered on download access history icon
# Verify that excel with no action details is downloaded when searched filter doesnt match any data and then clicked on download option


    # Automation Scenario



    Scenario: Verify that download access history option is available in the default timeline view
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        Then I check download access history icon is shown

    Scenario: Verify that download access history option is available in the contract transition history view
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on contract transition history icon
        Then I check download access history icon is shown

    Scenario: Verify that toaster message is shown when clicked on download access history option
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on timeline menu
        And I land on timeline page
        And I click on download access history icon
        Then I check toaster message related to access history is shown


