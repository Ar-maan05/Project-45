class Canon{
    constructor(x, y, width, height, angle){
        /*var options = {
            'isStatic': true
        }*/
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x, y, this.width, this.height, this.angle);
        this.image1 = loadImage("cannon_base.png");
        this.image2 = loadImage("CANON.png");
        World.add(world, this.body);
    }
    display(){
        //var pos =this.body.position;
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        //fill("red");
        image(this.image2, 0, 0, this.width, this.height);
        pop();
        //imageMode(CENTER);
        image(this.image1, 100, 50, 120, 120, PI, TWO_PI);
    }
}