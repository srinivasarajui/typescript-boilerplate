# /**
#  *
#  * The feature file to Verify all the scenarios related to  Grid View
#  *
#  * @author Datta Ankalkar
#  *
#  */



# Automation Scenarios
Feature: Verify all the scenarios related to contracts Grid View

# ********************************* AURORA-659 *******************************************
#Manual Scenarios
#01. Verify resizing and rearranging to be made available for all columns in the grid
#02. Verify the grid and its columns should be as defined in Design guideline

Background:
    Given I login to clm application
    And I select CLM product in product selection page
    And I click on "Contracts" link in the side Navigation Bar

    Scenario: TC01: Verify User navigates to grid view of contracts
        When I navigate to "Contracts" page view
        Then I see a grid view for Contracts displayed

    Scenario: TC02: Verify Standard columns available to the user for selection and view
        When I navigate to "Contracts" page view
        Then I see a grid view for Contracts displayed
        Then I check standard column "abc" displayed "true"
        # add 17 more statements for each column

    Scenario: TC03: Verify Contract Number is fixed Standard column
        When I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        Then I check standard column "Contract_Number" displayed "true"

    Scenario: TC04: Verify Actions is fixed Standard column
        When I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        Then I check standard column "Actions" displayed "true"

    Scenario: TC05: Verify User can rearrange the column by dragging the column
        When I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        Then I drag and drop columns

    Scenario: Verify Select All checkbox is availbale to select and unselect all items on the grid
        When I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        Then I check Select All checkbox is availbale to select and unselect all items

    Scenario: Verify grid contains data table title and optional description
        When I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        Then I check gird has title and optional description

    Scenario: Verify grid has selector cells allows user to select one or more items
        When I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        Then I check gird has Selector Cells

    # ******************************* Aurora-663 ****************************************
    # /**
#  * User Story AURORA-663,
#  * The feature file to Verify all the scenarios related to - Grid | Select and view contract
#  *
#  * @author Datta Ankalkar
#  *
#  *
#  */

    Scenario: Verify user with scope "" can open and view contract profile with actions link provided for a contract
        And I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        When I click on actions link of first contract
        And I check "View" option under Actions
        And I click on "View" option under Actions
        And I check a screen loader is displayed "true"
        Then I check I navigates to Contract profile page

    Scenario: Verify user with scope "" can open and view contract profile with actions link provided for a contract
        And I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        When I click on actions link of first contract
        And I check "View" option under Actions
        And I click on "View" option under Actions
        And I check a screen loader is displayed "true"
        Then I check I navigates to Contract profile page

    Scenario: Verify user with scope "" can open and view contract profile with actions link provided for a contract
        And I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        When I click on actions link of first contract
        And I check "View" option under Actions
        And I click on "View" option under Actions
        And I check a screen loader is displayed "true"
        Then I check I navigates to Contract profile page

     Scenario: Verify user with scope "" can open and view contract profile with Contract number link provided for a contract
        And I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        And I check standard column "Contract Number" displayed "true"
        When I click on contract number of first contract
        And I check a screen loader is displayed "true"
        Then I check I navigates to Contract profile page

     Scenario: Verify user with scope "" can open and view contract profile with Contract number link provided for a contract
        And I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        And I check standard column "Contract Number" displayed "true"
        When I click on contract number of first contract
        And I check a screen loader is displayed "true"
        Then I check I navigates to Contract profile page

    Scenario: Verify user with scope "" can open and view contract profile with Contract number link provided for a contract
        And I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        And I check standard column "Contract Number" displayed "true"
        When I click on contract number of first contract
        And I check a screen loader is displayed "true"
        Then I check I navigates to Contract profile page

    Scenario: Verify user with scope "" can open and view contract profile with Contract number link provided for a contract
        And I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        And I check standard column "Contract Number" displayed "true"
        When I click on contract number of first contract
        And I check a screen loader is displayed "true"
        Then I check I navigates to Contract profile page


    Scenario: Verify validation text if Contract fails to open from Actions link on grid view
        And I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        When I click on actions link of first contract
        And I check "View" option under Actions
        And I click on "View" option under Actions
        Then check error toaster title "Contract failed to open!" if contract fails to open
        And I check error message "failed to open. Please try again"

    Scenario: Verify validation text if Contract fails to open from Contract Number link on grid view
        And I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        And I check standard column "Contract Number" displayed "true"
        When I click on contract number of first contract
        Then check error toaster title "Contract failed to open!" if contract fails to open
        And I check error message "failed to open. Please try again"

# ******************************* Aurora-664 ****************************************
#  /**
#  * User Story AURORA-664
#  * The feature file to Verify all the scenarios related to - Grid View | Representation for ATL columns
#  *
#  * @author Datta Ankalkar
#  *
#  *
#  */

    # Manual Scenarios:
    # 1.Verify Clicking on CPs link, show a popover with all CPs listed - Primary CP followed by secondary CPs


    Scenario: Verify Data representation for Contracting Party colunm value
        And I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        When I check standard column "Contracting Party" displayed "true"
        Then I check Data representation format for "Contracting Party" standard column


    Scenario: Verify Primary Party value should be displayed into Contracting Party column
        And I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        When I check standard column "Contracting Party" displayed "true"
        Then I check primary party value is shown for Contracting Party standard column


    Scenario: Verify a link provided along with CPs primary party value when multiple contracting parties are added
        And I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        When I check standard column "Contracting Party" displayed "true"
        Then I check Contracting Party value has a link

    Scenario: Verify Clicking on CPs link, show a popover with all CPs listed
        And I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        And I check standard column "Contracting Party" displayed "true"
        And I check Contracting Party value has a link
        When I click on Contracting Party value link
        Then I see a popover with all CPs listed

    Scenario: Verify Data representation for Business Units colunm value
        And I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        When I check standard column "Business Units" displayed "true"
        Then I check Data representation format for "Business Units" standard column

    Scenario: Verify a link provided along with Business Units value when multiple Business Units are added
        And I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        When I check standard column "Business Units" displayed "true"
        Then I check Business Units value has a link

    Scenario: Verify Clicking on Business Units value link, show a popover with all more Business Units added
        And I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        And I check standard column "Business Units" displayed "true"
        And I check Business Units value has a link
        When I click on Business Units value link
        Then I see a popover with all Business Units listed

# ******************************* Aurora-662 ****************************************
# /**
#  * User Story AURORA-662
#  * The feature file to Verify all the scenarios related to - Grid View | View contract data as per user's scope & access
#  *
#  * @author Datta Ankalkar
#  *
#  */

    # Manual Scenarios:

    # Automation Scenarios:

    Scenario: Verify Standard columns available to the user for selection and view On contracts grid view
        And I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        And I check standard column "abc" displayed "true"
        And I check standard column "abc" displayed "true"
        And I check standard column "abc" displayed "true"
        And I check standard column "abc" displayed "true"

    Scenario: If the contract has amendments, an icon should be placed next contract number as an indicator
        And I navigate to "Contracts" page view
        When I see a grid view for Contracts displayed
        Then I check for contact having Amendment attached
        And I see an Icon next contract number as an indicator

    Scenario: Verify On click on the icon should open a pop up showing all amendments detail
        And I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        And I check for contact having Amendment attached
        And I see an Icon next contract number as an indicator
        When I click on Icon for Amendments
        Then I see a popup displayed showing all amendments detail

    Scenario: Verify On clicking on Actions menu, based on user permission few actions options are provided (like View, Delete etc)
        And I navigate to "Contracts" page view
        And I see a grid view for Contracts displayed
        When I click on actions link of first contract
        Then I check "View" option under Actions
        And I check "Create Amendment" option under Actions
        And I check "Request Amendment" option under Actions
        And I check "Clone in Repository" option under Actions
        And I check "Clone in Authoring" option under Actions
        And I check "Delete" option under Actions

    Scenario: Verify Contract number is visible in blue color as a link
        And I navigate to "Contracts" page view
        When I see a grid view for Contracts displayed
        Then I check Contract Number is visible in blue color as a link

