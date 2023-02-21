
const conf = {
    specs: ['./specs/**/*.spec.js'],
     framework: 'mocha',
     mochaOpts:{
        timeout: 30000
     },
     onPrepare(){
     },
     SELENIUM_PROMISE_MANAGER: false
};

 exports.config = conf