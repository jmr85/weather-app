import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

const WeatherLocation = () => (
    // weatherLocationCont es lo mismo que index.js
    <div className="weatherLocationCont">
        <Location city={"Barcelona"}></Location>
        <WeatherData></WeatherData>
    </div>
);
 

export default WeatherLocation;