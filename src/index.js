
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    const vaiParaFinal = 'Babu Santana';
    let driver = await new Builder().forBrowser('firefox').build()
    try {
        // Navigate to Url
        await driver.get('http://www.enquetebbb.com.br/bbb20/enquete/grande-final-bbb20');

        // Locate the button to vote
        const element = await driver.findElement(By.xpath(`//img[@alt='${vaiParaFinal}']/ancestor::div[1]`));
        //console.log("ELEMENTOS: ", JSON.stringify(element))
        // Click on selected button to vote
        await element.click();
        await driver.findElement(By.xpath("//input[@cid='code']")).sendKeys("345");
        await driver.findElement(By.xpath("//input[@value='Confirmar']")).click();
        // await driver.findElement(By.id("onesignal-popover-cancel-button")).click();
        // const iframe = await driver.findElement(By.css('.login-modal > iframe'));
        // await driver.switchTo().frame(iframe);
        // await driver.findElement(By.xpath("//*[contains(text(),'Facebook']")).click();

        
        
        // Locate the frame
        
        // Switch to the frame
        
        //let attr = await driver.switchTo().activeElement().getAttribute("id");
        //console.log("ATRIBUTO: ",`${attr}`)
  

        
        // const loginElements = await driver.findElements(By.id('login'));
        // await loginElement.click();
        

        // let firstResult = await driver.wait(until.elementLocated(By.css('_2E7_CSqCG0v-8RqBa0A3YA'[0])), 10000);
        // console.log(JSON.stringify(firstResult));

        // console.log(await firstResult.getAttribute('textContent'));
    }
    finally{
        setTimeout(function(){ driver.quit(); }, 120000);
        
    }
})();