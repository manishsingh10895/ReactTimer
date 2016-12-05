import React from 'react';

export default class ControlsComponent extends React.Component {
    static propTypes = { 
        countdownStatus : React.PropTypes.string.isRequired
    }

    onStatusChanged(status) {
        switch(status) {
            case 'started': 
                return status;
            case 'paused': 
                return status;
        }
    }

    render() {
        let { countdownStatus } = this.props;
        
        let renderStartStopButtons = () => {
            if(countdownStatus === 'started') {
                return <button onClick={this.onStatusChanged.bind(this, 'started')}  className="button secondary">Pause</button>
            } else if(countdownStatus === 'paused'){
                return <button onClick={this.onStatusChanged.bind(this, 'paused')}  className="button primary">Start</button>
            }
        };

        return(
            <div className="controls">
                {renderStartStopButtons()}
                <button className="button alert hollow">Clear</button>
            </div>
        );
    }
}