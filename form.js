class form{

constructor(){

    this.button1 = createButton('Feed Food');
    this.button2 = createButton('Get Food');
    this.play= createButton('Lets Play In Garden');
    this.bath=createButton("I want to take a Bath")
    this.bedroom=createButton('I want to Sleep')
   this.play2=createButton('Lets PLay')
    this.eat=createButton('Lets Eat')
}

display(){
 
this.button1.position(310,50)
this.button2.position(400,50)
this.bath.position(480,50)  
this.play.position(630,50)
this.bedroom.position(520,90)
 this.play2.position(430,90)
 this.eat.position(630,90)
this.button1.mousePressed(() => {

food1.writeStock(foodS);
dog.addImage(happyDog)
 

})

this.eat.mousePressed(() =>{

update('Hungry')

})
this.button2.mousePressed(() => {

  food1.getFood();

   })

this.play.mousePressed(() =>{

food1.garden()

})

this.bath.mousePressed(() =>{

    food1.bathroom()
  
  })
  
  this.bedroom.mousePressed(() =>{

  food1.bedroom()


  })

this.play2.mousePressed(() =>{

food1.livingRoom()

})

  }
}