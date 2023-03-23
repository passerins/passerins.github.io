/*
 * load-homepage-projects.js
 *      Dynamically load main projects on homepage.
 */
'use strict';  


// Create dynamic post categories
$.getJSON("/posts.json", json => {    
    const categories = new Map();
    console.log("Post json: ", json);
    json.forEach(post => {
        post.categories.forEach(category => categories.set(cleanCategory(category), category))
    })

    categories.forEach((name, element) => {
        $('#potfolio-controls').append(`<li class="control" data-filter=".${element}">${name}</li>`);
    })
});


const cleanCategory = category => category.replace(" ", "-").replace(".","").toLowerCase();


if($('.portfolios-area').length > 0 ) {
    var containerEl = document.querySelector('.portfolios-area');
    var mixer = mixitup(containerEl);
}

/*------------------
    Background set
--------------------*/
$('.set-bg').each(function() {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
});

/*----------------------
    Portfolio layout
------------------------*/
var port_fi =  $('.portfolios-area .first-item'),
port_si =  $('.portfolios-area .second-item'),
port_intro_h =  $('.portfolio-intro').innerHeight();

if ($(window).width() > 991) {
    port_fi.appendTo('.portfolio-intro');
    port_si.find('.portfolio-item').height(port_intro_h + 601);
    port_si.find('.portfolio-item-big').height(port_intro_h + 601);
}

$('.portfolio-item.pi-style2').each(function() {
    var pi_width = $(this).width();
    $(this).height(pi_width + 50);
});

$('.portfolio-item-no-popup.pi-style2').each(function() {
    var pi_width = $(this).width();
    $(this).height(pi_width + 50);
});

/*------------------
    Popup
--------------------*/
$('.portfolio-item').magnificPopup({
    type: 'image',
    mainClass: 'img-popup-warp',
    removalDelay: 400,
});
/*------------------
    Accordions
--------------------*/
$('.panel-link').on('click', function (e) {
    $('.panel-link').parent('.panel-header').removeClass('active');
    var $this = $(this).parent('.panel-header');
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
    e.preventDefault();
});

