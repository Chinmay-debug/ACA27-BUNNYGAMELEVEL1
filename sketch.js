var player;
var target;
var edges;


function setup() {
createCanvas(600,600);

edges=createEdgeSprites();
player = createSprite(40,550,30,30);
target = createSprite(560,40,30,30);
obs1 = createSprite(300,120,100,20);
obs1.velocityX = 5;
obs2 = createSprite(300,320,100,20);
obs2.velocityX = -5;
obs3 = createSprite(150,120,100,20);
obs3.velocityX = 5;
obs4 = createSprite(200,120,100,20);
obs4.velocityX = -5;
obs5 = createSprite(150,320,100,20);
obs5.velocityX = 5;
obs6 = createSprite(120,320,100,20);
obs6.velocityX = -5;
target.shapeColor = "pink"
obs2.shapeColor = "red"
obs1.shapeColor = "red"
obs3.shapeColor = "red"
obs4.shapeColor = "red" 
obs5.shapeColor = "red" 
obs6.shapeColor = "red" 
player.shapeColor = "white"
}

function draw() {
background("green");
   
  
player.bounceOff(edges[0]);
player.bounceOff(edges[1]);
player.bounceOff(edges[2]);
player.bounceOff(edges[3]);
obs1.bounceOff(edges[1]);
obs1.bounceOff(edges[0]);
obs2.bounceOff(edges[1]);
obs2.bounceOff(edges[0]);
obs3.bounceOff(edges[1]);
obs3.bounceOff(edges[0]);
obs4.bounceOff(edges[1]);
obs4.bounceOff(edges[0]);
obs5.bounceOff(edges[1]);
obs5.bounceOff(edges[0]);
obs6.bounceOff(edges[1]);
obs6.bounceOff(edges[0]);


if(keyDown("up")){
  player.y=player.y-3;
}

if(keyDown("down")){
  player.y=player.y+3;
}

if(keyDown("left")){
  player.x=player.x-3;
}

if(keyDown("right")){
  player.x=player.x+3;
}

if(player.isTouching(target)){
 
 text("YOU WIN",300,300);
}


if (player.isTouching(obs1)){
  player.x = 40;
  player.y = 500;
  text("YOU LOSE",300,300);
  noLoop();
}

if(player.isTouching(obs2)){
  player.x = 40;
  player.y = 500;
 text("YOU LOSE",300,300);
}

if(player.isTouching(obs3)){
  player.x = 40;
  player.y = 500;
  text("YOU LOSE",300,300);
}

if(player.isTouching(obs4)){
  player.x = 40;
  player.y = 500;
 text("YOU LOSE",300,300);
}

if(player.isTouching(obs5)){
  player.x = 40;
  player.y = 500;
 text("YOU LOSE",300,300);
}

if(player.isTouching(obs6)){
  player.x = 40;
  player.y = 500;
 text("YOU LOSE",300,300);
}

 drawSprites();
}
