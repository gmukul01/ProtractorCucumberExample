/**
 * Created by mukulb on 4/25/16.
 */
var expect = require('chai').use(require('chai-as-promised')).expect;

var HomePage = function() {


    var first = element(by.model('first'));
    var second = element(by.model('second'));
    var gobutton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));


    this.get = function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    };

    this.setfirst = function(text) {
        first.sendKeys(text);
    };

    this.setsecond = function(text) {
        second.sendKeys(text);
    };

    this.verifySum = function(text) {
        return gobutton.click().then(function () {
            latestResult.getText().then(function (value) {
                expect(value).to.equal(text);
            });
        })

    };
};

module.exports = HomePage;