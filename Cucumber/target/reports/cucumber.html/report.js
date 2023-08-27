$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/TechFiosLogin.feature");
formatter.feature({
  "name": "Techfios billing login page functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User should enter valid credentials and be able to login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on the Techfios billing login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_is_on_the_Techfios_billing_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_valid_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid password as \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_valid_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should succesfully login and land on the dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_should_succesfully_login_and_land_on_the_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
});