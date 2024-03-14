const webpackPreprocessor = require('@cypress/webpack-preprocessor')

module.exports = (on) => {
  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: require('../../webpack.config'),
    watchOptions: {},
  }
  on('file:preprocessor', webpackPreprocessor(options))
};

module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    require('cypress-grep/src/plugin')(config)
    return config
};

const { isFileExist } = require('cy-verify-downloads');
module.exports = (on, config) => {
    on('task', { isFileExist });
};