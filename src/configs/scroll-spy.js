export default function (ScrollSpyProvider) {
  ScrollSpyProvider.setLocations([
    {
      name: 'home',
      title: 'Home',
      selector: ".section-group.section-group-home",
      sections: [
        'section-home-screens',
        'section-home-cards',
      ],
    },
    {
      name: 'work',
      title: 'Work',
      selector: ".section-group.section-group-work",
      sections: ['section-work'],
    },
    {
      name: 'features',
      title: 'Features',
      selector: ".section-group.section-group-features",
      sections: [
        'section-features',
        'section-demo-video',
        'section-screenshots',
      ],
    },
    {
      name: 'team',
      title: 'Team',
      selector: ".section-group.section-group-team",
      sections: ['section-team'],
    },
    {
      name: 'client',
      title: 'Client',
      selector: ".section-group.section-group-client",
      sections: ['section-client'],
    },
    {
      name: 'pricing',
      title: 'Pricing',
      selector: ".section-group.section-group-pricing",
      sections: [
        'section-price',
        'section-faq',
        'section-download',
      ],
    },
    {
      name: 'blog',
      title: 'Blog',
      selector: ".section-group.section-group-blog",
      sections: ['section-blog'],
    },
    {
      name: 'contact',
      title: 'Contact',
      selector: ".section-group.section-group-contact",
      sections: [
        'section-map',
        'section-contact',
      ],
    },
  ]);
}
