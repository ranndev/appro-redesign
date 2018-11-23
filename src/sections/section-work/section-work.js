import template from './section-work.html';

const defaultCard = {
	title: '',
	description: 'Lorem ipsum dolor sit ameteped consecteadop adipisicing elitab sed eiusmod temporara incident',
};

class Controller {
	constructor() {
		this.cards = [
			{title: 'Login First'},
			{title: 'Data Analysis'},
			{title: 'Face Testing'},
			{title: 'Show Result'},
		];

		this.cards = this.cards.map((card, index) => {
			return Object.assign({}, defaultCard, card, {id: index + 1});
		});
	}
}

export default {
	template: template,
	controller: Controller,
	controllerAs: 'work',
};
