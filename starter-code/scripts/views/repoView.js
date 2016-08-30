(function(module) {
  var repoView = {};

  /* TODO: DONE Let's compile our new template!
       Save the result of invoking Handlebars in this 'repoCompiler' variable
       that we will pass to the append method below. */
  var repoCompiler = function(aRepo){
    var templateRender = Handlebars.compile($('#repo-template').text());
    return templateRender(aRepo);
  };

  repoView.renderRepos = function() {
    $('#about ul').empty().append(
      reposObj.withTheAttribute('id') //changed to watchers, none of them had watchers
      .map(repoCompiler)
    );
  };
/* TODO: DONE Call the function that loads (or 'requests') our repo data.
    Pass in some view function as a higher order callback, so our repos
    will render after the data is loaded. */
  reposObj.requestRepos(repoView.renderRepos);
  module.repoView = repoView;
})(window);
