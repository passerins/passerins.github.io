'use strict';

const analyticsObject = `<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-153116058-2"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-153116058-2');
</script>`;

$(document).ready(function(){
    $('head').append(analyticsObject);
    $('#footer').load("/template/footer.html");
    $('#header').load("/template/header.html");
    $('#tagline').load("/template/tagline.html");
    $('#contact-cta').load("/template/contact-cta.html");
});