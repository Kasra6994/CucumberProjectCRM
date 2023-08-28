package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import org.junit.Assert;

public class AddBankAccountsPage {

	WebDriver driver;

	public AddBankAccountsPage(WebDriver driver) {

		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//h5[text()='Add New Account']")
	WebElement addNewAccountHeader;
	@FindBy(how = How.XPATH, using = "//input[@id='account']")
	WebElement accountTitleElement;
	@FindBy(how = How.XPATH, using = "//input[@id='description']")
	WebElement descriptionElement;
	@FindBy(how = How.XPATH, using = "//input[@id='balance']")
	WebElement initialBalanceElement;
	@FindBy(how = How.XPATH, using = "//input[@id='account_number']")
	WebElement accountNumberElement;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']")
	WebElement contactPersonElement;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']")
	WebElement phoneElement;
	@FindBy(how = How.XPATH, using = "//input[@id='ib_url']")
	WebElement internetBankingUrlElement;
	@FindBy(how= How.XPATH, using = "//button[@class='btn btn-primary']")
	WebElement submitElement;
	
	
	
	public void validateAddNewAccountPage(String expectedText) {

		Assert.assertEquals(expectedText,addNewAccountHeader.getText());
	}

	public void enterAccountTitle(String title) {

		accountTitleElement.sendKeys(title);
	}

	public void enterDescription(String description) {

		descriptionElement.sendKeys(description);

	}

	public void enterInitialBalance(String balance) {
		initialBalanceElement.sendKeys(balance);

	}

	public void enterAccountNumber(String accountNumber) {
		accountNumberElement.sendKeys(accountNumber);
	}

	public void enterContactPerson(String contact) {
		contactPersonElement.sendKeys(contact);
	}

	public void enterPhoneNumber(String phone) {

		phoneElement.sendKeys(phone);
	}

	public void enterInternetBankingURL(String url) {
		internetBankingUrlElement.sendKeys(url);
	}
	public void clickSubmit() {
		submitElement.click();
	}
}
