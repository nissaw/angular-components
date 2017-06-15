// TODO: create the blog controller
// check blog.html for hints on what the controller
// should have/do posts array, message strings
import _ from 'lodash';
// controllers are just a class to call new on - not angular specific - when you give angular this file and tell it to be a controller, it will call new and tie it to your module.

export class BlogController { // we won't be able to export like this once we are injecting dependencies
  // contructor is called when class
  //is invoked with new also where
  //you would $inject your dependencies
  constructor() {
    this.message = 'Read the latest Blog Posts';

    this.posts = _.times(9, () => { // _times returns an array
      return {
        author: 'Scott Moss',
        title: 'Angular Components'
      }
    })
  }
}


/* --------->>>> <<<<--------- */
// side note/lesson on classes
class Car {
  constructor(make){ // this is a new method shortcut in es6
    this.make = make;
  }
}

var myCar = new Car('Honda');

class Suv extends Car {
  constructor(make){
    super(make); // HAS TO BE FIRST LINE OF constructor - call the constructor on parent class - correctly bind this. // can only use super when you're using extends
    this.mileage = '2mpg';
  }
}

// other object shortcuts
destructuring can look a lot like obj shortcut naming
var hey = 'hello';

var obj = {
  hey, // grabs an accessible variable and assigns it's value to this key
  comeOver() {}, // a function
  onlyhere: true // this is created here
}

// destructuring
var {hey} = obj;
// hey === hello
var {onlyhere} = obj; // go get onlyhere from obj
// onlyhere === true;
