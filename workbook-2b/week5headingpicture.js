let images = ['week5pic1.png', 'image2.jpg', 'image3.jpg']; // replace with your image paths
let index = 0;

function changeImage() {
  index = (index + 1) % images.length;
  document.getElementById('changing-image').src = images[index];
}

setInterval(changeImage, 3000); // change every 3 seconds