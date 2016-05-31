/**
 * Created by mukulb on 4/25/16.
 */
var HomePage = require('../pages/HomePage.js');

module.exports =function () {

    var homepage = new HomePage();
    this.Given(/^I am on Protractor Demo page$/, function () {
        homepage.get();
    });

    this.When(/^I add below numbers$/, function (table) {

        table.hashes().forEach(function(row){
            homepage.setfirst(row.first);
            homepage.setsecond(row.second);
        });

    });

    this.Then(/^I should get three$/, function (done) {
        homepage.verifySum('5').then(done);
      });

    }
