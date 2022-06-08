Feature: Playing with the internet herokuapp

  Scenario: As a user, I enter into the form authentication and log in with success
    Given I am on the landing page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>