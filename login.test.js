import { describe, expect, test, beforeAll, afterAll } from "@jest/globals";
const {Builder, By, until} = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");

describe("로그인", () => {
    let driver;
    beforeAll(async () => {
      driver = await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(
          new chrome.Options().addArguments("--headless")
        )
        .build();
  
      await driver.get("https://www.lonuashop.kro.kr/UserLogIn");
      await driver.manage().window().setRect({ width: 1200, height: 900 });
    }, 30000);
  
    afterAll(async () => {
      await driver.quit();
    }, 40000);

    test("정상 케이스 테스트", async () => {
            const input_id = await driver.findElement(By.id('custId'));
            input_id.sendKeys('tester01@gmail.com');
        
            const input_pw = await driver.findElement(By.id('custPw'));
            input_pw.sendKeys('Tester01!');
        
            const login_btn = await driver.findElements(By.className('btn full_width black'));
            login_btn[0].click();
        
            await driver.wait(until.elementLocated(By.className('category-title')), 3000); 
            const main_page = await driver.findElement(By.className('category-title'));
            expect(main_page).not.toBeNull();            
    });
})