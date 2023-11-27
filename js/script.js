
    //slider
    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
        // interval: 2000,
        autoplay: {
            delay: 2000,
        },
        wrap: false
    })


    //swiper slider
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    //tab information
    var firstTabEl = document.querySelector('#myTab li:last-child a')
    var firstTab = new bootstrap.Tab(firstTabEl)
    firstTab.show()

   