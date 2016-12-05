$(document).ready(function() {
  $('.jour').each(function() {
    $(this).addClass(getCSSClass($(this).attr('data-jour')));
  });

  $('.jour').click(function(e) {
    e.preventDefault();
    e.stopPropagation();

    if ($(this).hasClass('jour-futur'))
      return false;

      $.fancybox({
        maxWidth: 800,
    		maxHeight: 600,
    		fitToView: false,
        title: this.title,
    		width: '70%',
    		height: '70%',
    		autoSize: false,
    		closeClick: false,
    		openEffect: 'none',
    		closeEffect: 'none',
        href: this.href
  		});
  });
});
