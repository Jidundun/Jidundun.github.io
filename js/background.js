const images = ["0.jpeg", "1.jpeg", "2.jpeg"]

const randomimage = images[Math.floor(Math.random()* images.length)];

const bgImage = document.createElement("img");
bgImage.src = `Images/${randomimage}`;
bgImage.classList.add("bg-image");
document.body.appendChild(bgImage);
