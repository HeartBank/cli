'use strict';

const inquirer = require('inquirer');

const payments = [
  {
    type: 'list',
    name: 'api',
    message: 'What would you like to do?',
    choices: [
      {name:"Get summary", value:"summary"},
      {name:"Resend code", value:"resend"},
      {name:"Post new payment", value:"post"},
      {name:"Process payment", value:"process"}
    ]
  }
];

const summary = [];
const resend = [];
const post = [];
const process = [];

module.exports = (heartbank, storage) => {
  inquirer.prompt(payments).then(service => {
    switch (service.api) {
      case 'summary':
        inquirer.prompt(summary).then(params => {
          heartbank.payments(storage.getItemSync('client'), storage.getItemSync('token')).get().then(data => console.log(JSON.stringify(data, null, ' ')));
        });
        break;
      case 'resend':

        break;
      case 'post':

        break;
      case 'process':

        break;
    }
  });
}
