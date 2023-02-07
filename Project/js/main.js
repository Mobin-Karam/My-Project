// (function ($) {
//     "use strict";
//     $(document).ready(function () {
//         var primaryHeader = $('.primary-header'),
//             headerClone = primaryHeader.clone();
//         $('.header').after('<div class="sticky-header"></div>');
//         $('.sticky-header').html(headerClone);
//         var headerSelector = document.querySelector(".sticky-header");
//         var triggerPoint = $('.header').height();
//         var yOffset = 0;

//         $(window).on('scroll', function () {
//             yOffset = $(window).scrollTop();
//             if (yOffset >= triggerPoint) {
//                 $('.sticky-header').addClass('sticky-fixed-top');
//             } else {
//                 $('.sticky-header').removeClass('sticky-fixed-top');
//             }
//         });

//         if ($('.primary-header').length) {
//             $('.header .primary-header .burger-menu').on("click", function () {
//                 $(this).toggleClass('menu-open');
//                 $('.header .header-menu-wrap').slideToggle(300);
//             });

//             $('.sticky-header .primary-header .burger-menu').on("click", function () {
//                 $(this).toggleClass('menu-open');
//                 $('.sticky-header .header-menu-wrap').slideToggle(300);
//             });
//         }

//         $('.header-menu-wrap ul li:has(ul)').each(function () {
//             $(this).append('<span class="dropdown-plus"></span>');
//             $(this).addClass('dropdown_menu');
//         });

//         $('.header-menu-wrap .dropdown-plus').on("click", function () {
//             $(this).prev('ul').slideToggle(300);
//             $(this,).toggleClass('dropdown-open');
//             $('.header-menu-wrap ul li:has(ul)').toggleClass('dropdown-open');
//         });

//         $('.header-menu-wrap .dropdown_menu a').append('<span></span>');
//     });
// })(jQuery);

(function ($) {
    "use strict";
    $(document.ready(function () {

    }));
})(jQuery);