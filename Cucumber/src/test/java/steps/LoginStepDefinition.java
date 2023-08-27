package steps;

import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefinition extends TestBase {

	LoginPage loginPage;

	@Before
	public void setup() {
		init();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
	}
	
	@Given("User is on the Techfios billing login page")
	public void user_is_on_the_Techfios_billing_login_page() {

		
		driver.get("https://techfios.com/billing/?ng=admin/");
		takeScreenshot(driver);
	}

	@When("User enters valid username as {string}")
	public void user_enters_valid_username_as(String username) {

		
		loginPage.enterUserName(username);
	}

	@When("User enters valid password as {string}")
	public void user_enters_valid_password_as(String password) {

		loginPage.enterPassword(password);
	}

	@When("User clicks on Sign in button")
	public void user_clicks_on_Sign_in_button() {

		loginPage.signIn();
	}

	@Then("User should succesfully login and land on the dashboard page")
	public void user_should_succesfully_login_and_land_on_the_dashboard_page() {
		
		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = getTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
		takeScreenshot(driver);
	}

	@After
	public void tearDown() {
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
		
			e.printStackTrace();
		}
		driver.close();
		driver.quit();
	}
}
