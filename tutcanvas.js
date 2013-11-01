/**
 * Created with PyCharm.
 * User: quesada
 * Date: 11/1/13
 * Time: 2:18 PM
 * To change this template use File | Settings | File Templates.
 */
//get a reference to the canvas
//var ctx = $('#canvas')[0].getContext("2d");
var ctx = canvas.getContext('2d');


//draw a circle
ctx.beginPath();
ctx.arc(75, 75, 10, 0, Math.PI * 2, true);
ctx.closePath();
ctx.fill();

//function init() {
//    var ctx = document.getElementById('canvas').getContext('2d');
//
//    ctx.fillStyle = "#00A308";
//    ctx.beginPath();
//    ctx.arc(220, 220, 50, 0, Math.PI * 2, true);
//    ctx.closePath();
//    ctx.fill();
//
//    ctx.fillStyle = "#FF1C0A";
//    ctx.beginPath();
//    ctx.arc(100, 100, 100, 0, Math.PI * 2, true);
//    ctx.closePath();
//    ctx.fill();
//
////the rectangle is half transparent
//    ctx.fillStyle = "rgba(255, 255, 0, .5)"
//    ctx.beginPath();
//    ctx.rect(15, 150, 120, 120);
//    ctx.closePath();
//    ctx.fill();
//}

//var x = 150;
//var y = 150;
//var dx = 1;
//var dy = 1;
//var ctx;
//
//function init() {
////  ctx = $('#canvas')[0].getContext("2d");
//  ctx = document.getElementById('canvas').getContext('2d');
//  return setInterval(draw, 10);
//}
//
//function draw() {
//  ctx.clearRect(0,0,300,300); // this is to avoid a ball leaving a trace
//  ctx.beginPath();
//  ctx.arc(x, y, 10, 0, Math.PI*2, true);
//  ctx.closePath();
//  ctx.fill();
//  x += dx;
//  y += dy;
//}
//
//init();

//BEGIN LIBRARY CODE
var x = 150;
var y = 150;
var dx = 2;
var dy = 4;
var WIDTH;
var HEIGHT;
var ctx;

function init() {
//  ctx = document.getElementById('canvas').getContext('2d');
  ctx = $('#canvas')[0].getContext("2d");
  WIDTH = canvas.width();
  HEIGHT = canvas.height();
  return setInterval(draw, 10);}

function circle(x,y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
}

function rect(x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}

function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

//END LIBRARY CODE

function draw() {
  clear();
  circle(x, y, 10);

  if (x + dx > WIDTH || x + dx < 0)
    dx = -dx;
  if (y + dy > HEIGHT || y + dy < 0)
    dy = -dy;

  x += dx;
  y += dy;
}


init();

//window.addEventListener("load", init, false);