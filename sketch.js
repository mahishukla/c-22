const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var ground,ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  var prop=
  {
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,20,prop);
  World.add(world,ground)

  var ball_prop=
  {
    restitution:1,
    frictionAir:0.02
  }
  ball=Bodies.circle(200,100,20,ball_prop);
  World.add(world,ball);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,200,20)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
}