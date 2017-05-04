import React from 'react';
import './style.css';
import logo from '../../logo.svg';

export default function Introduction() {
    return (
        <div className="intro">
            <h2>
                <img className="react-logo" src={logo} alto="logo" />
                <b>React.js</b>
                <h3>A brief introduction.</h3>
            </h2>
        </div>
    );
}
