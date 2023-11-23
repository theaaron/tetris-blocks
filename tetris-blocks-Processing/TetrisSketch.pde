
Block block;
TetrisBlock tBlock;
TetrisBlock tBlock2;
BlockStyle bs;
ArrayList<TetrisBlock> tbs; 
float sideLength = 50;

void setup() {
    size(800, 800, P3D);
    block = new Block(sideLength, sideLength, sideLength);
    tBlock = new TetrisBlock(sideLength);
    tBlock2 = new TetrisBlock(sideLength);
    bs = new BlockStyle(color(0), color(random(255)), 12);
    tbs = new ArrayList<TetrisBlock>();
    for (int i = 0; i < height/sideLength; i ++) {
        tbs.add(new TetrisBlock(sideLength));
        tbs.get(i).tx = random(-width/2, width/2);
        tbs.get(i).ty = random(height);
    }
}

void draw() {
    background(255);

    translate(width/2, height/2);

    pushMatrix();
    // rotateX(radians(-frameCount));
    rotateY(radians(-frameCount));
    // rotateZ(radians(-frameCount));
    tBlock2.draw3();
    popMatrix();

    rotateZ(radians(frameCount));
    rotateY(radians(frameCount) * .5);
    rotateX(radians(frameCount));
    for (int i = 0; i < tbs.size(); i++) {
        pushMatrix();
        rotate(radians(frameCount));
        translate(tbs.get(i).tx, tbs.get(i).ty);
        rotateX(radians(frameCount) * tbs.get(i).rotationMult);
        rotateY(radians(frameCount) * tbs.get(i).rotationMult * .5);
        rotateZ(radians(frameCount) * tbs.get(i).rotationMult);
        if (i % 3 == 0) {
            tbs.get(i).draw4();
        } else if (i % 2 == 0) {
            tbs.get(i).draw2();
        } else {
            tbs.get(i).drawSquare();
        }
        
        popMatrix();

    }
    
    if (tBlock.ty < height - tBlock.blockSize*1.5) {
        tBlock.ty += 1;
    }
    pushMatrix();
    translate(tBlock.tx, tBlock.ty);
    pushMatrix();
    translate(tBlock.blockSize*5, 0);
    // rotateX(radians(frameCount));
    // rotateY(radians(frameCount));
    tBlock.drawSquare();
    popMatrix();

    popMatrix();

    
}
