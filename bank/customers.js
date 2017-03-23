'use strict';

const inquirer = require('inquirer');

const customers = [
  {
    type: 'list',
    name: 'api',
    message: 'What would you like to do?',
    choices: [
      {name:"Get summary", value:"summary"},
      {name:"Validate transaction message", value:"validate"}
    ]
  }
];

const summary = [];
const validate = [];

module.exports = (heartbank, storage) => {
  inquirer.prompt(customers).then(service => {
    switch (service.api) {
      case 'summary':
        inquirer.prompt(summary).then(params => {
          heartbank.customers(storage.getItemSync('client'), storage.getItemSync('token')).get({customer_id:storage.getItemSync('customer')}).then(data => console.log(JSON.stringify(data, null, ' ')));
        });
        break;
      case 'validate':

        break;
    }
  });
}
