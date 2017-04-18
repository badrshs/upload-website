

console.clear();
document.addEventListener('DOMContentLoaded', function(){
	
	let stats = new Stats();
	stats.showPanel( 0 );
	stats.domElement.style.position = 'absolute';
	//let panel = stats.addPanel( new Stats.Panel( 'caption', '#ff8', '#221' ) );
	// panel.update(value, maxValue);
	document.body.appendChild( stats.domElement );
	
	/* i love DOM */
	var canvas = document.createElement('canvas');
	document.body.appendChild(canvas);
	document.body.style.padding = '0px';
	document.body.style.margin = '0px';
	document.body.style.overflow = 'hidden';
	/* i love full screen */
	var w = canvas.width = window.innerWidth;
	var h = canvas.height = window.innerHeight;
	var ctx = canvas.getContext('2d');
	
	/* i love bad short opts ^__^ like q or qwe */
	var opts = {
	};
	var gui = new dat.GUI();
	function opt(name, value, min, max){
		opts[name] = value;
		return gui.add(opts, name, min, max);
	}
	/*
		if code.before > ugly -> just.dont.read(below) // below worse...
		==== let's begin. ====
	*/
	
	class Snow{
		constructor(ctx, count){
			this.w = ctx.canvas.width;
			this.h = ctx.canvas.height;
			this.count = count;
			this.r = this.w * 1;
			this.particles = [];
			this.vel = [0.5,2,0];
			this.a = 0;
			this.av = Math.PI/256;
			while(this.particles.length<this.count)
				this.particles.push( this.gen([], 1) );
		}
		gen(p, zs){
			zs = zs || 0;
			let a = Math.random()*Math.PI*2;
			let r = this.r * Math.random();
			p[0] = Math.cos(a) * r;
			p[2] = Math.sin(a) * r;
			p[1] = -this.h + Math.random()*this.h * zs * 2;
			return p;
		}
		process(){
			for(let p of this.particles){
				p[0] += this.vel[0];
				p[1] += this.vel[1];
				p[2] += this.vel[2];
				//if( Math.hypot(p[0], p[2]) > this.r || p[1] > this.h )
					//this.gen(p);
			}
		}
		render(){
			this.a += this.av;
			let rx = Math.cos(this.a);
			let ry = Math.sin(this.a);
			for(let p of this.particles){
				let x = p[0] * rx - p[2] * ry;
				let z = p[2] * rx + p[0] * ry;
				let t = [
					x,
					p[1],
					(z + this.r)/200,
					5,
				];
				if( t[2] < 0 )
					continue;
				t[0] = this.w/2 + t[0]/t[2];
				t[1] = this.h/2 + t[1]/t[2];
				t[3] /= t[2];
				ctx.beginPath();
				ctx.arc(t[0], t[1], t[3], 0,Math.PI*2, 0);
				ctx.fillStyle = '#fff';
				ctx.fill();
				if( t[0] < 0 || t[0] > this.w || t[1] < 0 || t[1] > this.h )
					this.gen(p);
			}
		}
	}
	
	let snow = new Snow(ctx, 300);
	//opt('text', 'test');
	function loop(){
		stats.begin();
		ctx.globalAlpha = 1;
		let g = ctx.createLinearGradient(0,0, 0,h);
		g.addColorStop(0, '#004');
		g.addColorStop(1, '#000');
		ctx.fillStyle = g;
		ctx.fillRect(0,0, w,h);
		ctx.globalAlpha = 1;
		
		snow.process();
		snow.render();
		
		requestAnimationFrame(loop);
		stats.end();
	}
	loop();
	
}, false);


(function() {


}).call(this);

