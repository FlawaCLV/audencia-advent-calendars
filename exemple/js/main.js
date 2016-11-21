$(document).ready(function() {
  $('.jour').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    console.log('clicked on ' + $(e.target).attr('id'));

    $('#popup').addClass('active');
  });

  $('#popup-close, #popup-backdrop').on('click', function() {
    $('#popup').removeClass('active');
  });

  $('.jour').each(function() {
    $(this).addClass(getCSSClass($(this).attr('data-jour')));
  });
});
