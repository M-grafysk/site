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


  
// ------------------------------------------------------------------------------------ 
// Form1 - Section
// --------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const inputContainers = document.querySelectorAll(
    ".form1-inputcontainer"
    );
    inputContainers.forEach(function (container) {
      const input = container.querySelector("input");
      const label = container.querySelector("label");
      
      input.addEventListener("focus", function () {
        label.style.top = "-2px";
        label.style.left = "10px";
        label.style.fontSize = "12px";
    label.style.color = "#888";
    });

    input.addEventListener("blur", function () {
    if (input.value === "") {
      label.style.top = "50%";
      label.style.left = "15px";
      label.style.fontSize = "";
      label.style.color = "";
    }
  });
  
  if (input.value !== "") {
    label.style.top = "-20px";
    label.style.left = "10px";
    label.style.fontSize = "12px";
    label.style.color = "#888";
  }
});
});


// ------------------------------------------------------------------------------------ 
// Blog - Section
// --------------------------------------------------------------------------------------

// Get the carousel element
var carousel = document.getElementById("blog-slider");
      
// Get the category links
var inspirationsLink = document.getElementById("inspirations-link");
var solutionsLink = document.getElementById("solutions-link");
var trendsLink = document.getElementById("trends-link");

// Add click event listeners to the category links
inspirationsLink.addEventListener("click", function () {
  // Show the first slide
  carousel.querySelector(".carousel-item:nth-child(1)").classList.add("active");
  carousel.querySelector(".carousel-item:nth-child(2)").classList.remove("active");
  carousel.querySelector(".carousel-item:nth-child(3)").classList.remove("active");
});

solutionsLink.addEventListener("click", function () {
  // Show the second slide
  carousel.querySelector(".carousel-item:nth-child(1)").classList.remove("active");
  carousel.querySelector(".carousel-item:nth-child(2)").classList.add("active");
  carousel.querySelector(".carousel-item:nth-child(3)").classList.remove("active");
});

trendsLink.addEventListener("click", function () {
  // Show the third slide
  carousel.querySelector(".carousel-item:nth-child(1)").classList.remove("active");
  carousel.querySelector(".carousel-item:nth-child(2)").classList.remove("active");
  carousel.querySelector(".carousel-item:nth-child(3)").classList.add("active");
});

// ------------------------------------------------------------------------------------ 
// Assistance - Section
// --------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const inputContainers = document.querySelectorAll(
    ".assistance-inputcontainer"
    );
    inputContainers.forEach(function (container) {
      const input = container.querySelector("input");
      const label = container.querySelector("label");
      
      input.addEventListener("focus", function () {
        label.style.top = "-2px";
        label.style.left = "10px";
        label.style.fontSize = "12px";
    label.style.color = "#888";
    });

    input.addEventListener("blur", function () {
    if (input.value === "") {
      label.style.top = "50%";
      label.style.left = "15px";
      label.style.fontSize = "";
      label.style.color = "";
    }
  });
  
  if (input.value !== "") {
    label.style.top = "-20px";
    label.style.left = "10px";
    label.style.fontSize = "12px";
    label.style.color = "#888";
  }
});
});

// ------------------------------------------------------------------------------------ 
// Expert - Section
// --------------------------------------------------------------------------------------

const expertArticles = document.querySelectorAll(".expertarticle");

expertArticles.forEach((expertArticle) => {
  expertArticle.addEventListener("mouseover", () => {
    expertArticle.classList.add("active");
  });

  expertArticle.addEventListener("mouseout", () => {
    expertArticle.classList.remove("active");
  });
});

  // JavaScript code for image swipe effect
  $(document).ready(function () {
      $(".container").on("touchstart", function (event) {
          var xClick = event.originalEvent.touches[0].pageX;
          $(this).one("touchmove", function (event) {
              var xMove = event.originalEvent.touches[0].pageX;
              if (Math.floor(xClick - xMove) > 5) {
                  $(this).carousel("next");
              } else if (Math.floor(xClick - xMove) < -5) {
                  $(this).carousel("prev");
              }
          });
          $(".container").on("touchend", function () {
              $(this).off("touchmove");
          });
      });
  });
