(function(module) {
  var repos = {};

  repos.allRepos = [];

  repos.requestRepos = function(callback) {
    /* TODO: How would you like to fetch your repos? Someone say AJAX!?
       Don't forget to call the callback! */
    $.ajax({
      url: 'https://api.github.com/users/codefellows-seattle-301d4/repos' +
            '?per_page=5' +
            '&sort=updated',
      type: 'GET',
      headers: { 'Authorization': 'token ' + githubToken },
      success: function(data, message, xhr) {
        repos.allRepos = data;
      }
    }).done(callback);
  };

  repos.withTheAttribute = function(attr) {
    /* DONE: This Model method filters the full repos collection based
        on a particular attribute. You could use this to filter all
        repos that have a non-zero `forks_count`, `stargazers_count`,
        or `watchers_count`. */
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.repos = repos;
})(window);
