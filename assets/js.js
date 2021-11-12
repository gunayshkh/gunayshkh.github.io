"use strict";

$(window).on('load', function() {
    // code

    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 0,
        video: true,
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    })

    $('#hamburgerMenu').on('click', function(){
        
        if ($(this).hasClass('is-active')) {
            localStorage.setItem('sidebar', 'opened');
        } else {
            localStorage.setItem('sidebar', 'closed');
        }

        $(this).toggleClass('is-active');
        $('.sidebar').toggleClass('show');
        $('.left-container').toggleClass('sidebar-open');

        
    });

});



// $('.menu-toggle').on('mouseover', function() {
//     $('.sidebar').toggleClass('show');
// });

// $('.sidebar').on('mouseleave', function() {
//     $('.sidebar').removeClass('show');
// });





let items = document.querySelectorAll(".product-item");

let index = 1;
items.forEach((item) => {
    item.addEventListener('click', () => {


        let text = item.children[1].children[0].textContent;
        let imgsrc = item.querySelector(".img-inner img").getAttribute('src')

        sessionStorage.setItem('text', text);
        sessionStorage.setItem('imgsrc', imgsrc)
        window.location.href = 'product.html'
    })
});

let imgsr = sessionStorage.getItem('imgsrc');
let text1 = sessionStorage.getItem('text');

let prImage = document.querySelector("#pr-image")
if (prImage != null) {
    prImage.innerHTML = prImage;
}
let title = document.querySelector('#productTitle');
if (title != null) {
    title.innerHTML = text1;
}