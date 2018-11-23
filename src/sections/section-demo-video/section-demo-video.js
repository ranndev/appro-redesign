import template from './section-demo-video.html';

class Controller {
	constructor() {
		this.state = 'paused';
	}

	toggleState() {
		this.state = this.state === 'paused' ? 'playing' : 'paused';
	}
}

export default {
	template: template,
	controller: Controller,
	controllerAs: 'section',
};
