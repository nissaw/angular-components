import {blog} from './blog';
import {blogDirective} from './blog.directive';
import template from './blog.html';
import {BlogController} from './blog.controller';

describe('Blog', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(blog.name));
  beforeEach(inject(_$rootScope_ => {
    $rootScope = _$rootScope_;
    makeController = (injectables) => {
      return new BlogController(injectables);
    };
  }))

  describe('module', () => {
    it('should have an appropriate name', () => {
      console.log(blog) // inspecting this gives a lot of insight into angular modules
      expect(blog.name).to.equal('blog');
    });
  });

  describe('directive', ()=> {
    // TODO: test the directive to make sure it has the
    // right DDO and template and controller
  });

  describe('controller', ()=> {
    // TODO: test the controller
  });

  describe('template', ()=> {
    // TODO: test the template? yup
    // get creative
    // the template is a string - with some html tags in it - run it through a regex?

    it('should have vm', () => {
      expect(template).to.match(/{{\s?vm\.message\s?}}/g);
    })
  });
});


// karma -- a bridge between test runner (mocha) and terminal (sends results via sockets to your terminal) and a browser (chrome, phantomJS)
// mocha -- ( other option here is jasmine ) is the test framework/test runner
// chai -- assertion library

// the $digest cycle and async make testing angular 1 in regular style, really tough
