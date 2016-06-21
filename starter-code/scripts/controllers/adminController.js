(function(module) {
  var adminController = {
    index: function() {
      $('#blog-stats').fadeIn().siblings().hide();
    }
  };
  module.adminController = adminController;
})(window);
