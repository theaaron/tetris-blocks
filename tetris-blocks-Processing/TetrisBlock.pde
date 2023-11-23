class TetrisBlock {
    int numOfBlocks = 4;
    float blockSize;
    Block[] blocks = new Block[numOfBlocks];
    float tx = 0;
    float ty = 0;
    boolean spinBlocks = true;
    color col;
    float rotationMult;

    public TetrisBlock(float blockSize) {
        this.blockSize = blockSize;
        this.col = color(random(255), random(255), random(255));
        for (int i = 0; i < numOfBlocks; i++) {
            blocks[i] = new Block(blockSize, blockSize, blockSize);
        }
        this.rotationMult = random(-2, 2);

    }

    void expand() {
        for (int i = 0; i < 4; i++) {
            pushMatrix();

            blocks[i].draw();
            popMatrix();
        }
    }
    //cube
    void drawSquare() {
        fill(col);
        //top left
        pushMatrix();
        translate(-blockSize/2, -blockSize/2, 0);
        blocks[0].draw();
        popMatrix();
        //bottom left
        pushMatrix();
        translate(-blockSize/2, blockSize/2, 0);
        blocks[1].draw();
        popMatrix();
        //bottom right
        pushMatrix();
        translate(blockSize/2, blockSize/2, 0);
        blocks[2].draw();
        popMatrix();
        //top right
        pushMatrix();
        translate(blockSize/2, -blockSize/2, 0);
        blocks[3].draw();
        popMatrix();
    }

    void draw2() {
        fill(col);
        //top left
        pushMatrix();
        translate(-blockSize/2, -blockSize/2, 0);
        blocks[0].draw();
        popMatrix();
        
        //bottom right
        pushMatrix();
        translate(blockSize/2, blockSize/2, 0);
        blocks[2].draw();
        popMatrix();
        //top right
        pushMatrix();
        translate(blockSize/2, -blockSize/2, 0);
        blocks[3].draw();
        popMatrix();

        //off to the right
        pushMatrix();
        translate(blockSize*1.5, blockSize/2, 0);
        blocks[1].draw();
        popMatrix();
    }
    //line
    void draw3() {
        // fill(col);
        //bottom
        pushMatrix();
        translate(blockSize/2, blockSize*2.5, 0);
        blocks[0].draw();
        popMatrix();
        
        //mid bottom
        pushMatrix();
        translate(blockSize/2, blockSize/2, 0);
        blocks[2].draw();
        popMatrix();
        // mid top
        pushMatrix();
        translate(blockSize/2, -blockSize/2, 0);
        blocks[3].draw();
        popMatrix();

        //top
        pushMatrix();
        translate(blockSize/2, blockSize*1.5, 0);
        blocks[1].draw();
        popMatrix();
    }

    void draw4() {
         fill(col);
        //top left
        pushMatrix();
        translate(-blockSize/2, -blockSize/2, 0);
        blocks[0].draw();
        popMatrix();
        //bottom left
        pushMatrix();
        translate(-blockSize/2, blockSize/2, 0);
        blocks[1].draw();
        popMatrix();
        //bottom right
        pushMatrix();
        translate(blockSize/2, blockSize/2, 0);
        blocks[2].draw();
        popMatrix();
        //top right
        pushMatrix();
        translate(-blockSize*1.5, blockSize/2, 0);
        blocks[3].draw();
        popMatrix();
    }
}
