$(function() {
  SimpleJekyllSearch.init({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    dataSource: '/search.json',
    searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
    noResultsText: 'No results found',
    limit: 5,
    fuzzy: false,
  });

  $('#search-input').on('focus', function() {
    $(this).addClass('selected');
    $(this).parent().addClass('selected');
    $('.overlay').addClass('enabled');
  });
  $('#search-input').on('blur', function() {
    $(this).removeClass('selected');
    $(this).parent().removeClass('selected');
    $('.overlay').removeClass('enabled');
  });

});
