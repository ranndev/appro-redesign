import template from './section-price.html';

const defaultFeatures = [
  '100 mb disk space',
  '2 subdomains',
  '5 email accounts',
  'webmail support',
  'customer support 24/7',
];

class Controller {
  constructor() {
    this.prices = [
      {name: 'Basic', price: 20},
      {name: 'Standard', price: 39, isDefault: true},
      {name: 'Unlimited', price: 59},
    ];

    this.prices = this.prices.map((price) => {
      return Object.assign({}, {features: defaultFeatures}, price);
    });

    this.activePrice = this.prices[1];
  }
}

export default {
  template: template,
  controller: Controller,
  controllerAs: 'section',
};
