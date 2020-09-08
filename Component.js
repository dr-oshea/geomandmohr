
class Component {
	
	constructor(x0,y0,w,h) {
		
		this.x0 = x0;
		this.y0 = y0;
		this.w  = w;
		this.h  = h;
		
		this.A = w*h;
		
		this.Ixx = w*h**3/12;
		this.Iyy = h*w**3/12;
		this.Ixy = 0;
		
		let dx = x0-Ox;
		let dy = y0-Oy;
		this.PAxx = this.A * dy * dy;
		this.PAyy = this.A * dx * dx;
		this.PAxy = this.A * dx * dy;
		
	}
	
	
	
}
	
	
	