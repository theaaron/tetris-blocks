class Block {
	constructor(w, h, d) {
		this.w = w;
		this.h = h;
		this.d = d;
		this.halfW = this.w / 2;
		this.halfH = this.h / 2;
		this.halfD = this.d / 2;
	}

	draw() {
		stroke(0);
		strokeWeight(12);
		// fill(color(80, 30, 200));
		//back side
		beginShape();
		vertex(-this.halfW, -this.halfH, -this.halfD);
		vertex(this.halfW, -this.halfH, -this.halfD);
		vertex(this.halfW, this.halfH, -this.halfD);
		vertex(-this.halfW, this.halfH, -this.halfD);
		endShape(CLOSE);
		//top side
		beginShape();
		vertex(-this.halfW, -this.halfH, -this.halfD);
		vertex(-this.halfW, -this.halfH, this.halfD);
		vertex(this.halfW, -this.halfH, this.halfD);
		vertex(this.halfW, -this.halfH, -this.halfD);
		endShape(CLOSE);
		//front side
		beginShape();
		vertex(-this.halfW, -this.halfH, this.halfD);
		vertex(-this.halfW, this.halfH, this.halfD);
		vertex(this.halfW, this.halfH, this.halfD);
		vertex(this.halfW, -this.halfH, this.halfD);
		endShape(CLOSE);
		//bottom side
		beginShape();
		vertex(-this.halfW, this.halfH, -this.halfD);
		vertex(this.halfW, this.halfH, -this.halfD);
		vertex(this.halfW, this.halfH, this.halfD);
		vertex(-this.halfW, this.halfH, this.halfD);
		endShape();
		//left side
		beginShape();
		vertex(-this.halfW, -this.halfH, -this.halfD);
		vertex(-this.halfW, this.halfH, -this.halfD);
		vertex(-this.halfW, this.halfH, this.halfD);
		vertex(-this.halfW, -this.halfH, this.halfD);
		endShape();

		//right side
		beginShape();
		vertex(this.halfW, -this.halfH, -this.halfD);
		vertex(this.halfW, this.halfH, -this.halfD);
		vertex(this.halfW, this.halfH, this.halfD);
		vertex(this.halfW, -this.halfH, this.halfD);
		endShape();
	}
}
