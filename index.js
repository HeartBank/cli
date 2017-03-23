'use strict';

const inquirer = require('inquirer');
const heartbank = require('heartbank')("lqs1plB1RzEFf084Wy7Y6Q==", "VAl8JAne4IPtAyD8JOkuehsxGDB9r1Co", "http://localhost:8080");
//const heartbank = require('heartbank')("wkh7za2KISoJ9NemIFhzAQ==", "NJCd7GbpWSORUvVfPi9jGuiAv0uWT5n3"); //thon
//const heartbank = require('heartbank')("TIuCTunzRdz+ML9F4EDy+Q==", "xkXIOk64AEtNFPNd78QhpvIoCEXU012S"); //jane

const products = [
  {
    type: 'list',
    name: 'service',
    message: 'Which HeartBank product?',
    choices: [
      {name:"Kiitos AI", value:"kiitos", short:"Kiitos AI"},
      {name:"Bitcoin Wallet", value:"wallet", short:"Bitcoin Wallet"},
      {name:"Family Bank", value:"bank", short:"Family Bank"}
    ]
  }
];

console.log('\nWelcome to HeartBank!\n');

inquirer.prompt(products).then(product => {
  switch (product.service) {
    case 'kiitos':
      require('./kiitos')(heartbank);
      break;
    case 'wallet':
      require('./wallet')(heartbank);
      break;
    case 'bank':
      require('./bank')(heartbank);
      break;
  }
});
