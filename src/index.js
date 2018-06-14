'use strict';

import { mean, deviation } from 'd3-array';

const zcore = (inputs, accessor) => {
    const m = mean(inputs, accessor);
    // here the n-1 : http://duramecho.com/Misc/WhyMinusOneInSd.html
    const d = deviation(inputs, accessor);
    const getInput = accessor || ((v) => v);
    return inputs.map(i => (getInput(i) - m) / d);
};

export default zcore;
