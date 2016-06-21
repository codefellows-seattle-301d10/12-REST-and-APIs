(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#about').fadeIn().siblings().hide();
  };

  module.aboutController = aboutController;
})(window);
