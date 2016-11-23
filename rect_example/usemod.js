var rect = require('./rect-2');



rect(3,3, function(error, balls){

  if(error != null)
  {
    console.log("didnt work");
    return;
  }


  console.log(balls.area());
  console.log(balls.perimeter());
});
