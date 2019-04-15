import React, { Component } from 'react';
import './CircleSelector.css'

const CircleSelector = (props) => {
    return (
        <div className="CircleSelector">
            <button onClick={props.handleClick1} className={props.button1Selected ? 'selected' : 'unselected'}>{props.button1Selected ? 'Circle 1 Selected' : 'Select Circle 1'}</button>
            <button onClick={props.handleClick2} className={props.button2Selected ? 'selected' : 'unselected'}>{props.button2Selected ? 'Circle 2 Selected' : 'Select Circle 2'}</button>
            <button onClick={props.handleClick3} className={props.button3Selected ? 'selected' : 'unselected'}>{props.button3Selected ? 'Circle 3 Selected' : 'Select Circle 3'}</button>
            <button onClick={props.handleClick4} className={props.button4Selected ? 'selected' : 'unselected'}>{props.button4Selected ? 'Circle 4 Selected' : 'Select Circle 4'}</button>
        </div>
    )
}
export default CircleSelector