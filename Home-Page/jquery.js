// ------------------------------------------------------------------------------------
// Blog - Section
// --------------------------------------------------------------------------------------

$("#inspirations, #solutions, #trends").owlCarousel({
  loop: false,
  margin: 3,
  nav: true,
  dots: false,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
      margin: 3,
    },
    600: {
      items: 2,
      margin: 30,
    },
    1000: {
      items: 3,
      margin: 50,
    },
  },
  navText: [
    '<img src="assets/left-button.png" alt="Prev">',
    '<img src="assets/right-button.png" alt="Next">',
  ], // Add the image tags for custom icons
});



// ------------------------------------------------------------------------------------
// Product - Section
// --------------------------------------------------------------------------------------

$("#product").owlCarousel({
  loop: false,
  margin: 3,
  nav: true,
  dots: false,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
      margin: 3,
    },
    600: {
      items: 2,
      margin: 3,
    },
    1000: {
      items: 4,
      margin: 5,
    },
  },
  navText: [
    '<img src="assets/product-left-arrow.png" alt="Prev">',
    '<img src="assets/product-right-arrow.png" alt="Next">',
  ], // Add the image tags for custom icons
});



// ------------------------------------------------------------------------------------
// Expert - Section
// --------------------------------------------------------------------------------------

$("#expert").owlCarousel({
  loop: false,
  margin: 3,
  nav: false,
  dots: false,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
      margin: 3,
    },
    600: {
      items: 2,
      margin: 3,
    },
    1000: {
      items: 3,
      margin: 3,
    },
  },
});

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

