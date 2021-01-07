class Mango {
    constructor(x, y, radius) {
      var options = {
          isStatic:true,
          restitution:0,
          friction:1,
      }
      this.x=x
      this.y=y
      this.r=r
      this.body = Bodies.circle(this.x,this.y,this.r, options);
      
      
      this.image = loadImage("images/mango.png");
  
      World.add(world, this.body);
   
    }
  };