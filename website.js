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

document.addEventListener("DOMContentLoaded", function () {
  var aboutSlider1 = document.getElementById("aboutSlider1");

  aboutSlider1.style.left = 0;
  aboutSlider1.style.opacity = "100%";

  var aboutSlider2 = document.getElementById("aboutSlider2");

  aboutSlider2.style.right = 0;
  aboutSlider2.style.opacity = "100%";
});

//////////////////////////////
// No zooming
document.addEventListener("touchmove", handleTouchMove, { passive: false });
document.addEventListener("wheel", handleWheel, { passive: false });

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "=") {
    event.preventDefault();
  }
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
//////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".filter").forEach(function (videoHover) {
    videoHover.addEventListener("mouseenter", function () {
      var video = videoHover.querySelector(".video");
      video.play();
    });
  });

  document.querySelectorAll(".filter").forEach(function (videoHover) {
    videoHover.addEventListener("mouseleave", function () {
      var video = videoHover.querySelector(".video");
      video.pause();
    });
  });
});

// Project Animation
const scrollContainer = document.querySelector(".scroll-container");
scrollContainer.addEventListener("scroll", function () {
  var scrollY = scrollContainer.scrollTop;
  var windowSize = window.innerWidth;
  const targetElement = document.getElementById("projects");
  const scrollActivationHeight1 = targetElement.offsetTop - 700;
  const scrollActivationHeight2 = targetElement.offsetTop - 200;
  const scrollActivationHeight3 = targetElement.offsetTop + 300;
  const scrollActivationHeight4 = targetElement.offsetTop + 800;
  var projOne = document.getElementById("oneOne");
  var projTwo = document.getElementById("oneTwo");
  var projThree = document.getElementById("twoOne");
  var projFour = document.getElementById("twoTwo");
  var projTitle= document.getElementById("projectT");
  if (scrollY >= scrollActivationHeight1 - 800) {
    projTitle.style.opacity = "100%";
  }
  if (scrollY >= scrollActivationHeight1 && windowSize >= 700) {
    projOne.style.left = 0;
    projOne.style.opacity = "100%";
    projTwo.style.right = 0;
    projTwo.style.opacity = "100%";
  }
  if (scrollY >= scrollActivationHeight2 && windowSize >= 700) {
    projThree.style.left = 0;
    projThree.style.opacity = "100%";
    projFour.style.right = 0;
    projFour.style.opacity = "100%";
  }
  if (scrollY >= scrollActivationHeight1 && windowSize < 700) {
    projOne.style.left = 0;
    projOne.style.opacity = "100%";
  }
  if (scrollY >= scrollActivationHeight2 && windowSize < 700) {
    projTwo.style.right = 0;
    projTwo.style.opacity = "100%";
  }
  if (scrollY >= scrollActivationHeight3 && windowSize < 700) {
    projThree.style.left = 0;
    projThree.style.opacity = "100%";
  }
  if (scrollY >= scrollActivationHeight4 && windowSize < 700) {
    projFour.style.right = 0;
    projFour.style.opacity = "100%";
  }
});
