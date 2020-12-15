class Rope{
    constructor(bodyA,bodyB,OffsetX,OffsetY){

        this.OffsetX = OffsetX;
        this.OffsetY = OffsetY;
        //this.x=rope.x;
        //this.y=rope.y;

        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.OffsetX,y:this.OffsetY},
            
            //stiffness:0.04,
            //length:10
        }

        this.rope=Constraint.create(options);
        //Constraint.pointB={x:0,y:0};
        World.add(world,this.rope);
    }
   display(){
    var pointA=this.rope.bodyA.position;
    var pointB=this.rope.bodyB.position;
    strokeWeight(2);
    line(pointA.x,pointA.y,pointB.x-150,pointB.y);
    line(pointA.x+50,pointA.y,pointB.x-100,pointB.y);
    line(pointA.x+100,pointA.y,pointB.x-50,pointB.y);
    line(pointA.x+150,pointA.y,pointB.x,pointB.y);
    line(pointA.x+200,pointA.y,pointB.x+50,pointB.y);
    line(pointA.x+250,pointA.y,pointB.x+100,pointB.y);
    line(pointA.x+300,pointA.y,pointB.x+150,pointB.y);

   }
   

}