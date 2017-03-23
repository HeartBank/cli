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

module.exports = (heartbank, storage) => {
  inquirer.prompt(endpoints).then(endpoint => {
    switch (endpoint.service) {
      case 'clients':
        require('./clients')(heartbank, storage);
        break;
      case 'branches':
        require('./branches')(heartbank, storage);
        break;
      case 'customers':
        require('./customers')(heartbank, storage);
        break;
      case 'transactions':
        require('./transactions')(heartbank, storage);
        break;
      case 'payments':
        require('./payments')(heartbank, storage);
        break;
      case 'recurrences':
        require('./recurrences')(heartbank, storage);
        break;
      case 'subscriptions':
        require('./subscriptions')(heartbank, storage);
        break;
    }
  });
}
