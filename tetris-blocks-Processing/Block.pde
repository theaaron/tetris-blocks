class Block {
    float w;
    float h;
    float d;

    float halfW;
    float halfH;
    float halfD;

    public Block(float w, float h, float d) {
        this.w = w;
        this.h = h;
        this.d = d;
        halfW = this.w/2;
        halfH = this.h/2;
        halfD = this.d/2;
    }

    void draw() {
        stroke(0);
        strokeWeight(12);
        // fill(color(80, 30, 200));
        //back side
        beginShape();
        vertex(-halfW, -halfH, -halfD);
        vertex(halfW, -halfH, -halfD);
        vertex(halfW, halfH, -halfD);
        vertex(-halfW, halfH, -halfD);
        endShape(CLOSE);
        //top side
        beginShape();
        vertex(-halfW, -halfH, -halfD);
        vertex(-halfW, -halfH, halfD);
        vertex(halfW, -halfH, halfD);
        vertex(halfW, -halfH, -halfD);
        endShape(CLOSE);
        //front side
        beginShape();
        vertex(-halfW, -halfH, halfD);
        vertex(-halfW, halfH, halfD);
        vertex(halfW, halfH, halfD);
        vertex(halfW, -halfH, halfD);
        endShape(CLOSE);
        //bottom side
        beginShape();
        vertex(-halfW, halfH, -halfD);
        vertex(halfW, halfH, -halfD);
        vertex(halfW, halfH, halfD);
        vertex(-halfW, halfH, halfD);
        endShape();
        //left side
        beginShape();
        vertex(-halfW, -halfH, -halfD);
        vertex(-halfW, halfH, -halfD);
        vertex(-halfW, halfH, halfD);
        vertex(-halfW, -halfH, halfD);
        endShape();

        //left side
        beginShape();
        vertex(halfW, -halfH, -halfD);
        vertex(halfW, halfH, -halfD);
        vertex(halfW, halfH, halfD);
        vertex(halfW, -halfH, halfD);
        endShape();




    }
}
