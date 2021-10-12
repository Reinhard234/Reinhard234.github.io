/*!
* Start Bootstrap - Agency v7.0.6 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 


//document.getElementById("top-link").style.display = "none";
if (document.getElementById("test").className == "active") 
{
    console.log("yeah");
}
//document.getElementById("myDIV").classList.contains("mystyle");
$("#top-link").hide();

$(document).ready( function() {
    $("#top-link").hide(); //hide your div initially
    var topOfOthDiv = $("#Projects").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $("#top-link").show(); //reached the desired point -- show div
        }
        else{$("#top-link").hide();}
    });
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
