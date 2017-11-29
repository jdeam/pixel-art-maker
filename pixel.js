let selectedColor = 'empty';
let brushActive = false;
let body = document.querySelector('body');
let palette = document.querySelector('.palette-box');
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

function colorSinglePixel() {
  if (event.target.classList.contains(selectedColor)) {
    this.classList = 'empty';
  } else {
    this.classList = selectedColor;
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
    this.classList = selectedColor;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  body.addEventListener('mousedown', activateBrush);
  body.addEventListener('mouseup', deactivateBrush);
  palette.addEventListener('click', pickColor);
  pixels.forEach(function(pixel) {
    pixel.classList='empty';
    pixel.addEventListener('click', colorSinglePixel);
    pixel.addEventListener('mouseenter', colorPixels, true);
  });
});
