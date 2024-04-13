const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
  
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
      },
  
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  }
    
  
  );
  