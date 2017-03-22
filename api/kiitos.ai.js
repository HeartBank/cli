'use strict';

const inquirer = require('inquirer');

const questions = [

];

module.exports = () => {
  console.log('\nOpen Kindness Data\n');
  inquirer.prompt(questions).then(answers => {
    //console.log('\nResponse:\n');
    //console.log(JSON.stringify(answers, null, '  '));
  });
  console.log('Coming soon...\n');
}
