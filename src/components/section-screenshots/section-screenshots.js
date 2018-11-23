import template from './section-screenshots.html';

class Controller {
	constructor($scope, $element, $timeout, $interval) {
		this.$scope = $scope;
		this.$element = $element;
		this.$timeout = $timeout;
		this.$interval = $interval;

		this.screenshots = [];

		for (let i = 1; i <= 5; i++) {
			this.screenshots.push({
				url: `assets/images/screen/screen${i}.jpg`,
				position: {current: i, last: i},
			});
		}

		this.autoNextInterval = null;
		this.autoNextDelay = 3000;
	}

	$onInit() {
		this.play();

		this.$element.on('mouseenter', () => {
			this.$scope.$apply(() => { this.pause(); });
		});

		this.$element.on('mouseleave', () => {
			this.$scope.$apply(() => { this.play(); });
		});
	}

	previous() {
		this.direction = 'previous';
		this.screenshots = this.screenshots.map((screenshot) => {
			const {position} = screenshot;
			position.last = position.current;
			position.current = position.current + 1 > this.screenshots.length
				? 1 : position.current + 1;
			return Object.assign(screenshot, {position});
		});
	}

	next() {
		this.direction = 'next';
		this.screenshots = this.screenshots.map((screenshot) => {
			const {position} = screenshot;
			position.last = position.current;
			position.current = position.current - 1 < 1
				? this.screenshots.length : position.current - 1;
			return Object.assign(screenshot, {position});
		});
	}

	play() {
		this.autoNextInterval = this.$interval(() => {
			this.next();
		}, this.autoNextDelay);
	}

	pause() {
		this.$interval.cancel(this.autoNextInterval);
		this.autoNextInterval = null;
	}
}

export default {
	template: template,
	controller: Controller,
	controllerAs: 'section',
};
