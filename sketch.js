const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground, polygonimage, stand1, baseblock1, stand2, baseblock2

/*function preload() {
    polygonimage = loadImage("polygon.png")
}*/

function setup() {
    createCanvas(1000, 500)

    engine = Engine.create(); 
    world = engine.world;

    ground = new Ground(450, 490, 1100, 20)
    stand1 = new Ground(200, 350, 300, 20)
    stand2 = new Ground(700, 200, 250, 20)

    //level one (bottom) for stand 1 (left side)
    baseblock1 = new boxes(200, 100, 50, 70)
    baseblock2 = new base(500, 100, 50, 70)
    console.log(baseblock1)
}

function draw() {
    background(0)
    rectMode(CENTER)

    ground.display()
    stand1.display()
    stand2.display()

    baseblock1.display()
    baseblock2.display()
}