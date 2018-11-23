import './app.vendor';

import './models/_index';
import './stores/_index';
import './components/_index';

angular.module('app', [
	'app.models',
	'app.stores',
	'app.components',
]).run((NavigationStore) => {
	window.onload = () => {
		document.querySelector('loader').classList.add('hidden');
		document.body.classList.remove('not-loaded');
	};
});
