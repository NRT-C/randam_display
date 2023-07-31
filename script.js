var images = [
    "image_eraser.jpg",
    "image_24wood.jpg",
    "image_bed.jpg",
    "image_rocket.jpg",
    "image_ricecooker.jpg",
    "image_tent.jpg",
    "image_pen.jpg",
    "image_island.jpg",
    // add as many images as you want
];

var button = document.getElementById('randomButton');
var imageContainer = document.getElementById('imageContainer');

button.addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() * images.length);
    var html = `<img src="${images[randomIndex]}" alt="Random Image">`;
    imageContainer.innerHTML = html;
});
