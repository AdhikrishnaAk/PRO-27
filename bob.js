class Bob{
    constructor(x,y,r){
      var options={
       isStatic:true,
       retitution:0.3,
       friction:0.5,
       density:0.44

      } 
      this.body=Bodies.circle(x,y,r,options)
      this.radius=r;
      
       
       World.add(world,this.body) 
      }
  display(){
    push()
   fill("#FE248F")
    translate(this.body.position.x,this.body.position.y) 
    ellipseMode(RADIUS)
    ellipse(0,0,this.radius)
    pop()
  }
  }