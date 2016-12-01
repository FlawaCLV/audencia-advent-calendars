$(document).ready(function() {
  $('.jour').each(function() {
    $(this).addClass(getCSSClass($(this).attr('data-jour')));
  });

  $('.jour').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    if ($(this).hasClass('jour-futur'))
      return false;

    $('#popup').addClass('active');
  });

  $('#popup-close, #popup-backdrop').on('click', function() {
    $('#popup').removeClass('active');
  });
});
