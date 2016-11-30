import React from 'react';

import NavigationComponent from './Navigation';

export default class MainComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <NavigationComponent/>
                    </div>
                </div>
            </div>
        )    
    }
}