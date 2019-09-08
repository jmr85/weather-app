import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemparature from './WeatherTemperature';
import PropTypes from 'prop-types';
import {
    CLOUD, 
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../../constants/weathers';
import './styles.css';
const WeatherData = () => (
    //param: humedad y viento
    <div className="weatherDataCont">
        <WeatherTemparature temperature={20} weatherState={SUN}/>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>     
    </div>
    
);

export default WeatherData;