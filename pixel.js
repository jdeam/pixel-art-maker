let selectedColor = '';
let brushActive = false;
let body = document.querySelector('body');
let palette = document.querySelector('.palette-box');
// let pixelBox = document.querySelector('.pixel-box');
let pixels = document.querySelector('.pixel-box').childNodes;

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

function colorSinglePixel() {
  if (event.target.classList.contains(selectedColor)) {
    event.target.classList = '';
  } else {
    event.target.classList = selectedColor;
  }
}

function activateBrush() {
  brushActive = true;
}

function deactivateBrush() {
  brushActive = false;
}

function colorPixels() {
  if (brushActive) {
    event.target.classList = selectedColor;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  body.addEventListener('mousedown', activateBrush);
  body.addEventListener('mouseup', deactivateBrush);
  palette.addEventListener('click', pickColor);
  // pixelBox.addEventListener('click', colorSinglePixel);
  // pixelBox.addEventListener('mouseenter', colorPixels, true);
  pixels.forEach(function(pixel) {
    pixel.addEventListener('click', colorSinglePixel);
    pixel.addEventListener('mouseenter', colorPixels, true);
  });
});