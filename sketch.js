const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box;
var b2;
var ground
var engine, world;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
box=new Box(200,300,40,40)
 b2=new Box(220,100,40,100) 
 ground=new Ground(200,390,400,20) ;
}

function draw(){
    background(0);
    Engine.update(engine);
    box.Display();
    b2.Display();
    ground.display();
}