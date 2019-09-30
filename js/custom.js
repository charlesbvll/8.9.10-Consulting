$(document).ready(function () {
    /***************** Navbar-Collapse ******************/

    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    /***************** Page Scroll ******************/

    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    /***************** Scroll Spy ******************/

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })


function initMap() {
  var myLatLng = {lat: 48.35, lng: -1.15};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP, // Set the type of Map
    scrollwheel: false
  });
  var aLatLng = {lat: 48.024214, lng: -4.543098};
  var pLatLng = {lat: 48.8534100, lng: 2.3488000};
  var marker = new google.maps.Marker({
    position: pLatLng,
    map: map,
    title: 'Paris'
  });
    var marker2 = new google.maps.Marker({
    position: aLatLng,
    map: map,
    title: 'Audierne'
  });
}
google.maps.event.addDomListener(window, 'load', initMap);
    /***************** Wow.js ******************/

    new WOW().init();

    /***************** Preloader ******************/
    var preloader = $('.preloader');
    $(window).load(function () {
        preloader.remove();
    });
    
})