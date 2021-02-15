
var graden,gardenImage, jerryTeasing, jerryIdle, jerry,tom, tomWalking, tomSitting; 
function preload() {
    gardenImage = loadImage("garden.png");
   jerryTeasing = loadImage("jerryThree.png")
    tomSitting = loadImage("tomOne.png");
    tomWalking = loadImage("tomTwo.png")
    jerryIdle = loadImage("jerryTwo.png")
}

function setup(){
    createCanvas(1000,800);
 garden = createSprite(500,400,1000,800);
   garden.addImage(gardenImage)
  jerry=createSprite(75,650,50,50);
  tom=createSprite(925,650,50,50);
  jerry.addImage(jerryTeasing);
  tom.addImage(tomSitting);
  tom.scale=0.1;
  jerry.scale=0.1;
  tom.debug=true;
  jerry.debug=true;
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide
   
  //  if(abs(tom.x-jerry.x)<tom.width/2+jerry.width/2&&  abs(jerry.y-tom.y)<tom.height/2+jerry.height/2)

 if(tom.isTouching(jerry)) {
   console.log("touching")
  jerry.addImage(jerryIdle);
  jerry.changeImage(jerryIdle)
   tom.addImage(tomSitting)
  tom.velocityX=0;
}
    drawSprites();
}



function keyPressed(){
if(keyDown(LEFT_ARROW)){
  tom.velocityX= -5;
  tom.addImage("tom walking",tomWalking);
  tom.changeImage("tom walking");
  jerry.addImage(jerryTeasing);
  jerry.changeImage(jerryTeasing);

}


 }




 
  
