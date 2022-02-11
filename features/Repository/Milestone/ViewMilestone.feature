# /**
#  * The feature file is used to automate the view milestone feature
#  *
#  * @author somnath.k
#  */
Feature: Milestone:-View Milestone

    Background: Login to CLM application and land on repository grid page
        Given I login to clm application
        When I select CLM product in product selection page
        And I click on manage contract tab
        And I click on repository sub tab
        And I lands on repository grid page


    # ****************************************************************************AURORA-897*********************************************************************************

    # Manual Scenario

    # Verify that clone option is shown only if the user is assigned with clone milestone activity
    # Verify that clone option is not shown when user is not assigned with clone milestone activity
    # Verify that by default basic details header is highlighted in blue color in the clone milestone overlay
    # Verify that custom header is shown in the clone milestone overlay when custom header is configured
    # Verify that status will be set to planned banner is shown in the orange color when clicked on clone option inside 3 dots
    # Assigned Clone Activity | Verify that milestone owner field value is automatically selected with contract owner name in the clone milestone overlay when clicked on clone option inside 3 dots for old clm milestone
    # Assigned Clone Activity | Verify that orange color banner is shown to user even when the page is scrolled to bottom of the page
    # Assigned Clone Activity | Verify that view milestone page is shown when user clicks on browser refresh option during clone milestone process
    # Assigned Clone Activity | Verify that previous page is shown when user clicks on browser back button during clone milestone process
    # Assigned Clone Activity | Verify that irrespective no of clonning the prefix called as copy of should applied for all the clonned milestone
    # Assigned Clone Activity | Verify that new milestone is not created when discard changes popup is accepted during clone milestone process



    # Automation Scenario

    Scenario: Assigned Clone Activity | Verify that clone option is shown for existing milestone for active status contract
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I add new milestone to the contract
        And I land on milestone page
        And I click on 3 dots inside milestone card
        Then I check clone option is shown

    Scenario: Assigned Clone Activity | Verify that clone option is shown for existing milestone for inactive status contract
        When I search for inactive status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I add new milestone to the contract
        And I land on milestone page
        And I click on 3 dots inside milestone card
        Then I check clone option is shown

    Scenario: Assigned Clone Activity | Verify that clone option is shown for existing milestone for expired status contract
        When I search for expired status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I add new milestone to the contract
        And I land on milestone page
        And I click on 3 dots inside milestone card
        Then I check clone option is shown

    Scenario: Assigned Clone Activity | Verify that clone option is shown for existing milestone for termination notice served status contract
        When I search for termination notice served status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I add new milestone to the contract
        And I land on milestone page
        And I click on 3 dots inside milestone card
        Then I check clone option is shown

    Scenario: Verify that irrespective of activity assigned clone option should not be shown for archived status contract
        When I search for archived status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I add new milestone to the contract
        And I land on milestone page
        And I click on 3 dots inside milestone card
        Then I check clone option is not shown

    Scenario: Assigned Clone Activity | Verify that clone milestone overlay is shown when clicked on clone option inside 3 dots
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I add new milestone to the contract
        And I land on milestone page
        And I click on 3 dots inside milestone card
        Then I check clone milestone overlay is shown

    Scenario: Assigned Clone Activity | Verify that save button is enabled in the clone milestone overlay when clicked on clone option inside 3 dots
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
        Then I check save button is enabled in the clone milestone overlay

    Scenario: Assigned Clone Activity | Verify that discard changes popup is not shown when clicked on cross icon without changing any data in the clone milestone overlay
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
        And I click on cross icon in the clone milestone overlay
        Then I check discard contract popup is not shown

    Scenario: Assigned Clone Activity | Verify that discard changes popup is not shown when clicked on cancel button without changing any data in the clone milestone overlay
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
        And I clicked on cancel button in the clone milestone overlay
        Then I check discard contract popup is not shown

    Scenario: Assigned Clone Activity | Verify that discard changes popup is shown when clicked on cancel button after any changes done in the clone milestone overlay
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
        And I fill all the fields in the clone milestone overlay
        And I clicked on cancel button in the clone milestone overlay
        Then I check discard the changes popup is shown

    Scenario: Assigned Clone Activity | Verify that discard changes popup is shown when clicked on cross icon after any changes done in the clone milestone overlay
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
        And I fill all the fields in the clone milestone overlay
        And I click on cross icon in the clone milestone overlay
        Then I check discard the changes popup is shown

    Scenario: Assigned Clone Activity | Verify that discard changes popup is shown when clicked outside the clone milestone overlay after any changes is done
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
        And I fill all the fields in the clone milestone overlay
        And I click on disabled section on ui
        Then I check discard contract popup is shown

    Scenario: Assigned Clone Activity | Verify that discard changes popup is not shown when clicked outside the clone milestone overlay without any changes done
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
        And I click on disabled section on ui
        Then I check discard contract popup is not shown

    Scenario: Assigned Clone Activity | Verify that clone milestone overlay is shown when discard changes popup is canceled during clone milestone process
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
        And I fill all the fields in the clone milestone overlay
        And I click on disabled section on ui
        And I clicked on cancel button in the discard the changes popup
        Then I check clone milestone overlay is shown

    Scenario: Assigned Clone Activity | Verify that save button in the clone milestone overlay is enabled when any changes is done in the form
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
        And I fill all the fields in the clone milestone overlay
        Then I check save button is enabled in the clone milestone overlay

    Scenario: Assigned Clone Activity | Verify that inline error message for all fields in the clone milestone overlay is shown when all fields data are cleared and clicked on save button
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
        And I clear all the data from the clone milestone overlay
        And I click on save button in the clone milestone overlay
        Then I check inline error message is shown for each mandatory fields

    Scenario: Assigned Clone Activity | Verify that milestone id shown in the clone milestone overlay is of the parent milestone id when clicked on clone option inside 3 dots
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
        Then I check parent milestone id is shown in the clone milestone overlay

    Scenario: Assigned Clone Activity | Verify that status will be set to planned banner is shown in the clone milestone overlay when clicked on clone option inside 3 dots
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
        Then I check the status will be set to planned banner is shown

    Scenario: Assigned Clone Activity | Verify that status field value is automatically selected as planned in the clone milestone overlay when clicked on clone option inside 3 dots
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
        Then I check status field value is set as planned in the clone milestone overlay

    Scenario: Assigned Clone Activity | Verify that milestone owner field value is automatically selected with parent milestone owner value in the clone milestone overlay when clicked on clone option inside 3 dots
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
        Then I check parent milestone owner value is shown in the clone milestone overlay

    Scenario: Assigned Clone Activity | Verify that milestone title value will have a prefix as copy of plus parent milestone title value in the clone milestone overlay when clicked on clone option inside 3 dots
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
        Then I check milestone title value contains prefix as copy of plus parent milestone title value in the clone milestone overlay

    Scenario: Assigned Clone Activity | Verify that inline error message is shown for milestone title field when parent milestone title value is 255 character length and the clone of it is done
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I add new milestone with 255 character length data for each fields
        And I land on milestone page
        And I click on 3 dots inside milestone card
        And I click on clone option inside 3 dots
        And I click on save button in the clone milestone overlay
        Then I check inline error message for milestone title is shown in the clone milestone overlay

    Scenario: Assigned Clone Activity | Verify that irrespecive of paranet milestone close date value, the close date value in clone milestone overlay is blank by default
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I add new milestone with 255 character length data for each fields
        And I land on milestone page
        And I click on 3 dots inside milestone card
        And I click on clone option inside 3 dots
        Then I check close date field value is blank in the clone milestone overlay

    Scenario: Assigned Clone Activity | Verify that all the prefilled data shown in the clone milestone overlay is from the parent milestone except close date and status value
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
        Then I check parent milestone data is clonned except status and close date field value

    Scenario: Assigned Clone Activity | Verify that user is allowed to save clone milestone without doing any edit in the clone milestone overlay after clicked on clone option inside 3 dots
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
        And I click on save button in the clone milestone overlay
        Then I check milestone added toaster message is shown

    Scenario: Assigned Clone Activity | Verify that user is allowed to save cloned milestone by clearing all the data and selecting new data in the clone milestone overlay
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
        Then I check milestone added toaster message is shown

    Scenario: Assigned Clone Activity | Verify that user is allowed to save cloned milestone by filling string and numeric fields with maxmimum character length in the clone milestone overlay
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
        And I fill all the fields in the add milestone overlay with maximum character values
        And I click on save button in the clone milestone overlay
        Then I check milestone added toaster message is show

    Scenario: Assigned Clone Activity | Verify that toaster message is shown when clicked on save button in the clone milestone overlay after everything is filled
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
        And I fill all the fields in the add milestone overlay with maximum character values
        And I click on save button in the clone milestone overlay
        Then I check milestone added toaster message is show

    Scenario: Assigned Clone Activity | Verify that clonned data is shown in the recently created milestone card after clicked on save button in the clone milestone overlay
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
        Then I check clonned milestone details is shown in the recently created milestone card

    Scenario: Assigned Clone Activity | Verify that status will be set to planned banner is not shown when already cloned milestone is edited
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
        And I edit recently clonned milestone
        Then I check the status will be set to planned banner is not shown

    Scenario: Assigned Clone Activity | Verify that filled close date during clone milestone is shown as same in the edit milestone overlaye when cloned milestone is edited
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
        Then I check close date value is retained in the overlay

    Scenario: Assigned Clone Activity | Verify that user is allowed to clone already clonned milestone in the view milestone page
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
        And I clone recently clonned milestone
        And I click on save button in the clone milestone overlay
        Then I check milestone added toaster message is show

    Scenario: Assigned Clone Activity | Verify that clonned milestone can be deleted after it is saved
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
        And I delete recently clonned milestone
        And I land on milestone page
        Then I check recently deleted milestone is not shown in the view milestone page

    Scenario: Assigned Clone Activity | Verify that clonned milestone can be edited after it is saved
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
        And I edit recently clonned milestone
        Then I check milestone updated toaster message is shown

    Scenario: Assigned Clone Activity | Verify that parent milestone is not deleted when clonned milestone is deleted
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
        And I delete recently clonned milestone
        And I land on milestone page
        Then I check parent milestone is not deleted in the view milestone page

    Scenario: Assigned Clone Activity | Verify that new milestone id is shown in the recently created milestone card after clicked on save button in the clone milestone overlay
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
        Then I check new milestone id is generated for recently clonned milestone

    # place below scenarios in between

    Scenario: Verify that clear field icon is not shown for dropdown fields in the clone milestone overlay
        When I search for any published sub agreement contract except archived
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on milestone menu
        And I land on milestone page
        And I click on add icon that is shown in LHS top
        Then I check clear icon field is not for dropdown

    Scenario: Verify that invalid error message below field is shown when each numeric field is filled with invalid data in the clone milestone overlay
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

    Scenario: Verify that invalid error message below field is shown when each string field is filled with invalid data in the clone milestone overlay
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

    Scenario: Verify that invalid error message for non mandatory string field is shown when each string field is filled with invalid data in the clone milestone overlay
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

    Scenario: Verify that invalid error message for non mandatory numeric field is shown when each numeric field is filled with invalid data in the clone milestone overlay
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

    Scenario: Verify that error message below field is shown when string type field is filled with more than 255 characters data in the clone milestone overlay
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

    Scenario: Verify that error message below field is shown when numeric type field is filled with more than maximum value limit data in the clone milestone overlay
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

    Scenario: Verify that user is allowed to clear date fields value in the clone milestone overlay
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

    Scenario: Verify that invalid error message below field is shown when date field is filled with invalid data in the clone milestone overlay
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

    Scenario: Verify that invalid error message for non mandatory date field is shown when date field is filled with invalid data in the clone milestone overlay
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

