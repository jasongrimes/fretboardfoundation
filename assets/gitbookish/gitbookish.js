
$(function() {
  $('.book').on('click', '.btn-close-sidebar', function() {
    $('.book').removeClass('with-summary');
  });
  $('.book').on('click', '.btn-open-sidebar', function() {
    $('.book').addClass('with-summary');
  });
  $('.book').on('click', '.btn-toggle-sidebar', function() {
    $('.book').toggleClass('with-summary');
  });
});