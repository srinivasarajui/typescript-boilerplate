    
# /**
#  * The feature file is used to automate the entire aurora basic information scenarios
#  *
#  * @author somnath.k
#  *
#  *
#  */
Feature: Basic Information Page
    
    # User Story AURORA18:-Verify scenarios related to new contract basic information - fields behavior
    
    #Manual Scenario
    # 1. Verify that new contract page UI is matching with the UX provided in the jira
    # 2. Verify that user will not be allowed to select any value for all the fields when respective user is not assigned with scope
    # 3. Verify that an error message is not shown when user lands on new contract page and scope is not assigned
    # 4. Verify that values shown in the type dropdown is based on the assigned scope
    # 5. Verify that values shown in the subtype dropdown is based on the assigned scope
    # 6. Verify that values shown in the contract category dropdown is based on the configuration done in the master data->product configuration
    # 7. Verify that values shown in the region dropdown is based on the assigned scope
    # 8. Verify that values shown in the business unit list is based on the assigned scope
    # 9. Verify that subtype values are shown based on the type selected
    # 10. Verify that tool tip icon is shown based on the ux design
    # 11. Verify that all the text shown in the new contract page has font size and font type based on the guidelines provided in the jira
    # 12. Verify that all the metadata and values in the new contract page is having valid tooltip
    # 13. Verify that metadata name and value is having long value then the value should be truncated at a particular position with 3dots in the end
    # 14. Verify that an popup is shown as per the ux design when type value is changed after all the fields are filled
    # 15. Verify that dropdown values shown in the dropdown list is based on the sequence set in the master data
    # 16. Verify that dropdown values will be in alphabetical order when the sequence is not set in the master data
    # 17. Verify that scroll in the dropdown is shown when list has more than 5 values
    # 18. verify that loading of values happnes inside the dropdown list
    # 19. Verify that page loading is not shown for new contract page
    # 20. Verify that tool tip box will show the entire text
    # 21. Verify that all field label governs the internationalization based on the configuration done in the property file(resource bundle). --->Limitation
    # 22. Verify that tool tip for field label governs the internationalization based on the configuration done in the property file(resource bundle).------>Limitation
    # 23. Verify that all field values governs the internationalization based on the configuration done in the property file(resource bundle).--------->Limitation
    # 24. Verify that tool tip for field values governs the internationalization based on the configuration done in the property file(resource bundle).---------->Limitation
    # 25. Verify that responsiveness handled for both new contract page and the popups
    # 26, Verify that selected BU values are shown as selected in BU list
    # 27. Verify that user is not allowed to select invalid data which is searched in the dropdown search box
    # 28. Verify that mandatory message is shown for each field when particular field is not filled and other fields are filled with value
    
    # # Automation Scenarios
    # -------------------require grid page code--------------------------------------
    Background: Login to CLM application and land on repository grid page
        Given I login to clm application
        When I select CLM product in product selection page
        And I click on manage contract tab
        And I click on repository sub tab
        And I lands on repository grid page
        
    @AURORA_CLM
    Scenario: TC1: Verify that user is getting new contract page when clicked on upload button
        When I clicked on upload contract in aurora button
        Then I land on new contract page

    @AURORA_CLM
    Scenario: TC2: Verify that all the metadata fields in new contract page is not having any value selected by default
        When I clicked on upload contract in aurora button
        And I land on new contract page
        Then I check all metadata fields not having default value selected

    @AURORA_CLM
    Scenario: TC3: Verify that all the metadata fields in the new contract page are mandatory
        When I clicked on upload contract in aurora button
        And I land on new contract page
        Then I check all the metadata fields are mandatory

    @AURORA_CLM
    Scenario: TC4: Verify that mandatory message is shown for all metadata fields in the new contract page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I clicked on continue button in new contract page
        Then I check mandatory message for all the metadata fields

    @AURORA_CLM
    Scenario: TC5: Verify that user is not allowed to fill other fields until type field is filled
        When I clicked on upload contract in aurora button
        And I land on new contract page
        Then I check no values are present for other fields except type field

    @AURORA_CLM
    Scenario: TC6: Verify that mandatory message is shown for contract document when all the metadata fields are filled except contract document
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I clicked on continue button in new contract page
        Then I check mandatory message for contract document

    @AURORA_CLM
    Scenario: TC7: Verify that mandatory message is not shown for filled metadatas
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I clicked on continue button in new contract page
        Then I check mandatory message is not shown for filled metadatas

    @AURORA_CLM
    Scenario: TC8: Verify that user is not allowed to fill subtype field when type field is not selected.
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I clicked on subtype dropdown
        Then I check no values are present in subtype field

    @AURORA_CLM
    Scenario: TC9: Verify that user is allowed to select subtype value once type value is selected.
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I select value for type metadata
        Then I check values are present in subtype field

    @AURORA_CLM
    Scenario: TC10: Verify that user is not allowed to select bu value when region field is not selected.
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I select value for type metadata
        And I select value for subtype metadata
        Then I check no values are present in bu field

    @AURORA_CLM
    Scenario: TC11: Verify that user is allowed to select bu value when region field is selected.
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I select value for type metadata
        And I select value for subtype metadata
        And I select value for region metadata
        Then I check values are present in bu field

    @AURORA_CLM
    Scenario: TC12: Verify that user is allowed to select multiple bu from the bu list
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I select value for type metadata
        And I select value for subtype metadata
        And I select value for region metadata
        And I select multiple bu from the bu list
        Then I check selected bu are shown in the bu box

    @AURORA_CLM
    Scenario: TC13: Verify that user is allowed to delete individual bu from the selected bu
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I select value for type metadata
        And I select value for subtype metadata
        And I select value for region metadata
        And I select multiple bu from the bu list
        And I delete individual bu from the selected Bu
        Then I check deleted bu are not shown in the bu box

    @AURORA_CLM
    Scenario: TC14: Verify that user is allowed to clear all the selected bu
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I select value for type metadata
        And I select value for subtype metadata
        And I select value for region metadata
        And I select multiple bu from the bu list
        And I click on clear all icon in the bu box
        Then I check no bu is selected in the bu box

    @AURORA_CLM
    Scenario: TC15: Verify that no result found message is shown when all the dropdown values are searched with invalid value.
        When I clicked on upload contract in aurora button
        And I land on new contract page
        Then I check no result found message when all dropdown are searched with invalid data

    @AURORA_CLM
    Scenario: TC16: Verify that user is allowed to search dropdown value and select the searched one
        When I clicked on upload contract in aurora button
        And I land on new contract page
        Then I search for dropdown value and select the searched value for all dropdown

    @AURORA_CLM
    Scenario: TC17: Verify that all other fields value become blank when type value is changed
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I change type value to some other value
        Then I check rest all fields are changed to default value except type value

    @AURORA_CLM
    Scenario: TC18: Verify that other field values except type value are not retained when subtype value is changed to some other value
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I change subtype value to some other value
        Then I check rest all fields are changed to default value except type and subtype value
    
    #*************************** User Story AURORA-18:- ENDS ***********************************************************
    
    # User Story AURORA-49:- Verify scenarios related to new contract basic information - file upload

    #Manual Scenario
    # 1. Verify that file upload section UI is matching with the UX provided in the jira
    # 2. Verify that entire drag and dropbox is highlighted in blue color when any format of document is dragged to any position in the new contract page
    # 2. Verify that entire drag and dropbox is highlighted in light blue color when any document is dragged to any position in the new contract page
    # 3. Verify that drag and drop box border is highlighted in blue color when mouse hover is done on the drag and drop box
    # 4. Verify that up arrow icon inside drag and drop box is highlighted in blue color when mouse hover is done on the drag and drop box
    # 5. Verify that entire drag and dropbox is highlighted in blue color when any document is dragged to any position in the new contract page during replacement of document
    # 6. Verify that previously uploaded file details is shown inside drag and drop box with blue color highlight during replacement of document
    # 7. Verify that blue color highlight in the drag and drop box is removed after file placed inside drag and drop box
    # 8. Verify that uploaded file details and cancel button is shown inside drag and drop box after file placed inside drag and drop box
    # 9. Verify that blue color highlight is not shown when mouse hover is done on drag and drop box during file upload is in progress
    # 10. Verify that drag and drop box border is highlighted in blue color when mouse hover is done on the drag and drop box during file upload is in progress
    # 11. Verify that blue color highlight is not shown when mouse hover is done on drag and drop box after file is uploaded successfully
    # 12. Verify that blue color highlight behavior should be retained when file upload process is canceled
    # 13. Verify that drag and drop option is not disabled when file upload is in progress
    # 14. Verify that blue color highlight behavior should be retained after accepted failure popups
    # 15. Verify that drag and drop box details shown inside box is retained after accepted failure popups
    # 16. Verify that an error popup is shown when there was server side error or network side error during file upload process
    # 17. Verify that an error popup is shown when drag and drops one valid document and two or more invalid format documents
    # 18. Verify that an error popup is shown when drag and drops one valid document and two or more invalid format documents during replacement of document
    # 19. Verify that all keyword actions are supportable by new contract page
    # 20. Verify that responsiveness handled for both new contract page and the popups
    # 21. Verify that new contract page functionality is working in all the recommended browsers
    # 22. Verify that new contract page is available to all the clients in the setup
    # 23. Verify that new contract page should not be accessible to the user when upload contract activity is not assigned to the user
    # 24. Verify that new contract page url is not accessible when user logs out from the setup
    # 25. Verify that user is allowed to select only one document during uploading from the chrome upload popup
    # 26. Verify that user is allowed to select only one document in the chrome upload popup during replacement of document
    # 27. Verify that an error popup is shown when invalid formats like image,exe,json,property file,java file,excel,zip..etc, of files dragged and dropped in the box
    # 28. Verify that an error popup is shown when invalid formats like image,exe,json,property file,java file,excel,zip..etc, of files dragged and dropped in the box during replacement of document
    # 29. Verify that respective file doesnt get uploaded when clicks on ok button from the error popup shown during drag and drop of invalid format
    # 30. Verify that error popup is shown to user when drag and drop of blank document or zero kb document is done
    # 31. Verify that user should not be allowed to create new contract when session timeout occurred during new contract creation process.------->Limitation
    # 32. Verify that ocr related error message is shown to user when ocr fails during upload process.----------->Limitation
    # 33. Verify that upload error please contact your adminstrator is shown
    # 34. Verify that respective file format icon is shown above the file name inside drag and drop box after document is uploaded succesfully
    # 35. Verify that uploaded document size is matching with the file size shown in the drag and drop box
    # 36. Verify that error popup related to file size should be less than 40mb is shown when user drag and drop 41mb during file upload is in progress and clicks on replace button
    # 37. Verify that error popup related to file size should be greater than 1kb is shown when user drag and drop okb document during file upload is in progress and clicks on replace button
    # 38. Verify that error popup related to file is empty or doesnt have content is shown when user drag and drop blank/empty document during file upload is in progress and clicks on replace button
    # 39. Verify eniter file name should be displayed inside drag and drop box when uploaded file name is bigger
    # 40. Verify that warning popup is not shown to the user when no data is filled and clicked on refresh option
    # 41. Verify that warning popup related to leave site is shown to when clicked on browser back button
    # 42. Verify that user lands on same when closes the warning popup shown related to leave site
    # 43. Verify that user lands on grid page when accepts warning popup shown related leave site
    # 44. Verify that user gets an warning popup when clicked on refresh option during upload is in progress.
    # 45. Verify that upload process is in progress when user doent accept warning popup shown related to refresh option
    # 46. Verify that all the filled data will be lost and file upload process will be aborted when user accepts warning popup shown after clicked on refresh option ------------->check with pmg

    # Automation Scenarios
    @AURORA_CLM
    Scenario: TC19: Verify that error popup is shown when random invalid format like image,exe,json,property file,java file,excel,zip..etc is uploaded
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload random invalid format document
        Then I check invalid format error popup is shown

    @AURORA_CLM
    Scenario: TC20: Verify that invalid format popup disappears when clicked on ok button in the popup
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload random invalid format document
        And I clicked on ok button in the invalid format related error popup
        Then I check invalid format error popup disappears

    @AURORA_CLM
    Scenario: TC21: Verify that error popup is shown when blank document is uploaded
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload random blank valid format document
        Then I check blank document related error popup is shown

    @AURORA_CLM
    Scenario: TC22: Verify that balnk document or zero kb related to error popup disappears when clicked on ok button in the popup
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload random blank valid format document
        And I clicked on ok button in the blank document related error popup
        Then I check blank document related error popup disappears

    @AURORA_CLM
    Scenario: TC23: Verify that error popup is shown when random zero kb valid format document is uploaded
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload random zero kb valid format document
        # zero kb is having blank document so until we get doc less than 1kb
        # Then I check zero kb related error popup is shown
        Then I check blank document related error popup is shown

    @AURORA_CLM
    Scenario: TC24: Verify that error popup related to zero kb document disappears when clicked on ok button in the popup
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload random zero kb valid format document
        And I clicked on ok button in the zero kb related error popup
        # Then I check zero kb related error popup disappears
        Then I check blank document related error popup disappears

    @AURORA_CLM
    Scenario: TC25: Verify that error popup is shown when random valid format(doc,docx and pdf) document which having more than 40mb size is uploaded
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload randon valid format document greater than 40mb size
        Then I check file size should be less than 40 mb error popup is shown

    @AURORA_CLM
    Scenario: TC26: Verify that error popup related to file size more than 40mb disappears when clicked on ok button in the popup
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload randon valid format document greater than 40mb size
        And I clicked on ok button in the file size greater than 40mb error popup
        Then I check file size greater than 40mb error popup disappears

    @AURORA_CLM
    Scenario: TC27: Verify that file upload process is not impacted when reset of fields value are done
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I upload 40mb valid document
        And I change type value to some other value
        Then I check file upload is still in progress

    @AURORA_CLM
    Scenario: TC28: Verify that user gets replace document popup when random valid document is uploaded during file upload is in progress
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload 40mb valid document
        And I upload random valid format document
        Then I check replace document popup is shown

    @AURORA_CLM
    Scenario: TC29: Verify that user gets replace document popup when random invalid document is uploaded during file upload is in progress
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload 40mb valid document
        And I upload random invalid format document
        Then I check replace document popup is shown

    @AURORA_CLM
    Scenario: TC30: Verify that user gets invalid format error popup when clicked on replace button from the popup during file upload is in progress
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload 40mb valid document
        And I upload random invalid format document
        And I click on replace button in the replace document popup
        Then I check invalid format error popup is shown

    @AURORA_CLM
    Scenario: TC31: Verify that previous upload process is aborted when user clicks on replace button from the popup during file upload is in progress
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload 40mb valid document
        And I upload random invalid format document
        And I click on replace button in the replace document popup
        And I clicked on ok button in the invalid format related error popup
        Then I check file upload process is aborted
    # When I clicked on ok button in the invalid format related error popup
    # Then I check invalid format error popup disappears
    # # added time being to complete the flow
    # When I clicked on cancel button in the drag and drop box
    @AURORA_CLM
    Scenario: TC32: Verify that user is allowed to access other fields in the page during file upload process is in progress
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload 40mb valid document
        And I fill all the metadata fields in new contract page
        Then I check file upload is still in progress

    @AURORA_CLM
    Scenario: TC33: Verify that cancel button is enabled to user when file is placed in the drag and drop box
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload 40mb valid document
        Then I check cancel button is shown inside drag and drop box

    @AURORA_CLM
    Scenario: TC34: Verify that file upload process is not impacted when user clicks on cancel button from replace document popup
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload 40mb valid document
        And I upload docx format document
        And I click on cancel button from the replace document popup
        Then I check file upload is still in progress

    @AURORA_CLM
    Scenario: TC35: Verify that user is allowed to cancel the file upload process
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload 40mb valid document
        And I clicked on cancel button in the drag and drop box
        And I click on yes button in the popup
        Then I check file upload process is aborted

    @AURORA_CLM
    Scenario: TC36: Verify that drag and drop box details shown inside box is retained when file upload process is canceled.
        When I clicked on upload contract in aurora button
        And I land on new contract page
        Given I have drag and drop box details
        When I upload 40mb valid document
        And I clicked on cancel button in the drag and drop box
        Then I check drag and drop box details are retained

    @AURORA_CLM
    Scenario: TC37: Verify that user is allowed to upload doc format document in new contract page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload doc format document
        And I wait until file is uploaded successfully
        Then I check file upload progress bar is not shown
        And I check loder icon is not shown
        And I check green tick mark is shown

    @AURORA_CLM
    Scenario: TC38: Verify that file upload progress bar is shown to the user
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload 40mb valid document
        Then I check file upload progress bar is shown

    @AURORA_CLM
    Scenario: TC39: Verify that uploaded file name is shown inside drag and drop box during file upload process is in progress
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload doc format document
        And I wait until file is uploaded successfully
        Then I check uploaded file name in the drag and drop box is shown

    @AURORA_CLM
    Scenario: TC40: Verify that loader icon is shown when file upload process is in progress
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload 40mb valid document
        Then I check loader icon is shown

    @AURORA_CLM
    Scenario: TC41: Verify that progress bar is disappeared after file is uploaded successfully
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload doc format document
        And I wait until file is uploaded successfully
        Then I check file upload progress bar is not shown

    @AURORA_CLM
    Scenario: TC42: Verify that loader icon is not shown when file is uploaded successfully
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload doc format document
        And I wait until file is uploaded successfully
        Then I check loder icon is not shown

    @AURORA_CLM
    Scenario: TC43: Verify that green tick mark icon is shown inside drag and drop box after file is uploaded successfully
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload doc format document
        And I wait until file is uploaded successfully
        Then I check green tick mark is shown

    @AURORA_CLM
    Scenario: TC44: Verify that replace button is enabled to user after file is uploaded successfully in new contract page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload doc format document
        And I wait until file is uploaded successfully
        Then I check replace button is shown inside drag and drop box

    @AURORA_CLM
    Scenario: TC45: Verify that user is allowed to replace the document after the file is uploaded successfully
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload doc format document
        And I wait until file is uploaded successfully
        And I upload docx format document
        And I click on replace button in the replace document popup
        And I wait until file is uploaded successfully
        Then I check green tick mark is shown

    @AURORA_CLM
    Scenario: TC46: Verify that user is allowed to upload docx format document in new contract page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload docx format document
        And I wait until file is uploaded successfully
        Then I check green tick mark is shown
        And I check uploaded file name in the drag and drop box is shown

    @AURORA_CLM
    Scenario: TC47: Verify that user is allowed to upload pdf format document in new contract page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload pdf format document
        And I wait until file is uploaded successfully
        Then I check green tick mark is shown
        And I check uploaded file name in the drag and drop box is shown

    @AURORA_CLM
    Scenario: TC48: Verify that user is allowed to upload scanned pdf format document in new contract page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload scanned pdf format document
        And I wait until file is uploaded successfully
        Then I check green tick mark is shown
        And I check uploaded file name in the drag and drop box is shown

    @AURORA_CLM
    Scenario: TC49: Verify that user is allowed to upload content copying pdf format document in new contract page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload content copying pdf format document
        And I wait until file is uploaded successfully
        Then I check green tick mark is shown
        And I check uploaded file name in the drag and drop box is shown

    @AURORA_CLM
    Scenario: TC50: Verify that user is allowed to upload random clm document in new contract page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload random clm document
        And I wait until file is uploaded successfully
        Then I check green tick mark is shown
        And I check uploaded file name in the drag and drop box is shown

    @AURORA_CLM
    Scenario: TC51: Verify that user is allowed to upload random valid format document which is having image inside it in new contract page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload random valid format document having image inside it
        And I wait until file is uploaded successfully
        Then I check green tick mark is shown
        And I check uploaded file name in the drag and drop box is shown

    @AURORA_CLM
    Scenario: TC52: Verify that user is allowed to upload minimum name and size random valid format document in new contract page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload minimum name and size random valid format document
        And I wait until file is uploaded successfully
        Then I check green tick mark is shown
        And I check uploaded file name in the drag and drop box is shown

    @AURORA_CLM
    Scenario: TC53: Verify that user is allowed to upload random valid document in which there is no space in between the character
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload randon valid document in which no space in between the character
        And I wait until file is uploaded successfully
        Then I check green tick mark is shown
        And I check uploaded file name in the drag and drop box is shown

    @AURORA_CLM
    Scenario: TC54: Verify that user is allowed to upload print pdf document in new contract page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload print pdf document
        And I wait until file is uploaded successfully
        Then I check green tick mark is shown
        And I check uploaded file name in the drag and drop box is shown

    @AURORA_CLM
    Scenario: TC55: Verify that user is allowed to upload maximum name and size random valid format document in new contract page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload maximum name and size random valid format document
        And I wait until file is uploaded successfully
        Then I check green tick mark is shown
        And I check uploaded file name in the drag and drop box is shown
    #*************************** User Story AURORA-49:- ENDS ***********************************************************

    # User Story AURORA-47:- Verify scenarios related to new contract basic information - Continue

    #Manual Scenario
    # 1. Verify that continue button and cancel button UI is matching with the UX provided in the jira
    # 2. Verify that focus is on first mandatory unfilled field when clicked on continue button
    # 3. Verify that continue and cancel button is enable and clickable to user by default
    # 4. Verify that mandatory message is shown in the page until user fills that particular field
    # 5. Verify that refresh related popup is shown on top of all types of popups when any popup is shown and clicked on refresh option(applicable to all popups)
    # 6. Verify that previously viewed popup is retained when user doesnt accept refresh related popup(applicable to all popups)
    # 7. Verify that previously viewed popup and data filled will be lost when user accepts the refresh related popup(applicable to all popups)
    # 8. Verify that leave site popup is shown on top of all types of popups when any popup is shown and clicked on broser back button(applicable to all popups)
    # 9. Verify that previously viewed popup and new contract page is lost when user accepts leave site popup(applicable to all popups)----->Limitation
    # 10 .Verify that invalid mandatory message is shown to all fields when all fields are filled with invalid value and clicked on continue button----->Not applicable
    # 11. Verify that user is allowed to fill all the fields after clicked on refresh button

    # Automation Scenarios
    # Given I login to clm application
    # Then I select respective product
    # Then I navigate to repository tab
    # Commented below until grid is available
    # When I clicked on upload contract in aurora button
    # Then I check new contract page is shown
    @AURORA_CLM
    Scenario: TC56: Verify that discard contract popup is not shown to user when clicked on cancel button without filling any value in new contract page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I clicked on cancel button in new contract page
        Then I check discard contract popup is not shown

    @AURORA_CLM
    Scenario: TC57: Verify that discard contract popup is shown to user when any particular field in the page is filled and clicked on cancel button
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I select value for type metadata
        And I clicked on cancel button in new contract page
        Then I check discard contract popup is shown

    @AURORA_CLM
    Scenario: TC58: Verify that filled values are lost when user clicks on discard button from the discard contract popup
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page
        And I clicked on cancel button in new contract page
        And I clicked on discard button from the discard contract popup
        And I land on new contract page
        Then I check all metadata fields not having default value selected
    # Scenario: verify that user lands on grid page when clicked on discard button from the discard contract popup
    # # commented unti grid is developed
    # # Then I land on grid page
    # # When I clicked on upload contract in aurora button
    # Then I check new contract page is shown
    # # Then I check enter field value are not retained in new contract page
    # # Then I check all metadata fields not having default value selected
    # Then I check all the metadata fields are mandatory
    # Then I fill all the metadata fields in new contract page
    @AURORA_CLM
    Scenario: TC59: verify that changes are not cleared from the page when clicked on cancel button from the discard contract popup
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the metadata fields in new contract page 
        And I clicked on cancel button in new contract page
        And I clicked on cancel button from the discard contract popup
        Then I check enter field value is retained in the new contract page

    @AURORA_CLM
    Scenario: TC60: Verify that user lands on same page when clicked on cancel button from the discard contract popup
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I select value for type metadata
        And I clicked on cancel button in new contract page
        And I clicked on cancel button from the discard contract popup
        Then I land on new contract page

    @AURORA_CLM
    Scenario: TC61: Verify that user is allowed to discard the contract when file upload is in progress
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload 40mb valid document
        And I clicked on cancel button in new contract page
        And I clicked on discard button from the discard contract popup
        Then I check file upload process is aborted
    # Scenario: Verify that user lands on grid page when contract is discarded during file upload is in progress
    # Then I land on grid page
    @AURORA_CLM
    Scenario: TC62: Verify that discard contract popup is shown to user when file is uploaded and no other fields are filled and clicked on cancel button
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload random valid format document
        And I clicked on cancel button in new contract page
        Then I check discard contract popup is shown

    @AURORA_CLM
    Scenario: TC63: Verify that user gets please wait popup when clicked on continue button during file upload is in progress
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload 40mb valid document
        And I clicked on continue button in new contract page
        Then I check please wait popup is shown

    @AURORA_CLM
    Scenario: TC64: Verify that user is allowed to close please wait popup when clicked on ok button from the please wait popup
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload 40mb valid document
        And I clicked on continue button in new contract page
        And I clicked on ok button in the please wait popup
        Then I check please wait popup is not shown

    @AURORA_CLM
    Scenario: TC65: Verify that file upload process is not impacted when clicked on ok button from the please wait popup
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload 40mb valid document
        And I clicked on continue button in new contract page
        And I clicked on ok button in the please wait popup
        Then I check file upload is still in progress

    @AURORA_CLM
    Scenario: TC66: Verify that user lands on the new contract page when clicked on ok button from the please wait popup
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I upload 40mb valid document
        And I clicked on continue button in new contract page
        And I clicked on ok button in the please wait popup
        Then I land on new contract page

    @AURORA_CLM
    Scenario: TC67: Verify that user lands on contract details page when all the fields are filled and document is uploaded successfully and clicked on continue button
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        Then I land on aurora contract details page

    @AURORA_CLM
    Scenario: TC68: Verify that data filled in new contract page is shown in the aurora contract details page
        When I clicked on upload contract in aurora button
        And I land on new contract page
        And I fill all the fields and upload random valid document
        And I wait until file is uploaded successfully
        And I clicked on continue button in new contract page
        And I land on aurora contract details page
        And I click on expand or collapse all icon
        And I click on expand or collapse all icon
        Then I check data filled in new contract page is shown in aurora contract details page

#*************************** User Story AURORA-47:- ENDS ***********************************************************