const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var box1;
var bird;
var pig, pig2;
var pg 
function preload ()
{
    pg=loadImage("bg.png")
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    log1= new Log(748,696,282,20,0)
    log2= new Log(748,590,282,20,0)
    bird= new Bird(100,100)
    pig= new Pig(746,656,50,50)
    pig2 = new Pig(750,650,50,50)

    box1 = new Box(650,700,80,80);
    box2 = new Box(850,700,80,80);
    box3 = new Box(650,642,80,80)
    box4 = new Box(850,642,80,80)
    box5 = new Box(750,530,80,80)
    log3 = new Log(680,380,20,230,PI/7)
    log4 = new Log(774,380,20,229,PI/-7,)
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(pg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box4.display()
    ground.display();
    pig.display()
    pig2.display()
    box3.display()
    bird.display()
    log3.display()
    box5.display()
    log4.display()
    log1.display()
    log2.display()
    text("  x:  " + mouseX + "   y: " + mouseY,mouseX,mouseY)
}