'use strict';

const inquirer = require('inquirer');
//const kiitos = require('kiitos');

const kindness = [

];

module.exports = storage => {
  inquirer.prompt(kindness).then(service => {
    console.log('\nComing soon...\n');
  });
}
