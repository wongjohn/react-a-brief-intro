import React, { Component } from 'react';
import {Impress, Step} from 'react-impressjs';
import 'react-impressjs/styles/react-impressjs.css';
import './App.css';
import Introduction from './subjects/Introduction';
import Performance from './subjects/Performance';
import WhatMakesReactSpecial from './subjects/WhatMakesReactSpecial';
import OriginStory from './subjects/OriginStory';
import CreationApproaches from './subjects/CreationApproaches';
import ClassVsStateless from './subjects/ClassVsStateless';
import ContainerVsPresentational from './subjects/ContainerVsPresentational';
import HighOrderComponent from './subjects/HighOrderComponent';
import IntegratingWithOtherLibraries from './subjects/IntegratingWithOtherLibraries';

class App extends Component {
    render() {
        return (
            <Impress
                rootData={{transitionDuration: 100}}
                progress={true}
                fallbackMessage={<p>Sorry, your <b>device or browser</b> couldn't support well.</p>}
                >
                <Step data={{x:-1600, y:-1500, scale: 1}}>
                    <Introduction />
                </Step>
                <Step data={{x:-2600, y:-1200, scale: 1}}>
                    <Performance />
                </Step>
                <Step data={{x:-1600, y:-1200, scale: 1}}>
                    <WhatMakesReactSpecial />
                </Step>
                <Step data={{x:-600, y:-1200, scale: 1}}>
                    <OriginStory />
                </Step>
                <Step data={{x: 1000, y:-1500, scale: 1}}>
                    <CreationApproaches />
                </Step>
                <Step data={{x: 2000, y:-1500, scale: 1}}>
                    <ClassVsStateless />
                </Step>
                <Step data={{x: 3000, y:-1500, scale: 1}}>
                    <ContainerVsPresentational />
                </Step>
                <Step data={{x: 4000, y:-1500, scale: 1}}>
                    <HighOrderComponent />
                </Step>
                <Step data={{x: 5000, y:-1500, scale: 1}}>
                    <IntegratingWithOtherLibraries />
                </Step>
            </Impress>
        );
    }
}

export default App;
