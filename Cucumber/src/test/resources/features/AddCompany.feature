@Regression @AddCompanyFeature
Feature: Add Company feature functionality

  Background: 
    Given User is on the Techfios login page
    Given User enters valid "username" from mysql database
    Given User enters valid "password" from mysql database
    Given User clicks on "login"
    Given User should land on Dashboard page

  Scenario Outline: User Should be able to Add Company
    When User clicks on "Companies"
    And User clicks on "New Company"
    And User enters "<companyName>" in the "companyName" field in the companies page
    And User enters "<url>" in the "URL" field in the companies page
    And User enters "<email>" in the "email" field in the companies page
    And User enters "<phone>" in the "phone" field in the companies page
    And User enters "<logoUrl>" in the "logoUrl" field in the companies page
    And User clicks on "save company"
    Then User should be able to validate new company created succesfully

    Examples: 
      | companyName | url        | email             | phone   | logoUrl        |
      | Amazon      | Amazon.com | Amazon@amazon.com | 123-551 | amazonLogo.com |