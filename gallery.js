let images = [];
let currentIndex = 0;
let startX = 0;

function toggleFolder(header) {
  const folder = header.nextElementSibling;
  folder.style.display = folder.style.display === "block" ? "none" : "block";
}

function openGallery(path) {
  images = [
    `${path}/1.jpg`,
    `${path}/2.jpg`,
    `${path}/3.jpg`,
    `${path}/4.jpg`
  ];
  currentIndex = 0;
  document.getElementById("modalImage").src = images[0];
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  modalImage.src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImage.src = images[currentIndex];
}

/* Swipe support */
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");

modal.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

modal.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextImage();
  if (endX - startX > 50) prevImage();
});