import React from 'react';

export default function ClassVsStateless() {
    return (
        <div>
            <h2>Class Component VS Stateless Component</h2>
            <div>
                <h3>Class Component</h3>
                <ul>
                    <li>State</li>
                    <li>Refs</li>
                    <li>Lifecycle methods</li>
                    <li>Child functions (for performance)</li>
                </ul>
            </div>
            <div>
                <h3>Stateless Component</h3>
                <ul>
                    <li>Everywhere else</li>
                </ul>
            </div>
        </div>
    );
}