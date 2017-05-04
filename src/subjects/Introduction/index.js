import React from 'react';
import './style.css';
import logo from '../../logo.svg';

export default function Introduction() {
    return (
        <div className="intro">
            <h2><img className="react-logo" src={logo} alt="logo" /><b>React.js</b></h2>
            <h3>A brief introduction.</h3>
        </div>
    );
}
