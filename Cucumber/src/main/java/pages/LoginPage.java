package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {

	WebDriver driver;

	@FindBy(how = How.XPATH, using = "//input[@id='username']")
	WebElement user_Name_Element;
	@FindBy(how = How.XPATH, using = "//input[@id='password']")
	WebElement password_Element;
	@FindBy(how = How.XPATH, using = "//button[@name='login']")
	WebElement signIn_Element;

	public LoginPage(WebDriver driver) {

		this.driver = driver;

	}

	public void enterUserName(String username) {

		user_Name_Element.sendKeys(username);

	}

	public void enterPassword(String password) {

		password_Element.sendKeys(password);

	}

	public void signIn() {
		signIn_Element.click();
	}

	public void performLogin(String username, String password) {

		user_Name_Element.sendKeys(username);
		password_Element.sendKeys(password);
		signIn_Element.click();

	}
	
}
