$(document).ready(function() {
  $('.jour').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    console.log('clicked on ' + $(e.target).attr('id'));
  });
});
