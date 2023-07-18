
$("#partner").owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
        margin: 20,
      },
      600: {
        items: 2,
        margin: 20,
      },
      1000: {
        items: 3,
        margin: 50,
      },
    },
    navText: [
      '<img src="1.jpg" alt="Prev">',
      '<img src="2.jpg" alt="Next">',
    ], // Add the image tags for custom icons
  });