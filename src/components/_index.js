import autoScrollTop from './auto-scroll-top/auto-scroll-top';
import loader from './loader/loader';
import topBar from './top-bar/top-bar';
import collapsable from './collapsable/collapsable';

angular
	.module('app.components', [])
  .component('autoScrollTop', autoScrollTop)
	.component('loader', loader)
	.component('topBar', topBar)
	.component('collapsable', collapsable);
