class Fruit{

    constructor(x,y,width,height){
        
        var groundOption = {
            isStatic : true
          }
        
        
        this.width= width;
        this.height= height;
        this.image2=loadImage("fruit.png")
          this.body= Bodies.rectangle(x,y,width,height,groundOption);
          World.add(world,this.body);
        
    }

    display(){

        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image2,pos.x,pos.y,this.width,this.height);

    }


}