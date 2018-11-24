import './app.vendor';

import './models/_index';
import './stores/_index';
import './components/_index';
import './sections/_index';

angular.module('app', [
	'app.models',
	'app.stores',
	'app.components',
	'app.sections',
]).run((NavigationStore, $timeout) => {
	window.onload = () => {
    $timeout(() => {
      document.querySelector('loader').classList.add('hidden');
      document.body.classList.remove('not-loaded');
    }, 3000);
	};
});
