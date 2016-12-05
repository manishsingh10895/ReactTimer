import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');

import ControlsComponent from '../../components/Controls';

describe('Controls', ()=> {
    it('should exist', ()=> {
        expect(ControlsComponent).toExist();
    });

    describe('render', ()=> {
        it('should render pause when started', ()=> {
            let countdownStatus = 'started';
            let controls = TestUtils.renderIntoDocument(<ControlsComponent countdownStatus={countdownStatus}/>);
            let $el = $(ReactDOM.findDOMNode(controls));
            
            let $pauseButton = $el.find('button:contains(Pause)');

            expect($pauseButton.length).toBe(1);
        });

        it('should render start when paused', ()=> {
            let countdownStatus = 'paused';
            let controls = TestUtils.renderIntoDocument(<ControlsComponent countdownStatus={countdownStatus}/>);
            let $el = $(ReactDOM.findDOMNode(controls));

            let $startButton = $el.find('button:contains(Start)');

            expect($startButton.length).toBe(1);
        });
    });

    describe('On Click handle', ()=> {
        it('should call onStatusChange with relevant parameter', ()=> {
            let countdownStatus = 'paused';
            let controls = TestUtils.renderIntoDocument(<ControlsComponent countdownStatus={countdownStatus}/>);
            let spy = expect.createSpy();

            let $el = $(ReactDOM.findDOMNode(controls));

            let $startButton = $el.find('button:contains(Start)');
            console.log($el);
            TestUtils.Simulate.click($startButton);

            expect(spy).toHaveBeenCalledWith('started');
        });
    });
});