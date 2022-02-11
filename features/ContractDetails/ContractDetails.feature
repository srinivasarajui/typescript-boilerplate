# /**
#  *
#  *
#  * @author somnath.k
#  *
#  *
#  */
Feature: Contract Details Page
    
    # User Story AURORA-:- Verify all the scenarios related to Redirect to Aurora link from all the types of contract
    
    #Manual Scenarios
    #1. Verify that redirect to aurora link button is matching with the ux provide in the jira
    #2. Verify that redirect to aurora link is pointing to correct url
    #3. Verify that proper error message is shown to user when the server is down.
    #4  Verify that redirect to aurora link is available to all the users inside the tenant
    #5. Verify that redirect to aurora link is available to the contract which is opened from my calendar widget.
    #6. Verify that redirect to aurora link is available to the contract which is opened from milestones tab.
    #7. Verify that redirect to aurora link is available to the contract which is opened from view sent mail
    #8. Verify that redirect to aurora link is available to the contract which is opened from search tab
    #9. Verify that user is allowed to redirect to aurora when authoring contract is added to repository.
    
    # # Automation Scenarios
    # Given I login to clm application
    # Then I select respective product
    # Then I navigate to repository tab
    Background: Login to CLM application and land on repository grid page
        Given I login to clm application
        When I select CLM product in product selection page
        And I click on manage contract tab
        And I click on repository sub tab
        And I lands on repository grid page

    @AURORA_CLM
    Scenario: TC1: Verify that redirect to aurora link is available for repository draft contract.
        When I search for repository draft status contract
        And I view first contract from the grid
        Then I check redirect to aurora link is present

    @AURORA_CLM
    Scenario: TC2: Verify that redirect to aurora link is available in all the enabled menus in the contract profile section for repository draft status contract
        When I search for repository draft status contract
        And I view first contract from the grid
        Then I select each enabled menu and check redirect to aurora link is present

    @AURORA_CLM
    Scenario: TC3: Verify that user is allowed to click on redirect to aurora button for repository draft status contract
        When I search for repository draft status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC4: Verify that user is allowed to redirect to aurora for repository draft status contract.
        When I search for repository draft status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC5: Verify that user lands on the aurora contract details page by default for repository draft status contract.
        When I search for repository draft status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC6: Verify that redirect to aurora link is available for pending publish status contract.
        When I search for pending publish status contract
        And I view first contract from the grid
        Then I check redirect to aurora link is present

    @AURORA_CLM
    Scenario: TC7: Verify that redirect to aurora link is available in all the enabled menus in the contract profile section for pending publish status contract
        When I search for pending publish status contract
        And I view first contract from the grid
        Then I select each enabled menu and check redirect to aurora link is present

    @AURORA_CLM
    Scenario: TC8: Verify that user is allowed to click on redirect to aurora button for pending publish status contract
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC9: Verify that user is allowed to redirect to aurora for pending publish status contract.
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC10: Verify that user lands on the aurora contract details page by default for pending publish status contract.
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC11: Verify that redirect to aurora link is available for active status contract.
        When I search for active status contract
        And I view first contract from the grid
        Then I check redirect to aurora link is present

    @AURORA_CLM
    Scenario: TC12: Verify that redirect to aurora link is available in all the enabled menus in the contract profile section for active status contract
        When I search for active status contract
        And I view first contract from the grid
        Then I select each enabled menu and check redirect to aurora link is present

    @AURORA_CLM
    Scenario: TC13: Verify that user is allowed to click on redirect to aurora button for active status contract
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC14: Verify that user is allowed to redirect to aurora for active status contract.
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC15: Verify that user lands on the aurora contract details page by default for active status contract.
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC16: Verify that redirect to aurora link is available for inactive status contract.
        When I search for inactive status contract
        And I view first contract from the grid
        Then I check redirect to aurora link is present

    @AURORA_CLM
    Scenario: TC17: Verify that redirect to aurora link is available in all the enabled menus in the contract profile section for inactive status contract
        When I search for inactive status contract
        And I view first contract from the grid
        Then I select each enabled menu and check redirect to aurora link is present

    @AURORA_CLM
    Scenario: TC18: Verify that user is allowed to click on redirect to aurora button for inactive status contract
        When I search for inactive status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC19: Verify that user is allowed to redirect to aurora for inactive status contract.
        When I search for inactive status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC20: Verify that user lands on the aurora contract details page by default for inactive status contract.
        When I search for inactive status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC21: Verify that redirect to aurora link is available for expired status contract.
        When I search for expired status contract
        And I view first contract from the grid
        Then I check redirect to aurora link is present

    @AURORA_CLM
    Scenario: TC22: Verify that redirect to aurora link is available in all the enabled menus in the contract profile section for expired status contract
        When I search for expired status contract
        And I view first contract from the grid
        Then I select each enabled menu and check redirect to aurora link is present

    @AURORA_CLM
    Scenario: TC23: Verify that user is allowed to click on redirect to aurora button for expired status contract
        When I search for expired status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC24: Verify that user is allowed to redirect to aurora for expired status contract.
        When I search for expired status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC25: Verify that user lands on the aurora contract details page by default for expired status contract.
        When I search for expired status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC26: Verify that redirect to aurora link is available for termination notice served status contract.
        When I search for termination notice served status contract
        And I view first contract from the grid
        Then I check redirect to aurora link is present

    @AURORA_CLM
    Scenario: TC27: Verify that redirect to aurora link is available in all the enabled menus in the contract profile section for termination notice served status contract
        When I search for termination notice served status contract
        And I view first contract from the grid
        Then I select each enabled menu and check redirect to aurora link is present

    @AURORA_CLM
    Scenario: TC28: Verify that user is allowed to click on redirect to aurora button for termination notice served status contract
        When I search for termination notice served status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC29: Verify that user is allowed to redirect to aurora for termination notice served status contract.
        When I search for termination notice served status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC30: Verify that user lands on the aurora contract details page by default for termination notice served status contract.
        When I search for termination notice served status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC31: Verify that redirect to aurora link is available for archived status contract.
        When I search for archived status contract
        And I view first contract from the grid
        Then I check redirect to aurora link is present

    @AURORA_CLM
    Scenario: TC32: Verify that redirect to aurora link is available in all the enabled menus in the contract profile section for archived status contract
        When I search for archived status contract
        And I view first contract from the grid
        Then I select each enabled menu and check redirect to aurora link is present

    @AURORA_CLM
    Scenario: TC33: Verify that user is allowed to click on redirect to aurora button for archived status contract
        When I search for archived status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC34: Verify that user is allowed to redirect to aurora for archived status contract.
        When I search for archived status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC35: Verify that user lands on the aurora contract details page by default for archived status contract.
        When I search for archived status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC36: Verify that user is allowed to redirect to aurora when any repository contract is viewed from my watchlist widget
        When I view first contract from the grid
        And I add contract to my watchlist
        And I close the viewed contract
        And I navigate to dashboard tab and search for the contract
        And I will view the contract in the my watchlist widget
        And I click on redirect to aurora button
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC37: Verify that redirect to aurora link is available for contract which is viewed from my watchlist.
        When I view first contract from the grid
        And I add contract to my watchlist
        And I close the viewed contract
        And I navigate to dashboard tab and search for the contract
        And I will view the contract in the my watchlist widget
        Then I check redirect to aurora link is present
    
    # commented until repo contract is added with alerts and reminders
    # Scenario: Verify that user is allowed to redirect to aurora when any repository contract is viewed from alert and reminders tab
    # Then I navigate to alerts and reminders tab
    # Then I will view first contract from alert section
    # Scenario: Verify that redirect to aurora link is available for contract which is viewed from my watchlist.
    # Then I check redirect to aurora link is present
    # When I click on redirect to aurora button
    # Then I check user lands on aurora contract details page
    # Then I close aurora opened tab
    # Then I close the viewed contract
    
    #*************************** User Story AURORA-:- ENDS ***********************************************************
    
    # User Story AURORA-:- Verify all the scenarios related to metadata section in aurora contract details page
    #Manual scenarios
    #1. Verify that metadata section in ux design is matching with the ui developed.
    #2. Verify that metadata count in repository are matching with the metadata count in aurora
    #3. Verify that metadata datatype in repository are matching with the metadata datatype in aurora
    #4. Verify that metadata which are hidden in repository are hidden in aurora
    #4. Verify that metadatas which are disabled in repository should be disabled in aurora
    #5. Verify that scroll is available to user in metadata section when there are more fields
    #6. Verify that changes done in the contract details page of repository is refelected in the contract details page of aurora
    #7. Verify that ui glitch is not observed in the metadata section when contract preview is hidden
    #8. Verify that admin is allowed to configure multiple headers and subheaders in the metadata section
    #9. Verify the responsiveness of metadata section for all the standard resolutions
    #10. Verify the behavior of metadata section in multiple browsers
    #11. Verify that 300 metadata configuration will not impact the metadata section functionality
    #12. Verify that metadata section is loaded in standard load time provided by pmg team.
    #13. Verify that tooltip or ellipses are shown for all the metadata
    #14. Verify that tooltip shown for metadata is having proper value
    #15. Verify that tooltip or ellipses are shown for all the metadata values
    #16. Verify that tooltip shown for metadata value is having proper value or not
    #17. Verify that metadata values which are blank in repository are blank in aurora contract details page
   
    # Automation Scenarios
    # Given I login to clm application
    # Then I select respective product
    # Then I navigate to repository tab
    # commented because of blocker issue
    # Then I create new contract and take it till contract details page
    # Then I view first contract from the grid
    # Then I navigate to contract details page
    # Then I fill all the contract details and click on save button
   
    # Given I have repository contract details data
    
    # Then I navigate to aurora from random contract profile menu
    # Then I check user lands on aurora contract details page
    @AURORA_CLM
    Scenario: TC38: Verify that user is allowed to expand all subheaders
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I navigate to aurora from random contract profile menu
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        Then I check all subheaders are expanded
    
    # There is an issue on UI
    @AURORA_CLM
    Scenario: TC39: Verify that user is allowed to collapse all the subheader
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I navigate to aurora from random contract profile menu
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        Then I check all subheaders are collapsed

    @AURORA_CLM
    Scenario: TC40: verify that user is allowed to expand individual subheader
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I navigate to aurora from random contract profile menu
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I clicked on down arrow icon
        Then I check particular subheader is expanded

    @AURORA_CLM
    Scenario: TC41: Verify that user is allowed to collapse individual subheader
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I navigate to aurora from random contract profile menu
        And I land on aurora contract details page
        And I clicked on up arrow icon
        Then I check particualr subheader is collapsed

    # @AURORA_CLM issue with codeceptjs with old clm
    # Scenario: TC42: Verify that the metadatas present in repository contract details page is matching with the metadata present in aurora contract details page with both metadata and value
    #     When I search for repository draft status contract
    #     And I view first contract from the grid
    #     And I navigate to contract details page
    #     And I fill all the contract details and click on save button
    #     And I navigate to aurora from random contract profile menu
    #     And I land on aurora contract details page
    #     And I click on expand or collapse all icon
    #     And I click on expand or collapse all icon
    #     Then I check all metadatas and values of repository is present in aurora contract details page
    
    #*************************** User Story AURORA-:- ENDS ***********************************************************
    
    # User Story AURORA-:- Verify all the scenarios related to contract preview section in aurora contract details page
    
    #Manual Scenarios
    #1. Verify that document pannel in ux design is matching with the ui developed.
    #2. Verify that uploaded document is shown in the document pannel
    #3. Verify that uploaded document content font and size is matching with the document shown in the document pannel
    #4. Verify that scroll is available to user in the document pannel
    #5. Verify that document replaced in repository contract details is refelected in the aurora document pannel
    
    # Automation Scenarios
    @AURORA_CLM
    Scenario: TC43: Verify that uploaded docx document is shown in the contract preview section
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with docx document
        And I wait until file is uploaded in the contract details page
        And I clicked on save as draft button in the contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check uploaded document name in the metadata section
        And I check no data to preview message is not shown
    
    # When I search for repository draft status contract
    # And I view first contract from the grid
    # And I navigate to contract details page
    # # Then I create new contract and take it till contract details page
    # And I fill all the contract details and click on save button
    # Given I have repository details data,uploaded file name and version details
    # When I navigate to aurora from random contract profile menu
    # And I land on aurora contract details page
    # Then I check uploaded document name in the metadata section
    # And I check no data to preview message is not shown
    @AURORA_206
    Scenario: TC44: Verify that user is allowed to collapse document pannel in contract details menu
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I navigate to aurora from random contract profile menu
        And I land on aurora contract details page
        And I click on expand or collapse document panel icon
        Then I check document panel is collapsed

    # @AURORA_CLM issue with old clm
    # Scenario: TC45: Verify that by default contract title name is shown in the document preview dropdown list in the contract preview section header
    #     When I search for repository draft status contract
    #     And I view first contract from the grid
    #     And I navigate to contract details page
    #     And I fill all the contract details and click on save button
    #     Given I have repository details data,uploaded file name and version details
    #     When I navigate to aurora from random contract profile menu
    #     And I land on aurora contract details page
    #     Then I check default contract title name is shown in the document preview dropdown list

    @AURORA_CLM
    Scenario: TC46: Verify that by default latest verion number of contract is shown in the version list dropdown
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to aurora from random contract profile menu
        And I land on aurora contract details page
        Then I check latest version number in the version dropdown

    @AURORA_CLM
    Scenario: TC47: Verify that version list count in repository is matching with the version list count in the aurora
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to aurora from random contract profile menu
        And I land on aurora contract details page
        Then I check version list count in the aurora page

    @AURORA_CLM
    Scenario: TC48: Verify that document pannel is not impacted when user navigates from contract detail menu to document menu
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to aurora from random contract profile menu
        And I land on aurora contract details page
        Given I have document panel details
        When I clicked on document menu
        Then I check selected preview is retained in the document pannel

    @AURORA_CLM
    Scenario: TC49: Verify that uploaded pdf document is shown in the contract preview section
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with pdf document
        And I wait until file is uploaded in the contract details page
        And I clicked on save as draft button in the contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check uploaded document name in the metadata section
        And I check no data to preview message is not shown

    @AURORA_CLM
    Scenario: TC50: Verify that version number in the version list is changed to latest when contract is replaced with pdf document
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with pdf document
        And I wait until file is uploaded in the contract details page
        And I clicked on save as draft button in the contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check latest version number in the version dropdown

    @AURORA_CLM
    Scenario: TC51: Verify that version list count is not increased when contract is replaced with pdf document for repository draft status contract
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with pdf document
        And I wait until file is uploaded in the contract details page
        And I clicked on save as draft button in the contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check version list count in the aurora page

    @AURORA_CLM
    Scenario: TC52: Verify that uploaded scanned pdf document is shown in the contract preview section
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with scanned pdf document
        And I wait until file is uploaded in the contract details page
        And I clicked on save as draft button in the contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check uploaded document name in the metadata section
        And I check no data to preview message is not shown

    @AURORA_CLM
    Scenario: TC53: Verify that version number in the version list is changed to latest when contract is replaced with scanned pdf document
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with scanned pdf document
        And I wait until file is uploaded in the contract details page
        And I clicked on save as draft button in the contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check latest version number in the version dropdown

    @AURORA_CLM
    Scenario: TC54: Verify that version list count is not increased when contract is replaced with scanned pdf document for repository draft status contract
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with scanned pdf document
        And I wait until file is uploaded in the contract details page
        And I clicked on save as draft button in the contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check version list count in the aurora page

    @AURORA_CLM
    Scenario: TC55: Verify that uploaded random clm template document is shown in the contract preview section
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with random clm template document
        And I wait until file is uploaded in the contract details page
        And I clicked on save as draft button in the contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check uploaded document name in the metadata section
        And I check no data to preview message is not shown

    @AURORA_CLM
    Scenario: TC56: Verify that version number in the version list is changed to latest when contract is replaced with random clm template document
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with random clm template document
        And I wait until file is uploaded in the contract details page
        And I clicked on save as draft button in the contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check latest version number in the version dropdown

    @AURORA_CLM
    Scenario: TC57: Verify that version list count is not increased when contract is replaced with random clm template document for repository draft status contract
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with random clm template document
        And I wait until file is uploaded in the contract details page
        And I clicked on save as draft button in the contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check version list count in the aurora page

    @AURORA_CLM
    Scenario: TC58: Verify that uploaded minimum name and size random valid format document is shown in the contract preview section
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with minimum name and size random valid format document
        And I wait until file is uploaded in the contract details page
        And I wait until file is uploaded in the contract details page
        And I clicked on save as draft button in the contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check uploaded document name in the metadata section
        And I check no data to preview message is not shown

    @AURORA_CLM
    Scenario: TC59: Verify that version number in the version list is changed to latest when contract is replaced with minimum name and size random valid format document
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with minimum name and size random valid format document
        And I wait until file is uploaded in the contract details page
        And I wait until file is uploaded in the contract details page
        And I clicked on save as draft button in the contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check latest version number in the version dropdown

    @AURORA_CLM
    Scenario: TC60: Verify that version list count is not increased when contract is replaced with minimum name and size random valid format document for repository draft status contract
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with minimum name and size random valid format document
        And I wait until file is uploaded in the contract details page
        And I wait until file is uploaded in the contract details page
        And I clicked on save as draft button in the contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check version list count in the aurora page

    @AURORA_CLM
    Scenario: TC61: Verify that uploaded maximum name and size random valid format document is shown in the contract preview section
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with maximum name and size random valid format document
        And I wait until file is uploaded in the contract details page
        And I clicked on save as draft button in the contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check uploaded document name in the metadata section
        And I check no data to preview message is not shown

    @AURORA_CLM
    Scenario: TC62: Verify that version number in the version list is changed to latest when contract is replaced with maximum name and size random valid format document
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with maximum name and size random valid format document
        And I wait until file is uploaded in the contract details page
        And I clicked on save as draft button in the contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check latest version number in the version dropdown

    @AURORA_CLM
    Scenario: TC63: Verify that version list count is not increased when contract is replaced with maximum name and size random valid format document for repository draft status contract
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with maximum name and size random valid format document
        And I wait until file is uploaded in the contract details page
        And I clicked on save as draft button in the contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check version list count in the aurora page

    @AURORA_CLM
    Scenario: TC64: Verify that version number in the version list is changed to latest when contract is replaced with scanned pdf document
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with scanned pdf document
        And I wait until file is uploaded in the contract details page
        And I clicked on save as draft button in the contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check latest version number in the version dropdown

    @AURORA_CLM
    Scenario: TC65: Verify that uploaded content copying pdf document is shown in the contract preview section
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with content copying pdf document
        And I wait until file is uploaded in the contract details page
        And I clicked on save as draft button in the contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check uploaded document name in the metadata section
        And I check no data to preview message is not shown

    @AURORA_CLM
    Scenario: TC66: Verify that version number in the version list is changed to latest when contract is replaced with content copying pdf document
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with content copying pdf document
        And I wait until file is uploaded in the contract details page
        And I clicked on save as draft button in the contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check latest version number in the version dropdown

    @AURORA_CLM
    Scenario: TC67:  Verify that version list count is not increased when contract is replaced with content copying pdf document for repository draft status contract
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with content copying pdf document
        And I wait until file is uploaded in the contract details page
        And I clicked on save as draft button in the contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check version list count in the aurora page
   
#limitation
# Scenario: Verify that uploaded password protected docx document is shown in the contract preview section
# Then I navigate to contract details page
# When I replace contract with random password protected document
# Then I wait until file is uploaded in the contract details page
# Then I click on save button in the repository contract details page
# # Given I have repository details data,uploaded file name and version details
# When I click on redirect to aurora button
# Then I check user lands on aurora contract details page
# Then I check uploaded document name in the metadata section
# And I check no data to preview message is not shown
# Scenario: Verify that version number in the version list is changed to latest when contract is replaced with password protected docx document
# Then I check latest version number in the version dropdown
# Scenario: Verify that version list count is increased in the aurora page
# Then I check version list count in the aurora page
# Then I close aurora opened tab
