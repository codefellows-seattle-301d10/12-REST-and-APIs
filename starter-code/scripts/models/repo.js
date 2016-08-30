(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];
// TODO: DONE - create a githubToken.js file that we can use to generate our headers
         // properly.
  reposObj.requestRepos = function(callback) {
    /* TODO: DONE - How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */
    $.ajax({
      url: 'https://api.github.com/users/patci/repos' +
           '?per_page=5' +
           '&sort=updated',
      type: 'GET',
      headers: {'Authorization': 'token ' + token},
      success: function(data) {
        reposObj.allRepos = data;
        callback();
      }
    });
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;
})(window);
