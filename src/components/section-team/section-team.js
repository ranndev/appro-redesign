import template from './section-team.html';

class Controller {
	constructor() {
		this.teamImageUrlFormat = (id) => `assets/images/team/team${id}.jpg`;

		this.teams = [{
			name: 'Jemy Sedonce',
			position: 'Co. Founder',
		}, {
			name: 'Deborah Brown',
			position: 'UX Designer',
		}, {
			name: 'Harry Franks',
			position: 'Founder',
		}, {
			name: 'Victoria Clark',
			position: 'Creative Director',
		}];

		this.teams = this.teams.map((team, index) => {
			return Object.assign(team, {url: this.teamImageUrlFormat(index+1)});
		});
	}
}

export default {
	template: template,
	controller: Controller,
	controllerAs: 'section',
};
