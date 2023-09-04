package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class CompaniesPage extends TestBase {

	WebDriver driver;

	public CompaniesPage(WebDriver driver) {

		this.driver = driver;

	}

	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[2]/div/h2")
	WebElement companyHeader;
	@FindBy(how = How.XPATH, using = "//a[@id='add_company']")
	WebElement addCompanybutton;
	@FindBy(how = How.XPATH, using = "//a[@class='md-fab md-fab-primary waves-effect waves-light add_company']//i[@class='fa fa-plus']")
	WebElement bigAddCompanybutton;
	@FindBy(how = How.XPATH, using = "//i[@class='fa fa-pencil']")
	WebElement deleteCompanybutton;
	@FindBy(how = How.XPATH, using = "//a[@id='be1']//i[@class='fa fa-pencil']")
	WebElement editCompanybutton;
	@FindBy(how = How.XPATH, using = "//input[@id='company_name']")
	WebElement companyNameElement;
	@FindBy(how = How.XPATH, using = "//input[@id='url']")
	WebElement urlElement;
	@FindBy(how = How.XPATH, using = "//input[@id='email']")
	WebElement emailElement;
	@FindBy(how = How.XPATH, using = "//input[@id='phone']")
	WebElement phoneElement;
	@FindBy(how = How.XPATH, using = "//input[@id='logo_url]")
	WebElement logoUrlElement;
	@FindBy(how = How.XPATH, using = "//button[@id='modal_submit']")
	WebElement saveButton;

	public void validateCompanyPage() {

		validateElement("Companies", companyHeader.getText());

	}

	public void clickAddCompany() {
		addCompanybutton.click();
	}

	public void editCompany() {

		editCompanybutton.click();
	}

	public void deleteCompany() {
		deleteCompanybutton.click();
	}

	public void enterCompanyName(String companyName) {

		companyNameElement.sendKeys(companyName);

	}

	public void enterCompanyUrl(String url) {

		urlElement.sendKeys(url);
	}

	public void enterCompanyEmail(String email) {
		emailElement.sendKeys(randomNumGenerator(9999)+email);

	}

	public void enterCompanyPhone(String phone) {
		phoneElement.sendKeys(phone+randomNumGenerator(9999));
	}

	public void enterCompanylogoURL(String logoUrl) {
		logoUrlElement.sendKeys(logoUrl);
	}

	public void saveCompany() {
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		saveButton.click();
	}
}
