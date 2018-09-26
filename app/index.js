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
    var delta = (e.originalEvent.wheelDelta || -e.originalEvent.detail);

       if (delta < 0) {
           $("#h-header-foreground").addClass("scrolledFast");
            $("#h-header-center").addClass("scrolledSlow");
            $("#h-header-title-wrap").addClass("scrolledSmall");
       } else if (delta > 0) {
           console.log('You scrolled up');
            $("#h-header-foreground").removeClass("scrolledFast");
            $("#h-header-center").removeClass("scrolledSlow");
            $("#h-header-title-wrap").removeClass("scrolledSmall");
       }
   });
 }); /*Document Ready Close*/



//   $(window).scroll(function(){
//    if ($(this).scrollTop() > 10) {
//      $(".navBar").addClass("scrolled");
//    }
//  });
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
