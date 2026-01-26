const images = [
  "gallery/edwardian-glass/1.jpg",
  "gallery/edwardian-glass/2.jpg",
  "gallery/flat-roof/1.jpg",
  "gallery/victorian-glass/1.jpg"
];

const grid = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const close = document.getElementById("close");

if (grid) {
  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.onclick = () => {
      modal.style.display = "flex";
      modalImg.src = src;
    };
    grid.appendChild(img);
  });
}

if (close) {
  close.onclick = () => modal.style.display = "none";
}