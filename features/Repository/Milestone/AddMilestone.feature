# /**
#  * The feature file is used to automate the add milestone feature
#  *
#  * @author somnath.k
#  */
Feature: Milestone:-Add Milestone

    Background: Login to CLM application and land on repository grid page
        Given I login to clm application
        When I select CLM product in product selection page
        And I click on manage contract tab
        And I click on repository sub tab
        And I lands on repository grid page


    # ********************************************************************User Story AURORA-894*************************************************************************************

    # Manual Scenarios
    # Verify that focus is shown on first unfilled mandatory field when clicked on save button in the add milestone overlay
    # Verify that header highlight in the top changes automatically when user scrolls the page to next header in the add milestone overlay
    # Verify that inline error message is shown for all the unfilled mandatory fields when clicked on save button in the add milestone overlay
    # Verify that changes may lost popup is shown when add milestone details is added and clicked on browser refresh option
    # Verify that changes may lost popup is shown when add milestone details is added and clicked on tab close option
    # Verify that changes may lost popup is shown when add milestone details is added and clicked on browser close option
    # Verify that changes may lost popup is shown when add milestone details is added and clicked on browser back option
    # Verify that milestone owner field is showing the list of only internal users of tms
    # Verify that owner name is shown in the list is of the form firstname <Space> lastname<email id>
    # Verify that tool tip is shown for all the field name in the add milestone overlay
    # Verify that tool tip is shown for all the field's values in the add milestone overlay
    # Verify that ellipses are shown for all the field's value when the value lenght is bigger
    # Verify that owner field list is showing by default 10 records when clicked on dropdown
    # Verify that selected owner receives a mail when new milestone is added to the contract
    # Verify that added milestone details is tracked in the report module
    # Verify that added milestone details is tracked in the audit trial
    # Verify that added milestone details is tracked in the Compliance-->Milestone
    # Verify that user is not allowed to select blank value for any dropdown in the add milestone overlay

    @checkFillBehav
    Scenario: Verify that Add new button is present on LHS center for new contract when no milestone is present in the contract
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        # And I land on milestone page
        And I fill all the overlay


    # changes milestone status accordindly
    Scenario: Verify that Add new button is present on LHS center for new contract when no milestone is present in the contract
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I add random cp type cp in the contracting party section
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill comment box and select no option for both inform user and quick alerts options
        And I clicked on publish button in the publish contract popup
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        Then I check add new button is shown in center of LHS

    Scenario: Verify that Add new button is present on LHS center for active status contract when no milestone is present in the contract
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        Then I check add new button is shown in center of LHS

    Scenario: Verify that Add new button is present on LHS center for inactive status contract when no milestone is present in the contract
        When I search for inactive status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        Then I check add new button is shown in center of LHS

    Scenario: Verify that Add new button is present on LHS center for expired status contract when no milestone is present in the contract
        When I search for expired status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        Then I check add new button is shown in center of LHS

    Scenario: Verify that Add new button is present on LHS center for termination notice served status contract when no milestone is present in the contract
        When I search for termination notice served status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        Then I check add new button is shown in center of LHS

    Scenario: Verify that Add new button is present on LHS center for archived status contract when no milestone is present in the contract
        When I search for archived status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        Then I check add new button is shown in center of LHS

    Scenario: Verify that add icon for add milestone is shown for active status contract irrespective of milestone added to contract or not
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        Then I check add icon is shown in LHS top

    Scenario: Verify that add icon for add milestone is shown for inactive status contract irrespective of milestone added to contract or not
        When I search for inactive status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        Then I check add icon is shown in LHS top

    Scenario: Verify that add icon for add milestone is shown for expired status contract irrespective of milestone added to contract or not
        When I search for inactive status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        Then I check add icon is shown in LHS top

    Scenario: Verify that add icon for add milestone is shown for termination notice served status contract irrespective of milestone added to contract or not
        When I search for termination notice served status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        Then I check add icon is shown in LHS top

    Scenario: Verify that add icon for add milestone is shown for archived status contract irrespective of milestone added to contract or not
        When I search for archived status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        Then I check add icon is shown in LHS top

    Scenario: Verify that add milestone overlay is shown when clicked on add new button and there is no milestone associated for new contract
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I add random cp type cp in the contracting party section
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill comment box and select no option for both inform user and quick alerts options
        And I clicked on publish button in the publish contract popup
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add button that is shown in center of LHS
        Then I check add milestone overlay is shown

    Scenario: Verify that add milestone overlay is shown when clicked on add icon for any existing contract
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        Then I check add milestone overlay is shown

    Scenario: Verify that discard changes popup is not shown when add milestone overlay is closed by clicking on cross icon without any edit for any existing contract status
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I click on cross icon in add milestone overlay
        Then I check discard the changes popup is not shown

    Scenario: Verify that discard changes popup is shown when add milestone overlay is closed by clicking on cross icon with any edit for any existing contract status
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the fields in the add milestone overlay
        And I click on cross icon in add milestone overlay
        Then I check discard the changes popup is shown

    Scenario: Verify that user stays on add milestone overlay when clicked on cancel button in the discard changes popup
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the fields in the add milestone overlay
        And I click on cross icon in add milestone overlay
        And I click no button in the discard changes popup
        Then I check add milestone overlay is shown
        And I check discard the changes popup is not shown

    Scenario: Verify that add milestone overlay disappears when clicked on continue button in the discard changes popup
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the fields in the add milestone overlay
        And I click on cross icon in add milestone overlay
        And I click on yes button in discard the changes popup
        Then I check add milestone overlay is not shown

    Scenario: Verify that discard changes popup is not shown when add milestone overlay is closed by clicking on cancel button without any edit for any existing contract status
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I click cancel button in the add milestone overlay
        Then I check discard the changes popup is not shown

    Scenario: Verify that discard changes popup is shown when add milestone overlay is closed by clicking on cancel button with any edit for any existing contract status
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the fields in the add milestone overlay
        And I click cancel button in the add milestone overlay
        Then I check discard the changes popup is shown

    Scenario: Verify that mandatory error message is shown for all unfilled mandatory fields when clicked on save button in the add milestone overlay
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I click on save button in the add milestone overlay
        Then I check mandatory message for all the unfilled mandatory fields is shown

    Scenario: Verify that clear field icon is not shown in the add milestone overlay
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        Then I check clear icon field is not for dropdown

    Scenario: Verify that invalid error message below field is shown when each numeric field is filled with invalid data
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all numeric fields in the form with invalid data
        And I click on save button in the add milestone overlay
        Then I check invalid error message for each numeric field in the add milestone overlay is shown

    Scenario: Verify that invalid error message below field is shown when each string field is filled with invalid data
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all string fields in the form with invalid data
        And I click on save button in the add milestone overlay
        Then I check invalid error message for string field in the add milestone overlay is shown

    Scenario: Verify that invalid error message for non mandatory string field is shown when each string field is filled with invalid
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all non mandatory string fields in the form with invalid data
        And I click on save button in the add milestone overlay
        Then I check invalid error message for string field in the add milestone overlay is shown

    Scenario: Verify that invalid error message for non mandatory numeric field is shown when each numeric field is filled with invalid data
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all non mandatory numeric fields in the form with invalid data
        And I click on save button in the add milestone overlay
        Then I check invalid error message for each numeric field in the add milestone overlay is shown

    Scenario: Verify that Maximum 14 digits allowed. error message is shown when user fills total value field with more than 14 digits
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill contract total value field with more than 14 digits value
        And I click on save button in the add milestone overlay
        Then I check Maximum 14 digits allowed. error message is shown

    Scenario: Verify that Maximum 14 digits allowed. error message is not shown when user fills total value field with less than or equal 14 to digits
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill contract total value field with less than or equal to 14 digits
        And I click on save button in the add milestone overlay
        Then I check Maximum 14 digits allowed. error message is not shown

    Scenario: Verify that error message below field is shown when string type field is filled with more than 255 characters data
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all string fields with value more than maximum value limit data
        And I click on save button in the add milestone overlay
        Then I check invalid error message for string field in the add milestone overlay is shown

    Scenario: Verify that error message below field is shown when numeric type field is filled with more than maximum value limit data
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all numeric fields with value more than maximum value limit data
        And I click on save button in the add milestone overlay
        Then I check invalid error message for each numeric field in the add milestone overlay is shown

    Scenario: Verify that by default milestone status field is selected with Planned value in the add milestone overlay
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        Then I check status field value is by default selected with planned value

    Scenario: Verify that by default milestone type field is selected with Payable value in the add milestone overlay
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        Then I check milestone type field value is by default selected with payable value

    Scenario: Verify that by default deliverable type field is selected with Product value in the add milestone overlay
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        Then I check deliverable type field value is by default selected with product value

    Scenario: Verify that by default notification reference field is selected with option as Before and Select day as 5days value in the add milestone overlay
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        Then I check notification reference field is by default selected with option as Before and Select day as 5days

    Scenario: Verify that Select day field type is in date when notification preference option is selected with option as On
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I click on On option under notification reference field
        Then I check Select day field is in date type

    Scenario: Verify that Select day field type is in days when notification preference option is selected with option as Before
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        Then I check Select day field is in days type

    Scenario: Verify that by default milestone owner field is blank in the add milestone overlay
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        Then I check milestone owner field value is by default blank

    Scenario: Verify that by default repeat notification field is selected with do not repeat value
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        Then I check repeat notification field value is by default selected with do not repeat value

    Scenario: Verify that percentage field is not shown in the add milestone overlay
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        Then I check percentage field is not shown in the add milestone overlay

    Scenario: Verify that non-compliant,Disputed and Settled value should be disabled in the status dropdown
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I click on status dropdown in the add milestone overlay
        Then I check non-compliant,disputed and settled value are disabled

    Scenario: Verify that milestone added toaster message is shown after all the fields are filled and clicked on save button
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the fields in the add milestone overlay
        And I click on save button in the add milestone overlay
        Then I check milestone added toaster message is shown

    Scenario: Verify that milestone title value is shown in the toaster message after all the fields are filled and clicked on save button
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the fields in the add milestone overlay
        And I click on save button in the add milestone overlay
        Then I check milestone added toaster message is shown

    Scenario: Verify that data entered in the add milestone overlay is reflected in the milestone card
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the fields in the add milestone overlay
        And I click on save button in the add milestone overlay
        Then I check added milestone details are shown in the milestone card

    Scenario: Verify that user is allowed to create milestone with planned status
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the fields in the add milestone overlay
        And I select status field value as planned
        And I click on save button in the add milestone overlay
        Then I check added milestone details are shown in the milestone card

    Scenario: Verify that user is allowed to create milestone with In-progress status
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the fields in the add milestone overlay
        And I select status field value as in-progress
        And I click on save button in the add milestone overlay
        Then I check added milestone details are shown in the milestone card

    Scenario: Verify that user is allowed to create milestone with complete status
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the fields in the add milestone overlay
        And I select status field value as complete
        And I click on save button in the add milestone overlay
        Then I check added milestone details are shown in the milestone card

    Scenario: Verify that user is allowed to create milestone with overdue status
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the fields in the add milestone overlay
        And I select status field value as overdue
        And I click on save button in the add milestone overlay
        Then I check added milestone details are shown in the milestone card

    Scenario: Verify that user is allowed to save milestone by filling all numeric field and string field with maximum value limit
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the fields in the add milestone overlay with maximum value limit
        And I click on save button in the add milestone overlay
        Then I check added milestone details are shown in the milestone card




    #***************************************************************************AURORA-898********************************************************************************

    # Manual Scenarios

    # Verify that Custom header name is configured based on tenant level
    # Verify that fields inside custom header are configured based on tenant level
    # Verify that only basic details header is shown in the form when no custom headers are configured
    # Verify that tenant has provision to configure multiple custom headers for the milestone form
    # Verify that custom header is shown as separate tab next to basic details header
    # Verify that custom header is highlighted in blue color when user scrolls down to fields of custom header
    # Verify that user is auto scrolled to fields of custom header when clicked on custom header
    # Verify that custom header is highlighted in blue color when user clicks on custom header
    # Verify that user is not allowed to select blank value for any dropdown in the custom fields in the add milestone overlay
    # Verify that user is allowed to save milestone by filling more than 5000 characters in the text area fields of custom fields
    # Verify that error message is not shown when text area field of custom field is filled with any combination of value
    # Verify that user is allowed to save milestone only with basic details fields when no custom fields are configured


    # Automation Scenarios

    Scenario: Verify that clear field icon is not shown for dropdown fields in the add milestone overlay for custom fields
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        Then I check clear icon field is not for dropdown

    Scenario: Verify that mandatory error message is shown for all unfilled custom mandatory fields when clicked on save button in the add milestone overlay
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I click on save button in the add milestone overlay
        Then I check mandatory message for all the unfilled mandatory fields is shown

    Scenario: Verify that invalid error message below field is shown when each numeric custom field is filled with invalid data
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all numeric fields with invalid data
        And I click on save button in the add milestone overlay
        Then I check invalid error message for each numeric field in the add milestone overlay is shown

    Scenario: Verify that invalid error message below field is shown when each string custom field is filled with invalid data
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all string fields with invalid data
        And I click on save button in the add milestone overlay
        Then I check invalid error message for string field in the add milestone overlay is shown

    Scenario: Verify that invalid error message for non mandatory string field is shown when each string custom field is filled with invalid
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all non mandatory string fields with invalid data
        And I click on save button in the add milestone overlay
        Then I check invalid error message for string field in the add milestone overlay is shown

    Scenario: Verify that invalid error message for non mandatory numeric field is shown when each numeric custom field is filled with invalid data
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all non mandatory numeric fields with invalid data
        And I click on save button in the add milestone overlay
        Then I check invalid error message for each numeric field in the add milestone overlay is shown

    Scenario: Verify that error message below field is shown when string type custom field is filled with more than 255 characters data
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all string fields with value more than maximum value limit data
        And I click on save button in the add milestone overlay
        Then I check invalid error message for string field in the add milestone overlay is shown

    Scenario: Verify that error message below field is shown when numeric type custom field is filled with more than maximum value limit data
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all numeric fields with value more than maximum value limit data
        And I click on save button in the add milestone overlay
        Then I check invalid error message for each numeric field in the add milestone overlay is shown

    Scenario: Verify that user is allowed to clear date fields value of custom fields in the add milestone overlay
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all date fields with valid data
        And I clear values of each date field in the aurora contract details page
        Then I check each date field value in the add milestone overlay is blank

    Scenario: Verify that invalid error message below field is shown when date field of custom field is filled with invalid data
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all date fields with invalid data
        And I click on save button in the add milestone overlay
        Then I check invalid error message for each date field in the add milestone overlay is shown

    Scenario: Verify that invalid error message for non mandatory custom date field is shown
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all non mandatory date fields with invalid data
        And I click on save button in the add milestone overlay
        Then I check invalid error message for each date field in the add milestone overlay is shown

    Scenario: Verify that user is allowed to save milestone by filling all the mandatory fields of custom fields
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the mandatory fields in the add milestone overlay
        And I click on save button in the add milestone overlay
        Then I check milestone added toaster message is shown

    Scenario: Verify that user is allowed to save milestone by filling all the fields of custom fields
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the fields in the add milestone overlay
        And I click on save button in the add milestone overlay
        Then I check milestone added toaster message is shown

    Scenario: Verify that user is allowed to edit custom fields of existing milestone inside the contract
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the fields in the add milestone overlay
        And I click on save button in the add milestone overlay
        And I land on milestone page
        And I edit already added milestone
        And I click on save button in the add milestone overlay
        Then I check milestone updated toaster message is shown

    Scenario: Verify that user is allowed to save milestone by filling maximum characters in string and numeric fields of custom field
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the fields in the add milestone overlay with maximum character values
        And I click on save button in the add milestone overlay
        Then I check milestone updated toaster message is shown





    # *******************************************************************AURORA-901*******************************************************************************************

    # Manual Scenario

    # Verify that close date is set based on user timezone and date format based on user preference
    # Verify that close date is set to current date when milestone status is automatically changed to completed through scheduler
    # Verify that close date value set by scheduler is retained when milestone is edited
    # Verify that close date value set by scheduler is not retained when milestone is cloned
    # Verify that close date value is set to current date when milestone status is automatically changed to completed through scheduler for cloned milestone
    # Verify that close date value set by scheduler is retained when milestone is viewed through milestone card
    # Verify that close date value set by scheduler for old clm completed status milestone
    # Verify that close date value is not blank for old clm canceled status milestone
    # Verify that close date value is set to current date only after milestone is saved with completed or canceled status
    # Automation Scenario

    Scenario: Verify that close date is set to current date when new milestone is added with status as completed
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the mandatory fields in the add milestone overlay
        And I select milestone status as completed
        And I click on save button in the add milestone overlay
        And I land on milestone page
        And I click on edit option for recently added milestone
        Then I check close date value is set to current date

    Scenario: Verify that close date is set to current date when new milestone is added with status as canceled
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the mandatory fields in the add milestone overlay
        And I select milestone status as canceled
        And I click on save button in the add milestone overlay
        And I land on milestone page
        And I click on edit option for recently added milestone
        Then I check close date value is set to current date

    Scenario: Verify that close date is set to current date when milestone is edited with status as completed
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I add new milestone to the contract
        And I land on milestone page
        And I click on edit option for recently added milestone
        And I select milestone status as completed
        And I click on save button in the add milestone overlay
        And I land on milestone page
        And I view recenly edited milestone
        Then I check close date value is set to current date

    Scenario: Verify that close date is set to current date when milestone is edited with status as canceled
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I add new milestone to the contract
        And I land on milestone page
        And I click on edit option for recently added milestone
        And I select milestone status as canceled
        And I click on save button in the add milestone overlay
        And I land on milestone page
        And I view recenly edited milestone
        Then I check close date value is set to current date

    Scenario: Verify that close date is set to current date when milestone is clonned with status as completed
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I add new milestone to the contract
        And I land on milestone page
        And I click on 3 dots inside milestone card
        And I click on clone option inside 3 dots
        And I fill all the fields in the add milestone overlay
        And I select milestone status as completed
        And I click on save button in the clone milestone overlay
        And I land on milestone page
        And I click on edit option for recently clonned milestone
        Then I check close date value is set to current date

    Scenario: Verify that close date is set to current date when milestone is clonned with status as canceled
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I add new milestone to the contract
        And I land on milestone page
        And I click on 3 dots inside milestone card
        And I click on clone option inside 3 dots
        And I fill all the fields in the add milestone overlay
        And I select milestone status as canceled
        And I click on save button in the clone milestone overlay
        And I land on milestone page
        And I click on edit option for recently clonned milestone
        Then I check close date value is set to current date

    Scenario: Verify that close date is not set to current date when new milestone is added with other status except completed or canceled
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I add new milestone to the contract
        And I land on milestone page
        And I click on edit option for recently added milestone
        Then I check close date value is blank

    Scenario: Verify that close date is not set to current date when milestone is edited with other status except completed or canceled
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I add new milestone to the contract
        And I land on milestone page
        And I click on edit option for recently added milestone
        And I fill all the fields in the add milestone overlay
        And I click on save button in the clone milestone overlay
        And I land on milestone page
        And I view recenly edited milestone
        Then I check close date value is blank

    Scenario: Verify that close date is not set to current date when milestone is clonned with other status except completed or canceled
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I add new milestone to the contract
        And I land on milestone page
        And I click on 3 dots inside milestone card
        And I click on clone option inside 3 dots
        And I fill all the fields in the add milestone overlay
        And I click on save button in the clone milestone overlay
        And I land on milestone page
        And I click on edit option for recently clonned milestone
        Then I check close date value is blank

    Scenario: Verify that close date value is retained in the view milestone details when completed milestone status is viewed through card
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the mandatory fields in the add milestone overlay
        And I select milestone status as completed
        And I click on save button in the add milestone overlay
        And I land on milestone page
        And I view recenly added milestone
        Then I check close date value is set to current date

    Scenario: Verify that close date value is retained in the view milestone details when canceled milestone status is viewed through card
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the mandatory fields in the add milestone overlay
        And I select milestone status as canceled
        And I click on save button in the add milestone overlay
        And I land on milestone page
        And I view recenly added milestone
        Then I check close date value is set to current date

    Scenario: Verify that user entered close date is retained in the view milestone detail when any milestone status is viewed through card
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the mandatory fields in the add milestone overlay
        And I enter close date field as current date
        And I click on save button in the add milestone overlay
        And I land on milestone page
        And I view recenly added milestone
        Then I check close date value is set to current date

    Scenario: Verify that user entered close date is retained in the edit milestone detail when any milestone status is edited
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the mandatory fields in the add milestone overlay
        And I enter close date field as current date
        And I click on save button in the add milestone overlay
        And I land on milestone page
        And I click on edit option for recently added milestone
        Then I check close date value is set to current date

    Scenario: Verify that user entered close date is retained in the edit milestone detail when any milestone status is added to the contract
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the mandatory fields in the add milestone overlay
        And I enter close date field as current date
        And I click on save button in the add milestone overlay
        And I land on milestone page
        And I click on edit option for recently added milestone
        Then I check close date value is set to current date

    Scenario: Verify that user entered close date is not retained in the clone milestone overlay when any milestone status is in clonned process
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the mandatory fields in the add milestone overlay
        And I enter close date field as current date
        And I click on save button in the add milestone overlay
        And I land on milestone page
        And I click on 3 dots inside milestone card
        And I click on clone option inside 3 dots
        Then I check close date value is blank
        
    Scenario: Verify that close date is set to blank when milestone status is changed from completed to planned by editing it
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the mandatory fields in the add milestone overlay
        And I select milestone status as completed
        And I click on save button in the add milestone overlay
        And I land on milestone page
        And I click on edit option for recently added milestone
        And I select milestone status as planned
        And I click on save button in the add milestone overlay
        And I land on milestone page
        And I view recenly edited milestone
        Then I check close date value is blank

    Scenario: Verify that close date is set to blank when milestone status is changed from canceled to planned by editing it
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        And I fill all the mandatory fields in the add milestone overlay
        And I select milestone status as canceled
        And I click on save button in the add milestone overlay
        And I land on milestone page
        And I click on edit option for recently added milestone
        And I select milestone status as planned
        And I click on save button in the add milestone overlay
        And I land on milestone page
        And I view recenly edited milestone
        Then I check close date value is blank









