function random(min, max, fixed) {
  return (Math.random() * (max - min) + min).toFixed(fixed);
}
function freshDot(){
    this.obj = document.createElement("div");
    this.obj.classList.add("box");
    this.obj.style.top = (window.innerHeight * Math.random()) + 'px';
    this.obj.style.left = (window.innerWidth * Math.random()) + 'px';
  this.obj.style.animation = "hover "+random(8,20,0)+"s infinite";
 this.obj.style.animationDelay = random(0,5,2)+'s';
  var reverse = random(1,2,0);

  if(reverse == 2){
    this.obj.style.animationDirection = "reverse";
  }
    this.obj.style.height =  random(10,200, 0) + 'px';
    this.obj.style.width = random(10,200, 0) + 'px';
    document.body.appendChild(this.obj);
  }
  var dot = [];
  for(var i = 0 ; i < random(10,50, 0); i++ ){
    dot.push(new freshDot());
  }
