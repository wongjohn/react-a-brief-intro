import React, { Component } from 'react';
import {Impress, Step} from 'react-impressjs';
import 'react-impressjs/styles/react-impressjs.css';
import './App.css';
import Introduction from './subjects/Introduction';
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
                <Step data={{x:-1000, y:-1500}}>
                    <Introduction />
                </Step>
                <Step data={{x: 0, y:-1500}}>
                    <CreationApproaches />
                </Step>
                <Step data={{x: 1000, y:-1500}}>
                    <ClassVsStateless />
                </Step>
                <Step data={{x: 2000, y:-1500}}>
                    <ContainerVsPresentational />
                </Step>
                <Step data={{x: 3000, y:-1500}}>
                    <HighOrderComponent />
                </Step>
                <Step data={{x: 4000, y:-1500}}>
                    <IntegratingWithOtherLibraries />
                </Step>
            </Impress>
        );
    }
}

export default App;
