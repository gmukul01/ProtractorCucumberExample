exports.config = {

    baseUrl: 'http://localhost:5000', //base url of my application

    multiCapabilities: [
        {
            browserName: 'firefox',
        },
        {
            browserName: 'chrome',
        },
        // {
        //     browserName: 'phantomjs',
        //     'phantomjs.binary.path': require('phantomjs').path
        // },
      ],

    // directConnect: true,
    chromeDriver: '../resources/chromedriver',
    specs: ['../resources/features/*.feature'], //directory to where my specs are defined

    sauceUser: 'mukulb',
    sauceKey: '6ea2bc7d-99a5-4400-b012-1be4d400bd5c',


    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    getPageTimeout: 1000000, //page time out set for protractor tests

    onPrepare: function() {
        browser.driver.manage().window().maximize(); //when protractor starts up I want it to maximise the browser
        // browser.ignoreSynchronization = true;
        global.expect = require('chai').use(require('chai-as-promised')).expect;
    },

    cucumberOpts: {//cucumber comand line options
        require: ['../src/step_definition/*.js','./env.js'],
        format: 'pretty'
    }
};
