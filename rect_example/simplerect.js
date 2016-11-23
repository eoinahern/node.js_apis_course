var rec = {
  perimeter:  function(x, y){
    return (2* (x *y));
  },
  area : function(x, y){
    return x * y;
  }
};


function solveRect(l,b){

  if(l < 0 || b < 0)
  {
    console.log("no vals less that 1");
  }
  else
  {
    console.log("length =" + l + "breath = " + b + " " );
    console.log("area = " + rec.area(l,b));
    console.log("perimeter = " + rec.perimeter(l,b));

  }

};


solveRect(1,2);
solveRect(3,3);
