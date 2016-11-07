$(document).ready(function() {
  $('.jour').on('mouseenter', function(e) {
    e.preventDefault();
    e.stopPropagation();

    console.log('clicked on ' + $(e.target).attr('href'));
  });
});
