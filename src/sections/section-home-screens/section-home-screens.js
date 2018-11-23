import template from './section-home-screens.html';

const defaultScreen = {
  title: 'It\'s all about\nPromoting your Business',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempoor incidicunt ur labore et dolere mana aliwqua. Ut enim ad minim vinam, quis nostrud exercitation ullamo laboris nisi ut aliquipex ae commodo consequat. Dues aute irure dolor in reprehenderit in.',
};

class Controller {
  constructor($scope, $interval, $timeout, $element) {
    this.$scope = $scope;
    this.$interval = $interval;
    this.$timeout = $timeout;
    this.$element = $element;

    this.screens = [];
    for (let i = 1; i <= 5; i++) {
      this.screens.push(Object.assign({id: i}, defaultScreen));
    }

    this.screenDirection = 'next';
    this.currentScreenIndex = 0;
    this.lastScreenIndex = 0;
    this.lastScreen = this.screens[this.lastScreenIndex];
    this.currentScreen = this.screens[this.currentScreenIndex];

    this.autoNextInterval = null;
    this.autoNextDelay = 3000;
  }

  $onInit() {
    this.autoNextStart();

    this.$timeout(() => {
      $(this.$element).ripples();
    });
  }

  screenPrev() {
    this.screenDirection = 'prev';
    this.lastScreenIndex = this.currentScreenIndex;
    this.currentScreenIndex = this.currentScreenIndex === 0
      ? this.screens.length-1 : this.currentScreenIndex-1;
    this.lastScreen = this.screens[this.lastScreenIndex];
    this.currentScreen = this.screens[this.currentScreenIndex];
  }

  screenNext() {
    this.screenDirection = 'next';
    this.lastScreenIndex = this.currentScreenIndex;
    this.currentScreenIndex = this.currentScreenIndex === this.screens.length-1
      ? 0 : this.currentScreenIndex+1;
    this.lastScreen = this.screens[this.lastScreenIndex];
    this.currentScreen = this.screens[this.currentScreenIndex];
  }

  autoNextStart() {
    this.autoNextInterval = this.$interval(() => {
      this.screenNext();
    }, this.autoNextDelay);
  }

  autoNextPause() {
    this.$interval.cancel(this.autoNextInterval);
    this.autoNextInterval = null;
  }
}

export default {
  template: template,
  controller: Controller,
  controllerAs: 'home',
};
