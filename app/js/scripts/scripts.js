/**
 * Created by alexrewrew on 15.02.17.
 */
$(document).ready(function () {



    //map
    $('.logo').click(function () {
        event.preventDefault();
        $('#map').addClass('small')
        $('.about').hide();
        $('.project').show()
    });

    $('.arrow-down').click(function () {
        event.preventDefault();
        $('#map').toggleClass('small')
        $(this).toggleClass('arrow-rotate')
    });
    
    //smooth
    $(".smooth").click(function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: (top - 100)}, 1500);
    });

    //
    $('#nav-icon4').click(function () {
        $(this).toggleClass('open');
        $('.nav-panel').slideToggle();
    });

    //file upload
    $('#add').click(function () {
        $('.file').append('<div class="file-upload"><label><input type="file" name="file"><span><i class="fa fa-camera"></i>Додати фото</span></label></div>');
    });


    //link-organization
    $('.link-organization').click(function(){
        event.preventDefault();
        $('.input-organization').toggleClass('visible');
        // $('.input-organization').slideToggle(1000);
    });

    //map
    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400), // New York

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.bus","elementType":"labels.icon","stylers":[{"saturation":"-16"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#04b7ff"},{"visibility":"on"}]}]
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Snazzy!'
        });
    }





    //slider
    var slider = $(".slider").lightSlider({
        gallery:true,
        item:1,
        vertical:true,

        verticalHeight:429,
        vThumbWidth:165,

        thumbItem:4,
        thumbMargin:20,
        slideMargin:0,
        onBeforeSlide: function (el) {
            $('#current').text(el.getCurrentSlideCount());
        }
    });

    $('#total').text(slider.getTotalSlideCount());


    //responsive scripts
    if (window.matchMedia('(max-width: 767px)').matches) {
        
    }
})


