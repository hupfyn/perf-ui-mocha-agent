var assert = require('assert');
var {By, Builder} = require('selenium-webdriver');
const mochaTimeOut = 10000; //ms
require('chromedriver')
var Perfy = require('./perfy')


var driver

describe('Example Suite', function () {
    this.timeout(mochaTimeOut);
    driver = new Builder().forBrowser('chrome').build();
    Perfy = new Perfy(driver)

    it('test1', async function () {
        await driver.get('https://www.amazon.com/s?k=Fender+Jazz+Bass');
        await driver.findElement(By.xpath("//span[contains(text(),'results')]"))
        return Promise.resolve('done')
    });

    it('test2', async function () {
        await driver.get('https://www.amazon.com/s?k=Fender+Jazz+Master');
        await driver.findElement(By.xpath("//span[contains(text(),'results')]"))
        return Promise.resolve('done')
    });
   
    afterEach(async function(){
        console.log(this.currentTest.title)
        await Perfy.runAudit()
        return Promise.resolve('done')
    })
});