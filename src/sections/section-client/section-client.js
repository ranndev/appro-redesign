import template from './section-client.html';

class Controller {
  constructor() {
    const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incubt consectetur aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut com modo consequat. Duis aute irure dolor in reprehenderit.';
    const imageUrlFormat = (id) => `assets/images/client/client${id}.png`;

    this.clients = [{
      name: 'Ms. Newton',
      job: 'Creative Director',
      description: description,
    }, {
      name: 'Ms. Newton',
      job: 'Creative Director',
      description: description,
    }, {
      name: 'Ms. Newton',
      job: 'Creative Director',
      description: description,
    }];

    this.clients = this.clients.map((client, index) => {
      index = index + 1

      return Object.assign(client, {
        id: index,
        position: {last: index, current: index},
        avatarUrl: imageUrlFormat(index),
      });
    });

    this.previous();
  }

  previous() {
    this.direction = 'previous';
    this.clients = this.clients.map((client) => {
      const position = client.position;
      position.last = position.current;
      position.current = position.current + 1 > this.clients.length
        ? 1 : position.current + 1;
      return Object.assign(client, {position});
    });
  }

  next() {
    this.direction = 'next';
    this.clients = this.clients.map((client) => {
      const position = client.position;
      position.last = position.current;
      position.current = position.current - 1 < 1
        ? this.clients.length : position.current - 1;
      return Object.assign(client, {position});
    });
  }
}

export default {
  template: template,
  controller: Controller,
  controllerAs: 'section',
};
