/*
* load-carousel.js
*      Dynamically load a carousel on a project page with supplied images.
*/
'use strict';
const loadCarousel = images => {
    $('#carousel-container').load("/template/carousel.html");
    setTimeout(() => {
        const carouselImages = [];
        for(var img of images) {
            var carouselImage = `
                <div class="carousel-item">
                <a class="project-item" href="${img}">
                    <img class="portfolio-item pi-style2" src="${img}">
                </a>
                </div>
            `;
                carouselImages.push(carouselImage);
        }
        var projectCarouselEl = document.getElementById("projectCarousel");
        var carouselInnerEl = projectCarouselEl.getElementsByClassName("carousel-inner")[0];
        
        carouselInnerEl.innerHTML = carouselImages.join("\n");
        carouselInnerEl.firstElementChild.className += " active";
        $(projectCarouselEl).carousel({slide : true, ride : true });

        $('.project-item').magnificPopup({
            type: 'image',
            mainClass: 'img-popup-warp',
            removalDelay: 400,
        });
    }, 100)
}