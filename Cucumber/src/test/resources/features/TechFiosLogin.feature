@LoginFeature @Regression
Feature: Techfios billing login page functionality

Background:
	Given User is on the Techfios login page

@LoginScenario1 @Smoke
Scenario: User should enter valid credentials and be able to login

	
	When User enters valid username as "demo@techfios.com"
	When User enters valid password as "abc123"
	When User clicks on Sign in button
	Then User should succesfully login and land on the dashboard page



@NegativeLoginScenario1 @Smoke
Scenario Outline: User should enter invalid credentials and not be able to login

	
	When User enters invalid username as "<username>"
	When User enters invalid password as "<password>"
	When User clicks on Sign in button
	Then User should not be able to login
	Examples: 
						|username|password|
						|demo2@techfios.com|abc123|
						|demo@techfios.com|abc125|
						|demo3@techfios.com|abc123|

						


@DBLoginScenario1 
Scenario: User should enter valid credentials from mysql database and be able to login

	Given User is on the Techfios login page
	When User enters valid "username" from mysql database
	When User enters valid "password" from mysql database 
	When User clicks on Sign in button
	Then User should succesfully login and land on the dashboard page