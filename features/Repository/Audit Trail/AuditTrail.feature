Feature: Audit Trail features

    Background: Login to CLM application and land on CLM repository grid page
        Given I login to clm application
        When I select CLM product in product selection page
        And I click on manage contract tab
        And I click on repository sub tab
        And I check user lands on repository grid page

# ******************************** AURORA-1005 Starts*************************************************
# /**
#  * The feature file to verify Display of all contract versions by stage
#  *
#  * @author Datta
#  */
    @Aurora_928
    Scenario: 1.Verify that user is not allowed to view all contract versions of a contract for repository draft status contract
        When I filter "select" contracts with "contract_status" as "Repository Draft"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check linked agreements menu is disabled
    
    @Aurora_928
    Scenario: 2.Verify that user is not allowed to view all contract versions of a contract for for pending publish status contract
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

# ******************************** AURORA-1005 Ends ***************************************************

# ******************************** AURORA-1006 Starts *************************************************
# /**
#  * The feature file to verify Column features for Audit Trail grid
#  *
#  * @author Datta
#  */
    @Aurora_1006
    Scenario: TC01.Verify Version number column has a dropdown filter showing list of all versions available for selection and clear
        And I filter "select" contracts with "contract_status" as "Active"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        When I click on Audit Trails menu
        Then I see a dropdown for Version number column is available to filter Cotract versions

    Scenario: TC02.Verify user can select any version available for selection with Version number column dropdown filter list
    Scenario: TC03.Verify user can clear the selected version from Version number column dropdown filter list

    Scenario: TC04.Verify Revised on column is available for user to select a date range from any time frame less than equal to the today's date
        And I filter "select" contracts with "contract_status" as "Active"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        When I click on Audit Trails menu
        Then I see a dropdown for Revised on column is available to filter a date range
    
    Scenario: TC05.Verify with Revised on column, user can not select a date range from any time frame grater than today's date
    Scenario: TC06.Verify user can filter contract verions by selecting avalid date range with Revised on column 

    Scenario: TC07.Verify user can filter contract verions by passing alphanumeric and special characters for sub-text searching on comments.
        And I filter "select" contracts with "contract_status" as "Active"
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        When I click on Audit Trails menu
        Then I see a textbox is availble to search sub text for comments column

    Scenario: TC08.Verify Revised by column has a dropdown filter showing list of all contract version owners available for selection and clear.
    Scenario: TC09.Verify user can select any contract version owners available for selection with Revised by column dropdown filter list
    Scenario: TC10.Verify user can clear the selected contract version owners from Revised by column dropdown filter list

    Scenario: TC11.Verify Column Sort is available for Version number column to sort records in ascending/descending order
    Scenario: TC12.Verify Column Sort is available for Revised on column to sort records in ascending/descending order
    Scenario: TC13.Verify Column Sort is available for comments column to sort records in ascending/descending order
    Scenario: TC14.Verify Column Sort is available for Revised by column to sort records in ascending/descending order

    Scenario: TC15.Verify Column reordering and resizing available for Version number column
    Scenario: TC16.Verify Column reordering and resizing available for Revised on column
    Scenario: TC17.Verify Column reordering and resizing available for comments column
    Scenario: TC18.Verify Column reordering and resizing available for Revised by column

# ******************************** AURORA-1006 Ends ***************************************************

# ******************************** AURORA-1008 Starts *************************************************
# /**
#  * The feature file to verify scenarios on Download contract version document
#  *
#  * @author Datta
#  */
# Manual Scenarios:

    Scenario: TC01.Verify contract version document is downloaded in PDF format
    Scenario: TC02.Verify version number is Appended to the contract filename at the end preceeded by V
    Scenario: TC03.Verify On successful download, file should be download with Respective file extension
    Scenario: TC03.Verify On successful download, file should be download with file name appended with version number in the format "v<version_number>"
    Scenario: TC04.Verify If download fails, show a toaster with title "Download failed"
    Scenario: TC05.Verify If download fails, show a toaster with message "Contract version <version_number> download failed. Please try again."
    

# Automation Scenarios:

    Scenario: TC06.Verify user has Action menu option "Download" from each row on the grid
    Scenario: TC06.Verify user can download the version document from Action menu option "Download" from each row on the grid
    Scenario: TC07.Verify Download icon option is available from the contract preview panel to download version document
    Scenario: TC07.Verify user can download the version document from Download icon option from the contract preview panel
    Scenario: TC08.Verify On Download, a toaster with title "Contract version downloading" is shown
    Scenario: TC09.Verify On Download, a toaster with message "Contract version <contract_version_number> will be downloaded shortly"

# ******************************** AURORA-1008 Ends ***************************************************

# ******************************** AURORA-1009 Starts *************************************************
# /**
#  * The feature file to verify Column features for Audit Trail grid
#  *
#  * @author Datta
#  */
# Manual Scenarios:

Scenario: TC01.Verify that Compare button should include a counter to indicates the number of revisions selected for comparison.
Scenario: TC02.Verify that By default, Compare button counter vlaue is 0 and button is grey and disabled.
Scenario: TC03.Verify that When 1 revision is selected, the counter changes to 1, but the button remains grey and disabled.
Scenario: TC04.Verify that When 2 revisions are selected, the counter changes to 2 and button is blue and enabled.
Scenario: TC05.Verify that When more than 2 revisions are selected, the counter is replaced by an exclamation mark ( ! ) and the button changes to red and is disabled
Scenario: TC06.Verify that When more than 2 revisions are selected, on hover on Compare button a tooltip should be shown with message "Only 2 contract revisions can be selected for comparison"
Scenario: TC07.Verify that Once 2 contract revisions are selected for comparison, On compare, an RHS drawer panel is shown with comparison details
Scenario: TC08.Verify that RHS drawer panel has title - "Compare Contract Terms"
Scenario: TC09.Verify that RHS drawer panel has Information icon displaying the comparison details
Scenario: TC10.Verify that RHS drawer panel has a header 'Contract Terms'
Scenario: TC11.Verify that RHS drawer panel has a header 'Older revision number'
Scenario: TC12.Verify that RHS drawer panel has a header 'Newer revision number'
Scenario: TC13.Verify the header Older revision number should show revised on date and revised by details included in the header
Scenario: TC14.Verify the header Newer revision number should show revised on date and revised by details included in the header
Scenario: TC15.Verify that on RHS drawer panel the header 'Contract Terms' should show Contract details metadata
Scenario: TC16.Verify that on RHS drawer panel the header 'Older revision number' should show Older value for the metadata
Scenario: TC17.Verify that on RHS drawer panel the header 'Newer revision number' should show Newer value for the metadata
Scenario: TC18.Verify that RHS drawer panel has a close button
Scenario: TC19.Verify that clicking on Close button, Closes the overlay panel and clears the selection on previously selected contracts.




# ******************************** AURORA-1009 Ends ***************************************************