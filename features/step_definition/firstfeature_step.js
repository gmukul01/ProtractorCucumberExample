/**
 * Created by mukulb on 4/25/16.
 */
var HomePage = require('../pages/HomePage.js');

module.exports =function () {

    var homepage = new HomePage();
    this.Given(/^I am on Protractor Demo page$/, function () {
        homepage.get();
    });
    this.When(/^I add one and two$/, function () {

        homepage.setfirst(1);
        homepage.setsecond(2);

    });
    this.Then(/^I should get three$/, function (done) {
        homepage.verifySum('3').then(done);
      });

    }