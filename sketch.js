const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var backgroundimage
var snowflake1
var snowflake2
var snowflake3
var snowflake4
var snowflake5
function preload(){
 backgroundimage= loadImage("snow2.jpg")
}

function setup() {
  createCanvas(800,400);
  engine= Engine.create()
  world= engine.world
  snowflake1=new Snowflake(140,0,50)
  snowflake2=new Snowflake(170,0,50)
  snowflake3=new Snowflake(200, 0, 50)
  snowflake4=new Snowflake(230,0,50)
  snowflake5=new Snowflake(260,0,50)
}

function draw() {
  background(backgroundimage)
  Engine.update(engine)
  snowflake1.display()
  snowflake2.display()
  snowflake3.display()
  snowflake4.display()
  snowflake5.display()
  
}