import React from 'react';

export default class ClockComponent extends React.Component {
    
    static defaultProps = {
        totalSeconds: 0
    }

    static propTypes = {
        totalSeconds: React.PropTypes.number.isRequired
    }

    constructor(props) {
        super(props);
    }

    formatSeconds(totalSeconds) {
        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds/60);

        seconds = seconds < 10 ? '0'+seconds : seconds;
        minutes = minutes < 10 ? '0'+minutes : minutes;

        return minutes + ':' + seconds; 
    };

    render() {
        let { totalSeconds } = this.props;
        return (
            <div className="clock">
                <span className="clock-text">
                    {this.formatSeconds(totalSeconds)}
                </span>
            </div>
        );
    }
}