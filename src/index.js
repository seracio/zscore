'use strict';

import { mean, deviation } from 'd3-array';

const zcore = inputs => {
    const m = mean(inputs);
    // here the n-1 : http://duramecho.com/Misc/WhyMinusOneInSd.html
    const d = deviation(inputs);
    return inputs.map( i => (i - m) / d );
};

export default zcore;
