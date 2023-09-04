@Regression @CreateBankAccountFeature
Feature: Techfios Create Bank Account Functionality

  Background: 
    Given User is on the Techfios login page

  Scenario Outline: User should be able to login with valid credentials
    and open a new account

    When User enters the "<username>" in the "username" field
    When User enters the "<password>" in the "password" field
    And User clicks on "login"
    Then User should land on Dashboard page
    And User clicks on "bankCash"
    And User clicks on "newAccount"
    And User enters "<accountTitle>" in the "accountTitle" field in accounts page
    And User enters "<description>" in the "description" field in accounts page
    And User enters "<initialBalance>" in the "initialBalance" field in accounts page
    And User enters "<accountNumber>" in the "accountNumber" field in accounts page
    And User enters "<contactPerson>" in the "contactPerson" field in accounts page
    And User enters "<Phone>" in the "Phone" field in accounts page
    And User enters "<internetBankingURL>" in the "internetBankingURL" field in accounts page
    And User clicks on "submit"
    Then User should be able to validate account created successfully

    Examples: 
      | username          | password | accountTitle     | description                  | initialBalance | accountNumber | contactPerson | Phone        | internetBankingURL                               |
      | demo@techfios.com | abc123   | Checking Account | 1 % CashBack Simple Checking |           3000 |  126543296245 | John Doe      | 125-623-6235 | https://techfios.com/billing/?ng=accounts/login/ |
      | demo@techfios.com | abc123   | Savings Account  | 5% APR Savings Account       |          10000 |  531235786551 | Jane Doe      | 125-643-6643 | https://techfios.com/billing/?ng=accounts/login/ |
