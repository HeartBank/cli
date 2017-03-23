'use strict';

const inquirer = require('inquirer');

const transactions = [
  {
    type: 'list',
    name: 'api',
    message: 'What would you like to do?',
    choices: [
      {name:"Get summary", value:"summary"},
      {name:"Post new transaction", value:"post"}
    ]
  }
];

const summary = [];
const post = [];

module.exports = (heartbank, storage) => {
  inquirer.prompt(transactions).then(service => {
    switch (service.api) {
      case 'summary':
        inquirer.prompt(summary).then(params => {
          heartbank.transactions(storage.getItemSync('client'), storage.getItemSync('token')).get({branch_id:storage.getItemSync('branch'), customer_id:storage.getItemSync('customer'), q:"", fetch:5, page:1, start:"", end:"", filters:{account:false, fund:false, reserve:false}}).then(data => console.log(JSON.stringify(data, null, ' ')));
        });
        break;
      case 'post':

        break;
    }
  });
}
