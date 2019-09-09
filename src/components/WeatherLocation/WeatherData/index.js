import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemparature from './WeatherTemperature';

import './styles.css';
const WeatherData = ({data: {temperature,weatherState,humidity,wind}}) => (
    //param: humedad y viento
    <div className="weatherDataCont">
        <WeatherTemparature temperature={temperature} weatherState={weatherState}/>
        <WeatherExtraInfo humidity={humidity} wind={wind}/>     
    </div>
    
);
/*
se abre/cierra con parentesis porque el mismo es un return
antes o despues del div se le agrega una variable se 
considera como mas de una linea entonces ahi iria encerrado
con llaves el const WeatherData
*/

WeatherData.propTypes = {
    // shape() espera un objeto con determinada forma
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};
export default WeatherData;