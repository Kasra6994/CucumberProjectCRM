package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


public class ListAccountsPage extends TestBase {

	WebDriver driver;

	public ListAccountsPage(WebDriver driver) {

		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//h5[text()='Manage Accounts']")
	WebElement manageAccountsHeader;

	
	String actualName;
	String beforeXpath = "//table//tr[";
	String afterXpath = "]/td[1]";
	WebElement table;
	
	
	
	public void validateAccountSuccesfullyCreated() {
		
		
		try {
			Thread.sleep(200);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		takeScreenshot(driver);
		table = driver.findElement(By.xpath("//div[@class='ibox-content']"));
		java.util.List<WebElement> rows = table.findElements(By.tagName("tr"));
		int rowCount = rows.size();
		for (int i = 2; i <= rowCount; i++) {
			actualName = driver.findElement(By.xpath(beforeXpath + i + afterXpath)).getText();
			if(actualName.contains(AddBankAccountsPage.accountTitle)) {
				Assert.assertTrue(true);
				System.out.println("Account Succesfully Created!");
				break;
			}
		}
		
	}
}
