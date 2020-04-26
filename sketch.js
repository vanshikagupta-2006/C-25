const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    rd1 = new rd;
    rd2 = new rd;
    rd3 = new rd;
    rd4 = new rd;
    rd4 = new rd;
    rd5 = new rd;
    rd6 = new rd;
    rd7 = new rd;
    rd8 = new rd;
    rd9 = new rd;
    rd10 = new rd;
    rd11 = new rd;
    rd12 = new rd;
    

}

function draw(){
    background("green");
    rd1.display();
    rd2.display();
    rd3.display();
    rd4.display();
    rd5.display();
    rd6.display();
    rd7.display();
    rd8.display();
    rd9.display();
    rd10.display();
    rd11.display();
    rd12.display();
}
