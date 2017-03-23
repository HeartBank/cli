'use strict';

const inquirer = require('inquirer');

const endpoints = [
  {
    type: 'list',
    name: 'service',
    message: 'Which endpoint?',
    choices: [
      {name:"Clients", value:"clients"},
      {name:"Branches", value:"branches"},
      {name:"Customers", value:"customers"},
      {name:"Transactions", value:"transactions"},
      {name:"Payments", value:"payments"},
      {name:"Recurrences", value:"recurrences"},
      {name:"Subscriptions", value:"subscriptions"}
    ]
  }
];

module.exports = heartbank => {
  inquirer.prompt(endpoints).then(endpoint => {
    switch (endpoint.service) {
      case 'clients':
        require('./clients')(heartbank);
        break;
      case 'branches':
        require('./branches')(heartbank);
        break;
      case 'customers':
        require('./customers')(heartbank);
        break;
      case 'transactions':
        require('./transactions')(heartbank);
        break;
      case 'payments':
        require('./payments')(heartbank);
        break;
      case 'recurrences':
        require('./recurrences')(heartbank);
        break;
      case 'subscriptions':
        require('./subscriptions')(heartbank);
        break;
    }
  });
}
