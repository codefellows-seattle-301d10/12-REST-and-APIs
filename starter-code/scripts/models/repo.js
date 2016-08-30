(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];
// TODO: DONE create a githubToken.js file that we can use to generate our headers
         // properly.
         /* TODO: DONE? How would you like to fetch your repos? Someone say AJAX?!
         Do not forget to call the callback! */

  reposObj.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/codefellows-seattle-301d10/repos' + '?per_page=10',
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken },
      success: function(data) {
        console.log(data);
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
