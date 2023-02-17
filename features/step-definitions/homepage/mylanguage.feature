Feature: Pokerstars homepage languages

  Scenario: As a user, I can change  language to my preferred language

    Given I am on the poker homepage
    When I click the language dropdown
    And I select my preferred language
    Then the home page language should be in my preferred language