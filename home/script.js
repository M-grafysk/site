//------------------------------------------------------------------------------------
// Carousel
// --------------------------------------------------------------------------------------

 // Wait for the document to load
 $(document).ready(function () {
  // Check the screen size on window load and resize
  $(window).on("load resize", function () {
    checkScreenSize();
  });

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
      $("#carouselExampleIndicators").carousel("dispose");
    }
  }
});


// ------------------------------------------------------------------------------------
// Form1 - Section
// --------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const inputContainers = document.querySelectorAll(".form1-inputcontainer");
  inputContainers.forEach(function (container) {
    const input = container.querySelector("input");
    const label = container.querySelector("label");

    input.addEventListener("focus", function () {
      label.style.top = "0px";
      label.style.left = "10px";
      label.style.fontSize = "12px";
      label.style.color = "#000";
      label.style.backgroundColor = "#fff";
      label.style.paddingLeft = "5px";
      label.style.paddingRight = "5px";
    });

    input.addEventListener("blur", function () {
      if (input.value === "") {
        label.style.top = "50%";
        label.style.left = "10px";
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
window.addEventListener("DOMContentLoaded", function () {
  // Get the links
  const inspirationsLink = document.getElementById("inspirations-btn");
  const solutionsLink = document.getElementById("solutions-btn");
  const trendsLink = document.getElementById("trends-btn");

  // Get the sections
  const inspirationsSection = document.getElementById("inspirations");
  const solutionsSection = document.getElementById("solutions");
  const trendsSection = document.getElementById("trends");

  // Hide solutions and trends sections initially
  solutionsSection.style.display = "none";
  trendsSection.style.display = "none";

  // Click event handler for solutions link
  solutionsLink.addEventListener("click", function () {
    inspirationsSection.style.display = "none";
    solutionsSection.style.display = "block";
    trendsSection.style.display = "none";
  });

  // Click event handler for trends link
  trendsLink.addEventListener("click", function () {
    inspirationsSection.style.display = "none";
    solutionsSection.style.display = "none";
    trendsSection.style.display = "block";
  });

  // Click event handler for inspirations link
  inspirationsLink.addEventListener("click", function () {
    inspirationsSection.style.display = "block";
    solutionsSection.style.display = "none";
    trendsSection.style.display = "none";
  });
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
    const textarea = container.querySelector("textarea");
    const label = container.querySelector("label");

    input.addEventListener("focus", function () {
      label.style.top = "0px";
      label.style.left = "10px";
      label.style.fontSize = "12px";
      label.style.color = "#000";
      label.style.backgroundColor = "#fff";
      label.style.paddingLeft = "5px";
      label.style.paddingRight = "5px";
    });

    input.addEventListener("blur", function () {
      if (input.value === "") {
        label.style.top = "50%";
        label.style.left = "10px";
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



//     textarea.addEventListener("focus", function () {
//       label.style.top = "0px";
//       label.style.left = "10px";
//       label.style.fontSize = "12px";
//       label.style.color = "#888";
//       label.style.backgroundColor = "#fff";
//       label.style.paddingLeft = "5px";
//       label.style.paddingRight = "5px";
//     });

//     textarea.addEventListener("blur", function () {
//       if (input.value === "") {
//         label.style.top = "50%";
//         label.style.left = "10px";
//         label.style.fontSize = "";
//         label.style.color = "";
//       }
//     });

//     if (textarea.value !== "") {
//       label.style.top = "-20px";
//       label.style.left = "10px";
//       label.style.fontSize = "12px";
//       label.style.color = "#888";
//     }


  });
});

// ------------------------------------------------------------------------------------
// Expert - Section
// --------------------------------------------------------------------------------------
const articles = document.querySelectorAll("article");

articles.forEach((article) => {
  article.addEventListener("mouseover", () => {
    article.classList.add("active");
  });

  article.addEventListener("mouseout", () => {
    article.classList.remove("active");
  });
});
