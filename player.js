class Player{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        //this.body = Bodies.rectangle(x,y,50,50);
          // World.add(world,this.body)
        this.image = loadImage("IMAGES/Wraith_01_Attack_001.png")
        }
display(){

    
image(this.image,this.x,this.y,50,50);
if(keyDown(UP_ARROW)){
    this.y = this.y-10;
}
if(keyDown(DOWN_ARROW)){
    this.y = this.y+10;
    
}
if(keyDown(LEFT_ARROW)){
    this.x = this.x-10;
  
}
if(keyDown(RIGHT_ARROW)){
    this.x = this.x+10;
    
}



}



}
