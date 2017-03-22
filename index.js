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
      require('./api/kiitos.ai')();
      break;
    case 'wallet':
      require('./api/bitcoin.wallet')();
      break;
    case 'bank':
      require('./api/family.bank')();
      break;
  }
});
