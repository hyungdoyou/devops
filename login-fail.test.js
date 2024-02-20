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

    test("패스워드 오류 테스트", async () => {
            const input_id = await driver.findElement(By.id('custId'));
            input_id.sendKeys('tester01@gmail.com');
        
            const input_pw = await driver.findElement(By.id('custPw'));
            input_pw.sendKeys('Tester02!');
        
            const login_btn = await driver.findElements(By.className('btn full_width black'));
            login_btn[0].click();
        
            // alert 창 뜨는 것 처리
            await driver.wait(until.alertIsPresent());

            let alert = await driver.switchTo().alert();

            // alert 창의 메시지 뽑아냄
            let alertText = await alert.getText();

            // 수락 버튼
            await alert.accept();
        
            expect(alertText).toContain('이메일과 비밀번호가 일치하지 않습니다.');   
    });
})