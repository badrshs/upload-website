var dir = function(l, radi) {
  return [l * Math.sin(radi), l * Math.cos(radi)];
};

c = document.getElementById('canv')
$ = c.getContext('2d');

c.width = window.innerWidth;
c.height = window.innerHeight;

var mw = 12 / c.width;
var mh = 1 / c.height;

function Parts(x, y) {
  this.pos = [x, y];
}
Parts.prototype.upd = function($) {
  _arr2 = [];
  _arr2[0] = this.pos[0];
  _arr2[1] = this.pos[1];
  res = dir(15, Math.PI * 5 * SimpNs.noise(_arr2[0] * mw * 0.25, _arr2[1] * mh * 0.98));

  _arr2[0] += res[0];
  _arr2[1] += res[1];

  $.beginPath();
  $.moveTo(_arr2[0], _arr2[1]);
  $.lineTo(this.pos[0], this.pos[1]);
  $.stroke();

  this.pos[0] = _arr2[0];
  this.pos[1] = _arr2[1];

  if (this.pos[0] < 0 || this.pos[0] > c.width) {
    this.pos[0] = Math.floor(Math.random() * c.width);
    this.pos[1] = Math.floor(Math.random() * c.width);
  } else if (this.pos[1] < 0 || this.pos[1] > c.height) {
    this.pos[0] = Math.floor(Math.random() * c.width);
    this.pos[1] = Math.floor(Math.random() * c.width);
  }
}

var _arr3 = [];
for (var i = 0; i < 3500; i++) {
  _arr3.push(new Parts(Math.floor(Math.random() * c.width), Math.floor(Math.random() * c.height)));
}

$.fillStyle = 'hsla(0, 5%, 95%, .01)';
$.strokeStyle ='hsla(0, 5%, 35%, 1)';

function go() {
  $.fillRect(0, 0, c.width, c.height);
  for (var i in _arr3) {
    _arr3[i].upd($);
  }
}
c.addEventListener('resize', function(){
  c.width = window.innerWidth;
  c.height = window.innerHeight;
}, false);

document.addEventListener('mousedown', img, false);

function img() {
  window.open(
    c.toDataURL(),
    "canvasImage",
    "left=0;top=0;" + 
    "width=" + c.width +
    ";height=" + c.height +
    ";toolbar=0;resizable=0;"
  );
}
run();

function run() {
  window.requestAnimationFrame(run);
  go();
}