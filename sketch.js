const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
function setup() {
 var canvas = createCanvas(400,400);
engine =  Engine.create(); //engine.world
world = engine.world;

var ground_options = {
  isStatic: true
}

ground = Bodies.rectangle(200,392.5,400,15, ground_options);

World.add(world, ground);
var ball_options ={
  restitution: 1
}
ball = Bodies.circle(200,10,20,ball_options);
World.add(world, ball);
var ball2_options={
  restitution: 1
}
ball2 = Bodies.circle(100,10,15,ball2_options);
World.add(world,ball2);
console.log(ground.position.y);

}

function draw() {
  background("green");  
  Engine.update(engine);
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,15);
 fill("red");
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20)
 fill("yellow");
 ellipseMode(RADIUS);
 ellipse(ball2.position.x,ball2.position.y,15,15);
}