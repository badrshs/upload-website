var cvs, ctx, anim;

var c = 0;
var sc = 0;
var sr = 2;
var ypos = 400;
var motion = "restL";
var t = 1000/60;

var move = new Image ();
move.src = "panda_run.png";

var rest = new Image ();
rest.src = "rest.png";

panda = new Object ();
panda.xpos = 300;
panda.move = move;
panda.rest = rest;

$(document).ready(function () {
    cvs = document.getElementById ("canvas");
    ctx = cvs.getContext ("2d");
    
    setInterval (draw, t);
});

function draw () {
    ctx.clearRect (0, 0, cvs.width, cvs.height);
    switch (motion) {
        case "restL":
            ctx.drawImage (panda.rest, 0, 0, 47.4, 33, panda.xpos, ypos, 47.4 * 1.5, 33 * 1.5);
            break;
        case "moveL":
            var x = (c % 4) * 47.5;
            ctx.drawImage (panda.move, x, 0, 47.5, 35, panda.xpos, ypos, 47.5 * 1.5, 34 * 1.5);
            if (sc == sr) {
                sc = 0;
                if (c == 4) {
                    c = 0;
                } else {
                    c++;
                }
            } else {
                sc++;
            }
            break;
        case "restR":
            ctx.scale (-1, 1);
            ctx.drawImage (panda.rest, 0, 0, 47.4, 33, -panda.xpos + 47.4 * 1.5, ypos, 47.4 * 1.5, 33 * 1.5);
            break;
        case "moveR":
            var x = (c % 4) * 47.5;
            ctx.scale (-1, 1);
            ctx.drawImage (panda.move, x, 0, 47.5, 35, -panda.xpos, ypos, 47.5 * 1.5, 34 * 1.5);
            if (sc == sr) {
                sc = 0;
                if (c == 4) {
                    c = 0;
                } else {
                    c++;
                }
            } else {
                sc++;
            }
            break;
    }
}

$(document).keydown (function (e) {
    switch (e.keyCode) {
        case 37:
            motion = "moveL"
            panda.xpos -= 15; 
            console.log(motion);
            break;
        case 39:
            motion = "moveR"
            panda.xpos += 15;
            console.log(motion);
            break;
    }
}).keyup (function (e) {
    if (motion == "moveL") {
        motion = "restL";
    }
    else if (motion == "moveR") {
        motion = "restR";
    }
});

     
        
        
        
        
        
        
        
        
        
        
        
        
