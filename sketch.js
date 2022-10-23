flies=[]
function bubble()
{
  this.x=mouseX
  this.y=mouseY
  this.display=()=>
  {
    var c=5
    var f=3
          fill(57, 255, 20)
    ellipse(this.x,this.y,c+random(-f,f),c-random(-f,f))

  }
    this.move=()=>
    {
      this.x=this.x+random(-5,5)
      this.y=this.y+random(-5,5)
    }

}
function setup() {
  
  
  
  createCanvas(window.innerWidth, window.innerHeight);
  for(var i=0;i<flies.length;i++)
    {
  flies[i]=new bubble()
}}

function draw() {
 stroke(255)
  background(30);
   
  
 for(var i=0;i<flies.length;i++)
    {
  flies[i].move();

      flies[i].display()
      
}
  console.log(flies.length)
 
}
function mousePressed()
{
  flies.push(new bubble())
  
}