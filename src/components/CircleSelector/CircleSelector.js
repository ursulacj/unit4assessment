import React, { Component } from 'react';
import './CircleSelector.css'

const CircleSelector = (props) => {
    return (
        <div className="CircleSelector">
            <button onClick={props.handleClick1} className={props.button1Selected ? 'selected' : 'unselected'}>Select Circle 1</button>
            <button onClick={props.handleClick2} className={props.button2Selected ? 'selected' : 'unselected'}>Select Circle 2</button>
            <button onClick={props.handleClick3} className={props.button3Selected ? 'selected' : 'unselected'}>Select Circle 3</button>
            <button onClick={props.handleClick4} className={props.button4Selected ? 'selected' : 'unselected'}>Select Circle 4</button>
        </div>
    )
}
export default CircleSelector