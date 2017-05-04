import React from 'react';
import './style.css';
import logo from '../../logo.svg';

export default function Introduction() {
    return (
        <div className="intro">
            <img className="react-logo" src={logo} alt="logo" />
            <h2><b>React.js</b></h2>
            <h3>A brief introduction.</h3>
        </div>
    );
}
