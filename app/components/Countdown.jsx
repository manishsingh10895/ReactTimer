import React from 'react';
import ClockComponent from './Clock';
import CountdownFormComponent from './CountdownForm';

export default class CountdownComponent extends React.Component{
    

    constructor(props) {
        super(props);
        
        this.state = { count: 0, countdownStatus: 'stopped' };
    }

    render() {
        return (
            <div>
                <ClockComponent totalSeconds={this.state.count}/>
                <CountdownFormComponent onSetCountdown={this.onSetCountdown.bind(this)} />
            </div>
        );
    }

    stopTimer() {
        clearInterval(this.timer);
    }

    pauseTimer() {
        
    }

    startTimer() {
        this.timer = setInterval(()=> {
            let count = this.state.count - 1;
            this.setState({ count: count });

            if(count === 0) this.setState({ countdownStatus: 'stopped' });
            
        },1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.countdownStatus !== this.state.countdownStatus) {
            switch(this.state.countdownStatus) {
                case 'started' :
                    this.startTimer(); 
                    break;
                case 'paused': 
                    this.pauseTimer();
                    break;
                case 'stopped':
                    this.stopTimer();
                    break;
                default: break;
            }
        }
    }

    onSetCountdown(seconds) {
        this.setState({ count: seconds, countdownStatus: 'started' });
    }


}
  