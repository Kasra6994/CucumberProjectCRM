package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class CustomerSummaryPage extends TestBase {

	WebDriver driver;

	public CustomerSummaryPage(WebDriver driver) {

		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//a[@id='summary']")
	WebElement summaryHeaderElement;

	public void validateSummaryPage() {

		validateElement("Summary", summaryHeaderElement.getText());

	}
}