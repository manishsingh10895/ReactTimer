import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');

import ClockComponent from '../../components/Clock';

describe('Clock', ()=> {
    it('should exist', () => {
        expect(ClockComponent).toExist();
    });

    describe('render', () => {
        it('should render clock to output', ()=> {
            let clock = TestUtils.renderIntoDocument(<ClockComponent totalSeconds={62}/>);

            let $el = $(ReactDOM.findDOMNode(clock));
            let actualText = $el.find('.clock-text').text();
            
            expect(actualText).toBe('01:02');
        });
    });

    describe('format Seconds', ()=> {
        it('should return formatted seconds and minutes', ()=> {
            let clock = TestUtils.renderIntoDocument(<ClockComponent/>);
            let seconds = 615;
            let expectedValue = '10:15';
            let actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expectedValue);
        });
    });
});