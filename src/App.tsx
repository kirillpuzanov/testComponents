import React from 'react';
import './App.css';
import {ScrollComp} from './components/scroll/ScrollComp';
import {ClockContainer} from './components/clock/ClockContainer';



function App() {
    return (
        <div>
            <ScrollComp/>
            <ClockContainer/>
        </div>
    )
}

export default App;
