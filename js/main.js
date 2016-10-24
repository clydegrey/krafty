$(document).ready(function() {


    $('.body__wrapper').addClass('fadeIn');

    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });




    $(function() {

        $('.menuIcon').on('click', function() {
            $('.mobileWrapper').toggleClass('menuReveal');

        });


    });




    $('.carousel').flickity({
        cellAlign: 'center',
        prevNextButtons: false,
        initialIndex: 2,
        wrapAround: true,
        freeScroll: true,
        imagesLoaded: true,
        autoPlay: 1500

        // pauseAutoPlayOnHover: true
    });


    $(function() {
        $('#Grid').mixitup(
            //     {
            // transitionSpeed:550
            //         }
        );
    })


    $(".controls").click(function() {
        $('.mix__overlay').hide();
    });


    // $('header').fadeOut();

    // $("header").hide();

    // $(function () {
    //  $(window).scroll(function () {
    //            // set distance user needs to scroll before we fadeIn navbar
    //    if ($(this).scrollTop() > 1) {
    //      $('header').fadeIn();
    //    } else {
    //      // $('header').fadeOut();
    //    }
    //  });


    // });


    function returnLeftOrRight(targetDiv) {
        var $target = targetDiv;
        $target.mouseenter(function(e) {
            var cursorXPosition = ((e.pageX) * .8);
            var offset = $(this).offset();
            var leftEdge = offset.left;
            var directionX = "";

            if (cursorXPosition < leftEdge) {
                directionX = "left";

                $(this).attr("class", 'leftEnter');

            } else {

                directionX = "right";

                $(this).attr("class", "rightEnter");


                $(this).css('transform-origin', '100% 50% 0px');

            }
        });

        $target.mouseleave(function(e) {
            var cursorXPosition = ((e.pageX) * .8);
            var offset = $(this).offset();
            var leftEdge = offset.left;
            var direction = "";
            if (cursorXPosition < leftEdge) {
                directionX = "left";


                $(this).attr("class", "leaveLeft");

            } else {
                directionX = "right";

                $(this).attr("class", "leaveRight");
            }
        });
    }


    $(function() {
        // var navItem = $('nav a');
        var navItem1 = $('.item1');
        var navItem2 = $('.item2');
        var navItem3 = $('.item3');
        var navItem4 = $('.item4');
        var navItem5 = $('.item5');

        var direction1 = returnLeftOrRight(navItem1);
        var direction2 = returnLeftOrRight(navItem2);
        var direction3 = returnLeftOrRight(navItem3);
        var direction4 = returnLeftOrRight(navItem4);
        var direction5 = returnLeftOrRight(navItem5);

    });










    $(function() {

        $(".grid img").mouseenter(function(e) {
            var cursorXPosition = ((e.pageX) * .8);
            var offset = $(this).offset();
            var leftEdge = offset.left;
            var direction = "";

            if (cursorXPosition < leftEdge) {
                directionX = "left";
                // console.log("entering on the: "+directionX);

                $(this).next().attr("class", 'mix__overlay--swipeleft');

            } else {

                directionX = "right";
                // console.log("entering on the: "+directionX);
                $(this).next().attr("class", "mix__overlay--swiperight");

            }
        });

        $(".mix__overlay").mouseleave(function(e) {
            var cursorXPosition = ((e.pageX) * .8);
            var offset = $(this).offset();
            var leftEdge = offset.left;
            var direction = "";
            if (cursorXPosition < leftEdge) {
                directionX = "left";
                // console.log('removing left');

                $(this).attr("class", "mix__overlay--swipeOutLeft");

            } else {
                directionX = "right";
                // console.log('removing right');

                $(this).attr("class", "mix__overlay--swipeOutRight");
            }
        });
    });





    $('.parallax').jarallax({
        speed: .7,
    })


    var waypoint = new Waypoint({
        element: document.getElementById('circlesWaypoint'),
        handler: function() {

            $('.circles__box--counter1').animateNumber({

                number: 32,
                easing: 'easeInQuad'
            }, 2200);

            $('.circles__box--counter2').animateNumber({

                number: 432,
                easing: 'easeInQuad'
            }, 2000);

            $('.circles__box--counter3').animateNumber({
                number: 537,
                easing: 'easeInQuad'
            }, 1700);

            $('.circles__box--counter4').animateNumber({
                number: 2140,
                easing: 'easeInQuad'
            }, 2000);

            $('.circles__box--counter5').animateNumber({
                number: 6540,
                easing: 'easeInQuad'
            }, 2200);


        },

        offset: 350

    });



    // Start midnight
    $(document).ready(function() {

        $('header.fixed').midnight();
    });


    var $hello = $('.hello');
    var $lightBox = $('.light-box');

    window.sr = ScrollReveal({

        delay: 375

    });

    sr.reveal($('section'));





});


// $(function() {

//     $("img").mouseenter(function(e) {   
//         var cursorYPosition = ((e.pageY)-20);
//         var cursorXPosition = ((e.pageX)*.8);
//         var offset=$(this).offset();

//         var topEdge = offset.top;
//         var leftEdge = offset.left;
//         var direction = "";

//         if (cursorYPosition < topEdge) {
//      directionY = "top";

//      console.log('top offset:'+topEdge);
//      console.log('cursor position:'+cursorYPosition);

//         console.log("entering on the: "+directionY);
//         $(this).next().css("top","-500px").css("bottom:","500px").show();
//         $(this).next().animate({
//          top: "0px",
//          bottom:"0px"

//      }, 250, function() {
//        // Animation complete.
//      });

//         } else {

//         console.log('top offset:'+topEdge);
//      console.log('cursor position:'+cursorYPosition);

//         directionY = "bottom";
//         $(this).next().css("bottom","-500px").css("top","500px").show();
//         console.log("entering on the: "+directionY);
//          // $(this).next().css("bottom","-500px").show();
//         $(this).next().animate({
//          bottom: "0px",
//          top:"0px" 
//      }, 250, function() {
//        // Animation complete.
//      });
//         }
//     });

//     $(".mix__overlay").mouseleave(function(e) {   
//         var cursorYPosition = ((e.pageY)*.8);
//         var offset=$(this).offset();
//         var topEdge = offset.top;
//         var direction = "";

//          if (cursorYPosition < topEdge) {

//      directionY = "top";
//       console.log('removing top');
//       $(this).animate({
//        top: "-400px",
//        bottom:"400px"
//   }, 250, function() {
//     // Animation complete.
//   });

//         } else {

//         directionY = "bottom";
//         console.log('removing bottom');
//       // $(this).css('background','red');
//       $(this).animate({
//        bottom: "-400px", 
//        top: "400px"
//        },250, function() {
//        });
//         }
//     });
// });




// $(function() {

//     $("img").mouseenter(function(e) {   
//         var cursorXPosition = ((e.pageX)*.8);
//         var offset=$(this).offset();
//         var leftEdge = offset.left;
//         var direction = "";

//         if (cursorXPosition < leftEdge) {
//      directionX = "left";
//         console.log("entering on the: "+directionX);
//         $(this).next().css("left","-500px").css("right:","500px").show();
//         $(this).next().animate({
//          left: "0px",
//          right:"0px"

//      }, 250, function() {
//        // Animation complete.
//      });

//         } else {

//         directionX = "right";
//         $(this).next().css("right","-500px").css("left","500px").show();
//         console.log("entering on the: "+directionX);
//          // $(this).next().css("right","-500px").show();
//         $(this).next().animate({
//          right: "0px",
//          left:"0px" 
//      }, 250, function() {
//        // Animation complete.
//      });
//         }
//     });

//     $(".mix__overlay").mouseleave(function(e) {   
//         var cursorXPosition = ((e.pageX)*.8);
//         var offset=$(this).offset();
//         var leftEdge = offset.left;
//         var direction = "";
//          if (cursorXPosition < leftEdge) {   
//      directionX = "left";
//       console.log('removing left');
//       $(this).animate({
//        left: "-400px",
//        right:"400px"
//   }, 250, function() {
//     // Animation complete.
//   });
//         } else {
//         directionX = "right";
//         console.log('removing right');
//       // $(this).css('background','red');
//       $(this).animate({
//        right: "-400px", 
//        left: "400px"
//        },250, function() {
//        });
//         }
//     });
// });
