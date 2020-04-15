
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    const bolaDaVez = 'Gizelly';
    let driver = await new Builder().forBrowser('firefox').build()
    try {
        // Navigate to Url
        await driver.get('https://gshow.globo.com/realities/bbb/bbb20/votacao/paredao-bbb20-quem-voce-quer-eliminar-babu-gizelly-ou-mari-6b0c783d-65cd-4a4e-940c-ad086cf73fee.ghtml');

        // Locate the button to vote
        const element = await driver.findElement(By.xpath(`//div[text()='${bolaDaVez}']/ancestor::div[1]`));
        //console.log("ELEMENTOS: ", JSON.stringify(element))
        // Click on selected button to vote
        await element.click();
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