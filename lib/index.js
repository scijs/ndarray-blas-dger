'use strict'

function dger(alpha, x, y, A) {
  var m = A.shape[0];
  var n = A.shape[1];
  var temp;

  for(var j=n-1; j>=0; j--) {
    var y1 = y.get(j);
    if(y1 != 0) {
      temp = alpha * y1;
      for(var i= m-1; i>=0; i--) {
        A.set(i,j,A.get(i,j) + x.get(i)*temp);
      }
    }
  }

  return true;
}

module.exports = dger;