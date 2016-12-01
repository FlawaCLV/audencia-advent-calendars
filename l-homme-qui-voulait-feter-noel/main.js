$(document).ready(function() {
  $('.jour').each(function() {
    $(this).addClass(getCSSClass($(this).attr('data-jour')));
  });

  $('.jour').on('click', function(e) {
    e.stopPropagation();

    if ($(this).hasClass('jour-futur'))
        return false;
  });
});
