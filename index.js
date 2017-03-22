'use strict';

const inquirer = require('inquirer');

const questions = [
  {
    type: 'list',
    name: 'api',
    message: 'What API?',
    choices: [
      {name:"Kiitos AI", value:"kiitos", short:"Kiitos AI"},
      {name:"Bitcoin Wallet", value:"wallet", short:"Bitcoin Wallet"},
      {name:"Family Bank", value:"bank", short:"Family Bank"}
    ]
  }
];

console.log('\nWelcome to HeartBank!\n');

inquirer.prompt(questions).then(answers => {
  switch (answers.api) {
    case 'kiitos':
      require('./kiitos')();
      break;
    case 'wallet':
      require('./wallet')();
      break;
    case 'bank':
      require('./bank')();
      break;
  }
});
