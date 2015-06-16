'use strict'

var blas1 = require('ndarray-blas-level1')

function dger(alpha, x, y, A) {
  var m = A.shape[0];
  var n = A.shape[1];
  var j, yj, Aj;
  var axpy = blas1.axpy

  Aj = A.pick(null,n-1)

  for( j=n-1; j>=0; j--, Aj.offset-=A.stride[1] ) {

    yj = y.get(j)

    if( yj !== 0 ) {
      axpy( alpha*yj, x, Aj )
    }

  }

  return true;
}

module.exports = dger;
