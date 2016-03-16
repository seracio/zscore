'use strict';

import { assert } from 'chai';
import zscore from '../src/index';
import { mean, deviation } from 'd3-array';

describe('zscore', () => {

    const data = [30,36,52,42];

    it('should return the z-score', () => {
        assert.deepEqual(zscore(data), [-1.0660035817780524, -0.42640143271122094, 1.2792042981336629, 0.21320071635561047]);
    });

    it('should provide data with a mean of 0', () => {
        const standardizedData = zscore(data);
        const m = mean(standardizedData);
        assert.approximately(m, 0,.01);
    });

    it('should provide data with a standard deviation of 1', () => {
        const standardizedData = zscore(data);
        const d = deviation(standardizedData);
        assert.approximately(d, 1,.01);
    });

});
