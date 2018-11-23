import template from './section-faq.html';

class Controller {
	constructor() {
		this.collapsables = [{
			collapsed: false,
			heading: 'Sediusmod tempor inccsetetur aliquatraiy?',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodas temporo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrd exercitation ullamco laboris nisi ut aliquip ex comodo consequat. Duis aute dolor in reprehenderit.',
		}, {
			collapsed: true,
			heading: 'Tempor inccsetetur aliquatriy?',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		}, {
			collapsed: true,
			heading: 'Lorem ipsum dolor amet, consectetur adipisicing?',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		}, {
			collapsed: true,
			heading: 'Lorem ipsum dolor amet, consectetur adipisicing?',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		}];
	}

	toggle(collapsed, collapsable) {
		this.collapsables
			.filter((_collapsable) => _collapsable !== collapsable)
			.forEach((_collapsable) => { _collapsable.collapsed = true });
	}
}

export default {
	template: template,
	controller: Controller,
	controllerAs: 'section',
};
