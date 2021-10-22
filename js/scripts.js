/*!
* Start Bootstrap - Agency v7.0.6 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 
var UIUX = document.getElementById("UIUX");
var Web = document.getElementById("Web");
var Motion = document.getElementById("Motion");
var JodyImage = document.getElementById("JodyTopImage");



$(window).on('load', function()
{
  $(".loader").delay(2000).fadeOut("slow");
  $("#overlayer").delay(2000).fadeOut("slow");

});

history.scrollRestoration = "manual";

$(window).on('beforeunload', function()
{
  $(window).scrollTop(0)

});

$(this).scrollTop(0);

$("#top-link").hide();

$(document).ready( function() {
    $("#top-link").hide(); //hide your div initially
    var topOfOthDiv = $("#Projects").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) 
        { //scrolled past the other div?
            $("#top-link").show(); //reached the desired point -- show div    
        }
        else
        {
            $("#top-link").hide();
            
        }
    });
});


$(window).scroll(function() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop < 100) {
            
            $("#down-arrow").fadeIn();
      }
      else {

          $("#down-arrow").fadeOut(); 
      }
});


$( window ).on('scroll', function(){

      var scrollTop = $(this).scrollTop();
      $( '.hscroll' ).css({
        transform: 'translateX('+  ( 1 * scrollTop ) +'px)',

      });

    });

$( window ).on('scroll', function(){

      var scrollTop = $(this).scrollTop();
      $( '.hsinsideroll' ).css({
        transform: 'translateX('+  ( -2 * scrollTop ) +'px)',

      });

    });

$( window ).on('scroll', function(){

      var scrollTop = $(this).scrollTop();
      $( '.rotate' ).css({
        transform: 'translateX('+  ( -2 * scrollTop ) +'px)',


      });

    });





window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

  

});


function hideTopImage(x) {
  switch(x) {
    case 0:
      UIUX.style.opacity = "0%";
      break;
    case 1:
      Web.style.opacity = "0%";
      break;
    case 2:
      Motion.style.opacity = "0%";
      break;
    default:
      UIUX.style.opacity = "0%";
    }
  
}

function showTopImage(x) {
  switch(x) {
    case 0:
      UIUX.style.opacity = "100%";
      break;
    case 1:
      Web.style.opacity = "100%";
      break;
    case 2:
      Motion.style.opacity = "100%";
      break;
    default:
      UIUX.style.opacity = "100%";
    }
}

// function hideTopMemberImage(x) {
//   switch(x) { 
//     case 0:
//       JodyImage.style.opacity = "0%";
//       break;
//     case 1:
//       Web.style.opacity = "0%";
//       break;
//     case 2:
//       Motion.style.opacity = "0%";
//       break;
//     case 3:
//       Motion.style.opacity = "0%";
//       break;
//     default:
//       UIUX.style.opacity = "0%";
//     }
  
// }

// function showTopMemberImage(x) {
//   switch(x) {
//     case 0:
//       JodyImage.style.opacity = "100%";
//       break;
//     case 1:
//       Web.style.opacity = "100%";
//       break;
//     case 2:
//       Motion.style.opacity = "100%";
//       break;
//     default:
//       UIUX.style.opacity = "100%";
//     }
// }


//move jody details to the right

$("#jody").hover(function(){
    //alert("hover");
    $("#JodyDetails").animate({marginLeft: "120px"}, 0.5 ,"linear");

});

$("#jody").mouseleave(function(){

    $("#JodyDetails").animate({marginLeft: "0px"}, 0.5 ,"linear");

});

$("#irone").hover(function(){
    //alert("hover");
    $("#IroneDetails").animate({marginLeft: "-120px"}, 0.5 ,"linear");

});

$("#irone").mouseleave(function(){

    $("#IroneDetails").animate({marginLeft: "0px"}, 0.5 ,"linear");

});

$("#claire").hover(function(){
    //alert("hover");
    $("#ClaireDetails").animate({marginLeft: "120px"}, 0.5 ,"linear");

});

$("#claire").mouseleave(function(){

    $("#ClaireDetails").animate({marginLeft: "0px"}, 0.5 ,"linear");

});

$("#reinhard").hover(function(){
    //alert("hover");
    $("#ReinhardDetails").animate({marginLeft: "-120px"}, 0.5 ,"linear");

});

$("#reinhard").mouseleave(function(){

    $("#ReinhardDetails").animate({marginLeft: "0px"}, 0.5 ,"linear");

});


    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector(".parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }
