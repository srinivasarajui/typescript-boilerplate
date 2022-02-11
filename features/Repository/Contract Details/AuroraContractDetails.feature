# /**
#  * The feature file is used to automate the entire contract details scenarios
#  *
#  * @author somnath.k
#  *
#  *
#  */

Feature: Aurora Contract Details Page

    # User Story AURORA-96:-Verify scenarios related to save as draft contract


    #Manual Scenario
    # 1. Verify that UI developed is matching with UX design provided in the jira.
    # 2. Verify that save as draft functionality is working in all the recommended resolution.
    # 3. Verify that save as draft functionality is working in all the recommended browser.
    # 4. Verify that save as draft button is shown for existing contract which is in repository draft status and its source is authoring
    # 5. Verify that user is allowed to save contract which is in repository draft status and its source authoring as draft from aurora contract details page
    # 6. Verify that minimum fields which are mandatory for save as draft is shown as mandatory when those fields are made as non mandatory from step1.
    # 7. Verify that there is no impact on save as draft functionality when save as draft is done from the client who is not using confidentiality feature(folder concept).
    # 8. Verify that there is no impact on save as draft functionality when minimum mandatory fields are made as non mandatory from step1 and save as draft is done from the client who is not using confidentiality feature(folder concept).
    # 9. Verify that focus is shown on first unfilled mandatory field when clicked on save as draft button
    # 10. Verify that contract which is not filled with any fields is not saved as draft when clicked on discard button from the discard popup
    # 11. Verify that filled data in the aurora contract details page during save as draft operation is retained when the contract is viewed for second time
    # 12. Verify that all the fields modified in the repository draft status contract is retained when the same contract is viewed for second time
    # 13. Verify that session time out popup is shown when the session is expired and clicked on save as draft button.
    # 14. Verify that session time out popup is shown when the session is expired and refreshed the page
    # 15. Verify that user lands on login page once the session time out popup is accepted
    # 16. Verify that 503 error page is shown to user when the server is down and clicked on save as draft button
    # 17. Verify that 503 error page is shown to user when the server is down and refreshed the page
    # 18. Verify that contract details page is not accessible to user who is not having access to the scope
    # 19. Verify that contract details page is not accessible to user who is not having access to upload contract activity
    # 20. Verify that contract details page is not accessible to user who is not having access to the repository module
    # 21. Verify that contract base version is created in the db when first time save as draft is done
    # 21. Verify that another contract base version is not created in the db when the same contract is saved as draft for multiple times
    # 22. Verify that contract saved as draft from aurora is searchable from the search module
    # 23. Verify that contract saved as draft from aurora is shown in the reports module



    #Automation Scenario

    # All mandatory popup is handled yet bcoz we are not sure whether the popup will be removed or message will be changed
    Background: Login to CLM application and land on repository grid page
        Given I login to clm application
        When I select CLM product in product selection page
        And I click on manage contract tab
        And I click on repository sub tab
        And I lands on repository grid page

    @AURORA_CLM
    Scenario: TC1: Verify that save as draft button is present during new contract creation
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        Then I check save as draft button is present

    @AURORA_CLM
    Scenario: TC2: Verify that contract status is not shown in the header when the contract is not saved or saved as draft
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        Then I check repository draft status is not shown

    @AURORA_CLM
    Scenario: TC3: Verify that contract number is not shown in the header when the contract is not saved or saved as draft
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        Then I check contract number is not generated in the header

    @AURORA_CLM
    Scenario: TC4: Verify that bookmark icon is not shown in the header when the contract is not saved or saved as draft
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        Then I check bookmark icon is not shown in the header

    @AURORA_CLM
    Scenario: TC5: Verify that other menus are not enabled to user except contract details when the contract is not saved or saved as draft
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        Then I check other menus are disabled except contract details menu

    # yet to decide behavior remove scenario
    # Scenario: Verify that amendment operation is disabled to user when the contract is not saved or saved as draft
    # Then I check amendment operation is not shown

    @AURORA_CLM
    Scenario: TC6: Verify that supporting document operation is disabled to user when the contract is not saved or saved as draft
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        Then I check supporting document operation is not shown

    # yet to decide behavior remove scenario
    # Scenario: Verify that contracting party section is disabled to user when the contract is not saved or saved as draft
    # Then I check contracting party section is not shown

    @AURORA_CLM
    Scenario: TC7: Verify that mandatory message is shown for minimum mandatory fields like contract category and folder when clicked on save as draft button without filling any fields
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I clear contract category field value
        And I clicked on save as draft button in the aurora contract details page
        Then I check mandatory message for minimum mandatory fields

    @AURORA_CLM
    Scenario: TC8: Verify that user is unable to save contract as draft when contract category field is filled and folder is left blank
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I clicked on save as draft button in the aurora contract details page
        Then I check mandatory message is shown for folder field

    @AURORA_CLM
    Scenario: TC9: Verify that user is unable to save contract as draft when folder field is filled and contract category field is left blank
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I clear contract category field value
        And I enter folder field in the aurora contract details page
        And I clicked on save as draft button in the aurora contract details page
        Then I check mandatory message is shown for contract category field

    # Cancel behavior in save as draft is not yet defined so skipping implementation
    # Scenario: Verify that user is allowed to cancel the new contract creation from the aurora contract details page
    # When I clicked on cancel button the aurora contract details page
    # Scenario: Verify that discard contract popup is shown when clicked on cancel button after any changes done in the contract details page
    # Then I check discard contract popup is shown
    # Scenario: Verify that filled data is not lost when clicked on cancel button from the discard contract popup.
    # When I clicked on cancel button from the discard contract popup
    # Then I check filled data is retained in the aurora contract details page
    # When I clicked on cancel button the aurora contract details page
    # And I clicked on discard button from the discard contract popup
    # Then I check contract entry is not shown in the grid

    # Commented few lines bcoz of no behavior of cancel and gird
    # Scenario: Verify that user is allowed to save contract as draft when minimum mandatory fields are filled and clicked on save as draft button.
    # When I clicked on upload contract in aurora button
    # Then I check new contract page is shown
    # Then I fill all the fields and upload random valid document
    # Then I wait until file is uploaded successfully
    # When I clicked on continue button in new contract page
    # Then I check user lands on aurora contract details page
    # Then I check save as draft button is present

    @AURORA_CLM
    Scenario: TC10: Verify that contract status is changed to repository draft after clicked on save as draft button
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

    @AURORA_CLM
    Scenario: TC11: Verify that contract number is generated after clicked on save as draft button.
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
        Then I check contract number is generated in the header

    @AURORA_CLM
    Scenario: TC12: Verify that bookmark icon is shown in the header after clicked on save as draft button
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
        Then I check bookmark icon is shown in the header

    # yet to decide behavior
    # Scenario: Verify that amendment operation is enabled to user after clicked on save as draft button
    # Then I check amendment operation is shown
    @AURORA_CLM
    Scenario: TC13: Verify that supporting document operation is enabled to user when the contract is saved or saved as draft
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
        Then I check supporting document operation is shown

    # yet to decide behavior
    # Scenario: Verify that contracting party section is enabled to user when the contract is not saved or saved as draft
    # Then I check contracting party section is shown
    @AURORA_CLM
    Scenario: TC14: Verify that user lands on the contract details page when clicked on save as draft button
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I fill minimum mandatory fields
        And I clicked on save as draft button in the aurora contract details page
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC15: Verify that save as draft button is enabled until contract status is repository draft
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I fill minimum mandatory fields
        And I clicked on save as draft button in the aurora contract details page
        And I land on aurora contract details page
        Then I check save as draft button is present

    @AURORA_CLM
    Scenario: TC16: Verify that contract saved as draft is shown in the grid
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
        Then I check contract entry is shown in the top in the grid

    @AURORA_CLM
    Scenario: TC17: Verify that contract saved as draft is searchable based on contract number in the grid
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
        Then I check contract entry is shown in the grid

    @AURORA_CLM
    Scenario: TC18: Verify that contract entry is shown in the top in the grid
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
        Then I check contract entry is shown in the grid

    @AURORA_CLM
    Scenario: TC19: Verify that contract saved as draft is search able based on contract category in the grid
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
        And I search contract based on contract category in the grid
        Then I check contract entry is shown in the grid

    @AURORA_CLM
    Scenario: TC20: Verify that save as draft button is enable to user when the contract which is saved as draft is viewed for the second time
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
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check save as draft button is present


    @AURORA_CLM
    Scenario: TC21: Verify that user is allowed to save contract as draft by filling all the fields in the aurora contract details page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I fill all the aurora contract details and click on save as draft button
        And I land on aurora contract details page
        And I have new contract number from aurora
        And I close aurora opened tab
        And I land on grid page
        And I search contract based on contract number in the grid
        Then I check contract entry is shown in the grid

    @AURORA_CLM
    Scenario: TC22: Verify that user is allowed to save contract as draft by modifying all the fields in the aurora contract details page
        When I search for repository draft status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I fill all the aurora contract details and click on save as draft button
        And I land on aurora contract details page
        And I have new contract number from aurora
        And I close aurora opened tab
        And I close the viewed contract
        And I land on grid page
        And I search contract based on contract number in the grid
        Then I check contract entry is shown in the grid

    @AURORA_CLM
    Scenario: TC23: Verify that save as draft button is not present for contract which is in pending publish status
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check save as draft button is not present

    @AURORA_CLM
    Scenario: TC24: Verify that save as draft button is not present for contract which is in active status
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check save as draft button is not present

    @AURORA_CLM
    Scenario: TC25: Verify that save as draft button is not present for contract which is in inactive status
        When I search for inactive status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check save as draft button is not present

    @AURORA_CLM
    Scenario: TC26: Verify that save as draft button is not present for contract which is in expired status
        When I search for expired status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check save as draft button is not present

    @AURORA_CLM
    Scenario: TC27: Verify that save as draft button is not present for contract which is in termination notice served status
        When I search for termination notice served status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check save as draft button is not present

    @AURORA_CLM
    Scenario: TC28: Verify that save as draft button is present for existing contract which is in repository draft status
        When I search for repository draft status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check save as draft button is present

    @AURORA_CLM
    Scenario: TC29: Verify that save as draft button is not present for contract which is in archived status
        When I search for archived status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check save as draft button is not present

    #*************************** User Story AURORA-96:- ENDS ***********************************************************


    # /**
    #  *
    #  *
    #  * @author Sowmyashree R V
    #  *
    #  *
    #  */

    # User Story AURORA-49:-Verify scenarios related to OCR

    #Manual Scenarios
    #1.Verify whether loader icon is available beside right hand side of the filename when the new pdf file is uploaded
    #2.Verify whether user is able to see thumbnail with inprogress message when hover on loader icon
    #3.Make sure the ocr server is down and verify whether user is getting a failure status field icon and failure toast message
    #4.Check whether user gets ocr process unsuccessful thumbnail when hover on failure status field icon
    #5.Verify that previous ocr call is not impacted when browser refresh is done before ocr call is completed during new contract creation process
    #6.Verify that ocr call is not triggered again when browser refresh is done after ocr call is completed
    #7.Verify that ocr success or failure toaster is not shown in the select type subtype page when users navigates to previous page from contract details page
    #8.Verify that ocr success or failure toaster is not shown in the grid page when users navigates to previous page from contract details page
    #9.Verify that ocr call is working for cloned contract after user lands on new aurora contract details page
    #10.Verify that ocr call runs in the background when save as draft is done before ocr call is completed
    #11.Verify that ocr success or failure call is shown in the document menu for existing contract when user switches to document menu before ocr call is completed
    #12.Verify that loader icon is shown towards right side of digital signed copy metadata when user switches between contract details and document menu before ocr call is completed
    #13.Verify that ocr success or failure icon is shown towards right side of digital signed copy metadata when user switches between contract details and document menu after ocr call is completed
    #14.Verify that contract which are ocr'ed successfully should be searchable in the search module based on the contract document content
    #15.verify that contract which are not ocr'ed successfully should not be searchable in the search module based on the contract document content
    #16.Verify that ocr success or failure toaster message should not be shown in the grid when new contract creation is canceled before ocr call is completed
    #17.Verify that ocr status is shown in the contract details page when contract is saved as draft and it is closed before the ocr call is completed and then same contract is viewed in aurora


    #Automation scenarios

    @AURORA_CLM
    Scenario:TC30: Verify whether loader icon is available when a new pdf file is uploaded
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        Then I check loader icon is available


    @AURORA_CLM
    Scenario:TC31: Verify whether user gets a success toast message on ocr successful
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        Then I see ocr success field icon
        And I see success toast message


    @AURORA_CLM
    Scenario:TC32: Verify whether user gets a success toast message when a secured pdf file is uplaoded
        # When I close aurora opened tab
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload content copying pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        Then I see ocr success field icon
        And I see success toast message


    @AURORA_CLM
    Scenario:TC33: Verify whether user gets a success toast message when a scanned pdf file is uplaoded
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload scanned pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        Then I see ocr success field icon
        And I see success toast message

    # below is having issue so commented the code
    @AURORA_CLM
    Scenario: TC34: Verify whether user gets a success toast message when a PDF file is uplaoded(caps extension ie .PDF)
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload PDF format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        Then I see ocr success field icon
        And I see success toast message

    @AURORA_CLM
    Scenario: TC35: Verify whether user gets a success toast message when a pdf file with more than 10mb is uplaoded
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf file greater than 10mb
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        Then I see ocr success field icon
        And I see success toast message

    @AURORA_CLM
    Scenario: TC36: Verify whether user gets a success toast message when a graphical pdf file is uplaoded
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload graphical pdf file
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        Then I see ocr success field icon
        And I see success toast message

    @AURORA_CLM
    Scenario: TC37: Verfiy whether user doesnot get a loader icon when clicked on save as draft
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I fill minimum mandatory fields
        And I clicked on save as draft button in the aurora contract details page
        Then I check loader icon is not available
        And I dont see success toast message

    @AURORA_CLM
    Scenario: TC38: Verfiy whether user is unable to uplaod password protected pdf file
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload password protected pdf file
        Then I see an error popup
        And I clicked on ok button in the error popup

    @AURORA_CLM
    Scenario: TC39: Verify that user does not get a loader icon when docx file is uploaded
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload docx format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        Then I check loader icon is not available
        And I dont see success toast message

    @AURORA_CLM
    Scenario: TC40: Verify that user does not get a loader icon when doc file is uploaded
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload doc format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        Then I check loader icon is not available
        And I dont see success toast message

    ################# Unable to execute the existing contract scenarios due to AURORA-158 ###############################

    @AURORA_CLM
    Scenario: TC41: Verify that user is able to see loader,success status icon and success toast message for the existing contracts with pdf document which are in repository draft status
        When I search for repository draft status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with pdf document
        And I wait until file is uploaded in the contract details page
        And I clicked on save as draft button in the contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check loader icon is available
        And I see ocr success field icon
        And I see success toast message

    @AURORA_CLM
    Scenario: TC42: Verify that user is able to see loader,success status icon and success toast message for the existing contracts with pdf document which is in active status
        When I search for active status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with pdf document
        And I wait until file is uploaded in the contract details page
        And I click on save button in the repository contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check loader icon is available
        And I see ocr success field icon
        And I see success toast message

    @AURORA_CLM
    Scenario: TC43: Verify that user is able to see loader,success status icon and success toast message for the existing contracts with pdf which is in inactive status
        When I search for inactive status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with pdf document
        And I wait until file is uploaded in the contract details page
        And I click on save button in the repository contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check loader icon is available
        And I see ocr success field icon
        And I see success toast message

    @AURORA_CLM
    Scenario: TC44: Verify that user is able to see loader,success status icon and success toast message for the existing contracts with pdf which is in expired status
        When I search for expired status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with pdf document
        And I wait until file is uploaded in the contract details page
        And I click on save button in the repository contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check loader icon is available
        And I see ocr success field icon
        And I see success toast message

    @AURORA_CLM
    Scenario: TC45: Verify that user is able to see loader,success status icon and success toast message for the existing contracts with pdf which is in termination notice served status
        When I search for termination notice served status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with pdf document
        And I wait until file is uploaded in the contract details page
        And I click on save button in the repository contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check loader icon is available
        And I see ocr success field icon
        And I see success toast message

    @AURORA_CLM
    Scenario: TC46: Verify that user is able to see loader,success status icon and success toast message for the existing contracts with pdf which is in pending publish status
        When I search for pending publish status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with pdf document
        And I wait until file is uploaded in the contract details page
        And I click on save button in the repository contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check loader icon is available
        And I see ocr success field icon
        And I see success toast message

    # Having issue in old clm
    @AURORA_CLM
    Scenario: TC47: Verify that user is able to see loader,success status icon and success toast message for the existing contracts with pdf which is in archived status
        When I search for archived status contract
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with pdf document
        And I wait until file is uploaded in the contract details page
        And I click on save button in the repository contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check loader icon is available
        And I see ocr success field icon
        And I see success toast message

    @AURORA_CLM
    Scenario: TC48: Verify that user is able to see loader,success status icon and success toast message for the existing contracts with pdf having source authoring
        When I search for repository draft status and authoring as source
        And I view first contract from the grid
        And I navigate to contract details page
        And I replace contract with pdf document
        And I wait until file is uploaded in the contract details page
        And I click on save button in the repository contract details page
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check loader icon is available
        And I see ocr success field icon
        And I see success toast message

    #OCR feature to be considered for replace file when replace file user story is defined

    #*********************************************************************** User Story AURORA-49:- ENDS ***********************************************************

    # User Story AURORA-54:- Verify scenarios related to save metadata contract

    # Manual Scenarios
    # 1.Verify that UI developed for Save page is matching with UX design shared in the jira
    # 2.Verify that Save functionality is working all the recommended browser
    # 3.Verify that save functionality is working in all the recommended screen resolution
    # 4.Verify that recommended keyboard actions is working in the contract details page during save operation
    # 5.Verify that 503 error page is shown when server is down and user clicks on save button
    # 6.Verify that page is scrolled and focused on first unfilled mandatory field when clicked on save button if all the subheaders are expanded
    # 7.verify that respective subheader is expanded and focus is shown on first unfilled mandatory field when clicked on save button if all the subheaders are collapsed
    # 8.Verify that mandatory message is shown for all the fields when contract save is done
    # 9.Verify that contract base version is created in the db when first save of contract is done
    # 10.Verify that for unpublished contract multiple versions are not created in the db when clicked on save button for multiple times.
    # 11.Verify that same contract base version is overridden with new changes when clicked on save button before contract is published
    # 12.Verify that user is landed on login page when session is expired and user clicks on save button
    # 13.Verify that tool tip is shown based on the step1 configuration on the contract details page
    # 14.Verify that tool tip is shown for both metadata and value on the contract details page
    # 15.Verify that default values configured for fields in the flexiform is reflected in the contract details page
    # 16.Verify that on refresh default values configured in the flexiform is retained in the contract details page
    # 17.Verify that user can save the contract by removing default values in the field for non mandatory fields
    # 18.Verify that contract cannot be saved please contact your administrator popup message is shown when roles/activities related to save contract is removed from other side during save operation and contract is not saved in the background
    # 19.Verify that multiple contract with same number is not generated when contract save is done
    # 20.Verify that mandatory fields shown in the contract details is based on the configuration done in the step1 except save as draft related fields
    # 21.Verify that fields which are configured as non editable in the step1 then those fields should not be editable in the contract details page
    # 22.Verify that mandatory field which is non editable and it is configured as disabled in the step1 when clicked on save button mandatory message should be shown below that field
    # 23.Verify that a particular field is mandatory from step1 but it is hidden from flexi and user clicks on save button then user shoul be intimated with error popup
    # 24.Verify that numeric field doesnt accept characters or alphanumeric values
    # 25.Verify that checkbox which are by default marked as selected either from configuration property file or step1 or flexi or production configuration should be reflected same in contract details page
    # 26.Verify that fields which are disabled in the contract details page should be highlighted with stop icon when hovered on it
    # 27.Verify that ocr call is not failed when contract save is done before ocr call is successful
    # 28.Verify that is contract confidential feature is not reflected in the contract details page when setting is off
    # 29.Verify that folder dropdown will have only default value in the list when is contract confidential feature is turned off from the setting
    # 30.Verify that user is allowed to save contract when is contract confidential feature is turned off
    # 31.Verify that enum value or any field type except file type configured for any fields in the step1 is reflected in the contract details page
    # 32.Verify that values which are configured in master data is reflected in the contract details page
    # 33.Verify that reference date logic in the contract details page are handled based on client specific customization
    # 34.Verify that by default contract owner name is logged in user email id before save of contract
    # 35.Verify that contract expiry date logic shown in the contract details page is based on the flexiform and master data
    # 36.Verify that contract timezone field value shown in the contract details page is based on the user profile
    # 37.Verify that date format shown for date fields in the contract details page is based on the user profile
    # 38.Verify that all date field value shown in the contract details page is based on the user timezone
    # 39.Verify that contract is not saved please contact your administrator message popup is not shown when session is expired and clicked on save button
    # 40.Verify that contract header highlight is updated when respective header field is filled in the form
    # 41.Verify that on each save a version is created in the contract timeline for published contracts
    # 42.Verify that on each version creation a mail is triggered to the contract owner for published contract
    # 43.Verify that on each version creation a mail is not triggered to the contract owner for unpublished contract
    # 44.Verify that mail template triggered to contract owner is based on mail template configured in the db
    # 45.Verify that mail triggered on each version creation is tracked in the view sent mail
    # 46.Verify that changes related popup is shown when user has edited atleast one field or clicked on field without filling it and clicked on browser refresh option
    # 47.Verify that changes related popup is not shown when nothing is edited in the contract details page and clicked on browser refresh option
    # 48.Verify that currently filled data will be lost when user accepts the refresh popup
    # 49.Verify that currently filled data will be retained when user cancels the refresh popup
    # 50.Verify that already saved data is shown in the contract details page when user accepts the refresh popup
    # 51.Verify that an warning popup is shown when user clicks on browser back button in the contract details page in between the new contract creation process
    # 52.Verify that user lands on select type subtype page when user accepts warning popup related to browser back during new contract creation
    # 53.Verify that user lands on grid page when clicks on browser back button and accepts the warning popup
    # 54.Verify that user lands on same contract details page when user cancel warning popup related to browser back
    # 55.Verify that leave site popup is shown when user closes the contract details page tab from the browser
    # 56.Verify that on aurora page if user switches between any menu then on click on browser back button user lands on previous selected menu
    # 57.Verify that an warning popup is shown for existing contract when user edits the form and then clicks on browser back button
    # 58.Verify that user lands on the same page for existing contract when user cancels warning popup related to browser back button
    # 59.Verify that for existing contract user lands on grid page when user edits the form,clicks on browser back button and accepts the warning popup
    # 60.Verify that for existing contract if contract is viewed from any other tabs then user should land on repository grid page when clicked on browser back button
    # 61.Verify that user actions done before save and after save contract should be tracked in the contract timeline
    # 62.Verify that contract saved is searchable from the search module
    # 63.Verify that contract saved is searchable in the reports module
    # 64.Verify that contract saved is reflected in the salesforce
    # 65.Verify that on change of hierarchy status value the linkage between other contracts and current contract is removed from the backend when save is done
    # 66.Verify that contract details for archived contract is non editable to user
    # 67.Verify that on hover of each field on the contract details page for archive status contract stop icon is shown
    # 68.Verify that folder list is shown based on is contract confidential and is contract searchable flag selection in the contract details page
    # 69.Verify that folder list will have only those folders for which user has permission
    # 70.Verify that any field data which is configured in master data with sequence number, the data should be shown in the same sequence in the contract details page
    # 71.Verify that any field data which is configured in master data with no sequence number the data should be shown in the aplhabetical order
    # 72.Verify that save button is enabled in the contract details when user switches between conntract details and other tabs
    # 73.Verify that save button is working for cloned contract in repository
    # 74.Verify that auto generated title is working in the contract details page when it is configured in the step1 sheet
    # 75.Verify that save functionality is working when contract is viewed from other tabs in old clm
    # 76.Verify that user lands on grid page when contract is viewed from other tabs and then clicked on navigate to grid link from the save message toaster
    # 77.Verify that filled data in aurora is reflected in the old clm contract
    # 78.Verify that new contract saved is searchable in the grid based on the contract related metadata filters
    # 79.Verify that revision comment popup shown when clicked on save button for published contract is handled based on flag setting in the db
    # 80.Verify that for existing contract previous data in aurora contract details page is retained when everything is cleared in the page and clicked on save button,then refreshed the page
    # 81.Verify that there will not be any impact on the existing contracts of a particular user who is made as inactive in the TMS
    # 82.Verify that user is allowed to create a new contract until user is not logged out from the application when that user is made as inactive in the TMS simultaneously
    # 83.Verify that user is allowed to access the aurora setup until user is not logged out from the application when that user is made as inactive in the TMS simultaneously
    # 84.Verify that user is allowed to save contract until the new contract is closed when the user is been removed from the scope access in between the creation of new contract
    # 85.Verify that folder name is removed from the folder dropdown when the user is been removed from the folder access to a particular folder in between the creation of new contract
    # 86.Verify that inactive user is not shown in the contract owner dropdown field when contract creation is started from the first phase
    # 87.Verify that inactive user is shown in the contract owner dropdown field when the user is made as inactive in tms in between the creation of new contract
    # 88.Verify that business unit list shown in the contract details page is based on the scope assigned to a particular user
    # 89.Verify that disabled business units are not shown in the business unit dropdown in the contract details page
    # 90.Verify that user is allowed to create contract with disabled business unit until the new contract is closed when that particular business unit is made as disbaled in between the new contract creation
    # 91.Verify that user is allowed to create new contract with removed business unit access in between the new contract creation process until the contract is closed
    # 92.Verify that for existing contract business unit which is not accessible to user is shown as disabled in the business unit dropdown box
    # 93.Verify that position/sequence of header and subheader shown in the aurora contract details page is based on the configuration done in step1
    # 94.Verify that no of header and subheaders shown in the aurora contract details page is based on the configuration done in step1
    # 95.Check whether user able to create amendment for the contract which are completely created and saved in aurora
    # 96.Check whether user able to request amendment for the contract which are completely created and saved in aurora
    # 97.Check whether user able to clone in repository for the contract which are completely created and saved in aurora
    # 98.Check whether user able to clone in authoring for the contract which are completely created and saved in aurora
    # 99.Check whether user able to delete the contract which are completely created and saved in aurora
    # 100.Take any contract which is AI performed in old clm and draft in progress,check same contract can be saved in aurora page----------->covered for all the status
    # 101.Take any contract created from SF source and draft in progress check whether you are able to save in aurora
    # 102.Take any contract created from Outlook connect source and draft in progress ,check whether you are able to save in aurora
    # 103.Verify the toaster message for second save or for existing contract save
    # 104. Verify that contract saved in aurora is shown inside dashboard widgets
    # check the behavior of multipe headers in aurora page
    # to be added
    # Verify tha mandatory message for all fields are shown when all the subheader are collapsed and clicked on save button

    # Autotmation Scenarios

    @AURORA_CLM
    Scenario: TC49: Verify that save button in the contract details page is enabled for repository draft status
        When I search for repository draft status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check save button is present in the contract details page

    @AURORA_CLM
    Scenario:TC50: Verify that contracting party section is enabled in the contract details page for repository draft status contract
        When I search for repository draft status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check contracting party section is enabled in the aurora contract details page

    @AURORA_CLM
    Scenario:TC51: Verify that save button in the contract details page is enabled for pending publish status
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check save button is present in the contract details page

    @AURORA_CLM
    Scenario:TC52: Verify that contracting party section is enabled in the contract details page for pending publish status contract
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check contracting party section is enabled in the aurora contract details page

    @AURORA_CLM
    Scenario:TC53: Verify that save button in the contract details page is enabled for active status
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check save button is present in the contract details page

    @AURORA_CLM
    Scenario:TC54: Verify that contracting party section is enabled in the contract details page for active status contract
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check contracting party section is enabled in the aurora contract details page

    @AURORA_CLM
    Scenario:TC55: Verify that save button in the contract details page is enabled for inactive status
        When I search for inactive status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check save button is present in the contract details page

    @AURORA_CLM
    Scenario:TC56: Verify that contracting party section is enabled in the contract details page for inactive status contract
        When I search for inactive status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check contracting party section is enabled in the aurora contract details page

    @AURORA_CLM
    Scenario:TC57: Verify that save button in the contract details page is enabled for expired status
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check save button is present in the contract details page

    @AURORA_CLM
    Scenario:TC58: Verify that contracting party section is enabled in the contract details page for expired status contract
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check contracting party section is enabled in the aurora contract details page

    @AURORA_CLM
    Scenario:TC59: Verify that save button in the contract details page is enabled for termination notice served status
        When I search for termination notice served status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check save button is present in the contract details page

    @AURORA_CLM
    Scenario:TC60: Verify that contracting party section is enabled in the contract details page for termination notice served status contract
        When I search for termination notice served status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check contracting party section is enabled in the aurora contract details page

    @AURORA_CLM
    Scenario:TC61: Verify that save button in the contract details page is not present for archived status
        When I search for archived status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check save button is not present in the contract details page

    @AURORA_CLM
    Scenario:TC62: Verify that contracting party section is enabled in the contract details page for archived status contract
        When I search for archived status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check contracting party section is enabled in the aurora contract details page

    @AURORA_CLM
    Scenario:TC63: Verify that save button in the contract details page is not shown when user collapse document preview in the document menu and then clicks on contract details page for archived contract
        When I search for archived status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        And I click on expand or collapse document panel icon
        And I clicked on contract details menu
        Then I check save button is not present in the contract details page

    @AURORA_CLM
    Scenario:TC64: Verify that user is able to save contract for any random status existing contract
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I have new contract number from aurora
        And I close aurora opened tab
        And I close the viewed contract
        And I land on grid page
        And I refresh the page
        Then I check contract entry is shown in the top in the grid
    # Then I check toaster message for contract saved is shown


    # Then I check save button is present in the contract details page
    # When I click on expand or collapse all icon
    @AURORA_CLM
    Scenario:TC65: Verify that changes done in contract details page cannot be saved message popup is not shown when user switches to other tab without filling the contract details page
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on document menu
        Then I check changes done in contract details page cannot be saved messgae popup is not show

    @AURORA_CLM
    Scenario:TC66: Verify that save button for existing contract is enabled in the aurora contract details page to user when switched between contract details page and other contract tabs
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on contract details menu
        Then I check save button is present in the contract details page
    # Then I fill all the fields in the aurora contract details
    # When I clicked on save button in the aurora contract details page
    # Then I check toaster message for contract saved is shown
    # below scenario is not yet developed
    # # 19.Verify that user is allowed to land on grid page when clicked on link in the toaster message
    # When I clicked on grid navigation link from the save toaster
    # Then I land on grid page
    # started today
    @AURORA_CLM
    Scenario:TC67: Verify that data filled to existing contract from aurora is retained when user navigates to aurora contract details page
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I have new contract number from aurora
        And I close aurora opened tab
        And I close the viewed contract
        And I land on grid page
        And I search for previously modified contract in the grid
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        Then I check previously filled data is retained in the aurora contract details page

    @AURORA_CLM
    Scenario:TC68: Verify that user is allowed to save existing contract by collapsing all the subheaders
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I fill all the fields in the aurora contract details page
        And I click on expand or collapse all icon
        And I clicked on save button in the aurora contract details page
        Then I check toaster message for contract saved is shown

    # Then I check toaster message for contract saved is shown
    # grid scenario is not yet handled
    # When I clicked on grid navigation link from the save toaster
    # Then I close aurora opened tab
    # Then I close the viewed contract
    # Then I land on grid page

    @AURORA_CLM
    Scenario:TC69: Verify that user is allowed to save contract only by filling mandatory fields in the aurora contract details page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        # And I clicked on save button in the aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I fill only mandatory fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I have new contract number from aurora
        And I close aurora opened tab
        And I land on grid page
        And I refresh the page
        Then I check contract entry is shown in the top in the grid

    @AURORA_CLM
    Scenario:TC70: Verify that contracting party section is enabled in the contract details page for new contract
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        Then I check contracting party section is enabled in the aurora contract details page

    @AURORA_CLM
    Scenario:TC71: Verify that save button for new contract is enabled in the aurora contract details page to user when switched between contract details page and other contract tabs
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I clicked on document menu
        And I clicked on contract details menu
        Then I check save button is present in the contract details page

    @AURORA_CLM
    Scenario:TC72: Verify that save button in the contract details page is shown when user collapse document preview in the document menu and then clicks on contract details page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I clicked on document menu
        And I click on expand or collapse document panel icon
        And I clicked on contract details menu
        Then I check save button is present in the contract details page

    @AURORA_CLM
    Scenario:TC73: Verify that fill all mandatory field message popup is shown when clicked on save button without filling the mandatory fields
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I clicked on save button in the aurora contract details page
        Then I check fill all mandatory fields popup is shown

    @AURORA_CLM
    Scenario:TC74: Verify that fill all mandatory fields popup will disappears when clicked on ok button in the popup
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I clicked on ok button in the fill all mandatory fields popup
        Then I check fill all mandatory fields popup is not shown

    @AURORA_CLM
    Scenario:TC75: Verify that user is allowed to save new contract by expanding all the subheaders
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I have new contract number from aurora
        And I close aurora opened tab
        And I land on grid page
        Then I check contract entry is shown in the top in the grid

    @AURORA_CLM
    Scenario:TC76: Verify that mandatory field message is shown below each mandatory field in the aurora contract details page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I clicked on save button in the aurora contract details page
        And I clicked on ok button in the fill all mandatory fields popup
        Then I check mandatory message below each mandatory field in the aurora contract details page is shown

    @AURORA_CLM
    Scenario:TC77: Verify that user is allowed to save new contract by collapsing document preview panel
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse document panel icon
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I have new contract number from aurora
        And I close aurora opened tab
        And I land on grid page
        Then I check contract entry is shown in the top in the grid

    @AURORA_CLM
    Scenario:TC78: Verify that contract number is generated in the contract header after contract is saved
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse document panel icon
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        Then I check contract number is generated in the header

    @AURORA_CLM
    Scenario:TC79: Verify that new contract status directly changes to pending publish after contract is saved
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        Then I check pending publish status is shown in the header

    @AURORA_CLM
    Scenario:TC80: Verify that filled data for only mandatory fields are reflected in the aurora contract details page after contract save is done
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        # And I clicked on save button in the aurora contract details page
        And I fill only mandatory fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        Then I check previously filled data is retained in the aurora contract details page

    @AURORA_CLM
    Scenario:TC81: Verify that new contract entry is shown in the grid after new contract is saved
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I have new contract number from aurora
        And I close aurora opened tab
        And I land on grid page
        And I search for newly created contract in the grid based on contract number
        Then I check only one new contract entry is shown in the grid

    @AURORA_CLM
    Scenario:TC82: Verify that user is allowed to save new contract by filling both non mandatory and mandatory fields
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I have new contract number from aurora
        And I close aurora opened tab
        And I land on grid page
        Then I check contract entry is shown in the top in the grid

    # Many to many fields user story is not yet delivered
    # Scenario:Verify that user is not allowed to delete business unit in the aurora contract details page when contract is associated with single business unit
    #     When I clicked on delete business unit icon
    # Scenario:Verify that alert popup related to business unit is shown when contract is associated with single business unit and then clicked on delete business unit icon
    #     Then I check alert popup related to business unit is shown
    # Scenario:verify that alert popup related to business unit disappears when clicked on ok button in the popup
    #     When I clicked on ok button in the business unit related alert popup
    #     Then I check alert popup related to business unit is not shown
    #     Then I check single business unit associated to contract is not deleted
    #     When I clicked on save button in the aurora contract details page
    #     Then I check toaster message for contract saved is shown
    #     Then I check previously filled data is retained in the aurora contract details page
    #     When I clicked on save button for random times
    #     Then I close aurora opened tab

    @AURORA_CLM
    Scenario:TC83: Verify that only one new contract is created when clicked on save button for multiple times
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I have new contract number from aurora
        And I close aurora opened tab
        And I land on grid page
        And I search for newly created contract in the grid based on contract number
        Then I check only one new contract entry is shown in the grid

    @AURORA_CLM
    Scenario:TC84: Verify that data filled for both non mandatory and mandatory fields is retained when contract is viewed from the grid and navigated to aurora
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I have new contract number from aurora
        And I close aurora opened tab
        And I land on grid page
        And I search for newly created contract in the grid based on contract number
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        Then I check previously filled data is retained in the aurora contract details page

    @AURORA_CLM
    Scenario:TC85: Verify that recently filled data is shown in the aurora contract details page for random status when multiple edit for all fields are done and saved it
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I fill all the fields in the aurora contract details page and save contract for multiple times
        And I land on aurora contract details page
        Then I check previously filled data is retained in the aurora contract details page

    @AURORA_CLM
    Scenario:TC86: Verify that user is allowed to remove particular dropdown value by clicking on clear icon
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I clear contract category field value
        Then I check contract category dropdown field value is blank

    @AURORA_CLM
    Scenario:TC87: Verify that clear icon shown in the dropdown will disappears when data in that field is cleared
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I clear contract category field value
        Then I check clear icon for contract category dropdown field is not shown

    @AURORA_CLM
    Scenario:TC88: Verify that clear icon is shown in the particular dropdown field when field is selected with any value
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I clear contract category field value
        And I select contract category dropdown value
        Then I check clear icon for contract category dropdown field is shown

    @AURORA_CLM
    Scenario:TC89: Verify that user is allowed to clear numeric fields value in the aurora contract details page
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I clear values of each numeric field in the aurora contract details page
        Then I check each numeric field value in the aurora contract details page is blank

    @AURORA_CLM
    Scenario:TC90: Verify that user is allowed to clear dropdown fields value in the aurora contract details page
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I clear values of each dropdown field in the aurora contract details page
        Then I check each dropdown field value in the aurora contract details page is blank

    # @AURORA_CLM scenario removed update in jira

    # Scenario:TC91: Verify that user is allowed to clear date fields value in the aurora contract details page
    #     When I search for random status existing contract
    #     And I view first contract from the grid
    #     And I click on redirect to aurora button
    #     And I land on aurora contract details page
    #     And I click on expand or collapse all icon
    #     And I click on expand or collapse all icon
    #     And I clear values of each date field in the aurora contract details page
    #     Then I check each date field value in the aurora contract details page is blank

    @AURORA_CLM
    Scenario:TC91: Verify that user is allowed to clear string fields value in the aurora contract details page
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I clear values of each string field in the aurora contract details page
        Then I check each string field value in the aurora contract details page is blank

    @AURORA_CLM
    Scenario:TC92: Verify that user is not allowed to save contract when all type of fields value are cleared in the aurora contract details page
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I clear all the data from aurora contract details page except digital contract document field
        And I clicked on save button in the aurora contract details page
        And I clicked on ok button in the fill all mandatory fields popup
        Then I check mandatory message below each mandatory field in the aurora contract details page is shown

    @AURORA_CLM
    Scenario:TC93: Verify that invalid error message below field is shown when each numeric field is filled with invalid data
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I fill all numeric fields with invalid data
        And I clicked on save button in the aurora contract details page
        And I clicked on ok button in the fill all mandatory fields popup
        Then I check invalid error message for each numeric field in the aurora contract details page is shown

    @AURORA_CLM
    Scenario:TC94: Verify that invalid error message below field is shown when each string field is filled with invalid data
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I fill all string fields with invalid data
        And I clicked on save button in the aurora contract details page
        And I clicked on ok button in the fill all mandatory fields popup
        Then I check invalid error message for string field in the aurora contract details page is shown

    @AURORA_CLM
    Scenario:TC95: Verify that invalid error message for non mandatory string field is shown
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I fill all non mandatory string fields with invalid data
        And I clicked on save button in the aurora contract details page
        And I clicked on ok button in the fill all mandatory fields popup
        Then I check invalid error message for each numeric field in the aurora contract details page is shown

    @AURORA_CLM
    Scenario:TC96: Verify that invalid error message for non mandatory numeric field is shown
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I fill all non mandatory numeric fields with invalid data
        And I clicked on save button in the aurora contract details page
        And I clicked on ok button in the fill all mandatory fields popup
        Then I check invalid error message for each numeric field in the aurora contract details page is shown

    # @AURORA_CLM removed
    # Scenario:TC98: Verify that invalid error message below field is shown when date field is filled with invalid data
    #     When I clicked on upload contract in aurora button
    #     And I land on new contract page
    #     And I fill all the fields and upload random valid document
    #     And I wait until file is uploaded successfully
    #     And I clicked on continue button in new contract page
    #     And I land on aurora contract details page
    #     And I click on expand or collapse all icon
    #     And I click on expand or collapse all icon
    #     And I fill all date fields with invalid data
    #     And I clicked on save button in the aurora contract details page
    #     And I clicked on ok button in the fill all mandatory fields popup
    #     Then I check invalid error message for each date field in the aurora contract details page is shown

    # @AURORA_CLM removed
    # Scenario:TC99: Verify that invalid error message for non mandatory date field is shown
    #     When I clicked on upload contract in aurora button
    #     And I land on new contract page
    #     And I fill all the fields and upload random valid document
    #     And I wait until file is uploaded successfully
    #     And I clicked on continue button in new contract page
    #     And I land on aurora contract details page
    #     And I click on expand or collapse all icon
    #     And I click on expand or collapse all icon
    #     And I fill all non mandatory date fields with invalid data
    #     And I clicked on save button in the aurora contract details page
    #     And I clicked on ok button in the fill all mandatory fields popup
    #     Then I check invalid error message for each date field in the aurora contract details page is shown

    @AURORA_CLM
    Scenario:TC97: Verify that Maximum 14 digits allowed. error message is shown when user fills total value field with more than 14 digits
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I fill contract total value field with more than 14 digits value
        Then I check Maximum 14 digits allowed. error message is shown

    @AURORA_CLM
    Scenario:TC98: Verify that Maximum 14 digits allowed. error message is not shown when user fills total value field with less than or equal 14 to digits
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I fill contract total value field with less than or equal to 14 digits
        Then I check Maximum 14 digits allowed. error message is not shown

    @AURORA_CLM
    Scenario:TC99: Verify that user is allowed to save contract by filling all numeric field and string field with maximum value limit
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I fill all numeric field and string field with maximum value limit and other fields with normal limit
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I have new contract number from aurora
        And I close aurora opened tab
        And I close the viewed contract
        And I land on grid page
        And I search for newly created contract in the grid based on contract number
        Then I check only one new contract entry is shown in the grid

    @AURORA_CLM
    Scenario:TC100: Verify that numeric field and string field filled with maximum value limit is reflected in the respective field after contract is saved
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I fill all numeric field and string field with maximum value limit and other fields with normal limit
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        Then I check previously filled data is retained in the aurora contract details page

    # Many to many fields are not delivered to us
    # Scenario:Verify that user is allowed to delete all selected business unit except any one business unit in the box
    #     When I click on expand or collapse all icon
    #     When I select multiple business unit from the business unit dropdown
    #     And I delete all business unit except any one business unit in the box
    #     Then I check deleted business units are not shown in the business unit dropdown
    # Scenario:Verify that user is allowed to save existing contract with multiple business associated to the contract
    #     When I select multiple business unit from the business unit dropdown
    #     And I clicked on save button in the aurora contract details page
    #     Then I check toaster message for contract saved is shown
    #     When I click on expand or collapse all icon
    #     Then I check selected business units are reflected in the business unit dropdown
    # Scenario:Verify that user is allowed to save contract by associating maximum business unit to the contract
    #     When I select all the business units from the business unit dropdown
    #     And I clicked on save button in the aurora contract details page
    #     Then I check toaster message for contract saved is shown
    #     When I click on expand or collapse all icon
    #     Then I check selected business units are reflected in the business unit dropdown
    #     Then I close aurora opened tab
    #     Then I close the viewed contract

    @AURORA_CLM
    Scenario:TC101: Verify that user is allowed to save contract after contract is saved as draft
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I clicked on save as draft button in the aurora contract details page
        And I fill minimum mandatory fields
        And I clicked on save as draft button in the aurora contract details page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I have new contract number from aurora
        And I close aurora opened tab
        And I land on grid page
        And I search for newly created contract in the grid based on contract number
        Then I check only one new contract entry is shown in the grid

    @AURORA_CLM
    Scenario:TC102: Verify that contract status is changed from repository draft to pending publish status after clicked on save button
        When I search for repository draft status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        Then I check pending publish status is shown in the header

    @AURORA_CLM
    Scenario:TC103: Verify that changes might lost popup is shown when contract details page is edited and clicked on other menu without saving the data
        When I search for repository draft status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I fill all the fields in the aurora contract details page
        And I clicked on document menu
        Then I check changes done in contract details page cannot be saved message popup is shown

    @AURORA_CLM
    Scenario:TC104: Verify that changes are retained in the contract details page when changes may lost popup is closed
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I fill all the fields in the aurora contract details page
        And I clicked on document menu
        And I close changes may lost popup in the contract details page
        Then I check modified data is retained in the contract details page

    @AURORA_CLM
    Scenario:TC105: Verify that changes done in the contract details page will be lost when changes may lost popup is accepted
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I fill all the fields in the aurora contract details page
        And I clicked on document menu
        And I click on ok button in the changes may lost popup
        And I clicked on contract details menu
        Then I check changes done in the contract details page is not retained

    # Not yet developed
    # Scenario:Verify that hierarchy changes related popup is shown to user when hierarchy status dropdown value is changed in the aurora contract details page
    #     When I change hierarchy status dropdown value to someother value
    #     Then I check hierarchy status changes related popup is shown
    # Scenario:verify that hierarchy status changes related popup will disappears after clicked on ok button
    #     When I clicked on ok button from the hierarchy status changes popup
    #     Then I check hierarchy status changes related popup is not shown
    # Scenario:Verify that hierarchy status dropdown value changes to selected value after hierarchy status changes related popup is accepted
    #     Then I check hierarchy status dropdown is changed to selected value

    # *************************************User Story AURORA-54 ENDS****************************************************

    #*********************************************************************** User Story AURORA-554:- STARTS ***********************************************************

    # /**
    #  *
    #  *
    #  * @author Sowmyashree R V
    #  *
    #  *
    #  */

    #Manual Scenarios
    #1.Verify whether default cp type is not displayed when the type subtype does not have a default cp type assigned
    # Given Type subtype does not have a default cp type assigned
    # When I Upload a contract in Aurora
    # And I clicked on save button
    # Then I see no cp type in the cp type field
    #2.Verify whether user is able to see all the cp type in the dropdown based on the scope assigned
    # When I check the scope assigned for an user
    # And I check the cp type dropdown in CP
    # Then I see cp type as per the scope assigned to user
    #3.Verify whether user does not get create cp if create cp activity/scope is not assigned
    # When I remove the create activity/scope for an user
    # And I check the cp header
    # Then I should not see new contracting party button
    #4.Verify whether user gets create cp if create cp activity/scope is assigned
    # When I add the create activity/scope for an user
    # And I check the cp header
    # Then I should see new contracting party button
    #5.Verify whether edit cp in contract is based on the activity and scope assigned
    # When I see edit contracting party to a contract activity/scope for an user is assigned
    # And I click on the options for an individual cp card
    # Then I should see edit button is enabled
    #6.Check whether user still see the cp being added even if the cp is made inactive/deleted after saving the cp in the contract
    # When I add the cp in Aurora for any contract
    # And I click on save contract
    # And I make the cp inactive in master cp
    # And I open the contract from the grid
    # And I view in aurora
    # Then I check check inactive cp is still added to the contract
    #7.Check whether user gets the mandatory symbol based on the cp mandatory settings
    # Given Is cp mandatory should be enabled in application settings
    # When I Upload a contract in Aurora
    # And I clicked on save button
    # Then I should see a mandatory symbol in cp header
    #8.Verify that added cp during new contract creation in aurora is reflected in amendment when amendment is created for the same contract in old clm
    # When I upload a contract in aurora
    # And I add cp
    # And I click on save button
    # And I create an amendment for a same contract from repository
    # Then I see added cp in the amendment
    #9.Verify that added cp during new contract creation in aurora is reflected in cloned contract when clone in repo is done for the same contract in old clm
    # When I upload a contract in aurora
    # And I add cp
    # And I click on save button
    # And I create a clone contract for a same contract from repository
    # Then I see added cp in the cloned contract
    #10.Verify whether default cp type is displayed in the cp type field
    #Then I check default cp type in the cp type field

    #CP should be set as mandatory

    @AURORA_CLM
    Scenario:Verify whether mandatory symbol is displayed near cp header
        When I navigate to product configuration
        And I click on application settings
        And I set cp as mandatory in application settings
        And I navigate to repository tab
        And I clicked on upload contract in aurora buttons
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        Then I check mandatory symbol near cp header

    @AURORA_CLM
    Scenario:Verify whether user gets cp mandatory message when clicked on save button in contract details without selecting cp
        When I clicked on upload contract in aurora button
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I fill only mandatory fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        Then I see cp mandatory message

    @AURORA_CLM
    Scenario:Verify whether user gets no matching found in the search result when searched for no matching cp search
        When I clicked on upload contract in aurora button
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I fill only mandatory fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I select a cp type randomly
        And I type invalid cp name in the search field
        Then I see no matching found message in the search result

    # Scenario:Verify whether user gets create cp option at the bottom of the search result list
    #     Then I see create cp option in the cp result dropdown

    @AURORA_CLM
    Scenario:Verify whether user is able to search and find the cp result
        When I clicked on upload contract in aurora button
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I fill only mandatory fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        Then I see the respective autosuggestion list

    # Scenario:Verify whether user is able to scroll the search result till the end to check new cp option
    #     Then I scroll the search result till the end

    @AURORA_CLM
    Scenario:Verify whether user is able to select the cp from the list
        When I clicked on upload contract in aurora button
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I fill only mandatory fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        Then I select a cp from the dropdown list

    @AURORA_CLM
    Scenario:Verify whether user is able to search and select cp for all the available cp type
        When I clicked on upload contract in aurora button
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I fill only mandatory fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        Then I select a cp from the dropdown list

    #This feature is mentioned in the User story but got a limitation in the release with no implementation
    # Scenario:Verify whether toast message is displayed when a new cp is added
    #     Then I see a toast message when cp is added

    @AURORA_CLM
    Scenario:Verify whether new cp card is displayed with the selected cp
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        Then I see the selected cp card display

    @AURORA_CLM
    Scenario:Verify whether user is able to select any address if there cp has multiple addresses
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I select cp address from the dropdown
        Then I see selected address being populated in the cp card

    @AURORA_CLM
    Scenario:Verify whether user is able to select any cpp if there cp has multiple cpp associated
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I select cpp from the dropdown
        Then I check contact person in the cp card

    @AURORA_CLM
    Scenario:Verify whether cp name,cp type,address,contact person,restricted party screening,primary tag and options are displayed in the cp card
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I select cp address from the dropdown
        And I select cpp from the dropdown
        Then I check cp name in the cp card
        And I check address in the cp card
        And I check contact person in the cp card
        And I check primary tag in the cp card
        And I check options avaialble in the cp card

    @AURORA_CLM
    Scenario:Verify whether cp address and cpp is not mandatory in the cp card
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        Then I check address is not mandatory in cp card
        And I check cpp is not mandatory in cp card

    #Feasible for Automation(POC UX design comparison)
    # Scenario:Verify whether restricted party flag is displayed beside rightside of the cp name
    #     Then I see restricted party flag beside rightside of the cp name

    #This is not yet implemented
    # Scenario:Verify whether restricted party flag is greyed out when restricted party screening is not performed
    #     Then I see restricted party flag is greyed out

    @AURORA_CLM
    Scenario:Verify whether address icon is displayed beside the address field
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        Then I see address icon beside the address field

    @AURORA_CLM
    Scenario:Verify whether contact person icon is displayed beside the contact person field
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        Then I see contact person icon is displayed beside the contact person field

    @AURORA_CLM
    Scenario:Verify whether option in the cp card contains edit,remove and mark as primary is disabled
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I click on options in cp card
        #Then I see edit option is available -- commenting as this feature is not yet delivered with full functionality
        Then I see remove option is disabled
        And I see mark as primary option is disabled

    @AURORA_CLM
    Scenario:Verify that user gets a cp mandatory toast message when tries to remove the only cp available
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I click on options in cp card
        And I click on remove option
        Then I see cp mandatory toast message

    @AURORA_CLM
    Scenario:Verify whether user is able to select multiple cps of 10 in number
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        #And I search for a cp
        And I select and add 10 cps
        Then I see added cp cards displayed

    @AURORA_CLM
    Scenario:Verify whether user gets a warning toast message while adding more than 10 cp
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select and add 10 cps
        And I type and search for a cp again
        And I select more than ten cp from the dropdown list
        Then I see cannot add cp warning toast message

    @AURORA_CLM
    Scenario:Verify whether user gets a an error message while adding more than 10 cp
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select and add 10 cps
        And I search for a cp
        Then I see maximum ten cps are allowed error message

    @AURORA_CLM
    Scenario:Verify whether added cp count is displayed beside cp header
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select and add 10 cps
        Then I check the number displayed beside the cp header

    @AURORA_CLM
    Scenario:Verify whether user is able to see the cp header with cp card when collapse is done
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I click on collapse button
        Then I see cp header is expanded

    @AURORA_CLM
    Scenario:Verify whether user is able to see the cp header with cp card when expand is done
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I click on expand button
        Then I see cp header is collapsed

    @AURORA_CLM
    Scenario:Verify whether user is able to mark as primary for the cps which are not primary
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select and add 10 cps
        And I click on options in cp card
        And I click on mark as primary option
        Then I see the present cp card having primary tag

    @AURORA_CLM
    Scenario:Verify whether user gets a remove popup when clicked on remove option
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select and add 10 cps
        And I click on options in cp card
        And I click on remove option
        Then I get a remove popup

    @AURORA_CLM
    Scenario:Verify whether cp is not removed from the list when clicked on no button in the remove popup
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select and add 10 cps
        And I click on options in cp card
        And I click on remove option
        And I get a remove popup
        And I clicked on cancel button in remove popup
        Then I see remove popup is canceled

    @AURORA_CLM
    Scenario:Verify whether cp gets removed from the list when clicked on yes in the remove popup
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select and add 10 cps
        And I click on options in cp card
        And I click on remove option
        And I click on remove button in remove popup
        Then I see remove popup is canceled
        And I see cp is removed from the list

    @AURORA_CLM
    Scenario:Verify whether user gets an error message below search field when user start typing an invalid cp name
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I start typing the invalid cp name
        Then I see the error message

    @AURORA_CLM
    Scenario:Verify whether cp in the search list is disabled when same cp is searched
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I search for a same cp which is already added
        Then I see the already added cp is shows disabled in the search list

    # Scenario:Verify whether user gets the edit panel when clicked on edit option ----- Not implemented in the User story but still its a requirement
    #     When I clicked on upload contract in aurora button
    #     And I fill all the metadata fields in new contract page
    #     And I upload pdf format document
    #     And I wait until file is uploaded successfully
    #     And I clicked on continue button in new contract page
    #     And I check user lands on aurora contract details page
    #     And I fill only mandatory fields in the aurora contract details page
    #     And I clicked on save button in the aurora contract details page
    #     And I select a cp type randomly
    #     And I type and search for a cp
    #     And I select a cp from the dropdown list
    #     When I click on option in cp card
    #     And I click on edit option
    #     Then I see edit panel is displayed

    # Scenario:Verify whether user is able to edit and submit or save the cp -- -- Not implemented in the User story but still its a requirement
    #     Then I edit the cp
    #     And I click on submit button

    # Scenario:Verify whether edited cp is reflected in the cp card -- Not implemented in the User story but still its a requirement
    #     Then I see the edited cp is reflected in the cp cards

    # Scenario:Verify whether user gets a create cp panel when clicked on create contracting party
    #     When I close the edit cp panel
    #     And I click on create contracting party
    #     Then I see create cp panel displayed

    @AURORA_CLM
    Scenario:Verify whether added cp is saved in the contract details page when clicked on save in contract details page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I fill only mandatory fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I clicked on save button in the aurora contract details page
        Then I see added cp is saved

    @AURORA_CLM
    Scenario:Verify whether user is able to add cp to existing active contract
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I search for a cp
        Then I select a cp from the dropdown list
        And I see the selected cp card display

    @AURORA_CLM
    Scenario:Verify whether user is able to see all the cp types for an existing contract
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on cp type dropdown
        Then I see all the cp types

    # Scenario:Verify whether user is able to edit the cp for an existing contract -- Not implemented yet
    #     When I click on option in cp card
    #     And I click on edit option
    #     Then I see edit panel is displayed

    # Scenario:Verify whether user is able to create cp for an existing contract -- -- Not implemented yet
    #     When I click on create contracting party
    #     Then I see create cp panel displayed

    @AURORA_CLM
    Scenario:Verify whether user is able to remove cp for an existing contract
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I search for a cp
        And I select and add 10 cps
        And I click on options in cp card
        And I click on remove option
        And I click on remove button in remove popup
        Then I see cp is removed from the list

    @AURORA_CLM
    Scenario:Verify that user gets a cp mandatory toast message when tries to remove the only cp avaialble for an existing contract
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I link one cp to the contract and remove
        Then I see cp mandatory toast message

    # Scenario:Verify whether user gets cp inactive/deleted message when tries to edit the inactive/deleted message
    #     When I click on option in cp card
    #     And I click on edit option
    #     Then I see cp inactive/deleted message in the edit cp panel

    @AURORA_CLM
    Scenario:Verify whether added cp is saved when clicked on save in contract details for existing contracts
        When I search for repository draft status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I search for a cp
        And I select a cp from the dropdown list
        And I clicked on save as draft button in the aurora contract details page
        Then I see added cp is saved

    @AURORA_CLM
    Scenario:Verify whether user is able to add cp to existing contract with inactive status
        When I search for inactive status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I search for a cp
        And I select a cp from the dropdown list
        Then I see the selected cp card display

    @AURORA_CLM
    Scenario:Verify whether user is able to add cp to existing contract with repository draft status
        When I search for repository draft status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I search for a cp
        Then I select a cp from the dropdown list
        And I see the selected cp card display

    @AURORA_CLM
    Scenario:Verify whether user is able to add cp to existing contract with termination notice served status
        When I search for termination notice served status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I search for a cp
        Then I select a cp from the dropdown list
        And I see the selected cp card display

    @AURORA_CLM
    Scenario:Verify whether user is able to add cp to existing contract with expired status
        When I search for expired status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I search for a cp
        Then I select a cp from the dropdown list
        And I see the selected cp card display

    @AURORA_CLM
    Scenario:Verify whether user is able to add cp to existing contract with pending publish status
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I search for a cp
        Then I select a cp from the dropdown list
        And I see the selected cp card display

    #There is an issue related to this scenario
    # Scenario:Verify whether user is not able to add cp to existing contract with archived status
    #     When I search for archived status contract
    #     And I view first contract from the grid
    #     And I click on redirect to aurora button
    #     Then I see cp is not editable


    #CP should not be set as mandatory

    @AURORA_CLM
    Scenario:Verify whether mandatory symbol is not displayed near cp header
        When I navigate to product configuration
        And I click on application settings
        And I set cp as non mandatory in application settings
        And I navigate to repository tab
        And I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        Then I check no mandatory symbol near cp header

    @AURORA_CLM
    Scenario:Verify whether cp mandatory message is not displayed when clicked on save button in contract details without selecting cp
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I fill only mandatory fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        Then I see cp mandatory message is not displayed

    @AURORA_CLM
    Scenario:Verify whether default cp type is displayed in the cp type field
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        Then I check default cp type in the cp type field

    @AURORA_CLM
    Scenario:Verify whether user gets no matching found in the search result when searched for no matching cp search
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I fill only mandatory fields in the aurora contract details page
        And I type invalid cp name in the search field
        Then I see no matching found message in the search result

    # Scenario:Verify whether user gets create cp option at the botton of the search result list -- Not implemented yet
    #     Then I see create cp option in the cp result dropdown

    @AURORA_CLM
    Scenario:Verify whether user is able to search and find the cp result
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I search for a cp
        Then I see the respective autosuggestion list

    # Scenario:Verify whether user is able to scroll the search result till the end -- limitation
    #     Then I scroll the search result till the end

    @AURORA_CLM
    Scenario:Verify whether user is able to select the cp from the list
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I search for a cp
        Then I select a cp from the dropdown list

    @AURORA_CLM
    Scenario:Verify whether user is able to search and select cp for all the available cp type
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        Then I select a cp from the dropdown list

    # Scenario:Verify whether toast message is displayed when a new cp is added -- Decided later this toast msg is not required
    #     Then I see a toast message when cp is added

    @AURORA_CLM
    Scenario:Verify whether new cp card is displayed with the selected cp
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        Then I select a cp from the dropdown list
        And I see the selected cp card display

    @AURORA_CLM
    Scenario:Verify whether user is able to select any address if there cp has multiple addresses
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I select cp address from the dropdown
        Then I see selected address being populated in the cp card

    @AURORA_CLM
    Scenario:Verify whether user is able to select any cpp if there cp has multiple cpp associated
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I select cpp from the dropdown
        Then I check contact person in the cp card

    @AURORA_CLM
    Scenario:Verify that user does not get cp mandatory toast message when tries to remove the only cp avaialble
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I click on options in cp card
        And I click on remove option
        Then I see cp mandatory toast message

    @AURORA_CLM
    Scenario:Verify whether user is able to select multiple cps of 10 in number
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select and add 10 cps
        Then I see added cp cards displayed

    @AURORA_CLM
    Scenario:Verify whether added cp count is displayed beside cp header
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select and add 10 cps
        Then I check the number displayed beside the cp header

    @AURORA_CLM
    Scenario:Verify whether user is able to mark as primary for the cps which are not primary
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select and add 10 cps
        And I click on options in cp card
        And I click on mark as primary option
        Then I see the present cp card having primary tag

    @AURORA_CLM
    Scenario:Verify whether user gets a remove popup when clicked on remove option
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select and add 10 cps
        And I click on options in cp card
        And I click on remove option
        Then I get a remove popup

    @AURORA_CLM
    Scenario:Verify whether cp is not removed from the list when clicked on no button in the remove popup
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select and add 10 cps
        And I click on options in cp card
        And I click on remove option
        And I get a remove popup
        And I clicked on cancel button in remove popup
        Then I see remove popup is canceled

    @AURORA_CLM
    Scenario:Verify whether cp gets removed from the list when clicked on yes in the remove popup
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select and add 10 cps
        And I click on options in cp card
        And I click on remove option
        And I click on remove button in remove popup
        Then I see remove popup is canceled
        And I see cp is removed from the list

    #Not yet implemented
    # Scenario:Verify whether user gets the edit panel when clicked on edit option
    #     When I clicked on upload contract in aurora button
    #     And I fill all the metadata fields in new contract page
    #     And I upload pdf format document
    #     And I wait until file is uploaded successfully
    #     And I clicked on continue button in new contract page
    #     And I check user lands on aurora contract details page
    #     And I fill only mandatory fields in the aurora contract details page
    #     And I clicked on save button in the aurora contract details page
    #     And I select a cp type randomly
    #     And I search for a cp
    #     And I select a cp from the dropdown list
    #     When I click on option in cp card
    #     And I click on edit option
    #     Then I see edit panel is displayed

    # Scenario:Verify whether user gets a create cp panel when clicked on create contracting party -- Not implemented
    #     When I close the edit cp panel
    #     And I click on create contracting party
    #     Then I see create cp panel displayed

    @AURORA_CLM
    Scenario:Verify whether added cp is saved in the contract details page when clicked on save in contract details page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I fill only mandatory fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I clicked on save button in the aurora contract details page
        Then I see added cp is saved



    #*********************************************************************** User Story AURORA-554:- ENDS *************************************************************


    #    ******************************************************User Story AURORA-97 starts****************************************************************************

    # Make sure attach signed contract document? is selected as optional in the applicaton setting before execution of below scenario
    Scenario: Verify scenarios related to publish contract


    # Manual Scenarios
    # 1.Verify that UI developed for publish page is matching with UX design shared in the jira
    # 2.Verify that publish functionality is working all the recommended browser
    # 3.Verify that publish functionality is working in all the recommended screen resolution
    # 4.Verify that recommended keyboard actions is working in the contract details page during publish contract operation
    # 5.Verify that 503 error page is shown when server is down and user clicks on publish button
    # 6.Verify that focus is shown on first unfilled mandatory field in the metadata section when clicked on save button from the unsaved data popup
    # 7.Verify that previously filled data is not retained when few data are modified,few mandatory fields are left blank,clicked on save button from the unsaved data popup and then refreshed the page
    # 8.CP mandatory is on | Verify that focus is shown in the contracting party section when rest all fields are filled and clicked on publish button
    # 9.Verify that cp mandatory check is done only when publish button is clicked
    # 10.Verify that comment box shown in the publish contract popup is controlled based on the display comment setting in the db
    # 11.Verify that quick alert entry is not shown in the publish contract popup when contract is saved without any contract expiry date
    # 12.Verify that quick alert is not associated to contract when no option for quick alert is selected during publish of the contract
    # 13.Verify that default option for quick alert and inform user is Yes option
    # 14.Verify that contract which is changed from pending publish to any published status like active,inactive,termination notice served,expired from aurora is searchable in the search module
    # 15.Verify that contract which is changed from pending publish to any published status like active,inactive,termination notice served,expired from aurora is searchable in the reports module
    # 16.Verify that contract which is changed from pending publish to any published status like active,inactive,termination notice served,expired from aurora is updated in the salesforce
    # 17.Verify that actions related to publish contract is tracked in the contract timeline
    # 18.Verify that new version with comments is shown in the contract timeline when contract is published by providing comments and without sending any mail to user
    # 19.Verify that new version with comments is shown in the contract timeline when contract is published by providing comments and by sending mail to user
    # 20.Verify that mail related to publish contract is not shown in the view sent mail when contract is published by selecting inform user as no option
    # 21.Verify that mail related to publish contract is not shown in the outlook when contract is published by selecting inform user as no option
    # 22.Verify that publish button is lightly grayed out when anything is edited in the metadata section and until all the mandatory fields are filled
    # 23.Verify that quick alert for expiry date is generated in the Alerts and Reminders menu when quick alert option is Yes and published the contract
    # ****************************************************mail scenarios****************************************************************
    # 24.Verify that first name first letter and last name first letter icon is shown in to field box towards left side of user when any user is added in that field
    # 25.Verify that email template shown in the send publish information popup is shown based on the configured template in the db
    # 26.Verify that metadata tags used in the email template are replaced with the original value when send publish information popup is shown to user
    # 27.Verify that user is not allowed to enter characters more than 255 in the subject field of send publish information popup
    # 28.Verify that user is not allowed to enter characters more than 5000 in the mail body of send publish information popup
    # 29.Verify that entered characters count out of 5000 is shown below the mail body of send publish information popup
    # 30.Verify that added users are shown till the width of to field box and rest will be not shown in the send public information popup
    # 31.Verify that all the added users information is shown to user when clicked on to field box in the send public information popup
    # 32.Verify that entered value in the cc and bcc is not retained when few values are present in cc and bcc,then cc and bcc is closed and opened again
    # 33.Verify that auto suggestion list is shown when email id value is entered in the to/cc/bcc field box
    # 34.Verify that auto suggestion list shown for entered value in the to/cc/bcc is proper data or not
    # 35.Verify that attach signed contract document? option is not shown in the send publish information popup when the setting is set to no option in the application setting
    # 36.Verify that contract attachment is not shown by default in the send publish information popup when the setting is set to no option in the application setting
    # 37.Verify that attach signed contract document? option is shown in the send publish information popup when the setting is set to mandatory option in the application setting
    # 38.Verify that attach signed contract document? option is checked by default and disabled in the send publish information popup when the setting is set to mandatory option in the application setting
    # 39.Verify that contract attachment is shown by default in the send publish information popup when the setting is set to mandatory option in the application setting
    # 40.Verify that attach signed contract document? option is unchecked by default and enabled in the send publish information popup when the setting is set to optional option in the application setting
    # 41.Verify that contract attachment is not shown by default in the send publish information popup when the setting is set to optional option in the application setting
    # 42.Verify that user is not allowed remove attached signed copy in the send publish information popup when the setting is set to mandatory option in the application setting
    # 43.Verify that by default added attachment or new added attachment should not get replaced when the same document is added for second time in the send publish information popup
    # 44.Verify that 3 dots is shown in the attached filename in the send publish information popup when filename is 255 character length
    # 45.Verify that 3 dots is shown for multiple filename in the send publish information popup when multiple filename is 255 character length
    # 46.Verify that filename for all the attached document within the max size limit is shown in the send publish information popup
    # 47.Verify that tooltip for added email id is shown when user hovers on the added mail id in the send publish information popup
    # 48.Verify that tooltip for attached document is shown when user hovers on it
    # 49.Verify that attached document filename is matching with the local filename
    # 50.Verify that attached document filename size is matching with the local filename
    # 51.Verify that error message popup is shown when invalid format documents are dragged and dropped in the send publish information popup
    # 52.Verify that error message popup is shown when zero kb document is dragged and dropped in the send publish information popup
    # 53.Verify that error message popup is shown when blank document is dragged and dropped in the send publish information popup
    # 54.Verify that error message is shown when more than 40mb size document is dragged and dropped in the send publish information popup
    # 55.Verify that error message popup is shown when password protected document is dragged and dropped in the send publish information popup
    # 56.Verify that error message popup is not shown in the send publish information popup when filename is having more than two dot symbol is dragged and dropped on the popup
    # 57.Verify that error message popup is not shown in the send publish information popup when caps document extension is dragged and dropped in the popup
    # 58.Verify that user is able to differentiate between contract signed document and normal attached document in the send publish information popup
    # 59.Verify that refresh related popup is shown when user attach 40mb document in the send publish information popup and clicks on refresh option during file upload is in progress
    # 60.Verify that upload process stops and mail popup gets closed when user accepts refresh related popup
    # 61.Verify that all the popups related to publish user story gets closed when user refresh the browser
    # 62.Verify that user gets warning message when file upload is in progress in the send publish information popup and clicks on browser back button
    # 63.Verify that user lands on publish contract popup when user is on send mail popup and clicks on browser back button
    # ************************************mail scenarios ends************************************************
    # 64.Verify that leave site popup is shown when file upload is in progress in the send publish information popup and user closes the browser tab
    # 65.Verify that error message popup is shown when server error or network error happened during publish of the contract
    # 66.Verify that failed to publish error message is shown after clicked on publish button when cp is non mandatory during creation of new contract and parallely setting is turned on
    # 67.Verify that failed to publish error message is shown after clicked on publish button when cp is non mandatory and during publishing existing contract,the setting is turned on
    # 68.Verify that cp changes done in the master during contract creation process is not associated to the contract until user clicks on save button or save button from unsaved data popup
    # 69.Verify that user is allowed to clone in repository for contracts which are published from the aurora
    # 70.Verify that user is allowed to clone in authoring for contracts which are published from the aurora
    # 71.Verify that user is allowed to create an amendment for contracts which are published from the aurora
    # 72.Verify that user is allowed to create amendment request for contracts which are published from the aurora
    # 73.Verify that new contract which is published from aurora is accessible to user who has respective permissions
    # 74.Verify that publish mail is sent in the outlook for the added users in the publish mail
    # 75.Verify that publish mail sent to added users is tracked in the view sent mails
    # 76.Verify that configuration done in the publish mail is reflected same in the receiver side(eg outlook or view sent mail in clm or anything other mail source)
    # 77.Verify that undelivered mail icon is shown to the aurora contract when publish mail is not delivered to the added user
    # 78.Verify that only one mail is sent to a particular user when that particular is added multiple times in the publish mail and sent
    # 79.Verify that mail sent for the users added in to field,cc field and bcc field in the publish mail
    # 80.Verify that mail receiver can download the attachment from the mail received in the outlook
    # Scenario: Verify that discard the changes popup is not shown when users switches from contract details menu to any other menus
    # When I clicked on upload contract in aurora button
    # And I land on new contract page
    # And  I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I fill all the fields in the aurora contract details
    # And I clicked on save button in the aurora contract details page
    # And I check toaster message for contract saved is shown
    # And I check contract number is generated in the header
    # And I refresh the page
    # And I search contract based on contract number in the grid
    # And I view first contract from the grid
    # And I click on redirect to aurora button
    # And I lands on aurora contract details page
    # And I clicked on document menu
    # Then I check discard the changes popup is not shown in the aurora contract details page
    # Scenario: Verify that refresh popup is not shown to user the metadata form is not edited and clicked on refresh option after clicked on publish button
    # When I clicked on upload contract in aurora button
    # And I land on new contract page
    # And  I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I fill all the fields in the aurora contract details
    # And I clicked on save button in the aurora contract details page
    # And I check toaster message for contract saved is shown
    # And I check contract number is generated in the header
    # And I refresh the page
    # And I search contract based on contract number in the grid
    # And I view first contract from the grid
    # And I click on redirect to aurora button
    # And I land on aurora contract details page
    # And I found publish button is present in the contract header
    # And I clicked on publish button in the contract header
    # When I refresh the page
    # Then I check refresh option related popup is not shown

    # Scenerio:.Verify that discard the changes popup is shown when contract details page is edited and clicked on document menu
    # When I clicked on upload contract in aurora button
    # And I land on new contract page
    # And  I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I fill all the fields in the aurora contract details
    # And I clicked on save button in the aurora contract details page
    # And I check toaster message for contract saved is shown
    # And I check contract number is generated in the header
    # And I refresh the page
    # And I search contract based on contract number in the grid
    # And I view first contract from the grid
    # And I click on redirect to aurora button
    # And I lands on aurora contract details page
    # And I clear contract category field value
    # And I clicked on document menu
    # Then I check discard the changes popup is shown in the aurora contract details page

    # Scenerio:.Verify that discard the changes popup disappears when clicked on cancel button in that particular popup
    # When I clicked on upload contract in aurora button
    # And I land on new contract page
    # And  I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I fill all the fields in the aurora contract details
    # And I clicked on save button in the aurora contract details page
    # And I check toaster message for contract saved is shown
    # And I check contract number is generated in the header
    # And I refresh the page
    # And I search contract based on contract number in the grid
    # And I view first contract from the grid
    # And I click on redirect to aurora button
    # And I lands on aurora contract details page
    # And I clear contract category field value
    # And I clicked on document menu
    # And I check discard the changes popup is shown in the aurora contract details page
    # And I clicked on cancel button in the discard the changes popup
    # Then I check discard the changes popup is not shown in the aurora contract details page

    # Scenerio:.Verify that changes done in the metadata section is retained when clicked on cancel button in the discard the changes popup
    # When I clicked on upload contract in aurora button
    # And I land on new contract page
    # And  I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I fill all the fields in the aurora contract details
    # And I clicked on save button in the aurora contract details page
    # And I check toaster message for contract saved is shown
    # And I check contract number is generated in the header
    # And I refresh the page
    # And I search contract based on contract number in the grid
    # And I view first contract from the grid
    # And I click on redirect to aurora button
    # And I lands on aurora contract details page
    # And I clear contract category field value
    # And I clicked on document menu
    # And I check discard the changes popup is shown in the aurora contract details page
    # And I clicked on cancel button in the discard the changes popup
    # And I check discard the changes popup is not shown in the aurora contract details page
    # Then I check contract category clear icon is shown

    # Scenerio:.Verify that user lands on document menu when clicked on continue button in the discard the changes
    # When I clicked on upload contract in aurora button
    # And I land on new contract page
    # And  I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I fill all the fields in the aurora contract details
    # And I clicked on save button in the aurora contract details page
    # And I check toaster message for contract saved is shown
    # And I check contract number is generated in the header
    # And I refresh the page
    # And I search contract based on contract number in the grid
    # And I view first contract from the grid
    # And I click on redirect to aurora button
    # And I lands on aurora contract details page
    # And I clear contract category field value
    # And I clicked on document menu
    # Then I check discard the changes popup is shown in the aurora contract details page
    # And I click on continue button in the discard the changes popup
    # Then I check user lands on document page

    # Scenerio:.Verify that changes done in the metadata section is not retained when clicked on continue button in the discard the changes popup
    # When I clicked on upload contract in aurora button
    # And I land on new contract page
    # And  I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I fill all the fields in the aurora contract details
    # And I clicked on save button in the aurora contract details page
    # And I check toaster message for contract saved is shown
    # And I check contract number is generated in the header
    # And I refresh the page
    # And I search contract based on contract number in the grid
    # And I view first contract from the grid
    # And I click on redirect to aurora button
    # And I check user lands on aurora contract details page
    # And I clear contract category field value
    # And I clicked on document menu
    # And I check discard the changes popup is shown in the aurora contract details page
    # And I click on continue button in the discard the changes popup
    # And I check user lands on document page
    # And I clicked on contract details menu
    # Then I check contract category clear icon is not shown

    # 26.Verify that added random cp type cp is not associated with the contract when the page is refreshed and accepted the refresh popup
    # When I clicked on upload contract in aurora button
    # And I check new contract page is shown
    # And  I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I add random cp type cp in the contracting party section
    # And I click on refresh option
    # Then I check added cp is not shown in the contracting party section

    # Verify that discard the changes popup is show when random cp type is added in the contracting party section and clicked on document menu without saving the contract
    # When I clicked on upload contract in aurora button
    # And I check new contract page is shown
    # And  I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I fill all the fields in the aurora contract details
    # And I clicked on save button in the aurora contract details page
    # And I check toaster message for contract saved is shown
    # And I check contract number is generated in the header
    # And I add random cp type cp in the contracting party section
    # And I clicked on document menu
    # Then I check discard the changes popup is shown in the aurora contract details page

    # Automation Scenarios


    Scenario: Verify that publish button is partially disabled for repository draft status contract
        When I search for repository draft status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check publish button is partially disabled for repository draft status contract


    Scenario:.Verify that publish button is not shown for active status contract
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check publish button is not present in the contract header

    Scenario:.Verify that publish button is not shown for expired contract
        When I search for expired status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check publish button is not present in the contract header

    Scenario:.Verify that publish button is not shown for inactive status contract
        When I search for inactive status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check publish button is not present in the contract header

    Scenario:.Verify that publish button is not shown for termination notice served status contract
        When I search for termination notice served status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check publish button is not present in the contract header

    Scenario:.Verify that publish button is not shown for archived status contract
        When I search for archived status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check publish button is not present in the contract header

    Scenario:.Verify that publish button is shown for pending publish status contract
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check publish button is present in the contract header

    Scenario:.Verify that unsaved data popup is not shown when existing pending publish contract is viewed in aurora and clicked on publish button
        # When I navigate to product configuration
        # And I click on application settings
        # And I set cp as mandatory in application settings
        # And I navigate to repository tab
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        Then I check unsaved data popup is not shown

    Scenario:.Verify that publish button is shown when new contract creation is done till pending publish status
        # When I navigate to product configuration
        # And I click on application settings
        # And I set cp as mandatory in application settings
        # And I navigate to repository tab
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        Then I check publish button is present in the contract header

    Scenario: Verify that publish button is shown when newly created contract which is in pending publish status is viewed in aurora for second time
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And  I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I have new contract number from aurora
        And I close aurora opened tab
        And I refresh the page
        And I search for newly created contract in the grid based on contract number
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        Then I check publish button is present in the contract header

    Scenario: Verify that unsaved data popup is shown when any particular field is edited in the metadata section and clicked on publish without save
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I clear contract category field value
        And I clicked on publish button in the contract header
        Then I check unsaved data popup is shown

    Scenario: Verify that unsaved data popup disappears when clicked on ok button from the unsaved data popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I clear contract category field value
        And I clicked on publish button in the contract header
        And I clicked on ok button from the unsaved data popup
        Then I check unsaved data popup is not shown

    Scenario: Verify that mandatory message for unfilled field is shown when clicked on ok button from the unsaved data popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I clear contract category field value
        And I clicked on publish button in the contract header
        And I clicked on ok button from the unsaved data popup
        Then I check mandatory message below each mandatory field in the aurora contract details page is shown

    Scenario: Verify that unsaved data popup is shown when all the unfilled mandatory fields are filled and clicked on publish button without save
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I clear contract category field value
        And I select contract category dropdown value
        And I clicked on publish button in the contract header
        Then I check unsaved data popup is shown

    Scenario: Verify that on click on cancel button in the publish contract popup the contract is not published
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I click on cancel button from the publish contract popup
        Then I check published successfully toaster message is not shown

    Scenario: Verify that publish contract popup is shown when clicked on publish button
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        Then I check publish contract popup is shown

    Scenario: Verify that publish contract popup disappears when clicked on cancel button in the publish contract popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I click on cancel button from the publish contract popup
        Then I check publish contract popup is not shown

    Scenario: Verify that quick alert entry is shown in the popup when contract is having contract exipry date filled
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I select renewal option that will show expiry date field
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        Then I check quick alerts entry is shown in the publish contract popup

    Scenario: Verify that comment mandatory error message is shown when comments are mandatory and clicked on publish button in the popup without filling comment box
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I clicked on publish button in the publish contract popup
        Then I check comment mandatory error message is shown

    Scenario: Verify that email popup is not shown to user when no option for inform user is selected and clicked on publish button in the publish contract popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill comment box and select no option for both inform user and quick alerts options
        And I clicked on publish button in the publish contract popup
        Then I check email popup is not shown on the ui

    # issue the toaster is not shown
    Scenario: Verify that alerts added toaster message is not shown when quick alert option is selected as no in the publish contract popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill comment box and select no option for both inform user and quick alerts options
        And I clicked on publish button in the publish contract popup
        Then I check alerts added toaster message is not shown

    Scenario: Verify that user is allowed to publish the contract without sending any mail to the author or other users
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill comment box and select no option for both inform user and quick alerts options
        And I clicked on publish button in the publish contract popup
        Then I check published successfully toaster message is shown
    # Then I check contract status is not in pending publish status in the contract header

    # Issue in app
    Scenario: Verify that publish button is not shown when contract is published without sending any mail to user
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill comment box and select no option for both inform user and quick alerts options
        And I clicked on publish button in the publish contract popup
        And I land on aurora contract details page
        Then I check publish button is not present in the contract header

    Scenario: Verify that send publish information popup is shown when inform user is selected as yes,other fields are filled and clicked on publish button from the publish contract popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        Then I check email popup is shown on the ui

    #*******************************************When cp mandatory settings is turned on*******************************************

    Scenario: CP Mandatory is on | Verify that cp mandatory error message is shown in the cp section after clicked on save button without any cp in the metadata section
        When I navigate to product configuration
        And I click on application settings
        And I set cp as mandatory in application settings
        And I navigate to repository tab
        And I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        Then I see cp mandatory message

    Scenario: Verify that added random cp is associated with contract when clicked on ok button from the unsaved data popup without save
        When I navigate to product configuration
        And I click on application settings
        And I set cp as non mandatory in application settings
        And I navigate to repository tab
        And I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I have new contract number from aurora
        And I close aurora opened tab
        And I navigate to product configuration
        And I click on application settings
        And I set cp as mandatory in application settings
        And I navigate to repository tab
        And I search for newly created contract in the grid based on contract number
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I clear contract category field value
        And I add random cp type cp in the contracting party section
        And I clicked on publish button in the contract header
        And I clicked on ok button from the unsaved data popup
        Then I see the selected cp card display

    Scenario: Verify that contracting party mandatory toaster message is not shown once the contracting party is associated with contract when clicked on publish button without save
        When I navigate to product configuration
        And I click on application settings
        And I set cp as non mandatory in application settings
        And I navigate to repository tab
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I have new contract number from aurora
        And I close aurora opened tab
        And I navigate to product configuration
        And I click on application settings
        And I set cp as mandatory in application settings
        And I navigate to repository tab
        And I search for newly created contract in the grid based on contract number
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I clear contract category field value
        And I add random cp type cp in the contracting party section
        And I clicked on publish button in the contract header
        Then I see cp mandatory toast message is not shown
        And I see the selected cp card display

    #**********************************************When cp mandatory settings is turned off*******************************************

    Scenario: Verify that publish contract popup is shown when cp mandatory setting is off and clicked on publish button in the header
        When I navigate to product configuration
        And I click on application settings
        And I set cp as non mandatory in application settings
        And I navigate to repository tab
        And I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        Then I check publish contract popup is shown

    Scenario: Verify that publish contract popup is not shown when random cp type cp is added in the contracting party section and clicked on publish button in the header without saving the contract
        When I navigate to product configuration
        And I click on application settings
        And I set cp as non mandatory in application settings
        And I navigate to repository tab
        And I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I add random cp type cp in the contracting party section
        And I clicked on publish button in the contract header
        Then I check publish contract popup is not shown

    Scenario: Verify that unsaved data popup is shown when new random cp type cp is added in the contracting party section
        When I navigate to product configuration
        And I click on application settings
        And I set cp as non mandatory in application settings
        And I navigate to repository tab
        And I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I add random cp type cp in the contracting party section
        And I clicked on publish button in the contract header
        Then I check unsaved data popup is shown

    #************************************** email related scenarios**********************************************************

    Scenario: Verify that by default to field in the send publish information is blank after clicked on publish button from the publish contract popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        Then I check default to field in the send publish information is blank

    Scenario: Verify that by default subject field has configured value in the send publish information popup after clicked on publish button from the publish contract popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        Then I check subject field in the send publish information popup is not blank

    Scenario: Verify that by default CC and BCC field box is shown in the send publish information popup after clicked on publish button from the publish contract popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        Then I check cc and bcc field box is shown in the send publish information popup

    Scenario: Verify that cc and bcc field box in the send publish information popup is blank by default after clicked on publish button from the publish popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        Then I check cc and bcc field box in the send publish information popup is blank

    Scenario: Verify that mandatory error message is shown for all the fields in the send publish information popup when all the field values are made blank and clicked on send button
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I click on send button in the send publish information popup
        Then I check mandatory message for all the fields mandatory fields in the send publish information popup is shown

    Scenario: Verify that mandatory message for non mandatory field is not shown in the send publish information popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I click on send button in the send publish information popup
        Then I check mandatory message for cc and bcc is not shown in the send publish information popup

    Scenario: Verify that mandatory error message is not shown for to field when it is filled and clicked on send button in the send publish information popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I enter random no of emails in the to field box
        And I click on send button in the send publish information popup
        Then I check mandatory error message for to field is not shown in the send publish information popup

    Scenario: Verify that mandatory error message is shown for subject field when To field is filled and subject field is left blank after clicked on send button
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I enter random no of emails in the to field box
        And I click on send button in the send publish information popup
        Then I check mandatory error message for subject field is shown in the send publish information popup

    Scenario: Verify that user is allowed to remove added users in the to field box by clicking on x icon
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I enter random no of emails in the to field box
        And I clear to field in the send publish information popup
        Then I check to field in the send publish information popup is blank

    Scenario: Verify that mandatory error message is not shown for subject field when it is filled and clicked on send button in the send publish information popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I enter value in the subject in the send publish information popup
        And I click on send button in the send publish information popup
        Then I check no mandatory error message for subject field is shown in the send publish information popup

    Scenario: Verify that mandatory error message is shown for to field when subject field is filled and to field is left blank after clicked on send button
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I enter value in the subject in the send publish information popup
        And I click on send button in the send publish information popup
        Then I check mandatory error message for to field is shown in the send publish information popup

    Scenario: Verify that an error message related to invalid email id is shown when user adds random invalid email id's in cc and bcc field of send publish information popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I enter random invalid email ids in the cc and bcc field of send publish information popup
        Then I check error message related to invalid email id is shown

    # # issue with app or scenario can be invalid
    # Scenario: Verify that an error message related to more than 255 characters in the particular mail id is shown when user add mail id which having more than 255 character length
    #     When I search for pending publish status contract
    #     And I view first contract from the grid
    #     And I click on redirect to aurora button
    #     And I land on aurora contract details page
    #     And I click on expand or collapse all icon
    #     And I click on expand or collapse all icon
    #     And I add random cp type cp in the contracting party section
    #     And I clicked on save button in the aurora contract details page
    #     And I land on aurora contract details page
    #     And I clicked on publish button in the contract header
    #     And I fill other fields and select inform user as yes option
    #     And I clicked on publish button in the publish contract popup
    #     And I make all the fields in the send publish information popup as blank
    #     And I add email id which is having 256 character length in cc and bcc field of the send publish information popup
    #     And I click on send button in the send publish information popup
    #     Then I check error message related to more than 255 character length in the mail id is shown

    Scenario: Verify that an error message is not shown when 500 email ids entered in cc and bcc field are duplicate mail id
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I add 500 duplicate email ids in cc and bcc field box of send publish information popup
        And I click on send button in the send publish information popup
        Then I check mandatory message for cc and bcc is not shown in the send publish information popup

    Scenario: Verify that an error message is not shown when each mail id with 255 character length is added upto 500 mail ids in the cc and bcc of send publish information popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I add each mail id with 255 character length upto 500 mail ids in cc and bcc of send publish information popup
        And I click on send button in the send publish information popup
        Then I check mandatory message for cc and bcc is not shown in the send publish information popup

    Scenario: Verify that an error message is not shown when 1 character length email id name(eg. a@ultria.com) is added in the cc and bcc of send publish information popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I add 1 character length email id name in cc and bcc of send publish information popup
        And I click on send button in the send publish information popup
        Then I check mandatory message for cc and bcc is not shown in the send publish information popup

    Scenario: Verify that an error message related to invalid email id is shown when user adds random invalid email id's in to field of send publish information popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I enter random invalid email ids in the to field of send publish information popup
        Then I check error message related to invalid email id is shown

    Scenario: Verify that an error message is not shown when 500 email ids entered in to field are duplicate mail ids
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I add 500 duplicate email ids in to field box of send publish information popup
        And I click on send button in the send publish information popup
        Then I check mandatory error message for to field is not shown in the send publish information popup

    # # issue in app or scenario can be invalid
    # Scenario: Verify that an error message related to more than 255 characters in the particular mail id is shown when user add mail id which having more than 255 character length
    #     When I search for pending publish status contract
    #     And I view first contract from the grid
    #     And I click on redirect to aurora button
    #     And I land on aurora contract details page
    #     And I click on expand or collapse all icon
    #     And I click on expand or collapse all icon
    #     And I add random cp type cp in the contracting party section
    #     And I clicked on save button in the aurora contract details page
    #     And I land on aurora contract details page
    #     And I clicked on publish button in the contract header
    #     And I fill other fields and select inform user as yes option
    #     And I clicked on publish button in the publish contract popup
    #     And I make all the fields in the send publish information popup as blank
    #     And I add email id which is having 256 character length in to field
    #     And I click on send button in the send publish information popup
    #     Then I check error message related to more than 255 character length in the mail id is shown

    Scenario: Verify that an error message related to more than 500 user added is shown when user adds 501 email id's in the to field of send publish information popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I add 501 email ids in the to field of send publish information popup
        And I click on send button in the send publish information popup
        Then I check error message related to more than 500 email ids added is shown

    Scenario: Verify that an error message is not shown when each mail id with 255 character length is added upto 500 mail ids in the to field of send publish information popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I add each mail id with 255 character length upto 500 mail ids in to field of send publish information popup
        And I click on send button in the send publish information popup
        Then I check mandatory error message for to field is not shown in the send publish information popup

    Scenario: Verify that an error message is not shown when 1 character length email id name(eg. a@ultria.com) is added in the to field of send publish information popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I add 1 character length email id name in to field of send publish information popup
        And I click on send button in the send publish information popup
        Then I check mandatory error message for to field is not shown in the send publish information popup

    Scenario: Verify that an error message is not shown when 255 character length subject value is entered in the send publish information popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I enter 255 character length subject value in the subject field of send publish information popup
        And I click on send button in the send publish information popup
        Then I check no mandatory error message for subject field is shown in the send publish information popup

    Scenario: Verify that user is allowed to edit email template sample shown in the email body in the send publish information
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I enter some random value in the mail body of send publish information popup
        Then I check entered value is reflected in the mail body of send publish information popup

    Scenario: Verify that user is allowed to add content upto 5000 character length to the email template sample shown in the send publish information popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I add content upto 5000 character length in the mail body of send publish information popup
        Then I check 5000 of 5000 characters message is shown below the mail body of send publish information popup

    # attachment of signed copy document feature is an limitation
    # # 76.Verify that contract signed document gets attached in the send publish information popup when user selects yes option for attach signed contract document?

    # When I clicked on upload contract in aurora button
    # And I check new contract page is shown
    # And  I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I fill all the fields in the aurora contract details
    # And I clicked on save button in the aurora contract details page
    # And I check toaster message for contract saved is shown
    # And I check contract number is generated in the header
    # And I check publish button is present in the contract header
    # And I clicked on publish button in the contract header
    # And I check Publish contract popup is shown
    # And I check toaster message for Published contract is shown
    # And  I fill  the comment box
    # And I mark yes in quick alert and inform user select field
    # And I clicked on Publish button from the Publish contract popup
    # And I check email popup is shown on the ui
    # And I select yes option in the send publish information popup
    # Then I check contract signed document is shown in the send publish information popup


    # # 77.Verify that user will not have option to removed contract signed document in the send publish information popup when user selects yes option for attach signed contract document?
    # When I clicked on upload contract in aurora button
    # And I check new contract page is shown
    # And  I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I fill all the fields in the aurora contract details
    # And I clicked on save button in the aurora contract details page
    # And I check toaster message for contract saved is shown
    # And I check contract number is generated in the header
    # And I check publish button is present in the contract header
    # And I clicked on publish button in the contract header
    # And I check Publish contract popup is shown
    # And I check toaster message for Published contract is shown
    # And  I fill  the comment box
    # And I mark yes in quick alert and inform user select field
    # And I clicked on Publish button from the Publish contract popup
    # And I check email popup is shown on the ui
    # And I select yes option in the send publish information popup
    # And I check contract signed document is shown in the send publish information popup
    # Then I check remove attachment icon is not shown towards right side of filename


    # # 78.Verify that contract signed attachment gets removed automatically in the send publish information popup when user selects no option for attach signed contract document?
    # When I clicked on upload contract in aurora button
    # And I check new contract page is shown
    # And  I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I fill all the fields in the aurora contract details
    # And I clicked on save button in the aurora contract details page
    # And I check toaster message for contract saved is shown
    # And I check contract number is generated in the header
    # And I check publish button is present in the contract header
    # And I clicked on publish button in the contract header
    # And I check Publish contract popup is shown
    # And I check toaster message for Published contract is shown
    # And  I fill  the comment box
    # And I mark yes in quick alert and inform user select field
    # And I clicked on Publish button from the Publish contract popup
    # And I check email popup is shown on the ui
    # And I select yes option in the send publish information popup
    # And I check contract signed document is shown in the send publish information popup
    # And I select no option in the send publish information popup
    # Then I check contract signed document is not shown in the send publish information popup

    Scenario: Verify that error popup is shown when random invalid format like image,exe,json,property file,java file,excel,zip..etc is uploaded in the send publish information popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I upload random invalid format document in the send publish information popup
        Then I check invalid format error popup is shown

    Scenario: Verify that invalid format popup disappears when clicked on ok button in the popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I upload random invalid format document in the send publish information popup
        And I clicked on ok button in the invalid format related error popup
        Then I check invalid format error popup disappears

    Scenario: Verify that error popup is shown when random format blank document is uploaded in the send publish information popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I upload random blank valid format document in the send publish information popup
        Then I check blank document related error popup is shown

    Scenario: Verify that blank document or zero kb related to error popup disappears when clicked on ok button in the popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I upload random blank valid format document in the send publish information popup
        And I clicked on ok button in the blank document related error popup
        Then I check blank document related error popup disappears

    Scenario: Verify that error message is shown when valid format(doc,docx and pdf) document which having more than 5mb size is uploaded in the send publish information popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I upload random valid format document greater than 5mb size in the send publish information popup
        Then I check file size limit exceeded message popup is shown

    # Verify that file size limit disappears after ok

    # Verify that file doesnt get attached after clicked on ok button


    Scenario: Verify that error popup is shown when random format password protected document is uploaded in the send publish information popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I upload random format password protected document in the send publish information popup
        Then I check error popup related to passowrd protected document is shown

    Scenario: Verify that error popup related format password protected document disappears when clicked on ok button in the popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I upload random format password protected document in the send publish information popup
        And I clicked on ok button in the password protected related error popup
        Then I check password protected related error message is not shown

    Scenario: Verify that error message popup is not shown when valid random format document is attached in the send publish information popup
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload very less kb contract document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I upload random valid format document in the send publish information popup
        And I wait until file is uploaded successfully in the send publish information popup
        Then I check invalid format error popup is not shown

    Scenario: Verify that progress bar is shown when document is attached to the send publish information popup
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload very less kb contract document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I upload below 5mb format document in the send publish information popup
        Then I check file upload progress bar is shown in the send publish information popup

    Scenario: Verify that warning message popup is shown when user clicks on send button during file upload process is in progress in the send publish information popup
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload very less kb contract document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I upload below 5mb format document in the send publish information popup
        And I click on send button in the send publish information popup
        Then I check please wait popup is not shown


    Scenario: Verify that error message popup is not shown when below 5mb document is attached in the send publish information popup
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload very less kb contract document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I make all the fields in the send publish information popup as blank
        And I upload below 5mb format document in the send publish information popup
        And I wait until file is uploaded successfully in the send publish information popup
        Then I check invalid format error popup is not shown

    Scenario: Verify that user is allowed to remove attachment in the send publish information popup
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload very less kb contract document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I make all the fields in the send publish information popup as blank
        And I upload below 5mb format document in the send publish information popup
        And I wait until file is uploaded successfully in the send publish information popup
        And I remove recently uploaded attachement
        Then I check no attachment is shown in the send publish information popup

    Scenario: Verify that error message popup is not shown when multiple valid documents is attached in the send publish information popup within the max limit
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload very less kb contract document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I upload multiple valid format documents until max limit is reached
        Then I check invalid format error popup is not shown

    # limitation
    # # 94.Verify that error message is shown in the send publish information popup when attached document max size is reached and user selects yes option for attach signed contract document?
    # When I clicked on upload contract in aurora button
    # And I check new contract page is shown
    # And  I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I fill all the fields in the aurora contract details
    # And I clicked on save button in the aurora contract details page
    # And I check toaster message for contract saved is shown
    # And I check contract number is generated in the header
    # And I check publish button is present in the contract header
    # And I clicked on publish button in the contract header
    # And I check Publish contract popup is shown
    # And I check toaster message for Published contract is shown
    # And  I fill  the comment box
    # And I mark yes in quick alert and inform user select field
    # And I clicked on Publish button from the Publish contract popup
    # And I check email popup is shown on the ui
    # And I upload multiple valid format documents until max limit is reached
    # And I check error message is not shown in the send publish information popup
    # And I select yes option in the send publish information popup
    # Then I check error message is shown in the send publish information popup

    # limitation
    # # 95.Verify that attach signed contract document? option is not selected to yes after error message related to max size limit is shown in the send publish information popup
    # Then I check contract signed document is not shown in the send publish information popup

    # limitation
    # # 96.Verify that user is allowed to attach contract signed document in the send publish information when attached document max size limit is not reached and user selects yes option for attach signed contract document?
    # When I clicked on upload contract in aurora button
    # And I check new contract page is shown
    # And  I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I fill all the fields in the aurora contract details
    # And I clicked on save button in the aurora contract details page
    # And I check toaster message for contract saved is shown
    # And I check contract number is generated in the header
    # And I check publish button is present in the contract header
    # And I clicked on publish button in the contract header
    # And I check Publish contract popup is shown
    # And I check toaster message for Published contract is shown
    # And  I fill  the comment box
    # And I mark yes in quick alert and inform user select field
    # And I clicked on Publish button from the Publish contract popup
    # And I check email popup is shown on the ui
    # And I upload multiple valid format documents until max limit is reached
    # And I remove one of the attachment from the send publish information popup
    # And I select yes option in the send publish information popup
    # And I check contract signed document is shown in the send publish information popup
    # Then I check error message is not shown in the send publish information popup

    Scenario: Verify that new Skip sending this email? popup is shown when clicked on cancel button in the send publish popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I click on cancel button in the send publish information popup
        Then I check skip sending this mail popup is shown

    Scenario: Verify that user is navigated to contract detail page when clicked on skip Email button from Skip sending this email? popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I click on cancel button in the send publish information popup
        And I click on skip Email button
        Then I land on aurora contract details page


    Scenario: Verify that user is navigated to Send Publish Information page when he clicks on cancel button from Skip sending this email? popup
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I click on cancel button in the send publish information popup
        And I click on cancel button in skip mail popup
        Then I check publish contract popup is shown

    Scenario: Verify that user is allowed to publish the contract by sending mail to users
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I fill all the fields in the email popup
        And I click on send button in the send publish information popup
        Then I check mail sent successfully toaster message is shown

    Scenario: Verify that user is allowed to send publish mail to 500 users
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I add 500 email ids in the to field of send publish information popup
        And I click on send button in the send publish information popup
        Then I check error message related to more than 500 email ids added is not shown
        And I check mail sent successfully toaster message is shown

    Scenario: Verify that user is allowed to send publish mail by adding 255 characters in the mail subject field
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I fill all the fields in the email popup
        And I enter 255 character length subject value in the subject field of send publish information popup
        And I click on send button in the send publish information popup
        Then I check error message related to invalid subject field is not shown
        And I check mail sent successfully toaster message is shown

    Scenario: Verify that user is allowed to send publish mail by adding 5000 characters in the mail body
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I fill all the fields in the email popup
        And I add content upto 5000 character length in the mail body of send publish information popup
        And I click on send button in the send publish information popup
        Then I check mail sent successfully toaster message is shown

    Scenario: Verify that published successfully toaster message is shown after publish mail is sent
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        Then I check published successfully toaster message is shown

    Scenario: Verify that contract status changes from pending publish to selected value in the contract status dropdown in the aurora contract details
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I fill all the fields in the email popup
        And I add content upto 5000 character length in the mail body of send publish information popup
        And I click on send button in the send publish information popup
        And I land on aurora contract details page
        Then I check contract status is not in pending publish status in the contract header

    Scenario: Verify that once new contract is published publish button is not shown in the contract header
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And  I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I fill all the fields in the email popup
        And I add content upto 5000 character length in the mail body of send publish information popup
        And I click on send button in the send publish information popup
        And I land on aurora contract details page
        Then I check publish button is not present in the contract header

    Scenario: Verify that user is allowed publish existing contract pending publish status that is viewed from the grid
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I fill all the fields in the email popup
        And I add content upto 5000 character length in the mail body of send publish information popup
        And I click on send button in the send publish information popup
        And I land on aurora contract details page
        Then I check contract status is not in pending publish status in the contract header

    Scenario: Verify that user is allowed to publish contract from other menus in the aurora contract
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on document menu
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I fill all the fields in the email popup
        And I add content upto 5000 character length in the mail body of send publish information popup
        And I click on send button in the send publish information popup
        And I land on aurora contract details page
        Then I check contract status is not in pending publish status in the contract header

    # limitation
    # Scenario: Verify that all other menus in the contract is enabled to user after contract is published
    #     Then I check all other menus in the contract is enabled to user
    #     Then I close aurora opened tab
    #     When I search for pending publish status contract
    #     Then I view first contract from the grid
    #     When I click on redirect to aurora button
    #     Then I check user lands on aurora contract details page
    #     When I make contract status dropdown as termination notice served
    #     And I clicked on save button in the aurora contract details page
    #     When I clicked on publish button in the contract header
    #     When I fill comment box and select yes option for both inform user and quick alerts options
    #     And I clicked on publish button in the publish contract popup
    #     And I add ultria email id in to field of send publish information popup
    #     And I enter 255 character length subject value in the subject field of send publish information popup
    #     And I add multiple attachment along with contract signed document
    #     And I enter 255 character length subject value in the subject field of send publish information popup
    #     And I add content upto 5000 character length in the mail body of send publish information popup
    #     And I click on send button in the send publish information popup


    Scenario: Verify that alerts added toaster message is shown after publish mail is sent when contract status dropdown is termination notice served and quick alert option is selected as yes
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And  I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I fill all the fields in the aurora contract details page
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I make alter option as yes in send publish information popup
        And I clicked on publish button in the publish contract popup
        Then I check alerts added toaster message is shown

    Scenario: Verify that user is allowed to send publish mail when user email id is 255 character length
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        And I add random cp type cp in the contracting party section
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        And I clicked on document menu
        And I clicked on publish button in the contract header
        And I fill other fields and select inform user as yes option
        And I clicked on publish button in the publish contract popup
        And I fill all the fields in the email popup
        And I add content upto 5000 character length in the mail body of send publish information popup
        And I click on send button in the send publish information popup
        And I add email id which is having 255 character length
        And I add content upto 5000 character length in the mail body of send publish information popup
        And I click on send button in the send publish information popup
        Then I check mail sent successfully toaster message is shown

    #*********************************************************************** User Story AURORA-97 :- ENDS **************************************************************


    #*********************************************************************** User Story AURORA-603 :- STARTS ***********************************************************
    # /**
    #  *
    #  *
    #  * @author Minaz Khan
    #  *
    #  *
    #  */

    #manual scenario
    #1.Verify whether Restricted Party Screening label is removed from all the CP cards once the MSR flag in DB ------? MSR flag on or off is missed
    # When I login to Aurora DB
    # And I open application_setting db
    # And I change the value of setting_key IS_MSR_ENABLED to false
    # And I login to clm application
    # And I select CLM product in product selection page
    # And I click on manage contract tab
    # And I click on repository sub tab
    # And I clicked on upload contract in aurora button
    # And I land on new contract page
    # And I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I select a cp type randomly
    # And I search for a cp
    # And I select a cp from the dropdown list
    # Then I should see that Restricted Party Screening label is removed from all the CP cards

    #2.Verify whether the MSR Flag for a cp is retained even after adding new CPs
    # When I login to clm application
    # And I select CLM product in product selection page
    # And I click on manage contract tab
    # And I click on repository sub tab
    # And I clicked on upload contract in aurora button
    # And I land on new contract page
    # And I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I select a cp type randomly
    # And I search for a cp
    # And I select a cp from the dropdown list
    # And I should be able to click on Restricted Part Screeninng label
    # And I click on Restricted Party Screening result form close option
    # And I see the MSR flag colour in cp card is changes to the Restricted Party Screening result alert popup flag
    # And I select another cp type randomly
    # And I search for a cp
    # And I select a cp from the dropdown list
    # Then I should see the same MSR flag that the cp had fo which MSR screening as done

    #3.Verify whether the MSR Flag for a cp is retained even after MSR is performed for other CPs
    # When I login to clm application
    # And I select CLM product in product selection page
    # And I click on manage contract tab
    # And I click on repository sub tab
    # And I clicked on upload contract in aurora button
    # And I land on new contract page
    # And I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I select a cp type randomly
    # And I search for a cp
    # And I select and add 10 cps
    # And I should be able to click on Restricted Part Screeninng label
    # And I click on Restricted Party Screening result form close option
    # And I see the MSR flag colour in cp card is changes to the Restricted Party Screening result alert popup flag
    # And I click on Restricted Part Screeninng label for another CP
    # And I click on Restricted Party Screening result form close option
    # And I see the MSR flag colour in cp card is changes to the Restricted Party Screening result alert popup flag
    # Then I should see the same MSR flag that the cp had fo which MSR screening was done initially

    #4.Verify whether the MSR Flag for a cp is retained even after MSR is performed for other CPs
    # When I login to clm application
    # And I select CLM product in product selection page
    # And I click on manage contract tab
    # And I click on repository sub tab
    # And I clicked on upload contract in aurora button
    # And I land on new contract page
    # And I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I select a cp type randomly
    # And I search for a cp
    # And I select a cp from the dropdown list
    # And I should be able to click on Restricted Part Screeninng label
    # And I click on Restricted Party Screening result form close option
    # And I see the MSR flag colour in cp card is changes to the Restricted Party Screening result alert popup flag
    # And I refereesh the Aurora page
    # Then I should see the same MSR flag that the cp had fo which MSR screening was done

    #5.Verify whether the flag colour in cp card is same as the flag colour of  Restricted Party Screening result alert popup once the Restricted Party Screening result form is closed
    # When I login to clm application
    # And I select CLM product in product selection page
    # And I click on manage contract tab
    # And I click on repository sub tab
    # And I clicked on upload contract in aurora button
    # And I land on new contract page
    # And I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I select a cp type randomly
    # And I search for a cp
    # And I select a cp from the dropdown list
    # And I should be able to click on Restricted Part Screeninng label
    # And I click on Restricted Party Screening result form close option
    # Then I see the MSR flag colour in cp card is changed to the colour mentioned in backend

    #6.Verify whether MSR can be performed on a contract whose request source is Salesforce
    # When I login to salesforce
    # And I request for a contract
    # And I login to clm application
    # And i open the requested contract
    # And I get it to the repository stage
    # And I open that respective contract
    # And I click on view in Aurora button
    # And I see select a CP
    # Then i should be able to perform MSR

    #7.Verify whether MSR can be performed on a contract whose request source is Ultria
    # When I login to clm application
    # And I request for a contract
    # And I open the requested contract
    # And I get it to the repository stage
    # And I open that respective contract
    # And I click on view in Aurora button
    # And I  select a CP
    # Then I should be able to perform MSR

    #8.Verify whether MSR can be performed on a contract whose request source is Outlook connect
    # When I reuest a contract through outlook
    # And I login to clm application
    # And I open the requested contract
    # And I get it to the repository stage
    # And I open that respective contract
    # And I click on view in Aurora button
    # And I  select a CP
    # Then I should be able to perform MSR

    #9.Verify whether MSR can be performed on a contract created from Authoring
    # When I login to clm application
    # And I create a contract through Authoring
    # And I get it to the repository stage
    # And I open that respective contract
    # And I click on view in Aurora button
    # And I  select a CP
    # Then I should be able to perform MSR

    #10.Verify whether the MSR flag shown in repository after msr is same as the MSR flag shown in Aurora
    # When I login to clm application
    # And I select CLM product in product selection page
    # And I click on manage contract tab
    # And I click on repository sub tab
    # And I open a contract
    # And I go to contracting party tab
    # And I do MSR process for a cp
    # And I open the same contract in aurora
    # And I go to cp tab
    # Then I should see the same flag colour in aurora as it was in CLM

    #11.Verify whether the MSR flag shown in Aurora after msr is same as the MSR flag shown in repository
    # When I login to clm application
    # And I select CLM product in product selection page
    # And I click on manage contract tab
    # And I click on repository sub tab
    # And I open a contract
    # And I view the contract in Aurora
    # And I go to contracting party tab
    # And I do MSR process for a cp
    # And I select a cp
    # And I do MSR process for that cp
    # And I open the same contract in repository
    # Then I should see the same flag colour in repository as it was in Aurora

    #12.Verify whether the CP card is highlighted when its respective Restricted Party Screening label is clicked
    # When I login to clm application
    # And I select CLM product in product selection page
    # And I click on manage contract tab
    # And I click on repository sub tab
    # And I clicked on upload contract in aurora button
    # And I land on new contract page
    # And I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I select a cp type randomly
    # And I search for a cp
    # And I select a cp from the dropdown list
    # And I should be able to click on Restricted Part Screeninng label
    # Then I see the respective cp card highlighted

    #13.Verify whether default flag is shown for the cps when Restricted Party Screening is not performed
    # When I login to clm application
    # And I select CLM product in product selection page
    # And I click on manage contract tab
    # And I click on repository sub tab
    # When I clicked on upload contract in aurora button
    # And I land on new contract page
    # And I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I select a cp type randomly
    # And I search for a cp
    # And I select a cp from the dropdown list
    # Then I should be able to see default flag

    #14.Verify whether the flag is updated as per the flag shown in Restricted Party Screening result form once the form is closed
    # When I login to clm application
    # And I select CLM product in product selection page
    # And I click on manage contract tab
    # And I click on repository sub tab
    # When I clicked on upload contract in aurora button
    # And I land on new contract page
    # And I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I select a cp type randomly
    # And I search for a cp
    # And I select a cp from the dropdown list
    # And I should be able to click on Restricted Part Screeninng label
    # And I click on Restricted Party Screening result form close option
    # Then I should see the Restricted Party Screening result form should getting closed
    # And I see flag is updated as per the flag shown in Restricted Party Screening result form risk details

    #15.Verify whether the MSR flag colour in cp card is still default until the Restricted Party Screening result form is closed
    # When I login to clm application
    # And I select CLM product in product selection page
    # And I click on manage contract tab
    # And I click on repository sub tab
    # When I clicked on upload contract in aurora button
    # And I land on new contract page
    # And I fill all the fields and upload random valid document
    # And I wait until file is uploaded successfully
    # And I clicked on continue button in new contract page
    # And I land on aurora contract details page
    # And I select a cp type randomly
    # And I search for a cp
    # And I select a cp from the dropdown list
    # And I should be able to click on Restricted Part Screeninng label
    # Then I should be able to see default flag



    #Automation Scenarios

    Scenario:TC1: Verify that Restricted Part Screeninng label is shown on each CP card when MSR flag is enabled
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        Then I check restricted party screening option in the cp card


    Scenario: TC:Verify that Restricted Part Screeninng label is clickable on each CP card when MSR flag is enabled
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        Then I should be able to click on Restricted Part Screeninng label

    @MSR
    Scenario: TC:Verify that Restricted Part Screeninng label is present for all the CPs added
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select and add 10 cps
        Then I should be able to see Restricted Part Screeninng label for all the CPs


    Scenario: TC:Verify that Restricted Part Screeninng label is not shown in for any CPs for the cp card present at the top near contract name
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I click on cp card on top near contract name
        Then I should not see the Restricted Part Screeninng label



    Scenario: TC:Verify whether the Restricted Party Screening label is clicked then its respective Restricted Party Screening label is disabled
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I should be able to click on Restricted Part Screeninng label
        Then I should see  Restricted Party Screening label of that cp disabled


    Scenario: TC:Verify whether the risk details is seen when Restricted Party Screening label is is clicked
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I should be able to click on Restricted Part Screeninng label
        Then I see risk details on rightside of the form

    Scenario: TC:Verify whether the  Restricted Party Screening result form is seen when Restricted Party Screening label is is clicked
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I should be able to click on Restricted Part Screeninng label
        Then Restricted Party Screening result form is seen

    Scenario: TC:Verify whether the Restricted Party Screening result form can be closed by clicking on cancel option
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I should be able to click on Restricted Part Screeninng label
        And I click on Restricted Party Screening result form close option
        Then I should see the Restricted Party Screening result form should getting closed

    Scenario: TC:Verify wheter user is able to perform Restricted Party Screening when the contract is in Active stage
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I should be able to click on Restricted Part Screeninng label
        Then Restricted Party Screening result form is seen

    Scenario: TC:Verify wheter user is able to perform Restricted Party Screening when the contract is in Inactive stage
        When I search for inactive status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I should be able to click on Restricted Part Screeninng label
        Then Restricted Party Screening result form is seen

    Scenario: TC:Verify wheter user is able to perform Restricted Party Screening when the contract is in Expired stage
        When I search for expired status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I should be able to click on Restricted Part Screeninng label
        Then Restricted Party Screening result form is seen

    Scenario: TC:Verify wheter user is able to perform  Restricted Party Screening when the contract is in Repo Draft stage
        When I search for repository draft status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I should be able to click on Restricted Part Screeninng label
        Then Restricted Party Screening result form is seen

    Scenario: TC:Verify wheter user is able to perform  Restricted Party Screening when the contract is in Pending Publish stage
        When I search for pending publish status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I should be able to click on Restricted Part Screeninng label
        Then Restricted Party Screening result form is seen

    Scenario: TC:Verify wheter user is able to perform  Restricted Party Screening when the contract is in Termination Notice Served stage
        When I search for termination notice served status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I select a cp type randomly
        And I search for a cp
        And I select a cp from the dropdown list
        And I should be able to click on Restricted Part Screeninng label
        Then Restricted Party Screening result form is seen

    Scenario: TC:Verify wheter user is able to perform  Restricted Party Screening when the contract is in Archived stage
        When I search for archived status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I should be able to click on Restricted Part Screeninng label
        Then Restricted Party Screening result form is seen

    #*********************************************************************** User Story AURORA-603 :- Ends ***********************************************************


    #************************************* User Story AURORA-2975 :- Starts ***********************************************************

    # Manual Scenarios

    # Verify that create button inside contracting party section is available only if any cp type create activity is assigned to user
    # Verify that cp type shown in the list is based on the assigned cp type activity
    # Verify that create button inside contracting party section is hidden when no cp type activity is assigned to user
    # Verify that new cp created from contract details page is shown in the manage contracting parties tab
    # Verify that user is focused to first unfilled mandatory field when clicked on submit button
    # Verify that respective header is highlighted in blue color when user focus is on particular field
    # Verify that inline error message is shown for all the unfilled mandatory fields when clicked on submit button in the overlay
    # Verify that tool tip is shown for all the field name in the overlay
    # Verify that tool tip is shown for all the field's values in the overlay
    # Verify that ellipses are shown for all the field's value when the value length is bigger
    # Verify that two column view is shown when document panel is collapsed and try to create a new cp
    # Verify that mandatory symbol is shown on the header menu when clicked on submit button
    # Verify that mandatory symbol is shown on the header when clicked on submit button
    # Verify that header is expanded and focus is on unfilled mandatory field when clicked on submit button
    # Verify that uploaded document size is shown in the file upload section
    # Verify that uploaded file name is shown in the file upload section in the overlay
    # Verify that user is allowed to clear any dropdown value in the overlay

    # Automation Scenarios

    Scenario: Verify that selected cp type overlay is shown when clicked on particular cp type from the list
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        Then I check add cp overlay is shown

    Scenario: Verify that cp type list goes off when add cp overlay is closed
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I click on cancel option from the overlay
        Then I check cp type list disappears

    Scenario: Verify that discard changes popup is shown when any field in the overlay is filled and then closed the overlay
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I fill first field from the overlay
        And I click on cancel option from the overlay
        Then I check discard changes popup is shown

    Scenario: Verify that user is allowed to create a new cp for any cp type from the contract details page
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I fill all the mandatory fields in the add cp overlay
        And I click on submit button in the overlay
        Then I check new cp added toaster message is shown

    Scenario: Verify that created new cp from contract details page is shown in the cp search list
        When I search for random status existing contract except archived status
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I fill all the mandatory fields in the add cp overlay
        And I click on submit button in the overlay
        Then I check new added cp is shown in the cp search box

    Scenario: Verify that user is able to save the contract by adding new cp from the contract details page
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I fill all the mandatory fields in the add cp overlay
        And I click on submit button in the overlay
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        Then I check new cp is associated with contract

    Scenario: Verify that create button is shown after new cp is added
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I fill all the mandatory fields in the add cp overlay
        And I click on submit button in the overlay
        And I clicked on save button in the aurora contract details page
        And I land on aurora contract details page
        Then I check create button is shown

    # Main form
    # moved
    Scenario: Verify that submit button is disabled in the overlay after clicked on any cp type from the list
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        Then I check submit is disabled in the overlay

    Scenario: Verify that discard changes popup is not shown when overlay is closed without any edit in the form
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        Then I check discard contract popup is not shown

    # moved
    Scenario: Verify that submit button is enabled when any field in the overlay is filled
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I fill first field from the overlay
        Then I check submit button is enabled

    Scenario: Verify that user is allowed to expand any header in the overlay
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I expand first header in the overlay
        Then I check first field is shown in the expanded header

    Scenario: Verify that user is allowed to collapse any header in the overlay
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I collapse first header in the overlay
        Then I check first field is not shown in the collapsed header

    # moved
    Scenario: Verify form is unfilled related message is shown when any field inside atl is filled and clicked on submit button
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I fill first field in the atl section
        And I click on submit button in the overlay
        Then I check form is unfilled message is shown

    # moved
    Scenario: Verify that altest one atl related message is shown when clicked on submit button without adding single atl in the overlay
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I fill first field from the overlay
        And I click on submit button in the overlay
        Then I check altest one atl related message is shown

    Scenario: Verify that mandatory error message is shown for all unfilled mandatory fields when clicked on submit button in the overlay
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I fill first field from the overlay
        And I click on submit button in the overlay
        Then I check mandatory error message is shown for all unfilled mandatory fields

    Scenario: Verify that invalid error message below field is shown when each numeric field is filled with invalid data in the overlay
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I input all numeric fields with invalid data in the overlay
        Then I check invalid error message below each filled field in the overlay

    Scenario: Verify that invalid error message below field is shown when each string field is filled with invalid data in the overlay
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I input all string fields with invalid data in the overlay
        Then I check invalid error message below each filled field in the overlay

    Scenario: Verify that error message below field is shown when string type field is filled with more than 255 characters data in the overlay
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I input all string fields with more than 255 character data in the overlay
        Then I check invalid error message below each filled field in the overlay

    Scenario: Verify that error message below field is shown when numeric type field is filled with more than maximum value limit data in the overlay
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I input all numeric fields with more than 255 character data in the overlay
        Then I check invalid error message below each filled field in the overlay

    # moved
    Scenario: Verify that error message related to blank document or zero kb is shown when blank document or zero kb document is uploaded
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I upload blank or zero kb document in the overlay
        Then I check error message related to blank document or zero kb document is shown

    # moved
    Scenario: Verify that error message related to password protected file is not shown when password protected file is uploaded
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I upload password protected document in the overlay
        Then I check error message related to password protected document is not shown

    # moved
    Scenario: Verify that error message is shown when document more than 40mb is uploaded
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I upload randon valid format document greater than 40mb size
        Then I check error message related to more than 40mb is shown

    # moved
    Scenario: Verify that cross icon is shown after file is uploaded successfully
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I upload random valid format document
        And I wait until file is uploaded successfully
        Then I check cross icon is shown in the file upload section

    # moved
    Scenario: Verify that replace option is shown after file is uploaded successfully
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I upload random valid format document
        And I wait until file is uploaded successfully
        Then I check replace option is shown in the file upload section

    Scenario: Verify that error message is shown when blacklisted documents are uploaded
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I upload clm blacklisted document
        Then I check error message below file upload section is shown

    Scenario: Verify that upload is in progress message is shown when clicked on submit button before file upload completes
        When I search for active status contract
        And I view first contract from the grid
        And I click on redirect to aurora button
        And I land on aurora contract details page
        And I click on create button inside cp section
        And I select first cp type from the list
        And I upload 40mb valid document
        And I click on submit button in the overlay
        Then I check upload is in progress message is shown

#******************************************* User Story AURORA-2975 :- Ends ***********************************************************















