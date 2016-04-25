/**
 * Created by mukulb on 4/25/16.
 */
exports.config = {

    baseUrl: 'http://localhost:5000', //base url of my application

    // Use this for creating standalone server
    // seleniumServerJar: null,
    // chromeDriver: './selenium/chromedriver',

    directConnect: true,
    chromeDriver: '../../resources/chromedriver',
    specs: ['../../features/*.feature'], //directory to where my specs are defined

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    getPageTimeout: 1000000, //page time out set for protractor tests

    onPrepare: function() {
        browser.driver.manage().window().maximize(); //when protractor starts up I want it to maximise the browser
    },

    cucumberOpts: {//cucumber comand line options

        require: '../../features/step_definition/*.js',
        // tags: '@dev',
        format: 'pretty'

    }

};
