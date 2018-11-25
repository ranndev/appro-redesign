import './app.vendor';

import './services/_index';
import './configs/_index';
import './components/_index';
import './sections/_index';

angular.module('app', [
  'app.services',
  'app.configs',
	'app.components',
	'app.sections',
]).run(function ($timeout) {
  window.onload = () => {
    $timeout(() => {
      document.querySelector('loader').classList.add('hidden');
      document.body.classList.remove('not-loaded');
    }, 3000);
	};
});
