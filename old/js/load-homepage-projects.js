/*
 * load-homepage-projects.js
 *      Dynamically load main projects on homepage.
 */
'use strict';

$.getJSON("/projects/project-info.json", json => {    
    /*------------------
		Load Projects
	--------------------*/
    json.forEach(proj => {
        let htmlInject;
        if(proj.first_item) {
            htmlInject = `				
            <div class="first-item col-md-6 col-lg-12 mix ${splitCategories(proj.categories)} p-lg-0">
                <a href="${proj.project_uri}" class="portfolio-item-big portfolio-item-no-popup set-bg " data-setbg="${proj.frontpage_img_uri}">
                    <div class="pi-inner">
                        <h2>+ See Project</h2>
                    </div>			
                </a>
                <div class="portfolio-meta">
                    <h2>${proj.name}</h2>
                    <p>${convertCategories(proj.categories)}</p>
                </div>
            </div>`
        } 
        else if(proj.second_item) {
            htmlInject = `
            <div class="second-item mix col-md-6 ${splitCategories(proj.categories)}">
                <a href="${proj.project_uri}" class="portfolio-item-big portfolio-item-no-popup set-bg" data-setbg="${proj.frontpage_img_uri}">
                    <div class="pi-inner">
                        <h2>+ See Project</h2>
                    </div>						
                </a>
                <div class="portfolio-meta">
                    <h2>${proj.name}</h2>
                    <p>${convertCategories(proj.categories)}</p>
                </div>
            </div>`
        } else {
            htmlInject = `
            <div class="mix col-md-6 col-lg-3 ${splitCategories(proj.categories)}">
                <a href="${proj.project_uri}" class="portfolio-item-no-popup pi-style2 set-bg" data-setbg="${proj.frontpage_img_uri}">
                    <div class="pi-inner">
                        <h2>+ See Project</h2>
                    </div>						
                </a>
                <div class="portfolio-meta">
                    <h2>${proj.name}</h2>
                    <p>${convertCategories(proj.categories)}</p>
                </div>
            </div>`
        }

        $('#portfolio-area').append(htmlInject);

    });

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
});

const splitCategories = categories => categories.join(" ");

const convertCategories = categories => {
    return categories.map(cat => convertCategory(cat)).join(", ");
}

const convertCategory = category => {
    switch(category) {
        case "social-media":
            return "Social Media";
        case "writing":
            return "Writing";
        case "content-creation":
            return "Content Creation";
        case "misc":
            return "Misc.";
        default:
            return "UNKNOWN";
    }
}