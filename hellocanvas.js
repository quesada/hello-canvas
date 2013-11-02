'use strict';

//
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

//var hair = {
//    paintLeft = 1,
//    x = 0,
//    y = 0
//}
//
//initBrush = {
//    var brush = [];
//    for (n=0; n<=nhairs; n++){
//        brush
//    }
//
//}

//  brushstroke only moves right for now
//
//function brushStroke() {
//    for(x=0; x<=nhairs, x++){
//        ctx.globalAlpha= brush.paintLeft;
//        ctx.clearRect(0, 0, width, height);
//    }
//
//
//}


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
    run()
}

// no image
// draw a bunch of rectangles in parallel, each representing one 'hair' on the brush.
// they have paint, starting 100%, and they run out of paint at different rates (random).

// the mouse moves this bunch of rectangles.
// this is a brushstroke.
// user can change color later



function run() {
    var x=0;
    var y=0;
    var nhairs=100;
    var img = new Image();
    img.src = 'img/dog.jpg';
    img.onload = function () {
        // create 100 squares, same color, moving in parallel
        for (var adv = 0; adv <= 1000; adv= adv+20) {
            for (var n = 0; n <= nhairs; n++) {
                //        brush
                ctx.globalAlpha= adv/1000;
                ctx.fillRect(n, adv, 5, 10);
            }
        }
    }
}