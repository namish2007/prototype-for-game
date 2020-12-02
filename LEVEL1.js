class ground{
    constructor(x,y,width,height){
        var options= {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
     var pos = this.body.position;
     rectMode(CENTER);
    fill("blue");
    rect(400,400,800,120);
    }
}