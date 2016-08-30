(function(module) {
  var repoView = {};
  /* TODO: DONE Let's compile our new template!
       Save the result of invoking Handlebars in this 'repoCompiler' variable
       that we will pass to the append method below. */
  var repoCompiler = function(thisRepo) {
    var source = $('#repo-template').html();
    var templateRender = Handlebars.compile(source);
    console.log(thisRepo);
    return templateRender(thisRepo);
  };
  // Finish the Handlebars method here!

  repoView.renderRepos = function() {
    $('#about ul').empty().append(
      reposObj.withTheAttribute('fork')  // TODO: experiment changing this attribute!
      .map(repoCompiler)
    );
  };
/* TODO: DONE Call the function that loads (or 'requests') our repo data.
    Pass in some view function as a higher order callback, so our repos
    will render after the data is loaded. */
  reposObj.requestRepos(repoView.renderRepos);
})(window);
