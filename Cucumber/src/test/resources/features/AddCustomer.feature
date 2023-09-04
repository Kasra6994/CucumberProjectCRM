@Regression @AddCustomerFeature
Feature: Techfios Add Customer Functionality

  Background: 
    Given User is on the Techfios login page
    When User enters valid username as "demo@techfios.com"
    When User enters valid password as "abc123"
    When User clicks sign in button and lands on Dashboard Page

  @AddCustomerScenario
  Scenario Outline: User should be able to Add Customer account
    When User clicks on "Customers"
    And User clicks on "Add Customer"
    And User enters "<fullName>" in the "Full Name" field in the add customer page
    And User selects "<company>" in the "Company" dropdown in the add customer page
    And User enters "<email>" in the "Email" field in the add customer page
    And User enters "<phone>" in the "Phone" field in the add customer page
    And User enters "<address>" in the "Address" field in the add customer page
    And User enters "<city>" in the "City" field in the add customer page
    And User enters "<state>" in the "State" field in the add customer page
    And User enters "<zip>" in the "Zip" field in the add customer page
    And User selects "<country>" in the "Country" dropdown in the add customer page
    And User selects "<currency>" in the "Currency" dropdown in the add customer page
    And User selects "<group>" in the "Group" dropdown in the add customer page
    And User enters "<password>" in the "Password" field in the add customer page
    And User confirms "<password>" in the "Confirm Password" field in the add customer page
    And User clicks on "Save"
    Then User should be able to validate the Customer was created succesfully

    Examples: 
      | fullName    | company | email              | phone    | address     | city        | state  | zip | country | currency | group | password  |
      | CucumberMan | Uber    | cucumber@gmail.com | 123-412- | Selenium Dr | SelinumLand | Alaska |   1 | Germany | GBP      | SQL   | Atena6994 |
