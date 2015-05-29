# ndarray-blas-gemv

[![npm version](https://badge.fury.io/js/ndarray-blas-dger.svg)](http://badge.fury.io/js/ndarray-blas-dger) [![Dependency Status](https://david-dm.org/jalava/ndarray-blas-dger.svg)](https://david-dm.org/jalava/ndarray-blas-dger)

BLAS Level 2 DGER for [ndarrays](https://github.com/scijs/ndarray)

## Usage

#### `dger( alpha, A, x, y )`
Performs the rank 1 operation `A <- alpha * x * yT * A` for scalar alpha, m element vector x, n element vector y and m x n element matrix A.

Result is overwritten in matrix A. All other inputs are unchanged.

## Example

```javascript
var dger = require('ndarray-blas-dger')

var A = ndarray([1,2,5,3], [2,2]),
    x = ndarray([-4,7]),
    y = ndarray([3,-2])

dger( -4, x, y, A );

// Result: A = [-34, -8]
```

## Credits
(c) 2015 Jalmari Raippalinna. MIT License
