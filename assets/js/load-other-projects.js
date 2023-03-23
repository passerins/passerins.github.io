/*
 * load-other-projects.js
 *      Dynamically load other projects on project pages.
 */
'use strict';
const NUM_PROJECTS = 4;

$(document).ready(function() {
    $.getJSON("/posts.json", json => {    

        console.log(json)

        // Shuffle the projects and filter out the current page.
        const shuffled = json.sort(() => 0.5 - Math.random())
                                .filter(proj => proj.href !== location.pathname);

                                console.log(shuffled)
        const selected = shuffled.slice(0, NUM_PROJECTS);
    
        selected.forEach(proj => {
            const htmlObj = `
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="other-project-container">
                    <a href="${proj.href}" class="pi-style2 other-project-thumb">
                        <img src="${proj.thumbnail}" alt="${proj.title}">
                    </a>
                </div>
                ${proj.title} - ${proj.categories}
            </div>`;
            $('#other-project-list').append(htmlObj);
        });
    });
   
});

