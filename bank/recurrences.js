'use strict';

const inquirer = require('inquirer');

const recurrences = [
  {
    type: 'list',
    name: 'api',
    message: 'What would you like to do?',
    choices: [
      {name:"Get summary", value:"summary"},
      {name:"Post new recurrence", value:"post"},
      {name:"Edit recurrence", value:"edit"},
      {name:"Delete recurrence", value:"delete"}
    ]
  }
];

const summary = [];
const post = [];
const edit = [];
const del = [];

module.exports = (heartbank, storage) => {
  inquirer.prompt(recurrences).then(service => {
    switch (service.api) {
      case 'summary':
        inquirer.prompt(summary).then(params => {
          heartbank.recurrences(storage.getItemSync('client'), storage.getItemSync('token')).get().then(data => console.log(JSON.stringify(data, null, ' ')));
        });
        break;
      case 'post':

        break;
      case 'edit':

        break;
      case 'delete':

        break;
    }
  });
}
