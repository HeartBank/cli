'use strict';

var inquirer = require('inquirer');

var questions = [
  {
    type: 'confirm',
    name: 'toBeDelivered',
    message: 'Is this for delivery?',
    default: false
  }
];

module.exports = () => {
  console.log('Hi, welcome to Node Pizza');
  inquirer.prompt(questions).then(function (answers) {
    console.log('\nOrder receipt:');
    console.log(JSON.stringify(answers, null, '  '));
  });
}
