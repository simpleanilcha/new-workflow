// init Isotope
var $container = $('.projects').isotope('layout');

// filter items on button click
$('.filter-project').on( 'click', 'a', function(e) {
  e.preventDefault();
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: filterValue });

  $('.filter-project li').removeClass('active');
  $(this).closest('li').addClass('active');
});
