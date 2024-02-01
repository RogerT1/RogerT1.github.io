// When going back it goes back to where you last were at on the window
// Function to save scroll position
function saveScrollPosition() {
  sessionStorage.setItem("scrollPosition", scrollContainer.scrollTop);
}

// Function to restore scroll position
function restoreScrollPosition() {
  let scrollPosition = sessionStorage.getItem("scrollPosition");
  if (scrollPosition !== null) {
    scrollContainer.scrollTop = scrollPosition,
    
    sessionStorage.removeItem("scrollPosition");
  }
}

// Event listener to save scroll position when navigating away from the page
window.addEventListener("beforeunload", saveScrollPosition);

// Call the function to restore scroll position when the page loads


document.addEventListener("DOMContentLoaded", function () {
  restoreScrollPosition();
});