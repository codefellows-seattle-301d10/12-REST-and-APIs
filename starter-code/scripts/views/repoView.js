(function(module) {
  var repoView = {};

  /* NOTE: Private methods declared here live only within
      the scope of the wrapping IIFE. */
  var renderPrep = function() {
    // Best practice: Cache the DOM query if it's used more than once.
    var $about = $('#about');
    $about.find('ul').empty();
    // $about.fadeIn().siblings().hide();
  };

  /* TODO: Let's compile our new template!
      Save the result in this `repoCompiler` variable that we will pass to
      the append method below. */
  var repoCompiler = Handlebars.compile($('#repo-template').text());

  /* NOTE: If all the data is loaded, we can
      render the repos. */
  repoView.renderRepos = function() {
    renderPrep();
    $('#about ul').append(
      repos.withTheAttribute('name')
      .map(repoCompiler)
    );
  };

  module.repoView = repoView;
})(window);
