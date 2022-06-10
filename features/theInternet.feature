Feature: Playing with the internet herokuapp

  Scenario: As a user, I do a positive log in
    Given I am on the landing page
    When I select Form Authentication from the menu
    And I log in
    Then I should see a flash message saying You logged into a secure area!
  
  Scenario Outline: As a user, I do a negative log in
    Given I am on the landing page
    When I select Form Authentication from the menu
    And I login with <username> and <password>
    Then I should see a flash message saying Your username is invalid!

    Examples:
      | username | password             |
      | cualca   | SuperSecretPassword  |
      | foobar   | barfoo               |