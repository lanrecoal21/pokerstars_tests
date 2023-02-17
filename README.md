# pokerstars_tests
Pokerstarssports.uk home page Test scenarios


1. (Automated)
  Feature: Home page language  

  Scenario: As a user, I can change  language to my preferred language

    Given I am on the poker homepage
    When I click the language dropdown
    And I select my preferred language
    Then the home page language should be in my preferred language

2. (Automated)
   Feature: Home page popular Ice Hockey 
   Scenario: Users can view ice hockey popular sport betting details

    Given I am on the home screen
    When I select ice hockey tab
    Then I should see ice hockey betting details

3. (Automated)
   Feature: Home page Soccer
   Scenario: Users can view soccer popular sport betting details

    Given I navigate to the home page
    When I select soccer tab
    Then I should see soccer betting details

4.(Automated)
  Feature: Home page Tennis
  Scenario: Users can view tennis popular sport betting details

    Given I navigate to the application home page
    When I select tennis tab
    Then I should see tennis betting details

5. (Automated)
  Feature: Home page Basketball
  Scenario: Users can view basketball popular sport betting details
    Given I navigate to the app home page
    When I select basketball tab
    Then I should see basketball betting details

6. Not Automated
   Feature: Home page Login to bet
   Scenario: Login to bet button should navigate user to a login screen
     Given I am on on the application  home page
     And I see the login to bet button is displayed
     When I click on Login to bet button
     Then I should see the login dialogue pop up

7. Not Automated
   Feature: Home page My bet
   Scenario: My bet tab should not display any information when the user is not logged in
     Given I am on on the application  home page
     When I click on my bet tab
     Then I should see a message prompting me to login

8. (Not Automated)
  Feature: Home page Volleyball
  Scenario: Users can view volley popular sport betting details
    Given I navigate to the app home page
    When I select volleyball tab
    Then I should see Volleyball betting details

9. (Not Automated)
  Feature: Home page Esport
  Scenario: Users can view esport popular sport betting details
    Given I navigate to the app home page
    When I select esport tab
    Then I should see esport betting details

10. (Not Automated)
  Feature: Home page motor sport
  Scenario: Users can view motor sport betting details
    Given I navigate to the app home page
    When I select motor sport tab
    Then I should see motor sport  betting details
    
    Scenarios 1 to 5 are automated with webdriver io cucumber framework
    To run test locally, you need to have the latest node.js version installed on machine
    All test scenarios are written in cucumber gherkins syntax in files that have .feature file extension. The matching codes for all .feature files are designed in js fies with name matching the relevant feature file. e.g mylanguage.feature file has step definition in mylanguage.js file.
    
    To run a specific scenario, run "npx wdio  run ./wdio.conf.js  --spec features/step-definitions/homepage/${scenarioname}.feature
" on IDE command prompt.
To run suite, run "npx wdio  run ./wdio.conf.js  --suite homepage "

project is set up to use spec reporter. this generates test report in console after every test run.
