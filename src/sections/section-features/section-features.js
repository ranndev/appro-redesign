import template from './section-features.html';

const defaultFeature = {
  icon: 'trophy',
  title: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore',
};

class Controller {
  constructor($scope) {
    this.leftFeatures = [
      {title: 'Creative Design'},
      {title: 'Unlimited Features'},
      {title: 'Full Free Chat'},
    ];

    this.rightFeatures = [
      {title: 'Retina Ready'},
      {title: 'High Resolution'},
      {title: 'Clean Codes'},
    ];

    this.leftFeatures = this.leftFeatures.map((feature) => {
      return Object.assign({}, defaultFeature, feature);
    });

    this.rightFeatures = this.rightFeatures.map((feature) => {
      return Object.assign({}, defaultFeature, feature);
    });

    this.features = [
      ...this.leftFeatures,
      ...this.rightFeatures,
    ].map((feature, index) => {
      return Object.assign(feature, {id: index + 1});
    });

    this.currentFeature = this.features[0];
    this.lastFeature = this.features[0];

    $scope.$watch('section.currentFeature', (current, last) => {
      this.currentFeature = current;
      this.lastFeature = last;
    });
  }

  setCurrentFeature(feature) {
    this.currentFeature = feature;
  }
}

export default {
  template: template,
  controller: Controller,
  controllerAs: 'section',
};
