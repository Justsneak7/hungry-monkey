
var monkey , monkey_running;
var banana ,bananaImage,bananaGroup, obstacle, obstacleImage;

var stone,stoneImage,stoneGroup;
var time = 0;
var ground,groundImg,ground2,groundImg2;
var invisGround;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png",
  "sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  
  
  stoneImage = loadImage("obstacle.png");
  
  groundImg = loadImage("ground.png");
  
  groundImg2 = loadImage("ground (1).png");
 
}



function setup() {
  createCanvas(600,470)
  monkey = createSprite(50,375,15,15);
  monkey.addAnimation("monkeyrun",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,440,2000,10);
  ground.addImage("ground",groundImg);
  ground.scale = 0.4;
  
  ground2 = createSprite(0,440,2000,10);
  ground2.addImage("ground2",groundImg2);
  ground2.scale = 0.4;

  invisGround = createSprite(60,410,1200,10);
  invisGround.visible = false;
  
  stoneGroup = new Group();
  bananaGroup = new Group();
  
}


function draw() {
background("#00FFFF");
  
  if(keyDown("right_arrow")){
       monkey.x = monkey.x + 5;
       }
  if(keyDown("left_arrow")){
      monkey.x = monkey.x - 5; 
  }

  if(keyDown("space")&& monkey.y>=20){
      monkey.velocityY = -13;
     }
     monkey.velocityY = monkey.velocityY + 0.9;

     monkey.collide(invisGround);
     
     monkey.collide(stoneGroup);

  if(bananaGroup.isTouching(monkey)){
      bananaGroup.destroyEach();

  }
  
  obstacles();

  spawnBanana();
  
  drawSprites();
}

function obstacles(){
  stone = createSprite(250,375,15,15);
  stone.addImage("stone",stoneImage);
  stone.scale = 0.2;
  stoneGroup.add(stone)
  stone.setCollider("rectangle",0,100,stone.width = 0,stone.height = 600);
  //stone.debug = true;
}

function spawnBanana(){
  banana = createSprite(250,300,15,15);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  bananaGroup.add(banana);
  //banana.debug = true;

}




