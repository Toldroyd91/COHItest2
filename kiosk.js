/* Disable right click */
document.addEventListener("contextmenu", e => e.preventDefault());

/* Disable text selection */
document.addEventListener("selectstart", e => e.preventDefault());

/* Fullscreen toggle */
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

/* Hide browser UI hint */
window.addEventListener("load", () => {
  setTimeout(() => window.scrollTo(0, 1), 100);
});