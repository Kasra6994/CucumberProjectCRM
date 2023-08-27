Feature: Techfios billing login page functionality

Scenario: User should enter valid credentials and be able to login

Given User is on the Techfios billing login page
When User enters valid username as "demo@techfios.com"
When User enters valid password as "abc123"
When User clicks on Sign in button
Then User should succesfully login and land on the dashboard page


