const {Builder, By, until} = require('selenium-webdriver');

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
    await driver.manage().setTimeouts({implicit: 8000});


    // 페이지가 로드될 때까지 기다림, 즉 해당 클래스 이름이 나타날때까지 5초간 기다리게 하는 것
    await driver.wait(until.elementLocated(By.className('category-title')), 3000); 
    const mypage_btn = await driver.findElement(By.className('fa-solid fa-user'));
    mypage_btn.click();
})();