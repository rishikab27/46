class Pig {

    constructor(x,y,width,height){
        
        var groundOption = {
            isStatic : true
          }
        
        
        this.width= width;
        this.height= height;
        this.image=loadImage("pig.png")
          this.body= Bodies.rectangle(x,y,width,height,groundOption);
          World.add(world,this.body);
        
    }

    display(){

        var pos = this.body.position;

        fill("black");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);

    }


}