package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import org.junit.Assert;

public class ListAccountsPage {

	WebDriver driver;

	public ListAccountsPage(WebDriver driver) {

		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//h5[text()='Manage Accounts']")
	WebElement manageAccountsHeader;

	public void validateAccountSuccesfullyCreated(String expectedText) {
		

		Assert.assertEquals(expectedText, manageAccountsHeader.getText());

	}
}
