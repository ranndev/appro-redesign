import template from './top-bar.html';

class Controller {
  constructor($element, NavigationStore) {
    this.collapsed = true;
    this.locations = NavigationStore.getState().locations;

    NavigationStore.getStateStream('TOGGLE_FLOAT_HEADER', ({isFloatHeader}) => {
      isFloatHeader ? $element.addClass('float') : $element.removeClass('float');
    });
  }
}

export default {
  bindings: {
    brandName: '@',
    brandUrl: '@',
  },
  template: template,
  controller: Controller,
  controllerAs: 'topBar',
};
