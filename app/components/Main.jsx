import React from 'react';

import NavigationComponent from './Navigation';

export default class MainComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <NavigationComponent/>
                <div className="row">
                    <div className="col small-centered medium-6 large-4">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}