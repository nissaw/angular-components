// TODO: import required modules
import './home.styl';
// this is the boilerplate when creating everything as a module
import angular from 'angular';
import _ from 'lodash';
// re-importing things that this module WOULD have access to from sibling modules (ie uiRouter) makes this component more standalone - no longer depends on which other modules it is used with
// other than typing this multiple times - there is not a performance loss is re-importing the same files
import uiRouter from 'angular-ui-router';


const home = angular.module('home', [
  uiRouter
])
.config(function($stateProvider, $urlRouterProvider) { // this would break if we hadn't re-imported uiRouter when testing home by itself, in the presence of app.js it is fine - because home is a sibling of app, and app.js has uiRouter
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    template: `
      <section class="home">
        <div class="title">
          <h1>{{ title }}</h1>
        </div>

        <div class="items">
          <ul>
            <li ng-repeat="item in items">
              {{ item }}
            </li>
          </ul>
        </div>
      </section>
    `,
    controller: 'HomeController'
  });
})
// haha this is garbage, we aren't gonna do it like this anymore 
.controller('HomeController', function($scope) {
  $scope.title = 'Welcome to the blog!'
  // TODO: be sure to import lodash!
  $scope.items = _.times(5, i => {
    return `I am item ${i}`; // any valid javascript inside interpolation! ${1 + 5}
  });
});

// TODO: export the module
export {home}; // becuase we are going to import as import
// placing an export in front of a var
//is the same as exporting the var at the
// end of the file using export {varname}
// so on line 7 could just write 'export const home' and remove line 42
