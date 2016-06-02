module.exports = function () {
  this.World = require('../support/world').World;
  
  this.Given(/^I am on the Project CF page$/, function (callback) {
    this.driver.get('http://yogalates.dk:8080/').then(function(){
        callback();
    });
  });

  this.Then(/^I should see "(.*)" as the page title$/, function (title, callback) {
    this.driver.getTitle().then(function(pageTitle){
        if (title === pageTitle) {
          callback();
        } else {
          callback(new Error("Expected to be on page with title " + title));
        }
    });
    
  });
};