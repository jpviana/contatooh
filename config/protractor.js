exports.config = {
	specs:['../test/e2e/**/*.js'],
	onPrepare:function() {
		browser.driver.get('http://localhost:3000');
		browser.sleep(500);
		browser.driver.findElement(by.id('entrar')).click();
		browser.sleep(500);
		browser.driver.findElement(by.id('login_field')).sendKeys('jpviana');
		browser.driver.findElement(by.id('password')).sendKeys('joao110591');
		browser.driver.findElement(by.name('commit')).click();
		browser.sleep(500);
	}
};