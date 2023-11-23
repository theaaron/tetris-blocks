class TetrisBlock {
	constructor(blockSize) {
		this.numOfBlocks = 4;
		this.blockSize = blockSize;
		this.blocks = new Array(this.numOfBlocks);
		this.tx = 0;
		this.ty = 0;
		this.spinBlocks = true;
		this.col = color(random(255), random(255), random(255));
		this.rotationMult = random(-2, 2);

		for (let i = 0; i < this.numOfBlocks; i++) {
			this.blocks[i] = new Block(blockSize, blockSize, blockSize);
		}
	}

	expand() {
		for (let i = 0; i < 4; i++) {
			push();
			this.blocks[i].draw();
			pop();
		}
	}

	//cube
	drawSquare() {
		fill(this.col);
		//top left
		push();
		translate(-this.blockSize / 2, -this.blockSize / 2, 0);
		this.blocks[0].draw();
		pop();
		//bottom left
		push();
		translate(-this.blockSize / 2, this.blockSize / 2, 0);
		this.blocks[1].draw();
		pop();
		//bottom right
		push();
		translate(this.blockSize / 2, this.blockSize / 2, 0);
		this.blocks[2].draw();
		pop();
		//top right
		push();
		translate(this.blockSize / 2, -this.blockSize / 2, 0);
		this.blocks[3].draw();
		pop();
	}

	draw2() {
		fill(this.col);
		//top left
		push();
		translate(-this.blockSize / 2, -this.blockSize / 2, 0);
		this.blocks[0].draw();
		pop();

		//bottom right
		push();
		translate(this.blockSize / 2, this.blockSize / 2, 0);
		this.blocks[2].draw();
		pop();
		//top right
		push();
		translate(this.blockSize / 2, -this.blockSize / 2, 0);
		this.blocks[3].draw();
		pop();

		//off to the right
		push();
		translate(this.blockSize * 1.5, this.blockSize / 2, 0);
		this.blocks[1].draw();
		pop();
	}

	//line
	draw3() {
		// fill(this.col);
		//bottom
		push();
		translate(this.blockSize / 2, this.blockSize * 2.5, 0);
		this.blocks[0].draw();
		pop();

		//mid bottom
		push();
		translate(this.blockSize / 2, this.blockSize / 2, 0);
		this.blocks[2].draw();
		pop();
		// mid top
		push();
		translate(this.blockSize / 2, -this.blockSize / 2, 0);
		this.blocks[3].draw();
		pop();

		//top
		push();
		translate(this.blockSize / 2, this.blockSize * 1.5, 0);
		this.blocks[1].draw();
		pop();
	}

	draw4() {
		fill(this.col);
		//top left
		push();
		translate(-this.blockSize / 2, -this.blockSize / 2, 0);
		this.blocks[0].draw();
		pop();
		//bottom left
		push();
		translate(-this.blockSize / 2, this.blockSize / 2, 0);
		this.blocks[1].draw();
		pop();
		//bottom right
		push();
		translate(this.blockSize / 2, this.blockSize / 2, 0);
		this.blocks[2].draw();
		pop();
		//top right
		push();
		translate(-this.blockSize * 1.5, this.blockSize / 2, 0);
		this.blocks[3].draw();
		pop();
	}
}
