let block;
let tBlock;
let tBlock2;
let bs;
let tbs = [];
let sideLength = 50;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	block = new Block(sideLength, sideLength, sideLength);
	tBlock = new TetrisBlock(sideLength);
	tBlock2 = new TetrisBlock(sideLength);
	bs = new BlockStyle(color(0), color(random(255)), 12);
	for (let i = 0; i < height / sideLength; i++) {
		let tetrisBlock = new TetrisBlock(sideLength);
		tetrisBlock.tx = random(-width / 2, width / 2);
		tetrisBlock.ty = random(height);
		tbs.push(tetrisBlock);
	}
}

function draw() {
	background(140);

	// translate(width / 2, height / 2);

	push();
	// rotateX(radians(-frameCount));
	rotateY(radians(-frameCount));
	// rotateZ(radians(-frameCount));
	tBlock2.draw3();
	pop();

	rotateZ(radians(frameCount));
	rotateY(radians(frameCount) * 0.5);
	rotateX(radians(frameCount));
	for (let i = 0; i < tbs.length; i++) {
		push();
		rotate(radians(frameCount));
		translate(tbs[i].tx, tbs[i].ty);
		rotateX(radians(frameCount) * tbs[i].rotationMult);
		rotateY(radians(frameCount) * tbs[i].rotationMult * 0.5);
		rotateZ(radians(frameCount) * tbs[i].rotationMult);
		if (i % 3 === 0) {
			tbs[i].draw4();
		} else if (i % 2 === 0) {
			tbs[i].draw2();
		} else {
			tbs[i].drawSquare();
		}
		pop();
	}

	if (tBlock.ty < height - tBlock.blockSize * 1.5) {
		tBlock.ty += 1;
	}
	push();
	translate(tBlock.tx, tBlock.ty);
	push();
	translate(tBlock.blockSize * 5, 0);
	// rotateX(radians(frameCount));
	// rotateY(radians(frameCount));
	tBlock.drawSquare();
	pop();

	pop();
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}


