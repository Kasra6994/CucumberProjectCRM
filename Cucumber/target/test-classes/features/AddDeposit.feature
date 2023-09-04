@Regression @AddDepositFeature
Feature: Add Deposit Functionality

  Background: 
    Given User is on the Techfios login page
    Given User enters valid "username" from mysql database
    Given User enters valid "password" from mysql database
    Given User clicks on "login"
    Given User should land on Dashboard page

  Scenario Outline: User should be able to successfully add deposit
    When User clicks on "Transactions"
    And User clicks on "New Deposit"
    And User selects "<account>" in the "Account" dropdown
    And User enters "<date>" in the "date" field
    And User attaches "<file>" in the "attach file" option
    And User enters "<ammount>" in the "amount" field
    And User clicks on "Advanced"
    And User selects "<category>" in the "category" dropdown
    And User selects "<payer>" in the "payer" dropdown
    And User selects "<paymentMethod>" in the "paymentMethod" dropdown
    And User enters "<ref>" in the "ref" field
    And User clicks on "submit"
    Then User should be able to validate deposit added succesfully

    Examples: 
      | account        | date       | file                        | amount | category | payer  | paymentMethod | ref                |
      | Saving Account | 2023-08-15 | 2023-07-22--Session 10.pptx |   5000 | Salary   | SEL278 | Check         | Transaction ID 001 |
