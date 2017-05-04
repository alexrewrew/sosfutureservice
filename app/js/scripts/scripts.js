/**
 * Created by alexrewrew on 15.02.17.
 */
$(document).ready(function () {



    //map
    $('.logo').click(function () {
        event.preventDefault();
        $('.map').addClass('small')
        $('.about').hide();
        $('.project').show()
    });

    $('.arrow-down').click(function () {
        event.preventDefault();
        $('.map').toggleClass('small')
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
    })

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


