// ------------------------------------------------------------------------------------
// Testimonials - Section
// --------------------------------------------------------------------------------------

$("#testimonials").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
        stagePadding: 390,
      },
    },
    navText: [
      '<img src="assets/left-button.png" alt="Prev">',
      '<img src="assets/right-button.png" alt="Next">',
    ], // Add the image tags for custom icons
  });
  
  