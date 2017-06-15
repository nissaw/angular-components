// TODO: create the directive for the blog component
// don't forget to include the template and styles and controller

// this is the meat and potatoes of this system
// controllers get big when you are maintaining state in them.
// when you give state over to a service/factory controllers can be very small
import './blog.styl'; // just here for Webpack to grab it. NO CSS CLOSURE - still shared across the app
import template from './blog.html';
import {BlogController as controller} from './blog.controller';

export const blogDirective = ($http) => { // this is where DI is done
  // only probably need a link if you have multiple instances of the directive
  return {
    template,
    controller,
    controllerAs: 'vm',
    scope: {}
    restrict: 'E',
    replace: true, // take the <blog> tag out of the DOM, and just stick in the refereced html // if you ARE USING replace to - your html needs to be enclosed in one container - cannot have sibilng divs in your template if you're using replace true.
  }
}
