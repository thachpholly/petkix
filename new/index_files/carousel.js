$(document).ready(function() {
  if ( $('.carousel-product-main').length ) {

    $('.carousel-product-main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      asNavFor: '.carousel-thumbnails',
      dots: false,
      prevArrow:"<button type='button' class='slick-prev pull-left'><svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
          "<circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#C13A2D\"/>\n" +
          "<path d=\"M23.625 13.25L16.1836 20.75L23.625 28.25L21.75 30.125L12.375 20.75L21.75 11.375L23.625 13.25Z\" fill=\"white\"/>\n" +
          "</svg>\n</button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
          "<circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#C13A2D\"/>\n" +
          "<path d=\"M16.375 13.25L18.25 11.375L27.625 20.75L18.25 30.125L16.375 28.25L23.8164 20.75L16.375 13.25Z\" fill=\"white\"/>\n" +
          "</svg>\n</button>",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true,
          }
        }
        /* You can unslick at a given breakpoint now by adding: */
        /* settings: "unslick" */
        /* instead of a settings object */
      ]
    });
    $('.carousel-thumbnails').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.carousel-product-main',
      dots: false,
      arrows: false,
      focusOnSelect: true
    });

  }
});

