document.querySelectorAll(".sidenav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    // this gets the tag without the #
    const targetElement = document.getElementById(targetId);

    if (targetId === "about") {
      window.scrollTo({
        top: targetElement.offsetTop - 1000,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
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

document.getElementById("rewind").addEventListener("click", function () {
  buttonClicked = true;
  setTimeout(function () {
    buttonClicked = false;
  }, 4000);
  var hiddenText1 = document.getElementById("aboutme");

  var hiddenmin = document.getElementById("minimise1");
  if (isElementVisible(hiddenmin)) {
    hiddenmin.classList.toggle("show");
  }

  var hiddenText1 = document.getElementById("aboutme");
  hiddenText1.classList.toggle("show");

  var hiddenText2 = document.getElementById("aboutme1");

  setTimeout(function () {
    hiddenText2.classList.toggle("show");
  }, 1000);

  var hiddenText5 = document.getElementById("aboutme2");

  setTimeout(function () {
    hiddenText5.classList.toggle("show");
  }, 2000);

  var hiddenText3 = document.getElementById("aboutme3");
  setTimeout(function () {
    hiddenText3.classList.toggle("show");
  }, 3000);

  var hiddenText4 = document.getElementById("aboutme4");
  setTimeout(function () {
    hiddenText4.classList.toggle("show");
  }, 4000);
  
});

document.querySelectorAll(".about").forEach((anchor) => {
  anchor.addEventListener("mouseenter", function (e) {
    e.preventDefault();
    if (!buttonClicked) {
      var hiddenmin = document.getElementById("minimise1");

      if (!isElementVisible(hiddenmin)) {
        setTimeout(function () {
          hiddenmin.classList.toggle("show");
        }, 4500);
      }

      var hiddenText1 = document.getElementById("aboutme");

      if (!isElementVisible(hiddenText1)) {
        hiddenText1.classList.toggle("show");
      }

      var hiddenText2 = document.getElementById("aboutme1");

      if (!isElementVisible(hiddenText1)) {
        setTimeout(function () {
          hiddenText2.classList.toggle("show");
        }, 1000);
      }

      var hiddenText5 = document.getElementById("aboutme2");

      if (!isElementVisible(hiddenText1)) {
        setTimeout(function () {
          hiddenText5.classList.toggle("show");
        }, 2000);
      }

      var hiddenText3 = document.getElementById("aboutme3");
      if (!isElementVisible(hiddenText1)) {
        setTimeout(function () {
          hiddenText3.classList.toggle("show");
        }, 3000);
      }
      var hiddenText4 = document.getElementById("aboutme4");
      if (!isElementVisible(hiddenText1)) {
        setTimeout(function () {
          hiddenText4.classList.toggle("show");
        }, 4000);
      }
    }
    
    // biggerBox = document.querySelector(".biggerbox");
    // if (biggerBox.style.borderBottom === "none") {
    //   biggerBox.style.borderBottom = "2px solid #000";
    // } else {
    //   biggerBox.style.borderBottom = "none";
    // }

    // Toggle the display of the hidden text
  });
});
