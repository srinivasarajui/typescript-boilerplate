Feature: Scenario related to Contracting Party module


    Background: 
        Given I login to clm application
        And I select CLM product in product selection page
        And I click on manage contract tab
        And I click on repository sub tab
        And I lands on repository grid page
        # And I filter "select" contracts with "contract_status" as "Active"
        And I filter "input" contracts with "contract_number" as "VAPTLM11335"
        And I view first contract from the grid
        And I click on redirect to aurora button

# ******************************* Aurora-3343 & Aurora-4002 Start **************************************
#  /**
#  * User Story Aurora-3343
#  * The Scenario related to - Contract Party card enhancements - 1
#  *
#  * @author Datta Ankalkar
#  *
#  */

# Manual Scenarios:

    # Scenario: Verify CP card Alignment is as per UX
    #     When I land on aurora contract details page
    #     Then I check CP card Alignment is as per UX

    # Scenario: Verify that  On CP card, For LM, restricted party link and its status flag is available as a card element
    #     When I land on aurora contract details page
    #     Then I check For LM, restricted party link and its status flag is available as a card element
    
    # Scenario: Verify that On the CP card, CPP selection should come first and then address selection
    #     When I land on aurora contract details page
    #     Then I check On the CP card, CPP selection should come first and then address selection

    # Scenario: Verify that On expanding LHS, both CPP and address dropdowns will be shifted side by side.
    #     When I land on aurora contract details page
    #     And I expand the LHS view
    #     Then I see CPP and address dropdowns shifted side by side

# Automation Scenarios

 
    Scenario: Verify that Primary flag indication is available for primary CP as a card element
        When I land on aurora contract details page
        # And I remove added CPs to the contract
        And I add CP "Automation1" to the contract
        Then I check Primary flag indication is available for primary CP as a card element


    Scenario: Verify On CP card, Company name followed by its type is available as a card element
        When I land on aurora contract details page
        And I add CP "Automation1" to the contract
        Then I check Company name followed by its type is available as a card element
   
    
    Scenario: Verify that On CP card, A dropdonw to select CPP is available as a card element
        When I land on aurora contract details page
        And I add CP "Automation1" to the contract
        Then I check a drop down to select CPP is available


    Scenario: Verify that On CP card, A dropdonw to select address is available as a card element
        When I land on aurora contract details page
        And I add CP "Automation1" to the contract
        Then I check a drop down to select address is available


    Scenario: Verify that On CP card, Action menu is available as a card element
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation1" to the contract
        Then I check action menu is available as a card element

@Aurora_3343 
    Scenario: Verify that action menu has option "View"
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation1" to the contract
        And I click on Action menu from card
        Then I see a popup with option "View"

#
    Scenario: Verify that action menu has option "Edit"
        When I land on aurora contract details page
        And I add CP "Automation1" to the contract
        And I click on Action menu from card
        Then I see a popup with option "Edit"

#		
    Scenario: Verify that action menu has option "Remove"
        When I land on aurora contract details page
        And I add CP "Automation1" to the contract
        And I click on Action menu from card
        Then I see a popup with option "Remove"

#        
    Scenario: Verify that action menu has option "Primary Mark"
        When I land on aurora contract details page
        And I add CP "Automation1" to the contract
        And I click on Action menu from card
        Then I see a popup with option "Mark as Primary"

#		
    Scenario: Verify that if any CP marked as Primary CP it will displayed on top
        When I land on aurora contract details page
        And I add CP "Automation1" to the contract
        And I add CP "Automation2" to the contract
        And I check multiple CPs are added to the contract
        Then I check Primary CP card displayed on top

#		
    Scenario: Verify that CP search box on seaach if no data is found, message should be as per UX
        When I land on aurora contract details page
        And I enter text inside CP search box as "000000000"
        Then I check no data is found is shown as search result

#
    Scenario: Verify that Clear option is available on search box
        When I land on aurora contract details page
        And I enter text inside CP search box as "000000000"
        Then I check Clear option is available inside the search box 


# ******************************* Aurora-3343 Ends ***************************************

# ******************************* Aurora-4002 Start **************************************
#  /**
#  * User Story Aurora-4002
#  * The Scenario related to - Contract Party card enhancements - 2
#  *
#  * @author Datta Ankalkar
#  *
#  */

# Manual Scenarios:

    # Scenario: Verify that CP search box has Type ahead search on company name
    #     When I land on aurora contract details page
    #     Then I check CP search box has Type ahead search on typing company name

    # Scenario: Verify that CP search box has Initial focus to load all data w.r.t selected CP type
    #     When I land on aurora contract details page
    #     Then I check CP search box has Initial focus to load all data w.r.t selected CP type

    # Scenario: Verify that CP search box has dropdown with lazy loading when scrolled down
    #     When I land on aurora contract details page
    #     And I enter text inside CP search box as "abc"
    #     Then I check CP search box has dropdown with lazy loading when scrolled down

    # Scenario: Verify that CP search box has dropdown where Selected data will be highlighted as per UX
    #     When I land on aurora contract details page
    #     And I enter text inside CP search box as "abc"
    #     Then I check Selected data will be highlighted as per UX

    # Scenario: Verify that CP type list should be as per UX
    #     When I land on aurora contract details page
    #     And I click on Select Type drop down
    #     Then I check CP type list should be as per UX
	
# Automation Scenarios:
	

    Scenario: Verify that If a CP is added which has only 1 CPP, select the respective value by default on the CP card
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation1" to the contract
        Then I see CP Person dropdown is disabled
        And I see respective CPP value by default on the CP card is shown


    Scenario: Verify that If a CP is added which has only 1 address, select the respective value by default on the CP card
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation1" to the contract
        Then I see CP Address dropdown is disabled
        And I see respective Address value by default on the CP card is shown
               
   
    Scenario: Verify that If a CP is added which has multiple CPPs, The CPP selection dropdown is empty with placeholder "Select Contact person"
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation2" to the contract
        Then I see CP Person dropdown is enabled
        And I check "CC Person" drop down has place holder value "Select Contact person"


    Scenario: Verify that If a CP is added which has multiple addresses, The CPP selection dropdown is empty with placeholder "Select Address"
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation2" to the contract
        Then I see CP Address dropdown is enabled
        And I check "CP Address" drop down has place holder value "Select Address"


    Scenario: Verify that CPP dropdown will have a note to indicate more values can be added on editing the CP record
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation2" to the contract
        And I click on CP Person dropdown from the CP card
        Then I see a note "To add a new contact person, please edit the CP." for "CPP"


    Scenario: Verify that address dropdown will have a note to indicate more values can be added on editing the CP record
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation2" to the contract
        And I click on CP Address dropdown from the CP card
        Then I see a note "To add a new contact address, please edit the CP." for "Address"


    Scenario: Verify that Deactivated CP will be shown with status indication on UI
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation4" to the contract
        Then I see status label Inactive for deactivated CP on CP card


    Scenario: Verify that  Person dropdown is enabled for a deactivated CP.
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation4" to the contract
        Then I see CP Person dropdown is enabled


    Scenario: Verify that CP Address dropdown is enabled for a deactivated CP.
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation4" to the contract
        Then I see CP Address dropdown is enabled


    Scenario: Verify that clicking on Edit option under action menu popup for a deactivated CP, shows a warning popup.
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation4" to the contract
        And I click on Action menu from inactive CP card
        Then I see a popup with option "Edit"
        When I click on "Edit" action option
        Then I see a warning popup is displayed


    Scenario: Verify that Warning popup has header title "Contracting Party Deactivated"
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation4" to the contract
        And I click on Action menu from inactive CP card
        Then I see a popup with option "Edit"
        When I click on "Edit" action option
        Then I see a warning popup is displayed
        And I check popup title should be "Contracting Party Deactivated"


    Scenario: Verify that Warning popup has message "Contracting party details cannot be updated as it is deactivated by the admin."
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation4" to the contract
        And I click on Action menu from inactive CP card
        Then I see a popup with option "Edit"
        When I click on "Edit" action option
        Then I see a warning popup is displayed
        Then I see a warning popup is displayed
        And I check popup message should be "Contracting party details cannot be updated as it is deactivated by the admin."


    Scenario: Verify that Warning popup has a button with label "OK"
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation4" to the contract
        And I click on Action menu from inactive CP card
        Then I see a popup with option "Edit"
        When I click on "Edit" action option
        Then I see a warning popup is displayed
        Then I see a warning popup is displayed
        And I check popup has button with label "Ok"


    Scenario: Verify that clicking on CPP drop down for a deactivated CP, shows a warning popup.
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation4" to the contract
        And I click on CP Person dropdown from the CP card
        Then I see a warning popup is displayed


    Scenario: Verify that Warning popup has header title "Contracting Party Deactivated"
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation4" to the contract
        And I click on CP Person dropdown from the CP card
        Then I see a warning popup is displayed
        And I check popup title should be "Contracting Party Deactivated"


    Scenario: Verify that Warning popup has message "Contracting party details cannot be updated as it is deactivated by the admin."
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation4" to the contract
        And I click on CP Person dropdown from the CP card
        Then I see a warning popup is displayed
        And I check popup message should be "Contracting party details cannot be updated as it is deactivated by the admin."


    Scenario: Verify that Warning popup has a button with label "OK"
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation4" to the contract
        And I click on CP Person dropdown from the CP card
        Then I see a warning popup is displayed
        And I check popup has button with label "Ok"


    Scenario: Verify that clicking on Address drop down for a deactivated CP, shows a warning popup.
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation4" to the contract
        And I click on CP Address dropdown from the CP card
        Then I see a warning popup is displayed


    Scenario: Verify that Warning popup has header title "Contracting Party Deactivated"
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation4" to the contract
        And I click on CP Address dropdown from the CP card
        Then I see a warning popup is displayed
        And I check popup title should be "Contracting Party Deactivated"


    Scenario: Verify that Warning popup has message "Contracting party details cannot be updated as it is deactivated by the admin."
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation4" to the contract
        And I click on CP Address dropdown from the CP card
        Then I see a warning popup is displayed
        And I check popup message should be "Contracting party details cannot be updated as it is deactivated by the admin."


    Scenario: Verify that Warning popup has a button with label "OK"
        When I land on aurora contract details page
        And I remove added CPs to the contract
        And I add CP "Automation4" to the contract
        And I click on CP Address dropdown from the CP card
        Then I see a warning popup is displayed
        And I check popup has button with label "Ok"

# ******************************* Aurora-4002 Ends ***************************************