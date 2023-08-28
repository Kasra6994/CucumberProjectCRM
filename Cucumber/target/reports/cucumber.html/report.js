$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CreateBankAccount.feature");
formatter.feature({
  "name": "Techfios Other billing login page functionality validation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User should be able to login with valid credentials",
  "description": "\tand open a new account\t",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters the \"\u003cusername\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "name": "User enters the \"\u003cpassword\u003e\" in the password field",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.step({
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on Bank\u0026Cash",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on New Account",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003caccountTitle\u003e\" in the Account Title field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cdescription\u003e\" in the Description field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cinitialBalance\u003e\" in the Initial Balance field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003caccountNumber\u003e\" in the Account Number field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccontactPerson\u003e\" in the Contact Person field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cPhone\u003e\" in the Phone field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cinternetBankingURL\u003e\" in the Internet Banking URL field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBankingURL"
      ]
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Checking Account",
        "1 % CashBack Simple Checking",
        "3000",
        "126543296245",
        "John Doe",
        "125-623-6235",
        "https://techfios.com/billing/?ng\u003daccounts/login/"
      ]
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Savings Account",
        "5% APR Savings Account",
        "10000",
        "531235786551",
        "Jane Doe",
        "125-643-6643",
        "https://techfios.com/billing/?ng\u003daccounts/login/"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to login with valid credentials",
  "description": "\tand open a new account\t",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters the \"demo@techfios.com\" in the username field",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_enters_the_in_the_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the \"abc123\" in the password field",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_enters_the_in_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Bank\u0026Cash",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_clicks_on_bank_cash()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on New Account",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_clicks_on_new_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Checking Account\" in the Account Title field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_enters_in_the_account_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"1 % CashBack Simple Checking\" in the Description field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_enters_in_the_description(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"3000\" in the Initial Balance field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_enters_in_the_initial_balance(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"126543296245\" in the Account Number field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_enters_in_the_account_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"John Doe\" in the Contact Person field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_enters_in_the_contact_person(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"125-623-6235\" in the Phone field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_enters_in_contact_person(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"https://techfios.com/billing/?ng\u003daccounts/login/\" in the Internet Banking URL field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_enters_in_the_internet_banking_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_clicks_on_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to login with valid credentials",
  "description": "\tand open a new account\t",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters the \"demo@techfios.com\" in the username field",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_enters_the_in_the_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the \"abc123\" in the password field",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_enters_the_in_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Bank\u0026Cash",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_clicks_on_bank_cash()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on New Account",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_clicks_on_new_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Savings Account\" in the Account Title field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_enters_in_the_account_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"5% APR Savings Account\" in the Description field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_enters_in_the_description(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10000\" in the Initial Balance field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_enters_in_the_initial_balance(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"531235786551\" in the Account Number field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_enters_in_the_account_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Jane Doe\" in the Contact Person field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_enters_in_the_contact_person(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"125-643-6643\" in the Phone field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_enters_in_contact_person(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"https://techfios.com/billing/?ng\u003daccounts/login/\" in the Internet Banking URL field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_enters_in_the_internet_banking_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_clicks_on_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddBankAccountStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "status": "passed"
});
});