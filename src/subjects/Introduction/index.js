import React from 'react';
import logo from '../../logo.svg';

export default function Introduction() {
    return (
        <div className="intro">
            <img src={logo} alto="logo" />
            <h2>React.js</h2>
            <h3>A brief introduction.</h3>
        </div>
    );
}
