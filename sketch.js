var dog, dogimg, happyDog, database, foodS, foodStock;
var lastFed,milkImg,food1,f1,h1,beach,readState,pimg,bimg,bathImg,ctime,gameState;
var milksprite;


function preload() {
  
  dogimg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
  milkImg=loadImage("milk.png")
 beach = loadImage("beach.png")
  pimg = loadImage("playing.png") 
  bimg = loadImage("bedroom.png")
  bathImg = loadImage("bath.png")
  livingRoom = loadImage("room.png")

}

function setup() {
  createCanvas(1000, 500);
  food1 = new food();
  milksprite=createSprite(250,350);
  milksprite.addImage(milkImg)
  milksprite.scale=0.05
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value", food1.readStock);
  dog = createSprite(750, 350, 50, 50)
 dog.addImage(dogimg)
 dog.scale=0.3;
 f1= new form()
 

readState=database.ref('gameState');
readState.on("value",function(data){

gameState=data.val();

})

getlastFed=database.ref('lastFed');
getlastFed.on("value",function(data){
lastFed=data.val();

})

}


function draw() {

  if (gameState === "Hungry"){
  f1.display();
  background(beach)
  }
      
if (gameState === "Hungry"){

food1.display();
drawSprites();

}
  //fill("black")
  //text("Food Remaining: "+foodS,230,100)
console.log(lastFed)
  textSize(20)
  textFont("fantasy")
  fill(rgb(random(0,255),random(0,255),random(0,255)))
 if (lastFed>12){

  text("Last Fed : "+ lastFed%12 + " PM",550,25 )
}
  else if (lastFed == 0) {
    
text("Last Fed : 12 AM",550,25);

 } else{

text("Last Fed : " + lastFed +" AM",550,25)

 }

ctime = hour();
/*
if (ctime == (lastFed+1)){

  update("Playing");
  food1.garden()
}
else if (ctime == (lastFed+2)) {
  
update("sleeping")  
food1.bedroom()

} else if (ctime>(lastFed+2) && ctime <= (lastFed + 4 )){

 update("bathing") 
food1.bathroom()

} else{

update("Hungry")
food1.display()
 f1.display()

}

*/

if (ctime >= lastFed+4){

  update("Hungry")
  food1.display()
   f1.display()

 //image()  

}
console.log(gameState)

if (gameState === 2){

 // dog.addImage(pimg,550,50)
  background(pimg,550,50)

}

if (gameState === 3){

  
  background(bathImg,550,500)
}

if (gameState === 5){

  
  background(bimg,550,500)
}


if (gameState === 4){

 
  background(livingRoom,550,500)
}


if (gameState === 'Hungry'){

fill(rgb(random(0,255),random(0,255),random(0,255)))
text("I am your Puppy Astro. I am hungry",300,250)
text("Food Remaining : "+foodS,280,360)
}

}

function readStock(data){

foodS=data.val();



}


function update(state){

database.ref('/').update({

gameState:state,


})

}








