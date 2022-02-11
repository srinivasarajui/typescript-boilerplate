# /**
#  *
#  * The feature file to Verify all the scenarios related to  Grid View
#  *
#  * @author Datta Ankalkar
#  *
#  */

Feature: Verify all the scenarios related to contracts Grid View

Background: 
    Given I login to clm application
    And I select CLM product in product selection page
    # And I click on "Contracts" link in the side Navigation Bar
    And I click on manage contract tab
    And I click on repository sub tab
    And I check user lands on repository grid page
    And I view first contract from the grid
    And I click on redirect to aurora button
    And I land on aurora contract details page
    
# ********************************* AURORA-659 Start *******************************************
    #Manual Scenarios:
    #Scenario: TC01. Verify resizing and rearranging to be made available for all columns in the grid
    #Scenario: TC02. Verify the grid and its columns should be as defined in Design guideline
    #Scenario: TC03. Verify all Customizations AND Configurations done through Step-One are reflected properly on grid view
    #Scenario: TC04. Verify all columns of the grid can be resized to min and max size based on Step One configuration

    # Automation Scenarios:

    @Aurora_659
    Scenario: TC05: Verify User navigates to grid view of contracts
        When I navigate to "Repository Contract" page view
        Then I see a grid view for Contracts displayed

    @Aurora_659
    Scenario: TC06: Verify Standard columns available to the user for selection and view
        And I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        When I click on "Customize grid icon" available in the header
        And I reset grid to default Header columns
        Then I check standard column "Contract Number" displayed "true"
        And I check standard column "Contract Title" displayed "true"
        And I check standard column "Contract Source" displayed "true"
        And I check standard column "Contract Type" displayed "true"
        And I check standard column "Contract Subtype" displayed "true"
        And I check standard column "Category" displayed "true"
        And I check standard column "Contracting Party" displayed "true"
        And I check standard column "Currency" displayed "true"
        And I check standard column "Contract value" displayed "true"
        And I check standard column "Contract Status" displayed "true"
        And I check standard column "Owner" displayed "true"
        And I check standard column "Effective start date" displayed "true"
        And I check standard column "Expiry Date" displayed "true"
        And I check standard column "Action" displayed "true"
        And I check standard column "Hierarchy status" displayed "false"
        And I check standard column "Created On" displayed "false"
        And I check standard column "Requested by" displayed "false"
        And I check standard column "Business Units" displayed "false"
        
    @Aurora_659
    Scenario: TC07: Verify Contract Number is fixed Standard column
        When I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        Then I check standard column "Contract Number" displayed "true"
        And I check standard column "Contract Number" is freezed from "left" end of the grid

    @Aurora_659
    Scenario: TC08: Verify Actions is fixed Standard column
        When I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        Then I check standard column "Action" displayed "true"
        And I check standard column "Action" is freezed from "right" end of the grid

    # Unable to perform drog and drop of columns
    # Scenario: TC09: Verify User can rearrange the column by dragging the column
    #     And I navigate to "Repository Contract" page view
    #     And I see a grid view for Contracts displayed
    #     And I check grid column arrangement
        # When I drag and drop repoGrid columns
    #     Then I check grid column arrangement


    # Scenario: TC010: Verify Select All checkbox is availbale to select and unselect all items on the grid
    #     When I navigate to "Repository Contract" page view
    #     And I see a grid view for Contracts displayed
    #     Then I check Select All checkbox is availbale to select and unselect all items in the grid
    
    @Aurora_659
    Scenario: TC011: Verify grid contains data table title and optional description
        When I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        Then I check gird has title and optional description

    # Scenario: TC012: Verify grid has selector cells allows user to select one or more items
    #     When I navigate to "Repository Contract" page view
    #     And I see a grid view for Contracts displayed
    #     Then I check gird has Selector Cells

    @Aurora_659
    Scenario: TC013: Verify column sort link is availabel for each header for sorting the records in ascending or descending order 
        When I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        Then I check grid headers have sort link added to each columns

    @Aurora_659
    Scenario: TC014: Verify that grid has search textbox to search contracts with Contract Number
        When I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        Then I check Search functionality available to search contracts with "Contract Number"

    @Aurora_659
    Scenario: TC015: Verify that grid has search textbox to search contracts with Contract Title  
        When I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        Then I check Search functionality available to search contracts with "Contract Title"

    @Aurora_659
    Scenario: TC016: Verify that grid has search textbox to search contracts with Contract Source
        When I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        Then I check Search functionality available to search contracts with "Contract Source"

    @Aurora_659
     Scenario: TC017: Verify that grid has search textbox to search contracts with Contracting Party
        When I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        Then I check Search functionality available to search contracts with "Contracting Party"

    
   @Aurora_659
    Scenario: TC018: Verify that grid has dropdown to filter contracts with Contract type
        When I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        Then I check dropdown to filter contracts with "Contract Type"

    @Aurora_659
    Scenario: TC019: Verify that grid has dropdown to filter contracts with Contract subtype
        When I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        Then I check dropdown to filter contracts with "Contract Subtype"

    @Aurora_659
    Scenario: TC020: Verify that grid has dropdown to filter contracts with Contract category
        When I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        Then I check dropdown to filter contracts with "Category"

    @Aurora_659
    Scenario: TC021: Verify that grid has dropdown to filter contracts with currency
        When I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        Then I check dropdown to filter contracts with "Currency"

    @Aurora_659
    Scenario: TC022: Verify that grid has dropdown to filter contracts with Contract status
        When I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        Then I check dropdown to filter contracts with "Contract Status"


    # Scenario: TC023: Verify that grid has dropdown to filter contracts with Contract hierarchy Status
    #     When I navigate to "Repository Contract" page view
    #     And I see a grid view for Contracts displayed
    #     Then I check dropdown to filter contracts with "Contract hierarchy Status"

    @Aurora_659
    Scenario: TC024: Verify that grid has search textbox to search contracts with Contract Owner
        When I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        Then I check Search functionality available to search contracts with "Owner"

# ******************************* Aurora-659 Ends ****************************************  

# ******************************* Aurora-660 Start ****************************************
#  /**
#  * User Story AURORA-660
#  * The feature file to Verify all the scenarios related to - Grid View | Common header and grid icon options
#  *
#  * @author Datta Ankalkar
#  *
#  */
     
# Manual Scenarios: 

# Automation Scenarios: 
    
    @Aurora_660
     Scenario: TC001: Verify Filter Icon is disabled when no filters are applied to the columns
        When I navigate to "Repository Contract" page view
        Then I check Clear Filter Icon is enable is "false"
    
    @Aurora_660
     Scenario: TC002: Verify Filter Icon is enabled when filters are applied to the columns
        And I navigate to "Repository Contract" page view
        And I "Search" for "Contract Number" as "588" on grid
        Then I check Clear Filter Icon is enable is "true"
    
    @Aurora_660
     Scenario: TC003: Verify Hamburger icon is included in the header
        And I navigate to "Repository Contract" page view
        Then I check "Hamburger icon" included in the header
    
    @Aurora_660
     Scenario: TC004: Verify Ultria Logo is included in the header
        And I navigate to "Repository Contract" page view
        Then I check "Ultria Logo" included in the header
    
    @Aurora_660
     Scenario: TC005: Verify Search Icon is included in the header
        And I navigate to "Repository Contract" page view
        Then I check "Search Icon" included in the header
    
    @Aurora_660
     Scenario: TC006: Verify Notification Icon is included in the header
        And I navigate to "Repository Contract" page view
        Then I check "Notification Icon" included in the header
    
    @Aurora_660
     Scenario: TC007: Verify User profile icon is included in the header
        And I navigate to "Repository Contract" page view
        Then I check "User profile icon" included in the header
   
    @Aurora_660
     Scenario: TC008: Verify Title should be "Repository Contracts" for repository module
        And I navigate to "Repository Contract" page view
        Then I check the header title is "Repository Contracts"
     
    @Aurora_660                                     
     Scenario: TC009: Verify Filter icon is availble on grid to clear filters applied on grid
        And I navigate to "Repository Contract" page view
        Then I check "Clear Filter icon" included in the header
    
    @Aurora_660
     Scenario: TC010: Verify Customize grid icon is available to to select columns and ordering on the grid
        And I navigate to "Repository Contract" page view
        Then I check "Customize grid icon" included in the header
    
    @Aurora_660
     Scenario: TC011: Verify Export icon is availble on grid to download contracts
        And I navigate to "Repository Contract" page view
        Then I check "Download icon" included in the header
    
    @Aurora_660
     Scenario: TC012: Verify Upload Contract button is available to create/upload a contract
        And I navigate to "Repository Contract" page view
        Then I check "Upload button" included in the header
# NYI
     Scenario: TC013: Verify clicking on Hamburger icon should show side navigation bar
        And I navigate to "Repository Contract" page view
        And I check "Hamburger icon" included in the header
        # Then I click on "Hamburger icon" available in the header
        # And I see a side navigation bar is displayed
    
    @Aurora_660
     Scenario: TC014: Verify clicking on filter icon, all applied filters from the grid should be removed
        And I navigate to "Repository Contract" page view
        And I check Clear Filter Icon is enable is "false"
        When I "Search" for "Contract Number" as "588" on grid
        Then I check Clear Filter Icon is enable is "true"
        And I click on "Clear Filter icon" available in the header
        And I check Clear Filter Icon is enable is "false"
    
    @Aurora_660
     Scenario: TC015: Verify on clicking on Customize grid icon should show a popover panel to select columns and ordering on the grid
        And I navigate to "Repository Contract" page view
        And I click on "Customize grid icon" available in the header
        Then I see a popover panel displayed to select columns and ordering on the grid
    
    @Aurora_660
     Scenario: TC016: Verify only selected/checked items from Customize grid popover panel shown on the grid
        And I navigate to "Repository Contract" page view
        And I click on "Customize grid icon" available in the header
        Then I see a popover panel displayed to select columns and ordering on the grid
        And I check only selected items are shown on the grid

    @Aurora_660
    Scenario: TC017: Verify unchecked items from Customize grid popover panel are not shown on the grid
        And I navigate to "Repository Contract" page view
        And I click on "Customize grid icon" available in the header
        Then I see a popover panel displayed to select columns and ordering on the grid
        And I check unchecked items are not shown on the grid

    @Aurora_660
     Scenario: TC018: Verify On clicking the upload contract button should open the form on aurora for creating/uploading a contract
        And I navigate to "Repository Contract" page view
        And I click on "Upload button" available in the header
        Then I land on create new contract page

    #  Scenario: TC019: Verify mouse scrolling is happening by hovering on all columns on grid

    #  Scenario: TC020:Verify for any invalid search or filter 'No relavent contracts found' text as result should be displayed
 

# ******************************* Aurora-660 Ends ****************************************


 #****************************** User Story AURORA-661:- STARTS ***************************************

    # /**
    #  *
    #  *
    #  * @author Nikhil
    #  *
    #  *
    #  */

    #Automation Scenarios:
    Scenario: TC01: Verify if the delete option is avaliable inside actions menu for the contract
        When I search for a contract with Contract number "123456"
        And I click on the Actions drop down
        Then I check the "delete" option

    Scenario: TC02: Verify a confirmation popup is displayed while deleting a contrat
        When I search for a contract with Contract number "123456"
        And I click on the Actions drop down
        And I select the "delete" option
        Then I see a confirmation pop up title as "Delete Contract?"

    Scenario: TC03: Verify a confirmation popup has informative mesage while deleting a contrat
        When I search for a contract with Contract number "123456"
        And I click on the Actions drop down
        And I select the "delete" option
        Then I see a confirmation pop up message as "Enter deleting comments before permanently deleting the contract" 

    Scenario: TC04: Verify inside confirmation popup Delete option button is disabled by default
        When I search for a contract with Contract number "123456"
        And I click on the Actions drop down
        And I select the "delete" option
        Then I see a confirmation pop up -"Delete Contract?"
        And I see option "Delete"
        And I see option "Delete" disabled bydefault

     Scenario: TC05: Verify inside confirmation popup Delete option button enables when message comments entered
        When I search for a contract with Contract number "123456"
        And I click on the Actions drop down
        And I select the "delete" option
        Then I see a confirmation pop up message as "Enter deleting comments before permanently deleting the contract" 
        And Enter message comments "bye"
        And I see option "Delete" enabled

    Scenario: TC06: Verify a confirmation popup displayed has two options while deleting a contrat
        When I search for a contract with Contract number "123456"
        And I click on the Actions drop down
        And I select the "delete" option
        Then I see a confirmation pop up -"Delete Contract?"
        And I see option "Delete"
        And I see option "Cancel" 

    Scenario: TC07: Verify if the user is able to delete a contract in repository
        When I search for a contract with Contract number "123456"
        And I click on the Actions drop down
        And I select the "delete" option
        And I see a confirmation pop up -"Delete Contract?" 
        And I see a message "Are you sure you want to delete the contract?"
        When I click on the "delete" option from the confirmaton pop up

    Scenario: TC08: Verify the confirmation toaster - "Contract delete successful" with message 
        When I search for a contract with Contract number "123456"
        And I click on the Actions drop down
        And I select the "delete" option
        And I see a confirmation pop up -"Delete Contract?" 
        And I see a message "Are you sure you want to delete the contract?"
        When I click on the "delete" option from the confirmaton pop up
        Then I see a confirmation toaster - "Contract delete successful"
        And I see a message " '<contract_title>' contract deleted successfully"

    Scenario: TC09: Verify if the user is able to cancel deleting a contract in repository
        When I search for a contract with Contract number "123456"
        And I click on the Actions drop down
        And I select the "delete" option
        And I see a confirmation pop up -"Delete Contract?" 
        And I see a message "Are you sure you want to delete the contract?"
        When I click on the "cancel" option from the confirmaton pop up
        Then I see a confirmation pop up is closed
        And I see the grid 

    #************************************ User Story AURORA-661:- ENDS ******************************

    # ******************************* Aurora-662 Starts ****************************************
# /**
#  * User Story AURORA-662
#  * The feature file to Verify all the scenarios related to - Grid View | View contract data as per user's scope & access
#  *
#  * @author Datta Ankalkar
#  *
#  */

    # Manual Scenarios:

    # Automation Scenarios:

    @Aurora_662
    Scenario: TC001: Verify Standard columns available to the user for selection and view On contracts grid view
        And I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        When I click on "Customize grid icon" available in the header
        And I reset grid to default Header columns
        Then I check standard column "Contract Number" displayed "true"
        And I check standard column "Contract Title" displayed "true"
        And I check standard column "Contract Source" displayed "true"
        And I check standard column "Contract Type" displayed "true"
        And I check standard column "Contract Subtype" displayed "true"
        And I check standard column "Category" displayed "true"
        And I check standard column "Contracting Party" displayed "true"
        And I check standard column "Currency" displayed "true"
        And I check standard column "Contract value" displayed "true"
        And I check standard column "Contract Status" displayed "true"
        And I check standard column "Owner" displayed "true"
        And I check standard column "Effective start date" displayed "true"
        And I check standard column "Expiry Date" displayed "true"
        And I check standard column "Action" displayed "true"
        And I check standard column "Hierarchy status" displayed "false"
        And I check standard column "Created On" displayed "false"
        And I check standard column "Requested by" displayed "false"
        And I check standard column "Business Units" displayed "false"
        
        
# not yet implemented
    # Scenario: TC002: Verify If the contract has amendments, an icon should be placed next contract number as an indicator
    #     And I navigate to "Repository Contract" page view
    #     When I see a grid view for Contracts displayed
    #     Then I check for contact having Amendment attached
    #     And I see an amendment attached Icon next contract number
# implementation will be provided in Aurora-667
    # Scenario: TC003: Verify On click on the icon should open a pop up showing all amendments detail
    #     And I navigate to "Repository Contract" page view
    #     And I see a grid view for Contracts displayed
    #     And I check for contact having Amendment attached
    #     And I see an amendment attached Icon next contract number
    #     When I click on Amendment Icon next contract number
    #     Then I see a popup displayed showing all amendments detail
    
    @Aurora_662
    Scenario: TC004: Verify On clicking on Actions menu, based on user permission few actions options are provided (like View, Delete etc)
        And I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        When I click on actions link of first contract
        Then I check "View" option under Actions
        And I check "Create Amendment" option under Actions
        And I check "Request Amendment" option under Actions
        And I check "Clone in Repository" option under Actions
        And I check "Clone in Authoring" option under Actions
        And I check "Delete" option under Actions

    @Aurora_662
    Scenario: TC005: Verify Contract number is visible in blue color as a link
        And I navigate to "Repository Contract" page view
        When I see a grid view for Contracts displayed
        Then I check Contract Number is visible in blue color as a link

    @Aurora_662
     Scenario: TC006: Verify user with access scope can open and view contract profile with Contract number link provided for a contract
        And I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        And I check standard column "Contract Number" displayed "true"
        When I click on contract number of first contract
        Then I land on aurora contract details page  

    @Aurora_662
    Scenario: TC007: Verify user with access scope can open and view contract profile with actions link provided for a contract
        And I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        When I click on actions link of first contract
        And I check "View" option under Actions
        And I click on "View" option under Actions
        Then I land on aurora contract details page 

# Manual
#     Scenario: TC008: Verify validation text if Contract fails to open from Actions link on grid view
#         And I navigate to "Repository Contract" page view
#         And I see a grid view for Contracts displayed
#         When I click on actions link of first contract
#         And I check "View" option under Actions
#         And I click on "View" option under Actions
#         Then check error toaster title "Contract failed to open!" if contract fails to open
#         And I check error message "failed to open. Please try again"
# manual
#     Scenario: TC009: Verify validation text if Contract fails to open from Contract Number link on grid view
#         And I navigate to "Repository Contract" page view
#         And I see a grid view for Contracts displayed
#         And I check standard column "Contract Number" displayed "true"
#         When I click on contract number of first contract
#         Then check error toaster title "Contract failed to open!" if contract fails to open
#         And I check error message "failed to open. Please try again"

# ******************************* Aurora-662 Ends ****************************************
# ******************************* Aurora-663 Start ****************************************
# /**
#  * User Story: AURORA-663
#  * The feature file to Verify all the scenarios related to - Grid | Select and view contract
#  *
#  * @author Datta Ankalkar
#  *
#  */

#  Automation Scenarios:
   @Aurora_663
    Scenario: TC01.Verify user with access scope can see View option under Action menu provided for a contract
        And I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        When I click on actions link of first contract
        Then I check "View" option under Actions

    @Aurora_663
    Scenario: TC02.Verify user with access scope can open and view contract profile with actions link provided for a contract
        And I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        When I click on actions link of first contract
        And I check "View" option under Actions
        And I click on "View" option under Actions
        Then I land on aurora contract details page

    @Aurora_663
     Scenario: TC03.Verify user with access scope can open and view contract profile with Contract number link provided for a contract
        And I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        And I check standard column "Contract Number" displayed "true"
        When I click on contract number of first contract
        Then I land on aurora contract details page

# # Manual
#     Scenario: TC04.Verify validation text if Contract fails to open from Actions link on grid view
#         And I navigate to "Repository Contract" page view
#         And I see a grid view for Contracts displayed
#         When I click on actions link of first contract
#         And I check "View" option under Actions
#         And I click on "View" option under Actions
#         Then check error toaster with title "Contract failed to open!" if contract fails to open
#         And I check error toaster with message "failed to open. Please try again"
# manual
#     Scenario: TC05.Verify validation text if Contract fails to open from Contract Number link on grid view
#         And I navigate to "Repository Contract" page view
#         And I see a grid view for Contracts displayed
#         And I check standard column "Contract Number" displayed "true"
#         When I click on contract number of first contract
#         Then check error toaster with title "Contract failed to open!" if contract fails to open
#         And I check error toaster with message "failed to open. Please try again"


# ******************************* Aurora-663 End ****************************************

# ******************************* Aurora-664 Start ****************************************
#  /**
#  * User Story AURORA-664 
#  * The feature file to Verify all the scenarios related to - Grid View | Representation for ATL columns
#  *
#  * @author Datta Ankalkar
#  *
#  */

# Manual Scenarios:
    # Scenario: TC001: Verify Data representation for Contracting Party colunm value
        # And I navigate to "Repository Contract" page view
        # And I see a grid view for Contracts displayed
        # When I check standard column "Contracting Party" displayed "true"
        # Then I check Data representation format for "Contracting Party" standard column
        

    # Scenario: TC002: Verify Primary Party value should be displayed on Contracting Party column
        # And I navigate to "Repository Contract" page view
        # And I see a grid view for Contracts displayed
        # When I check standard column "Contracting Party" displayed "true"
        # Then I check primary party value is shown for Contracting Party standard column
    
    # Scenario: TC005: Verify Data representation for Business Units colunm value
        # And I navigate to "Repository Contract" page view
        # And I see a grid view for Contracts displayed
        # When I check standard column "Business Units" displayed "true"
        # Then I check Data representation format for "Business Units" standard column
        
# Automation Scenarios:
    @Aurora_664
    Scenario: TC003: Verify a link provided along with CPs primary party value when multiple contracting parties are added
        And I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        When I check standard column "Contracting Party" displayed "true"
        Then I check Contracting Party value has a link
    
    @Aurora_664
    Scenario: TC004: Verify Clicking on CPs link, show a popover with all CPs listed - Primary CP followed by secondary CPs
        And I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        And I check standard column "Contracting Party" displayed "true"
        And I check Contracting Party value has a link
        When I click on Contracting Party value link
        Then I see a popover with all CPs listed
    @Aurora_664    
    Scenario: TC006: Verify a link provided along with Business Units value when multiple Business Units are added
        And I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        And I "Search" for "Contract Number" as "10688" on grid
        And I click on "Customize grid icon" available in the header
        And I customize grid by adding "business_units_val" column to the grid
        When I check standard column "Business Unit" displayed "true"  
        Then I check Business Units value has a link

    @Aurora_664
    Scenario: TC007: Verify Clicking on Business Units value link, show a popover with all more Business Units added
        And I navigate to "Repository Contract" page view
        And I see a grid view for Contracts displayed
        And I "Search" for "Contract Number" as "10688" on grid
        And I click on "Customize grid icon" available in the header
        And I customize grid by adding "business_units_val" column to the grid
        When I check standard column "Business Unit" displayed "true"  
        Then I check Business Units value has a link
        When I click on Business Units value link
        Then I see a popover with all Business Units listed

# ******************************* Aurora-664 Ends ****************************************    


    #*********************************** User Story AURORA-668:- STARTS ***********************************************************

    # /**
    #  *
    #  *
    #  * @author Datta
    #  *
    #  *
    #  */

    #Manual Scenarios:

Scenario: TC01: Verify inline single string search filter for Contract Number field
    Given I click on the "Contract Number" inline search box
    And I enter the "Contract Number" 
    And I click on enter button
    Then I see the grid populated with the searched "Contract Number"
    When I click on the cross icon in the inline search filter
    Then I see that the typed search text is removed

Scenario: TC02: Verify inline single string search filter for Contract Number field with invali input
    Given I click on the "Contract Number" inline search box
    And I enter invalid "Contract Number"
    And I click on enter button
    Then I see the following message in the grid "No results found"
    When I click on the cross icon in the inline search filter
    Then I see that the typed search text is removed

Scenario: TC03: Verify inline single string search filter for Contract Title field
    Given I click on the "Contract Title" inline search box
    And I enter the "Contract Title" 
    And I click on enter button
    Then I see the grid populated with the searched "Contract Title"
    When I click on the cross icon in the inline search filter
    Then I see that the typed search text is removed
    
Scenario: TC04: Verify inline single string search filter for Contract Title field
    Given I click on the "Contract Title" inline search box
    And I enter invalid "Contract Title" 
    And I click on enter button
    Then I see the following message in the grid "No results found"
    When I click on the cross icon in the inline search filter
    Then I see that the typed search text is removed

 Scenario: TC05: Verify inline single string search filter for Contract Owner field
    Given I click on the "Contract Owner" inline search box
    And I enter the "Contract Owner" 
    And I click on enter button
    Then I see the grid populated with the searched "Contract Owner"
    When I click on the cross icon in the inline search filter
    Then I see that the typed search text is removed

Scenario: TC06: Verify inline single string search filter for Contract Owner field
    Given I click on the "Contract Owner" inline search box
    And I enter invalid "Contract Owner" 
    And I click on enter button
    Then I see the following message in the grid "No results found"
    When I click on the cross icon in the inline search filter
    Then I see that the typed search text is removed

Scenario: TC07: Verify inline single string search filter for Requested by field
    Given I click on the "Requested by" inline search box
    And I enter the "Requested by" 
    And I click on enter button
    Then I see the grid populated with the searched "Requested by"
    When I click on the cross icon in the inline search filter
    Then I see that the typed search text is removed


Scenario: TC08: Verify inline single string search filter for Requested by field
    Given I click on the "Requested by" inline search box    
    And I enter invalid "Requested by" 
    And I click on enter button
    Then I see the following message in the grid "No results found"
    When I click on the cross icon in the inline search filter
    Then I see that the typed search text is removed

Scenario: TC09: Verify Search and select dropdown filter for Contract Source
    Given I click on the "Contract Source" drop down
    And I click on 3rd option from the drop down
    Then I see that the selected drop down is populated in the column filter
    And I see that the grid is populated with the details matching the selected drop down from the "Subtype"
    When I click on the cross icon in the column filter 
    Then I see that the selected drop down value is removed from the column filter
    And The selected filter is defaulted to "All" value
    And The grid is repopulated with new data

Scenario: TC010: Verify Search and select dropdown filter for Contract Type
    Given I click on the "Contract Type" drop down
    And I click on 3rd option from the drop down
    Then I see that the selected drop down is populated in the column filter
    And I see that the grid is populated with the details matching the selected drop down from the "Subtype"
    When I click on the cross icon in the column filter 
    Then I see that the selected drop down value is removed from the column filter
    And The selected filter is defaulted to "All" value
    And The grid is repopulated with new data

Scenario: TC011: Verify Search and select dropdown filter for Contract Sub Type
    Given I click on the "Contract Sub Type" drop down
    And I click on 3rd option from the drop down
    Then I see that the selected drop down is populated in the column filter
    And I see that the grid is populated with the details matching the selected drop down from the "Subtype"
    When I click on the cross icon in the column filter 
    Then I see that the selected drop down value is removed from the column filter
    And The selected filter is defaulted to "All" value
    And The grid is repopulated with new data

Scenario: TC012: Verify Search and select dropdown filter for Contract Category
    Given I click on the "Contract Category" drop down
    And I click on 3rd option from the drop down
    Then I see that the selected drop down is populated in the column filter
    And I see that the grid is populated with the details matching the selected drop down from the "Subtype"
    When I click on the cross icon in the column filter 
    Then I see that the selected drop down value is removed from the column filter
    And The selected filter is defaulted to "All" value
    And The grid is repopulated with new data   

Scenario: TC013: Verify Search and select dropdown filter for Contract Status
    Given I click on the "Contract Status / Currency / Hierarchy status" drop down
    And I click on 3rd option from the drop down
    Then I see that the selected drop down is populated in the column filter
    And I see that the grid is populated with the details matching the selected drop down from the "Subtype"
    When I click on the cross icon in the column filter 
    Then I see that the selected drop down value is removed from the column filter
    And The selected filter is defaulted to "All" value
    And The grid is repopulated with new data  

Scenario: TC014: Verify Search and select dropdown filter for Currency
    Given I click on the "Currency / Hierarchy status" drop down
    And I click on 3rd option from the drop down
    Then I see that the selected drop down is populated in the column filter
    And I see that the grid is populated with the details matching the selected drop down from the "Subtype"
    When I click on the cross icon in the column filter 
    Then I see that the selected drop down value is removed from the column filter
    And The selected filter is defaulted to "All" value
    And The grid is repopulated with new data 

Scenario: TC15: Verify Search and select dropdown filter for Hierarchy status
    Given I click on the "Hierarchy status" drop down
    And I click on 3rd option from the drop down
    Then I see that the selected drop down is populated in the column filter
    And I see that the grid is populated with the details matching the selected drop down from the "Subtype"
    When I click on the cross icon in the column filter 
    Then I see that the selected drop down value is removed from the column filter
    And The selected filter is defaulted to "All" value
    And The grid is repopulated with new data 

Scenario: TC16: Verify inline single string search filter searching for Contracting party ATLs added for a contract
    Given I click on the "Contracting party" inline search box
    And I enter the "Contracting party" 
    And I click on enter button
    Then I see the grid populated with the searched "Contracting party "
    When I click on the cross icon in the inline search filter
    Then I see that the typed search text is removed
    And I enter invalid "Contracting party " 
    Then I see the following message in the grid "No results found"

Scenario: TC17: Verify inline single string search filter searching for Business Units ATLs added for a contract
    Given I click on the "Business Units" inline search box
    And I enter the "Business Units" 
    And I click on enter button
    Then I see the grid populated with the searched "Business Units"
    When I click on the cross icon in the inline search filter
    Then I see that the typed search text is removed
    And I enter invalid "Business Units" 
    Then I see the following message in the grid "Business Units"

Scenario: TC18: Verify Date range - manual entry & range picker for Created On field
    Given I click on the "Created On" inline search box
    And I enter the "Created On" 
    And I enter the start date and end date
    And I click on enter button
    Then I see the grid populated with the entered "Created On"
    When I click on the cross icon in the inline search filter
    Then I see that the entered date is removed

Scenario: TC19: Verify Date range - manual entry & range picker for Expiry Date field
    Given I click on the "Expiry Date" inline search box
    And I enter the "Expiry Date" 
    And I enter the start date and end date
    And I click on enter button
    Then I see the grid populated with the entered "Expiry Date"
    When I click on the cross icon in the inline search filter
    Then I see that the entered date is removed

Scenario: TC20: Verify Date range - manual entry & range picker for Effective start date
    Given I click on the "Effective start date" inline search box
    And I enter the "Effective start date" 
    And I enter the start date and end date
    And I click on enter button
    Then I see the grid populated with the entered "Effective start date"
    When I click on the cross icon in the inline search filter
    Then I see that the entered date is removed

Scenario: TC21: Verify Value range - manual entry for Value field
    Given I click on the "value" inline search box
    And I enter the start and end range value
    And I click on enter button
    Then I see the grid populated with the entered "value"
    When I click on the cross icon in the inline search filter
    Then I see that the entered value range is removed

Scenario: TC022 Verify if multiple filters are applied then filter icon shows the no. of column filters applied
    Given I apply filter to 4 columns
    Then I see that the filter icon displays the no. of column filters applied
    And I click on the cross icon
    Then I see that all the applied filters are now removed

#************************ User Story AURORA-668:- ENDS *******************************

#*********************************************************************** User Story AURORA-669:- STARTS ***********************************************************

    # /**
    #  *
    #  *
    #  * @author Datta
    #  *
    #  *
    #  */

#   Automation  Scenarios

    Scenario: 01:Verify if all the columns are available for sorting except Action 
    Given I click on the "Contract No." column
    Then I see that the "Contract No." column is sorted in ascending / descending order
    Given I click on the "Title" column
    Then I see that the "Title" column is sorted in ascending / descending order
    Given I click on the "Type" column
    Then I see that the "Type" column is sorted in ascending / descending order
    Given I click on the "Subtype" column
    Then I see that the "Subtype" column is sorted in ascending / descending order
    Given I click on the "Expiry date" column
    Then I see that the "Expiry date" column is sorted in ascending / descending order
    Given I click on the "Currency" column
    Then I see that the "Currency" column is sorted in ascending / descending order
    Given I click on the "Value" column
    Then I see that the "Value" column is sorted in ascending / descending order
    Given I click on the "Status" column
    Then I see that the "Status" column is sorted in ascending / descending order
    Given I click on the "Action" column
    Then I see that the "Action" column is not sorted in ascending / descending order

    Scenario: 02.Verify if the grid is sorted in descending order on Created On column to show the latest created contracts on top
    And I verify the "Created On" column of the 1st row in the grid is leser than the "Created On" column of the 2nd row in the grid
    And I see that the grid is sorted in descending order on "Created On" column

#    Manual
    Scenario: 03.Verify if sort is applicable to only 1 column at a time
    Given I click on the "Contract No." column
    Then I see that the "Contract No." column is sorted in ascending / descending order
    And I click on the "Title" column
    Then I see that the "Title" column is sorted in ascending / descending order
    And I see that the "Contract No." column is no longer sorted in ascending / descending order

#   Manual
    Scenario: 04.Verify if sorting on CP column will sort on Primary CP only
    Given I click on the "Contracting Party" column
    Then I see that the "Contracting Party" column is sorted in ascending / descending order of the primary contract

#   Manual
    Scenario: 05.Verify if sorting on BU column will sort on first BU value only
    Given I click on the "Business Unit" column
    Then I see that the "Business Unit" column is sorted in ascending / descending order of the first BU value

#   Manual
    Scenario: 06.Verify if Text type value columns (if not sorted) are sorted alphabetically first in ascending order (A-Z) and then in descending order (Z-A)
    Given I click on "Title" column
    Then I see that the "Title" column is sorted in ascending order
    And I click on "Title" column
    Then I see that the "Title" column is sorted in descending order

#   Manual
    Scenario: 07.Verify if numeric value columns (if not sorted) are sorted first in ascending order and then in descending order
    Given I click on "Contract No." column
    Then I see that the "Contract No." column is sorted in ascending order
    And I click on "Contract No." column
    Then I see that the "Contract No." column is sorted in descending order

#   Manual
    Scenario: 08.Verify if date value columns (if not sorted) are sorted first in descending order (latest date) and then in ascending order (past dates).
    Given I click on the "Expiry date" column
    Then I see that the "Expiry date" column is sorted in descending order 
    And I click on the "Expiry date" column
    Then I see that the "Expiry date" column is sorted in ascending order

    #************************************** User Story AURORA-669:- ENDS ***********************************************************

#*****************************************User Story AURORA-672:- STARTS ***********************************************************

    # /**
    #  *
    #  *
    #  * @author Datta
    #  *
    #  *
    #  */

    # Automation Scenarios

    Scenario: TC01:Verify if the user has Customize grid icon on the grid header
        Then I check grid has the Customize grid icon

     Scenario: TC02:Verify Customize Grid pop over panel has all the column fields available for selection Except Actions
        When I click on the Customize grid icon
        Then I see a pop over panel with all the columns available for selection
        And I see Action field is not available to select

    Scenario: TC03:Verify Customize Grid pop over panel has Contract Number column fields disabled for selection
        When I click on the Customize grid icon
        Then I see a pop over panel with all the columns available for selection
        And I see "Contract Number" column disabled for selection
    
    Scenario: TC04:Verify Customize Grid pop over panel has Action column fields disabled for selection
        When I click on the Customize grid icon
        Then I see a pop over panel with all the columns available for selection
        And I see "Contract Number" column disabled for selection

    Scenario: TC05:Verify Export pop over panel has two options
        When I click on the Customize grid icon
        Then I see a pop over panel with all the columns available for selection
        And I see option "Cancel"
        And I see option "Save"

    Scenario: TC06:Verify Save button inside  pop over panel is Disabled by default
        When I click on the Customize grid icon
        Then I see a pop over panel with all the columns available for selection
        And I see Save icon is disabled

    Scenario: TC07:Verify if the user is able to save column selection
        When I click on the Customize grid icon
        Then I see a pop over panel with all the columns available for selection
        And I see that by default the columns selected on grid are preselected on Customize grid panel 
        And I see that the columns not selected on the grid are available for selection on the Customize grid panel
        And select any unselected column from Customize grid pannel
        When I click on the Save button
        Then I see selected column is added to the grid 

    Scenario: TC08:Verify if the user is able to cancel Customizing grid 
        When I click on the export icon
        Then I see a pop over panel with all the columns available for selection
        And I click on the cancel button
        Then I see that the pop over panel gets closed

    Scenario: TC09:Verify reset column selection link is available inside Customize grid panel 
        When I click on the export icon
        Then I see a pop over panel with all the columns available for selection
        And I see reset link inside Customize grid panel

#************************************* User Story AURORA-672:- ENDS ********************


#***************************** User Story AURORA-673:- STARTS ****************************************

    # /**
    #  *
    #  *
    #  * @author Nikhil/Datta
    #  *
    #  *
    #  */

    #Manual Scenarios

    Scenario: TC01:Verify if the grid is auto saved when user performs column search
    When I apply column search
    And I wait for 5 secs
    Then I see that the grid is auto saved

    Scenario: TC02:Verify if the grid is auto saved when user performs column filter
    When I apply column filter
    And I wait for 5 secs
    Then I see that the grid is auto saved

    
    Scenario: TC03:Verify if the grid is auto saved when user performs column sort
    When I apply column sort
    And I wait for 5 secs
    Then I see that the grid is auto saved

    Scenario: TC04:Verify if the grid is auto saved when user performs column resize
    When I apply column resize
    And I wait for 5 secs
    Then I see that the grid is auto saved

    Scenario: TC05:Verify if the grid is auto saved when user performs column reordering
    When reorder the columns
    And I wait for 5 secs
    Then I see that the grid is auto saved

    Scenario: TC06:Verify if the grid is auto saved when user performs Clear filter
    When I apply column filter
    And I wait for 5 secs
    And click on lear filter icon
    And I wait for 5 secs
    Then I see that the grid is auto saved

    Scenario: TC07:Verify if the grid is auto saved when user performs column reset
    When I click on Customize grid icon
    And I click on Reset link
    And I wait for 5 secs
    Then I see that the grid is auto saved

    Scenario: TC08:Verify if the grid is auto saved when user performs below actions
    Given I click on the side navigation 
    And I wait for 5 secs
    Then I see that the grid is auto saved
    When I refresh the browser
    And I wait for 5 secs
    Then I see that the grid is auto saved
    When I close the tab 
    And I wait for 5 secs
    Then I see that the grid is auto saved
    When I close the window
    And I wait for 5 secs
    Then I see that the grid is auto saved
    When I close my system
    And I wait for 5 secs
    Then I see that the grid is auto saved
    When I click on any action menu item
    And I wait for 5 secs
    Then I see that the grid is auto saved
    When I click on search icon
    And I wait for 5 secs
    Then I see that the grid is auto saved
    When I click on notification icon
    And I wait for 5 secs
    Then I see that the grid is auto saved
    When I click on user icon
    And I wait for 5 secs
    Then I see that the grid is auto saved
    When I click on upload contract
    And I wait for 5 secs
    Then I see that the grid is auto saved
    When I click on customize grid icon
    And I wait for 5 secs
    Then I see that the grid is auto saved
    When I click on expand icon
    And I wait for 5 secs
    Then I see that the grid is auto saved
    # When I click on pagination
    # And I wait for 5 secs
    # Then I see that the grid is auto saved
    When I click on amendment list action menu
    And I wait for 5 secs
    Then I see that the grid is auto saved
    When I navigate to any contract
    And I wait for 5 secs
    Then I see that the grid is auto saved



    #*********************************************************************** User Story AURORA-673:- ENDS ***********************************************************

#*********************************************************************** User Story AURORA-674:- STARTS ***********************************************************

    # /**
    #  *
    #  *
    #  * @author Nikhil/Datta
    #  *
    #  *
    #  */

    #Manual Scenarios

    Scenario: TC01:Verify if the user has export grid icon on the grid header
        Then I check grid has the export icon

     Scenario: TC02:Verify export pop over panel has all the columns available for selection Except Actions
        When I click on the export icon
        Then I see a pop over panel with all the columns available for selection except Actions

    Scenario: TC03:Verify excel / csv format option available for export
        When I click on the export icon
        Then I see a pop over panel with all the columns available for selection
        And I see radio button with option "Excel"
        And I see radio button with option "Csv"

    Scenario: TC04:Verify Export pop over panel has two options
        When I click on the export icon
        Then I see a pop over panel with all the columns available for selection
        And I see option "Cancel"
        And I see option "Export"

    Scenario: TC05:Verify Export button inside  pop over panel is enabled by default
        When I click on the export icon
        Then I see a pop over panel with all the columns available for selection
        And I see Export icon is enabled

    Scenario: TC06:Verify if the user is able to export the grid data
        When I click on the export icon
        Then I see a pop over panel with all the columns available for selection
        And I see that by default the columns selected on grid are preselected on export panel 
        And I see that the columns not selected on the grid are available for selection on the export panel
        And I see that the export button is enabled by default
        When I click on the export buttons
        Then I see a file downloaded in either excel / csv format

    Scenario: TC07:Verify if the user is able to close export grid data panel
        When I click on the export icon
        Then I see a pop over panel with all the columns available for selection
        And I click on the cancel button
        Then I see that the pop over panel gets closed

    Scenario: TC08:Verify Export button inside  pop over panel is disabled when none of the field is selected for export
        When I click on the export icon
        Then I see a pop over panel with all the columns available for selection
        When I Uncheck all the field selections
        And I see Export icon is disabled

    Scenario: TC09:Verify delimeter opton dropdown is available when csv format option selected for export
        When I click on the export icon
        Then I see a pop over panel with all the columns available for selection
        And I select radio button with option "Csv"
        And I see Delimiter dropdown
        And I click on Dropdown
        And I see option for delimiter as "Tab"
        And I see option for delimiter as "Comma"
        And I see option for delimiter as "Semicolon"
        And I see option for delimiter as "Custom"

#************************************* User Story AURORA-674:- ENDS ********************


#*********************** User Story AURORA-998:- STARTS **********************************

    # /**
    #  *
    #  *
    #  * @author Nikhil
    #  *
    #  *
    #  */

    #Manual Scenarios


    Scenario: Verify if the user is able to clone a contract in repository
    Given I search for a contract
    When I click on the Actions drop down
    And I select the "clone in repository"
    Then I see a full screen loader and on opening the new contracts profile
    Then I see a confirmmation dialog box with title -"Clone Contract (Repository)" 
    And I see a message - "Are you sure you want to create a copy of the selected contract in Repository?" 
    And I see 2 options "Clone" and "Cancel"
    And I click on "Clone"
    Then I see a full screen loader and the contract's detail tab
    And I see a success toaster with title "Contract clone created" and message "Contract clone created in Repository".
    And If the clone fails
    Then I see the grid view with a failure toaster with title "Contract clone failed" and message "Request to create the contract clone failed. Please try again."

    Scenario: Verify the details of the cloned contract
    Given I am on the cloned contract view
    And I see the Contract number has a non-editable placeholder label as CLM "AUTO GENERATED ON FIRST SAVE".
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
    Then I check repository draft status is shown
    And I check contract number is generated in the header
    And I check bookmark icon is shown in the header
        
#******************************** AURORA-998:- ENDS **************************************




# ******************************* Aurora-667 Start **************************************
#  /**
#  * User Story AURORA-667
#  * The feature file to Verify all the scenarios related to - Grid View | Show amendments of the contract with actions
#  *
#  * @author Datta Ankalkar
#  *
#  */
     
# Manual Scenarios: 

    # Scenario: TC001.Verify User is able to see All created amendments (authored) on the grid for the corresponding contract in a nested grid view format
    #     When I navigate to "Repository Contract" page view
    #     Then I Verify User is able to see All created amendments (authored) on the grid for the corresponding contract in a nested grid view format
    
    # Scenario: TC002.Verify User is able to see All requested amendments on the grid for the corresponding contract in a nested grid view format
    #     When I navigate to "Repository Contract" page view
    #     Then I Verify User is able to see All requested amendments on the grid for the corresponding contract in a nested grid view format

      # Scenario: TC003.Verify User is able to see All uploaded amendments on the grid for the corresponding contract in a nested grid view format
    #     When I navigate to "Repository Contract" page view
    #     Then I Verify User is able to see All uploaded amendments on the grid for the corresponding contract in a nested grid view format


# Automation Scenarios: 

    Scenario: TC005.Verify An icon should be added pointing before the contract number indicating that there are amendments to the contracts
        When I navigate to "Repository Contract" page view
        Then I check icon added before the contract number indicating amendments attached

#   sceanrios have been removed as the functionality removed

    Scenario: TC008.Verify On click of the icon, the contract row should expand/collapse to show another grid (child grid) showing the list of all amendments for the contracts
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        Then I see child grid showing the list of all amendments

    Scenario: TC009.Verify expanded child grid for Amendments should include 'Amendment Number' as a column
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        Then I see coulumn "Amendment Number"

    Scenario: TC010.Verify expanded child grid for Amendments should include 'Requested By' as a column
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        Then I see coulumn "Requested By"
    

    Scenario: TC011.Verify expanded child grid for Amendments should include 'Request Number' as a column
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        Then I see coulumn "Request Number"
    

    Scenario: TC012.Verify expanded child grid for Amendments should include 'Created By' as a column
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        Then I see coulumn "Created By"
   

    Scenario: TC013.Verify expanded child grid for Amendments should include 'Created On' as a column
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        Then I see coulumn "Created On"

    Scenario: TC014.Verify expanded child grid for Amendments should include 'Status' as a column
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        Then I see coulumn "Status"

    Scenario: TC015.Verify expanded child grid for Amendments should include 'Stage' as a column
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        Then I see coulumn "Stage"

    Scenario: TC016:Verify if the value is not available for Amandment Number, should show 'Hyphen' for uploaded contracts 
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        And I see coulumn "Amandment Numbe"
        Then I see empty value indication as "-" for coulumn "Amandment Number"

    Scenario: TC017:Verify if the value is not available for Requested By, should show 'NA' for uploaded contracts
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        And I see coulumn "Requested By"
        Then I see empty value indication as "NA" for coulumn "Requested By"
    

    Scenario: TC018:Verify if the value is not available for Request Number, should show 'NA' for uploaded contracts
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        And I see coulumn "Request Number"
        Then I see empty value indication as "NA" for coulumn "Request Number"

    Scenario: TC019:Verify if the value is not available for Created By, should show 'Hyphen' for uploaded contracts
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        And I see coulumn "Created By"
        Then I see empty value indication as "-" for coulumn "Created By"
    

    Scenario: TC020:Verify if the value is not available for Created On, should show '-//---'' for uploaded contracts
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        And I see coulumn "Created On"
        Then I see empty value indication as "--/--/----" for coulumn "Created On"


    Scenario: TC021:Verify the value for Status, should show 'Added to Repository' for uploaded contracts
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        And I see coulumn "Status"
        Then I see value  "Added to Repository" for coulumn "Status"


    Scenario: TC022:Verify the value for Stage, should show 'Repository' for uploaded contracts
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        And I see coulumn "Stage"
        Then I see value  "Repository" for coulumn "Stage"


    # Scenario: TC023:Verify the values for created amendments should be same as defined in CLM
    #     When I navigate to "Repository Contract" page view

# Functionality removed
    # Scenario: TC024:Verify sorting should be available for all the columns of the amendment grid too
    #     When I navigate to "Repository Contract" page view


    Scenario: TC025:Verify the superseding amendment should have a marker 'S' in green added to the top left corner of the row
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        Then I see "S" for superseded contract
    

    Scenario: TC026:Verify for uploaded Amendments action includes 'View' as an option for each amendment row 
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        And I see an action menu for each amendment row
        When I click on Action menu link
        Then I see option "View"

    

    Scenario: TC027:Verify for uploaded Amendments action includes 'Delete' as an option for each amendment row
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        And I see an action menu for each amendment row
        When I click on Action menu link
        Then I see option "Delete"
    
    
    Scenario: TC028:Verify for requested amendments action includes 'Create' as an option for each amendment row
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        And I see an action menu for each amendment row
        When I click on Action menu link
        Then I see option "Create"
    

    Scenario: TC029:Verify for requested amendments action includes 'View' as an option for each amendment row
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        And I see an action menu for each amendment row
        When I click on Action menu link
        Then I see option "View"
    

    Scenario: TC030:Verify for requested amendments action includes 'Delete' as an option for each amendment row
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        And I see an action menu for each amendment row
        When I click on Action menu link
        Then I see option "Delete"
    

    Scenario: TC031.Verify On click the arrow link icon should collapse the child grid
        When I navigate to "Repository Contract" page view
        And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        And I click on Arrow link for uploaded contract
        And I dont see child grid showing the list of all amendments

# ******************************* Aurora-667 Ends **************************************





