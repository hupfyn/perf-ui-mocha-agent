var fs = require('fs')
var iterator = 0

function Perfy(driver){
    this.driver = driver;
}

Perfy.prototype.runAudit = async function(){
    var result = await this.driver.executeScript("return performance.timing")
    await fs.writeFileSync('results/test_'+iterator+'.json',JSON.stringify(result))
}

Perfy.prototype.beforeTest = async function(){

}

Perfy.prototype.afterTest = async function(){

}

module.exports = Perfy