document.querySelectorAll(".sidenav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    // this gets the tag without the #
    const targetElement = document.getElementById(targetId);
    const scrollContainer = document.querySelector(".scroll-container");
    if (targetId === "about") {
      scrollContainer.scrollTo({
        top: targetElement.offsetTop - 1000,
        behavior: "smooth",
      });
    } else {
      scrollContainer.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: "smooth",
      });
    }
  });
});

document.addEventListener("scroll", function () {
  const scrollY = window.scrollY;

  if (scrollY > 60) {
    // Add a class to each experience item to trigger the transition
    document.getElementById("experience1").classList.add("show-experience");
    document.getElementById("experience2").classList.add("show-experience");
    document.getElementById("experience3").classList.add("show-experience");
  } else {
    // Remove the class when scrolling out of the specified range
    document.getElementById("experience1").classList.remove("show-experience");
    document.getElementById("experience2").classList.remove("show-experience");
    document.getElementById("experience3").classList.remove("show-experience");
  }
});

function isElementVisible(element) {
  if (!element) {
    return false;
  }

  // Check if the element is hidden via display property
  if (window.getComputedStyle(element).display === "none") {
    return false;
  }

  var computedStyle = window.getComputedStyle(element);
  if (computedStyle.opacity === "0") {
    return false;
  }

  // Check if the element has dimensions
  if (element.offsetWidth === 0 || element.offsetHeight === 0) {
    return false;
  }

  // Check if the element is hidden by ancestor elements
  if (!element.offsetParent) {
    return false;
  }

  return true;
}

var buttonClicked = false;

// document.getElementById("rewind").addEventListener("click", function () {
//   buttonClicked = true;
//   setTimeout(function () {
//     buttonClicked = false;
//   }, 2000);
//   var hiddenText1 = document.getElementById("aboutme");

//   var hiddenmin = document.getElementById("minimise1");
//   if (isElementVisible(hiddenmin)) {
//     hiddenmin.classList.toggle("show");
//   }

//   var hiddenText1 = document.getElementById("aboutme");
//   hiddenText1.classList.toggle("show");

//   var hiddenText2 = document.getElementById("aboutme1");

//   setTimeout(function () {
//     hiddenText2.classList.toggle("show");
//   }, 500);

//   var hiddenText5 = document.getElementById("aboutme2");

//   setTimeout(function () {
//     hiddenText5.classList.toggle("show");
//   }, 1000);

//   var hiddenText3 = document.getElementById("aboutme3");
//   setTimeout(function () {
//     hiddenText3.classList.toggle("show");
//   }, 1500);

//   var hiddenText4 = document.getElementById("aboutme4");
//   setTimeout(function () {
//     hiddenText4.classList.toggle("show");
//   }, 2000);

// });

var isRunning = false;

document.querySelectorAll(".about").forEach((anchor) => {
  anchor.addEventListener("mouseenter", function (e) {
    e.preventDefault();

    if (isRunning) {
      return; // Exit early if the code is already running
    }

    isRunning = true;

    if (!buttonClicked) {
      var hiddenmin = document.getElementById("minimise1");

      if (!isElementVisible(hiddenmin)) {
        setTimeout(function () {
          hiddenmin.classList.toggle("show");
        }, 2000);
      }

      var hiddenText1 = document.getElementById("aboutme");

      if (!isElementVisible(hiddenText1)) {
        hiddenText1.classList.toggle("show");
      }

      var hiddenText2 = document.getElementById("aboutme1");

      if (!isElementVisible(hiddenText1)) {
        setTimeout(function () {
          hiddenText2.classList.toggle("show");
        }, 500);
      }

      var hiddenText5 = document.getElementById("aboutme2");

      if (!isElementVisible(hiddenText1)) {
        setTimeout(function () {
          hiddenText5.classList.toggle("show");
        }, 1000);
      }

      var hiddenText3 = document.getElementById("aboutme3");
      if (!isElementVisible(hiddenText1)) {
        setTimeout(function () {
          hiddenText3.classList.toggle("show");
        }, 1500);
      }
      var hiddenText4 = document.getElementById("aboutme4");
      if (!isElementVisible(hiddenText1)) {
        setTimeout(function () {
          hiddenText4.classList.toggle("show");
        }, 2000);
      }
    }

    isRunning = false;
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var aboutSlider1 = document.getElementById("aboutSlider1");

  aboutSlider1.style.left = 0;
  aboutSlider1.style.opacity = "100%";

  var aboutSlider2 = document.getElementById("aboutSlider2");

  aboutSlider2.style.right = 0;
  aboutSlider2.style.opacity = "100%";
});

document.addEventListener("touchmove", handleTouchMove, { passive: false });
document.addEventListener("wheel", handleWheel, { passive: false });

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === "=") {
    event.preventDefault();
  }
  

});


document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "-") {
    event.preventDefault();
  }
});

function handleTouchMove(event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}

function handleWheel(event) {
  if (event.ctrlKey) {
    // If Ctrl key is pressed (for zooming on certain systems), prevent zoom
    event.preventDefault();
  }
}

