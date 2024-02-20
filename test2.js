const {Builder, By} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder()
    .forBrowser('chrome')
    .build();
    await driver.get('https://www.lonuashop.kro.kr/UserLogIn');
    await driver.manage().window().setRect({ width: 1200, height: 900 });

    const input_id = await driver.findElement(By.id('custId'));
    input_id.sendKeys('tester01@gmail.com');

    const input_pw = await driver.findElement(By.id('custPw'));
    input_pw.sendKeys('Tester01!');

    const login_btn = await driver.findElement(By.className('btn full_width black'));
    login_btn.click();

    const main_page = await driver.findElement(By.className('category-title'));
    if(main_page !== null) {
        console.log("로그인 성공")
    } else {
        console.log("로그인 실패")
    }

    // await driver.manage().setTimeouts({implicit: 5000});
})();