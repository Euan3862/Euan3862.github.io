document.addEventListener("DOMContentLoaded", function () {
    const anchorElements = document.querySelectorAll(".topper nav ul li a");
  
    anchorElements.forEach(function (element) {
      element.addEventListener("mouseover", over);
      element.addEventListener("mouseout", out);
    });
  
    function over() {
      this.style.border = "2px solid black"; // Add border on hover
    }
  
    function out() {
      this.style.border = "none"; // Remove border when not hovering
    }
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const anchorElements = document.querySelectorAll(".content a");
  
    anchorElements.forEach(function (element) {
      element.addEventListener("mouseover", over);
      element.addEventListener("mouseout", out);
    });
  
    function over() {
      this.style.color = "#fff"; // Add border on hover
    }
  
    function out() {
      this.style.color = "black"; // Remove border when not hovering
    }
  });
