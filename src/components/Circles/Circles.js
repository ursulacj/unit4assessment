import React, { Component } from 'react';
import './Circles.css';

const Circles = (props) => {
    return (
        <div className="Circles">
            <div className={props.button1Selected ? 'selected' : 'unselected'}>1</div>
            <div className={props.button2Selected ? 'selected' : 'unselected'}>2</div>
            <div className={props.button3Selected ? 'selected' : 'unselected'}>3</div>
            <div className={props.button4Selected ? 'selected' : 'unselected'}>4</div>
        </div>
    )
}
export default Circles