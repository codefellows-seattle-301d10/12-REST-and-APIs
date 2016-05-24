(function(module) {
  var articlesController = {};

  Article.createTable();

  articlesController.index = function() {
    if($('#articles section').length < 1) {
      Article.fetchAll(articleView.initIndexPage);
    };
    $('#articles').show().siblings().hide();
  };

  module.articlesController = articlesController;
})(window);
