import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');

import CountdownComponent from '../../components/Countdown';

describe('Countdown', ()=> {
    it('should exist', ()=> {
        expect(CountdownComponent).toExist();
    });

    describe('handleSetCountdown', ()=> {
        it('should set state to started and count down', (done)=> {
            let countdown = TestUtils.renderIntoDocument(<CountdownComponent/>);
            let initialCount = 10;

            countdown.onSetCountdown(initialCount);

            expect(countdown.state.count).toBe(initialCount);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(()=> {
                expect(countdown.state.count).toBe(initialCount - 1);
                done();
            },1000);
        });
    });
});