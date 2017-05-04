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


    //
    var inputs = document.querySelectorAll( '.inputfile' );
    Array.prototype.forEach.call( inputs, function( input )
    {
        var label	 = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener( 'change', function( e )
        {
            var fileName = '';
            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else
                fileName = e.target.value.split( '\\' ).pop();

            if( fileName )
                label.querySelector( 'span' ).innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
    });

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


