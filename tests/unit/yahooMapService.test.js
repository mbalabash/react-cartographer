/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

/* jshint unused:vars */
/* global describe, it, expect */

'use strict';

var expect      = require('chai').expect;

describe('YahooMapService', function () {
    var service = require('../../lib/yahooMap');

    it('#name is "yahoo"', function() {
        expect(service.name).to.equal('yahoo');
    });

    describe('#read', function() {
        it('should handle correct data from service', function () {
            var result = service.getMap({
                mapId: 'map',
                line1: 'line1',
                line2: 'line2',
                line3: 'line3',
                providerKey: 'yahoo',
                width: 300,
                height: 500,
                zoom: 10
            });

            expect(result.mapId).to.equal('map');
            expect(result.data.locationText).to.equal('line1,line2,line3');
            expect(result.data.locationLink).to.equal('http://gws2.maps.yahoo.com/MapImage/' +
                '?appid=yahoo&imw=300&imh=500&imi=1-h-gws-2x&radius=700&zoom=10&q=line1%2Cline2%2Cline3');
        });
    });
});
