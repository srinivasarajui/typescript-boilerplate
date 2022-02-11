Feature: Contract Hierarchy:-Linked Agreements

    Background: Login to CLM application and land on repository grid page
        Given I login to clm application
        When I select CLM product in product selection page
        And I click on manage contract tab
        And I click on repository sub tab
        And I check user lands on repository grid page

# ***************************** Aurora-931 link master agreement ******************************************************
# /**
#  * The feature file is used to automate the link master agreement hierarchy features
#  *
#  * @author Datta Ankalkar
#  */
    @AURORA_931
    Scenario: TC01: Verify that user is not allowed to link master agreement contract for repository draft status sub agreement contract
        When I filter "select" contracts with "contract_status" as "Repository Draft"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check linked agreements menu is disabled
    
    @AURORA_931
    Scenario: TC02: Verify that user is not allowed to link master agreement contract for pending publish status sub agreement contract
        When I filter "select" contracts with "contract_status" as "Pending Publish"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check linked agreements menu is disabled
    
    @AURORA_931
    Scenario: TC03: Verify that link master agreement button is present inside linked contracts menu for termination notice served status sub agreement contract
        When I filter "select" contracts with "contract_status" as "Termination Notice Served"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        Then I see the Link Master Agreement option in the left panel
        And I check link master agreement button is enabled
    
    @AURORA_931
    Scenario: TC04: Verify that link master agreement button is present inside linked contracts menu for active status contract sub agreement contract
        When I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        Then I see the Link Master Agreement option in the left panel
        And I check link master agreement button is enabled
    
    @AURORA_931
    Scenario: TC05: Verify that link master agreement button is present inside linked contracts menu for expired contract sub agreement contract
        When I filter "select" contracts with "contract_status" as "Expired"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        Then I see the Link Master Agreement option in the left panel
        And I check link master agreement button is enabled
    
    @AURORA_931
    Scenario: TC06: Verify that link master agreement button is present inside linked contracts menu for inactive status contract sub agreement contract
        When I filter "select" contracts with "contract_status" as "Inactive"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        Then I see the Link Master Agreement option in the left panel
        And I check link master agreement button is enabled
    
    @AURORA_931
    Scenario: TC07: Verify that link master agreement button is not present inside linked contracts menu for archived status contract sub agreement contract
        When I filter "select" contracts with "contract_status" as "Archived"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        Then I check Link Master Agreement button is disabled
    
    @AURORA_931
    Scenario: TC08: Verify that link master agreement popup is shown to user for any existing contracts which are published and not archieved
        And I filter "select" contracts with "contract_status" as "Termination Notice Served"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Master Agreement option in the left panel
        When I click on the Link Master Agreement button
        Then I see a grid view for linking Master Agreement displayed

    @AURORA_931
    Scenario: TC9: Verify that user is allowed to link master agreement to sub agreement contract by selecting contract from the contract in the link master agreement popup
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Master Agreement option in the left panel
        When I click on the Link Master Agreement button
        And I select a contract for linking
        And I click on link button in the grid
        Then I see master contract has been added to sub contract
    
    @AURORA_931
    Scenario: TC10: Verify that user is allowed to link sub agreement to master agreement contract by selecting contract from the contracts list in the link sub agreements popup
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Sub Agreements option in the left panel
        When I click on the Link Sub Agreements button
        And I see a grid view for linking Sub Agreement displayed
        And I select "1" Agreements
        And I click on link button in the grid
        Then I see the "1" files added as Sub Agreements
    
    @AURORA_931
    Scenario: TC11: Verify that user is allowed to link multiple sub agreements to master agreement contract by selecting contract from the contracts list grid in the link sub agreement popup
        And I filter "select" contracts with "contract_status" as "Expired"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Sub Agreements option in the left panel
        When I click on the Link Sub Agreements button
        And I see a grid view for linking Sub Agreement displayed
        And I select "2" Agreements
        And I click on link button in the grid
        Then I see the "2" files added as Sub Agreements
    
    @AURORA_931
    Scenario: TC12: Verify that by default page count filter is selected as 10 rows in the grid for contracts in the popup
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Master Agreement option in the left panel
        When I click on the Link Master Agreement button
        Then I check by default 10 rows are selected in the page count filter

    @AURORA_931
    Scenario: TC13: Verify that user is allowed to see more record in the grid by filtering based on random no of rows for  contracts in the popup
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Master Agreement option in the left panel
        When I click on the Link Master Agreement button
        And I check number of records displayed in the grid list
        Then I select no of rows as "25" page count filter
        And I check number of records displayed in the grid list
    
    @AURORA_931
    Scenario: TC14: Verify that user is allowed to see last page records by clicking on last page icon for contracts in the popup
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Master Agreement option in the left panel
        Then I click on the Link Master Agreement button
        When I click on Last Page navigation Icon
        Then I check user is able to see last page records
    
    @AURORA_931
    Scenario: TC15: Verify that user is allowed to see first page records by clicking on first page icon when user is on last page for contracts in the popup
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Master Agreement option in the left panel
        When I click on the Link Master Agreement button
        When I click on Last Page navigation Icon
        And I click on First Page navigation Icon
        Then I check user is able to see first page records
    
    @AURORA_931
    Scenario: TC16: Verify that user is allowed to see next page records by clicking on next page icon for contracts in the popup
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Master Agreement option in the left panel
        When I click on the Link Master Agreement button
        And I click on next page icon in the popup
        Then I check user is able to see next page records
    @AURORA_931
    Scenario: TC17: Verify that user is allowed to see previous page records by clicking on previous page icon when user is on second page for recommended contracts in the popup
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Master Agreement option in the left panel
        When I click on the Link Master Agreement button
        And I click on next page icon in the popup
        And I click on previous page icon in the popup
        Then I check user is able to see previous page records

    @AURORA_931
    Scenario: TC18: Verify that page count changes at the bottom of the grid when user switches to next page for contracts in the popup
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page 
        And I click on linked agreements menu
        And I see the Link Master Agreement option in the left panel
        When I click on the Link Master Agreement button
        And I click on next page icon in the popup
        Then I check page number range is changed at the bottom of the grid
# Manual
    # Scenario: TC19: Verify that same records are not shown when user switches to next page for contracts in the popup
    #     And I filter "select" contracts with "contract_status" as "Active"
    #     And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
    #     And I view first contract from the grid
    #     And I click on redirect to aurora button
    #     And I land on aurora contract details page
    #     And I click on linked agreements menu
    #     And I see the Link Master Agreement option in the left panel
    #     When I click on the Link Master Agreement button
    #     # And I click on next page icon in the popup
    #     # Then I check same records are not shown in the next page

    # NYI
    # Scenario: TC20: Verify that user is allowed to sort contract number based on ascending order for contracts in the popup
    #     And I filter "select" contracts with "contract_status" as "Active"
    #     And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
    #     And I view first contract from the grid
    #     And I click on redirect to aurora button
    #     And I land on aurora contract details page
    #     And I click on linked agreements menu
    #     And I see the Link Master Agreement option in the left panel
    #     When I click on the Link Master Agreement button
    #     And I see list of contracts displayed in the grid view
    #     And I sort contract number based on ascending order
    #     Then I check all the contract numbers are sorted in ascending order
    # NYI
    # Scenario: TC21: Verify that user is allowed to sort contract number based on descending order for contracts in the popup
    #     And I filter "select" contracts with "contract_status" as "Active"
    #     And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
    #     And I view first contract from the grid
    #     And I click on redirect to aurora button
    #     And I land on aurora contract details page
    #     And I click on linked agreements menu
    #     And I see the Link Master Agreement option in the left panel
    #     When I click on the Link Master Agreement button
    #     And I sort contract number based on descending order
    #     Then I check all the contract numbers are sorted in descending order
    # NYI
    # Scenario: TC22: Verify that user is allowed to sort contract title based on ascending order for contracts in the popup
    #     And I filter "select" contracts with "contract_status" as "Active"
    #     And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
    #     And I view first contract from the grid
    #     And I click on redirect to aurora button
    #     And I land on aurora contract details page
    #     And I click on linked agreements menu
    #     And I see the Link Master Agreement option in the left panel
    #     When I click on the Link Master Agreement button
    #     And I sort contract title based on ascending order
    #     Then I check all the contract title are sorted in ascending order
    # NYI
    # Scenario: TC23: Verify that user is allowed to sort contract title based on descending order for contracts in the popup
    #     And I filter "select" contracts with "contract_status" as "Active"
    #     And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
    #     And I view first contract from the grid
    #     And I click on redirect to aurora button
    #     And I land on aurora contract details page
    #     And I click on linked agreements menu
    #     And I see the Link Master Agreement option in the left panel
    #     When I click on the Link Master Agreement button
    #     And I sort contract title based on descending order
    #     Then I check all the contract title are sorted in descending order
    # NYI
    # Scenario: TC24: Verify that user is allowed to sort contract Category based on ascending order for contracts in the popup
    #     And I filter "select" contracts with "contract_status" as "Active"
    #     And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
    #     And I view first contract from the grid
    #     And I click on redirect to aurora button
    #     And I land on aurora contract details page
    #     And I click on linked agreements menu
    #     And I see the Link Master Agreement option in the left panel
    #     When I click on the Link Master Agreement button
    #     And I sort contract category based on ascending order
    #     Then I check all the contract category are sorted in ascending order
    # NYI
    # Scenario: TC25: Verify that user is allowed to sort contract Category based on descending order for contracts in the popup
    #     And I filter "select" contracts with "contract_status" as "Active"
    #     And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
    #     And I view first contract from the grid
    #     And I click on redirect to aurora button
    #     And I land on aurora contract details page
    #     And I click on linked agreements menu
    #     And I see the Link Master Agreement option in the left panel
    #     When I click on the Link Master Agreement button
    #     And I sort contract category based on descending order
    #     Then I check all the contract category are sorted in descending order
    # NYI
    # Scenario: TC26: Verify that user is allowed to sort contract type based on ascending order for contracts in the popup
    #     And I filter "select" contracts with "contract_status" as "Active"
    #     And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
    #     And I view first contract from the grid
    #     And I click on redirect to aurora button
    #     And I land on aurora contract details page
    #     And I click on linked agreements menu
    #     And I see the Link Master Agreement option in the left panel
    #     When I click on the Link Master Agreement button
    #     And I sort contract type based on ascending order
    #     Then I check all the contract type are sorted in ascending order
    # NYI
    # Scenario: TC27: Verify that user is allowed to sort contract type based on descending order for contracts in the popup
    #     And I filter "select" contracts with "contract_status" as "Active"
    #     And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
    #     And I view first contract from the grid
    #     And I click on redirect to aurora button
    #     And I land on aurora contract details page
    #     And I click on linked agreements menu
    #     And I see the Link Master Agreement option in the left panel
    #     When I click on the Link Master Agreement button
    #     And I sort contract type based on descending order
    #     Then I check all the contract type are sorted in descending order
    # NYI
    # Scenario: TC28: Verify that user is allowed to sort contract subtype based on ascending order for contracts in the popup
    #     And I filter "select" contracts with "contract_status" as "Active"
    #     And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
    #     And I view first contract from the grid
    #     And I click on redirect to aurora button
    #     And I land on aurora contract details page
    #     And I click on linked agreements menu
    #     And I see the Link Master Agreement option in the left panel
    #     When I click on the Link Master Agreement button
    #     And I sort contract subtype based on ascending order
    #     Then I check all the contract subtype are sorted in ascending order
    # NYI
    # Scenario: TC29: Verify that user is allowed to sort contract subtype based on descending order for contracts in the popup
    #     And I filter "select" contracts with "contract_status" as "Active"
    #     And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
    #     And I view first contract from the grid
    #     And I click on redirect to aurora button
    #     And I land on aurora contract details page
    #     And I click on linked agreements menu
    #     And I see the Link Master Agreement option in the left panel
    #     When I click on the Link Master Agreement button
    #     And I sort contract subtype based on descending order
    #     Then I check all the contract subtype are sorted in descending order
    # NYI
    # Scenario: TC30: Verify that user is allowed to sort contracting party based on ascending order for contracts in the popup
    #     And I filter "select" contracts with "contract_status" as "Active"
    #     And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
    #     And I view first contract from the grid
    #     And I click on redirect to aurora button
    #     And I land on aurora contract details page
    #     And I click on linked agreements menu
    #     And I see the Link Master Agreement option in the left panel
    #     When I click on the Link Master Agreement button
    #     And I sort contracting party based on ascending order
    #     Then I check all the contracting party are sorted in ascending order
    # NYI
    # Scenario: TC31: Verify that user is allowed to sort contracting party based on descending order for contracts in the popup
    #     And I filter "select" contracts with "contract_status" as "Active"
    #     And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
    #     And I view first contract from the grid
    #     And I click on redirect to aurora button
    #     And I land on aurora contract details page
    #     And I click on linked agreements menu
    #     And I see the Link Master Agreement option in the left panel
    #     When I click on the Link Master Agreement button
    #     And I sort contracting party based on descending order
    #     Then I check all the contracting party are sorted in descending order
    # NYI
    # Scenario: TC32: Verify that user is allowed to sort status based on ascending order for  contracts in the popup
    #     And I filter "select" contracts with "contract_status" as "Active"
    #     And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
    #     And I view first contract from the grid
    #     And I click on redirect to aurora button
    #     And I land on aurora contract details page
    #     And I click on linked agreements menu
    #     And I see the Link Master Agreement option in the left panel
    #     When I click on the Link Master Agreement button
    #     And I sort contract status based on ascending order
    #     Then I check all the contract status are sorted in ascending order
    # NYI
    # Scenario: TC33: Verify that user is allowed to sort status based on descending order for contracts in the popup
    #     And I filter "select" contracts with "contract_status" as "Active"
    #     And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
    #     And I view first contract from the grid
    #     And I click on redirect to aurora button
    #     And I land on aurora contract details page
    #     And I click on linked agreements menu
    #     And I see the Link Master Agreement option in the left panel
    #     When I click on the Link Master Agreement button
    #     And I sort contract status based on descending order
    #     Then I check all the contract status are sorted in descending order

# new scenarios:
    @AURORA_931
    Scenario: TC34: Ckeck Link button state by selecting and de-selecting contracts for linking
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Master Agreement option in the left panel
        And I click on the Link Master Agreement button
        When I select a contract for linking
        Then I check Link button is "enabled"
        And I unselect the selected contract for linking
        Then I check Link button is "disabled"


# ******************************** AURORA-928 link sub agreements *************************************************
# /**
#  * The feature file is used to automate the link sub agreements to master agreement
#  *
#  * @author Sowmyashree & Datta
#  */
    @Aurora_928
    Scenario: 1.Verify that user is not allowed to link sub agreement contract for repository draft status master agreement contract
        When I filter "select" contracts with "contract_status" as "Repository Draft"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check linked agreements menu is disabled
    
    @Aurora_928
    Scenario: 2.Verify that user is not allowed to link sub agreement contract for pending publish status master agreement contract
        When I filter "select" contracts with "contract_status" as "Pending Publish"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check linked agreements menu is disabled
    
    @Aurora_928
    Scenario: 3.Verify that link sub agreement button is present inside linked contracts menu for termination notice served status master agreement contract
        When I filter "select" contracts with "contract_status" as "Termination Notice Served"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        Then I see the Link Sub Agreements option in the left panel
        And I check Link Sub Agreements button is enabled

    @Aurora_928
    Scenario: 4.Verify that link sub agreement button is present inside linked contracts menu for active status contract master agreement contract
        When I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        Then I see the Link Sub Agreements option in the left panel
        And I check Link Sub Agreements button is enabled

    @Aurora_928
    Scenario: 5.Verify that link sub agreement button is present inside linked contracts menu for expired contract master agreement contract
        When I filter "select" contracts with "contract_status" as "Expired"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        Then I see the Link Sub Agreements option in the left panel
        And I check Link Sub Agreements button is enabled

    @Aurora_928
    Scenario: 6.Verify that link sub agreement button is present inside linked contracts menu for inactive status contract master agreement contract
        When I filter "select" contracts with "contract_status" as "Inactive"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        Then I see the Link Sub Agreements option in the left panel
        And I check Link Sub Agreements button is enabled

    @Aurora_928
    Scenario: 7.Verify that link sub agreement button is not present inside linked contracts menu for archived status contract master agreement contract
        When I filter "select" contracts with "contract_status" as "Archived"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        Then I check Link Sub Agreements button is disabled

    @Aurora_928
    Scenario: 8.Verify that link sub agreement popup is shown to user for any existing contracts which are published and not archieved
        And I filter "select" contracts with "contract_status" as "Termination Notice Served"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Sub Agreements option in the left panel
        When I click on the Link Sub Agreements button
        Then I see a grid view for linking Sub Agreement displayed

    @Aurora_928
    Scenario: 9.Verify that user is able to select and link a contract to master agreement contract
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Sub Agreements option in the left panel
        When I click on the Link Sub Agreements button
        And I see a grid view for linking Sub Agreement displayed
        And I select "1" Agreements
        And I click on link button in the grid
        Then I see the "1" files added as Sub Agreements
    
    @Aurora_928
    Scenario: 10.Verify that user is able to select and link multiple contracts to master agreement contracts
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Sub Agreements option in the left panel
        When I click on the Link Sub Agreements button
        Then I see a grid view for linking Sub Agreement displayed
        And I select "2" Agreements
        And I click on link button in the grid
        Then I see the "2" files added as Sub Agreements

    @Aurora_928
    Scenario: 11.Verify that user is able to search a contract with Contract Number
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Sub Agreements option in the left panel
        And I click on the Link Sub Agreements button
        And I see a grid view for linking Sub Agreement displayed
        When I search for "Contract Number" with "CLM56704" on Contract Hierarchy grid
        Then I see seach result for "Contract Number" with value "CLM56704" displayed on the grid

    @Aurora_928
    Scenario: 12.Verify that user is able to search a contract with Contract Title
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Sub Agreements option in the left panel
        When I click on the Link Sub Agreements button
        Then I see a grid view for linking Sub Agreement displayed
        And I search for "Contract Title" with "NFT_Contract14080559" on Contract Hierarchy grid
        Then I see seach result for "Contract Title" with value "NFT_Contract14080559" displayed on the grid
    
    @Aurora_928
    Scenario: 13.Verify that user is able to search a contract with Contracting Party
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Sub Agreements option in the left panel
        When I click on the Link Sub Agreements button
        Then I see a grid view for linking Sub Agreement displayed
        And I search for "Contracting Party" with "Ultria QA" on Contract Hierarchy grid
        Then I see seach result for "Contracting Party" with value "Ultria QA" displayed on the grid

    @Aurora_928
    Scenario: 14.Verify that user is able to filter contracts based on contract category for recommended contracts
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Sub Agreements option in the left panel
        And I click on the Link Sub Agreements button
        And I see a grid view for linking Sub Agreement displayed
        When I apply filter for "Category" with "Proprietary Information Agreement" on Contract Hierarchy grid
        Then I see seach result for "Category" with value "Proprietary Information Agreement" displayed on the grid
    
    @Aurora_928
    Scenario: 15.Verify that user is able to filter contracts based on contract type for contracts
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Sub Agreements option in the left panel
        And I click on the Link Sub Agreements button
        And I see a grid view for linking Sub Agreement displayed
        When I apply filter for "Contract Type" with "Proprietary Information Agreement" on Contract Hierarchy grid
        Then I see seach result for "Contract Type" with value "Proprietary Information Agreement" displayed on the grid

    @Aurora_928
    Scenario: 16.Verify that user is able to filter contracts based on contract sub type for contracts
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Sub Agreements option in the left panel
        And I click on the Link Sub Agreements button
        And I see a grid view for linking Sub Agreement displayed
        When I apply filter for "Contract SubType" with "Proprietary Information Agreement" on Contract Hierarchy grid
        Then I see seach result for "Contract SubType" with value "Proprietary Information Agreement" displayed on the grid

    @Aurora_928
    Scenario: 17.Verify that user is able to filter contracts based on contract status for recommended contracts
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Sub Agreements option in the left panel
        And I click on the Link Sub Agreements button
        And I see a grid view for linking Sub Agreement displayed
        When I apply filter for "Contract status" with "Active" on Contract Hierarchy grid
        Then I see seach result for "Contract status" with value "Active" displayed on the grid

    @Aurora_928
    Scenario: 18.Verify that user gets filter icon higlighted when filter is applied for contracts
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Sub Agreements option in the left panel
        And I click on the Link Sub Agreements button
        And I see a grid view for linking Sub Agreement displayed
        When I apply filter for "Contract status" with "Active" on Contract Hierarchy grid
        Then I see seach result for "Contract status" with value "Active" displayed on the grid
        Then I see filter icon is highlighted in the grid

    @Aurora_928
    Scenario: 19.Verify that after removing applied filters the higlighted filter icon should be disabled
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Sub Agreements option in the left panel
        And I click on the Link Sub Agreements button
        And I see a grid view for linking Sub Agreement displayed
        When I apply filter for "Contract status" with "Active" on Contract Hierarchy grid
        And I see seach result for "Contract status" with value "Active" displayed on the grid
        And I see filter icon is highlighted in the grid
        And I click on Clear Filter icon
        Then I check filter icon is disabled
# Manual
    # Scenario: 20.Verify that column filter gets reset when filter is removed for contracts
    #     And I filter "select" contracts with "contract_status" as "Active"
    #     And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
    #     And I view first contract from the grid
    #     And I click on redirect to aurora button
    #     And I land on aurora contract details page
    #     And I click on linked agreements menu
    #     And I see the Link Sub Agreements option in the left panel
    #     And I click on the Link Sub Agreements button
    #     And I see a grid view for linking Sub Agreement displayed
    #     When I apply filter for "Contract status" with "Active" on Contract Hierarchy grid
    #     And I see seach result for "Contract status" with value "Active" displayed on the grid
    #     And I see filter icon is highlighted in the grid
    #     And I click on Clear Filter icon
    #     Then I see contract status column gets reset

    
#*********************************** AURORA-933 Remove link between linked Agreements *********************************
# /*
#  * The feature file is used to automate the Remove link between linked Agreements
#  *
#  * @author Minaz Khan & Datta
#  *
#  */

# manual scenario:

     # Scenario: TC1:Verify whether sub Contract unlinked from master contract in aurora is reflecting in repository
        # When I search for any published master agreement contract except archived
        # And I view first contract from the grid
        # And I click on redirect to aurora button
        # And I land on aurora contract details page
        # And I select associated cp to the contract
        # And I clicked on save button in the aurora contract details page
        # And I click on linked contract menu
        # And I click on link sub agreement button inside linked contract menu
        # And I enable all contract check box
        # And I click on multiple select contracts checkbox in the popup
        # And I click on link button in the popup#//
        # And I see sub contracts
        # And I click on a random sub contracts actions menu
        # And I click on Remove Link option
        # And I click on Remove option in Remove Contract Link confirmation dialog
        # And I see the sub contract tile removed from linked contracts view for the master contract
        # And I go to repository 
        # And I open the same contract and go to linked contracts 
        # Then I should see the respective sub Contract unlinked from master contract done in aurora 

    # Scenario: TC2:Verify whether sub Contract unlinked from master contract in repository is reflecting in aurora
        # When I login to clm application
        # And I select CLM product in product selection page
        # And I click on manage contract tab
        # And I click on repository sub tab
        # And I select a contract which is a master contract
        # And I unlink the sub contract from the master contract
        # And I click on redirect to aurora button
        # And I go to liked contracts 
        # Then I should see the respective sub Contract unlinked from master contract done in repository 

    # Scenario: TC3:Verify whether master Contract unlinked from sub contract in aurora is reflecting in repository
        # When I search for any published sub agreement contract except archived
        # And I view first contract from the grid
        # And I click on redirect to aurora button
        # And I land on aurora contract details page
        # And I select associated cp to the contract
        # And I clicked on save button in the aurora contract details page
        # And I click on linked contract menu
        # And I click on link master agreement button inside linked contract menu
        # And I enable all contract check box
        # And I select a random contract in the grid
        # And I click on link button in the popup
        # And I see master contract
        # And I click on master contracts actions menu
        # And I click on Remove Link option
        # And I click on Remove option in Remove Contract Link confirmation dialog
        # And I see the master contract tile removed from linked contracts view for the sub contract
        # And I go to repository 
        # And I open the same contract and go to linked contracts 
        # Then I should see the respective master Contract unlinked from sub contract done in aurora 

    # Scenario: TC4:Verify whether master Contract unlinked from sub contract in repository is reflecting in aurora
        # When I login to clm application
        # And I select CLM product in product selection page
        # And I click on manage contract tab
        # And I click on repository sub tab
        # And I select a contract which is a sub contract
        # And I unlink the master contract from the sub contract
        # And I click on redirect to aurora button
        # And I go to liked contracts 
        # Then I should see the respective master Contract unlinked from sub contract done in repository 


# Automation scenario:

    @Aurora_933
    Scenario: TC5:Verify whether Contract link can be removed for any sub contract which is linked to the master contract
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        When I click on linked agreements menu
        Then I check remove link is availeble for "Sub Agreements"

    @Aurora_933
    Scenario: TC6:Verify whether master contract tiles do not have any actions menu option while unlinking all sub contracts from Master contract
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        When I click on linked agreements menu
        Then I check remove link is availeble for "Sub Agreements"
        Then I check remove link is not available for "Master Agreement"

    @Aurora_933
    Scenario: TC7:Verify whether contract tiles including master contract should be removed when all sub contract linked to master contract is removed 
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Sub Agreements option in the left panel
        And I click on the Link Sub Agreements button
        And I see a grid view for linking Sub Agreement displayed
        And I select "2" Agreements
        And I click on link button in the grid
        When I see the "2" files added as Sub Agreements
        And I remove all added sub agreements
        Then I see all the linked Agreements are removed

    @Aurora_933
    Scenario: TC8:Verify whether Sub contract tiles do not have any actions menu option while unlinking master contract from Sub contracts
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        When I click on linked agreements menu
        Then I check remove link is not available for "Sub Agreements"

    @Aurora_933
    Scenario: TC9:Verify whether Master contract tile has actions menu option for unlinking master contract from Sub contracts
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        When I click on linked agreements menu
        Then I check remove link is availeble for "Master Agreement"

    @Aurora_933
    Scenario: TC10:Verify the Master contracts has Remove Link option in actions menu
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check remove link is availeble for "Master Agreement"
        When I click on master contract actions menu
        Then I see Remove Link option in actions menu for master contract tile

    @Aurora_933    
    Scenario: TC11:Verify whether Remove Contract Link from master contract confirmation dialog is shown when Remove Link option is clicked
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check remove link is availeble for "Master Agreement"
        When I click on master contract actions menu
        And I see Remove Link option in actions menu for master contract tile
        Then I click on Remove Link option in master contract tile
        And I check confirmation dialog for remove linked Master contract is displayed

    @Aurora_933
    Scenario: TC12:Verify whether Remove Contract Link title is shown in Remove Contract Link from master contract confirmation dialog
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check remove link is availeble for "Master Agreement"
        And I click on master contract actions menu
        And I see Remove Link option in actions menu for master contract tile
        Then I click on Remove Link option in master contract tile
        And I check confirmation dialog for remove linked Master contract is displayed
        Then I should see Remove Contract Link title in Remove Contract Link from master contract confirmation dialog
        
    @Aurora_933   
    Scenario: TC13:Verify whether "Are you sure you want to remove sub-contract link from the master contract?" message is shown in Remove Contract Link confirmation dialog
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check remove link is availeble for "Master Agreement"
        And I click on master contract actions menu
        And I see Remove Link option in actions menu for master contract tile
        Then I click on Remove Link option in master contract tile
        And I check confirmation dialog for remove linked Master contract is displayed
        Then I see confirmation message inside the confirmation dialog for master agreement

    @Aurora_933
    Scenario: TC14:Verify whether two options are present in Remove Contract Link from master contract confirmation dialog 
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check remove link is availeble for "Master Agreement"
        And I click on master contract actions menu
        And I see Remove Link option in actions menu for master contract tile
        Then I click on Remove Link option in master contract tile
        And I check confirmation dialog for remove linked Master contract is displayed
        Then I should see two options in Remove Contract Link from master contract confirmation dialog

    @Aurora_933
    Scenario: TC15:Verify whether Remove option is present in Remove Contract Link from master contract confirmation dialog 
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check remove link is availeble for "Master Agreement"
        And I click on master contract actions menu
        And I see Remove Link option in actions menu for master contract tile
        Then I click on Remove Link option in master contract tile
        And I check confirmation dialog for remove linked Master contract is displayed
        Then I should see Remove option in Remove Contract Link from master contract confirmation dialog

    @Aurora_933
    Scenario: TC16:Verify whether Cancel option is present in Remove Contract Link from master contract confirmation dialog
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check remove link is availeble for "Master Agreement"
        And I click on master contract actions menu
        And I see Remove Link option in actions menu for master contract tile
        Then I click on Remove Link option in master contract tile
        And I check confirmation dialog for remove linked Master contract is displayed
        Then I should see Cancel option in Remove Contract Link from master contract confirmation dialog

    @Aurora_933
    Scenario: TC17:Verify whether Master contract unlinked from sub contract when remove option is selected in Remove Contract Link from master contract confirmation dialog
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check remove link is availeble for "Master Agreement"
        And I click on master contract actions menu
        And I see Remove Link option in actions menu for master contract tile
        And I click on Remove Link option in master contract tile
        And I check confirmation dialog for remove linked Master contract is displayed
        When I click on Remove option in Remove Contract Link from Master contract confirmation dialog
        Then I see all the linked Agreements are removed

    @Aurora_933
    Scenario: TC18:Verify whether cancel will close Remove Contract Link from master contract confirmation dialog
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check remove link is availeble for "Master Agreement"
        And I click on master contract actions menu
        And I see Remove Link option in actions menu for master contract tile
        Then I click on Remove Link option in master contract tile
        And I check confirmation dialog for remove linked Master contract is displayed
        And I click on cancel option in Remove Contract Link from master contract confirmation dialog
        Then I see Remove Contract Link from master contract confirmation dialog is closed

    @Aurora_933
    Scenario: TC19:Verify whether contract tiles including Sub contract should be removed when there is only single sub contract linked to master contract is removed 
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Master Agreement option in the left panel
        And I click on the Link Master Agreement button
        And I see a grid view for linking Master Agreement displayed
        And I select a contract for linking
        And I click on link button in the grid
        And I remove the added Master agreement
        Then I see all the linked Agreements are removed

    @Aurora_933
    Scenario: TC20:Verify whether the Master contract title should not have any actions menu option
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        When I click on linked agreements menu
        Then I check remove link is not available for "Master Agreement"

    @Aurora_933
    Scenario: TC21:Verify whether the Sub contracts have actions menu option
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        When I click on linked agreements menu
        Then I check remove link is availeble for "Sub Agreements"
       
    @Aurora_933
    Scenario: TC22:Verify whether the sub contract has Remove Link option in actions menu
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check remove link is availeble for "Sub Agreements"
        When I click on sub contract actions menu
        Then I see Remove Link option in actions menu for sub contract tile

    @Aurora_933
    Scenario: TC23:Verify whether Remove Contract Link confirmation dialog is shown when Remove Link option is clicked
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check remove link is availeble for "Sub Agreements"
        When I click on sub contract actions menu
        And I see Remove Link option in actions menu for sub contract tile
        Then I click on Remove Link option in sub contract tile
        And I check confirmation dialog for remove linked sub contract is displayed
        
    @Aurora_933
    Scenario: TC24:Verify whether Remove Contract Link title is shown in Remove Contract Link confirmation dialog
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check remove link is availeble for "Sub Agreements"
        And I click on sub contract actions menu
        And I see Remove Link option in actions menu for sub contract tile
        When I click on Remove Link option in sub contract tile
        And I check confirmation dialog for remove linked sub contract is displayed
        Then I should see Remove Contract Link title in Remove Contract Link from sub contract confirmation dialog

     @Aurora_933 
    Scenario: TC25:Verify whether confirmation message is shown in Remove Contract Link confirmation dialog
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check remove link is availeble for "Sub Agreements"
        And I click on sub contract actions menu
        And I see Remove Link option in actions menu for sub contract tile
        Then I click on Remove Link option in sub contract tile
        And I check confirmation dialog for remove linked sub contract is displayed
        Then I see confirmation message inside the confirmation dialog for sub agreement

    @Aurora_933
    Scenario: TC26:Verify whether two options are present in Remove Contract Link from sub-contract confirmation dialog 
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check remove link is availeble for "Sub Agreements"
        And I click on sub contract actions menu
        And I see Remove Link option in actions menu for sub contract tile
        When I click on Remove Link option in sub contract tile
        And I check confirmation dialog for remove linked sub contract is displayed
        Then I should see two options in Remove Contract Link from sub contract confirmation dialog
    
    @Aurora_933
    Scenario: TC27:Verify whether Remove option is present in Remove Contract Link from sub-contract confirmation dialog 
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check remove link is availeble for "Sub Agreements"
        And I click on sub contract actions menu
        And I see Remove Link option in actions menu for sub contract tile
        When I click on Remove Link option in sub contract tile
        And I check confirmation dialog for remove linked sub contract is displayed
        Then I should see Remove option in Remove Contract Link from sub contract confirmation dialog

    @Aurora_933
    Scenario: TC28:Verify whether Cancel option is present in Remove Contract Link from sub-contract confirmation dialog
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check remove link is availeble for "Sub Agreements"
        And I click on sub contract actions menu
        And I see Remove Link option in actions menu for sub contract tile
        When I click on Remove Link option in sub contract tile
        And I check confirmation dialog for remove linked sub contract is displayed
        Then I should see Cancel option in Remove Contract Link from sub contract confirmation dialog

    @Aurora_933
    Scenario: TC29:Verify whether sub contract unlinked from master contract when remove option is selected in Remove Contract Link from sub-contract confirmation dialog
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check remove link is availeble for "Sub Agreements"
        And I click on sub contract actions menu
        And I see Remove Link option in actions menu for sub contract tile
        When I click on Remove Link option in sub contract tile
        And I check confirmation dialog for remove linked sub contract is displayed
        And I click on Remove option in Remove Contract Link from sub-contract confirmation dialog
        Then I see all the linked Agreements are removed

   @Aurora_933
    Scenario: TC30:Verify Cancel will close Remove Contract Link sub-contract confirmation dialog
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check remove link is availeble for "Sub Agreements"
        And I click on sub contract actions menu
        And I see Remove Link option in actions menu for sub contract tile
        When I click on Remove Link option in sub contract tile
        And I check confirmation dialog for remove linked sub contract is displayed
        And I click on cancel option in Remove Contract Link from sub contract confirmation dialog
        Then I see Remove Contract Link sub contract confirmation dialog is closed

   

#************************************************* User Story AURORA-933 :- ENDS ***********************************************************


#************************************************* User Story AURORA-932 :- STARTS ***********************************************************
  # /**
#  * The feature file is used to automate the View Amendment details and Document
#  *
#  * @author Minaz Khan and Datta
#  *
#  */

#Manual scenarios:
#Automation scenarios:
    
    Scenario: TC1:Verify whether correct number of Amendments is shown in Amendments link in master agreement tile when a master contract is openend
        # And I filter "select" contracts with "contract_status" as "Active"
        # And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I filter "input" contracts with "contract_number" as "VAPTLM10074"
        And I view first contract from the grid
        And I click on redirect to aurora button 
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check contract hierarchy relationship established for "Master Agreement"
        Then I see the number of amendments in amendments link in master agreement tile 
        And I click on Amendment link from "Master" contract tile 
        And I check same number of amendments present when a master contract is openend
# Need to verify scenarios 
    # Scenario: TC2:Verify whether correct number of Amendments is shown in Amendments link in sub agreement tile when a master contract is openend
    #     #go to a contract in aurora and add amendments 
    #     Then I see the number of amendments in amendments link in sub agreement tile same as amendments present when a master contract is openend

    # Scenario: TC3:Verify whether correct number of Amendments is shown in Amendments link in master agreement tile when a sub contract is openend
    #     #go to a contract in aurora and add amendments 
    #     Then I see the number of amendments in amendments link in master agreement tile same as amendments present when a sub contract is openend

    # Scenario: TC4:Verify whether correct number of Amendments is shown in Amendments link in sub agreement tile when a sub contract is openend
    #     #go to a contract in aurora and add amendments 
    #     Then I see the number of amendments in amendments link in sub agreement tile same as amendments present when a sub contract is openend
    #     And Amendments section displaying all the amendments for the contract
    
    Scenario: TC5:Verify whether all Amendments are displayed when navigated from amemdment link present in the master agreement tile is in view when a master contract is openend
        And I filter "input" contracts with "contract_number" as "VAPTLM10074"
        And I view first contract from the grid
        And I click on redirect to aurora button 
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check contract hierarchy relationship established for "Master Agreement"
        Then I see the number of amendments in amendments link in master agreement tile 
        And I click on Amendment link from "Master" contract tile 
        And I check same number of amendments present when a master contract is openend
        Then I see all the amendments for the master agreement
        
# Need to verify scenarios 
    # Scenario: TC6:Verify whether all Amendments are displayed when navigated from amemdment link present in the sub agreement tile is in view when a master contract is openend 
    #     #go to a contract in aurora without amendments in docs
    #     And I click on the sub agreement tile to view it
    #     And I click on Amendments Link for sub agreement tile in view
    #     And I am navigated to amendments section in the Documents tab
    #     Then I see all the amendments for the sub agreement

    # Scenario: TC7:Verify whether all Amendments are displayed when navigated from amemdment link present in the master agreement tile is in view when a sub contract is openend
    #     #go to a contract in aurora without amendments in docs
    #     And I click on the master agreement tile to view it
    #     And I click on Amendments Link for master agreement tile in view
    #     And I am navigated to amendments section in the Documents tab
    #     Then I see all the amendments for the master agreement

    
    Scenario: TC8:Verify whether all Amendments are displayed when navigated from amemdment link present in the sub agreement tile is in view when a sub contract is openend
        And I filter "input" contracts with "contract_number" as "VAPTLM10219"
        And I view first contract from the grid
        And I click on redirect to aurora button 
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check contract hierarchy relationship established for "Sub Agreements"
        When I see the number of amendments in amendments link in sub agreement tile
        And I click on Amendment link from "Sub" contract tile 
        Then I check same number of amendments present when a sub contract is openend

    
    Scenario: TC9:Verify whether click on continue in confirmation dialog navigates to the amendments section in documents tab when a master agreement is in view and sub agreement tile amendment link is clicked 
        And I filter "input" contracts with "contract_number" as "VAPTLM10074"
        And I view first contract from the grid
        And I click on redirect to aurora button 
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check contract hierarchy relationship established for "Master Agreement"
        Then I see the number of amendments in amendments link in sub agreement tile
        And I click on Amendment link from "Sub" contract tile 
        And I check confirmation dialog for Open Amendment Details is displayed
        And I click on Continue option in Open Amendment Details confirmation dialog 
        And I check same number of amendments present when a sub contract is openend
        Then I see all the amendments for the master agreement
        
    
    Scenario: TC10:Verify whether click on continue in confirmation dialog navigates to the amendments section in documents tab when a sub agreement is in view and master agreement tile amendment link is clicked 
        And I filter "input" contracts with "contract_number" as "VAPTLM10219"
        And I view first contract from the grid
        And I click on redirect to aurora button 
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check contract hierarchy relationship established for "Sub Agreements"
        Then I see the number of amendments in amendments link in master agreement tile
        And I click on Amendment link from "Master" contract tile 
        And I check confirmation dialog for Open Amendment Details is displayed
        And I click on Continue option in Open Amendment Details confirmation dialog 
        And I check same number of amendments present when a master contract is openend
        Then I see all the amendments for the master agreement

    
    Scenario: TC11:Verify whether Amendments link is shown in master agreement tile when a master contract is openend
        And I filter "input" contracts with "contract_number" as "VAPTLM10074"
        And I view first contract from the grid
        And I click on redirect to aurora button 
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check contract hierarchy relationship established for "Master Agreement"
        Then I see amendments link in master agreement tile

     
    Scenario: TC12:Verify whether Amendments link is shown in sub agreement tile when a master contract is openend
        And I filter "input" contracts with "contract_number" as "VAPTLM10219"
        And I view first contract from the grid
        And I click on redirect to aurora button 
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check contract hierarchy relationship established for "Sub Agreements"
        Then I see amendments link in sub agreement tile
   
   
    Scenario: TC13:Verify whether Amendments link is shown in master agreement tile when a sub contract is openend
        And I filter "input" contracts with "contract_number" as "VAPTLM10219"
        And I view first contract from the grid
        And I click on redirect to aurora button 
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check contract hierarchy relationship established for "Sub Agreements"
        Then I see amendments link in master agreement tile
        
    
    Scenario: TC14:Verify whether Amendments link is shown in sub agreement tile when a Master contract is openend
       And I filter "input" contracts with "contract_number" as "VAPTLM10074"
        And I view first contract from the grid
        And I click on redirect to aurora button 
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check contract hierarchy relationship established for "Master Agreement"
        Then I see amendments link in sub agreement tile

    @Aurora_932
    Scenario: TC15:Verify whether Amendments link is invisible in master agreement tile as it does not consist of any Amendments when a master contract is openend 
        And I filter "input" contracts with "contract_number" as "VAPTLM10074"
        And I view first contract from the grid
        And I click on redirect to aurora button 
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I check contract hierarchy relationship established for "Master Agreement"
        Then I dont see amendments link in master agreement tile

    Scenario: TC16:Verify whether Amendments link is invisible in sub agreement tile as it does not consist of any Amendments when a master contract is openend
        #go to a contract in aurora without amendments in docs  
        Then I see amendments link is invisible in sub agreement tile when a master contract is openend

    Scenario: TC17:Verify whether Amendments link is invisible in master agreement tile as it does not consist of any Amendments when a sub contract is openend
        #go to a contract in aurora without amendments in docs 
        Then I see amendments link is invisible in master agreement tile when a sub contract is openend

    Scenario: TC18:Verify whether Amendments link is invisible in sub agreement tile as it does not consist of any Amendments when a sub contract is openend
        #go to a contract in aurora without amendments in docs 
        Then I see amendments link is invisible in sub agreement tile when a sub contract is openend

    Scenario: TC19:Verify whether Amendments link navigates to the amendments section in documents tab when master agreement tile is in view when a master contract is openend 
        #go to a contract in aurora without amendments in docs
        And I click on the master agreement tile to view it
        And I click on Amendments Link for master agreement tile in view
        Then I am navigated to the Documents tab
        And I see amendments section

    Scenario: TC20:Verify whether Amendments link navigates to the amendments section in documents tab when sub agreement tile is in view when a master contract is openend 
        #go to a contract in aurora without amendments in docs
        And I click on the sub agreement tile to view it
        And I click on Amendments Link for sub agreement tile in view
        Then I am navigated to the Documents tab
        And I see amendments section

    Scenario: TC21:Verify whether Amendments link navigates to the amendments section in documents tab when master agreement tile is in view when a sub contract is openend
        #go to a contract in aurora without amendments in docs
        And I click on the master agreement tile to view it
        And I click on Amendments Link for master agreement tile in view
        Then I am navigated to the Documents tab
        And I see amendments section

    Scenario: TC22:Verify whether Amendments link navigates to the amendments section in documents tab when sub agreement tile is in view when a sub contract is openend 
        #go to a contract in aurora without amendments in docs 
        And I click on the sub agreement tile to view it
        And I click on Amendments Link for sub agreement tile in view
        Then I am navigated to the Documents tab
        And I see amendments section

    Scenario: TC23:Verify whether confirmation dialog is shown when a master agreement is in view and sub agreement tile amendment link is clicked 
        #go to a contract in aurora without amendments in docs 
        And I click on the master agreement tile to view it
        And I click on Amendments Link for sub agreement tile
        Then I see a confirmation dialog

    Scenario: TC24:Verify whether confirmation dialog is shown when a sub agreement is in view and master agreement tile amendment link is clicked 
        #go to a contract in aurora without amendments in docs 
        And I click on the sub agreement tile to view it
        And I click on Amendments Link for master agreement tile
        Then I see a confirmation dialog

    Scenario: TC25:Verify whether confirmation dialog has "Open Amendment Details" title when a master agreement is in view and sub agreement tile amendment link is clicked 
        #go to a contract in aurora without amendments in docs 
        And I click on the master agreement tile to view it
        And I click on Amendments Link for sub agreement tile
        Then I see a confirmation dialog with title open amendment details

    Scenario: TC26:Verify whether confirmation dialog has "Open Amendment Details" title when a sub agreement is in view and master agreement tile amendment link is clicked
        #go to a contract in aurora without amendments in docs 
        And I click on the sub agreement tile to view it
        And I click on Amendments Link for master agreement tile
        Then I see a confirmation dialog with title open amendment details

    Scenario: TC27:Verify whether confirmation dialog has  "Are you sure you want to navigate to Amendments section of the selected contract?" message when a master agreement is in view and sub agreement tile amendment link is clicked 
        #go to a contract in aurora without amendments in docs 
        And I click on the master agreement tile to view it
        And I click on Amendments Link for sub agreement tile
        Then I see a confirmation dialog with message

    Scenario: TC28:Verify whether confirmation dialog has  "Are you sure you want to navigate to Amendments section of the selected contract?" message when a sub agreement is in view and master agreement tile amendment link is clicked
        #go to a contract in aurora without amendments in docs 
        And I click on the sub agreement tile to view it
        And I click on Amendments Link for master agreement tile
        Then I see a confirmation dialog with message

    Scenario: TC29:Verify whether confirmation dialog has 2 options when a master agreement is in view and sub agreement tile amendment link is clicked 
        #go to a contract in aurora without amendments in docs 
        And I click on the master agreement tile to view it
        And I click on Amendments Link for sub agreement tile
        Then I see a confirmation dialog
        And I see two options present in confirmation dialog

    Scenario: TC30:Verify whether confirmation dialog has 2 options when a sub agreement is in view and master agreement tile amendment link is clicked
        #go to a contract in aurora without amendments in docs 
        And I click on the sub agreement tile to view it
        And I click on Amendments Link for master agreement tile
        Then I see a confirmation dialog
        And I see two options present in confirmation dialog

    Scenario: TC31:Verify whether confirmation dialog has cancel option when a master agreement is in view and sub agreement tile amendment link is clicked 
        #go to a contract in aurora without amendments in docs 
        And I click on the master agreement tile to view it
        And I click on Amendments Link for sub agreement tile
        Then I see a confirmation dialog
        And I see cancel option present in confirmation dialog

    Scenario: TC32:Verify whether confirmation dialog has cancel option when a sub agreement is in view and master agreement tile amendment link is clicked
        #go to a contract in aurora without amendments in docs 
        And I click on the sub agreement tile to view it
        And I click on Amendments Link for master agreement tile
        Then I see a confirmation dialog
        And I see cancel option present in confirmation dialog

    Scenario: TC33:Verify whether confirmation dialog goes off when cancel option is clicked when a master agreement is in view and sub agreement tile amendment link is clicked 
        #go to a contract in aurora without amendments in docs 
        And I click on the master agreement tile to view it
        And I click on Amendments Link for sub agreement tile
        Then I see a confirmation dialog
        And I click on cancel option present in confirmation dialog

    Scenario: TC34:Verify whether confirmation dialog goes off when cancel option is clicked when a sub agreement is in view and master agreement tile amendment link is clicked
        #go to a contract in aurora without amendments in docs 
        And I click on the sub agreement tile to view it
        And I click on Amendments Link for master agreement tile
        Then I see a confirmation dialog
        And I click on cancel option present in confirmation dialog 

    Scenario: TC35:Verify whether confirmation dialog has continue option when a master agreement is in view and sub agreement tile amendment link is clicked 
        #go to a contract in aurora without amendments in docs 
        And I click on the master agreement tile to view it
        And I click on Amendments Link for sub agreement tile
        Then I see a confirmation dialog
        And I see continue option present in confirmation dialog

    Scenario: TC36:Verify whether confirmation dialog has continue option when a sub agreement is in view and master agreement tile amendment link is clicked
        #go to a contract in aurora without amendments in docs 
        And I click on the sub agreement tile to view it
        And I click on Amendments Link for master agreement tile
        Then I see a confirmation dialog
        And I see continue option present in confirmation dialog

    Scenario: TC37:Verify whether click on continue in confirmation dialog navigates to the amendments section in documents tab when a master agreement is in view and sub agreement tile amendment link is clicked 
        #go to a contract in aurora without amendments in docs 
        And I click on the master agreement tile to view it
        And I click on Amendments Link for sub agreement tile
        And I see a confirmation dialog
        And I click on continue option present in confirmation dialog
        Then I am navigated to the Documents tab
        And I see amendments section
        

    Scenario: TC38:Verify whether click on continue in confirmation dialog navigates to the amendments section in documents tab when a sub agreement is in view and master agreement tile amendment link is clicked 
        #go to a contract in aurora without amendments in docs 
        And I click on the sub agreement tile to view it
        And I click on Amendments Link for master agreement tile
        Then I see a confirmation dialog
        And I click on continue option present in confirmation dialog
        Then I am navigated to the Documents tab
        And I see amendments section

# *******************************   AURORA-927 View linked agreements Starts *******************************************  
# /**
#  *  
#  * The feature file to Verify all the scenarios related to contract hierarchy | View linked agreements
#  *
#  * @author Datta Ankalkar
#  *
#  */

#Manual Scenarios
#Scenario: TC01: Verify that the UI of the tile view matches the UX design.

# Automation Scenarios:

    Scenario: TC01: Verify that contract hierarchy cannot be established for standalone contracts
        # And I filter "input" contracts with "contract_number" as "AUTO18840"
        # And I filter "input" contracts with "contract_title" as "Underwriting-Underwriting"
        # And I filter "input" contracts with "contract_source" as "Repository"
        # And I filter "input" contracts with "contract_type" as "Clainms"
        # And I filter "input" contracts with "contract_sub_type" as "Binding Authority Agreement"
        # And I filter "select" contracts with "category" as "abc"
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Standalone"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        When I click on linked agreements menu
        Then I check informative message for Standalone Contracts in the left pannel
        And I see view contract details button
        And I click on View Contract Details button
        And I check Contract Details page is displayed
   
    Scenario: TC02: Verify if the amendments link is availabel on contract cards
        And I filter "input" contracts with "contract_number" as "VAPTLM10288"
        # And I filter "select" contracts with "contract_status" as "Active"
        # And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I open contract having amendment from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        When I click on linked agreements menu
        Then I see the linked contracts in the left panel
        And I see Amendment link is available on contract cards
    
    Scenario: TC03: Verify the confirmation popup dialog for amendments link
        # And I filter "select" contracts with "contract_status" as "Active"
        # And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I filter "input" contracts with "contract_number" as "VAPTLM10288"
        And I open contract having amendment from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        When I click on linked agreements menu
        Then I see the linked contracts in the left panel
        And I see Amendment link is available on contract cards
        And I click on Amendment link on contract cards
        And I see the confirmation dialog for navigating to Amendment section
        And I see "Continue" option on dialog box
        And I see "Cancel" option on dialog box
    
    Scenario: TC04: Verify clicking on mendments link user navigates to amendment section
        And I filter "input" contracts with "contract_number" as "VAPTLM10288"
        And I open contract having amendment from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the linked contracts in the left panel
        When I see Amendment link is available on contract cards
        Then I click on Amendment link on contract cards
        And I see the confirmation dialog for navigating to Amendment section
        And I see "Continue" option on dialog box
        And I click on "Continue" option on dialog box
        And I see user navigates to Amendment Section
    
    Scenario: TC05: Verify the master contract tile details 
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        When I see the linked contracts in the left panel
        Then I see the contract tile field
        And I see the contract number field
        And I see the contract type field
        And I see the contract sub type field
        And I see the contract status field
        And I see contracting party label on tile view
        # And I see the contracting parties in a tooltip
        And I see view contract details link on tile view
    
    Scenario: TC06: Link sub contract to  master contract 
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Sub Agreements option in the left panel
        And I see No Sub Agreements linked text
        When I click on the Link Sub Agreements button
        Then I see a grid view for linking Sub Agreement displayed
        And I select "2" Agreements
        And I click on link button in the grid
        And I see the "2" files added as Sub Agreements

        # When I click on the actions icon of the Sub Agreement "1"
        # And I click on remove link option
        # Then I see that the linked Sub Agreement is now removed
    
    Scenario: TC07: Link master contract to  sub contract 
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Master Agreement option in the left panel
        And I see No Master Agreement linked text
        When I click on the Link Master Agreement button
        Then I see a grid view for linking Master Agreement displayed
        And I select a contract for linking
        And I click on link button in the grid
        And I see master contract has been added to sub contract
        # When I click on the actions icon of the master contract
        # And I click on remove link option
        # Then I see that the linked master contract is now removed
    
    Scenario: TC08: View contract details
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I navigate to contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see master contract has been added to sub contract
        And I see view contract details link on tile view
        When I click on View Contract Details link on tile view
        Then I see the dialog box with title as Open Contract Details dispayed "true"
        And I see confirmation text inside the dialog box
        And I see "Cancel" option on dialog box
        And I see "Confirm" option on dialog box
        And I click on "Cancel" option on dialog box
        And I see the dialog box with title as Open Contract Details dispayed "false"
        And I click on View Contract Details link on tile view
        And I see the dialog box with title as Open Contract Details dispayed "true"
        And I click on "Confirm" option on dialog box
        And I check user navigates to contract details page


# ******************************* AURORA-930 Starts*******************************************  
# /**
#  *  
#  * The feature file to Verify all the scenarios related to | Contract hierarchy | Grid enhancement using PrimeNG excluding recommended contracts
#  *
#  * @author Datta Ankalkar
#  *
#  */

#Manual Scenarios:
# Scenario: TC01: Verify that Grid List should be sorted by selected/linked agreements first and then rest of the contracts.
# Scenario: TC02: Verify that If there are no contracts available to link, show an empty grid view
# Scenario: TC03: Verify that for the empty grid view the column filters should be disabled.
# Scenario: TC04: Verify that Remove All contracts checkbox should be removed from the grid view.
# Scenario: TC05: Verify that Remove All contracts button in the empty grid view should be removed.

# Automation Scenarios: 
    @AURORA_930
    Scenario: TC06: Verify On clicking link master agreements button, a pop up showing contracts in a grid is displayed
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I navigate to contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Master Agreement option in the left panel
        And I see No Master Agreement linked text
        When I click on the Link Master Agreement button
        Then I see a grid view for linking Master Agreement displayed
        And I see list of contracts displayed in the grid view
    
    @AURORA_930
    Scenario: TC07: Verify On clicking link sub agreements button, a pop up showing contracts in a grid is displayed.
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I navigate to contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Sub Agreements option in the left panel
        And I see No Sub Agreements linked text
        When I click on the Link Master Agreement button
        Then I see a grid view for linking Master Agreement displayed
        And I see list of contracts displayed in the grid view
    
    @AURORA_930
    Scenario: TC08: Verify On clicking link button, a grid with linked agreements first in the list is displayed.
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I navigate to contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Sub Agreements option in the left panel
        And I see No Sub Agreements linked text
        When I click on the Link Master Agreement button
        Then I see a grid view for linking Master Agreement displayed
        And I see list of contracts displayed in the grid view
        And I select "1" Agreements
        And I click on link button in the grid
        And I click on link button from top
        And I see linked contract displayed at the top in the grid view
    
    @AURORA_930
    Scenario: TC09: Verify that grid has radio buttons to link only one master agreement contract to sub agreements.
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Sub Agreement"
        And I view first contract from the grid
        And I navigate to contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Sub Agreements option in the left panel
        And I see No Sub Agreements linked text
        When I click on the Link Master Agreement button
        Then I see a grid view for linking Master Agreement displayed
        And I see list of contracts displayed in the grid view
        And I see a radio botton to select contract for linking is available on the grid view

    @AURORA_930    
    Scenario: TC10: Verify that grid has check boxes to link mulitiple sub agreement contracts to Master agreement.
        And I filter "select" contracts with "contract_status" as "Active"
        And I filter "select" contracts with "heirarchy_status" as "Master Agreement"
        And I view first contract from the grid
        And I navigate to contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on linked agreements menu
        And I see the Link Sub Agreements option in the left panel
        And I see No Sub Agreements linked text
        And I click on the Link Master Agreement button
        When I see list of contracts displayed in the grid view
        Then I see a Checkbox to select contracts for linking is available on the grid view
        
# ******************************* AURORA-930 Ends ******************************************* 