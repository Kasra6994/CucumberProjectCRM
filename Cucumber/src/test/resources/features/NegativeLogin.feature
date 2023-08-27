
@NegativeLoginFeature @Regression
Feature: Techfios billing login page functionality

Background:
	Given User is on the Techfios billing login page

@NegativeScenario1
Scenario Outline: User should enter valid credentials and be able to login

	
	When User enters valid username as "<username>"
	When User enters valid password as "<password>"
	When User clicks on Sign in button
	Then User should succesfully login and land on the dashboard page
	Examples: 
						|username|password|
						|demo2@techfios.com|abc123|
						|demo@techfios.com|abc125|
						|demo@techfios.com|abc124|

#	
#@NegativeScenario2
#Scenario: User should not be able to login with invalid credentials 
#
#	
#	When User enters valid username as "demo@techfios.com"
#	When User enters valid password as "abc1234"
#	When User clicks on Sign in button
#	Then User should succesfully login and land on the dashboard page
#
#
#@NegativeScenario3
#Scenario: User should not be able to login with invalid credentials 
#
#	
#	When User enters valid username as ""
#	When User enters valid password as ""
#	When User clicks on Sign in button
#	Then User should succesfully login and land on the dashboard page
#
#
#@NegativeScenario4 @Smoke
#Scenario: User should not be able to login with invalid credentials 
#
#	
#	When User enters valid username as "demo2@techfios.com"
#	When User enters valid password as "abc1234"
#	When User clicks on Sign in button
#	Then User should succesfully login and land on the dashboard page
