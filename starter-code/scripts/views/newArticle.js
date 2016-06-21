var newArticle = {};

newArticle.initNewArticlePage = function() {
  $('.tab-content').show();
  $('#export-field').hide();
  $('#article-json').on('focus', function(){
    $(this).select();
  });
  $('#new-form').on('change', newArticle.create);
};

newArticle.create = function() {
  $('#article-preview').empty();
  var formArticle = new Article({
    title: $('#article-title').val(),
    author: $('#article-author').val(),
    authorUrl: $('#article-author-url').val(),
    category: $('#article-category').val(),
    body: $('#article-body').val(),
    publishedOn: $('#article-published:checked').length ? new Date() : null
  });
  $('#article-preview').append(formArticle.toHtml('#article-template'));
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
  $('#export-field').show();
  $('#article-json').val(JSON.stringify(formArticle) + ',');
};

newArticle.initNewArticlePage();
