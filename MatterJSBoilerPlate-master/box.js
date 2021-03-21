class Box {

    constructor(x,y,width,height){

        var groundOption = {
            isStatic : true
          }
        
        
        this.width= width;
        this.height= height;
          this.body= Bodies.rectangle(x,y,width,height,groundOption);
          World.add(world,this.body);
        
    }

    display(){

        var pos = this.body.position;

        fill("white");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);

    }


}