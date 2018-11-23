let debounce = 0;
let lastNavigate = 0;

export default function NavigationStore(NgStore) {
	const store = NgStore.create({
		current: null,
		isFloatHeader: false,
		locations: [
			{title: 'Home', hash: '#home'},
			{title: 'Work', hash: '#work'},
			{title: 'Features', hash: '#features'},
			{title: 'Team', hash: '#team'},
			{title: 'Client', hash: '#client'},
			{title: 'Blog', hash: '#blog'},
			{title: 'Contact', hash: '#contact'},
		],
	});

	document.body.onscroll = (event) => {
		if (Date.now() > lastNavigate + debounce) {
			lastNavigate = Date.now();

			store.setState('TOGGLE_FLOAT_HEADER', {isFloatHeader: window.scrollY > 30});
			
			Array.from(document.querySelectorAll('body > .section')).forEach((section) => {
				console.log({section: section.getBoundingClientRect()})
			});
		}
	};

	return store;
};
