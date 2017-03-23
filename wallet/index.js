'use strict';

const inquirer = require('inquirer');

const users = [
  {
    type: 'list',
    name: 'api',
    message: 'What would you like to do?',
    choices: [
      {name:"Get summary", value:"summary"},
      {name:"Get new address", value:"address"},
      {name:"Verify signed message", value:"verify"},
      {name:"Send bitcoins", value:"send"},
      {name:"Edit webhook", value:"webhook"},
      {name:"Edit automatic withdraws", value:"withdraw"}
    ]
  }
];

const summary = [];
const address = [];

module.exports = heartbank => {
  inquirer.prompt(users).then(service => {
    switch (service.api) {
      case 'summary':
        inquirer.prompt(summary).then(params => {
          heartbank.users().get()
          .then(data => console.log(JSON.stringify(data, null, ' ')))
          .catch(error => console.log(error));
        });
        break;
    }
  });
}
