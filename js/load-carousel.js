/*
* load-carousel.js
*      Dynamically load a carousel on a project page with supplied images.
*/
'use strict';
const loadCarousel = images => {
    $('#carousel-container').load("/template/carousel.html");
    setTimeout(() => {
        const carouselImages = [];
        for(let img of images) {
            let carouselImage;
            if($.type(img) === "string"){
                carouselImage = `
                    <div class="carousel-item text-center">
                    <a class="project-item" href="${img}">
                        <img class="" src="${img}">
                    </a>
                    </div>
                `;
            } else {
                carouselImage = `
                    <div class="carousel-item text-center">
                    <a class="project-item" href="${img.link}">
                        <img class="" src="${img.preview}">
                    </a>
                    </div>
                `;
            }
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