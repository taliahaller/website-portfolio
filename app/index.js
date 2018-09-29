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

var iScrollPos = 0;

$("#h").scroll(function() {
  var iCurScrollPos = $(this).scrollTop();
  iScrollPos = iCurScrollPos;
  var windowHeight = $("#h").height();
  var scrollPercent = iCurScrollPos / (3500 - windowHeight);
  console.log(iScrollPos + "iScrollPos");


    $("#h-header").css("opacity" , (1-(scrollPercent*1.54)));
    $("#h-header-foreground-wrap").css("transform" , "translateX(" + (scrollPercent*900) + "px)    scale(" + (1+(1*scrollPercent)) + ")");
    $("#h-header-center-wrap").css("transform", "translateX(-" + (scrollPercent*700) + "px) scale(" + (1+(1*scrollPercent)) + ")");
    $("#h-header-background-wrap").css("transform", "translateX(" + (20 * scrollPercent) + "px) scale(" + (1+(.33*scrollPercent)) + ")");
    $("#h-header-center-wrap").css("opacity" , (1-(scrollPercent*1.54)));
    $("#h-header-foreground-wrap").css("opacity" , (1-(scrollPercent*2)));
    console.log((1-scrollPercent));
    if (scrollPercent >= 1) {
      $("#h-header").css("opacity", 0);
    }
  });

$(window).scroll(function() {
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos === 0) {
      $("#h-header").css("opacity", 1);
    } else {
      $("#h-header").css("opacity", 0);
      $(".nav-color-dark").addClass(".nav-color-light");
      $(".nav").removeClass(".nav-color-dark");
    }
    console.log(iCurScrollPos + "iCurScrollPos");


      if (iCurScrollPos > 10) {
        $(".navBar").addClass("scrolled");
        $(".bar").addClass("rectangle animated fadeInDown");
      } else {
        $(".navBar").removeClass("scrolled");
        $(".bar").removeClass("rectangle animated fadeInDown");
      }

      // if ($("#menu").is('hidden')) {
      //   $(".navBar").removeClass("scrolled");
      //   $(".bar").removeClass("rectangle animated fadeInDown");
      // } else if (iCurScrollPos > 10) {
      //   $(".navBar").addClass("scrolled");
      //   $(".bar").addClass("rectangle animated fadeInDown");
      // }

  });


  $("#nav-burger-line-container").click(function() {
    $("#nav-toggle").toggleClass("active");
    $("#menu").fadeToggle();
    $("#menu-bg-tilt").toggleClass("slideOutUp");
    $(".menu-col").toggleClass("fadeOutDown");
  });

// if (!$('#menu').is('hidden')) {
//   $("#nav-burger-line-container").click(function() {
//     $("#menu").fadeUpToggle();
//   });

// if (!$('#menu').is('visible')) {
//   $("#nav-burger").click(function() {
//     $("#menu").removeClass("bounceInDown");
//     $("#menu").addClass("bounceOutUp");
//     $("#menu").hide();
//   });
// }



}); /*Document Ready Close*/














// $('html').bind('wheel', function(e){
//   console.log(e);
//   var delta = (e.originalEvent.wheelDelta || -e.originalEvent.detail);
//   if(e.originalEvent.deltaY < -200) {
//     console.log("time to scroll vertical")
//   }
//   else {
//     console.log("scroll for depth");
//
//     if (delta < 121) {
//       console.log('scrolling up !');
//
//       // if (delta < 121 && x==="true") {
//       $("#h-header").addClass("scrolledHeaderBackground");
//       $("#h-header-title").addClass("scrolledAdventure");
//       $("#h-header-background").addClass("scrolledMtnBackground");
//       $("#h-header-foreground").addClass("scrolledFast");
//       $("#h-header-center").addClass("scrolledSlow");
//       $("#h-header-title-wrap").addClass("scrolledSmall");
//     } else if (delta > 121) {
//       console.log(window.pageYOffset);
//       console.log(delta);
//       console.log('scrolling down !');
//
//       $("#h-header").removeClass("scrolledHeaderBackground");
//       $("#h-header-title").removeClass("scrolledAdventure");
//       $("#h-header-background").removeClass("scrolledMtnBackground");
//       $("#h-header-foreground").removeClass("scrolledFast");
//       $("#h-header-center").removeClass("scrolledSlow");
//       $("#h-header-title-wrap").removeClass("scrolledSmall");
//     } else if (delta > 150) {
//       console.log('Large');
//     }
//   };
// });
