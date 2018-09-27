/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';
import video from '../assets/images/video.mp4';
// ================================
// START YOUR APP HERE
// ================================
import $ from 'jquery';


$(document).ready(function(){

  $('html').bind('wheel', function(e){
    console.log(e);
    var delta = (e.originalEvent.wheelDelta || -e.originalEvent.detail);
    if(e.originalEvent.deltaY < -200) {
      console.log("time to scroll vertical")
    }
    else {
      console.log("scroll for depth");

       if (delta < 121) {
         console.log('scrolling up !');

                // if (delta < 121 && x==="true") {
         $("#h-header").addClass("scrolledHeaderBackground");
            $("#h-header-title").addClass("scrolledAdventure");
            $("#h-header-background").addClass("scrolledMtnBackground");
           $("#h-header-foreground").addClass("scrolledFast");
            $("#h-header-center").addClass("scrolledSlow");
            $("#h-header-title-wrap").addClass("scrolledSmall");
       } else if (delta > 121) {
           console.log(window.pageYOffset);
           console.log(delta);
           console.log('scrolling down !');

          $("#h-header").removeClass("scrolledHeaderBackground");
          $("#h-header-title").removeClass("scrolledAdventure");
          $("#h-header-background").removeClass("scrolledMtnBackground");
          $("#h-header-foreground").removeClass("scrolledFast");
          $("#h-header-center").removeClass("scrolledSlow");
          $("#h-header-title-wrap").removeClass("scrolledSmall");
       } else if (delta > 150) {
         console.log('Large');
       }

   });

   // $('html').bind('mousewheel', function(e){
   //         if(e.originalEvent.wheelDelta / 120 > 3) {
   //             console.log('scrolling up !');
   //         }
   //         else{
   //             console.log('scrolling down !');
   //         }
   //     });




   // $(window).scroll(function(){
   //   if ($(this).scrollTop() > 200) {
   //     $("body").addClass("enableScroll");
   //   }
   // });

 }); /*Document Ready Close*/


//
//
//  $(window).scroll(function(){
//   if ($(this).scrollTop() > 2700) {
//     $(".insideBanner").addClass("animated bounce");
//   }
// });
//
// $(window).scroll(function(){
//  if ($(this).scrollTop() < 2700) {
//    $(".insideBanner").removeClass("animated bounce");
//  }
// });


// }); /*Document Ready Close*/
