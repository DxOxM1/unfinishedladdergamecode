var Life = 200

function preload() {

bg = loadImage("images/TwoCliffsBackground.jpg")
TheMonkeyBars = loadImage("images/monkeybars.png")
TheDude = loadImage("images/SurvivorSafe.png")
TheDudeFell = loadImage("images/SurvivorDead.png")






}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  TheBARS = createSprite(width/2, 300, 50, 50);
  TheBARS.addImage(TheMonkeyBars)
  TheBARS.scale = 2.4
  
  ThePlayer = createSprite(width/2, 270, 50, 50);
  ThePlayer.addImage(TheDude)
  ThePlayer.scale = 0.8

  MenuScreenPartOne = createSprite(900,1000,1900,1300);
  MenuScreenPartOne.shapeColor = "black"

  MenuScreenPartTwo = createSprite(900,-100,1900,1300);
  MenuScreenPartTwo.shapeColor = "black"

  DeathBlock = createSprite(180,255,10,10);
  

  BlockThatMovesTheMenuScreenOutOfTheWay = createSprite(200,200,50,50);
  BlockThatMovesTheMenuScreenOutOfTheWay.velocityX = 4
  BlockThatMovesTheMenuScreenOutOfTheWay.visible = false


  TheTouchingBlock = createSprite(900,200,50,50);
  TheTouchingBlock.visible = false
  
  
  

  Button = createButton("Click to keep the Green Bar up")
  Button.position(-200,320)
}

function draw() {
  background(bg);
  Life = Life - 0.1
  fill("white")
  rect(200, 250, 200, 10)
  fill("green")
  rect(200, 250, Life, 10)
  drawSprites();


  
  fill("red")
  textSize(70)
  text("The Ladder Guy",500,300)
  

  Button.mouseClicked(function(){
  Life = Life + 3
  })



  if(TheTouchingBlock.isTouching(BlockThatMovesTheMenuScreenOutOfTheWay)){
    MenuScreenPartOne.velocityY = 30
    MenuScreenPartTwo.velocityY = -30
    Button.position(200,320)
    TheTouchingBlock.destroy()
    BlockThatMovesTheMenuScreenOutOfTheWay.destroy()
    
  }
}

