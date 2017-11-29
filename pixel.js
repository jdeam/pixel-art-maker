let selectedColor = '';
let palette = document.querySelector('.palette-box');
let pixelBox = document.querySelector('.pixel-box');

function pickColor() {
  if (event.target.classList.contains(selectedColor)) {
    event.target.classList.remove('selected');
    selectedColor = '';
  } else if (!selectedColor) {
    selectedColor = event.target.id;
    event.target.classList.add('selected');
  } else {
    document.getElementById(selectedColor).classList.remove('selected');
    selectedColor = event.target.id;
    event.target.classList.add('selected');
  }
}

function colorPixel() {
  if (event.target.classList.contains(selectedColor)) {
    event.target.classList = '';
  } else {
    event.target.classList = selectedColor;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  palette.addEventListener('click', pickColor);
  pixelBox.addEventListener('click', colorPixel);
});
