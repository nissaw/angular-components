import _ from 'lodash';
// the Posts factory is just a js function and though you CAN import it here and use it, you shouldn't. You should register it wil angular (app.js/shared.js) so that you can use Angular's dependency injection (for mocking and consistency)

class BlogController { // we cannot export up here anymore bc of our $inject below.
  constructor(Posts) { // constructor is where DI goes
    this.message = 'The latest from the blog';
// TODO replace this with data from the server and
    // this.posts = _.times(9, ()=> {
    //   return {
    //     author: 'Casidy James',
    //     title: 'What\'s new in Angular 3'
    //   };
    // });
    this.Posts = Posts; // the only way to have Posts avail outside this constructor function is to bind it to this - so that it becomes avail on every instance. ES7 may introduce static properties - identified above the constructor to assign props to the instance. But that wouldn't help us out with the dependency injection
    this.getPosts(); // initialize by getting posts from Posts Service
  }

  getPosts() {
    this.Posts.get()
      .then(() => {
        this.posts = this.Posts.getState(); // the service remains the source of truth;
      });
  }
}

BlogController.$inject = ['Posts']; // this makes DI safe for minification in this style of Angular. It also means we have to switch from exporting on line 3 'export class BlogController' to exporting below this injection directive by writing our export statement below ;

export {BlogController};


// one remaining issue is that if data on the server changes out from under us - our data is stale until we make another get call. getServerEvents (push notifications up to the client, otherwise Sockets leave an open connection for events) // how are sockets implemented in this situation?
// put a socket.on in posts.js listening for an event where something is added (this pattern is called pub-sub)
