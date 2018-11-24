import template from './collapsable.html';

class Controller {
  constructor($scope, $element, $timeout) {
    this.$element = $element;
    this.$timeout = $timeout;
    this.$content = angular.element($element[0].lastElementChild);

    $scope.$watch('collapsable.collapsed', () => {
      this.initialized && this.update();
    });
  }

  $onInit() {
    this.initialized = true;

    this.$timeout(() => {
      this.update();
    });
  }

  update() {
    if (this.collapsed) {
      this.$content.css('margin-top', `-${this.$content[0].offsetHeight}px`);
      this.$element.addClass('collapsed');

      this.$timeout(() => {
        this.$content.css('height', 0);
      }, 300);
    } else {
      this.$content.css('height', null);
      this.$content.css('margin-top', null);
      this.$element.removeClass('collapsed');
    }
  }

  toggle() {
    this.collapsed = !this.collapsed;
    this.onToggle({collapsed: this.collapsed});
  }
}

export default {
  template: template,
  bindings: {
    collapsed: '=',
    heading: '@',
    content: '@',
    onToggle: '&',
  },
  controller: Controller,
  controllerAs: 'collapsable',
};
