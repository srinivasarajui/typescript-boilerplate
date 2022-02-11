# /**
#  *
#  *
#  * @author r.sowmyashree
#  *
#  *
#  */

Feature: Documents

    #Manual Scenarios
    # 1. Verify that data replaced in repository is reflected in aurora page
    # 2. Verify that supporting document sections UI is matching with UX provided in jira
    # 3. Verify that respective uploaded format icon is shown below Contract subheader and supporting document subheader
    # 4. Verify that scroll is shown in the Document header section when there are more supporting documents added to the contract

    #Automation Scenarios

    Background: Login to CLM application and land on repository grid page
        Given I login to clm application
        When I select CLM product in product selection page
        And I click on manage contract tab
        And I click on repository sub tab
        And I lands on repository grid page

    @AURORA_CLM
    Scenario:TC1: Verify that user is allowed to navigate to document menu
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        Then I check user lands on document page

    @AURORA_CLM
    Scenario:TC2: Verify that user is allowed to collapse document pannel in document menu
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        And I click on expand or collapse document panel icon
        Then I check document panel is collapsed

    @AURORA_CLM
    Scenario:TC3: Verify that user is allowed to expand document pannel in document menu
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        And I click on expand or collapse document panel icon
        Then I check document panel is expanded

    @AURORA_CLM
    Scenario:TC4:Verify the supporting document feature is tested based on the expand or collapse document panel(random selection)
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        Then I select random document panel option

    @AURORA_CLM
    Scenario:TC5: Verify that contract document and supporting document are segregated separately below Document header
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        Then I check contract and supporting documents subheader

    @AURORA_CLM
    Scenario:TC6: Verify that contract title value is shown below the Contract subheader
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        Then I check contract title value is shown below contract subheader

    @AURORA_CLM
    Scenario:TC7: Verify that contract document is highlighted with legend(c icon) below Contract subheader
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        Then I check c icon to the contract document below contract subheader

    @AURORA_CLM
    Scenario:TC8: Verify that uploaded contract document name is shown below the Contract subheader
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        Then I check uploaded contract document name below contract subheader

    @AURORA_CLM
    Scenario:TC9: Verify that contract owner name is shown below the Contract subheader
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        Then I check contract owner name below contract subheader

    @AURORA_CLM
    Scenario:TC10: Verify that contract creation date is shown below the Contract subheader
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        Then I check contract creation date below contract subheader

    @AURORA_CLM
    Scenario:TC11: Verify that user is allowed to download contract document from download options in contract document card
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        Then I check download option for contract is clickable

    @AURORA_CLM
    Scenario:TC12: Verify that supporting document count in repository is matching with supporting document count shown in aurora
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        Then I check supporting document count is shown in the supporting document subheader

    @AURORA_CLM
    Scenario:TC13: Verify that supporting document name is shown below supporting document subheaders
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        Then I check entered supporting document name for all documents below supporting document subheader is shown

    @AURORA_CLM
    Scenario:TC14: Verify that supporting document name is shown in the document preview dropdown
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        Then I check entered supporting document name for all documents in the document preview dropdown is shown

    @AURORA_CLM
    Scenario:TC15: Verify that uploaded supporting document/file name is shown below supporting document subheader
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        Then I check uploaded supporting document name for all documents below supporting document subheader is shown

    @AURORA_CLM
    Scenario:TC16: Verify that contract owner name is shown below supporting documment subheader
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        Then I check contract owner name for all documents below supporting document subheader is shown

    #This feature is not yet implemented
    # #17. Verify that uploaded on date is shown below supporting document subheader
    # Then I check uploaded on date for all documents below supporting document subheader is shown

    @AURORA_CLM
    Scenario:TC19: Verify whether user gets remove(delete) alert popup when clicked on delete option in the individual supporting document card
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        And I click on delete option
        Then I check remove alert popup is displayed

    @AURORA_CLM
    Scenario:TC20: Verify whether remove alert popup is closed when user clicked on cancel button in the popup
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        And I click on cancel button
        Then I check remove alert popup is closed

    @AURORA_CLM
    Scenario:TC21: Verify that user is allowed to delete a particular document from the respective supporting document card
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        And I click on delete option
        And I click on remove button
        Then I check supporting document is deleted
        And I check success popup is displayed

    @AURORA_CLM
    Scenario:TC22: Verify whether user gets remove(delete) alert popup when clicked on delete all option in the supporting document actions icon
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        And I click on delete all option
        Then I check remove alert popup is displayed

    @AURORA_CLM
    Scenario:TC23: Verify whether remove alert popup is closed when user clicked on cancel button in the popup
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        And I click on cancel button
        Then I check remove alert popup is closed

    @AURORA_CLM
    Scenario:TC24: Verify that user is allowed to delete all the supporting document
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        And I click on remove button
        Then I check all the supporting document is deleted
        And I check success popup is displayed

    @AURORA_CLM
    Scenario:TC25: Verify that "There are no supporting documents to display" message is shown when there is no supporting documents in the contract
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        And I click on remove button
        And I check all the supporting document is deleted
        And I check success popup is displayed
        Then I check no supporting document message

    @AURORA_CLM
    Scenario:TC26: Verify that supporting document count is shown as zero when there is no supporting documents to the contract
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        And I click on remove button
        And I check all the supporting document is deleted
        And I check success popup is displayed
        And I check no supporting document message
        Then I check supporting document count as zero

    @AURORA_CLM
    Scenario:TC27: Verify that download all and delete all option is disabled to user when there is no supporting document to the contract
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        And I click on remove button
        And I check all the supporting document is deleted
        And I check success popup is displayed
        And I check no supporting document message
        And I check supporting document count as zero
        Then I check download all and delete all option is disabled

    #Scenario: Verify all the scenarios related to document preview section in aurora document page
    #Manual Scenarios
    #1. Verify that selected document and document shown in the document panel is matching or not
    #2. Verify that card is grayed out after clicked on that particular card.

    @AURORA_CLM
    Scenario:TC28: Verify that contract is shown in the document panel when contract card is selected below the Document header
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        And I clicked on contract document card below the document header
        Then I check selected contract document is shown in the document panel

    @AURORA_CLM
    Scenario:TC29: Verify that contract title and latest version is shown on the document pannel header
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        And I clicked on contract document card below the document header
        Then I check contract title and latest version is shown on the document panel header

    @AURORA_CLM
    Scenario:TC30: Verify that supporting document is shown in the document panel(both document preview dropdown and document preview) when supporting document card is selected below the Document header
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        And I clicked on contract document card below the document header
        Then I check document is reflected in the document panel

    @AURORA_CLM
    Scenario:TC31: Verify that ribbon message is shown each time when navigated to supporting document
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        And I clicked on contract document card below the document header
        Then I check supporting document related ribbon message is shown

    @AURORA_CLM
    Scenario:TC32: Verify that version list dropdown is not shown in the document preview dropdown when supporting document is selected
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        And I clicked on contract document card below the document header
        Then I check version list dropdown is not shown in the document panel

    @AURORA_CLM
    Scenario:TC33: Verify that supporting document is shown in the document panel(both document preview dropdown and document preview) when supporting document is selected from the document preview dropdown
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        Then I select document from the document preview dropdown and check document is reflected in the document panel

    @AURORA_CLM
    Scenario:TC34: Verify that supporting document related ribbon message disappears when user selects contract card or contract from the document preview dropdown
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I have repository details data,uploaded file name and supporting document details
        And I clicked on document menu
        And I select contract from random place in the document tab
        Then I check supporting document related ribbon message is not shown

    # *******************************************************************AURORA-1035 Starts**************************************************************************************

    # /**
    #  *
    #  *
    #  * @author somnath.k
    #  *
    #  *
    #  */

    # Manual Scenarios
    # Verify that download document content is matching with the uploaded document which is done during new supporting document creation in CLM
    # Verify that downloaded document name is matching with the uploaded document name which is done during new supporting document creation in CLM
    # Verify that downloaded document name extension is matching with the uploaded document extension which is done during new supporting document creation in CLM
    # Verify that an error message is shown corrupted supporting document is downloaded
    # Verify that an error message is shown when clicked on download button during server is down
    # Verify that user is allowed to download all formats of supporting document
    # Verify that user is allowed to download supporting document when clicked on download and immediately deleted it
    # Verify that null value is not displayed in the toaster message when supporting document is downloaded which is not having any supporting document name


    # Automation Scenarios

    @AURORA_CLM
    Scenario:Verify that user is allowed to see download icon for random individual document from supporting document card
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        Then I check download option available for random supporting document card

    @AURORA_CLM
    Scenario:Verify that user is allowed to download random individual document from supporting document card
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        Then I check download option available on random supporting document card is clickable
        And I check download related toaster message is shown

    @AURORA_CLM
    Scenario:Verify that download related toaster message is shown when clicked on randon download option from supporting document card
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I click on random download option from the supporting document card
        Then I check download related toaster message is shown

    @AURORA_CLM
    Scenario:Verify that supporting document name is shown in the toaster message is shown when clicked on randon download option from supporting document card
        When I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I click on download option based on document name from the supporting document card
        Then I check supporting document name is shown in the toaster message

    @AURORA_CLM
    Scenario:Verify that download option is disabled in the supporting document card when 3 dot icon is clicked for supporting document without attachment
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I navigate to Document page
        And I add supporting document without attachment
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        Then I check download option is disabled for supporting document without attachment



    # ******************************************************AURORA-1035 ENDS***************************************************************************************


    # *******************************************************************AURORA-991 Starts**************************************************************************************
    # Manual Scenarios
    # Verify that zip format file is downloaded when clicked on download all option
    # Verify that zip format file is downloaded with name as contract number
    # Verify that all the supporting documents are present inside zip format file


    @AURORA_CLM
    Scenario: Verify that user is allowed to download all the documents that are shown below supporting document subheader
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        Then I check download option shown for all document below supporting document subheader is clickable

    @AURORA_CLM
    Scenario: Verify that download all option is disabled when there is no supporting document added to contract
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
        And I clicked on document menu
        And I click on three dots of supporting document header
        Then I check download all option is disabled for no supporting document added to contract

    @AURORA_CLM
    Scenario: Verify that no document uploaded message is shown when clicked on download all option
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
        And I have new contract number from aurora
        And I close aurora opened tab
        And I land on grid page
        And I refresh the page
        And I search contract based on contract number in the grid
        And I view first contract from the grid
        And I navigate to Document page
        And I add supporting document without attachment
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I click on three dots of supporting document header
        And I click on download all option inside three dots
        Then I check no document uploaded message is shown

    @AURORA_CLM
    Scenario: Verify that more than one same document message is shown when clicked on download all option
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I click on three dots of supporting document header
        And I click on download all option inside three dots
        Then I check more than one same document message is shown

    @@AURORA_CLM
    Scenario: Verify that error message is not shown when there is an combination of both attached and not attached document and clicked on download all option
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
        And I have new contract number from aurora
        And I close aurora opened tab
        And I land on grid page
        And I refresh the page
        And I search contract based on contract number in the grid
        And I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I add supporting document without attachment
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I click on three dots of supporting document header
        And I click on download all option inside three dots
        Then I check no document uploaded message is not shown




    # *******************************************************************AURORA-991 Ends**************************************************************************************


    # ******************************Contract replace scenarios AURORA-606**************************************************************************************

    # /**
    #  *
    #  *
    #  * @author somnath.k
    #  *
    #  *
    #  */

    # Manual Scenarios
    # Assigned Replace Activity | Verify that on contract card click replace contract form contains all the details of contract card selected
    # Verify that selected card is highlighted when clicked on card in the LHS side of the page
    # Verify that selected card is not highlighted when clicked on card in the LHS side of the page and the document panel is collapsed
    # Assigned Replace Activity | Verify that user lands on document view page and latest contract version document is shown in the document preview panel when user refresh the page during replace document is in progress
    # Assigned Replace Activity | Verify that contract is not replaced with replace document when replace document process is canceled in between
    # Assigned Replace Activity | Verify that every time an new contract version is created after clicked on save button in the upload document section
    # Assigned Replace Activity | Verify that new contract version is not created when replace document process is cancel from the upload document section
    # Assigned Replace Activity |  Verify that replace document popup is shown when valid or invalid format document is dragged and dropped in the browse document box during replace document is in progress
    # Assigned Replace Activity |  Verify that latest document gets uploaded when valid format document is dragged and dropped in the browse document box during replace document is in progress
    # Assigned Replace Activity |  Verify that error popup is shown when user drag and drop invalid format document and accepts replace document popup during replace document is in progress
    # Assigned Replace Activity |  Verify that previous original contract document details is shown in the browse document box when error popup is accepted during replace document is in progress
    # Assigned Replace Activity |  Verify that user lands normal document view page without any UI flow changes when original contract document is replaced with document having more than 40mb size
    # Verify that replace button is not present inside contract card for any contract status when replace document related activity is not assigned to user
    # Verify that replace button is not present in the replace contract document form when replace document related activity is not assigned to user
    # Verify that user is allowed to download new replaced document after clicked on save button in the upload document section



    # Automation Scenarios

    @AURORA_CLM
    Scenario: Verify that digital signed copy field is removed from the contract details page for existing repository draft status contract
        When I search for repository draft status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check digital signed copy field is not shown

    @AURORA_CLM
    Scenario: Verify that digital signed copy field is removed from the contract details page for existing pending publish status contract
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check digital signed copy field is not shown

    @AURORA_CLM
    Scenario: Verify that digital signed copy field is removed from the contract details page for existing active status contract
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check digital signed copy field is not shown

    @AURORA_CLM
    Scenario: Verify that digital signed copy field is removed from the contract details page for existing inactive status contract
        When I search for inactive status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check digital signed copy field is not shown

    @AURORA_CLM
    Scenario: Verify that digital signed copy field is removed from the contract details page for existing expired status contract
        When I search for expired status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check digital signed copy field is not shown

    @AURORA_CLM
    Scenario: Verify that digital signed copy field is removed from the contract details page for existing termination notice served status contract
        When I search for termination notice served status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check digital signed copy field is not shown

    @AURORA_CLM
    Scenario: Verify that digital signed copy field is removed from the contract details page for existing archived status contract
        When I search for archived status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check digital signed copy field is not shown

    @AURORA_CLM
    Scenario: Verify that digital signed copy field is removed from the contract details page for new contract that is in contract creation process
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        Then I check digital signed copy field is not shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that replace button is present in the document menu for contract card for existing repository draft status contract
        When I search for repository draft status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I click on 3 dots inside contract card
        Then I check replace button is shown to user

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that replace button is present in the document menu for contract card for existing pending publish status contract
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I click on 3 dots inside contract card
        Then I check replace button is shown to user

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that replace button is present in the document menu for contract card for existing active status contract
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I click on 3 dots inside contract card
        Then I check replace button is shown to user

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that replace button is present in the document menu for contract card for existing expired status contract
        When I search for expired status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I click on 3 dots inside contract card
        Then I check replace button is shown to user

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that replace button is present in the document menu for contract card for existing inactive status contract
        When I search for inactive status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I click on 3 dots inside contract card
        Then I check replace button is shown to user

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that replace button is present in the document menu for contract card for existing termination notice served status contract
        When I search for termination notice served status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I click on 3 dots inside contract card
        Then I check replace button is shown to user

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that replace button is not shown in the document menu for contract card for existing archived status contract
        When I search for archived status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I click on 3 dots inside contract card
        Then I check replace button is not shown to user

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that on contract card click replace contract form towards right side of the page is shown
        When I search for any status existing contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I clicked on contract document card below the document header
        Then I check replace contract form section is shown towards right side of the page

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that on contract card click document preview panel dropdown is not shown in replace contract form
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I clicked on contract document card below the document header
        Then I check document preview panel dropdown is not shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that on contract card click replace document icon is shown in the replace contract form section inside 3 dots
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I clicked on contract document card below the document header
        And I click on 3 dots icon on the replace contract form section
        Then I check replace document icon is shown in the replace contract form section inside 3 dots

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that on contract card click download document icon is shown in the replace contract form section
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I clicked on contract document card below the document header
        Then I check download icon is shown in the replace contract form section

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that on contract card click replace document option is not shown in the replace contract form section
        When I search for archived status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I clicked on contract document card below the document header
        Then I check replace document icon is not shown in the replace contract form section inside 3 dots

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that on contract card click download document icon is shown in the replace contract form section for archived status contract
        When I search for archived status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I clicked on contract document card below the document header
        Then I check download icon is shown in the replace contract form section

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that latest contract document is shown in the document preview panel when replace contract form is closed
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I clicked on contract document card below the document header
        And I click on cross icon at header of the replace contract form
        Then I check original contract document is not replaced with recent document

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that replace contract form is not retained in the document preview panel when user refresh the page
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I clicked on contract document card below the document header
        And I refresh the page
        And I land on aurora document menu page
        Then I check replace contract form section is not shown towards right side of the page

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that on contract card click replace contract form is shown on RHS for any existing contract status when document preview panel is collapsed
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I click on expand or collapse document panel icon
        And I clicked on contract document card below the document header
        Then I check replace contract form section is shown towards right side of the page

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that document panel collapse setting is retained when document panel is collapsed,clicked on contract card and then replace contract form is closed
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I click on expand or collapse document panel icon
        And I clicked on contract document card below the document header
        And I click on cross icon at header of the replace contract form
        Then I check document preview panel dropdown is not shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that expand/collapse document panel is disabled when user is already on replace contract form
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I clicked on contract document card below the document header
        Then I check expand or collapse document panel icon is disabled

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that on view document link click inside contract card contract document is viewed in the document preview panel
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I click on view document link of contract cards
        Then I check contract document is viewed in the document preview panel

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that replace button for replace contract document is not shown in the supporting document card
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I navigate to Document page
        And I add multiple supporting documents with all the formats in the repository contract
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I click on 3 dots inside supporting document card
        Then I check replace button is not shown to user

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that replace document popup is shown when user replace original contract with valid document
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I click on 3 dots inside contract card
        And I click on replace button inside contract card 3 dots icon
        And I click on replace file link inside browse document box
        Then I check replace document popup is shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that replace contract form is shown when clicked on cancel button in replace document popup
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I click on 3 dots inside contract card
        And I click on replace button inside contract card 3 dots icon
        And I click on replace file link inside browse document box
        And I click on cancel button from the replace document popup
        Then I check replace contract form section is shown towards right side of the page

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that replace document is in progress page is not shown when user closes all the type of error popup
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with invalid random format document
        And I clicked on ok button in the error popup
        Then I check replace document progress bar is not shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that latest contract version document is shown in the document preview panel when user closes all the type of error popup
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with invalid random format document
        And I clicked on ok button in the error popup
        And I click on cross icon at the top header of the upload document section
        And I click on continue button in discard the changes popup
        Then I check original contract document is not replaced with recent document

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that error popup related to invalid format is shown when contract document is replaced with random invalid format like image,exe,json,property file,java file,excel,zip..etc
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with invalid random format document
        Then I check invalid format error popup is shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that invalid format popup disappears when clicked on ok button in the error popup
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with invalid random format document
        And I clicked on ok button in the error popup
        Then I check invalid format error popup disappears

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that error popup related to blank document or zero kb is shown when blank document or zero kb document is replaced
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with blank or zero kb document
        And I wait until file is uploaded successfully
        Then I check blank document or zero kb related error popup is shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that blank document or zero kb related error popup disappears when clicked on ok button in the popup
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with blank or zero kb document
        And I wait until file is uploaded successfully
        And I clicked on ok button in the error popup
        Then I check blank document or zero kb related error popup disappears

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that error popup is shown when random valid format(doc,docx and pdf) document which having more than 40mb size is replaced with previous contract document
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid random more than 40 mb document
        And I wait until file is uploaded successfully
        Then I check file size should be less than 40 mb error popup is shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that error popup related to file size more than 40mb disappears when clicked on ok button in the popup
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid random more than 40 mb document
        And I wait until file is uploaded successfully
        And I clicked on ok button in the error popup
        Then I check file size greater than 40mb error popup disappears

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that error popup related to password protected file is shown when original contract document is replaced with passowrd protected document
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid passowrd protected document
        And I wait until file is uploaded successfully
        Then I check error popup related to passowrd protected document is shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that upload document section is shown instead of document preview panel during replacing orginal document with another document
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid random format document
        Then I check upload document section is shown towards right side of the page

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that user gets file upload is in progress popup when random valid document is uploaded during replace document is in progress
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid 40 mb document
        And I replace in progress document with another valid random document
        Then I check file upload in prgress popup is shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that user gets file upload is in progress popup when random invalid document is uploaded during replace document is in progress
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid 40 mb document
        And I replace in progress document with another random invalid document
        Then I check file upload in prgress popup is shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that discard the changes popup is shown when clicked on cross icon at the top header of the upload document section during replace document is in progress
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid 40 mb document
        And I click on cross icon at the top header of the upload document section
        Then I check discard the changes popup is shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that replace document is in progress when user clicks on cross icon and cancels the discard changes popup
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid 40 mb document
        And I click on cross icon at the top header of the upload document section
        And I clicked on cancel button in the discard the changes popup
        Then I check replace document progress bar is shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that document preview panel with latest contract is shown when replace document is in progress is canceled by clicking on cross icon and accepting discard changes popup
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid 40 mb document
        And I click on cross icon at the top header of the upload document section
        And I click on continue button in discard the changes popup
        Then I check original contract document is not replaced with recent document

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that discard the changes popup is shown when clicked on cancel button at the bottom of the page during replace document is in
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid 40 mb document
        And I clicked on cancel button at the bottom of upload document section
        Then I check discard the changes popup is shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that document preview panel with latest contract is shown when replace document is in progress is canceled by click on cancel button at bottom and by accepting discard changes popup
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid 40 mb document
        And I clicked on cancel button at the bottom of upload document section
        And I click on continue button in discard the changes popup
        Then I check original contract document is not replaced with recent document

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that replace document is in progress when user clicks cancel button at bottom and cancels the discard changes popup
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid 40 mb document
        And I clicked on cancel button at the bottom of upload document section
        And I clicked on cancel button in the discard the changes popup
        Then I check replace document progress bar is shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that loading icon is shown to user in the browse document box when replace document is in progress
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid 40 mb document
        Then I check loader icon is shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that selected document name is shown to user in the browse document box when replace document is in progress
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid 40 mb document
        Then I check uploaded file name is shown in the browse document box

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that please wait.. popup is shown when clicked on save button at the bottom of the page during replace document is in progress
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid 40 mb document
        And I click on save button at the bottom of upload document section
        Then I check please wait popup is shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that discard the changes popup is shown when clicked on any action item in the page during replace document is in progress
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid 40 mb document
        And I click on disabled section on ui
        Then I check discard the changes popup is shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that document preview panel with latest contract is shown when replace document is in progress is canceled by click on any action item in the page and by accepting discard changes popup
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid 40 mb document
        And I click on disabled section on ui
        And I click on continue button in discard the changes popup
        Then I check original contract document is not replaced with recent document

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that replace document is in progress when user clicks on any action item in the page and cancels the discard changes popup
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid 40 mb document
        And I click on disabled section on ui
        And I clicked on cancel button in the discard the changes popup
        Then I check replace document progress bar is shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that user is not allowed to perform any other actions except actions related to replace document when upload document page is shown towards RHS
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid 40 mb document
        And I click on disabled section on ui
        Then I check discard the changes popup is shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that previous document will be replaced ribbon is shown in the upload document page during replace document is in progress
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid 40 mb document
        Then I check previous document will be replaced ribbon is shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that previous document will be replaced ribbon is shown in the upload document page after replaced document is uploaded successfully
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid 40 mb document
        And I wait until file is uploaded successfully
        Then I check previous document will be replaced ribbon is shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that user is allowed to replace contract document with doc format document in new contract page
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with doc format document
        And I wait until file is uploaded successfully
        And I click on save button at the bottom of upload document section
        And I land on aurora document menu page
        Then I check original contract document is replaced with recent document
        And I check replaced document is shown in the document preview panel

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that progress bar is disappeared after replaced document is uploaded successfully
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with doc format document
        And I wait until file is uploaded successfully
        Then I check replace document progress bar is not shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that loader icon is not shown after replaced document is uploaded successfully
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with doc format document
        And I click on replace button in the replace document popup
        And I wait until file is uploaded successfully
        Then I check replace file link is shown inside browse document box

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that green tick mark icon is shown in the browse document box after replaced document is uploaded successfully
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with doc format document
        And I wait until file is uploaded successfully
        Then I check green tick mark is shown

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that replace file link is enabled to user after replaced document is uploaded successfully
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with doc format document
        And I wait until file is uploaded successfully
        Then I check replace file link is shown inside browse document box

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that user is allowed to replace the original contract document again after replaced document is uploaded successfully
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with doc format document
        And I wait until file is uploaded successfully
        And I replace in progress document with another valid random document
        And I wait until file is uploaded successfully
        Then I check replaced document name is shown in the browse document box

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that user is allowed to replace original contract document with docx format document
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with docx format document
        And I wait until file is uploaded successfully
        And I click on save button at the bottom of upload document section
        And I land on aurora document menu page
        Then I check original contract document is replaced with recent document
        And I check replaced document is shown in the document preview panel

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that user is allowed to replace original contract document with pdf format document
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with pdf format document
        And I wait until file is uploaded successfully
        And I click on save button at the bottom of upload document section
        And I land on aurora document menu page
        Then I check original contract document is replaced with recent document
        And I check replaced document is shown in the document preview panel

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that user is allowed to replace original contract document with scanned pdf format document
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with scanned pdf format document
        And I wait until file is uploaded successfully
        And I click on save button at the bottom of upload document section
        And I land on aurora document menu page
        Then I check original contract document is replaced with recent document
        And I check replaced document is shown in the document preview panel

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that user is allowed to replace original contract document with content copying pdf format document
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with content copying pdf format document
        And I wait until file is uploaded successfully
        And I click on save button at the bottom of upload document section
        And I land on aurora document menu page
        Then I check original contract document is replaced with recent document
        And I check replaced document is shown in the document preview panel

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that user is allowed to replace original contract document with random clm document
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with random clm document
        And I wait until file is uploaded successfully
        And I click on save button at the bottom of upload document section
        And I land on aurora document menu page
        Then I check original contract document is replaced with recent document
        And I check replaced document is shown in the document preview panel

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that user is allowed to replace original contract document with random valid format document which is having image inside it
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with random valid format document having image inside it
        And I wait until file is uploaded successfully
        And I click on save button at the bottom of upload document section
        And I land on aurora document menu page
        Then I check original contract document is replaced with recent document
        And I check replaced document is shown in the document preview panel

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that user is allowed to replace original contract document with minimum name and size random valid format document
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with minimum name and size random valid format document
        And I wait until file is uploaded successfully
        And I click on save button at the bottom of upload document section
        And I land on aurora document menu page
        Then I check original contract document is replaced with recent document
        And I check replaced document is shown in the document preview panel

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that user is allowed to replace original contract document with random valid document in which there is no space in between the character
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with randon valid document in which no space in between the character
        And I wait until file is uploaded successfully
        And I click on save button at the bottom of upload document section
        And I land on aurora document menu page
        Then I check original contract document is replaced with recent document
        And I check replaced document is shown in the document preview panel

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that user is allowed to replace original contract document with print pdf document
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with print pdf document
        And I wait until file is uploaded successfully
        And I click on save button at the bottom of upload document section
        And I land on aurora document menu page
        Then I check original contract document is replaced with recent document
        And I check replaced document is shown in the document preview panel

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that user is allowed to replace original contract document with maximum name and size random valid format document in new contract page
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with maximum name and size random valid format document
        And I wait until file is uploaded successfully
        And I click on save button at the bottom of upload document section
        And I land on aurora document menu page
        Then I check original contract document is replaced with recent document
        And I check replaced document is shown in the document preview panel

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that replaced new document details is shown in the contract card after clicked on save button
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with maximum name and size random valid format document
        And I wait until file is uploaded successfully
        And I click on save button at the bottom of upload document section
        And I land on aurora document menu page
        Then I check original contract document is replaced with recent document

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that replaced new document is shown as latest contract in the document preview panel after clicked on save button
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with maximum name and size random valid format document
        And I wait until file is uploaded successfully
        And I click on save button at the bottom of upload document section
        And I land on aurora document menu page
        Then I check replaced document is shown in the document preview panel

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that replaced new document name is shown in the document preview panel document after clicked on save button
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with maximum name and size random valid format document
        And I wait until file is uploaded successfully
        And I click on save button at the bottom of upload document section
        And I land on aurora document menu page
        Then I check replaced document is shown in the document preview panel

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that replaced new document details is not shown in the contract card when clicked on cancel button at bottom and accepeted the discard the changes popup
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with docx format document
        And I wait until file is uploaded successfully
        And I clicked on cancel button at the bottom of upload document section
        And I click on continue button in discard the changes popup
        And I land on aurora document menu page
        Then I check original contract document is not replaced with recent document

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that user is allowed to replace original contract document with valid random format document from the contract card
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid random format document
        And I wait until file is uploaded successfully
        And I click on save button at the bottom of upload document section
        And I land on aurora document menu page
        Then I check original contract document is replaced with recent document
        And I check replaced document is shown in the document preview panel

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that user is allowed to replace original contract document with valid random format document for new contract
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
        And I clicked on document menu
        And I land on aurora document menu page
        And I replace original contract document with valid random format document
        And I wait until file is uploaded successfully
        And I click on save button at the bottom of upload document section
        And I land on aurora document menu page
        Then I check original contract document is replaced with recent document
        And I check replaced document is shown in the document preview panel

    @AURORA_CLM
    Scenario: Assigned Replace Activity | Verify that user is allowed to replace original contract document with valid random format document from replace contract form that is shown in the RHS
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I land on aurora document menu page
        And I clicked on contract document card below the document header
        And I replace contract document with valid random format document from replace contract form section
        And I wait until file is uploaded successfully
        And I click on save button at the bottom of upload document section
        And I land on aurora document menu page
        Then I check original contract document is replaced with recent document
        And I check replaced document is shown in the document preview panel

# ****************************************************************************ocr related scenarios************************************************************************************************************

# Scenario: Assigned Replace Activity | Verify whether loader icon is available when original contract document is replaced with pdf file
#     When I search for random status existing contract except archived status
#     And I view first contract from the grid
#     And I click on redirect to aurora button
#     And I land on aurora contract details page
#     And I clicked on document menu
#     And I land on aurora document menu page
#     And I replace original contract document with pdf format document
#     And I wait until file is uploaded successfully
#     And I click on save button at the bottom of upload document section
#     Then I check loader icon is available

# Scenario: Assigned Replace Activity | Verify whether user gets a success toast message on ocr successful
#     When I search for random status existing contract except archived status
#     And I view first contract from the grid
#     And I click on redirect to aurora button
#     And I land on aurora contract details page
#     And I clicked on document menu
#     And I land on aurora document menu page
#     And I replace original contract document with pdf format document
#     And I wait until file is uploaded successfully
#     And I click on save button at the bottom of upload document section
#     Then I see ocr success field icon
#     And I see success toast message

# Scenario: Assigned Replace Activity | Verify whether user gets a success toast message when original contract document is replaced with secured pdf file
#     When I search for random status existing contract except archived status
#     And I view first contract from the grid
#     And I click on redirect to aurora button
#     And I land on aurora contract details page
#     And I clicked on document menu
#     And I land on aurora document menu page
#     And I replace original contract document with content copying pdf format document
#     And I wait until file is uploaded successfully
#     And I click on save button at the bottom of upload document section
#     Then I see ocr success field icon
#     And I see success toast message

# Scenario: Assigned Replace Activity | Verify whether user gets a success toast message when original contract document is replaced with scanned pdf file
#     When I search for random status existing contract except archived status
#     And I view first contract from the grid
#     And I click on redirect to aurora button
#     And I land on aurora contract details page
#     And I clicked on document menu
#     And I land on aurora document menu page
#     And I replace original contract document with scanned pdf format document
#     And I wait until file is uploaded successfully
#     And I click on save button at the bottom of upload document section
#     Then I see ocr success field icon
#     And I see success toast message

# Scenario: Assigned Replace Activity | Verify whether user gets a success toast message when original contract document is replaced with PDF file (caps extension ie .PDF)
#     When I search for random status existing contract except archived status
#     And I view first contract from the grid
#     And I click on redirect to aurora button
#     And I land on aurora contract details page
#     And I clicked on document menu
#     And I land on aurora document menu page
#     And I replace original contract document with caps PDF format document
#     And I wait until file is uploaded successfully
#     And I click on save button at the bottom of upload document section
#     Then I see ocr success field icon
#     And I see success toast message

# Scenario: Assigned Replace Activity | Verify whether user gets a success toast message when original contract document is replaced with pdf file with more than 10mb
#     When I search for random status existing contract except archived status
#     And I view first contract from the grid
#     And I click on redirect to aurora button
#     And I land on aurora contract details page
#     And I clicked on document menu
#     And I land on aurora document menu page
#     And I replace original contract document with pdf file greater than 10mb
#     And I wait until file is uploaded successfully
#     And I click on save button at the bottom of upload document section
#     Then I see ocr success field icon
#     And I see success toast message

# Scenario: Assigned Replace Activity | Verify whether user gets a success toast message when original contract document is replaced with graphical pdf file
#     When I search for random status existing contract except archived status
#     And I view first contract from the grid
#     And I click on redirect to aurora button
#     And I land on aurora contract details page
#     And I clicked on document menu
#     And I land on aurora document menu page
#     And I replace original contract document with with graphical pdf document
#     And I wait until file is uploaded successfully
#     And I click on save button at the bottom of upload document section
#     Then I see ocr success field icon
#     And I see success toast message

# Scenario: Assigned Replace Activity | Verify that user does not get a loader icon when original contract document is replaced with docx
#     When I search for random status existing contract except archived status
#     And I view first contract from the grid
#     And I click on redirect to aurora button
#     And I land on aurora contract details page
#     And I clicked on document menu
#     And I land on aurora document menu page
#     And I replace original contract document with docx format document
#     And I wait until file is uploaded successfully
#     And I click on save button at the bottom of upload document section
#     Then I check loader icon is not available
#     And I dont see success toast message

# Scenario: Assigned Replace Activity | Verify that user does not get a loader icon when original contract document is replaced with doc file
#     When I search for random status existing contract except archived status
#     And I view first contract from the grid
#     And I click on redirect to aurora button
#     And I land on aurora contract details page
#     And I clicked on document menu
#     And I land on aurora document menu page
#     And I replace original contract document with doc format document
#     And I wait until file is uploaded successfully
#     And I click on save button at the bottom of upload document section
#     Then I check loader icon is not available
#     And I dont see success toast message







