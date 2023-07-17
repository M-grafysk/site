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
        label.style.color = "#888";
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
  