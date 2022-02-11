
# /**
#  * The feature file is used to automate the view milestone feature
#  *
#  * @author somnath.k
#  */

Feature: Alerts and Reminders:-View Alerts and Reminders

    Background: Login to CLM application and land on repository grid page
        Given I login to clm application
        When I select CLM product in product selection page
        And I click on manage contract tab
        And I click on repository sub tab
        And I lands on repository grid page


    # ****************************************************************************AURORA-943*********************************************************************************

    # Manual Scenario

    # Verify that separate tab is shown for reminder in the overlay
    # Verify that reminder is highlighted in blue color when clicked on reminder tab
    # Verify that user is not allowed to create reminder until all the mandatory fields are filled
    # Verify that date format shown in the remider form is shown based on user profile
    # Verify that reminder is triggered based on user time zone to the contract owner
    # Verify that user is not allowed to select past date while creating an reminder
    # Verify that reminder is triggred based on the remind me on field value
    # Verify that reminder set by one user is not seen by other users
    # Verify that user is allowed to perform actions during reminder creation
        
    # Automation Scenario

    Scenario: Verify that no alerts or reminders message is shown when there is no alert or reminder is added
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I clicked on save as draft button in the aurora contract details page
        And I fill minimum mandatory fields
        And I clicked on save as draft button in the aurora contract details page
        And I land on aurora contract details page
        And I click on clock icon from the RHS
        Then I check no alerts or reminders message is shown

    Scenario: Verify that Add new button is shown when contract with no alerts and reminders is viewd in aurora
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I clicked on save as draft button in the aurora contract details page
        And I fill minimum mandatory fields
        And I clicked on save as draft button in the aurora contract details page
        And I land on aurora contract details page
        And I click on clock icon from the RHS
        Then I check add new button is shown in the center of overlay

    Scenario: Verify that add new icon is shown irrespective of alert or reminder is associated with contract
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on clock icon from the RHS
        Then I check add new icon is shown in the overlay

    Scenario: Verify that clock symbol is shown for all types contract status except archived status
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check clock icon is enabled

    Scenario: Verify that user is not allowed to create reminder for archived status contract
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check clock icon is disabled

    Scenario: Verify that save button is disabled when clicked on add icon and reminder tab is selected
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on clock icon from the RHS
        And I click on add new icon in the overlay
        And I select reminder tab
        Then I check save button is disbaled

    Scenario: Verify that user is allowed to close the add new overlay
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on clock icon from the RHS
        And I click on add new icon in the overlay
        And I select reminder tab
        And I click on cross icon in the overlay
        Then I check add new overlay is not shown

    Scenario: Verify that inline error message for unfilled field is shown when clicked on save button in the reminder overlay
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on clock icon from the RHS
        And I click on add new icon in the overlay
        And I select reminder tab
        And I fill reminder title field
        And I click on save button in the overlay
        Then I check inline error message for unfilled mandatory fields

    Scenario: Verify that changes might lost popup is shown when clicked on cross icon after filling the form
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on clock icon from the RHS
        And I click on add new icon in the overlay
        And I select reminder tab
        And I fill reminder title field
        And I click on cross icon in the overlay
        Then I check changes might lost popup is shown

    Scenario: Verify that changes might lost popup is shown when clicked on cancel button after filling the form
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on clock icon from the RHS
        And I click on add new icon in the overlay
        And I select reminder tab
        And I fill reminder title field
        And I click on cancel button in the overlay
        Then I check changes might lost popup is shown

    Scenario: Verify that invalid error message below field is shown when each string field is filled with invalid data
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on clock icon from the RHS
        And I click on add new icon in the overlay
        And I select reminder tab
        And I fill all the string fields with invalid data
        And I click on save button in the overlay
        Then I check inline error message is shown for all the string field

    Scenario: Verify that error message below field is shown when string type field is filled with more than 255 characters data in the reminder form
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on clock icon from the RHS
        And I click on add new icon in the overlay
        And I select reminder tab
        And I fill all the string fields with more than 255 charcter length value
        And I click on save button in the overlay
        Then I check inline error message is shown for all the string field

    Scenario: Verify that user is allowed to input 255 character length reminder title in the reminder form
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on clock icon from the RHS
        And I click on add new icon in the overlay
        And I select reminder tab
        And I fill all the string fields with 255 charcter length value along with other fields
        And I click on save button in the overlay
        Then I check reminder added toaster message is shown

    Scenario: Verify that user is allowed to set reminder based on the combination of date and time option
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on clock icon from the RHS
        And I click on add new icon in the overlay
        And I select reminder tab
        And I fill all the fields in the reminder form
        And I click on save button in the overlay
        Then I check reminder added toaster message is shown

    Scenario: Verify that filled details in add reminder form is shown in the view alerts and reminders overlay
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on clock icon from the RHS
        And I click on add new icon in the overlay
        And I select reminder tab
        And I fill all the fields in the reminder form
        And I click on save button in the overlay
        Then I check filled details is shown in the view page

    Scenario: Verify that new added reminder toaster message is shown when clicked on save button in the reminder form
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on clock icon from the RHS
        And I click on add new icon in the overlay
        And I select reminder tab
        And I fill all the fields in the reminder form
        And I click on save button in the overlay
        Then I check reminder added toaster message is shown

    Scenario: Verify that default time of the reminder would be set as 12:00 AM
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on clock icon from the RHS
        And I click on add new icon in the overlay
        And I select reminder tab
        And I click on remind me on field
        Then I check default time 12:00am is shown

    Scenario: Verify that user is allowed to create reminder from any page of the contract
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I click on clock icon from the RHS
        And I click on add new icon in the overlay
        And I select reminder tab
        And I fill all the fields in the reminder form
        And I click on save button in the overlay
        Then I check reminder added toaster message is shown





#****************************************************************AURORA-943*****************************************************************************


# Manual Scenarios
# Scenario: D1Verify that reminder set by one user is not seen by other users
# Verify that reminders shown in the sidebar is sorted based on date wise
# Verify that reminder view shown on reminder card click is non editable to user
# Verify that all the active reminders are shown inside upcoming event section
# Verify that all inactive reminders are shown inside past event section
# Verify that past event related reminder is shown in the upcoming event when past event is made as active
# Automation Scenario

Scenario: Verify that reminder icon is shown to identify reminder in the sidebar
Scenario: Verify that reminder title is shown in the reminder card
Scenario: Verify that remind me on value is shown in the reminder card
Scenario: Verify that username is shown in the reminder card
Scenario: Verify that user is having edit option inside reminder card
Scenario: Verify that user is having delete option inside reminder card
