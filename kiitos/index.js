'use strict';

const inquirer = require('inquirer');

const kiitos = [

];

module.exports = heartbank => {
  inquirer.prompt(kiitos).then(service => {
    console.log('\nComing soon...\n');
  });
}
