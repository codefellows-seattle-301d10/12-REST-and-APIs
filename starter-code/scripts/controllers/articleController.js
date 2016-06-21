(function(module) {
  var articleController = {};

  articleController.index = function() {
    $('.tab-content').hide();
    $('#articles').fadeIn();
  };

  module.articleController = articleController;
})(window);
