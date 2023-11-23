
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
    var myClients = new Swiper(".myClients", {
        initialSlide: 1,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 30,
        setWrapperSize: true,
        roundLengths: true,
        autoHeight: false,
        autoplay: false,
        loop: false,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows : false,
        },
        breakpoints: {
            0:{
                slidesPerView:1,
            },
            
            768: {
                slidesPerView: 3,
            },
          
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
                }
    });


    //tab information
    var firstTabEl = document.querySelector('#myTab li:last-child a')
    var firstTab = new bootstrap.Tab(firstTabEl)

    firstTab.show()