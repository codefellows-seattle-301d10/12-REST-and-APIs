(function(module) {
  var adminController = {
    index: function() {
      $('#blog-stats').show().siblings().hide();
    }
  };
  module.adminController = adminController;
})(window);
