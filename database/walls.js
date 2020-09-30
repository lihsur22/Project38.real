class Walls {
    constructor(x1,y1){
        this.x1 = x1;
        this.y1 = y1 - 100;
        w1 = createSprite(this.x1,this.y1,15,15);
        w2 = createSprite(this.x1,this.y1 - 100,15,15);
        w3 = createSprite(this.x1,this.y1 - 200,15,15);
        w4 = createSprite(this.x1,this.y1 - 300,15,15);
        w1.visible = false;
        w2.visible = false;
        w3.visible = false;
        w4.visible = false;
    }

    display(){
        w1.visible = true;
        w2.visible = true;
        w3.visible = true;
        w4.visible = true;
        //w1.depth = -1;
        //w2.depth = -1;
        //w3.depth = -1;
        //w4.depth = -1;
    }
};