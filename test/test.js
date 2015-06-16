'use strict'

var assert = require('assert'),
  ndarray = require('ndarray'),
  dger = require('../lib'),
  ndt = require('ndarray-tests');

describe("dger()", function() {

  var A, x, y, x0, y0, alpha;

  beforeEach(function() {
    A = ndarray([1, 2, 3, 4, 5, 6], [2, 3], [1, 2]);
    x = ndarray([1, 2]);
    x0 = ndarray([1, 2]);
    y = ndarray([3, 4, 5]);
    y0 = ndarray([3, 4, 5]);
    alpha = -4;
  });

  it('dger', function() {
    assert(dger(alpha, x, y, A));
    assert(ndt.approximatelyEqual(ndarray([3 * alpha + 1, 6 * alpha + 2, 4 * alpha + 3, 8 * alpha + 4, 5 * alpha + 5, 10 * alpha + 6], [2, 3], [1, 2]), A, 1e-8), 'A contains the answer');
    assert(ndt.approximatelyEqual(y0, y, 1e-8), 'y is unchanged');
    assert(ndt.approximatelyEqual(x0, x, 1e-8), 'x is unchanged');
  });
});
