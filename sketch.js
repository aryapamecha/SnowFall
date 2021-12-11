const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Body = Matter.Body;
var maxDrops=50;
var drops=[];
var engine, world;
var bg;

function preload() {
  bg = loadImage("snow1.jpg");
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  if(frameCount % 200 === 0)
  {
    for(var i=0; i<maxDrops; i++)
    {
      var a = new Snow(random(0,700), random(0,700));
      drops.push(a)
    }
  }
}


function draw() {
  background(bg);  
  Engine.update(engine);
  for(var i=0; i<maxDrops; i++)
  {
    drops[i].display();
    drops[i].update();
  }
}