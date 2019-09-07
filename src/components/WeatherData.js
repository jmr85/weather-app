import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemparature from './WeatherTemperature';

const WeatherData = () => (
    //param: humedad y viento
    <div>
        <WeatherTemparature/>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>     
    </div>
    
);

export default WeatherData;