/*
 * TODO: import angular and other dependencies
 * like our app.styl and normalize.css and components/home
 * ui-router
 * so the below code works
 */
 // without './' it is coming from node_modules
 // Webpack is synchronous - JSPM is async, so hear we can be guaranteed that normalize will be loaded before our styles. With JSPM you would have to set up code to guarantee order.
import 'normalize.css'; // normalize.css is a node_module
// have to import styl files so webpack can find and load them
import './app.styl';
// if there was a parent module to app.js that imported this module - our css would end up in the head twice
// css is first becuase you want it before waiting on your js

// name these whatever you want
import angular from 'angular';
import uiRouter from 'angular-ui-router'; // these are exported by angular as the names of the modules as strings, so you can use them in DI
import ngAnimate from 'angular-animate';

import {home} from './components/home/home'; // all modules in angular have a .name property, which you could choose to export instead of the whole module - bc angulars DI will still find them, but exporting the full module has some testing advantages, when you need to bring in a module for testing.

angular.module('app', [
  // TODO: register other modules here.
  // remember, this array takes strings
  // not objects
  uiRouter,
  ngAnimate,
  home.name
]);
