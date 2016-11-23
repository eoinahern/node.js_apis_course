var rect = require('./rect-1');


function solveRect(l,b){

  if(l < 0 || b < 0)
  {
    console.log("no vals less that 1");
  }
  else
  {
    console.log("length =" + l + "breath = " + b + " " );
    console.log("area = " + rect.area(l,b));
    console.log("perimeter = " + rect.perimeter(l,b));

  }

};


solveRect(5, 5);
solveRect(10,10);
