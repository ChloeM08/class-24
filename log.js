class log{

    constructor(x, y, height, angle){
        var options = {
          restitution: 0.8,
          density: 1.5,
          friction: 1.5
        }
        this.body = Bodies.rectangle(x,y,20,height, options);
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);
    }
    
    display(){
    
    var pos = this.body. position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("pink");
    strokeWeight(4);
    stroke("lightblue");
    rectMode(CENTER);
    rect(0,0, this.width, this.height);
    pop();
    
    
    }
    
    }