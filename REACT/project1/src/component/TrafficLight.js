import React, { Component } from 'react';
import './TrafficLight.css'

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

function TrafficLight() {
    constructor(props) 
        super(props);
        this.currenColor = RED;
    }

    getNextColor(color)
        switch (color) {
        case RED:
            return ORANGE;
        case ORANGE:
            return GREEN;
        case GREEN:
            return RED;
        default:
             RED;
        }
   

    return (
             <div className="TrafficLight">
                <div className="bulb red" />
                <div className="bulb orange" />
                <div className="bulb green" />
            </div>
        );


export default TrafficLight
