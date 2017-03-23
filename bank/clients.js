'use strict';

const inquirer = require('inquirer');

const clients = [
  {
    type: 'list',
    name: 'api',
    message: 'What would you like to do?',
    choices: [
      {name:"Login a client", value:"login"},
      {name:"Get all clients", value:"get"},
      {name:"Refresh client session", value:"refresh"}
    ]
  }
];

const login = [

];

const get = [];
const refresh = [];

module.exports = (heartbank, storage) => {
  inquirer.prompt(clients).then(service => {
    switch (service.api) {
      case 'login':
        inquirer.prompt(login).then(params => {
          heartbank.clients().auth(params.username, params.passcode).then(data => {
            storage.setItemSync('client',data.client);
            storage.setItemSync('token',data.token);
            storage.setItemSync('branch',data.branch);
            storage.setItemSync('customer',data.customer);
            console.log(JSON.stringify(data, null, ' '));
          });
        });
        break;
      case 'get':
        inquirer.prompt(get).then(params => {
          heartbank.clients().get(storage.getItemSync('client'), storage.getItemSync('token'))
          .then(data => console.log(JSON.stringify(data, null, ' ')));
        });
        break;
      case 'refresh':
        inquirer.prompt(refresh).then(params => {
          heartbank.clients().post(storage.getItemSync('client'), storage.getItemSync('token'))
          .then(data => console.log(JSON.stringify(data, null, ' ')));
        });
        break;
    }
  });
}
