import template from './section-home-cards.html';

const defaultCard = {
  title: '',
  description: 'Lorem ipsum dolor sit amt, consectet adop adipisicing elit, sed do eiusmod tepo raraincididunt ugt labore.',
};

class Controller {
  constructor() {
    this.cards = [
      {title: 'Easy to Use'},
      {title: 'Awesome Design'},
      {title: 'Easy to Customize'},
    ];

    this.cards = this.cards.map((card) => {
      return Object.assign({}, defaultCard, card);
    });

  }
}

export default {
  template: template,
  controller: Controller,
  controllerAs: 'home',
};
