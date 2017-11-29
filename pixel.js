let selectedColor = 'empty';
let brushActive = false;
let body = document.querySelector('body');
let palette = document.querySelector('.palette-box');
let pixelBox = document.querySelector('.pixel-box');
let pixels = document.querySelector('.pixel-box').childNodes;

function pickColor() {
  if (event.target.classList.contains(selectedColor)) {
    event.target.classList.remove('selected');
    selectedColor = 'empty';
  } else if (selectedColor==='empty') {
    selectedColor = event.target.id;
    event.target.classList.add('selected');
  } else {
    document.getElementById(selectedColor).classList.remove('selected');
    selectedColor = event.target.id;
    event.target.classList.add('selected');
  }
}

function colorSinglePixel(event) {
  if (event.target.classList.contains('pixel-box')) {
    return;
  }
  if (event.target.classList.contains(selectedColor)) {
    event.target.classList = 'empty';
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

function colorPixels(event) {
  if (event.target.classList.contains('pixel-box')) {
    return;
  }
  if (brushActive) {
    event.target.classList = selectedColor;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  body.addEventListener('mousedown', activateBrush);
  body.addEventListener('mouseup', deactivateBrush);
  palette.addEventListener('click', pickColor);
  pixels.forEach(function(pixel) {
    pixel.classList='empty';
  });
  pixelBox.addEventListener('click', colorSinglePixel);
  pixelBox.addEventListener('mouseenter', colorPixels, true);
});
