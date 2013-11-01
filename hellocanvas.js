'use strict';

//
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

// Redraw the canvas according to the current state of things.
//
function redraw() {
    ctx.clearRect(0, 0, width, height);

}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.src = 'img/dog.jpg';
  img.onload = function(){
    ctx.drawImage(img,0,0);

  }
}

var mouseX = 0;
var mouseY = 0;

var canvasBounds = canvas.getBoundingClientRect();

function onMousemove(event) {
    mouseX = event.clientX - canvasBounds.left;
    mouseY = event.clientY - canvasBounds.top;
    redraw();
}




// Start things going.

function onLoad() {
    draw()
}

function run() {
    update();
//    redraw();
    draw()
}
