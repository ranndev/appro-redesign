import loader from './loader/loader';
import topBar from './top-bar/top-bar';
import collapsable from './collapsable/collapsable';

angular
	.module('app.components', [])
	.component('loader', loader)
	.component('topBar', topBar)
	.component('collapsable', collapsable);
