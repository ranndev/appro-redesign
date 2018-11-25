import template from './section-blog.html';

const defaultBlog = {
  author: 'Admin',
  title: 'Beautiful Place for your Great Journey',
  description: 'Lorem dolor sit amet, consectetur floralm adipisicing elit, sed do eiusmod tem aincididunt elauta labore eta dolore magna aliqualy eminem faenimve...',
};

class Controller {
  constructor() {
    const formatUrl = (id) => `assets/images/blog/blog${id}.jpg`;

    this.blogs = [];
    for (let i = 1; i <= 3; i++) {
      this.blogs.push(Object.assign({}, defaultBlog, {
        imageUrl: formatUrl(i),
        datePublished: new Date(),
      }));
    }
  }
}

export default {
  template: template,
  controller: Controller,
  controllerAs: 'section',
};
