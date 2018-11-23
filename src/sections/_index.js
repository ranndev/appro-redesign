import sectionHomeScreens from './section-home-screens/section-home-screens';
import sectionHomeCards from './section-home-cards/section-home-cards';
import sectionWork from './section-work/section-work';
import sectionFeatures from './section-features/section-features';
import sectionDemoVideo from './section-demo-video/section-demo-video';
import sectionScreenshots from './section-screenshots/section-screenshots';
import sectionTeam from './section-team/section-team';
import sectionClient from './section-client/section-client';
import sectionPrice from './section-price/section-price';
import sectionFaq from './section-faq/section-faq';
import sectionDownload from './section-download/section-download';
import sectionBlog from './section-blog/section-blog';
import sectionMap from './section-map/section-map';
import sectionContact from './section-contact/section-contact';

angular
	.module('app.sections', [])
	.component('sectionHomeScreens', sectionHomeScreens)
	.component('sectionHomeCards', sectionHomeCards)
	.component('sectionWork', sectionWork)
	.component('sectionFeatures', sectionFeatures)
	.component('sectionDemoVideo', sectionDemoVideo)
	.component('sectionScreenshots', sectionScreenshots)
	.component('sectionTeam', sectionTeam)
	.component('sectionClient', sectionClient)
	.component('sectionPrice', sectionPrice)
	.component('sectionFaq', sectionFaq)
	.component('sectionDownload', sectionDownload)
	.component('sectionBlog', sectionBlog)
	.component('sectionMap', sectionMap)
	.component('sectionContact', sectionContact);
