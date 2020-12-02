const Engine = Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;

var playerCount;
var allPlayers;
var database,canvas,platform;

var engine,world,backfround;
var box1;
function preload(){
backfround = loadImage("IMAGES/backfround.jpg");

}



function setup() {
   canvas = createCanvas(800,400);
  database = firebase.database();
  engine = Engine.create();
  world = engine.world;
  player1 = new Player(400,200,50,50);
 platform = new ground();
}

function draw() {
 background(backfround);  
 player1.display();
 platform.display();
  drawSprites();
}