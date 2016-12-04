import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');

import CountdownFormComponent from '../../components/CountdownForm';

describe('CountdownForm', ()=> {

    it('shoud exist', ()=> {
        expect(CountdownFormComponent).toExist();
    });

    it('should not call onSetCountDown if invalid', ()=> {
        let spy = expect.createSpy();
        let countdownForm = TestUtils.renderIntoDocument(<CountdownFormComponent onSetCountdown={spy}/>);
        let $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = 'ret';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

    it('should call onSetCountDown if valid', ()=> {
        let spy = expect.createSpy();
        let countdownForm = TestUtils.renderIntoDocument(<CountdownFormComponent onSetCountdown={spy} />)
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '123';
        
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toHaveBeenCalledWith(123);
    });
})