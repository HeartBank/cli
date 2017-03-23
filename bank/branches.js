'use strict';

const inquirer = require('inquirer');

const branches = [
  {
    type: 'list',
    name: 'api',
    message: 'What would you like to do?',
    choices: [
      {name:"Get summary", value:"summary"},
      {name:"Edit interest rate", value:"interest"}
    ]
  }
];

const summary = [];
const interest = [];

module.exports = (heartbank, storage) => {
  inquirer.prompt(branches).then(service => {
    switch (service.api) {
      case 'summary':
        inquirer.prompt(summary).then(params => {
          heartbank.branches(storage.getItemSync('client'), storage.getItemSync('token')).get({branch_id:storage.getItemSync('branch')}).then(data => console.log(JSON.stringify(data, null, ' ')));
        });
        break;
      case 'interest':

        break;
    }
  });
}
