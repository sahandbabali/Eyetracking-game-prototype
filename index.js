//webgazer.begin()
//webgazer.setGazeListener()


//pass df456d


var xprediction;
var yprediction;

var randx;
var randy;

var points;



webgazer.setGazeListener(function(data, elapsedTime) {
      if (data == null) {
          return;
      }
      xprediction = Math.round(data.x); //these x coordinates are relative to the viewport
      yprediction = Math.round(data.y); //these y coordinates are relative to the viewport
     // console.log(elapsedTime); //elapsed time is based on time since begin was called
      
      document.getElementById('xxx').innerText = xprediction;
      document.getElementById('yyy').innerText = xprediction;



  }).begin();



  function setup() {
    createCanvas(1080, 1080);
    randx = random(80, 1000)
    randy = random(80, 1000)
    
  }
  
  function draw() {
    background("#457b9d");

    if(!xprediction || !yprediction){
       xprediction = 0;
       yprediction = 0;
    }

    

    if(!points){
      points = 0;
    }

    noFill();
    strokeWeight(7);
    stroke("#fff")
    circle(randx,randy, 400)

    if(dist(randx, randy, xprediction, yprediction) < 200){
      
      stroke("#00ff00")
      circle(randx,randy, 400)
      fill("#00ff00");
    }
    circle(xprediction,yprediction, 100)
   
    line(randx, randy, xprediction, yprediction);

    

    if(dist(randx, randy, xprediction, yprediction) < 200){
      points = points + 1 ;
    }

    document.getElementById('pointema').innerText = `Points: ${points}`;



  }