class Log extends Baseclass {

    constructor(x, y, width, height,angle) {
     super(x,y,width,height,angle)
      Matter.Body.setAngle(this.body,angle)
      this.image=loadImage("wood2.png")
    }
  }
   