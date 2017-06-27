// TODO: create factory for getting blog posts from api server
// and removing static data out from blogComponent and replacing
// it with this factory

const posts = ($http, API) => {
  // TODO: create crud methods
  // use ES2015 method, property shortcuts

  // keep our state here
  let allPosts = [];

  const get = () => {
    return $http.get(`${API.url}/posts`)
    // .then(successcallback, errorcallback),
    // often we see data returned back to the controller at this point, but this pattern, saving the data to a variable in the service is going to keep state in the service.

    // here's a good place to parse the data before adding it to the allPosts array - clean out passwords returned from the server, etc...
      .then(resp => allPosts = resp.data);
  };

  const getOne = (id) => {
    const post = allPosts.find((el) => el.id === id);
// if we already have it don't call the server
    if (post) {
      // $q is a promise library inside angular
      // when will wrap whatever value you pass is inside a promise that is essentially immediatly resolved
      // it allows you to call .then on the returned value, even though it might not be truly waiting on an asyncronous value.
      // that way you can always assume calling getOne returns a promise
      return $q.when(post);
    } else {
      // go get it from the server
      return $http.get(`${API.url}/posts/${id}`)
      // destructuing in the argument
       // assign the data property from the response object to the fn argument
        .then(({data}) => { // data = resp.data
          allPosts.push(data); // add it to allPosts
          return data;
        })
    }
  };

  const getState = () => {
    return allPosts;
  }
  // not doing it like this :P
  // post: $http.post(API, data, {})
  //   .then(successcallback, errorcallback),
  // delete: $http.delete(API, data, {})
  //     .then(successcallback, errorcallback)

  return {get, getOne, getState};
};

posts.$inject = ['$http', 'API', '$q'];

export {posts};
