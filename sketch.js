var Andybur;


function setup() {
  createCanvas(400,400);
  Andybur=createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    Andybur.position.x=Andybur.position.x+5;
  }
  if(keyIsDown(LEFT_ARROW)){
  Andybur.position.x=Andybur.position.x-5;
  }
  if(keyIsDown(UP_ARROW)){
    Andybur.position.y=Andybur.position.y-5;
  }
  if(keyIsDown(DOWN_ARROW)){
    Andybur.position.y=Andybur.position.y+5;
  }
drawSprites();
}




