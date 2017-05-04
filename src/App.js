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
import ContainerIntro from './subjects/ContainerIntro';
import ContainerIntro1 from './subjects/ContainerIntro1';
import ContainerIntro2 from './subjects/ContainerIntro2';
import ContainerQ from './subjects/ContainerQ';
import ContainerVsPresentational from './subjects/ContainerVsPresentational';
import HigherOrderComponent from './subjects/HigherOrderComponent';
import OtherResources from './subjects/OtherResources';

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
                <Step data={{x:-2600, y:-700, scale: 1}}>
                    <Performance />
                </Step>
                <Step data={{x:-1600, y:-700, scale: 1}}>
                    <WhatMakesReactSpecial />
                </Step>
                <Step data={{x:-600, y:-700, scale: 1}}>
                    <OriginStory />
                </Step>
                <Step id={"creationApproach"} data={{x: 1000, y:-1500, scale: 1}}>
                    <CreationApproaches />
                </Step>
                <Step data={{x: 1000, y:-500, scale: 1}}>
                    <ClassVsStateless />
                </Step>
                <Step data={{x: 2000, y:-1500, scale: 1}}>
                    <ContainerVsPresentational />
                </Step>
                <Step data={{x: 2000, y:-500, scale: 1}}>
                    <ContainerIntro2 />
                </Step>
                <Step data={{x: 2000, y:500, scale: 1}}>
                    <ContainerIntro1 />
                </Step>
                <Step data={{x: 2000, y:1500, scale: 1}}>
                    <ContainerIntro />
                </Step>
                <Step data={{x: 2000, y:2500, scale: 1}}>
                    <ContainerQ />
                </Step>
                <Step data={{x: 3000, y:-1500, scale: 1}}>
                    <HigherOrderComponent />
                </Step>
                <Step data={{x: 4000, y:-1500, scale: 1}}>
                    <OtherResources />
                </Step>
            </Impress>
        );
    }
}

export default App;
