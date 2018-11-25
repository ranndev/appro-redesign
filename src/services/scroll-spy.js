class ScrollSpy {
  constructor(config, $rootScope, $timeout) {
    this.$timeout = $timeout;
    this.scrollSteps = 100;
    this.scrollStepsDelay = 10;
    this.scrollPosition = 0;
    this.currentSection = null;

    this.locations = config.locations.map((location) => {
      const context = document.querySelector(location.selector);

      location.sections = location.sections.map((section) => {
        return {
          selector: section,
          element: context.querySelector(section),
          location: location,
          position: 0,
        };
      });

      return location;
    });

    angular.element(document).on('scroll', () => {
      $rootScope.$apply(() => {
        this.scrollPosition = window.scrollY;
        this.updateCurrentLocation();
      });
    });

    if (window.scrollY === 0) {
      this.currentSection = this.locations[0].sections[0];
    }
  }

  scrollTo(location) {
    if (this.currentSection.location === location) {
      return;
    }

    console.log('scrolling...')

    let target = document.querySelector(location.selector);
    let clientRect = null;

    for (let i = this.scrollSteps; i > 0; i--) {
      this.$timeout(() => {
        clientRect = target.getBoundingClientRect();
        window.scrollTo(0, window.scrollY + (clientRect.top / i));
      }, (this.scrollSteps - i) * this.scrollStepsDelay);
    }
  }

  updateCurrentLocation() {
    const newSection = this.locations.reduce((sections, location) => {
      return sections.concat(location.sections);
    }, []).reduce((newLocation, location) => {
      location.position = location.element.getBoundingClientRect().top;
      location.position = Math.abs(location.position);

      return !newLocation
        ? location : newLocation.position < location.position
        ? newLocation : location;
    }, this.currentSection);

    if (newSection !== this.currentSection) {
      this.currentSection = newSection;

      if (!this.currentSection.initialized) {
        this.currentSection.initialized = true;
        this.currentSection.element.classList.add('initialized');
      }
    }
  }
}

export default class ScrollSpyProvider {
  constructor() {
    this.config = {
      locations: [],
    };
  }

  setLocations(locations) {
    this.config.locations = locations;
  }

  $get($rootScope, $timeout) {
    return new ScrollSpy(this.config, $rootScope, $timeout);
  }
}
