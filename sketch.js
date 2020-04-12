const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;
var Piggie;
var Log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground (600,395,1200,10);
    
    box1 = new Box(750,350,70,70);
    box2 = new Box(950,350,70,70);
    box3 = new Box(750,290,70,70);
    box4 = new Box(950,290,70,70);
    box5 = new Box(850,220,70,70);

    Piggie = new Pig(850,350);
    Piggies = new Pig(850,290);
    
    Log1 = new Log(850,320,300,PI/2);
    Log2 = new Log(850,250,300,PI/2);
    Log3 = new Log(800,200,150,PI/4);
    Log4 = new Log(900,200,150,-PI/4);

    Bird1 = new Bird(350,200);
}

function draw(){
    background("yellow");
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    Piggie.display();
    Log1.display();
    Log2.display();
    Piggies.display();
    box3.display();
    box4.display();
    box5.display();
    Log3.display();
    Log4.display();
    Bird1.display();
   
}