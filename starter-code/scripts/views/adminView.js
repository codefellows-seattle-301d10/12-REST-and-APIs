articleView.initAdminPage = function() {
  var template = Handlebars.compile($('#author-template').text());
  Article.numWordsByAuthor().forEach(function(stat) {
    $('.author-stats').append(template(stat));
  });
  $('#blog-stats .articles').text(Article.allArticles.length);
  $('#blog-stats .words').text(Article.numWordsAll());
};
