class Baseclass{
    constructor(x,y,w,h,a)
    {
        var Options= {restitution:1,friction:1,density:0.8}
        this.body=Bodies.rectangle(x,y,w,h,Options)
        World.add(world,this.body)
this.width=w
this.height=h
this.image=loadImage("base.png")


    }
    
    
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill(255);
        image(this.image,0, 0, this.width, this.height);
        pop();
      }
    
    
     
}