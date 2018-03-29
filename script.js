$(document).ready(function () {

  $(window).on('scroll', function() {
    $('.target').each(function() {
        if($(window).scrollTop() >= $(this).offset().top - 100) {
            var id = $(this).attr('id');
            $('.navigation ul li a').removeClass('active');
            $('.navigation ul li a[href=#'+ id +']').addClass('active');
        }
    });
});
    

var today = new Date()
var year = today.getFullYear()
    $('footer p span').html(year);
    
});

function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 55);
  }
}

// Captures click events of all <a> elements with href starting with #
$(document).on('click', 'a[href^="#"]', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);