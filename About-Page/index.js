//------------------------------------------------------------------------------------ 
// Carousel
// --------------------------------------------------------------------------------------

// Wait for the document to load
$(document).ready(function () {
    // Check the screen size on window resize
    $(window).resize(function () {
      checkScreenSize();
    });

    // Check the initial screen size
    checkScreenSize();

    // Function to check the screen size and initialize the carousel accordingly
    function checkScreenSize() {
      if (window.innerWidth >= 768) {
        // Initialize the carousel with sliding properties
        $("#carouselExampleIndicators").carousel({
          interval: 5000, // Slide every 5 seconds
          ride: true, // Enable sliding
        });
      } else {
        // Disable sliding for smaller screens
        $("#carouselExampleIndicators").carousel("pause");
      }
    }
  });