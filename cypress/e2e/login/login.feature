Feature: OrangeHRM Login

  Scenario: Admin Login to OrangeHRM
    Given I open OrangeHRM website
    When I type 'Admin' for Username
    And I type 'admin123' for Password
    And I click login button
    Then I should be directed to the Dashboard page
