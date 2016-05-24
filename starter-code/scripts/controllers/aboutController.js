(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#about').show().siblings().hide();

    // TODO: Call the function that loads (or 'requests') our repo data.
    //  Pass in some view function as a higher order callback, so our repos
    //  will render after the data is loaded.

  };

  module.aboutController = aboutController;
})(window);
