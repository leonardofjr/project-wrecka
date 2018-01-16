$(document).ready(function () {
    // init controller
    var controller = new ScrollMagic.Controller();
    // create a scene
    var scene = new ScrollMagic.Scene()
        .triggerElement('#boxes')
        .addIndicators({
            name: 'bounce in',
            colorTrigger: 'white',
            colorStart: '#75C695',
        })
        .reverse(false)
        .triggerHook('Center')
        .duration('25%')
        .on("start", function(event) {
            $('h2').removeClass('invisible');
            $('h2').addClass('animated bounceInLeft');
        })
        .on("end", function (event) {
            $('.box-1').removeClass('invisible');
            $('.box-1').addClass('animated bounceInLeft');
            $('.box-2').removeClass('invisible');
            $('.box-2').addClass('animated bounceInUp');
            $('.box-3').removeClass('invisible');
            $('.box-3').addClass('animated bounceInRight');
        })
        .addTo(controller)


    // init controller
    var anchorLinkScrollingController = new ScrollMagic.Controller();

    // build tween

    // build scene
    var anchorLinkScrollingScene = new ScrollMagic.Scene({ triggerElement: "nav li:nth-child(2)", duration: 20, triggerHook: "onLeave" })
        .addIndicators() // add indicators (requires plugin)
        .addTo(anchorLinkScrollingController);

    // change behaviour of controller to animate scroll instead of jump
    anchorLinkScrollingController.scrollTo(function (newpos, offset) {
        TweenMax.to(window, 0.5, { scrollTo: { y: newpos + offset } });
    });

    //  bind scroll to anchor links
    $(document).on("click", "a[href^='#']", function (e) {
        var id = $(this).attr("href");
        if ($(id).length > 0) {
            e.preventDefault();

            // trigger scroll
            anchorLinkScrollingController.scrollTo(id, - 100);

            // if supported by the browser we can even update the URL.
            if (window.history && window.history.pushState) {
                history.pushState("", document.title, id);
            }
        }
    });


});