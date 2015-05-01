$( document ).ready(function() {

    // fade image opacity on hover to .3, back to 1 when off hover
    $(".img_home").hover(

        function() { //onhover func
            $(this).animate({opacity: '.3'});
        },
        function() { //offhover func
            $(this).animate({opacity: '1'});
        }
    );

    $('#banner-fade').bjqs({
        'height' : 320,
        'width' : 620,
        'responsive' : true
    });
        

    ///////////
    /////////// Scroll Handler credit to James Pederson
    ///////////
    // scroll handler
    var scrollToAnchor = function( id ) {

        // grab the element to scroll to based on the name
        var elem = $("a[name='"+ id +"']");

        // if that didn't work, look for an element with our ID
        if ( typeof( elem.offset() ) === "undefined" ) {
            elem = $("#"+id);
        }

        // if the destination element exists
        if ( typeof( elem.offset() ) !== "undefined" ) {
            // do the scroll
            $('html, body').animate({scrollTop: elem.offset().top}, 700);
        }
    };

    // bind to click event
    $("a").click(function( event ) {

        // only do this if it's an anchor link
        if ( $(this).attr("href").match("#") ) {

            // cancel default event propagation
            event.preventDefault();

            // scroll to the location
            var href = $(this).attr('href').replace('#', '')
            scrollToAnchor( href );

        }

        if ( $(this).attr("href").match("m4m_build.zip") ) {
            event.preventDefault();
            window.location.href = 'm4m_build.zip';
        }
    });
});
