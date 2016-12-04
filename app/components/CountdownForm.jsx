import React from 'react';

export default class CountdownFormComponent extends React.Component {

    render() {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit.bind(this)} className="countdown-form" >
                    <input type="text" ref="seconds" placeholder="seconds" />
                    <button className="button expanded" >Start</button>
                </form>
            </div>
        );
    }

    onSubmit(e){
        e.preventDefault();

        let strSeconds = this.refs.seconds.value;
        if(/^[0-9]+$/.test(strSeconds)) {
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(strSeconds, 10)); 
        }
    }
}