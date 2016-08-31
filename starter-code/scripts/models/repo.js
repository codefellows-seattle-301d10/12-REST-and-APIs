(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];
// TODO: DONE- create a githubToken.js file that we can use to generate our headers
         // properly.
  reposObj.requestRepos = function(callback) {
    /* TODO: How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */
    $.ajax({
      url: 'https://api.github.com/users/codefellows-seattle-301d10/repos' + '?per_page=5' + '&sort=updated',
      type: 'GET',
      headers: {'Authorization': 'token ' + token},
      success: function(data) {
        console.log('yay');
        reposObj.allRepos = data;
        callback(); //placeholder;
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
