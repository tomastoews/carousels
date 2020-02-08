new Glider(document.querySelector('.testimonials-glider'), {
    slidesToShow: 1,
    draggable: true,
    dots: '.testimonials-glider-dots',
    arrows: {
        prev: '.testimonials-glider-prev',
        next: '.testimonials-glider-next'
    },
    responsive: [{
        breakpoint: 900,
        settings: {
            slidesToShow: 2
        }
    }]
});

new Glider(document.querySelector('.images-glider'), {
    slidesToShow: 1,
    draggable: true,
    dots: '.images-glider-dots',
    arrows: {
        prev: '.images-glider-prev',
        next: '.images-glider-next'
    }
});