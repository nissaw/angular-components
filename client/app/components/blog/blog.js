// TODO: register your routes for the blog and the directive
// this is the only "angular" file - EVERY OTHER FILE IS JUST JS/ES6 FUNCTIONS
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {blogDirective} from './blog.directive';

export const blog = angular.module('blog', [uiRouter])
  .config(function($stateProvider, $urlRouterProvider){ // these are coming from the uiRouter module
    $stateProvider.state('blog', {
      url: '/blog',
      template: '<blog></blog>' // usually this would be a templateUrl but bc our entire page is this directive we pass in the element directly
    });
  }) // if you need routing it goes here
  .directive('blog', blogDirective) //hmm, directive and module name are the same otherwise the tag needs to reflect whatever name you put here.
