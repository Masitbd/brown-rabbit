const loadAllImages = () => {
  const imgs = [
    "./assets/images/sponsors/sponsor-1.png",
    "./assets/images/sponsors/sponsor-2.png",
    "./assets/images/sponsors/sponsor-3.png",
    "./assets/images/sponsors/sponsor-4.png",
    "./assets/images/sponsors/sponsor-5.png",
    "./assets/images/sponsors/sponsor-6.png",
    "./assets/images/sponsors/sponsor-7.png",
    "./assets/images/sponsors/sponsor-8.png",
    "./assets/images/sponsors/sponsor-9.png",
    "./assets/images/sponsors/sponsor-10.png",
    "./assets/images/sponsors/sponsor-11.png",
    "./assets/images/sponsors/sponsor-12.png",
    "./assets/images/sponsors/sponsor-13.png",
    "./assets/images/sponsors/sponsor-14.png",
    "./assets/images/sponsors/sponsor-15.png",
    "./assets/images/sponsors/sponsor-16.png",
    "./assets/images/sponsors/sponsor-17.png",
    "./assets/images/sponsors/sponsor-18.png",
    "./assets/images/sponsors/sponsor-19.png",
    "./assets/images/sponsors/sponsor-20.png",
  ];

  const container = document.getElementById("imageContainer");

  for (let i = 0, j = imgs.length; i < j; i++) {
    var img = document.createElement("img");
    img.src = imgs[i]; // img[i] refers to the current URL.
    container.appendChild(img);
  }
};
loadAllImages();
const detail = () => {
  window.location.href = "/src/detail-information.html";
};
