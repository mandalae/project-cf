// features/support/world.js
var webdriver = require("selenium-webdriver");

var World = function World() {

  var defaultTimeout = 20000;

  this.webdriver = webdriver;
  this.driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.phantomjs())
      .build();
  
  this.waitFor = function(cssLocator, timeout) {
    var waitTimeout = timeout || defaultTimeout;
    return driver.wait(function() {
      return driver.isElementPresent({ css: cssLocator });
    }, waitTimeout);
  };
};

module.exports.World = World;