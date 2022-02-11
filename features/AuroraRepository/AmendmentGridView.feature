# /**
#  *
#  * The feature file for view the amendments available in the grid for a contract
#  *
#  * @author Datta Ankalkar
#  *
#  */

Feature: Verify all the scenarios related to view the amendments available in the grid for a contract

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

# ******************************* Aurora-2371 Start **************************************
#  /**
#  * User Story AURORA-2371
#  * The feature file to Verify all the scenarios related to - Grid View | Amendments | View amendments
#  *
#  * @author Datta Ankalkar
#  *
#  */

#Manual Scenarios: 
    # Scenario:     

#Automation Scenarios: 
# Amendment Number link is disabled
    # Scenario: TC001.Verify Uploaded amendments can be viewed by clicking on amendment number Link
        # When I navigate to "Repository Contract" page view
        # And I click on Arrow link available for the contract
        # And I see child grid showing the list of all amendments
        # When I click on Amendment Number link
        # Then I see user navigates to Document section
        # And I see tile view for the Amendment

    Scenario: TC002.Verify Uploaded amendments can be viewed by clicking on View Action menu option from Amendments child grid view
        When I navigate to "Repository Contract" page view
        And And I click on Arrow link available for the contract
        And I see child grid showing the list of all amendments
        And I see an action menu for each amendment row
        When I click on Action menu link
        Then I see option "View"
        When I click on option "View"
        Then I see user navigates to Document section
        And I see tile view for the Amendment    

# Amendment Number link is disabled
    # Scenario: TC003.Verify Created amendments can be viewed by clicking on amendment number Link
        # When I navigate to "Repository Contract" page view
        # And I click on Arrow link available for the contract
        # And I see child grid showing the list of all amendments
        # When I click on Amendment Number link
        # Then I see user navigates to Document section
        # And I see tile view for the Amendment

# Link is disabled
    # Scenario: TC004.Verify Created amendments can be viewed by clicking on View Action menu option from Amendments child grid view
    #     When I navigate to "Repository Contract" page view
    #     And I click on Arrow link available for the contract
    #     And I see child grid showing the list of all amendments
    #     And I see an action menu for each amendment row
    #     When I click on Action menu link
    #     Then I see option "View"
    #     When I click on option "View"
    #     Then I see user navigates to Document section
    #     And I see tile view for the Amendment

# Amendment Number link is disabled
    # Scenario: TC005.Verify Requested amendments can be viewed by clicking on amendment number Link
        # When I navigate to "Repository Contract" page view
        # And I click on Arrow link available for the contract
        # And I see child grid showing the list of all amendments
        # When I click on Amendment Number link
        # Then I see user navigates to Document section
        # And I see tile view for the 
        
# Link is disabled
    # Scenario: TC006.Verify Requested amendments can be viewed by clicking on View Action menu option from Amendments child grid view
    #     When I navigate to "Repository Contract" page view
    #     And I click on Arrow link available for the contract
    #     And I see child grid showing the list of all amendments
    #     And I see an action menu for each amendment row
    #     When I click on Action menu link
    #     Then I see option "View"
    #     When I click on option "View"
    #     Then I see user navigates to Document section
    #     And I see tile view for the Amendment