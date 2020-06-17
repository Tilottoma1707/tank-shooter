const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine, world;
var tanker;
var angle = 0
var canonBall;
var shot;
var ground;
var ball_1, ball_2, ball_3
var launcherX, launcherY;
var flag = "start"

function setup() {
    var canvas = createCanvas(800, 500);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width / 2, height - 10, width, 30);
    tanker = new Tanker(65, height - 80, 70, 30);

    ball_1 = new Ball(700,150,20)
    ball_2 = new Ball(500, 100, 20)
    ball_3 = new Ball(600, 150, 20)
    ball_4 = new Ball(550,270,20);
    ball_5 = new Ball(400,10,20);
    ball_6 = new Ball(450,50,20)
    ball_7 = new Ball(360,50,20);

    canonBall = new CanonBall(20, 20);


    shot = new ShootBall(canonBall.body, { x: 70, y: height - 220 });
}

function draw() {
    background(0,220,255)
    text("Press space to destroy",400,100);
    Matter.Engine.update(engine);
    ground.display()
    ball_2.display()
    ball_1.display()
    ball_3.display();
    ball_4.display()
    ball_5.display();
    ball_6.display();
    ball_7.display();
    canonBall.display();
    tanker.display();
    shot.display();
    if (keyIsDown(32)) {
        shot.attach(canonBall.body)
    }
}

// function keyPressed() {
//   console.log("Hello");
//   if (keyCode === 32) {
//     Matter.Body.setPosition(canonBall.body, {x: 50 , y: height-10})
//   }
// }

function keyReleased() {
    if (keyCode === (32)) {
        flag = "launch"

        shot.shoot()
    }
}