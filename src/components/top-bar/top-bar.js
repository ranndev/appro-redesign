import template from './top-bar.html';

class Controller {
  constructor($scope, $element, ScrollSpy) {
    this.spy = ScrollSpy
    this.collapsed = true;

    $scope.$watch('topBar.spy.scrollPosition', (position) => {
      position > 30 ? $element.addClass('float') : $element.removeClass('float');
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
