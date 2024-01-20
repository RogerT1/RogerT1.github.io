document.querySelectorAll(".sidenav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1); 
    // this gets the tag without the #
    const targetElement = document.getElementById(targetId);

    if (targetId === 'about') {
        window.scrollTo({
          top: targetElement.offsetTop - 300,
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

