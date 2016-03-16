'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _d3Array = require('d3-array');

var zcore = function zcore(inputs) {
    var m = (0, _d3Array.mean)(inputs);
    // here the n-1 : http://duramecho.com/Misc/WhyMinusOneInSd.html
    var d = (0, _d3Array.deviation)(inputs);
    return inputs.map(function (i) {
        return (i - m) / d;
    });
};

exports.default = zcore;