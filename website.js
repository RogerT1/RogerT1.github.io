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

document.querySelectorAll(".about").forEach((anchor) => {
  anchor.addEventListener("mouseenter", function (e) {
    e.preventDefault();

    hiddenText1 = document.getElementById("aboutme");
    hiddenText1.classList.toggle("show"); 
    biggerBox = document.querySelector(".biggerbox");
    if (biggerBox.style.borderBottom === "none") {
        biggerBox.style.borderBottom = "2px solid #000";
    } else {
        biggerBox.style.borderBottom = "none";
    }
      
    
    // Toggle the display of the hidden text
    
  });
});
