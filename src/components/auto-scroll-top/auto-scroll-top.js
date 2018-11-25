import template from './auto-scroll-top.html';

class Controller {
  constructor(ScrollSpy) {
    this.spy = ScrollSpy;
  } 
}

export default {
  template: template,
  controller: Controller,
  controllerAs: 'autoScrollTop',
};
