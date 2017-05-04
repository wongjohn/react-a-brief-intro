import React from 'react';
import HighOrderComponentImage from '../images/HigherOrderComponent.png';

export default function HighOrderComponent() {
    return (
        <div>
            <h4>Higher Order Component</h4>
            <img className="demo-image" src={HighOrderComponentImage} alt="High Order Component" />
        </div>
    );
}