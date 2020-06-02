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
                    <img class="d-block w-100" src="${img}">
                </div>`;
                carouselImages.push(carouselImage);
        }
        var projectCarouselEl = document.getElementById("projectCarousel");
        var carouselInnerEl = projectCarouselEl.getElementsByClassName("carousel-inner")[0];
        
        carouselInnerEl.innerHTML = carouselImages.join("\n");
        carouselInnerEl.firstElementChild.className += " active";
        $(projectCarouselEl).carousel({slide : true, ride : true });
    }, 100)
}