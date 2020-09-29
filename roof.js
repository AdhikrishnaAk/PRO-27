class Roof {
    constructor (x,y,w,h){
      var stop={
        isStatic:true
      }
      
      
        this.body=Bodies.rectangle(x,y,w,h,stop)
        this.width=w;
        this.height=h;
        World.add(world,this.body) 
    }
   display(){
     push()
   translate(this.body.position.x,this.body.position.y)
     fill("#FE248F")
     rectMode(CENTER)
     rect(0,0,this.width,this.height)
     pop()
   }
   } 
      