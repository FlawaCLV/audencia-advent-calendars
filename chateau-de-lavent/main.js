$(document).ready(function() {
  console.log('Le document est prêt');

  $('.fenetre').on('click', function(e) {
    if ($(this).hasClass('jour-futur'))
      return false;

    $('#popup .popup-text').html($('#popup-' + $(e.target).attr('data-jour')).html());
    $('#popup').addClass('active');
  });

  $('.fenetre.jour-futur').on('click', function(e) {
    e.stopPropagation();
    return false;
  });

  $('#popup-close, #popup-backdrop').on('click', function() {
    $('#popup').removeClass('active');
  });

  $('.fenetre').each(function() {
    $(this).addClass(getCSSClass($(this).attr('data-jour')));
  });

});
