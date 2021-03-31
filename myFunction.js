function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
      
      return true;
    }
    else {
      return false;
    } 
  }

  function bounceOff(object1,object2){
if ((object1.y - object2.y) < (object2.height/2 + object1.height/2)
  || (object2.y - object1.y) < (object2.height/2 + object1.height/2)){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}
}



function Edges(object){
  if (object.x > (1200 - object.width/2) || object.x < 0 + (object.width/2)){
    object.velocityX = object.velocityX * (-1);
  }
  if (object.y < (0 + object.height/2)){
    object.velocityY = object.velocityY * (-1);
  } 
  }