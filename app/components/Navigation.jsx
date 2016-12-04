import React from 'react';
import { Link, IndexLink } from 'react-router';


export default class NavigationComponent extends React.Component {
    render() {
        return (
            <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">
                        React Timer
                    </li>
                    <li className="">
                        <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                    </li>
                    <li >
                        <Link to="/countdown" activeClassName="active-link">Countdown</Link>
                    </li>
                </ul>  
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created by <span className="author-name">Manish</span>
                    </li>
                </ul>
            </div>
        </div>
        );
    }

};