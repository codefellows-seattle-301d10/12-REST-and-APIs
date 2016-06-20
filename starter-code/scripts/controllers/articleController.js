(function(module) {
  var articlesController = {};

  articlesController.index = function() {
    $('#articles').show().siblings().hide();
  };

  module.articlesController = articlesController;
})(window);
