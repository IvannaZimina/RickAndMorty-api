const path = require('path');
const fs = require('fs');
const deepFreeze = require('deep-freeze');

const configFiles = fs.readdirSync(__dirname).filter((file) => {
  if (path.extname(file) !== '.js' || path.basename(file) === 'index.js') {
    return false;
  }

  return true;
});

const config = {};

configFiles.forEach((filename) => {
  
  const configName = path.basename(filename, '.js');
  const filepath = path.resolve(__dirname, filename);
  const store = require(filepath);

  config[configName] = store;
});

deepFreeze(config);

module.exports = config;
