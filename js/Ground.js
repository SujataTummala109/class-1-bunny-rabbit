class Ground{

    constructor(){
        // var ground_options={
        //     isStatic : true
        //   }
        
          this.ground = Bodies.rectangle(450,390,900,20,{
            isStatic : true
          })
          World.add(world,this.ground);
          console.log(this.ground)
    }
    display(){
        noStroke();
        fill("blue");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
}