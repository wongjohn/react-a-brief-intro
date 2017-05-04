import React from 'react';
import ContainerVsPresentationalImage from '../images/ContainerVsPresentational.png';

export default function ContainerVsPresentational () {
    return (
        <div>
            <h4>Container Vs Presentational </h4>
            <img className="demo-image" src={ContainerVsPresentationalImage} alt="Container Vs Presentational" />
        </div>
    );
}